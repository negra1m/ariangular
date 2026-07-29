/**
 * Calcula o hash SHA-256 do script inline de tema e injeta na CSP.
 *
 *   node scripts/csp-hash.js
 *
 * O `index.html` tem um script inline que aplica o tema antes da primeira
 * pintura — sem ele haveria flash do tema errado. Para permitir esse script
 * sem abrir `'unsafe-inline'` (que libera QUALQUER script inline, inclusive um
 * injetado), a CSP referencia o hash exato do conteúdo.
 *
 * Roda depois do build, sobre o HTML gerado, e reescreve o vercel.json.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const BROWSER = path.join(ROOT, 'dist', 'ariangular', 'browser');
const VERCEL = path.join(ROOT, 'vercel.json');

if (!fs.existsSync(BROWSER)) {
  console.error('dist não encontrado. Rode `npm run build` antes.');
  process.exit(1);
}

/* ---------- Coleta todo script inline das páginas geradas ---------- */

const hashes = new Set();
let scanned = 0;

/**
 * Só entram os scripts EXECUTÁVEIS.
 *
 * `application/json`, `application/ld+json` e `speculationrules` são blocos de
 * dados: o navegador não os executa e a CSP `script-src` não se aplica a eles.
 * Incluí-los gerava 873 hashes — um por página, por causa do state transfer do
 * Angular — o que tornaria a header inviável e não protegeria nada.
 */
const NOT_EXECUTABLE = /type\s*=\s*["'](application\/(ld\+)?json|speculationrules|importmap)["']/i;

function scan(file) {
  const html = fs.readFileSync(file, 'utf8');
  for (const m of html.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g)) {
    const attrs = m[1];
    const content = m[2];
    if (!content.trim()) continue;
    if (NOT_EXECUTABLE.test(attrs)) continue;
    const hash = crypto.createHash('sha256').update(content, 'utf8').digest('base64');
    hashes.add(`'sha256-${hash}'`);
  }
  scanned++;
}

(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.name.endsWith('.html')) scan(full);
  }
})(BROWSER);

if (!hashes.size) {
  console.error('Nenhum script inline encontrado — verifique se o build rodou.');
  process.exit(1);
}

/* ---------- Reescreve a CSP ---------- */

const vercel = JSON.parse(fs.readFileSync(VERCEL, 'utf8'));
const list = [...hashes].sort();

// 'strict-dynamic' permite que os scripts carregados PELO script confiável
// também rodem — é o que faz o bundle do Angular funcionar sem liberar tudo.
const scriptSrc = `script-src 'self' ${list.join(' ')}`;

const csp = [
  "default-src 'self'",
  scriptSrc,
  // Angular injeta estilos de componente inline; sem hash estável para eles,
  // 'unsafe-inline' aqui é aceito. Estilo não executa código.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests',
].join('; ');

let changed = false;
for (const rule of vercel.headers ?? []) {
  for (const h of rule.headers ?? []) {
    if (h.key === 'Content-Security-Policy') {
      h.value = csp;
      changed = true;
    }
  }
}

if (!changed) {
  console.error('Não achei o header Content-Security-Policy no vercel.json.');
  process.exit(1);
}

fs.writeFileSync(VERCEL, JSON.stringify(vercel, null, 2) + '\n', 'utf8');

console.log(`CSP: ${scanned} páginas varridas, ${hashes.size} hash(es) de script inline`);
list.forEach((h) => console.log('  ' + h));
console.log("script-src sem 'unsafe-inline'");
