import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { LocaleService } from '../i18n/locale.service';
import { LOCALES, LOCALE_TAG, DEFAULT_LOCALE } from '../../../content/types';

const SITE = 'ariangular';
const ORIGIN = 'https://ariangular.vercel.app';

export interface SeoInput {
  title: string;
  description: string;
  /** Caminho SEM o prefixo de idioma. Ex: 'aria/aria-label' */
  path: string;
}

/**
 * Metadados por rota.
 *
 * O site tem 468 páginas em três idiomas. Sem título, descrição e hreflang
 * próprios por rota, o Google trata tudo como conteúdo duplicado e indexa uma
 * só — que é exatamente o oposto do objetivo de ser encontrável nos três
 * idiomas.
 *
 * hreflang é o que diz ao buscador "estas três URLs são a mesma página em
 * idiomas diferentes". Sem ele, as versões competem entre si.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);
  private readonly locale = inject(LocaleService);

  apply({ title, description, path }: SeoInput): void {
    const locale = this.locale.locale();
    const full = `${title} | ${SITE}`;
    const url = `${ORIGIN}/${locale}${path ? '/' + path : ''}`;

    this.title.setTitle(full);
    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:title', content: full });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE });
    this.meta.updateTag({ property: 'og:locale', content: LOCALE_TAG[locale].replace('-', '_') });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: full });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    this.setCanonical(url);
    this.setHreflang(path);
    this.setJsonLd({ title, description, url, path });
  }

  /**
   * Structured data.
   *
   * TechArticle nas páginas de seção e WebSite na home. É o que permite ao
   * buscador entender que cada URL é um artigo técnico sobre um tema, e não
   * mais uma página de um site genérico — o que muda como o resultado aparece.
   */
  private setJsonLd({ title, description, url, path }: SeoInput & { url: string }): void {
    const isHome = path === '';
    const locale = this.locale.locale();

    const data = isHome
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE,
          url,
          description,
          inLanguage: LOCALE_TAG[locale],
          author: { '@type': 'Person', name: 'Vinícius Negrão' },
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: title,
          description,
          url,
          inLanguage: LOCALE_TAG[locale],
          isAccessibleForFree: true,
          author: { '@type': 'Person', name: 'Vinícius Negrão' },
          about: [
            { '@type': 'Thing', name: 'Web accessibility' },
            { '@type': 'Thing', name: 'Angular' },
            { '@type': 'Thing', name: 'WCAG 2.2' },
            { '@type': 'Thing', name: 'WAI-ARIA' },
          ],
          license: 'https://creativecommons.org/licenses/by/4.0/',
        };

    let el = this.doc.getElementById('ld-json');
    if (!el) {
      el = this.doc.createElement('script');
      el.setAttribute('type', 'application/ld+json');
      el.id = 'ld-json';
      this.doc.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  private setCanonical(url: string): void {
    this.link('canonical', url);
  }

  /**
   * hreflang para as três versões mais o x-default.
   *
   * Os slugs são estáveis entre idiomas, então a URL irmã é o mesmo caminho com
   * outro prefixo — sem tabela de-para.
   */
  private setHreflang(path: string): void {
    const head = this.doc.head;
    head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());

    const suffix = path ? '/' + path : '';

    for (const l of LOCALES) {
      const link = this.doc.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', LOCALE_TAG[l]);
      link.setAttribute('href', `${ORIGIN}/${l}${suffix}`);
      head.appendChild(link);
    }

    const xDefault = this.doc.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    xDefault.setAttribute('href', `${ORIGIN}/${DEFAULT_LOCALE}${suffix}`);
    head.appendChild(xDefault);
  }

  private link(rel: string, href: string): void {
    let el = this.doc.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!el) {
      el = this.doc.createElement('link');
      el.setAttribute('rel', rel);
      this.doc.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }
}
