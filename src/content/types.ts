/**
 * Modelo de dados do conteúdo.
 *
 * Uma fonte (`fonte/ARIA.html`), várias vistas: leitura, busca, checklists e
 * auditor consomem estas mesmas estruturas.
 *
 * Os arquivos em `src/content/parts/` são GERADOS por
 * `scripts/extract-content.js`. Não edite na mão — edite `fonte/ARIA.html` e
 * rode `npm run content:extract`.
 */

/**
 * Idiomas suportados.
 *
 * O conteúdo é traduzido por inteiro nos três: metadado traduzido com corpo em
 * português não rankeia, e o objetivo declarado é ser encontrável nos três
 * índices de busca.
 */
/** Todos os idiomas que a estrutura suporta. */
export const ALL_LOCALES = ['pt', 'en', 'zh'] as const;
export type Locale = (typeof ALL_LOCALES)[number];

/**
 * Idiomas efetivamente publicados: rotas, hreflang e sitemap.
 *
 * Um idioma só entra aqui com as 1.246 strings traduzidas — `merge-i18n.js`
 * falha abaixo de 100%. Publicar metade custa indexação e credibilidade:
 * página com metadado traduzido e corpo em português não rankeia em nenhum
 * dos dois idiomas.
 *
 * Nenhum dos três teve revisor nativo. Está declarado no README.
 */
export const LOCALES: readonly Locale[] = ['pt', 'en', 'zh'];

export const DEFAULT_LOCALE: Locale = 'pt';

/** Código BCP 47 para o atributo `lang` e para o hreflang. */
export const LOCALE_TAG: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
  zh: 'zh-Hans',
};

/** Nome do idioma escrito nele mesmo — nunca traduzir estes rótulos. */
export const LOCALE_LABEL: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  zh: '简体中文',
};

/** Tom de um destaque. O rótulo textual é obrigatório na UI: cor sozinha viola WCAG 1.4.1. */
export type CalloutTone = 'info' | 'warning' | 'success';

/**
 * Um exemplo de código pode ser modelo a seguir, antipadrão a evitar, ou neutro.
 * A UI comunica isso por texto, não só por cor de borda.
 */
export type CodeVariant = 'correct' | 'wrong' | 'neutral';

export interface ParagraphBlock {
  kind: 'paragraph';
  text: string;
}

export interface HeadingBlock {
  kind: 'heading';
  /** Nível relativo dentro da seção: 1 vira <h3>, 2 vira <h4>. */
  level: 1 | 2;
  text: string;
}

export interface ListBlock {
  kind: 'list';
  ordered: boolean;
  items: string[];
}

export interface TableBlock {
  kind: 'table';
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface CodeBlock {
  kind: 'code';
  code: string;
  variant: CodeVariant;
}

export interface CalloutBlock {
  kind: 'callout';
  tone: CalloutTone;
  blocks: Block[];
}

/**
 * Como o leitor de tela anuncia o exemplo anterior.
 * É o padrão mais característico do documento e merece tratamento próprio —
 * renderizar como bloco de código genérico perderia o sentido.
 */
export interface ReadingBlock {
  kind: 'reading';
  text: string;
}

export type Block =
  ParagraphBlock | HeadingBlock | ListBlock | TableBlock | CodeBlock | CalloutBlock | ReadingBlock;

export interface Section {
  /**
   * Slug da URL. ESTÁVEL entre locales: /pt/aria/aria-label e /en/aria/aria-label
   * apontam para o mesmo conteúdo em idiomas diferentes.
   *
   * Slug não é traduzido de propósito — é derivado do termo técnico, que é o
   * mesmo em qualquer idioma (`aria-label` é `aria-label` em chinês também), e
   * manter estável é o que faz o hreflang casar sem tabela de-para.
   */
  id: string;
  partId: string;
  order: number;
  title: string;
  blocks: Block[];
  /** Resumo de uma frase, usado na meta description e nos cards. */
  summary: string;
}

export interface Part {
  id: string;
  order: number;
  /** Numeral exibido na UI: '01' a '07'. */
  numeral: string;
  title: string;
  summary: string;
  sections: Section[];
}

export type ChecklistAudience = 'dev' | 'qa' | 'po' | 'todos';

/** Momento do fluxo de trabalho em que o checklist é usado. */
export type ChecklistStage =
  'refinamento' | 'desenvolvimento' | 'pull-request' | 'qa' | 'fechamento';

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface Checklist {
  id: string;
  title: string;
  audience: ChecklistAudience;
  stage: ChecklistStage;
  /** Seção da documentação de onde o checklist veio. */
  sourceSectionId: string;
  sourcePartId: string;
  items: ChecklistItem[];
}

/** Uma entrada do índice de busca. Gerada no build, consumida no cliente. */
export interface SearchEntry {
  /** `${partId}/${sectionId}` */
  id: string;
  partId: string;
  partTitle: string;
  sectionId: string;
  sectionTitle: string;
  /** Texto achatado da seção, sem markup. */
  text: string;
  /** Atributos ARIA, roles, APIs e critérios WCAG citados na seção. */
  keywords: string[];
}

/** O conteúdo completo de um idioma. */
export interface LocaleContent {
  locale: Locale;
  parts: Part[];
  checklists: Checklist[];
}
