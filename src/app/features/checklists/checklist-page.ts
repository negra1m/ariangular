import { Component, inject, computed, input, effect, signal, viewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';
import { ProgressService } from '../../core/progress/progress.service';
import { findChecklist } from '../../../content';

@Component({
  selector: 'app-checklist-page',
  imports: [RouterLink],
  templateUrl: './checklist-page.html',
  styleUrl: './checklist-page.css',
})
export class ChecklistPage {
  readonly checklistId = input.required<string>();

  protected readonly locale = inject(LocaleService);
  protected readonly progress = inject(ProgressService);
  private readonly seo = inject(SeoService);
  private readonly announcer = inject(LiveAnnouncer);

  private readonly dialogRef = viewChild<ElementRef<HTMLDialogElement>>('resetDialog');
  /** Guarda quem abriu o dialog, para devolver o foco ao fechar. */
  private opener: HTMLElement | null = null;

  protected readonly checklist = computed(() =>
    findChecklist(this.locale.locale(), this.checklistId()),
  );

  protected readonly done = computed(() => {
    const c = this.checklist();
    if (!c) return 0;
    const checked = this.progress.checkedOf(c.id)();
    return c.items.filter((i) => checked.has(i.id)).length;
  });

  protected readonly total = computed(() => this.checklist()?.items.length ?? 0);

  protected readonly copied = signal(false);

  constructor() {
    effect(() => {
      const c = this.checklist();
      if (!c) return;
      this.seo.apply({
        title: c.title,
        description: `${c.title} — ${c.items.length} itens de acessibilidade para conferir.`,
        path: `checklists/${c.id}`,
      });
    });
  }

  protected isChecked(itemId: string): boolean {
    const c = this.checklist();
    return c ? this.progress.isChecked(c.id, itemId) : false;
  }

  protected toggle(itemId: string): void {
    const c = this.checklist();
    if (!c) return;
    this.progress.toggle(c.id, itemId);
    this.announceProgress();
  }

  protected checkAll(): void {
    const c = this.checklist();
    if (!c) return;
    this.progress.setAll(
      c.id,
      c.items.map((i) => i.id),
    );
    this.announceProgress();
  }

  protected uncheckAll(): void {
    const c = this.checklist();
    if (!c) return;
    this.progress.clear(c.id);
    this.announceProgress();
  }

  private timer?: ReturnType<typeof setTimeout>;

  /**
   * Anuncia o progresso com debounce.
   *
   * O checkbox nativo já anuncia "marcado"/"não marcado" sozinho. Este anúncio
   * é complementar — sem debounce, marcar vários itens seguidos vira uma
   * metralhadora de fala, que é o "aria-live em excesso" que o próprio
   * documento lista como erro comum.
   */
  private announceProgress(): void {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.announcer.announce(
        `${this.done()} / ${this.total()} ${this.locale.strings().progressDone}`,
        'polite',
      );
    }, 600);
  }

  /* ---------- Dialog de reset ---------- */

  protected openReset(event: MouseEvent): void {
    this.opener = event.currentTarget as HTMLElement;
    // <dialog showModal> entrega de graça: role=dialog, aria-modal, foco preso
    // e ESC fechando. Reimplementar isso à mão é a origem clássica de modal
    // inacessível — o próprio documento tem um checklist só para esse caso.
    this.dialogRef()?.nativeElement.showModal();
  }

  protected closeReset(): void {
    this.dialogRef()?.nativeElement.close();
  }

  /** Devolve o foco a quem abriu — item do Checklist Modal do documento. */
  protected onDialogClose(): void {
    this.opener?.focus();
    this.opener = null;
  }

  protected confirmReset(): void {
    this.uncheckAll();
    this.closeReset();
  }

  /* ---------- Export ---------- */

  protected async exportMarkdown(): Promise<void> {
    const c = this.checklist();
    if (!c) return;
    const checked = this.progress.checkedOf(c.id)();
    const lines = [
      `## ${c.title}`,
      '',
      `${this.done()}/${this.total()}`,
      '',
      ...c.items.map((i) => `- [${checked.has(i.id) ? 'x' : ' '}] ${i.text}`),
    ];
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      this.copied.set(true);
      this.announcer.announce(this.locale.strings().copied, 'polite');
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // clipboard indisponível: o conteúdo continua visível na página
    }
  }
}
