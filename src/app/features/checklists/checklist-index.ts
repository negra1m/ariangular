import { Component, inject, computed, effect, signal, viewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';
import { ProgressService } from '../../core/progress/progress.service';
import { SectionHeader } from '../../shared/section-header/section-header';
import { checklistsOf } from '../../../content';
import type { ChecklistStage } from '../../../content/types';

/**
 * Índice dos checklists, agrupados pelo momento de uso.
 *
 * Agrupar por etapa do fluxo e não por ordem alfabética: quem chega aqui está
 * num ponto específico do trabalho — refinando, desenvolvendo, revisando PR ou
 * testando.
 */
@Component({
  selector: 'app-checklist-index',
  imports: [RouterLink, SectionHeader],
  templateUrl: './checklist-index.html',
  styleUrl: './checklist-index.css',
})
export class ChecklistIndex {
  protected readonly locale = inject(LocaleService);
  protected readonly progress = inject(ProgressService);
  private readonly seo = inject(SeoService);
  private readonly announcer = inject(LiveAnnouncer);

  private readonly dialogRef = viewChild<ElementRef<HTMLDialogElement>>('resetAllDialog');
  private opener: HTMLElement | null = null;

  protected readonly stages: { id: ChecklistStage; label: string }[] = [
    { id: 'refinamento', label: 'Refinamento' },
    { id: 'desenvolvimento', label: 'Desenvolvimento' },
    { id: 'pull-request', label: 'Pull Request' },
    { id: 'qa', label: 'QA' },
    { id: 'fechamento', label: 'Fechamento' },
  ];

  protected readonly all = computed(() => checklistsOf(this.locale.locale()));

  /** Quantos checklists já foram iniciados — habilita o reset global. */
  protected readonly started = computed(
    () => Object.values(this.progress.snapshot()).filter((v) => v.length > 0).length,
  );

  protected byStage(stage: ChecklistStage) {
    return this.all().filter((c) => c.stage === stage);
  }

  /** Itens marcados de um checklist. Lê o snapshot para reagir a mudanças. */
  protected doneOf(id: string): number {
    return (this.progress.snapshot()[id] ?? []).length;
  }

  constructor() {
    effect(() => {
      this.locale.locale();
      this.seo.apply({
        title: this.locale.strings().checklists,
        description:
          'Checklists de acessibilidade para story, desenvolvimento, pull request, QA, TalkBack, VoiceOver e Definition of Done.',
        path: 'checklists',
      });
    });
  }

  /* ---------- Reset global ---------- */

  protected readonly confirming = signal(false);

  protected openResetAll(event: MouseEvent): void {
    this.opener = event.currentTarget as HTMLElement;
    // <dialog showModal> entrega role, aria-modal, foco preso e ESC prontos
    // e testados pelo navegador. O retorno de foco é nosso.
    this.dialogRef()?.nativeElement.showModal();
  }

  protected closeResetAll(): void {
    this.dialogRef()?.nativeElement.close();
  }

  protected onDialogClose(): void {
    this.opener?.focus();
    this.opener = null;
  }

  protected confirmResetAll(): void {
    this.progress.clearAll();
    this.closeResetAll();
    this.announcer.announce(
      this.locale.locale() === 'en'
        ? 'All progress cleared'
        : this.locale.locale() === 'zh'
          ? '所有进度已清除'
          : 'Todo o progresso foi limpo',
      'polite',
    );
  }
}
