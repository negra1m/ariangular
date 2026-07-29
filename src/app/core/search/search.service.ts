import { Injectable, inject, computed } from '@angular/core';
import { LocaleService } from '../i18n/locale.service';
import { partsOf } from '../../../content';
import type { SearchEntry, Block } from '../../../content/types';

export interface SearchHit {
  entry: SearchEntry;
  score: number;
}

/**
 * Busca client-side.
 *
 * Implementação própria, sem biblioteca: são 160 entradas por idioma. O custo
 * de Lunr ou FlexSearch no bundle não se justifica para esse volume.
 *
 * Normalização remove acento nos dois lados — em pt-BR, buscar "formularios"
 * precisa achar "Formulários". Isso não é refinamento, é o caso comum.
 */
@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly locale = inject(LocaleService);

  /** Índice montado a partir do conteúdo do idioma corrente. */
  private readonly index = computed<SearchEntry[]>(() => {
    const out: SearchEntry[] = [];
    for (const part of partsOf(this.locale.locale())) {
      for (const section of part.sections) {
        out.push({
          id: `${part.id}/${section.id}`,
          partId: part.id,
          partTitle: part.title,
          sectionId: section.id,
          sectionTitle: section.title,
          text: flatten(section.blocks),
          keywords: keywordsOf(section.title, section.blocks),
        });
      }
    }
    return out;
  });

  search(query: string, limit = 12): SearchHit[] {
    const terms = normalize(query)
      .split(/\s+/)
      .filter((t) => t.length >= 2);

    if (!terms.length) return [];

    const hits: SearchHit[] = [];

    for (const entry of this.index()) {
      const kw = entry.keywords.map(normalize);
      const title = normalize(entry.sectionTitle);
      const partTitle = normalize(entry.partTitle);
      const body = normalize(entry.text);

      let score = 0;
      let matchedAll = true;

      for (const term of terms) {
        let termScore = 0;

        // Peso 1: match exato em palavra-chave técnica. É como um dev busca —
        // "aria-expanded", "cdkTrapFocus", "2.4.3".
        if (kw.some((k) => k === term)) termScore += 100;
        else if (kw.some((k) => k.includes(term))) termScore += 60;

        // Peso 2: título da seção
        if (title === term) termScore += 80;
        else if (title.includes(term)) termScore += 40;

        // Peso 3: título da parte
        if (partTitle.includes(term)) termScore += 10;

        // Peso 4: corpo
        if (body.includes(term)) termScore += 5;

        if (termScore === 0) {
          matchedAll = false;
          break;
        }
        score += termScore;
      }

      // AND: todos os termos precisam aparecer. Buscar "modal foco" deve trazer
      // a seção sobre foco em modal, não tudo que fala de modal.
      if (matchedAll && score > 0) hits.push({ entry, score });
    }

    return hits
      .sort(
        (a, b) => b.score - a.score || a.entry.sectionTitle.length - b.entry.sectionTitle.length,
      )
      .slice(0, limit);
  }
}

/* ------------------------------------------------------------------ */

/** Minúsculas e sem acento, dos dois lados da comparação. */
function normalize(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
}

function flatten(blocks: Block[]): string {
  const out: string[] = [];
  const walk = (bs: Block[]) => {
    for (const b of bs) {
      if (b.kind === 'paragraph' || b.kind === 'heading' || b.kind === 'reading') out.push(b.text);
      else if (b.kind === 'list') out.push(b.items.join(' '));
      else if (b.kind === 'table')
        out.push([b.caption, ...b.headers, ...b.rows.flat()].filter(Boolean).join(' '));
      else if (b.kind === 'callout') walk(b.blocks);
    }
  };
  walk(blocks);
  return out.join(' ');
}

/**
 * Termos técnicos citados na seção.
 *
 * Não são traduzidos de propósito: `aria-label` é `aria-label` em qualquer
 * idioma, e é assim que a pessoa digita na busca — inclusive quem está lendo
 * a versão em chinês.
 */
function keywordsOf(title: string, blocks: Block[]): string[] {
  const set = new Set<string>();
  const code: string[] = [];

  const walk = (bs: Block[]) => {
    for (const b of bs) {
      if (b.kind === 'code') code.push(b.code);
      else if (b.kind === 'reading') code.push(b.text);
      else if (b.kind === 'callout') walk(b.blocks);
    }
  };
  walk(blocks);

  const all = `${title} ${code.join(' ')} ${flatten(blocks)}`;

  for (const m of all.matchAll(/\baria-[a-z]+\b/g)) set.add(m[0]);
  for (const m of all.matchAll(/role=["']?([a-z]+)["']?/g)) set.add(m[1]);
  for (const m of all.matchAll(/\b[1-4]\.\d+\.\d+\b/g)) set.add(m[0]);
  for (const m of all.matchAll(
    /\b(LiveAnnouncer|FocusMonitor|FocusTrap|FocusKeyManager|InteractivityChecker|cdkTrapFocus|MatDialog|MatTabs|MatMenu|MatSelect|MatTable|MatExpansionPanel|ngCombobox|ngListbox|ngSelect|ngMenu|ngTabs|ngAccordion|ngTree|ngGrid|tabindex|TalkBack|VoiceOver|WCAG)\b/gi,
  ))
    set.add(m[1]);

  // O próprio título costuma ser o termo buscado
  set.add(title);

  return [...set];
}
