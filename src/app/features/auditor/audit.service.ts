import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RULES, type Finding } from './rules';

export interface AuditResult {
  findings: Finding[];
  /** Código com as correções determinísticas já aplicadas. */
  fixedCode: string;
  /** Perguntas pendentes, na ordem em que aparecem no código. */
  pending: { placeholder: string; question: string; ruleId: string }[];
  error?: string;
}

/**
 * Analisa e corrige um trecho de template Angular.
 *
 * Limite declarado: isto lê markup estático. Não há DOM renderizado, nem CSS
 * computado, nem runtime — o auditor não sabe o que `[attr.aria-label]="desc"`
 * vale em execução. A interface diz isso em voz alta, porque um auditor que
 * finge ser completo cria falsa confiança, que é pior do que não ter auditor.
 */
@Injectable({ providedIn: 'root' })
export class AuditService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** Marcador usado no lugar de {{ ... }} durante o parse. */
  private static readonly INTERP = 'INTERP';

  analyze(source: string): AuditResult {
    if (!this.isBrowser) {
      return { findings: [], fixedCode: source, pending: [] };
    }

    const prepared = this.preprocess(source);

    let doc: Document;
    try {
      doc = new DOMParser().parseFromString(`<body>${prepared}</body>`, 'text/html');
    } catch {
      return {
        findings: [],
        fixedCode: source,
        pending: [],
        error: 'Não foi possível analisar este trecho. Confira se as tags estão fechadas.',
      };
    }

    const findings: Finding[] = [];
    const pending: AuditResult['pending'] = [];
    let askCounter = 0;

    // A pergunta vem da regra; aqui só marcamos o ponto a preencher no código.
    const ask = (el: Element, attr: string) => {
      const placeholder = `ASK${askCounter++}`;
      el.setAttribute(attr, placeholder);
      return placeholder;
    };

    for (const rule of RULES) {
      let hits: { el: Element; fixed: boolean; placeholder?: string }[];
      try {
        hits = rule.run({ doc, ask });
      } catch {
        // Uma regra com defeito não pode derrubar a análise inteira.
        continue;
      }

      for (const hit of hits) {
        findings.push({
          ruleId: rule.id,
          severity: rule.severity,
          title: rule.title,
          impact: rule.impact,
          wcag: rule.wcag,
          docPart: rule.docPart,
          docSection: rule.docSection,
          snippet: this.snippetOf(hit.el),
          fixed: hit.fixed,
          question: hit.fixed ? undefined : rule.question,
          placeholder: hit.placeholder,
        });

        if (hit.placeholder && rule.question) {
          pending.push({ placeholder: hit.placeholder, question: rule.question, ruleId: rule.id });
        }
      }
    }

    const order: Record<string, number> = { critico: 0, alto: 1, medio: 2, baixo: 3 };
    findings.sort((a, b) => order[a.severity] - order[b.severity]);

    return {
      findings,
      fixedCode: this.postprocess(doc.body.innerHTML),
      pending,
    };
  }

  /** Aplica as respostas da pessoa nos pontos que ficaram em aberto. */
  applyAnswers(code: string, answers: Record<string, string>): string {
    let out = code;
    for (const [placeholder, value] of Object.entries(answers)) {
      out = out.split(placeholder).join(value);
    }
    return out;
  }

  /**
   * Template Angular não é HTML válido. Protege o que confundiria o DOMParser
   * e devolve algo parseável.
   */
  private preprocess(src: string): string {
    let out = src;
    // {{ expr }} vira marcador: as chaves atrapalham a leitura de texto.
    out = out.replace(/\{\{([\s\S]*?)\}\}/g, (_, e) => `${AuditService.INTERP}${btoa(unescape(encodeURIComponent(e)))}`);
    // Blocos de controle @if/@for/@switch: mantém o conteúdo, tira a sintaxe.
    out = out.replace(/@(if|else if|for|switch|case|default|empty|defer|placeholder|loading|error)\b[^{]*\{/g, '');
    out = out.replace(/^\s*\}\s*$/gm, '');
    return out;
  }

  private postprocess(html: string): string {
    let out = html;
    out = out.replace(new RegExp(`${AuditService.INTERP}([A-Za-z0-9+/=]+)`, 'g'), (_, b64) => {
      try {
        return `{{${decodeURIComponent(escape(atob(b64)))}}}`;
      } catch {
        return '{{ }}';
      }
    });
    return this.indent(out);
  }

  /** Reindenta a saída: o innerHTML volta numa linha só. */
  private indent(html: string): string {
    const tokens = html.replace(/></g, '>\n<').split('\n');
    let depth = 0;
    const VOID = /^<(area|base|br|col|embed|hr|img|input|link|meta|source|track|wbr)\b/i;
    return tokens
      .map((raw) => {
        const line = raw.trim();
        if (!line) return '';
        if (/^<\//.test(line)) depth = Math.max(0, depth - 1);
        const out = '  '.repeat(depth) + line;
        if (/^<[a-zA-Z]/.test(line) && !/\/>$/.test(line) && !VOID.test(line) && !/<\/[a-zA-Z-]+>$/.test(line))
          depth++;
        return out;
      })
      .filter(Boolean)
      .join('\n');
  }

  private snippetOf(el: Element): string {
    const html = el.outerHTML ?? '';
    const clean = html.replace(new RegExp(`${AuditService.INTERP}[A-Za-z0-9+/=]+`, 'g'), '{{…}}');
    return clean.length > 160 ? clean.slice(0, 157) + '…' : clean;
  }
}
