import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideZonelessChangeDetection, type Type } from '@angular/core';
import axe from 'axe-core';

import { SiteSearch } from './shared/site-search/site-search';
import { ChecklistPage } from './features/checklists/checklist-page';
import { Auditor } from './features/auditor/auditor';

/**
 * axe nos estados que só existem DEPOIS de interagir.
 *
 * `scripts/check-a11y.js` roda axe nas 373 páginas prerenderizadas, mas o HTML
 * estático é sempre o estado inicial: painel de busca fechado, dialog fechado,
 * auditor vazio. As violações mais caras moram justamente do outro lado do
 * clique — combobox sem aria-expanded correto, modal sem rótulo, lista de
 * resultados sem role.
 *
 * Aqui os componentes são montados de verdade, levados até o estado, e só
 * então analisados. Roda em jsdom, no mesmo `npm test`, sem browser.
 *
 * O que NÃO é coberto aqui: contraste (exige CSS computado — está em
 * check-contrast.js) e foco visível de verdade (exige gente — está no roteiro
 * de teste manual da fase 10).
 */

/** Regras A/AA, iguais às de check-a11y.js — o critério é um só. */
const AXE_OPTIONS: axe.RunOptions = {
  runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] },
  rules: { 'color-contrast': { enabled: false } },
};

async function violationsOf(el: Element): Promise<string[]> {
  const results = await axe.run(el, AXE_OPTIONS);
  return results.violations.map(
    (v) => `[${v.impact}] ${v.id}: ${v.help}\n      ${v.nodes[0]?.html.slice(0, 140)}`,
  );
}

/**
 * Monta o componente já dentro de um <main id="conteudo">.
 *
 * O painel de busca marca esse elemento como `inert` ao abrir. Sem ele no DOM
 * o efeito roda a vazio e o teste passaria por um motivo que não existe em
 * produção.
 */
function mount<T>(component: Type<T>, inputs: Record<string, unknown> = {}) {
  TestBed.configureTestingModule({
    providers: [provideZonelessChangeDetection(), provideRouter([])],
  });

  const host = document.createElement('main');
  host.id = 'conteudo';
  document.body.appendChild(host);

  const fixture = TestBed.createComponent(component);
  for (const [key, value] of Object.entries(inputs)) fixture.componentRef.setInput(key, value);
  host.appendChild(fixture.nativeElement);
  fixture.detectChanges();

  return fixture;
}

const flush = () => new Promise((r) => setTimeout(r, 0));

/**
 * Espera os anúncios com debounce dispararem AINDA dentro do teste.
 *
 * A busca anuncia a contagem depois de 400ms e o checklist depois de 600ms.
 * Terminar antes disso deixa o timer pendente: ele acorda com o TestBed já
 * destruído e o LiveAnnouncer estoura em cima do elemento que foi removido.
 */
const settle = () => new Promise((r) => setTimeout(r, 700));

/** Dispara input como o navegador dispara: valor no elemento, depois o evento. */
function type(input: HTMLInputElement | HTMLTextAreaElement, value: string): void {
  input.value = value;
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

describe('axe em estados pós-interação', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  // O painel de busca marca o body com overflow:hidden e o main com inert.
  // Sem desfazer, o estado vaza para o teste seguinte.
  afterEach(() => {
    document.body.innerHTML = '';
    document.body.style.overflow = '';
  });

  describe('busca', () => {
    it('painel aberto com resultados', async () => {
      const fixture = mount(SiteSearch);
      const el = fixture.nativeElement as HTMLElement;

      el.querySelector<HTMLButtonElement>('.search__trigger')!.click();
      fixture.detectChanges();

      type(el.querySelector<HTMLInputElement>('#site-search-input')!, 'aria');
      fixture.detectChanges();
      await settle();

      // Sem resultado o teste passaria sem exercitar o listbox — que é o
      // ponto inteiro deste caso.
      expect(el.querySelectorAll('[role="option"]').length).toBeGreaterThan(0);
      expect(await violationsOf(el)).toEqual([]);
    });

    it('opção ativa apontada por aria-activedescendant', async () => {
      const fixture = mount(SiteSearch);
      const el = fixture.nativeElement as HTMLElement;

      el.querySelector<HTMLButtonElement>('.search__trigger')!.click();
      fixture.detectChanges();

      const input = el.querySelector<HTMLInputElement>('#site-search-input')!;
      type(input, 'aria');
      fixture.detectChanges();

      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      fixture.detectChanges();
      await settle();

      const activeId = input.getAttribute('aria-activedescendant');
      expect(activeId).toBeTruthy();
      // O foco permanece no input: o padrão combobox depende disso.
      expect(el.querySelector(`#${activeId}`)?.getAttribute('aria-selected')).toBe('true');
      expect(await violationsOf(el)).toEqual([]);
    });

    it('painel aberto sem resultados', async () => {
      const fixture = mount(SiteSearch);
      const el = fixture.nativeElement as HTMLElement;

      el.querySelector<HTMLButtonElement>('.search__trigger')!.click();
      fixture.detectChanges();

      type(el.querySelector<HTMLInputElement>('#site-search-input')!, 'qqqzzzxxx');
      fixture.detectChanges();
      await settle();

      expect(el.querySelector('.search__empty')).not.toBeNull();
      expect(await violationsOf(el)).toEqual([]);
    });
  });

  describe('checklist', () => {
    it('itens marcados', async () => {
      // 'aria' e não 'checklist-aria': o id do checklist, não o da seção que
      // o originou.
      const fixture = mount(ChecklistPage, { checklistId: 'aria' });
      const el = fixture.nativeElement as HTMLElement;

      expect(el.querySelectorAll('.cl__check').length).toBeGreaterThan(0);

      el.querySelectorAll<HTMLInputElement>('.cl__check').forEach((box, i) => {
        if (i % 2 === 0) box.click();
      });
      fixture.detectChanges();
      await settle();

      expect([...el.querySelectorAll<HTMLInputElement>('.cl__check')].some((b) => b.checked)).toBe(
        true,
      );
      expect(await violationsOf(el)).toEqual([]);
    });

    it('dialog de reset aberto', async () => {
      const fixture = mount(ChecklistPage, { checklistId: 'aria' });
      const el = fixture.nativeElement as HTMLElement;

      const dialog = el.querySelector<HTMLDialogElement>('dialog')!;
      expect(dialog).not.toBeNull();
      // jsdom implementa <dialog>, mas showModal() só existe a partir da v26.
      // Se faltar, o teste ainda vale: o que se analisa é o dialog visível.
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
      fixture.detectChanges();
      await flush();

      expect(dialog.hasAttribute('open')).toBe(true);
      expect(await violationsOf(el)).toEqual([]);
    });
  });

  describe('auditor', () => {
    it('resultado com achados e perguntas', async () => {
      const fixture = mount(Auditor);
      const el = fixture.nativeElement as HTMLElement;

      const [analyze, loadExample] = [
        ...el.querySelectorAll<HTMLButtonElement>('.auditor__btn'),
      ] as HTMLButtonElement[];
      expect(loadExample).toBeDefined();

      loadExample.click();
      fixture.detectChanges();
      await flush();

      analyze.click();
      fixture.detectChanges();
      await flush();

      // O exemplo existe justamente para produzir achados dos dois tipos:
      // os que a ferramenta corrige e os que ela pergunta.
      expect(el.querySelectorAll('.auditor__finding').length).toBeGreaterThan(0);
      expect(el.querySelectorAll('.auditor__field input').length).toBeGreaterThan(0);
      expect(await violationsOf(el)).toEqual([]);
    });

    it('erro de parsing anunciado', async () => {
      const fixture = mount(Auditor);
      const el = fixture.nativeElement as HTMLElement;

      type(el.querySelector<HTMLTextAreaElement>('#snippet')!, 'x'.repeat(60_001));
      fixture.detectChanges();

      el.querySelector<HTMLButtonElement>('.auditor__btn--primary')!.click();
      fixture.detectChanges();
      await flush();

      expect(el.querySelector('[role="alert"]')).not.toBeNull();
      expect(await violationsOf(el)).toEqual([]);
    });
  });
});
