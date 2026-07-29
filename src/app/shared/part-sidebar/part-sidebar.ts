import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../core/i18n/locale.service';
import type { Part } from '../../../content/types';

/**
 * Navegação lateral com as seções da parte atual.
 *
 * O plano original previa um índice "Nesta página" com os headings internos.
 * Isso não serve aqui: das 160 seções, a maioria não tem heading interno
 * nenhum — o índice ficaria vazio ou com um item só.
 *
 * O que a pessoa precisa saber com 160 páginas é ONDE ELA ESTÁ dentro da
 * parte, e o que vem antes e depois. Por isso a lista é de seções irmãs, com
 * a atual marcada por `aria-current="page"`.
 */
@Component({
  selector: 'app-part-sidebar',
  imports: [RouterLink],
  templateUrl: './part-sidebar.html',
  styleUrl: './part-sidebar.css',
})
export class PartSidebar {
  readonly part = input.required<Part>();
  readonly currentId = input.required<string>();

  protected readonly locale = inject(LocaleService);
}
