import { Component, inject, signal, computed, HostListener, effect } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { A11yModule } from '@angular/cdk/a11y';
import { LocaleService } from '../../core/i18n/locale.service';
import { ThemeService } from '../../core/theme/theme.service';
import { partsOf } from '../../../content';
import { LOCALES, LOCALE_LABEL, type Locale } from '../../../content/types';
import { SiteSearch } from '../site-search/site-search';
import { BrandMark } from '../brand-mark/brand-mark';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, SiteSearch, BrandMark, A11yModule],
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

  /** Quem abriu o menu, para devolver o foco ao fechar. */
  private opener: HTMLElement | null = null;

  constructor() {
    // O conteúdo de trás fica inerte enquanto o menu está aberto: sem isso o
    // Tab escapa para a página e o leitor de tela continua lendo o que está
    // atrás do overlay.
    effect(() => {
      if (typeof document === 'undefined') return;
      const main = document.getElementById('conteudo');
      const open = this.menuOpen();
      main?.toggleAttribute('inert', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  protected toggleMenu(event?: Event): void {
    const next = !this.menuOpen();
    if (next) this.opener = (event?.currentTarget as HTMLElement) ?? null;
    this.menuOpen.set(next);
    if (!next) this.restoreFocus();
  }

  protected closeMenu(): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    this.restoreFocus();
  }

  private restoreFocus(): void {
    // Devolver o foco a quem abriu é o item que o "Checklist Modal" do próprio
    // conteúdo cobra — e o que mais some em implementação caseira.
    queueMicrotask(() => {
      (this.opener ?? document.querySelector<HTMLElement>('.hdr__menu'))?.focus();
      this.opener = null;
    });
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  /**
   * Troca de idioma preservando a página.
   *
   * Os slugs são estáveis entre locales, então basta trocar o primeiro
   * segmento — quem lê /pt/aria/aria-label vai para /en/aria/aria-label, não
   * para a home. Jogar a pessoa para a home ao trocar de idioma é fazer ela
   * perder o lugar da leitura.
   */
  protected switchLocale(target: Locale): void {
    const segments = this.router.url.split('#')[0].split('?')[0].split('/').filter(Boolean);
    segments[0] = target;
    this.closeMenu();
    void this.router.navigate(['/', ...segments]);
  }
}
