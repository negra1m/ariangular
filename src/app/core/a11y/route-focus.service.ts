import { Injectable, inject, DestroyRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LiveAnnouncer } from '@angular/cdk/a11y';

/**
 * Move o foco e anuncia a mudança de tela a cada navegação.
 *
 * O documento que este site publica descreve exatamente este problema:
 *
 *   "Aplicações SPA não recarregam a página. O leitor de tela não percebe
 *    automaticamente que houve mudança de tela."
 *
 * E prescreve a solução: mover o foco para o H1 e anunciar o nome da tela.
 * Este serviço é a implementação dessa prescrição — se ele estiver errado, o
 * produto perde o direito de ensinar o assunto.
 */
@Injectable({ providedIn: 'root' })
export class RouteFocusService {
  private readonly router = inject(Router);
  private readonly announcer = inject(LiveAnnouncer);
  private readonly doc = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** Última rota base anunciada, para não repetir anúncio em troca de fragmento. */
  private lastPath = '';

  /** A primeira renderização não é "mudança de tela" — não deve ser anunciada. */
  private first = true;

  start(): void {
    if (!this.isBrowser) return;

    const sub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.onNavigated(e.urlAfterRedirects));

    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  private onNavigated(url: string): void {
    const [pathOnly, fragment] = url.split('#');

    if (this.first) {
      this.first = false;
      this.lastPath = pathOnly;
      return;
    }

    // Trocar só o fragmento dentro da mesma página não é mudança de tela.
    // Anunciar aqui seria ruído a cada clique no índice lateral.
    const samePage = pathOnly === this.lastPath;
    this.lastPath = pathOnly;
    if (samePage) return;

    // O DOM da nova rota ainda não existe neste tick.
    requestAnimationFrame(() => this.focusAndAnnounce(Boolean(fragment)));
  }

  private focusAndAnnounce(hasFragment: boolean): void {
    const heading =
      this.doc.querySelector<HTMLElement>('main h1[tabindex="-1"]') ??
      this.doc.querySelector<HTMLElement>('main h1') ??
      this.doc.getElementById('conteudo');

    if (!heading) return;

    if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');

    // Com fragmento na URL, o scroll é para a âncora — mover o foco não pode
    // arrastar a página de volta para o topo.
    heading.focus({ preventScroll: hasFragment });

    // Anunciar DEPOIS de mover o foco. Na ordem inversa, o leitor de tela corta
    // o anúncio no meio ao processar a mudança de foco.
    const label = heading.textContent?.trim();
    if (label) this.announcer.announce(label, 'polite');
  }
}
