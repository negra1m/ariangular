import { Component, inject, signal, computed, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { LocaleService } from '../../core/i18n/locale.service';
import { SeoService } from '../../core/seo/seo.service';
import { AuditService, type AuditResult } from './audit.service';
import { RULES } from './rules';

const EXAMPLE = `<div (click)="salvar()">
  Salvar
</div>

<button>
  <mat-icon>close</mat-icon>
</button>

<input placeholder="CPF">

<a (click)="excluir()">Excluir</a>

<div role="dialog">
  <h2>Confirmar pagamento</h2>
</div>

<span tabindex="3" (click)="abrir()">Detalhes</span>`;

@Component({
  selector: 'app-auditor',
  imports: [FormsModule, RouterLink],
  templateUrl: './auditor.html',
  styleUrl: './auditor.css',
})
export class Auditor {
  protected readonly locale = inject(LocaleService);
  private readonly audit = inject(AuditService);
  private readonly announcer = inject(LiveAnnouncer);
  private readonly seo = inject(SeoService);

  protected readonly source = signal('');
  protected readonly result = signal<AuditResult | null>(null);
  protected readonly answers = signal<Record<string, string>>({});
  protected readonly copied = signal(false);

  protected readonly ruleCount = RULES.length;

  protected readonly output = computed(() => {
    const r = this.result();
    if (!r) return '';
    return this.audit.applyAnswers(r.fixedCode, this.answers());
  });

  protected readonly counts = computed(() => {
    const f = this.result()?.findings ?? [];
    return {
      critico: f.filter((x) => x.severity === 'critico').length,
      alto: f.filter((x) => x.severity === 'alto').length,
      medio: f.filter((x) => x.severity === 'medio').length,
      baixo: f.filter((x) => x.severity === 'baixo').length,
      fixed: f.filter((x) => x.fixed).length,
      pending: f.filter((x) => !x.fixed).length,
    };
  });

  constructor() {
    effect(() => {
      this.locale.locale();
      this.seo.apply({
        title: this.locale.strings().auditor,
        description:
          'Cole um trecho de template Angular e receba as violações de acessibilidade, com as correções determinísticas já aplicadas.',
        path: 'auditor',
      });
    });
  }

  protected loadExample(): void {
    this.source.set(EXAMPLE);
  }

  /**
   * Analisa sob comando explícito, nunca a cada tecla.
   * Análise contínua enquanto se digita gera anúncio constante no leitor de
   * tela e resultado instável a cada caractere.
   */
  protected analyze(): void {
    const r = this.audit.analyze(this.source());
    this.answers.set({});
    this.result.set(r);

    const c = this.counts();
    this.announcer.announce(
      r.error
        ? r.error
        : `Análise concluída. ${c.fixed} corrigidos automaticamente, ${c.pending} precisam da sua resposta.`,
      'polite',
    );

    // Move o foco para o resultado. Aqui mover foco é correto: foi uma ação
    // explícita da pessoa, não uma mudança espontânea de tela.
    queueMicrotask(() => {
      document.getElementById('resultado-titulo')?.focus();
    });
  }

  protected setAnswer(placeholder: string, value: string): void {
    this.answers.update((a) => ({ ...a, [placeholder]: value }));
  }

  protected async copyOutput(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.output());
      this.copied.set(true);
      this.announcer.announce(this.locale.strings().copied, 'polite');
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // clipboard indisponível: o código segue visível e selecionável
    }
  }

  protected severityLabel(s: string): string {
    return { critico: 'Crítico', alto: 'Alto', medio: 'Médio', baixo: 'Baixo' }[s] ?? s;
  }
}
