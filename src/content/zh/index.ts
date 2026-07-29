// GERADO por scripts/build-locale.js zh — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.zh.json

import type { LocaleContent } from '../types';
import { fundamentos } from './parts/fundamentos';
import { aria } from './parts/aria';
import { formularios } from './parts/formularios';
import { componentes } from './parts/componentes';
import { angular } from './parts/angular';
import { leitoresDeTela } from './parts/leitores-de-tela';
import { qaWcag } from './parts/qa-wcag';
import { checklists } from './checklists';

export const zhContent: LocaleContent = {
  locale: 'zh',
  parts: [fundamentos, aria, formularios, componentes, angular, leitoresDeTela, qaWcag],
  checklists,
};
