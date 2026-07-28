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
const DIST = path.join(ROOT, 'dist', 'angularia');
const BROWSER = path.join(DIST, 'browser');
const ORIGIN = process.env.SITE_ORIGIN || 'https://angularia.vercel.app';

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

console.log(`sitemap.xml: ${sorted.length} páginas x ${LOCALES.length} idiomas`);
console.log(`             ${sorted.length * LOCALES.length} URLs cobertas`);
console.log('robots.txt:  gerado');
