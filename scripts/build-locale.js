/**
 * Monta os módulos de conteúdo de um idioma aplicando `i18n/strings.<locale>.json`
 * sobre a estrutura extraída do português.
 *
 *   node scripts/build-locale.js en
 *   node scripts/build-locale.js zh
 *
 * A estrutura (quais blocos, em que ordem, com que slug) vem sempre do pt.
 * O idioma só troca texto. Isso garante que as três versões fiquem alinhadas
 * seção a seção — requisito do hreflang e da troca de idioma sem perder o lugar.
 *
 * String sem tradução cai no português e é reportada, nunca some.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const locale = process.argv[2];

if (!locale || !/^(en|zh)$/.test(locale)) {
  console.error('Uso: node scripts/build-locale.js <en|zh>');
  process.exit(1);
}

const dump = JSON.parse(fs.readFileSync(path.join(ROOT, 'i18n', 'content.pt.json'), 'utf8'));
const stringsPath = path.join(ROOT, 'i18n', `strings.${locale}.json`);

if (!fs.existsSync(stringsPath)) {
  console.error(`Falta ${path.relative(ROOT, stringsPath)}.`);
  console.error('Copie i18n/strings.pt.json, traduza os valores e rode de novo.');
  process.exit(1);
}

const t = JSON.parse(fs.readFileSync(stringsPath, 'utf8'));
const pt = JSON.parse(fs.readFileSync(path.join(ROOT, 'i18n', 'strings.pt.json'), 'utf8'));

const missing = [];
const tr = (key) => {
  const v = t[key];
  if (v === undefined || v === '') {
    if (pt[key] !== undefined) missing.push(key);
    return pt[key];
  }
  return v;
};

/* ------------------------------------------------------------------ */
/* Strings dentro de blocos de código                                  */
/* ------------------------------------------------------------------ */

/**
 * Substitui, no código, as strings humanas pelas traduzidas.
 * Ordena da mais longa para a mais curta para evitar substituição parcial
 * ("Salvar" dentro de "Salvar alterações").
 */
function translateCode(code, keyBase) {
  const pairs = [];
  for (let i = 0; ; i++) {
    const k = `${keyBase}.str.${i}`;
    if (pt[k] === undefined) break;
    const to = t[k];
    if (to && to !== pt[k]) pairs.push([pt[k], to]);
    else if (!to) missing.push(k);
  }
  pairs.sort((a, b) => b[0].length - a[0].length);
  let out = code;
  for (const [from, to] of pairs) out = out.split(from).join(to);
  return out;
}

/* ------------------------------------------------------------------ */

function translateBlocks(blocks, prefix) {
  return blocks.map((b, i) => {
    const k = `${prefix}.${i}`;
    switch (b.kind) {
      case 'paragraph':
      case 'heading':
      case 'reading':
        return { ...b, text: tr(`${k}.text`) };
      case 'list':
        return { ...b, items: b.items.map((_, j) => tr(`${k}.item.${j}`)) };
      case 'table':
        return {
          ...b,
          ...(b.caption ? { caption: tr(`${k}.caption`) } : {}),
          headers: b.headers.map((_, j) => tr(`${k}.h.${j}`)),
          rows: b.rows.map((r, ri) => r.map((_, ci) => tr(`${k}.r.${ri}.${ci}`))),
        };
      case 'code':
        return { ...b, code: translateCode(b.code, k) };
      case 'callout':
        return { ...b, blocks: translateBlocks(b.blocks, `${k}.cb`) };
      default:
        return b;
    }
  });
}

const parts = dump.parts.map((part) => ({
  ...part,
  title: tr(`part.${part.id}.title`),
  summary: tr(`part.${part.id}.summary`),
  sections: part.sections.map((sec) => {
    const base = `sec.${part.id}.${sec.id}`;
    return {
      ...sec,
      title: tr(`${base}.title`),
      summary: tr(`${base}.summary`),
      blocks: translateBlocks(sec.blocks, base),
    };
  }),
}));

// Os itens de checklist são os mesmos textos das listas das seções de origem.
const sectionById = new Map();
for (const p of parts) for (const s of p.sections) sectionById.set(s.id, s);

const checklists = dump.checklists.map((c) => {
  const sec = sectionById.get(c.sourceSectionId);
  const items = sec
    ? sec.blocks
        .filter((b) => b.kind === 'list')
        .flatMap((b) => b.items)
        .map((text, k) => ({ id: `${c.sourceSectionId}-${k + 1}`, text }))
    : c.items;
  return { ...c, title: tr(`checklist.${c.id}.title`), items };
});

/* ------------------------------------------------------------------ */
/* Índice de busca do idioma                                           */
/* ------------------------------------------------------------------ */

function flatten(blocks) {
  const out = [];
  const walk = (bs) => {
    for (const b of bs) {
      if (b.kind === 'paragraph' || b.kind === 'heading' || b.kind === 'reading') out.push(b.text);
      else if (b.kind === 'list') out.push(b.items.join(' '));
      else if (b.kind === 'table')
        out.push([b.caption, ...b.headers, ...b.rows.flat()].filter(Boolean).join(' '));
      else if (b.kind === 'callout') walk(b.blocks);
    }
  };
  walk(blocks);
  return out.join(' ').replace(/\s+/g, ' ').trim();
}

const byId = new Map(dump.searchIndex.map((e) => [e.id, e]));
const searchIndex = [];
for (const part of parts) {
  for (const sec of part.sections) {
    const id = `${part.id}/${sec.id}`;
    searchIndex.push({
      id,
      partId: part.id,
      partTitle: part.title,
      sectionId: sec.id,
      sectionTitle: sec.title,
      text: flatten(sec.blocks),
      // Palavras-chave técnicas não são traduzidas: `aria-label` e `2.4.3` são
      // iguais em qualquer idioma, e é assim que alguém busca.
      keywords: byId.get(id)?.keywords ?? [],
    });
  }
}

/* ------------------------------------------------------------------ */
/* Escrita                                                             */
/* ------------------------------------------------------------------ */

const OUT = path.join(ROOT, 'src', 'content', locale);
fs.mkdirSync(path.join(OUT, 'parts'), { recursive: true });

const banner = `// GERADO por scripts/build-locale.js ${locale} — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.${locale}.json
`;

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

for (const part of parts) {
  fs.writeFileSync(
    path.join(OUT, 'parts', `${part.id}.ts`),
    `${banner}
import type { Part } from '../../types';

export const ${camel(part.id)}: Part = ${JSON.stringify(part, null, 2)};
`,
    'utf8',
  );
}

fs.writeFileSync(
  path.join(OUT, 'checklists.ts'),
  `${banner}
import type { Checklist } from '../types';

export const checklists: Checklist[] = ${JSON.stringify(checklists, null, 2)};
`,
  'utf8',
);

fs.writeFileSync(
  path.join(OUT, 'search-index.ts'),
  `${banner}
import type { SearchEntry } from '../types';

export const searchIndex: SearchEntry[] = ${JSON.stringify(searchIndex, null, 2)};
`,
  'utf8',
);

fs.writeFileSync(
  path.join(OUT, 'index.ts'),
  `${banner}
import type { LocaleContent } from '../types';
${parts.map((p) => `import { ${camel(p.id)} } from './parts/${p.id}';`).join('\n')}
import { checklists } from './checklists';

export const ${locale}Content: LocaleContent = {
  locale: '${locale}',
  parts: [${parts.map((p) => camel(p.id)).join(', ')}],
  checklists,
};
`,
  'utf8',
);

/* ------------------------------------------------------------------ */

const total = Object.keys(pt).length;
const done = total - new Set(missing).size;
const pct = ((done / total) * 100).toFixed(1);

console.log(`Locale ${locale}: ${done}/${total} strings traduzidas (${pct}%)`);
if (missing.length) {
  const uniq = [...new Set(missing)];
  console.log(`Faltando ${uniq.length} — caíram no português:`);
  uniq.slice(0, 15).forEach((k) => console.log('  ' + k));
  if (uniq.length > 15) console.log(`  ... e mais ${uniq.length - 15}`);
}
