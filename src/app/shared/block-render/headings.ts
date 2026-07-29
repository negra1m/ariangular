import type { Block } from '../../../content/types';

export interface HeadingRef {
  /** Posição do bloco na lista, para o renderizador casar id com heading. */
  index: number;
  id: string;
  text: string;
  level: 1 | 2;
}

/**
 * Id de âncora, derivado da POSIÇÃO e não do texto.
 *
 * Um slug de texto seria mais bonito — `#binding-de-aria` — mas mudaria em
 * cada idioma, e `/pt/…#binding-de-aria` deixaria de existir em `/zh/…`.
 * Trocar de idioma no meio da leitura jogaria a pessoa para o topo da página,
 * e um link compartilhado só funcionaria no idioma de quem copiou.
 *
 * Posicional é estável nos três: `#t-2` é o segundo tópico da seção em
 * qualquer idioma. É a mesma decisão já tomada para os slugs de URL, que
 * também não são traduzidos.
 *
 * `t-` e não só o número porque id de HTML não pode começar com dígito em
 * seletores CSS sem escape.
 */
export const headingId = (n: number) => `t-${n}`;

/** Headings de bloco de uma seção, na ordem, já com id de âncora. */
export function headingsOf(blocks: readonly Block[]): HeadingRef[] {
  const out: HeadingRef[] = [];
  for (const [index, block] of blocks.entries()) {
    if (block.kind !== 'heading') continue;
    out.push({ index, id: headingId(out.length + 1), text: block.text, level: block.level });
  }
  return out;
}
