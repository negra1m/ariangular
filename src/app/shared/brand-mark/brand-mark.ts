import { Component, input } from '@angular/core';

/**
 * Marca do produto: escudo derivado do Angular + wordmark ariangular.
 *
 * O escudo é uma ADAPTAÇÃO do escudo Angular v17+, uso explicitamente permitido
 * e encorajado pelo press kit oficial, que licencia os logos sob CC BY 4.0 e
 * convida a comunidade a mudar cor e forma. O conteúdo interno é próprio: um
 * anel de foco, que é o tema deste projeto. Atribuição em NOTICE.md.
 *
 * O wordmark sobrepõe as duas palavras no "A" compartilhado:
 *   A R I A N G U L A R
 *   └─ ARIA ─┘
 *      └── angular ───┘
 *
 * O destaque de "aria" é só visual. O nome acessível é o texto completo, uma
 * vez — sem isso o leitor de tela anunciaria "aria" e "ngular" separados.
 *
 * O nome NÃO começa com "Angular" de propósito: `@angular/aria` é um pacote
 * oficial lançado no v22, e um nome que começasse igual criaria confusão de
 * origem — o único limite real que a Open Usage Commons coloca.
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
