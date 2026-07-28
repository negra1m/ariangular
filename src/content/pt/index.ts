// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { LocaleContent } from '../types';
import { fundamentos } from './parts/fundamentos';
import { aria } from './parts/aria';
import { formularios } from './parts/formularios';
import { componentes } from './parts/componentes';
import { angular } from './parts/angular';
import { leitoresDeTela } from './parts/leitores-de-tela';
import { qaWcag } from './parts/qa-wcag';
import { checklists } from './checklists';

export const ptContent: LocaleContent = {
  locale: 'pt',
  parts: [fundamentos, aria, formularios, componentes, angular, leitoresDeTela, qaWcag],
  checklists,
};
