/** Validador de aninhamento: confere se toda tag abre e fecha na ordem certa. */
const fs = require('fs');

let html = fs.readFileSync(process.argv[2], 'utf8');

// tirar o <style> e os blocos de código do caminho — não são markup estrutural
html = html.replace(/<style>[\s\S]*?<\/style>/g, '');
html = html.replace(/<pre><code>[\s\S]*?<\/code><\/pre>/g, '<pre></pre>');

const VOID = new Set(['meta', 'link', 'br', 'hr', 'img', 'input', 'area', 'base', 'col', 'source']);

const stack = [];
const errors = [];
const tagRe = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b[^>]*?(\/?)>/g;
let m;

while ((m = tagRe.exec(html)) !== null) {
  const closing = m[1] === '/';
  const name = m[2].toLowerCase();
  const selfClose = m[3] === '/';

  if (name === '!doctype' || VOID.has(name) || selfClose) continue;

  const line = html.slice(0, m.index).split('\n').length;

  if (!closing) {
    stack.push({ name, line });
  } else {
    if (!stack.length) {
      errors.push(`linha ${line}: </${name}> sem abertura`);
    } else if (stack[stack.length - 1].name !== name) {
      const top = stack[stack.length - 1];
      errors.push(`linha ${line}: </${name}> fecha, mas o aberto é <${top.name}> (linha ${top.line})`);
      stack.pop();
    } else {
      stack.pop();
    }
  }
}

for (const t of stack) errors.push(`<${t.name}> aberto na linha ${t.line} e nunca fechado`);

if (errors.length) {
  console.log('ERROS DE ANINHAMENTO:', errors.length);
  errors.slice(0, 30).forEach((e) => console.log('  ' + e));
  process.exit(1);
}
console.log('Aninhamento OK — nenhuma tag desbalanceada.');

/* Checagens de acessibilidade estrutural.
   Os blocos de código são EXEMPLOS do documento (inclusive exemplos de erro,
   como `outline: none` e ids repetidos) — não são markup da página. */
const raw = fs
  .readFileSync(process.argv[2], 'utf8')
  .replace(/<pre><code>[\s\S]*?<\/code><\/pre>/g, '<pre></pre>');
const checks = [];

const h1 = (raw.match(/<h1\b/g) || []).length;
checks.push([h1 === 1, `<h1> único (achado: ${h1})`]);

// nenhum salto de nível de heading
const levels = [...raw.matchAll(/<h([1-6])\b/g)].map((x) => Number(x[1]));
let jump = null;
for (let i = 1; i < levels.length; i++) {
  if (levels[i] > levels[i - 1] + 1) { jump = `h${levels[i - 1]} -> h${levels[i]}`; break; }
}
checks.push([!jump, `sem salto de nível de heading${jump ? ` (achado: ${jump})` : ''}`]);

const ths = (raw.match(/<th\b(?![^>]*scope=)/g) || []).filter((s) => !s.startsWith('<thead'));
checks.push([ths.length === 0, `todo <th> com scope (sem scope: ${ths.length})`]);

const imgs = (raw.match(/<img\b(?![^>]*\balt=)/g) || []).length;
checks.push([imgs === 0, `todo <img> com alt (sem alt: ${imgs})`]);

checks.push([/lang="pt-BR"/.test(raw), 'html com lang="pt-BR"']);
checks.push([!/maximum-scale|user-scalable=no/.test(raw), 'viewport não bloqueia zoom']);
checks.push([/class="skip-link"/.test(raw), 'skip link presente']);
checks.push([/<main\b/.test(raw), '<main> presente']);
checks.push([(raw.match(/<main\b/g) || []).length === 1, '<main> único']);
checks.push([/prefers-reduced-motion/.test(raw), 'prefers-reduced-motion tratado']);
checks.push([/:focus-visible/.test(raw), 'estilo de foco definido']);
checks.push([!/outline:\s*none/.test(raw), 'sem outline: none']);

// toda region focável tem nome
const regions = [...raw.matchAll(/role="region"(?![^>]*aria-label)/g)].length;
checks.push([regions === 0, `toda role="region" tem aria-label (sem: ${regions})`]);

// ids duplicados
const ids = [...raw.matchAll(/\sid="([^"]+)"/g)].map((x) => x[1]);
const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
checks.push([dup.length === 0, `sem id duplicado${dup.length ? ` (${[...new Set(dup)].join(', ')})` : ''}`]);

console.log('\nAcessibilidade estrutural:');
let failed = 0;
for (const [ok, label] of checks) {
  console.log(`  ${ok ? 'OK  ' : 'FALHA'} ${label}`);
  if (!ok) failed++;
}
process.exit(failed ? 1 : 0);
