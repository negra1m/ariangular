import { Component, input } from '@angular/core';

/**
 * Cabeçalho de seção, no padrão da referência:
 *
 *                        01
 *                   FUNDAMENTOS
 *   ─────────────────────────────────────────
 *   SEC-01
 *
 * O numeral e o label `SEC-01` são decorativos — o título é que carrega o
 * significado. Marcá-los com aria-hidden evita que o leitor de tela anuncie
 * "zero um" e "sec traço zero um" antes de cada página.
 *
 * O heading é sempre um <h1>: cada página tem um só, e é o alvo do foco a cada
 * navegação de rota.
 */
@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
})
export class SectionHeader {
  /** Numeral exibido acima do título: '01'. */
  readonly numeral = input<string>('');
  /** Label técnico à esquerda da linha: 'SEC-01'. */
  readonly label = input<string>('');
  readonly title = input.required<string>();
  /** Texto de apoio, abaixo da linha. */
  readonly lead = input<string>('');
}
