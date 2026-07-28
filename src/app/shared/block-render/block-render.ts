import { Component, input, inject, signal } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { LocaleService } from '../../core/i18n/locale.service';
import type { Block } from '../../../content/types';

/**
 * Renderiza a lista de blocos de uma seção.
 *
 * Cada tipo de bloco tem regras de acessibilidade próprias, comentadas no
 * template. As duas que mais importam:
 *
 * - Variante de código (correto/evitar) é comunicada por RÓTULO TEXTUAL, não só
 *   por cor de borda. Este site não pode cometer a violação de WCAG 1.4.1 que
 *   ele próprio documenta.
 * - Tabela rolável recebe tabindex e role=region rotulado, senão vira armadilha
 *   para quem navega só por teclado: dá para ver que há mais coluna, mas não
 *   dá para chegar nela.
 */
@Component({
  selector: 'app-block-render',
  templateUrl: './block-render.html',
  styleUrl: './block-render.css',
})
export class BlockRender {
  readonly blocks = input.required<Block[]>();
  /** Usado para compor rótulos únicos de tabela e de botão copiar. */
  readonly context = input<string>('');
  /** Deslocamento de heading, para blocos aninhados em callout. */
  readonly headingOffset = input(0);

  protected readonly locale = inject(LocaleService);
  private readonly announcer = inject(LiveAnnouncer);

  protected readonly copiedIndex = signal<number | null>(null);

  protected headingTag(level: 1 | 2): string {
    return `h${Math.min(6, 2 + level + this.headingOffset())}`;
  }

  protected async copy(code: string, index: number): Promise<void> {
    try {
      await navigator.clipboard.writeText(code);
      this.copiedIndex.set(index);
      // Confirmação anunciada, não só visual: quem usa leitor de tela não vê o
      // botão mudar de estado.
      this.announcer.announce(this.locale.strings().copied, 'polite');
      setTimeout(() => this.copiedIndex.set(null), 2000);
    } catch {
      // clipboard indisponível (contexto inseguro, permissão negada):
      // o código continua selecionável na mão
    }
  }
}
