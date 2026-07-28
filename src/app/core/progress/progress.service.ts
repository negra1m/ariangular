import { Injectable, inject, signal, PLATFORM_ID, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const KEY = 'ariangular:progress:v1';

type Store = Record<string, string[]>;

/**
 * Progresso dos checklists em localStorage.
 *
 * Três cuidados que não são opcionais:
 *
 * 1. Guard de plataforma em TODO acesso. localStorage não existe no prerender,
 *    e sem isso o `ng build` quebra ao gerar as páginas estáticas.
 * 2. Falha de escrita (quota cheia, modo privado) não pode derrubar a página —
 *    o progresso é conveniência, não a função principal.
 * 3. Chave de item estável, nunca índice de array: se o documento mudar e uma
 *    linha entrar no meio, progresso por índice passa a marcar o item errado.
 */
@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly store = signal<Store>(this.load());

  /** Sinaliza que a persistência falhou, para a UI poder avisar. */
  readonly persistenceFailed = signal(false);

  private load(): Store {
    if (!this.isBrowser) return {};
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as Store) : {};
    } catch {
      return {};
    }
  }

  private persist(): void {
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(this.store()));
      this.persistenceFailed.set(false);
    } catch {
      this.persistenceFailed.set(true);
    }
  }

  checkedOf(checklistId: string) {
    return computed(() => new Set(this.store()[checklistId] ?? []));
  }

  isChecked(checklistId: string, itemId: string): boolean {
    return (this.store()[checklistId] ?? []).includes(itemId);
  }

  toggle(checklistId: string, itemId: string): void {
    this.store.update((s) => {
      const current = new Set(s[checklistId] ?? []);
      if (current.has(itemId)) current.delete(itemId);
      else current.add(itemId);
      return { ...s, [checklistId]: [...current] };
    });
    this.persist();
  }

  setAll(checklistId: string, itemIds: string[]): void {
    this.store.update((s) => ({ ...s, [checklistId]: [...itemIds] }));
    this.persist();
  }

  clear(checklistId: string): void {
    this.store.update((s) => {
      const next = { ...s };
      delete next[checklistId];
      return next;
    });
    this.persist();
  }

  countOf(checklistId: string): number {
    return (this.store()[checklistId] ?? []).length;
  }
}
