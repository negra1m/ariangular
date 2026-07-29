import type { Locale, LocaleContent, Part, Section, Checklist } from './types';
import { ptContent } from './pt';
import { enContent } from './en';
import { zhContent } from './zh';

/**
 * Registro de conteúdo por idioma.
 *
 * `en` e `zh` são gerados por `scripts/build-locale.js` a partir da estrutura
 * do pt e do catálogo em `i18n/`.
 *
 * Um idioma novo precisa ser ligado AQUI além de entrar em LOCALES. Enquanto
 * `zh` apontou para `ptContent`, as páginas chinesas saíram com a interface
 * traduzida e o corpo em português, e nada falhou: rota existia, axe passava,
 * o build ficava verde. Só aparece lendo a página.
 */
const registry: Record<Locale, LocaleContent> = {
  pt: ptContent,
  en: enContent,
  zh: zhContent,
};

export function contentOf(locale: Locale): LocaleContent {
  return registry[locale] ?? ptContent;
}

export function partsOf(locale: Locale): Part[] {
  return contentOf(locale).parts;
}

export function findPart(locale: Locale, partId: string): Part | undefined {
  return partsOf(locale).find((p) => p.id === partId);
}

export function findSection(
  locale: Locale,
  partId: string,
  sectionId: string,
): { part: Part; section: Section } | undefined {
  const part = findPart(locale, partId);
  const section = part?.sections.find((s) => s.id === sectionId);
  return part && section ? { part, section } : undefined;
}

export function checklistsOf(locale: Locale): Checklist[] {
  return contentOf(locale).checklists;
}

export function findChecklist(locale: Locale, id: string): Checklist | undefined {
  return checklistsOf(locale).find((c) => c.id === id);
}

/**
 * Seção anterior e seguinte, atravessando a fronteira entre partes.
 * Ler a documentação de ponta a ponta precisa funcionar mesmo com uma página
 * por seção — sem isso, 156 páginas viram 156 becos sem saída.
 */
export function neighbours(
  locale: Locale,
  partId: string,
  sectionId: string,
): { prev?: { part: Part; section: Section }; next?: { part: Part; section: Section } } {
  const flat: { part: Part; section: Section }[] = [];
  for (const part of partsOf(locale)) {
    for (const section of part.sections) flat.push({ part, section });
  }
  const i = flat.findIndex((x) => x.part.id === partId && x.section.id === sectionId);
  if (i < 0) return {};
  return { prev: flat[i - 1], next: flat[i + 1] };
}

export * from './types';
