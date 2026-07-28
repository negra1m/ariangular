import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../core/i18n/locale.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <article class="container nf">
      <h1 tabindex="-1">{{ locale.strings().notFound }}</h1>
      <p>{{ locale.strings().notFoundLead }}</p>
      <p>
        <a [routerLink]="locale.path()">{{ locale.strings().backHome }}</a>
      </p>
    </article>
  `,
  styles: `
    .nf {
      padding-block: var(--space-2xl) var(--space-3xl);
      display: grid;
      gap: var(--space-sm);
    }
    .nf h1 {
      font-size: var(--text-3xl);
      letter-spacing: -0.03em;
    }
    .nf p {
      color: var(--color-muted);
    }
  `,
})
export class NotFound {
  protected readonly locale = inject(LocaleService);
}
