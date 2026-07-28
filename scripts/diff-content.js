/** Compara o texto do original com o corrigido para garantir que nada se perdeu. */
const fs = require('fs');

function textOf(file) {
  let h = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  h = h.slice(h.indexOf('<body>'), h.lastIndexOf('</body>'));
  h = h.replace(/<style>[\s\S]*?<\/style>/g, '');
  return h;
}

function codeBlocks(file) {
  const h = textOf(file);
  const out = [];
  const re = /<pre>\s*<code>([\s\S]*?)<\/code>\s*<\/pre>/g;
  let m;
  while ((m = re.exec(h))) {
    const code = m[1]
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'").replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ').trim();
    if (code) out.push(code);
  }
  return out;
}

function prose(file) {
  let h = textOf(file);
  h = h.replace(/<pre>\s*<code>[\s\S]*?<\/code>\s*<\/pre>/g, ' ');
  h = h.replace(/<[^>]+>/g, ' ');
  h = h.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"');
  h = h.replace(/```/g, ' ');
  return h.replace(/\s+/g, ' ').trim();
}

function words(s) {
  return s.split(' ').filter((w) => w.length > 2 && !/^[|\-=]+$/.test(w));
}

const A = process.argv[2]; // original
const B = process.argv[3]; // corrigido

const pa = prose(A), pb = prose(B);
const wa = words(pa), wb = words(pb);
const ca = codeBlocks(A), cb = codeBlocks(B);

console.log('TEXTO CORRIDO');
console.log('  palavras original :', wa.length);
console.log('  palavras corrigido:', wb.length);

// o corrigido ganha palavras (sumário, rótulos de callout, títulos novos)
const setB = new Set(wb);
const perdidas = wa.filter((w) => !setB.has(w));
const perdidasUnicas = [...new Set(perdidas)];
console.log('  palavras do original ausentes no corrigido:', perdidasUnicas.length);
if (perdidasUnicas.length) console.log('   ', perdidasUnicas.slice(0, 40).join(' | '));

console.log('\nBLOCOS DE CÓDIGO');
console.log('  original :', ca.length);
console.log('  corrigido:', cb.length);
const setCB = new Set(cb);
const codePerdido = ca.filter((c) => !setCB.has(c));
console.log('  blocos do original ausentes no corrigido:', codePerdido.length);
codePerdido.slice(0, 10).forEach((c) => console.log('    -', c.slice(0, 90)));

console.log('\nESTRUTURAS');
const count = (f, re) => (textOf(f).match(re) || []).length;
console.log('  <li>    original', count(A, /<li[\s>]/g), '| corrigido', count(B, /<li[\s>]/g));
console.log('  <table> original', count(A, /<table[\s>]/g), '| corrigido', count(B, /<table[\s>]/g));
console.log('  <tr>    original', count(A, /<tr[\s>]/g), '| corrigido', count(B, /<tr[\s>]/g));
console.log('  <td>    original', count(A, /<td[\s>]/g), '| corrigido', count(B, /<td[\s>]/g));
console.log('  <th>    original', count(A, /<th[\s>]/g), '| corrigido', count(B, /<th[\s>]/g));
