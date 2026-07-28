/**
 * Verifica o contraste de todos os pares de cor dos tokens, nos dois temas.
 *
 * Um guia de acessibilidade não tem o direito de errar contraste. Este script roda
 * no CI e falha o build se algum par cair abaixo do exigido.
 *
 *   node scripts/check-contrast.js
 */

const fs = require('fs');
const path = require('path');

/* ---------- WCAG ---------- */

function srgbToLinear(c) {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function luminance(hex) {
  const h = hex.replace('#', '').trim();
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
}

function contrast(a, b) {
  const la = luminance(a);
  const lb = luminance(b);
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

/* ---------- Tokens ---------- */

// Lê os valores direto do CSS para não haver divergência entre o que é testado
// e o que é servido.
const cssPath = path.join(__dirname, '..', 'src', 'styles', 'tokens.css');
const css = fs.readFileSync(cssPath, 'utf8');

/**
 * Extrai `--nome: #hex` de todo bloco cujo seletor casa com `selectorRe`.
 * Recebe regex, não string: o seletor do tema escuro aparece com aspas simples
 * no CSS e com duplas em outros lugares — casar literal é fonte de falso OK.
 */
function tokensOf(selectorRe) {
  const re = new RegExp('(' + selectorRe + ')\\s*\\{([\\s\\S]*?)\\n\\s*\\}', 'g');
  const out = {};
  let m;
  while ((m = re.exec(css)) !== null) {
    for (const [, name, value] of m[2].matchAll(/(--[\w-]+)\s*:\s*(#[0-9a-fA-F]{3,8})\s*;/g)) {
      out[name] = value;
    }
  }
  return out;
}

const light = tokensOf(':root(?!:not)(?!\\[)');
const darkOverrides = tokensOf('\\[data-theme=[\'"]dark[\'"]\\]');
const dark = { ...light, ...darkOverrides };

if (!Object.keys(darkOverrides).length) {
  console.error('\n  ERRO: nenhum token do tema escuro encontrado em tokens.css.');
  console.error('  Sem isso o tema escuro passaria testando as cores do claro.\n');
  process.exit(1);
}

/* ---------- Pares a verificar ----------
   AA: 4.5:1 texto normal | 3:1 texto grande, ícone, borda de componente e foco  */

const PAIRS = [
  // [foreground, background, mínimo, descrição]
  ['--color-text', '--color-bg', 4.5, 'texto principal sobre fundo'],
  ['--color-text', '--color-surface', 4.5, 'texto principal sobre superfície'],
  ['--color-muted', '--color-bg', 4.5, 'texto secundário sobre fundo'],
  ['--color-muted', '--color-surface', 4.5, 'texto secundário sobre superfície'],
  ['--color-accent', '--color-bg', 4.5, 'acento em texto (link) sobre fundo'],
  ['--color-accent', '--color-surface', 4.5, 'acento em texto sobre superfície'],
  ['--color-on-accent', '--color-accent', 4.5, 'texto dentro de botão de acento'],
  ['--color-border', '--color-bg', 3, 'borda de componente sobre fundo'],
  ['--color-focus', '--color-bg', 3, 'anel de foco sobre fundo'],
  ['--color-focus', '--color-surface', 3, 'anel de foco sobre superfície'],
  ['--color-code-text', '--color-code-bg', 4.5, 'código sobre fundo de código'],
  ['--color-info', '--color-info-bg', 4.5, 'callout informação'],
  ['--color-warning', '--color-warning-bg', 4.5, 'callout atenção'],
  ['--color-success', '--color-success-bg', 4.5, 'callout boa prática'],
  ['--color-text', '--color-info-bg', 4.5, 'texto dentro do callout informação'],
  ['--color-text', '--color-warning-bg', 4.5, 'texto dentro do callout atenção'],
  ['--color-text', '--color-success-bg', 4.5, 'texto dentro do callout boa prática'],
  ['--color-mark-text', '--color-mark-bg', 4.5, 'termo realçado na busca'],
];

/* ---------- Execução ---------- */

let failures = 0;
let checked = 0;

for (const [themeName, tokens] of [
  ['CLARO', light],
  ['ESCURO', dark],
]) {
  console.log(`\n  TEMA ${themeName}`);
  console.log('  ' + '-'.repeat(74));

  for (const [fgName, bgName, min, label] of PAIRS) {
    const fg = tokens[fgName];
    const bg = tokens[bgName];

    if (!fg || !bg) {
      console.log(`  AUSENTE  ${label}  (${!fg ? fgName : bgName} não definido)`);
      failures++;
      continue;
    }

    const ratio = contrast(fg, bg);
    const ok = ratio >= min;
    checked++;
    if (!ok) failures++;

    const status = ok ? 'OK   ' : 'FALHA';
    const r = ratio.toFixed(2).padStart(5);
    console.log(`  ${status} ${r}:1  (min ${min})  ${label}`);
    if (!ok) console.log(`         ${fg} sobre ${bg}`);
  }
}

console.log('\n  ' + '='.repeat(74));
console.log(`  ${checked} pares verificados, ${failures} falha(s).`);

if (failures) {
  console.log('\n  Contraste reprovado. Ajuste os tokens antes de seguir.\n');
  process.exit(1);
}
console.log('  Contraste aprovado nos dois temas.\n');
