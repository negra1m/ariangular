import { Component, inject, computed, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';
import { partsOf } from '../../../content';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly locale = inject(LocaleService);
  private readonly seo = inject(SeoService);

  protected readonly parts = computed(() => partsOf(this.locale.locale()));
  protected readonly totalSections = computed(() =>
    this.parts().reduce((a, p) => a + p.sections.length, 0),
  );

  constructor() {
    effect(() => {
      const l = this.locale.locale();
      this.seo.apply({
        title:
          l === 'en'
            ? 'Accessibility for Angular teams'
            : l === 'zh'
              ? 'Angular 无障碍开发指南'
              : 'Acessibilidade para times Angular',
        description:
          l === 'en'
            ? 'Interactive accessibility guide for Angular teams: ARIA, forms, components, Angular CDK A11y, TalkBack, VoiceOver and WCAG 2.2.'
            : l === 'zh'
              ? '面向 Angular 团队的交互式无障碍指南：ARIA、表单、组件、Angular CDK A11y、TalkBack、VoiceOver 和 WCAG 2.2。'
              : 'Guia interativo de acessibilidade para times Angular: ARIA, formulários, componentes, Angular CDK A11y, TalkBack, VoiceOver e WCAG 2.2.',
        path: '',
      });
    });
  }
}
