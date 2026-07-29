/**
 * Idiomas publicados, lidos de src/content/types.ts.
 *
 * Estavam duplicados à mão em generate-sitemap.js e generate-og.js. Publicar
 * um idioma novo exigia lembrar de três lugares, e esquecer não quebrava nada:
 * o build passava, mas o sitemap anunciava dois idiomas de três e as páginas
 * do terceiro apontavam para o og:image de outro. Erro silencioso.
 *
 * Regex e não import porque o arquivo é TypeScript e estes scripts rodam em
 * Node puro. A forma esperada é uma única linha:
 *
 *   export const LOCALES: readonly Locale[] = ['pt', 'en', 'zh'];
 */

const fs = require('fs');
const path = require('path');

const TYPES = path.join(__dirname, '..', '..', 'src', 'content', 'types.ts');

function read(name) {
  const src = fs.readFileSync(TYPES, 'utf8');
  const m = src.match(new RegExp(`export const ${name}[^=]*=\\s*\\[([^\\]]*)\\]`));
  if (!m) throw new Error(`Não encontrei ${name} em src/content/types.ts`);
  const list = [...m[1].matchAll(/['"]([a-z-]+)['"]/g)].map((x) => x[1]);
  if (!list.length) throw new Error(`${name} está vazio em src/content/types.ts`);
  return list;
}

module.exports = {
  /** Idiomas efetivamente publicados: rotas, hreflang, sitemap, og:image. */
  LOCALES: read('LOCALES'),
  /** Código BCP 47, para lang e hreflang. */
  TAG: { pt: 'pt-BR', en: 'en', zh: 'zh-Hans' },
  /** Nome do idioma escrito nele mesmo — nunca traduzir. */
  LABEL: { pt: 'Português', en: 'English', zh: '简体中文' },
  DEFAULT: 'pt',
};
