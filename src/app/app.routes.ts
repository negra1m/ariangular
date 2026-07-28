import { Routes } from '@angular/router';
import { LOCALES, DEFAULT_LOCALE } from '../content/types';
import { localeGuard } from './core/i18n/locale.guard';

/**
 * Rotas.
 *
 * Estrutura: /:locale/:partId/:sectionId
 *
 * Uma URL por seção — 156 por idioma, 468 no total. Cada tema técnico vira uma
 * página com título, descrição e OG próprios, que é o que faz alguém procurando
 * "aria-label em botão de ícone" cair na resposta em vez de numa página de 27
 * seções.
 *
 * Todas prerenderizadas: ver app.routes.server.ts.
 */
export const routes: Routes = [
  // Sem idioma na URL: manda para o padrão. O prerender gera o redirect
  // estático, e o hreflang x-default aponta para cá.
  { path: '', pathMatch: 'full', redirectTo: `/${DEFAULT_LOCALE}` },

  {
    path: ':locale',
    canActivate: [localeGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
      },
      {
        path: 'checklists',
        loadComponent: () =>
          import('./features/checklists/checklist-index').then((m) => m.ChecklistIndex),
      },
      {
        path: 'checklists/:checklistId',
        loadComponent: () =>
          import('./features/checklists/checklist-page').then((m) => m.ChecklistPage),
      },
      {
        path: 'auditor',
        loadComponent: () => import('./features/auditor/auditor').then((m) => m.Auditor),
      },
      {
        path: ':partId',
        loadComponent: () => import('./features/doc/part-page').then((m) => m.PartPage),
      },
      {
        path: ':partId/:sectionId',
        loadComponent: () => import('./features/doc/section-page').then((m) => m.SectionPage),
      },
    ],
  },

  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];

export const SUPPORTED_LOCALES = LOCALES;
