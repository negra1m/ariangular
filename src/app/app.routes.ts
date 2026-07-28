import { Routes } from '@angular/router';

/**
 * Rotas da aplicação.
 *
 * As 7 partes da documentação, os checklists e o auditor entram na Fase 3.
 * Todas serão prerenderizadas — ver app.routes.server.ts.
 */
export const routes: Routes = [
  {
    path: '',
    title: 'AngulARIA — Acessibilidade em Angular',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
];
