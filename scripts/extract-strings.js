/**
 * Gera o catálogo de strings traduzíveis a partir do conteúdo pt.
 *
 *   node scripts/extract-strings.js
 *
 * Separa o trabalho de tradução (dados) do trabalho de estrutura (código):
 * o tradutor preenche `i18n/strings.<locale>.json`, e `build-locale.js` remonta
 * os módulos de conteúdo daquele idioma reaproveitando a estrutura do pt.
 *
 * Chaves são estáveis e derivadas da posição no conteúdo, para que uma
 * re-extração não invalide traduções já feitas.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'i18n');

// Lê o dump bruto, não os .ts gerados: o Prettier reformata os .ts e eles
// deixam de ser JSON parseável.
const dumpPath = path.join(ROOT, 'i18n', 'content.pt.json');
if (!fs.existsSync(dumpPath)) {
  console.error('i18n/content.pt.json não existe. Rode antes: npm run content:extract');
  process.exit(1);
}
const { parts, checklists } = JSON.parse(fs.readFileSync(dumpPath, 'utf8'));

/* ------------------------------------------------------------------ */

const strings = {};
let n = 0;

const put = (key, value) => {
  if (typeof value === 'string' && value.trim()) {
    strings[key] = value;
    n++;
  }
};

/**
 * Blocos de código NÃO entram no catálogo por padrão: a sintaxe é a mesma em
 * qualquer idioma. Mas as STRINGS DENTRO do código precisam ser traduzidas,
 * senão o exemplo perde o sentido — um `aria-label="Fechar modal"` num site em
 * inglês ensina errado.
 *
 * Extrai literais entre aspas e texto solto entre tags, ignorando o que é
 * claramente sintaxe.
 */
const CODE_IGNORE =
  /^(true|false|null|polite|assertive|off|button|dialog|menu|listbox|tab|tablist|tabpanel|checkbox|switch|option|alert|status|progressbar|combobox|tooltip|region|page|step|location|col|row|text|file|submit|-1|0|100|50|30|[\d.]+)$/i;

function codeStrings(code) {
  const found = new Set();
  // atributos com texto humano
  for (const m of code.matchAll(/(?:aria-label|alt|title|placeholder)="([^"]+)"/g)) {
    if (!CODE_IGNORE.test(m[1])) found.add(m[1]);
  }
  // texto entre tags: <button>\nSalvar\n</button>
  for (const m of code.matchAll(/>\s*\n?([^<>\n{][^<>{]*?)\n?\s*</g)) {
    const t = m[1].trim();
    if (t && !CODE_IGNORE.test(t) && /[a-záàâãéêíóôõúç]/i.test(t) && t.length > 2) found.add(t);
  }
  return [...found];
}

for (const part of parts) {
  put(`part.${part.id}.title`, part.title);
  put(`part.${part.id}.summary`, part.summary);

  for (const sec of part.sections) {
    const base = `sec.${part.id}.${sec.id}`;
    put(`${base}.title`, sec.title);
    put(`${base}.summary`, sec.summary);

    const walk = (blocks, prefix) => {
      blocks.forEach((b, i) => {
        const k = `${prefix}.${i}`;
        if (b.kind === 'paragraph') put(`${k}.text`, b.text);
        else if (b.kind === 'heading') put(`${k}.text`, b.text);
        else if (b.kind === 'reading') put(`${k}.text`, b.text);
        else if (b.kind === 'list') b.items.forEach((it, j) => put(`${k}.item.${j}`, it));
        else if (b.kind === 'table') {
          if (b.caption) put(`${k}.caption`, b.caption);
          b.headers.forEach((h, j) => put(`${k}.h.${j}`, h));
          b.rows.forEach((r, ri) => r.forEach((c, ci) => put(`${k}.r.${ri}.${ci}`, c)));
        } else if (b.kind === 'code') {
          codeStrings(b.code).forEach((s, j) => put(`${k}.str.${j}`, s));
        } else if (b.kind === 'callout') walk(b.blocks, `${k}.cb`);
      });
    };
    walk(sec.blocks, base);
  }
}

// Os checklists reaproveitam o texto das listas das seções de origem, mas têm
// título próprio exibido na UI.
for (const c of checklists) {
  put(`checklist.${c.id}.title`, c.title);
}

// Rótulos da própria interface — não vêm do documento.
const UI = {
  'ui.skipLink': 'Pular para o conteúdo',
  'ui.search': 'Buscar na documentação',
  'ui.searchPlaceholder': 'Buscar por atributo, componente ou critério WCAG',
  'ui.searchResults': 'resultados',
  'ui.searchNoResults': 'Nada encontrado. Tente o nome do atributo ARIA, do componente ou o número do critério WCAG.',
  'ui.nav': 'Documentação',
  'ui.navFooter': 'Links do rodapé',
  'ui.onThisPage': 'Nesta página',
  'ui.menu': 'Menu',
  'ui.close': 'Fechar',
  'ui.theme': 'Alternar tema claro e escuro',
  'ui.language': 'Idioma',
  'ui.copy': 'Copiar código',
  'ui.copied': 'Código copiado',
  'ui.correct': 'Correto',
  'ui.wrong': 'Evitar',
  'ui.reading': 'Como o leitor de tela anuncia',
  'ui.calloutInfo': 'Informação',
  'ui.calloutWarning': 'Atenção',
  'ui.calloutSuccess': 'Boa prática',
  'ui.next': 'Próxima',
  'ui.previous': 'Anterior',
  'ui.checklists': 'Checklists',
  'ui.auditor': 'Auditor',
  'ui.home': 'Início',
  'ui.progress': 'concluídos',
  'ui.checkAll': 'Marcar tudo',
  'ui.uncheckAll': 'Desmarcar tudo',
  'ui.export': 'Exportar',
  'ui.reset': 'Limpar',
  'ui.resetConfirm': 'Limpar todo o progresso deste checklist? Não dá para desfazer.',
  'ui.cancel': 'Cancelar',
  'ui.confirm': 'Confirmar',
  'ui.notFound': 'Página não encontrada',
  'ui.backHome': 'Voltar ao início',
  'ui.tableLabel': 'Tabela',
  'ui.opensNewTab': 'abre em nova aba',
  'ui.sourceSection': 'Ver a seção que originou este checklist',
};
for (const [k, v] of Object.entries(UI)) put(k, v);

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'strings.pt.json'), JSON.stringify(strings, null, 2) + '\n', 'utf8');

/* ------------------------------------------------------------------ */

const words = Object.values(strings).join(' ').split(/\s+/).length;
const chars = Object.values(strings).join('').length;

console.log('Strings traduzíveis:', n);
console.log('Palavras:           ', words);
console.log('Caracteres:         ', chars);
console.log('');
console.log('Por tipo:');
const byType = {};
for (const k of Object.keys(strings)) {
  const t = k.includes('.str.')
    ? 'string dentro de código'
    : k.endsWith('.title')
      ? 'título'
      : k.endsWith('.summary')
        ? 'resumo'
        : k.includes('.item.')
          ? 'item de lista'
          : k.includes('.h.') || k.includes('.r.') || k.includes('.caption')
            ? 'tabela'
            : 'parágrafo/heading/leitura';
  byType[t] = (byType[t] || 0) + 1;
}
for (const [t, c] of Object.entries(byType).sort((a, b) => b[1] - a[1])) {
  console.log('  ' + String(c).padStart(4), t);
}
console.log('');
console.log('Saída: i18n/strings.pt.json');
