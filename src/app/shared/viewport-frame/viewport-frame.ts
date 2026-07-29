import { Component } from '@angular/core';

/**
 * Moldura da viewport: as letras do nome nos quatro cantos e as marcas de
 * registro nas bordas.
 *
 * Tudo aqui é DECORATIVO e invisível para tecnologia assistiva. As letras
 * soltas nos cantos são um recurso gráfico — se fossem lidas, o leitor de tela
 * anunciaria "A", "R", "I", "A" avulsos no começo de cada página, que é
 * exatamente o tipo de ruído que este site ensina a evitar.
 *
 * A marca de registro (⁘) é o motivo recorrente da identidade: aparece aqui,
 * no canto dos cards e no fim das linhas de lista.
 */
@Component({
  selector: 'app-viewport-frame',
  templateUrl: './viewport-frame.html',
  styleUrl: './viewport-frame.css',
})
export class ViewportFrame {}
