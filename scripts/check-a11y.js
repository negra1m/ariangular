/**
 * Roda o axe-core sobre TODAS as páginas prerenderizadas.
 *
 *   node scripts/check-a11y.js            todas as páginas
 *   node scripts/check-a11y.js --sample   uma amostra por tipo de rota
 *
 * Por que sobre o HTML estático e não num browser real:
 *
 *   O build já gera as 541 páginas com o conteúdo renderizado. Rodar axe em
 *   jsdom sobre elas cobre todas as rotas em segundos, no CI, sem browser —
 *   e pega a classe de violação que mais aparece: estrutura, nome acessível,
 *   role, relação de rótulo, ordem de heading, landmark.
 *
 * O que ESTE script não pega, e por isso não é o único controle:
 *
 *   - contraste: exige CSS computado. Coberto por `check-contrast.js`, que
 *     mede os tokens diretamente e roda no mesmo CI
 *   - estado pós-interação (menu aberto, dialog aberto, busca com resultado):
 *     exige runtime. Coberto pelos testes de componente e pela auditoria manual
 *   - foco visível de verdade, TalkBack e VoiceOver: exige gente. Fase 8
 *
 * Meta: zero violação em nível A e AA.
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const ROOT = path.join(__dirname, '..');
const BROWSER = path.join(ROOT, 'dist', 'ariangular', 'browser');

if (!fs.existsSync(BROWSER)) {
  console.error('dist não encontrado. Rode `npm run build` antes.');
  process.exit(1);
}

const sampleOnly = process.argv.includes('--sample');

/* ---------- Coleta as páginas ---------- */

const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name === 'index.html') pages.push(full);
  }
})(BROWSER);

/** Uma página de cada formato de rota, para a checagem rápida. */
function sample(list) {
  const seen = new Set();
  const out = [];
  for (const p of list) {
    const rel = path.relative(BROWSER, p).replace(/\\/g, '/').replace(/\/index\.html$/, '');
    const shape = rel.split('/').length + ':' + (rel.split('/')[0] || 'root');
    if (seen.has(shape)) continue;
    seen.add(shape);
    out.push(p);
  }
  return out;
}

const target = sampleOnly ? sample(pages) : pages;

console.log(`Analisando ${target.length} de ${pages.length} páginas...\n`);

/* ---------- Execução ---------- */

const axeSource = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');

const violations = new Map();
let analyzed = 0;
let failed = 0;

async function run(file) {
  const html = fs.readFileSync(file, 'utf8');
  const dom = new JSDOM(html, {
    runScripts: 'outside-only',
    pretendToBeVisual: true,
    url: 'https://ariangular.vercel.app/',
  });

  const { window } = dom;
  window.eval(axeSource);

  const results = await window.axe.run(window.document, {
    // Só A e AA: é a meta declarada do projeto.
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] },
    rules: {
      // Contraste exige CSS computado, que jsdom não faz. Coberto por
      // check-contrast.js, que mede os tokens direto na fonte.
      'color-contrast': { enabled: false },
    },
  });

  const rel = path.relative(BROWSER, file).replace(/\\/g, '/').replace(/\/index\.html$/, '') || '/';

  if (results.violations.length) {
    failed++;
    for (const v of results.violations) {
      if (!violations.has(v.id)) {
        violations.set(v.id, { impact: v.impact, help: v.help, helpUrl: v.helpUrl, pages: [], nodes: [] });
      }
      const entry = violations.get(v.id);
      entry.pages.push(rel);
      for (const n of v.nodes.slice(0, 2)) {
        if (entry.nodes.length < 3) entry.nodes.push(n.html.slice(0, 160));
      }
    }
  }

  analyzed++;
  if (analyzed % 50 === 0) process.stdout.write(`  ${analyzed}/${target.length}\r`);

  window.close();
}

(async () => {
  for (const file of target) {
    try {
      await run(file);
    } catch (e) {
      console.error(`  ERRO ao analisar ${path.relative(BROWSER, file)}: ${e.message}`);
      failed++;
    }
  }

  console.log(`  ${analyzed}/${target.length} analisadas\n`);

  if (!violations.size) {
    console.log(`  Zero violações WCAG A/AA em ${analyzed} páginas.`);
    console.log('  (contraste é verificado por check-contrast.js)\n');
    process.exit(0);
  }

  console.log(`  ${violations.size} tipo(s) de violação, em ${failed} página(s):\n`);

  const order = { critical: 0, serious: 1, moderate: 2, minor: 3 };
  const sorted = [...violations.entries()].sort(
    (a, b) => (order[a[1].impact] ?? 9) - (order[b[1].impact] ?? 9),
  );

  for (const [id, v] of sorted) {
    console.log(`  [${(v.impact ?? 'n/a').toUpperCase()}] ${id}`);
    console.log(`    ${v.help}`);
    console.log(`    ${v.pages.length} página(s), ex: ${v.pages.slice(0, 3).join(', ')}`);
    for (const n of v.nodes) console.log(`    > ${n}`);
    console.log(`    ${v.helpUrl}\n`);
  }

  process.exit(1);
})();
