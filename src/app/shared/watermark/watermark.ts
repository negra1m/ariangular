import { Component } from '@angular/core';

/**
 * Watermark invisível em zero-width Unicode.
 *
 * Codifica a assinatura em U+200B (zero-width space) e U+200D (zero-width
 * joiner), um bit por caractere. Invisível na tela e ausente do texto copiado
 * a olho nu.
 *
 * O cuidado que este projeto exige, e que o padrão não menciona: caracteres
 * zero-width DENTRO de texto lido geram pausa ou leitura espúria em alguns
 * leitores de tela. Aqui eles ficam num nó próprio, fora do fluxo de leitura,
 * com `aria-hidden` — nunca misturados a conteúdo.
 *
 * Se o Prettier ou o editor removerem os caracteres, restaurar. O teste em
 * `watermark.spec.ts` falha se sumirem.
 */
@Component({
  selector: 'app-watermark',
  template: `<span class="wm" aria-hidden="true" role="presentation">{{ mark }}</span>`,
  styles: `
    .wm {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      user-select: none;
      pointer-events: none;
    }
  `,
})
export class Watermark {
  protected readonly mark = encodeZeroWidth('Feito por - Few Company | Vini');
}

/**
 * Os caracteres vão como escape Unicode, não literais.
 *
 * Dois motivos: o ESLint acusa `no-irregular-whitespace` nos literais, e —
 * mais importante — editor, formatador e ferramenta de "limpar espaços" apagam
 * invisíveis sem avisar. Escapado, o watermark sobrevive a qualquer um deles e
 * continua sendo gerado em runtime.
 */
const ZW_ZERO = '​'; // zero-width space
const ZW_ONE = '‍'; // zero-width joiner

/** Um bit por caractere: 0 vira U+200B, 1 vira U+200D. */
export function encodeZeroWidth(text: string): string {
  return [...text]
    .map((ch) =>
      ch
        .charCodeAt(0)
        .toString(2)
        .padStart(8, '0')
        .split('')
        .map((bit) => (bit === '0' ? ZW_ZERO : ZW_ONE))
        .join(''),
    )
    .join('');
}

/** Inverso de `encodeZeroWidth`, usado pelo teste. */
export function decodeZeroWidth(encoded: string): string {
  const bits = [...encoded]
    .filter((c) => c === ZW_ZERO || c === ZW_ONE)
    .map((c) => (c === ZW_ZERO ? '0' : '1'))
    .join('');

  let out = '';
  for (let i = 0; i + 8 <= bits.length; i += 8) {
    out += String.fromCharCode(parseInt(bits.slice(i, i + 8), 2));
  }
  return out;
}
