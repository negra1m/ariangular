/**
 * Gera as imagens de Open Graph.
 *
 *   node scripts/generate-og.js
 *
 * As imagens são geradas UMA VEZ e commitadas em public/og/. Não fazem parte
 * do build: rodar librsvg no CI significaria depender das fontes instaladas no
 * runner, e uma fonte ausente troca o desenho sem falhar em nada.
 *
 * São 20 imagens, não 468. Cada rota de seção herda a imagem da sua parte —
 * uma imagem por seção seria conteúdo idêntico com o título trocado, e o
 * título já vai no og:title, que é renderizado ao lado da imagem por todos os
 * consumidores. Por locale, porque o título da parte é traduzido.
 *
 * Sem ilustração aqui de propósito: as figuras vivem em part-art.html, e
 * copiá-las para cá criaria duas fontes da verdade para o mesmo desenho. A
 * identidade do site é tipográfica antes de ser ilustrada — a OG segue isso.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'public', 'og');

const W = 1200;
const H = 630;

/* Tokens do tema escuro, copiados de src/styles/tokens.css. Não são lidos de
   lá porque a OG usa o escuro sempre: ela é vista em feed de rede social, onde
   não existe preferência de tema do usuário para respeitar. */
const BG = '#000000';
const TEXT = '#ffffff';
const MUTED = '#9b9ba4';
const RULE = '#26262c';
const ACCENT = '#e40035';

/* Arial Black é a display do site. Falha para Helvetica/sans se não existir —
   o script avisa se o resultado for muito diferente do esperado em largura. */
const DISPLAY = 'Arial Black, Arial Bold, Helvetica, sans-serif';
const MONO = 'Consolas, Courier New, monospace';

/* Espelha LOCALES de src/content/types.ts — os idiomas efetivamente
   publicados. Ao publicar zh, acrescente aqui e regenere, senão as páginas
   chinesas caem no og:image de um idioma que não é o delas. */
const LOCALES = ['pt', 'en'];

/** Rotas que ganham imagem própria, além das 7 partes. */
const EXTRA = {
  home: {
    pt: { numeral: '', label: 'GUIA', title: 'ariangular' },
    en: { numeral: '', label: 'GUIDE', title: 'ariangular' },
  },
  auditor: {
    pt: { numeral: '', label: 'FERRAMENTA', title: 'Auditor' },
    en: { numeral: '', label: 'TOOL', title: 'Auditor' },
  },
  checklists: {
    pt: { numeral: '', label: 'FERRAMENTA', title: 'Checklists' },
    en: { numeral: '', label: 'TOOL', title: 'Checklists' },
  },
};

const TAGLINE = {
  pt: 'acessibilidade em angular · wcag 2.2 aa',
  en: 'accessibility in angular · wcag 2.2 aa',
};

/* ------------------------------------------------------------------ */

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const MARGIN = 80;
const TITLE_MAX_W = W - MARGIN * 2;
/** Faixa vertical reservada ao título, entre a régua do topo e a do rodapé. */
const TITLE_TOP = 216;
const TITLE_BOTTOM = 480;

/* Largura média de um glifo do Arial Black, em fração do corpo. Medido
   comparando a primeira geração com a caixa que ela estourou. Estimativa e não
   medição porque librsvg não devolve a caixa do texto — a folga é intencional:
   errar para o lado do pequeno deixa a imagem feia, errar para o grande corta
   a palavra. */
const GLYPH_W = 0.6;
const TRACKING = -0.028;

const widthOf = (text, size) => text.length * size * (GLYPH_W + TRACKING);

/**
 * O wordmark leva "aria" em vermelho, aqui como no site — é o jogo de palavras
 * que dá nome ao projeto e some se a palavra for pintada de uma cor só.
 */
function markup(line) {
  if (line !== 'ariangular') return esc(line);
  return `<tspan fill="${ACCENT}">aria</tspan>ngular`;
}

/** Quebra gulosa por palavra. Devolve null se alguma palavra sozinha estoura. */
function wrap(text, size, maxWidth, maxLines) {
  const lines = [];
  let line = '';

  for (const word of text.split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (widthOf(candidate, size) <= maxWidth) {
      line = candidate;
      continue;
    }
    if (line) lines.push(line);
    if (widthOf(word, size) > maxWidth) return null;
    line = word;
  }
  if (line) lines.push(line);

  return lines.length <= maxLines ? lines : null;
}

/**
 * Maior corpo em que o título ainda cabe em até três linhas.
 *
 * Três e não duas porque "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular"
 * em duas linhas cairia para um corpo que some na miniatura do feed, que é
 * onde essa imagem é vista de verdade.
 */
function fitTitle(title) {
  const maxHeight = TITLE_BOTTOM - TITLE_TOP;
  for (let size = 112; size >= 40; size -= 4) {
    const lines = wrap(title, size, TITLE_MAX_W, 3);
    // Caber em três linhas não basta: três linhas grandes transbordam a faixa
    // e a última encosta na régua do rodapé.
    if (lines && size + (lines.length - 1) * size * 1.04 <= maxHeight) return { size, lines };
  }
  return { size: 40, lines: wrap(title, 40, TITLE_MAX_W, 4) ?? [title] };
}

function svgFor({ numeral, label, title, tagline }) {
  const { size, lines } = fitTitle(title);

  const leading = size * 1.04;
  const blockH = size + (lines.length - 1) * leading;
  // Baseline da primeira linha: topo do bloco centralizado, mais a altura de
  // caixa alta (~0.72 do corpo em grotescas pesadas).
  const first = TITLE_TOP + (TITLE_BOTTOM - TITLE_TOP - blockH) / 2 + size * 0.72;

  const titleLines = lines
    .map(
      (line, i) =>
        `<text x="${MARGIN}" y="${Math.round(first + i * leading)}" font-family="${DISPLAY}" ` +
        `font-size="${size}" fill="${TEXT}" letter-spacing="${(size * TRACKING).toFixed(1)}">` +
        `${markup(line)}</text>`,
    )
    .join('\n  ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${BG}"/>

  <!-- Barra de acento à esquerda: o mesmo gesto da moldura do site -->
  <rect x="0" y="0" width="14" height="${H}" fill="${ACCENT}"/>

  <!-- Marca -->
  <g transform="translate(${MARGIN}, 62)">
    <path d="M24 0 47 8.2 43.5 42.3 24 52 4.5 42.3 1 8.2Z" fill="${ACCENT}"/>
    <circle cx="24" cy="24.5" r="10.5" fill="none" stroke="${TEXT}" stroke-width="3.5"/>
    <circle cx="24" cy="24.5" r="3.6" fill="${TEXT}"/>
    <text x="66" y="36" font-family="${DISPLAY}" font-size="30" fill="${TEXT}"
      letter-spacing="-0.5"><tspan fill="${ACCENT}">aria</tspan>ngular</text>
  </g>

  <!-- Régua + etiqueta, como no cabeçalho de seção. O numeral vive AQUI e não
       acima do título: em linha ele custa nada, empilhado custa uma linha
       inteira de título. -->
  <rect x="${MARGIN}" y="164" width="${TITLE_MAX_W}" height="1" fill="${RULE}"/>
  <text x="${W - MARGIN}" y="152" text-anchor="end" font-family="${MONO}" font-size="21"
    fill="${MUTED}" letter-spacing="4">${esc(label)}${
      numeral ? ` <tspan fill="${ACCENT}">${esc(numeral)}</tspan>` : ''
    }</text>

  ${titleLines}

  <!-- Rodapé -->
  <rect x="${MARGIN}" y="${H - 116}" width="${TITLE_MAX_W}" height="1" fill="${RULE}"/>
  <text x="${MARGIN}" y="${H - 72}" font-family="${MONO}" font-size="22" fill="${MUTED}"
    letter-spacing="2">${esc(tagline)}</text>
  <text x="${W - MARGIN}" y="${H - 72}" text-anchor="end" font-family="${MONO}" font-size="22"
    fill="${MUTED}" letter-spacing="2">ariangular.vercel.app</text>
</svg>`;
}

/* ------------------------------------------------------------------ */

async function main() {
  const { parts } = JSON.parse(fs.readFileSync(path.join(ROOT, 'i18n', 'content.pt.json'), 'utf8'));

  fs.mkdirSync(OUT, { recursive: true });

  let n = 0;

  for (const locale of LOCALES) {
    const catalogue = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'i18n', `strings.${locale}.json`), 'utf8'),
    );
    const dir = path.join(OUT, locale);
    fs.mkdirSync(dir, { recursive: true });

    const jobs = [];

    for (const part of parts) {
      const title = catalogue[`part.${part.id}.title`];
      if (!title) {
        console.error(`Falta part.${part.id}.title em strings.${locale}.json`);
        process.exit(1);
      }
      jobs.push({
        key: part.id,
        numeral: part.numeral,
        label: locale === 'pt' ? 'PARTE' : 'PART',
        title,
      });
    }

    for (const [key, byLocale] of Object.entries(EXTRA)) {
      jobs.push({ key, ...byLocale[locale] });
    }

    for (const job of jobs) {
      const svg = svgFor({ ...job, tagline: TAGLINE[locale] });
      const file = path.join(dir, `${job.key}.png`);
      await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(file);
      n++;
      console.log(`  ${locale}/${job.key}.png`.padEnd(34), job.title);
    }
  }

  console.log(`\n${n} imagens em public/og/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
