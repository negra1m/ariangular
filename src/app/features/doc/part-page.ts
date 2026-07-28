import { Component, inject, computed, input, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';
import { findPart } from '../../../content';

/** Índice de uma parte: lista as seções, cada uma com o seu resumo. */
@Component({
  selector: 'app-part-page',
  imports: [RouterLink],
  templateUrl: './part-page.html',
  styleUrl: './part-page.css',
})
export class PartPage {
  readonly partId = input.required<string>();

  protected readonly locale = inject(LocaleService);
  private readonly seo = inject(SeoService);

  protected readonly part = computed(() => findPart(this.locale.locale(), this.partId()));

  constructor() {
    effect(() => {
      const p = this.part();
      if (!p) return;
      this.seo.apply({ title: p.title, description: p.summary, path: p.id });
    });
  }
}
