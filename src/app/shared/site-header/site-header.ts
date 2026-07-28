import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { LocaleService } from '../../core/i18n/locale.service';
import { ThemeService } from '../../core/theme/theme.service';
import { partsOf } from '../../../content';
import { LOCALES, LOCALE_LABEL, type Locale } from '../../../content/types';
import { BrandMark } from '../brand-mark/brand-mark';
import { SiteSearch } from '../site-search/site-search';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, BrandMark, SiteSearch],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  protected readonly locale = inject(LocaleService);
  protected readonly theme = inject(ThemeService);
  private readonly router = inject(Router);

  protected readonly menuOpen = signal(false);
  protected readonly parts = computed(() => partsOf(this.locale.locale()));

  protected readonly locales = LOCALES;
  protected readonly localeLabel = LOCALE_LABEL;

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  /**
   * Troca de idioma preservando a página.
   *
   * Os slugs são estáveis entre locales, então basta trocar o primeiro
   * segmento — quem está lendo /pt/aria/aria-label vai parar em
   * /en/aria/aria-label, não na home. Jogar a pessoa para a home ao trocar de
   * idioma é perder o lugar da leitura.
   */
  protected switchLocale(target: Locale): void {
    const segments = this.router.url.split('#')[0].split('/').filter(Boolean);
    segments[0] = target;
    void this.router.navigate(['/', ...segments]);
  }
}
