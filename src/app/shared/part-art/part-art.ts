import { Component, input } from '@angular/core';

/**
 * Ilustração decorativa da parte, uma por id.
 *
 * Desenhos inline em vez de arquivos: são sete SVGs pequenos, e inline eles
 * herdam os tokens de cor do tema. Como <img> ficariam presos numa cor só e
 * quebrariam a alternância claro/escuro.
 *
 * Todas são decorativas — o `aria-hidden` está no template. Cada desenho
 * ilustra o assunto que a parte trata, e não conteúdo novo: a informação está
 * inteira no título e no resumo ao lado.
 */
@Component({
  selector: 'app-part-art',
  templateUrl: './part-art.html',
  styleUrl: './part-art.css',
})
export class PartArt {
  /** Id da parte. Um id sem desenho correspondente simplesmente não renderiza. */
  readonly partId = input.required<string>();
}
