import { Injectable, inject, signal, computed } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LOCALES, LOCALE_TAG, DEFAULT_LOCALE, type Locale } from '../../../content/types';
import { UI_STRINGS } from './ui-strings';

type Dict = (typeof UI_STRINGS)['pt'];

/**
 * Idioma corrente e rótulos de interface.
 *
 * O locale vem do primeiro segmento da URL (/pt, /en, /zh) e é definido pela
 * rota — não é adivinhado no cliente. É isso que faz o prerender gerar as três
 * versões e o hreflang casar.
 */
@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly doc = inject(DOCUMENT);
  private readonly current = signal<Locale>(DEFAULT_LOCALE);

  readonly locale = this.current.asReadonly();
  readonly tag = computed(() => LOCALE_TAG[this.current()]);
  readonly strings = computed<Dict>(() => UI_STRINGS[this.current()] ?? UI_STRINGS.pt);

  set(locale: Locale): void {
    if (!LOCALES.includes(locale) || this.current() === locale) return;
    this.current.set(locale);
    // O atributo lang precisa refletir o idioma real do conteúdo: é ele que faz
    // o leitor de tela escolher voz e pronúncia certas (WCAG 3.1.1).
    this.doc.documentElement.setAttribute('lang', LOCALE_TAG[locale]);
  }

  /** Monta um caminho já com o prefixo de idioma. */
  path(...segments: (string | number)[]): string {
    return '/' + [this.current(), ...segments].filter((s) => s !== '').join('/');
  }
}
