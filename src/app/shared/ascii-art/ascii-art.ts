import {
  Component,
  input,
  signal,
  inject,
  PLATFORM_ID,
  afterNextRender,
  DestroyRef,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type AsciiMotif = 'focus-ring' | 'sound-wave' | 'keyboard' | 'shield';

const CHARS = ' .:-=+*#%@';

/**
 * Arte em caracteres — o elemento gráfico da identidade.
 *
 * Na referência é uma libélula em ASCII animada. Aqui os motivos são do tema
 * deste projeto: o anel de foco, a onda de som que o leitor de tela emite, a
 * malha do teclado, o escudo.
 *
 * Três decisões de acessibilidade:
 *
 * 1. `aria-hidden` e `role="presentation"`. Um campo de 40x20 caracteres lido
 *    em voz alta seria tortura — e não carrega informação nenhuma.
 * 2. A animação só existe sob `prefers-reduced-motion: no-preference`. Quem
 *    pediu menos movimento recebe um quadro estático, não uma versão degradada.
 * 3. Renderiza um quadro estático no prerender e só anima no cliente, para o
 *    HTML servido já ter a arte e o SSG não quebrar.
 */
@Component({
  selector: 'app-ascii-art',
  template: `<pre
    class="ascii"
    aria-hidden="true"
    role="presentation"
  >{{ frame() }}</pre>`,
  styles: `
    .ascii {
      font-family: var(--font-mono);
      font-size: clamp(0.32rem, 0.9vw, 0.7rem);
      line-height: 1.05;
      letter-spacing: 0.06em;
      color: var(--color-muted);
      white-space: pre;
      overflow: hidden;
      user-select: none;
      margin: 0;
      text-align: center;
    }
  `,
})
export class AsciiArt {
  readonly motif = input<AsciiMotif>('focus-ring');
  readonly cols = input(72);
  readonly rows = input(24);

  protected readonly frame = signal('');

  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private raf = 0;

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Quadro estático já no prerender: o HTML servido leva a arte junto.
    this.frame.set(this.render(0));

    afterNextRender(() => {
      if (!this.isBrowser) return;

      const reduce = matchMedia('(prefers-reduced-motion: reduce)');
      if (reduce.matches) return;

      let t = 0;
      const loop = () => {
        t += 0.035;
        this.frame.set(this.render(t));
        this.raf = requestAnimationFrame(loop);
      };
      this.raf = requestAnimationFrame(loop);

      destroyRef.onDestroy(() => cancelAnimationFrame(this.raf));
    });
  }

  /** Campo de caracteres calculado por uma função de intensidade por célula. */
  private render(t: number): string {
    const w = this.cols();
    const h = this.rows();
    const lines: string[] = [];

    for (let y = 0; y < h; y++) {
      let line = '';
      for (let x = 0; x < w; x++) {
        // Normaliza para -1..1, corrigindo a proporção da célula de texto
        const nx = ((x / w) * 2 - 1) * 1.9;
        const ny = (y / h) * 2 - 1;
        const v = this.intensity(nx, ny, t);
        const i = Math.max(0, Math.min(CHARS.length - 1, Math.round(v * (CHARS.length - 1))));
        line += CHARS[i];
      }
      lines.push(line);
    }
    return lines.join('\n');
  }

  private intensity(x: number, y: number, t: number): number {
    const d = Math.hypot(x, y);

    switch (this.motif()) {
      case 'focus-ring': {
        // Anéis concêntricos pulsando: o foco abraçando o elemento
        const ring = Math.abs(Math.sin(d * 4.2 - t * 1.6));
        return Math.max(0, (1 - d * 0.75) * ring);
      }

      case 'sound-wave': {
        // Ondas saindo da esquerda, como a fala de um leitor de tela
        const src = Math.hypot(x + 1.5, y);
        const wave = Math.abs(Math.sin(src * 3 - t * 2.2));
        return Math.max(0, (1 - src * 0.34) * wave);
      }

      case 'keyboard': {
        // Malha de teclas, com um brilho percorrendo — o Tab caminhando
        const gx = Math.abs(Math.sin(x * 6));
        const gy = Math.abs(Math.sin(y * 5));
        const sweep = Math.max(0, 1 - Math.abs(x - Math.sin(t * 0.7) * 1.6) * 1.4);
        return Math.min(1, gx * gy * 0.55 + sweep * 0.5);
      }

      case 'shield': {
        // Silhueta de escudo com o anel dentro
        const inShield = Math.abs(x) < 1 - Math.max(0, y) * 0.8 && Math.abs(y) < 1;
        if (!inShield) return 0;
        const ring = Math.abs(Math.sin(d * 5 - t * 1.2));
        return Math.max(0.12, ring * (1 - d * 0.5));
      }
    }
  }
}
