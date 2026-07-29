import { Component, inject, computed, input, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';
import { BlockRender } from '../../shared/block-render/block-render';
import { SectionHeader } from '../../shared/section-header/section-header';
import { findSection, neighbours } from '../../../content';

/**
 * Uma seção da documentação — a página mais importante do site.
 *
 * São 156 por idioma, 468 no total, cada uma com título, descrição e OG
 * próprios. É esta granularidade que faz alguém procurando "aria-label em
 * botão de ícone" cair na resposta em vez de numa página com 27 seções.
 */
@Component({
  selector: 'app-section-page',
  imports: [RouterLink, BlockRender, SectionHeader],
  templateUrl: './section-page.html',
  styleUrl: './section-page.css',
})
export class SectionPage {
  /** Vinculado pelo withComponentInputBinding a partir dos params da rota. */
  readonly partId = input.required<string>();
  readonly sectionId = input.required<string>();

  protected readonly locale = inject(LocaleService);
  private readonly seo = inject(SeoService);

  protected readonly data = computed(() =>
    findSection(this.locale.locale(), this.partId(), this.sectionId()),
  );

  protected readonly around = computed(() =>
    neighbours(this.locale.locale(), this.partId(), this.sectionId()),
  );

  constructor() {
    effect(() => {
      const d = this.data();
      if (!d) return;
      this.seo.apply({
        title: `${d.section.title} · ${d.part.title}`,
        description: d.section.summary,
        path: `${this.partId()}/${this.sectionId()}`,
      });
    });
  }
}
