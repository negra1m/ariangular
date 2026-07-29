import {
  Component,
  inject,
  signal,
  computed,
  viewChild,
  ElementRef,
  HostListener,
  effect,
} from '@angular/core';
import { Router } from '@angular/router';
import { LiveAnnouncer, A11yModule } from '@angular/cdk/a11y';
import { LocaleService } from '../../core/i18n/locale.service';
import { SearchService } from '../../core/search/search.service';

/**
 * Busca — combobox segundo o WAI-ARIA Authoring Practices.
 *
 * Este componente é a vitrine técnica do site: se ele estiver errado, o produto
 * perde credibilidade para falar do assunto. Três decisões que importam:
 *
 * 1. O FOCO NUNCA SAI DO INPUT. A opção ativa é indicada por
 *    aria-activedescendant, não por .focus() no <li>. Trocar isso quebra a
 *    digitação para quem usa leitor de tela — é o erro mais comum em combobox.
 *
 * 2. A contagem de resultados é anunciada COM DEBOUNCE. Sem isso, cada tecla
 *    dispara um anúncio e o leitor vira uma metralhadora — exatamente o
 *    "aria-live em excesso" que o próprio documento lista como erro.
 *
 * 3. O atalho "/" é desativado quando o foco está num campo de texto. Atalho de
 *    caractere único sem essa guarda quebra a digitação (WCAG 2.1.4).
 */
@Component({
  selector: 'app-site-search',
  imports: [A11yModule],
  templateUrl: './site-search.html',
  styleUrl: './site-search.css',
})
export class SiteSearch {
  protected readonly locale = inject(LocaleService);
  private readonly search = inject(SearchService);
  private readonly router = inject(Router);
  private readonly announcer = inject(LiveAnnouncer);

  private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('input');

  protected readonly open = signal(false);
  protected readonly query = signal('');
  protected readonly activeIndex = signal(-1);

  protected readonly results = computed(() =>
    this.query().trim().length >= 2 ? this.search.search(this.query()) : [],
  );

  protected readonly activeId = computed(() => {
    const i = this.activeIndex();
    const r = this.results();
    return i >= 0 && i < r.length ? `search-opt-${i}` : null;
  });

  private announceTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    // O conteúdo de trás fica inerte enquanto o painel está aberto: sem isso
    // o Tab escapa para a página e o leitor de tela continua lendo o que está
    // atrás do overlay.
    effect(() => {
      if (typeof document === 'undefined') return;
      const main = document.getElementById('conteudo');
      const open = this.open();
      main?.toggleAttribute('inert', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    effect(() => {
      const n = this.results().length;
      const q = this.query();
      clearTimeout(this.announceTimer);
      if (!this.open() || q.trim().length < 2) return;
      // 400ms: tempo de parar de digitar. Anunciar a cada tecla é tortura.
      this.announceTimer = setTimeout(() => {
        this.announcer.announce(
          n ? this.locale.strings().searchResultsCount(n) : this.locale.strings().searchEmpty,
          'polite',
        );
      }, 400);
    });
  }

  /** Quem abriu o painel, para devolver o foco ao fechar. */
  private opener: HTMLElement | null = null;

  protected openPanel(event?: Event): void {
    this.opener =
      (event?.currentTarget as HTMLElement) ?? (document.activeElement as HTMLElement) ?? null;
    this.open.set(true);
    queueMicrotask(() => this.inputRef()?.nativeElement.focus());
  }

  protected close(): void {
    if (!this.open()) return;
    this.open.set(false);
    this.activeIndex.set(-1);
    // Devolver o foco a quem abriu é o item que o "Checklist Modal" do próprio
    // conteúdo cobra. Sem isso o foco volta para o começo do documento e a
    // pessoa perde o lugar.
    queueMicrotask(() => {
      (this.opener ?? document.querySelector<HTMLElement>('.search__trigger'))?.focus();
      this.opener = null;
    });
  }

  protected onInput(value: string): void {
    this.query.set(value);
    this.activeIndex.set(-1);
  }

  protected onKeydown(event: KeyboardEvent): void {
    const n = this.results().length;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (n) this.activeIndex.set((this.activeIndex() + 1) % n);
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (n) this.activeIndex.set(this.activeIndex() <= 0 ? n - 1 : this.activeIndex() - 1);
        break;

      case 'Home':
        if (n) {
          event.preventDefault();
          this.activeIndex.set(0);
        }
        break;

      case 'End':
        if (n) {
          event.preventDefault();
          this.activeIndex.set(n - 1);
        }
        break;

      case 'Enter': {
        const hit = this.results()[this.activeIndex()];
        if (hit) {
          event.preventDefault();
          this.go(hit.entry.partId, hit.entry.sectionId);
        }
        break;
      }

      case 'Escape':
        event.preventDefault();
        // Primeiro Esc limpa; segundo fecha. Padrão do WAI-ARIA.
        if (this.query()) this.query.set('');
        else this.close();
        break;

      case 'Tab':
        this.close();
        break;
    }
  }

  protected go(partId: string, sectionId: string): void {
    this.close();
    this.query.set('');
    void this.router.navigate([this.locale.path(partId, sectionId)]);
  }

  /** Atalho "/" — inerte quando já se está digitando em algum campo. */
  @HostListener('document:keydown', ['$event'])
  protected onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return;
    const el = event.target as HTMLElement | null;
    const tag = el?.tagName?.toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select' || el?.isContentEditable) return;
    event.preventDefault();
    this.openPanel();
  }

  /** Divide o texto no termo buscado, para realçar com <mark>. */
  protected highlight(text: string): { part: string; hit: boolean }[] {
    const terms = this.query()
      .trim()
      .split(/\s+/)
      .filter((t) => t.length >= 2)
      .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    if (!terms.length) return [{ part: text, hit: false }];

    const re = new RegExp(`(${terms.join('|')})`, 'gi');
    return text
      .split(re)
      .filter(Boolean)
      .map((part) => ({
        part,
        hit: re.test(part) && terms.some((t) => new RegExp(`^${t}$`, 'i').test(part)),
      }));
  }
}
