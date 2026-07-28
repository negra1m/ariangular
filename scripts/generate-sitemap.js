/**
 * Gera sitemap.xml e robots.txt a partir das rotas realmente prerenderizadas.
 *
 *   node scripts/generate-sitemap.js
 *
 * Roda DEPOIS do build, lendo `prerendered-routes.json`. Gerar a partir da
 * lista real evita o erro clássico de anunciar no sitemap uma URL que o build
 * não produziu — o Google marca como erro e derruba a confiança no domínio.
 *
 * Cada URL sai com os `xhtml:link` de hreflang das três versões, que é o que
 * diz ao buscador "estas três são a mesma página em idiomas diferentes" em vez
 * de conteúdo duplicado competindo entre si.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist', 'ariangular');
const BROWSER = path.join(DIST, 'browser');
const ORIGIN = process.env.SITE_ORIGIN || 'https://ariangular.vercel.app';

const LOCALES = ['pt', 'en', 'zh'];
const TAG = { pt: 'pt-BR', en: 'en', zh: 'zh-Hans' };
const DEFAULT = 'pt';

const routesFile = path.join(DIST, 'prerendered-routes.json');
if (!fs.existsSync(routesFile)) {
  console.error('prerendered-routes.json não encontrado. Rode `npm run build` antes.');
  process.exit(1);
}

// O Angular grava { "routes": { "/pt/aria": {}, ... } }; versões anteriores
// gravavam um array. Aceita os dois para não quebrar num upgrade.
const raw = JSON.parse(fs.readFileSync(routesFile, 'utf8'));
const routes = Array.isArray(raw)
  ? raw
  : Object.keys(raw.routes ?? raw);

/** Caminho sem o prefixo de idioma. Só entra no sitemap o que tem idioma. */
function stripLocale(route) {
  const clean = route.replace(/^\/+|\/+$/g, '');
  if (!clean) return null;
  const [first, ...rest] = clean.split('/');
  if (!LOCALES.includes(first)) return null;
  return rest.join('/');
}

// Agrupa por caminho: uma entrada no sitemap por página, com as três alternativas.
const paths = new Set();
for (const r of routes) {
  const p = stripLocale(r);
  if (p !== null) paths.add(p);
}

const sorted = [...paths].sort();

/** Páginas de seção mudam pouco e são o miolo do site. */
function priorityOf(p) {
  if (p === '') return '1.0';
  if (!p.includes('/')) return '0.8';
  return '0.7';
}

const today = new Date().toISOString().slice(0, 10);

const urls = sorted
  .map((p) => {
    const suffix = p ? `/${p}` : '';
    const alternates = LOCALES.map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${TAG[l]}" href="${ORIGIN}/${l}${suffix}"/>`,
    ).join('\n');

    return `  <url>
    <loc>${ORIGIN}/${DEFAULT}${suffix}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}/${DEFAULT}${suffix}"/>
    <lastmod>${today}</lastmod>
    <priority>${priorityOf(p)}</priority>
  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

fs.writeFileSync(path.join(BROWSER, 'sitemap.xml'), sitemap, 'utf8');

const robots = `User-agent: *
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`;
fs.writeFileSync(path.join(BROWSER, 'robots.txt'), robots, 'utf8');

/* ------------------------------------------------------------------ */
/* Página raiz                                                         */
/* ------------------------------------------------------------------ */

/**
 * O Angular gera a raiz como um meta-refresh mínimo, sem `lang` e sem
 * alternativa para quem não segue o refresh. Isso é uma violação de WCAG 3.1.1
 * — pegada pelo axe em `check-a11y.js`.
 *
 * Aqui ela vira uma página de verdade: `lang` correto, um h1, e links para os
 * três idiomas. Quem tem o refresh funcionando nem vê; quem não tem, escolhe.
 * O hreflang x-default aponta para cá.
 */
const rootIndex = path.join(BROWSER, 'index.html');
const rootPage = `<!doctype html>
<html lang="${TAG[DEFAULT]}">
<head>
<meta charset="utf-8">
<title>ariangular — Acessibilidade em Angular</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Guia interativo de acessibilidade para times Angular. Escolha o idioma.">
<link rel="canonical" href="${ORIGIN}/${DEFAULT}">
${LOCALES.map((l) => `<link rel="alternate" hreflang="${TAG[l]}" href="${ORIGIN}/${l}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${ORIGIN}/${DEFAULT}">
<meta http-equiv="refresh" content="0; url=/${DEFAULT}">
<style>
body{font-family:system-ui,sans-serif;max-width:32rem;margin:4rem auto;padding:0 1.5rem;line-height:1.7}
h1{font-size:1.75rem;margin:0 0 .5rem}
ul{padding-left:1.2rem}
li{margin-bottom:.4rem}
a{color:#d1002f}
:focus-visible{outline:3px solid #0b4fd6;outline-offset:3px}
@media(prefers-color-scheme:dark){body{background:#101013;color:#f2f2f5}a{color:#ff7a94}}
</style>
</head>
<body>
<h1>ariangular</h1>
<p>Guia de acessibilidade para times Angular.</p>
<nav aria-label="Idioma">
<ul>
${LOCALES.map((l) => `<li><a href="/${l}" lang="${TAG[l]}" hreflang="${TAG[l]}">${{ pt: 'Português', en: 'English', zh: '简体中文' }[l]}</a></li>`).join('\n')}
</ul>
</nav>
</body>
</html>
`;
fs.writeFileSync(rootIndex, rootPage, 'utf8');
console.log('index.html:  raiz reescrita com lang e escolha de idioma');

console.log(`sitemap.xml: ${sorted.length} páginas x ${LOCALES.length} idiomas`);
console.log(`             ${sorted.length * LOCALES.length} URLs cobertas`);
console.log('robots.txt:  gerado');
