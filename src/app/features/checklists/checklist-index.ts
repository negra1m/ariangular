import { Component, inject, computed, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';
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
  imports: [RouterLink],
  templateUrl: './checklist-index.html',
  styleUrl: './checklist-index.css',
})
export class ChecklistIndex {
  protected readonly locale = inject(LocaleService);
  private readonly seo = inject(SeoService);

  protected readonly stages: { id: ChecklistStage; label: string }[] = [
    { id: 'refinamento', label: 'Refinamento' },
    { id: 'desenvolvimento', label: 'Desenvolvimento' },
    { id: 'pull-request', label: 'Pull Request' },
    { id: 'qa', label: 'QA' },
    { id: 'fechamento', label: 'Fechamento' },
  ];

  protected readonly all = computed(() => checklistsOf(this.locale.locale()));

  protected byStage(stage: ChecklistStage) {
    return this.all().filter((c) => c.stage === stage);
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
}
