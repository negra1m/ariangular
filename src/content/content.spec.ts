import { describe, it, expect } from 'vitest';
import { LOCALES, DEFAULT_LOCALE, partsOf, checklistsOf, contentOf } from './index';
import type { Locale, Part } from './types';

/**
 * Integridade do conteúdo por idioma.
 *
 * Existe por causa de um bug real: `zh` entrou em LOCALES, o conteúdo chinês
 * foi gerado, mas o registro em `content/index.ts` continuou apontando para
 * `ptContent`. As 186 páginas chinesas saíram com a interface traduzida e o
 * corpo inteiro em português — e nada falhou. As rotas existiam, o axe passava,
 * o sitemap estava certo, o build ficava verde. Só aparecia lendo a página.
 *
 * Um idioma publicado precisa provar que é um idioma, não só que existe.
 */

const translated = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/** Amostra estável de textos que qualquer tradução real muda. */
function sample(locale: Locale): string[] {
  const parts = partsOf(locale);
  return [
    ...parts.map((p) => p.title),
    ...parts.flatMap((p) => p.sections.slice(0, 3).map((s) => s.title + '|' + s.summary)),
    ...checklistsOf(locale).map((c) => c.title),
  ];
}

const idsOf = (parts: Part[]) =>
  parts.map((p) => `${p.id}:${p.sections.map((s) => s.id).join(',')}`);

describe('conteúdo por idioma', () => {
  it('todo locale publicado tem conteúdo registrado', () => {
    for (const locale of LOCALES) {
      expect(contentOf(locale), locale).toBeDefined();
      expect(partsOf(locale).length, locale).toBeGreaterThan(0);
    }
  });

  describe.each(translated)('%s', (locale) => {
    it('não repete o texto do idioma padrão', () => {
      const base = sample(DEFAULT_LOCALE);
      const other = sample(locale);
      expect(other).toHaveLength(base.length);

      const identical = other.filter((t, i) => t === base[i]);
      // Alguns títulos coincidem de propósito — "ARIA", "POUR", "aria-label"
      // são os mesmos em qualquer idioma. Metade idêntica não é coincidência,
      // é o registro apontando para o idioma errado.
      expect(
        identical.length,
        `${identical.length}/${base.length} idênticos ao ${DEFAULT_LOCALE}`,
      ).toBeLessThan(base.length / 2);
    });

    it('tem a mesma estrutura de ids do idioma padrão', () => {
      // Slug estável entre idiomas é o que faz o hreflang casar sem tabela
      // de-para. Se divergir, /pt/x/y existe e /zh/x/y não.
      expect(idsOf(partsOf(locale))).toEqual(idsOf(partsOf(DEFAULT_LOCALE)));
    });

    it('não tem seção com título ou resumo vazio', () => {
      for (const part of partsOf(locale)) {
        for (const section of part.sections) {
          expect(section.title.trim(), `${part.id}/${section.id}`).not.toBe('');
          expect(section.summary.trim(), `${part.id}/${section.id}`).not.toBe('');
        }
      }
    });
  });

  it('nenhum id de seção se repete dentro da mesma parte', () => {
    for (const locale of LOCALES) {
      for (const part of partsOf(locale)) {
        const ids = part.sections.map((s) => s.id);
        expect(new Set(ids).size, `${locale}/${part.id}`).toBe(ids.length);
      }
    }
  });
});
