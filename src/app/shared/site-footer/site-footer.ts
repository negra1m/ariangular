import { Component, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocaleService } from '../../core/i18n/locale.service';
import { partsOf } from '../../../content';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  protected readonly locale = inject(LocaleService);
  protected readonly parts = computed(() => partsOf(this.locale.locale()));

  protected readonly year = new Date().getFullYear();
  protected readonly linkedin = 'https://www.linkedin.com/in/negra1m/';
  protected readonly repo = 'https://github.com/negra1m/ariangular';
}
