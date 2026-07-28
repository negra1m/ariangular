import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../core/i18n/locale.service';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  protected readonly locale = inject(LocaleService);
  protected readonly year = new Date().getFullYear();
  protected readonly linkedin = 'https://www.linkedin.com/in/negra1m/';
  protected readonly repo = 'https://github.com/negra1m/ariangular';
  protected readonly pressKit = 'https://angular.dev/press-kit';
}
