/**
 * Regras do auditor.
 *
 * Derivadas de "Erros mais comuns encontrados em Angular", "Erros mais comuns
 * com ARIA" e "Bugs Mais Comuns Encontrados em Produção" — todas do próprio
 * conteúdo do site.
 *
 * Cada regra declara se sabe se corrigir sozinha:
 *
 *   fix          — a correção é determinística. Aplicada automaticamente.
 *   needsInput   — a correção depende de informação que só a pessoa tem
 *                  (o nome do botão, o rótulo do campo, o destino do link).
 *                  Inventar aqui é pior que não corrigir: um aria-label errado
 *                  faz o leitor de tela anunciar informação falsa com
 *                  confiança. "No ARIA is better than bad ARIA."
 */

export type Severity = 'critico' | 'alto' | 'medio' | 'baixo';

export interface Finding {
  ruleId: string;
  severity: Severity;
  title: string;
  /** Como o leitor de tela se comporta por causa disso. */
  impact: string;
  wcag: string[];
  /** Seção da documentação que explica o problema. */
  docPart: string;
  docSection: string;
  /** Trecho ofensor. */
  snippet: string;
  line?: number;
  /** Se true, o auditor corrigiu sozinho. */
  fixed: boolean;
  /** Se preenchido, precisa da resposta da pessoa. */
  question?: string;
  /** Identificador do ponto a preencher no código de saída. */
  placeholder?: string;
}

export interface RuleContext {
  doc: Document;
  /** Marca um ponto do código como dependente de entrada humana. */
  ask: (el: Element, attr: string) => string;
}

export interface Rule {
  id: string;
  severity: Severity;
  title: string;
  impact: string;
  wcag: string[];
  docPart: string;
  docSection: string;
  /** Pergunta feita quando a correção não é determinística. */
  question?: string;
  /**
   * Encontra e, quando possível, corrige. Deve devolver os elementos afetados.
   * Mutar `el` aqui é o auto-fix.
   */
  run: (ctx: RuleContext) => { el: Element; fixed: boolean; placeholder?: string }[];
}

const ICON_ONLY = /^(mat-icon|i|svg|span)$/i;

/** O elemento tem nome acessível por texto ou por atributo? */
function hasAccessibleName(el: Element): boolean {
  if (el.getAttribute('aria-label')?.trim()) return true;
  if (el.getAttribute('aria-labelledby')?.trim()) return true;
  if (el.getAttribute('[attr.aria-label]') || el.getAttribute('[aria-label]')) return true;
  const text = (el.textContent ?? '').replace(/\s+/g, ' ').trim();
  // Interpolação conta como nome: {{ rotulo }} vira texto em runtime.
  if (text && !ICON_ONLY.test(el.children[0]?.tagName ?? '')) return true;
  if (/\{\{.+\}\}/.test(text)) return true;
  return false;
}

function isFocusable(el: Element): boolean {
  const tag = el.tagName.toLowerCase();
  if (['a', 'button', 'input', 'select', 'textarea'].includes(tag)) return true;
  const ti = el.getAttribute('tabindex');
  return ti !== null && ti !== '-1';
}

export const RULES: Rule[] = [
  {
    id: 'div-clicavel',
    severity: 'critico',
    title: 'Elemento não interativo com (click)',
    impact:
      'O leitor de tela não anuncia como botão, o Tab não alcança e o Enter/Espaço não aciona. Visualmente funciona; para quem não usa mouse, o controle não existe.',
    wcag: ['2.1.1', '4.1.2'],
    docPart: 'componentes',
    docSection: 'botoes',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('div, span'))) {
        if (!el.hasAttribute('(click)')) continue;
        // Correção determinística: trocar por <button type="button">.
        const btn = doc.createElement('button');
        btn.setAttribute('type', 'button');
        for (const a of Array.from(el.attributes)) btn.setAttribute(a.name, a.value);
        while (el.firstChild) btn.appendChild(el.firstChild);
        el.replaceWith(btn);
        out.push({ el: btn, fixed: true });
      }
      return out;
    },
  },

  {
    id: 'botao-icone-sem-nome',
    severity: 'critico',
    title: 'Botão só com ícone, sem nome acessível',
    impact:
      'O leitor de tela anuncia apenas "botão". A pessoa sabe que existe um controle, mas não o que ele faz.',
    wcag: ['4.1.2'],
    docPart: 'aria',
    docSection: 'aria-label',
    question: 'Qual o nome deste botão? É o que o leitor de tela vai anunciar.',
    run: ({ doc, ask }) => {
      const out: { el: Element; fixed: boolean; placeholder?: string }[] = [];
      for (const el of Array.from(doc.querySelectorAll('button, a'))) {
        if (hasAccessibleName(el)) continue;
        const placeholder = ask(el, 'aria-label');
        out.push({ el, fixed: false, placeholder });
      }
      return out;
    },
  },

  {
    id: 'campo-sem-label',
    severity: 'critico',
    title: 'Campo de formulário sem rótulo',
    impact:
      'O leitor de tela anuncia só "campo de edição". Sem saber o que preencher, a pessoa não conclui o formulário.',
    wcag: ['1.3.1', '3.3.2'],
    docPart: 'formularios',
    docSection: 'label',
    question: 'Qual o rótulo deste campo?',
    run: ({ doc, ask }) => {
      const out: { el: Element; fixed: boolean; placeholder?: string }[] = [];
      const labels = new Set(
        Array.from(doc.querySelectorAll('label[for]')).map((l) => l.getAttribute('for')),
      );
      for (const el of Array.from(doc.querySelectorAll('input, select, textarea'))) {
        const type = el.getAttribute('type');
        if (type === 'hidden' || type === 'submit' || type === 'button') continue;
        if (el.getAttribute('aria-label') || el.getAttribute('aria-labelledby')) continue;
        if (el.id && labels.has(el.id)) continue;
        if (el.closest('label')) continue;
        const placeholder = ask(el, 'aria-label');
        out.push({ el, fixed: false, placeholder });
      }
      return out;
    },
  },

  {
    id: 'img-sem-alt',
    severity: 'critico',
    title: 'Imagem sem alt',
    impact:
      'O leitor de tela lê o nome do arquivo, ou pula a imagem. Se ela carrega informação, a informação se perde.',
    wcag: ['1.1.1'],
    docPart: 'fundamentos',
    docSection: 'pour',
    question: 'O que esta imagem mostra? Deixe vazio se for puramente decorativa.',
    run: ({ doc, ask }) => {
      const out: { el: Element; fixed: boolean; placeholder?: string }[] = [];
      for (const el of Array.from(doc.querySelectorAll('img'))) {
        if (el.hasAttribute('alt')) continue;
        const placeholder = ask(el, 'alt');
        out.push({ el, fixed: false, placeholder });
      }
      return out;
    },
  },

  {
    id: 'aria-hidden-focavel',
    severity: 'critico',
    title: 'aria-hidden em elemento focável',
    impact:
      'O Tab chega no elemento, mas o leitor de tela não anuncia nada. A pessoa fica com o foco num lugar mudo, sem saber onde está.',
    wcag: ['4.1.2'],
    docPart: 'aria',
    docSection: 'aria-hidden',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('[aria-hidden="true"]'))) {
        const offender = isFocusable(el) ? el : el.querySelector('a,button,input,select,textarea');
        if (!offender) continue;
        el.removeAttribute('aria-hidden');
        out.push({ el, fixed: true });
      }
      return out;
    },
  },

  {
    id: 'link-sem-href',
    severity: 'alto',
    title: 'Âncora com (click) e sem destino',
    impact:
      'Sem href, a âncora não é focável nem anunciada como link. Além disso, links navegam e botões executam ações — trocar os dois confunde quem depende do anúncio da role.',
    wcag: ['2.1.1', '4.1.2'],
    docPart: 'componentes',
    docSection: 'links',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('a'))) {
        if (!el.hasAttribute('(click)')) continue;
        if (el.hasAttribute('href') || el.hasAttribute('routerLink') || el.hasAttribute('[routerLink]'))
          continue;
        // É ação, não navegação: vira <button>.
        const btn = doc.createElement('button');
        btn.setAttribute('type', 'button');
        for (const a of Array.from(el.attributes)) btn.setAttribute(a.name, a.value);
        while (el.firstChild) btn.appendChild(el.firstChild);
        el.replaceWith(btn);
        out.push({ el: btn, fixed: true });
      }
      return out;
    },
  },

  {
    id: 'tabindex-positivo',
    severity: 'alto',
    title: 'tabindex positivo',
    impact:
      'Quebra a ordem natural de foco da página inteira, não só deste elemento. A navegação por Tab passa a pular de um canto ao outro.',
    wcag: ['2.4.3'],
    docPart: 'fundamentos',
    docSection: 'erros-mais-comuns-encontrados-em-angular',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('[tabindex]'))) {
        const v = Number(el.getAttribute('tabindex'));
        if (!Number.isFinite(v) || v <= 0) continue;
        el.setAttribute('tabindex', '0');
        out.push({ el, fixed: true });
      }
      return out;
    },
  },

  {
    id: 'dialog-sem-rotulo',
    severity: 'alto',
    title: 'role="dialog" sem aria-modal ou sem rótulo',
    impact:
      'Sem aria-modal, o leitor de tela continua lendo o conteúdo de trás. Sem rótulo, a pessoa não sabe que modal abriu.',
    wcag: ['4.1.2'],
    docPart: 'componentes',
    docSection: 'modal',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('[role="dialog"]'))) {
        let fixed = false;
        if (!el.hasAttribute('aria-modal')) {
          el.setAttribute('aria-modal', 'true');
          fixed = true;
        }
        if (!el.hasAttribute('aria-label') && !el.hasAttribute('aria-labelledby')) {
          const h = el.querySelector('h1,h2,h3,h4');
          if (h) {
            if (!h.id) h.id = 'titulo-dialog';
            el.setAttribute('aria-labelledby', h.id);
            fixed = true;
          }
        }
        if (fixed) out.push({ el, fixed: true });
      }
      return out;
    },
  },

  {
    id: 'outline-none',
    severity: 'alto',
    title: 'outline: none sem substituto',
    impact:
      'Quem navega por teclado deixa de enxergar onde está. É o equivalente a apagar o cursor do mouse.',
    wcag: ['2.4.7'],
    docPart: 'leitores-de-tela',
    docSection: 'foco-visivel',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('[style]'))) {
        const style = el.getAttribute('style') ?? '';
        if (!/outline\s*:\s*none|outline\s*:\s*0/.test(style)) continue;
        el.setAttribute(
          'style',
          style.replace(/outline\s*:\s*(none|0)\s*;?/g, 'outline: 3px solid currentColor;'),
        );
        out.push({ el, fixed: true });
      }
      return out;
    },
  },

  {
    id: 'aria-redundante',
    severity: 'baixo',
    title: 'ARIA redundante',
    impact:
      'Não quebra nada, mas polui. O documento avisa: "No ARIA is better than bad ARIA" — role que repete a semântica nativa é ruído.',
    wcag: [],
    docPart: 'aria',
    docSection: 'regra-de-ouro',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      const redundant: Record<string, string> = { button: 'button', a: 'link', nav: 'navigation' };
      for (const el of Array.from(doc.querySelectorAll('[role]'))) {
        const tag = el.tagName.toLowerCase();
        if (redundant[tag] && el.getAttribute('role') === redundant[tag]) {
          el.removeAttribute('role');
          out.push({ el, fixed: true });
        }
      }
      return out;
    },
  },

  {
    id: 'tab-sem-selected',
    severity: 'medio',
    title: 'role="tab" sem aria-selected',
    impact: 'O leitor de tela anuncia "aba" mas não diz qual está selecionada.',
    wcag: ['4.1.2'],
    docPart: 'componentes',
    docSection: 'tabs',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('[role="tab"]'))) {
        if (el.hasAttribute('aria-selected') || el.hasAttribute('[attr.aria-selected]')) continue;
        el.setAttribute('aria-selected', 'false');
        out.push({ el, fixed: true });
      }
      return out;
    },
  },

  {
    id: 'checkbox-sem-checked',
    severity: 'medio',
    title: 'role="checkbox" ou "switch" sem aria-checked',
    impact: 'O estado nunca é anunciado. A pessoa não sabe se está marcado ou não.',
    wcag: ['4.1.2'],
    docPart: 'aria',
    docSection: 'aria-checked',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('[role="checkbox"], [role="switch"]'))) {
        if (el.hasAttribute('aria-checked') || el.hasAttribute('[attr.aria-checked]')) continue;
        el.setAttribute('aria-checked', 'false');
        out.push({ el, fixed: true });
      }
      return out;
    },
  },

  {
    id: 'progressbar-incompleto',
    severity: 'medio',
    title: 'role="progressbar" sem valores',
    impact: 'O leitor de tela anuncia "barra de progresso" sem dizer quanto já foi.',
    wcag: ['4.1.2'],
    docPart: 'aria',
    docSection: 'aria-para-progress-bar',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('[role="progressbar"]'))) {
        let fixed = false;
        for (const [attr, val] of [
          ['aria-valuemin', '0'],
          ['aria-valuemax', '100'],
          ['aria-valuenow', '0'],
        ]) {
          if (!el.hasAttribute(attr) && !el.hasAttribute(`[attr.${attr}]`)) {
            el.setAttribute(attr, val);
            fixed = true;
          }
        }
        if (fixed) out.push({ el, fixed: true });
      }
      return out;
    },
  },

  {
    id: 'th-sem-scope',
    severity: 'medio',
    title: '<th> sem scope',
    impact:
      'O leitor de tela não relaciona a célula ao cabeçalho. Navegar a tabela vira ouvir números soltos.',
    wcag: ['1.3.1'],
    docPart: 'componentes',
    docSection: 'tabela-boas-praticas',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('th'))) {
        if (el.hasAttribute('scope')) continue;
        el.setAttribute('scope', el.closest('thead') ? 'col' : 'row');
        out.push({ el, fixed: true });
      }
      return out;
    },
  },

  {
    id: 'autofocus',
    severity: 'baixo',
    title: 'autofocus',
    impact:
      'Sequestra o foco na carga da página. Quem usa leitor de tela perde o contexto do início do documento.',
    wcag: ['2.4.3'],
    docPart: 'leitores-de-tela',
    docSection: 'sequencia-de-foco',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('[autofocus]'))) {
        el.removeAttribute('autofocus');
        out.push({ el, fixed: true });
      }
      return out;
    },
  },

  {
    id: 'aria-expanded-literal',
    severity: 'medio',
    title: 'aria-expanded com valor fixo',
    impact:
      'O estado nunca muda. O leitor de tela anuncia "recolhido" para sempre, mesmo com o painel aberto. O documento lista "aria-expanded desatualizado" entre os erros mais comuns.',
    wcag: ['4.1.2'],
    docPart: 'aria',
    docSection: 'aria-expanded',
    run: ({ doc }) => {
      const out: { el: Element; fixed: boolean }[] = [];
      for (const el of Array.from(doc.querySelectorAll('[aria-expanded]'))) {
        const v = el.getAttribute('aria-expanded');
        if (v !== 'true' && v !== 'false') continue;
        // Só sinaliza: trocar por binding exige saber o nome da propriedade
        // do componente, que o auditor não tem como adivinhar.
        out.push({ el, fixed: false });
      }
      return out;
    },
  },
];
