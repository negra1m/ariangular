import { Component, input } from '@angular/core';

/**
 * Marca do produto: escudo derivado do Angular + wordmark AngulARIA.
 *
 * O escudo é uma ADAPTAÇÃO do escudo Angular v17+, uso explicitamente permitido
 * e encorajado pelo press kit oficial, que licencia os logos sob CC BY 4.0 e
 * convida a comunidade a mudar cor e forma. O conteúdo interno é próprio: um
 * anel de foco, que é o tema deste projeto. Atribuição em NOTICE.md.
 *
 * O wordmark sobrepõe as duas palavras no "AR" compartilhado:
 *   A N G U L A R I A
 *   └── Angular ──┘
 *           └─ ARIA ─┘
 *
 * O destaque de "ARIA" é só visual. O nome acessível é o texto completo, uma
 * vez — sem isso o leitor de tela anunciaria "Angul" e "ARIA" separados.
 */
@Component({
  selector: 'app-brand-mark',
  templateUrl: './brand-mark.html',
  styleUrl: './brand-mark.css',
})
export class BrandMark {
  /** Esconde o wordmark, deixando só o escudo (usado no mobile). */
  readonly compact = input(false);
}
