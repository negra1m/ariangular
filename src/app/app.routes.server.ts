import { RenderMode, ServerRoute } from '@angular/ssr';
import { LOCALES } from '../content/types';
import { partsOf, checklistsOf } from '../content';

/**
 * Prerender de todas as rotas.
 *
 * Rota com parâmetro só é gerada se `getPrerenderParams` devolver os valores —
 * sem isso o build ignora as páginas e elas nascem em branco para quem chega
 * sem JavaScript, além de sumirem do índice do Google.
 *
 * Total esperado: 3 locales x (1 home + 7 partes + 156 seções + 1 índice de
 * checklists + 14 checklists + 1 auditor) = 540 páginas.
 */

const locales = LOCALES.map((locale) => ({ locale }));

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: ':locale',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => locales,
  },
  {
    path: ':locale/checklists',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => locales,
  },
  {
    path: ':locale/checklists/:checklistId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      LOCALES.flatMap((locale) => checklistsOf(locale).map((c) => ({ locale, checklistId: c.id }))),
  },
  {
    path: ':locale/auditor',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => locales,
  },
  {
    path: ':locale/:partId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      LOCALES.flatMap((locale) => partsOf(locale).map((p) => ({ locale, partId: p.id }))),
  },
  {
    path: ':locale/:partId/:sectionId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      LOCALES.flatMap((locale) =>
        partsOf(locale).flatMap((part) =>
          part.sections.map((section) => ({
            locale,
            partId: part.id,
            sectionId: section.id,
          })),
        ),
      ),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
