import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LOCALES, DEFAULT_LOCALE, type Locale } from '../../../content/types';
import { LocaleService } from './locale.service';

/**
 * Valida o segmento de idioma da URL e aplica no serviço.
 *
 * Roda antes do componente para que o `lang` do documento já esteja certo
 * quando o conteúdo renderiza — e, no prerender, para que o HTML estático saia
 * com o idioma correto.
 */
export const localeGuard: CanActivateFn = (route) => {
  const raw = route.paramMap.get('locale');
  const router = inject(Router);

  if (!raw || !LOCALES.includes(raw as Locale)) {
    // Não é idioma: pode ser uma URL antiga sem prefixo (/aria/aria-label).
    // Preserva o caminho e manda para o idioma padrão em vez de dar 404.
    const rest = route.url.map((s) => s.path).join('/');
    return router.createUrlTree([DEFAULT_LOCALE, ...(rest ? rest.split('/') : [])]);
  }

  inject(LocaleService).set(raw as Locale);
  return true;
};
