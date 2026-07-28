import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

type Theme = 'light' | 'dark';
const KEY = 'ariangular:theme';

/**
 * Tema claro/escuro.
 *
 * A aplicação inicial acontece num script inline no index.html, antes da
 * primeira pintura — aqui só ficam a leitura do estado e a troca. Se este
 * serviço fosse o responsável por aplicar, haveria flash do tema errado.
 *
 * Todo acesso a localStorage e document é guardado por plataforma: sem isso o
 * prerender quebra, e o erro do Angular nesse caso não aponta a linha.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly theme = signal<Theme>(this.initial());
  readonly current = this.theme.asReadonly();
  readonly isDark = () => this.theme() === 'dark';

  private initial(): Theme {
    if (!this.isBrowser) return 'light';
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // modo privado ou storage bloqueado: segue a preferência do sistema
    }
    return this.doc.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  toggle(): void {
    this.set(this.theme() === 'dark' ? 'light' : 'dark');
  }

  set(theme: Theme): void {
    this.theme.set(theme);
    if (!this.isBrowser) return;
    this.doc.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      // não conseguir salvar a preferência não pode derrubar a página
    }
  }
}
