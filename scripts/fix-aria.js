/**
 * Corrige os defeitos estruturais do ARIA.html.
 *
 * Estratégia: descartar toda a estrutura de <section>/<hr>/<header>/<footer>
 * do original (que está com aninhamento quebrado a partir da linha 1711) e
 * reconstruir o documento a partir dos headings, que são a única marcação
 * confiável do arquivo.
 */

const fs = require('fs');

const SRC = process.argv[2];
const OUT = process.argv[3];

// CRLF quebra os replaces de ^\n — normalizar antes de qualquer coisa.
let raw = fs.readFileSync(SRC, 'utf8').replace(/\r\n/g, '\n');

// Slugs curtos e estáveis para as partes; os longos gerados do título são ruins de linkar.
const PART_IDS = [
  'fundamentos',
  'aria',
  'formularios',
  'componentes',
  'angular',
  'leitores-de-tela',
  'qa-wcag',
];

// O original numera a parte 2 no próprio título; as outras não.
const PART_TITLE_FIX = { 'Parte 2 - ARIA Completo para Angular': 'ARIA Completo para Angular' };

/* ------------------------------------------------------------------ */
/* 1. Proteger os blocos de código e normalizar o escaping             */
/* ------------------------------------------------------------------ */

const codeBlocks = [];

function unescapeHtml(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// O conteúdo interno nunca contém "</code></pre>", então o não-guloso é seguro.
raw = raw.replace(/<pre>\s*<code>([\s\S]*?)<\/code>\s*<\/pre>/g, (_, inner) => {
  // unescape total seguido de escape total = escaping consistente,
  // independente de o bloco original estar escapado ou cru.
  const code = escapeHtml(unescapeHtml(inner).replace(/^\n+/, '').replace(/\s+$/, ''));
  const i = codeBlocks.push(code) - 1;
  return `@@CODE${i}@@`;
});

/* ------------------------------------------------------------------ */
/* 2. Isolar o body e limpar o lixo estrutural                         */
/* ------------------------------------------------------------------ */

let body = raw.slice(raw.indexOf('<body>') + '<body>'.length, raw.lastIndexOf('</body>'));

body = body
  .replace(/<style>[\s\S]*?<\/style>/g, '') // <style> duplicado no meio do body (linha ~612)
  .replace(/```/g, '')                      // bloco markdown solto (linha ~2490)
  .replace(/<\/?section[^>]*>/g, '')
  .replace(/<\/?header[^>]*>/g, '')
  .replace(/<\/?footer[^>]*>/g, '')
  .replace(/<hr\s*\/?>/g, '');

/* ------------------------------------------------------------------ */
/* 3. Tokenizar por heading                                            */
/* ------------------------------------------------------------------ */

const nodes = [];
const headingRe = /<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/g;
let m;
let cursor = 0;

while ((m = headingRe.exec(body)) !== null) {
  if (nodes.length) nodes[nodes.length - 1].content = body.slice(cursor, m.index);
  nodes.push({ level: Number(m[1]), title: m[2].trim().replace(/\s+/g, ' '), content: '' });
  cursor = headingRe.lastIndex;
}
if (nodes.length) nodes[nodes.length - 1].content = body.slice(cursor);

/* ------------------------------------------------------------------ */
/* 4. Limpar o conteúdo de cada nó                                     */
/* ------------------------------------------------------------------ */

function cleanContent(html) {
  return html
    .replace(/^[ \t]+/gm, '')      // indentação herdada, irregular (os <pre> estão protegidos)
    .replace(/<p>\s*<\/p>/g, '')   // <p> vazio
    .replace(/<p>\s*(?=<p>)/g, '') // <p> órfão seguido de outro <p>
    .replace(/<p>\s*$/, '')        // <p> órfão no fim do bloco — a quebra da linha 1711
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

for (const n of nodes) n.content = cleanContent(n.content);

/* ------------------------------------------------------------------ */
/* 5. Montar a árvore: h1 = parte, h2 = seção, h3/h4 = subtítulo       */
/* ------------------------------------------------------------------ */

// "Fim da Documentação" é <h2> dentro do <footer> — não é seção da última parte.
const FOOTER_TITLE = 'Fim da Documentação';
let footerNode = null;

const parts = [];
let currentPart = null;
let currentSection = null;

for (const n of nodes) {
  if (n.title === FOOTER_TITLE) {
    footerNode = n;
    continue;
  }

  if (n.level === 1) {
    const title = PART_TITLE_FIX[n.title] || n.title;
    currentPart = { title, intro: n.content, sections: [] };
    currentSection = null;
    parts.push(currentPart);
    continue;
  }

  if (!currentPart) continue; // não deve acontecer

  if (n.level === 2) {
    currentSection = { title: n.title, blocks: [{ level: 0, content: n.content }] };
    currentPart.sections.push(currentSection);
    continue;
  }

  // h3 e h4 viram subtítulos dentro da seção corrente
  if (currentSection) {
    currentSection.blocks.push({ level: n.level, title: n.title, content: n.content });
  }
}

/* ------------------------------------------------------------------ */
/* 6. Slugs                                                            */
/* ------------------------------------------------------------------ */

const usedIds = new Set();

function slug(text) {
  let s = text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s-]/g, ' ')     // tira emoji e pontuação
    .trim()
    .toLowerCase()
    .replace(/^\d+\s+/, '')        // tira a numeração "12. "
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  if (!s) s = 'secao';
  let id = s;
  let i = 2;
  while (usedIds.has(id)) id = `${s}-${i++}`;
  usedIds.add(id);
  return id;
}

parts.forEach((p, i) => {
  p.id = PART_IDS[i] || slug(p.title);
  usedIds.add(p.id);
});
for (const p of parts) {
  for (const s of p.sections) s.id = slug(s.title);
}

/* ------------------------------------------------------------------ */
/* 7. Normalizar tabelas: thead/tbody + scope                          */
/* ------------------------------------------------------------------ */

function fixTables(html, label) {
  return html.replace(/<table>([\s\S]*?)<\/table>/g, (full, inner) => {
    let out = inner;
    // container rolável precisa ser focável, senão vira armadilha para teclado
    const wrapOpen =
      `<div class="tabela-wrap" tabindex="0" role="region" aria-label="Tabela: ${label}">`;

    // scope="col" em todo <th> que ainda não tem
    out = out.replace(/<th(?![^>]*\bscope=)([^>]*)>/g, '<th scope="col"$1>');

    // tabelas sem <thead>: primeira <tr> com <th> vira cabeçalho
    if (!/<thead>/.test(out)) {
      const rows = out.match(/<tr>[\s\S]*?<\/tr>/g) || [];
      if (rows.length && /<th\b/.test(rows[0])) {
        const head = rows[0];
        const bodyRows = rows.slice(1).join('\n');
        out = `\n<thead>\n${head}\n</thead>\n<tbody>\n${bodyRows}\n</tbody>\n`;
      }
    }
    return `${wrapOpen}<table>${out}</table></div>`;
  });
}

/* ------------------------------------------------------------------ */
/* 8. Callouts: <div class="info"> vira <aside> com rótulo textual     */
/* ------------------------------------------------------------------ */

const CALLOUT_LABEL = { info: 'Informação', warning: 'Atenção', success: 'Boa prática' };

function fixCallouts(html) {
  return html.replace(/<div class="(info|warning|success)">([\s\S]*?)<\/div>/g, (_, tone, inner) => {
    // no original o texto de abertura do callout fica solto, sem <p>
    const body = inner.trim().replace(/^([^<]+)/, (t) => `<p>${t.trim()}</p>\n`);
    return (
      `<aside class="callout callout--${tone}" aria-label="${CALLOUT_LABEL[tone]}">\n` +
      `<p class="callout__label">${CALLOUT_LABEL[tone]}</p>\n${body}\n</aside>`
    );
  });
}

/* ------------------------------------------------------------------ */
/* 9. Renderizar                                                       */
/* ------------------------------------------------------------------ */

function render(html, label) {
  return fixCallouts(fixTables(html, label));
}

function renderBlocks(section) {
  const chunks = [];
  for (const b of section.blocks) {
    if (b.level === 0) {
      if (b.content) chunks.push(render(b.content, section.title));
    } else {
      // h3 do original vira h4, h4 vira h5 — sem pular nível
      const lvl = b.level + 1;
      chunks.push(`<h${lvl}>${b.title}</h${lvl}>`);
      if (b.content) chunks.push(render(b.content, section.title));
    }
  }
  return chunks.filter(Boolean).join('\n\n');
}

const toc = parts
  .map(
    (p) =>
      `<li>\n<a href="#${p.id}">${p.title}</a>\n<ul>\n` +
      p.sections.map((s) => `<li><a href="#${s.id}">${s.title}</a></li>`).join('\n') +
      `\n</ul>\n</li>`
  )
  .join('\n');

const partsHtml = parts
  .map(
    (p) => `
<section class="parte" id="${p.id}" aria-labelledby="${p.id}-titulo">

<h2 id="${p.id}-titulo">${p.title}</h2>

${render(p.intro, p.title)}

${p.sections
  .map(
    (s) => `<section class="secao" id="${s.id}" aria-labelledby="${s.id}-titulo">

<h3 id="${s.id}-titulo">${s.title}</h3>

${renderBlocks(s)}

</section>`
  )
  .join('\n\n')}

</section>`
  )
  .join('\n\n');

const CSS = `
:root {
  --bg: #ffffff;
  --fg: #18181b;
  --muted: #52525b;
  --border: #d4d4d8;
  --surface: #f4f4f5;
  --code-bg: #1e293b;
  --code-fg: #f1f5f9;
  --info: #1d4ed8;
  --info-bg: #eff6ff;
  --warning: #b91c1c;
  --warning-bg: #fef2f2;
  --success: #047857;
  --success-bg: #ecfdf5;
  --focus: #1d4ed8;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f0f11;
    --fg: #f4f4f5;
    --muted: #a1a1aa;
    --border: #3f3f46;
    --surface: #1c1c1f;
    --code-bg: #09090b;
    --code-fg: #e4e4e7;
    --info: #93c5fd;
    --info-bg: #172033;
    --warning: #fca5a5;
    --warning-bg: #2a1416;
    --success: #6ee7b7;
    --success-bg: #0d2620;
    --focus: #93c5fd;
  }
}

* { box-sizing: border-box; }

body {
  font-family: system-ui, -apple-system, "Segoe UI", Arial, sans-serif;
  line-height: 1.7;
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem 1.5rem 6rem;
  background: var(--bg);
  color: var(--fg);
}

:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
  border-radius: 2px;
}

.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  background: var(--fg);
  color: var(--bg);
  padding: 0.75rem 1.25rem;
  z-index: 10;
}
.skip-link:focus {
  left: 0.5rem;
  top: 0.5rem;
}

h1, h2, h3, h4, h5 { line-height: 1.25; }
h1 { font-size: 2.25rem; margin: 0 0 0.5rem; }
h2 {
  font-size: 1.75rem;
  margin: 4rem 0 1rem;
  padding-top: 2rem;
  border-top: 2px solid var(--border);
}
h3 { font-size: 1.3rem; margin: 2.5rem 0 0.75rem; }
h4 { font-size: 1.05rem; margin: 1.75rem 0 0.5rem; }
h5 { font-size: 0.95rem; margin: 1.25rem 0 0.5rem; color: var(--muted); }

p { max-width: 68ch; }
.lead { font-size: 1.1rem; color: var(--muted); max-width: 68ch; }

a { color: var(--info); }
a:hover { text-decoration-thickness: 2px; }

.sumario {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.5rem 1.75rem;
  margin: 2.5rem 0;
}
.sumario h2 {
  margin: 0 0 1rem;
  padding: 0;
  border: 0;
  font-size: 1.15rem;
}
.sumario ul { margin: 0; padding-left: 1.25rem; }
.sumario > ul > li { margin-bottom: 0.75rem; }
.sumario > ul > li > a { font-weight: 600; }
.sumario ul ul { margin: 0.35rem 0 0; }
.sumario ul ul a { color: var(--muted); font-size: 0.9rem; }

ul li, ol li { margin-bottom: 0.4rem; }

pre {
  background: var(--code-bg);
  color: var(--code-fg);
  padding: 1rem 1.25rem;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid var(--border);
}
pre:focus-visible { outline-offset: 0; }
code { font-family: ui-monospace, Consolas, "Courier New", monospace; font-size: 0.9rem; }
p > code, li > code, td > code {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 0.1em 0.35em;
}

.callout {
  border-left: 5px solid;
  border-radius: 0 8px 8px 0;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
}
.callout__label {
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 0 0 0.5rem;
}
.callout > :last-child { margin-bottom: 0; }
.callout--info { border-color: var(--info); background: var(--info-bg); }
.callout--info .callout__label { color: var(--info); }
.callout--warning { border-color: var(--warning); background: var(--warning-bg); }
.callout--warning .callout__label { color: var(--warning); }
.callout--success { border-color: var(--success); background: var(--success-bg); }
.callout--success .callout__label { color: var(--success); }

.tabela-wrap { overflow-x: auto; margin: 1.25rem 0; }
table { width: 100%; border-collapse: collapse; }
th, td { border: 1px solid var(--border); padding: 0.6rem 0.75rem; text-align: left; }
th { background: var(--surface); font-weight: 700; }

.rodape {
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 2px solid var(--border);
  color: var(--muted);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
`.trim();

let html = `<!DOCTYPE html>
<html lang="pt-BR">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Acessibilidade em Angular — TalkBack, VoiceOver e WCAG 2.2</title>
<meta name="description" content="Documentação de acessibilidade para aplicações Angular: fundamentos, ARIA, formulários, componentes, Angular CDK A11y, leitores de tela e QA.">
<style>
${CSS}
</style>
</head>

<body>

<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

<header>

<h1>Acessibilidade em Angular</h1>

<p class="lead">Documentação de acessibilidade para aplicações Angular, com foco em TalkBack, VoiceOver e WCAG 2.2.</p>

</header>

<nav class="sumario" aria-labelledby="sumario-titulo">

<h2 id="sumario-titulo">Sumário</h2>

<ul>
${toc}
</ul>

</nav>

<main id="conteudo" tabindex="-1">
${partsHtml}
</main>

<footer class="rodape">

<h2>${footerNode ? footerNode.title : 'Fim da Documentação'}</h2>

${footerNode ? render(footerNode.content, 'Fim da documentação') : ''}

</footer>

</body>

</html>
`;

/* ------------------------------------------------------------------ */
/* 10. Restaurar os blocos de código e envolver tabelas                */
/* ------------------------------------------------------------------ */

html = html.replace(/@@CODE(\d+)@@/g, (_, i) => `<pre><code>${codeBlocks[Number(i)]}</code></pre>`);

html = html.replace(/\n{3,}/g, '\n\n');

fs.writeFileSync(OUT, html, 'utf8');

/* ------------------------------------------------------------------ */
/* Relatório                                                           */
/* ------------------------------------------------------------------ */

console.log('Partes:', parts.length);
for (const p of parts) console.log(`  - ${p.title} (${p.sections.length} seções) #${p.id}`);
console.log('Total de seções:', parts.reduce((a, p) => a + p.sections.length, 0));
console.log('Blocos de código:', codeBlocks.length);
console.log('Tamanho de saída:', (html.length / 1024).toFixed(1), 'KB');
