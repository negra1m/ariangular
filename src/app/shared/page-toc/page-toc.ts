import {
  Component,
  input,
  inject,
  signal,
  computed,
  effect,
  DOCUMENT,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LocaleService } from '../../core/i18n/locale.service';
import { headingsOf } from '../block-render/headings';
import type { Block } from '../../../content/types';

/**
 * Índice dos tópicos da seção aberta.
 *
 * Duas decisões que definem se ele ajuda ou atrapalha:
 *
 * 1. O IntersectionObserver NÃO move foco e NÃO anuncia nada. Ele só marca
 *    `aria-current="location"`. Um índice que rouba o foco enquanto a pessoa
 *    rola torna a página impossível de ler, e um que anuncia a cada tópico
 *    vira a metralhadora de aria-live que o próprio conteúdo lista como erro.
 *
 * 2. Os ids vêm de `headingsOf`, a mesma função que o corpo usa. Duas
 *    numerações independentes gerariam links para âncoras que não existem —
 *    quebra silenciosa, invisível para teste de rota.
 *
 * Não renderiza com menos de dois tópicos: um índice de um item só é ruído.
 */
@Component({
  selector: 'app-page-toc',
  templateUrl: './page-toc.html',
  styleUrl: './page-toc.css',
})
export class PageToc {
  readonly blocks = input.required<readonly Block[]>();

  protected readonly locale = inject(LocaleService);
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly headings = computed(() => headingsOf(this.blocks()));
  protected readonly visible = computed(() => this.headings().length >= 2);

  protected readonly activeId = signal<string | null>(null);

  private observer?: IntersectionObserver;

  constructor() {
    effect((onCleanup) => {
      const list = this.headings();
      this.activeId.set(null);
      if (!this.isBrowser || !list.length || typeof IntersectionObserver === 'undefined') return;

      // Espera o DOM da nova seção existir: o effect roda antes do render.
      const raf = requestAnimationFrame(() => this.observe(list.map((h) => h.id)));

      onCleanup(() => {
        cancelAnimationFrame(raf);
        this.observer?.disconnect();
        this.observer = undefined;
      });
    });
  }

  private observe(ids: string[]): void {
    const seen = new Map<string, boolean>();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) seen.set(e.target.id, e.isIntersecting);
        // O primeiro tópico visível, na ordem do documento — e não o último
        // que disparou, que depende da direção da rolagem e fica instável.
        this.activeId.set(ids.find((id) => seen.get(id)) ?? this.activeId());
      },
      // Faixa estreita no topo: o tópico "atual" é o que está sob o cabeçalho,
      // não qualquer um que apareça na tela.
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 },
    );

    for (const id of ids) {
      const el = this.doc.getElementById(id);
      if (el) this.observer.observe(el);
    }
  }
}
