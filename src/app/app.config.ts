import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withRouterConfig,
  withComponentInputBinding,
} from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideRouter(
      routes,
      // Âncoras e restauração de scroll são requisito de acessibilidade, não conforto:
      // sem isso um link para /aria#aria-label abre no topo e a pessoa se perde.
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
      // Fragmento na URL precisa reprocessar mesmo quando só ele muda.
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding(),
    ),

    // withEventReplay: cliques feitos antes da hidratação não se perdem — quem navega
    // por teclado costuma interagir antes do JS assumir.
    provideClientHydration(withEventReplay()),
  ],
};
