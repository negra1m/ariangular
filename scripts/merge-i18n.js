/**
 * Junta os fragmentos de tradução num único catálogo por idioma.
 *
 *   node scripts/merge-i18n.js en
 *
 * A tradução é feita em lotes — um arquivo por parte, em `i18n/<locale>/`.
 * Traduzir 1.246 strings num arquivo só é impraticável de revisar e de
 * retomar; em lotes, cada parte fecha por si e o progresso é visível.
 *
 * Saída: `i18n/strings.<locale>.json`
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const locale = process.argv[2];

if (!locale || !/^(en|zh)$/.test(locale)) {
  console.error('Uso: node scripts/merge-i18n.js <en|zh>');
  process.exit(1);
}

const dir = path.join(ROOT, 'i18n', locale);
if (!fs.existsSync(dir)) {
  console.error(`Pasta ${path.relative(ROOT, dir)} não existe.`);
  process.exit(1);
}

const pt = JSON.parse(fs.readFileSync(path.join(ROOT, 'i18n', 'strings.pt.json'), 'utf8'));

const merged = {};
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort();

for (const file of files) {
  const part = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
  const before = Object.keys(merged).length;
  Object.assign(merged, part);
  console.log(
    `  ${file.padEnd(24)} ${String(Object.keys(part).length).padStart(5)} strings` +
      (Object.keys(merged).length - before !== Object.keys(part).length ? '  (com sobreposição)' : ''),
  );
}

/* ---------- Validação ---------- */

const ptKeys = new Set(Object.keys(pt));
const unknown = Object.keys(merged).filter((k) => !ptKeys.has(k));
const missing = [...ptKeys].filter((k) => !(k in merged));
const empty = Object.entries(merged).filter(([, v]) => !String(v).trim()).map(([k]) => k);

fs.writeFileSync(
  path.join(ROOT, 'i18n', `strings.${locale}.json`),
  JSON.stringify(merged, null, 2) + '\n',
  'utf8',
);

const done = ptKeys.size - missing.length;
const pct = ((done / ptKeys.size) * 100).toFixed(1);

console.log('');
console.log(`  ${done}/${ptKeys.size} traduzidas (${pct}%)`);

if (unknown.length) {
  console.log(`\n  ${unknown.length} chave(s) que não existem no catálogo pt:`);
  unknown.slice(0, 10).forEach((k) => console.log('    ' + k));
  if (unknown.length > 10) console.log(`    ... e mais ${unknown.length - 10}`);
}

if (empty.length) {
  console.log(`\n  ${empty.length} chave(s) com valor vazio:`);
  empty.slice(0, 10).forEach((k) => console.log('    ' + k));
}

if (missing.length) {
  console.log(`\n  ${missing.length} faltando. Próximos:`);
  missing.slice(0, 8).forEach((k) => console.log('    ' + k));
}

// Chave desconhecida é erro: quer dizer que o catálogo mudou e a tradução
// ficou órfã, ou que houve erro de digitação na chave.
process.exit(unknown.length || empty.length ? 1 : 0);
