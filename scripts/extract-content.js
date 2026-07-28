/**
 * Extrai o conteúdo de `fonte/ARIA.html` para módulos TypeScript tipados.
 *
 *   node scripts/extract-content.js
 *
 * A fonte já foi normalizada por `fix-aria.js`, então aqui o parse é direto.
 * Usa jsdom, que já vem nas devDependencies do Angular.
 *
 * Saída:
 *   src/content/pt/parts/<id>.ts
 *   src/content/pt/checklists.ts
 *   src/content/pt/index.ts
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'fonte', 'ARIA.html');
const OUT = path.join(ROOT, 'src', 'content', 'pt');

const dom = new JSDOM(fs.readFileSync(SRC, 'utf8'));
const doc = dom.window.document;

/* ------------------------------------------------------------------ */
/* Utilidades                                                          */
/* ------------------------------------------------------------------ */

const txt = (el) => (el?.textContent ?? '').replace(/\s+/g, ' ').trim();

/** Remove a numeração do título ("12. aria-label" -> "aria-label"). */
const cleanTitle = (t) => t.replace(/^\d+\.\s*/, '').trim();

/** Rótulos de variante que o documento usa nos headings de exemplo. */
function variantOf(headingText) {
  const t = headingText.toLowerCase();
  if (/✅|correto|preferir/.test(t)) return 'correct';
  if (/🚫|❌|errado|evitar/.test(t)) return 'wrong';
  return null;
}

/**
 * Parágrafos que anunciam "o que o leitor de tela fala a seguir".
 *
 * A lista é explícita e fechada de propósito. Heurística genérica ("parágrafo
 * curto terminando em dois-pontos") classificaria errado casos como
 * "ARIA significa:" seguido da expansão da sigla — que é conteúdo, não leitura.
 * Levantada varrendo a fonte: `node -e "..."` sobre todos os <pre>.
 */
const READING_CUES = [
  /^leitura( esperada| poss[ií]vel)?:?$/i,
  /^poss[ií]vel leitura:?$/i,
  /^talkback:?$/i,
  /^voiceover:?$/i,
  /^(n[ãa]o )?marcado:?$/i,
  /^ap[óo]s (abrir|concluir):?$/i,
];

const isReadingCue = (t) => READING_CUES.some((re) => re.test(t.trim()));

/* ------------------------------------------------------------------ */
/* Palavras-chave para a busca                                         */
/* ------------------------------------------------------------------ */

function keywordsFrom(text, code) {
  const all = `${text}\n${code}`;
  const set = new Set();

  // atributos ARIA
  for (const m of all.matchAll(/\baria-[a-z]+\b/g)) set.add(m[0]);
  // roles
  for (const m of all.matchAll(/role=["']?([a-z]+)["']?/g)) set.add(`role:${m[1]}`);
  // APIs Angular / CDK / Material citadas
  for (const m of all.matchAll(
    /\b(LiveAnnouncer|FocusMonitor|FocusTrap|FocusKeyManager|InteractivityChecker|cdkTrapFocus|MatDialog|MatTabs|MatMenu|MatSelect|MatTable|MatExpansionPanel|ngIf|ngFor|routerLink|tabindex|Signals?)\b/g,
  ))
    set.add(m[1]);
  // critérios WCAG
  for (const m of all.matchAll(/\b[1-4]\.\d+\.\d+\b/g)) set.add(m[0]);
  // tags HTML relevantes
  for (const m of all.matchAll(
    /&lt;(button|input|label|select|textarea|dialog|table|th|nav|main|header|footer|img|a)\b/g,
  ))
    set.add(m[1]);

  return [...set];
}

/* ------------------------------------------------------------------ */
/* Conversão de blocos                                                 */
/* ------------------------------------------------------------------ */

function parseTable(tableEl) {
  const headers = [...tableEl.querySelectorAll('thead th')].map(txt);
  const rows = [...tableEl.querySelectorAll('tbody tr')].map((tr) =>
    [...tr.querySelectorAll('td')].map(txt),
  );
  // Tabela sem thead explícito: primeira linha com th é o cabeçalho.
  if (!headers.length) {
    const trs = [...tableEl.querySelectorAll('tr')];
    if (trs.length && trs[0].querySelector('th')) {
      headers.push(...[...trs[0].querySelectorAll('th')].map(txt));
      rows.push(...trs.slice(1).map((tr) => [...tr.querySelectorAll('td')].map(txt)));
    }
  }
  const caption = txt(tableEl.querySelector('caption'));
  return { kind: 'table', ...(caption ? { caption } : {}), headers, rows };
}

/**
 * Converte os filhos de um contêiner em blocos.
 * `state` carrega o contexto entre irmãos: a variante vem do heading anterior,
 * e o bloco "reading" depende do parágrafo "Leitura:" que o antecede.
 */
function toBlocks(container, state = { variant: 'neutral', expectReading: false }) {
  const blocks = [];

  for (const node of container.children) {
    const tag = node.tagName.toLowerCase();

    if (tag === 'h4' || tag === 'h5') {
      const text = txt(node);
      const v = variantOf(text);
      if (v) {
        // O heading só existia para rotular o exemplo seguinte; a variante
        // carrega o significado, então não vira heading na UI.
        state.variant = v;
        continue;
      }
      state.variant = 'neutral';
      blocks.push({ kind: 'heading', level: tag === 'h4' ? 1 : 2, text });
      continue;
    }

    if (tag === 'p') {
      const text = txt(node);
      if (!text) continue;
      if (isReadingCue(text)) {
        state.expectReading = true;
        continue;
      }
      blocks.push({ kind: 'paragraph', text });
      continue;
    }

    if (tag === 'pre') {
      const code = node.textContent.replace(/\r\n/g, '\n').replace(/^\n+|\s+$/g, '');
      if (state.expectReading) {
        blocks.push({ kind: 'reading', text: code });
        state.expectReading = false;
      } else {
        blocks.push({ kind: 'code', code, variant: state.variant });
        state.variant = 'neutral';
      }
      continue;
    }

    if (tag === 'ul' || tag === 'ol') {
      const items = [...node.querySelectorAll(':scope > li')].map(txt).filter(Boolean);
      if (items.length) blocks.push({ kind: 'list', ordered: tag === 'ol', items });
      continue;
    }

    if (tag === 'div' && node.classList.contains('tabela-wrap')) {
      const t = node.querySelector('table');
      if (t) blocks.push(parseTable(t));
      continue;
    }

    if (tag === 'table') {
      blocks.push(parseTable(node));
      continue;
    }

    if (tag === 'aside' && node.classList.contains('callout')) {
      const tone = node.classList.contains('callout--warning')
        ? 'warning'
        : node.classList.contains('callout--success')
          ? 'success'
          : 'info';
      // O primeiro <p> é o rótulo do tom, que a UI recria — não é conteúdo.
      const inner = node.cloneNode(true);
      inner.querySelector('.callout__label')?.remove();
      blocks.push({ kind: 'callout', tone, blocks: toBlocks(inner, { variant: 'neutral', expectReading: false }) });
      continue;
    }
  }

  return blocks;
}

/* ------------------------------------------------------------------ */
/* Resumo da seção (meta description)                                  */
/* ------------------------------------------------------------------ */

function summarize(title, blocks) {
  const p = blocks.find((b) => b.kind === 'paragraph' && b.text.length > 30);
  if (p) return p.text.length > 155 ? p.text.slice(0, 152).trimEnd() + '…' : p.text;

  const l = blocks.find((b) => b.kind === 'list');
  if (l) {
    const joined = l.items.slice(0, 3).join('; ');
    return `${title}: ${joined.length > 130 ? joined.slice(0, 127) + '…' : joined}`;
  }
  return `${title} — acessibilidade em Angular.`;
}

/* ------------------------------------------------------------------ */
/* Extração                                                            */
/* ------------------------------------------------------------------ */

const parts = [];

for (const [i, partEl] of [...doc.querySelectorAll('section.parte')].entries()) {
  const id = partEl.id;
  const title = cleanTitle(txt(partEl.querySelector(':scope > h2')));

  // Parágrafos soltos antes da primeira seção = resumo da parte.
  const introParas = [];
  for (const child of partEl.children) {
    if (child.tagName.toLowerCase() === 'section') break;
    if (child.tagName.toLowerCase() === 'p') {
      const t = txt(child);
      if (t) introParas.push(t);
    }
  }

  const sections = [...partEl.querySelectorAll(':scope > section.secao')].map(
    (secEl, j) => {
      const sid = secEl.id;
      const stitle = cleanTitle(txt(secEl.querySelector(':scope > h3')));
      const body = secEl.cloneNode(true);
      body.querySelector(':scope > h3')?.remove();
      const blocks = toBlocks(body);
      return {
        id: sid,
        partId: id,
        order: j + 1,
        title: stitle,
        summary: summarize(stitle, blocks),
        blocks,
      };
    },
  );

  parts.push({
    id,
    order: i + 1,
    numeral: String(i + 1).padStart(2, '0'),
    title,
    summary: introParas.join(' ') || `${title} — acessibilidade em Angular.`,
    sections,
  });
}

/* ------------------------------------------------------------------ */
/* Checklists                                                          */
/* ------------------------------------------------------------------ */

const CHECKLIST_META = {
  'checklist-de-story': { audience: 'po', stage: 'refinamento' },
  'checklist-de-desenvolvimento': { audience: 'dev', stage: 'desenvolvimento' },
  'checklist-aria': { audience: 'dev', stage: 'desenvolvimento' },
  'checklist-de-componentes': { audience: 'dev', stage: 'desenvolvimento' },
  'checklist-angular': { audience: 'dev', stage: 'desenvolvimento' },
  'checklist-modal': { audience: 'dev', stage: 'desenvolvimento' },
  'checklist-matdialog': { audience: 'dev', stage: 'desenvolvimento' },
  'checklist-de-pull-request': { audience: 'dev', stage: 'pull-request' },
  'checklist-de-qa': { audience: 'qa', stage: 'qa' },
  'checklist-para-talkback': { audience: 'qa', stage: 'qa' },
  'checklist-para-voiceover': { audience: 'qa', stage: 'qa' },
  'checklist-final-de-talkback-e-voiceover': { audience: 'qa', stage: 'qa' },
  'checklist-para-revisao-de-tela-nova': { audience: 'todos', stage: 'qa' },
  'definition-of-done-acessivel': { audience: 'todos', stage: 'fechamento' },
};

const checklists = [];

for (const part of parts) {
  for (const sec of part.sections) {
    const meta = CHECKLIST_META[sec.id];
    if (!meta) continue;

    const items = sec.blocks
      .filter((b) => b.kind === 'list')
      .flatMap((b) => b.items)
      .map((text, k) => ({ id: `${sec.id}-${k + 1}`, text }));

    if (!items.length) continue;

    checklists.push({
      id: sec.id.replace(/^checklist-(de-|para-)?/, '') || sec.id,
      title: sec.title,
      audience: meta.audience,
      stage: meta.stage,
      sourceSectionId: sec.id,
      sourcePartId: part.id,
      items,
    });
  }
}

/* ------------------------------------------------------------------ */
/* Índice de busca                                                     */
/* ------------------------------------------------------------------ */

function flatten(blocks) {
  const out = [];
  const codeOut = [];
  const walk = (bs) => {
    for (const b of bs) {
      if (b.kind === 'paragraph' || b.kind === 'heading') out.push(b.text);
      else if (b.kind === 'reading') out.push(b.text);
      else if (b.kind === 'list') out.push(b.items.join(' '));
      else if (b.kind === 'table')
        out.push([b.caption, ...b.headers, ...b.rows.flat()].filter(Boolean).join(' '));
      else if (b.kind === 'code') codeOut.push(b.code);
      else if (b.kind === 'callout') walk(b.blocks);
    }
  };
  walk(blocks);
  return { text: out.join(' ').replace(/\s+/g, ' ').trim(), code: codeOut.join('\n') };
}

const searchIndex = [];
for (const part of parts) {
  for (const sec of part.sections) {
    const { text, code } = flatten(sec.blocks);
    searchIndex.push({
      id: `${part.id}/${sec.id}`,
      partId: part.id,
      partTitle: part.title,
      sectionId: sec.id,
      sectionTitle: sec.title,
      text,
      keywords: keywordsFrom(`${sec.title} ${text}`, code),
    });
  }
}

/* ------------------------------------------------------------------ */
/* Escrita                                                             */
/* ------------------------------------------------------------------ */

fs.mkdirSync(path.join(OUT, 'parts'), { recursive: true });

const banner = `// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract
`;

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

for (const part of parts) {
  const file = path.join(OUT, 'parts', `${part.id}.ts`);
  fs.writeFileSync(
    file,
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

export const ptContent: LocaleContent = {
  locale: 'pt',
  parts: [${parts.map((p) => camel(p.id)).join(', ')}],
  checklists,
};
`,
  'utf8',
);

/* ------------------------------------------------------------------ */
/* Relatório                                                           */
/* ------------------------------------------------------------------ */

const totalSections = parts.reduce((a, p) => a + p.sections.length, 0);
const totalBlocks = parts.reduce(
  (a, p) => a + p.sections.reduce((b, s) => b + s.blocks.length, 0),
  0,
);
const countKind = (kind) =>
  parts.reduce(
    (a, p) =>
      a +
      p.sections.reduce((b, s) => {
        let n = 0;
        const walk = (bs) => {
          for (const x of bs) {
            if (x.kind === kind) n++;
            if (x.kind === 'callout') walk(x.blocks);
          }
        };
        walk(s.blocks);
        return b + n;
      }, 0),
    0,
  );

console.log('Partes:      ', parts.length);
console.log('Seções:      ', totalSections);
console.log('Blocos:      ', totalBlocks);
console.log('  paragraph: ', countKind('paragraph'));
console.log('  heading:   ', countKind('heading'));
console.log('  list:      ', countKind('list'));
console.log('  table:     ', countKind('table'));
console.log('  code:      ', countKind('code'));
console.log('  reading:   ', countKind('reading'));
console.log('  callout:   ', countKind('callout'));
console.log('Checklists:  ', checklists.length, `(${checklists.reduce((a, c) => a + c.items.length, 0)} itens)`);
console.log('Busca:       ', searchIndex.length, 'entradas');
