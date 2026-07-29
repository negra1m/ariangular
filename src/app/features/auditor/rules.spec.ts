import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { AuditService } from './audit.service';
import { RULES } from './rules';
import { partsOf } from '../../../content';

/**
 * Testes das regras do auditor.
 *
 * Cada regra tem DOIS testes:
 *
 *   dispara      — o snippet problemático é detectado
 *   não dispara  — o snippet correto passa limpo
 *
 * O segundo é o que mais importa. Falso positivo é o que faz as pessoas
 * pararem de confiar na ferramenta: quem recebe três achados errados no
 * primeiro uso não volta. Uma regra que acusa tudo é pior que regra nenhuma.
 */

describe('Auditor', () => {
  let audit: AuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    audit = TestBed.inject(AuditService);
  });

  /** IDs das regras que dispararam para um snippet. */
  const idsFor = (html: string) => audit.analyze(html).findings.map((f) => f.ruleId);

  const fires = (ruleId: string, html: string) => expect(idsFor(html)).toContain(ruleId);
  const quiet = (ruleId: string, html: string) => expect(idsFor(html)).not.toContain(ruleId);

  /* ---------------------------------------------------------------- */
  /* Casos por regra                                                    */
  /* ---------------------------------------------------------------- */

  const CASES: Record<string, { bad: string; good: string }> = {
    'div-clicavel': {
      bad: `<div (click)="salvar()">Salvar</div>`,
      good: `<button type="button" (click)="salvar()">Salvar</button>`,
    },
    'botao-icone-sem-nome': {
      bad: `<button><mat-icon>close</mat-icon></button>`,
      good: `<button aria-label="Fechar modal"><mat-icon>close</mat-icon></button>`,
    },
    'campo-sem-label': {
      bad: `<input type="text" id="cpf">`,
      good: `<label for="cpf">CPF</label><input type="text" id="cpf">`,
    },
    'input-so-placeholder': {
      bad: `<input placeholder="CPF">`,
      good: `<label for="c">CPF</label><input id="c" placeholder="Só números">`,
    },
    'img-sem-alt': {
      bad: `<img src="a.png">`,
      good: `<img src="a.png" alt="Gráfico de vendas">`,
    },
    'aria-hidden-focavel': {
      bad: `<button aria-hidden="true" aria-label="x">ok</button>`,
      good: `<span aria-hidden="true">★</span>`,
    },
    'link-sem-href': {
      bad: `<a (click)="excluir()">Excluir</a>`,
      good: `<a href="/conta">Ver conta</a>`,
    },
    'link-sem-texto': {
      bad: `<a href="/conta"></a>`,
      good: `<a href="/conta">Ver conta</a>`,
    },
    'tabindex-positivo': {
      bad: `<button tabindex="3">Ok</button>`,
      good: `<button tabindex="0">Ok</button>`,
    },
    'dialog-sem-rotulo': {
      bad: `<div role="dialog"><h2>Confirmar</h2></div>`,
      good: `<div role="dialog" aria-modal="true" aria-labelledby="t"><h2 id="t">Confirmar</h2></div>`,
    },
    'outline-none': {
      bad: `<button style="outline: none">Ok</button>`,
      good: `<button style="outline: 3px solid blue">Ok</button>`,
    },
    'aria-redundante': {
      bad: `<button role="button">Ok</button>`,
      good: `<div role="button" tabindex="0">Ok</div>`,
    },
    'tab-sem-selected': {
      bad: `<button role="tab">Dados</button>`,
      good: `<button role="tab" aria-selected="true">Dados</button>`,
    },
    'checkbox-sem-checked': {
      bad: `<div role="checkbox">Aceito</div>`,
      good: `<div role="checkbox" aria-checked="false">Aceito</div>`,
    },
    'progressbar-incompleto': {
      bad: `<div role="progressbar"></div>`,
      good: `<div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30"></div>`,
    },
    'th-sem-scope': {
      bad: `<table><thead><tr><th>Data</th></tr></thead></table>`,
      good: `<table><thead><tr><th scope="col">Data</th></tr></thead></table>`,
    },
    autofocus: {
      bad: `<input autofocus aria-label="Busca">`,
      good: `<input aria-label="Busca">`,
    },
    'aria-referencia-quebrada': {
      bad: `<input aria-label="CPF" aria-describedby="naoexiste">`,
      good: `<input aria-label="CPF" aria-describedby="ajuda"><span id="ajuda">Só números</span>`,
    },
    'salto-de-heading': {
      bad: `<h2>Conta</h2><h4>Extrato</h4>`,
      good: `<h2>Conta</h2><h3>Extrato</h3>`,
    },
    'aria-inexistente': {
      bad: `<div aria-labeledby="x">Ok</div>`,
      good: `<div aria-labelledby="x">Ok</div><span id="x">Título</span>`,
    },
    'listbox-sem-teclado': {
      bad: `<div role="listbox"><div role="option">A</div></div>`,
      good: `<div role="listbox" (keydown)="onKey($event)"><div role="option">A</div></div>`,
    },
    'mouse-sem-teclado': {
      bad: `<button (mouseover)="abrir()">Ajuda</button>`,
      good: `<button (mouseover)="abrir()" (focus)="abrir()">Ajuda</button>`,
    },
    'aria-expanded-literal': {
      bad: `<button aria-expanded="false">Detalhes</button>`,
      good: `<button [attr.aria-expanded]="aberto">Detalhes</button>`,
    },
    'tabela-com-div': {
      bad: `<div role="table"><div>a</div></div>`,
      good: `<table><caption>X</caption><thead><tr><th scope="col">a</th></tr></thead></table>`,
    },
  };

  for (const [ruleId, { bad, good }] of Object.entries(CASES)) {
    describe(ruleId, () => {
      it('dispara no código problemático', () => fires(ruleId, bad));
      it('não dispara no código correto', () => quiet(ruleId, good));
    });
  }

  /* ---------------------------------------------------------------- */
  /* Garantias gerais                                                   */
  /* ---------------------------------------------------------------- */

  it('cobre todas as regras registradas', () => {
    const tested = new Set(Object.keys(CASES));
    const missing = RULES.filter((r) => !tested.has(r.id)).map((r) => r.id);
    expect(missing, `regras sem teste: ${missing.join(', ')}`).toEqual([]);
  });

  it('não acusa nada num template correto e completo', () => {
    const html = `
      <nav aria-label="Principal">
        <ul><li><a href="/conta">Conta</a></li></ul>
      </nav>
      <h1>Conta corrente</h1>
      <h2>Extrato</h2>
      <form>
        <label for="cpf">CPF</label>
        <input id="cpf" type="text" aria-describedby="ajuda">
        <span id="ajuda">Somente números</span>
        <button type="submit">Enviar</button>
      </form>
      <table>
        <caption>Lançamentos</caption>
        <thead><tr><th scope="col">Data</th><th scope="col">Valor</th></tr></thead>
        <tbody><tr><td>01/01</td><td>10</td></tr></tbody>
      </table>
    `;
    expect(audit.analyze(html).findings).toEqual([]);
  });

  it('toda regra aponta para uma seção que existe na documentação', () => {
    const known = new Set<string>();
    for (const part of partsOf('pt')) {
      for (const section of part.sections) known.add(`${part.id}/${section.id}`);
    }

    const broken = RULES.filter((r) => !known.has(`${r.docPart}/${r.docSection}`)).map(
      (r) => `${r.id} -> ${r.docPart}/${r.docSection}`,
    );

    expect(broken, `links quebrados: ${broken.join(', ')}`).toEqual([]);
  });

  it('preserva a interpolação do Angular no código de saída', () => {
    const html = `<div (click)="ir()">{{ rotulo }}</div>`;
    expect(audit.analyze(html).fixedCode).toContain('{{ rotulo }}');
  });

  it('devolve o código corrigido com o div trocado por button', () => {
    const { fixedCode } = audit.analyze(`<div (click)="salvar()">Salvar</div>`);
    expect(fixedCode).toContain('<button');
    expect(fixedCode).not.toContain('<div');
  });

  it('não inventa nome acessível: deixa um ponto a preencher', () => {
    const result = audit.analyze(`<button><mat-icon>close</mat-icon></button>`);
    expect(result.pending.length).toBeGreaterThan(0);
    expect(result.pending[0].question).toBeTruthy();
  });

  it('aplica a resposta da pessoa no lugar marcado', () => {
    const result = audit.analyze(`<button><mat-icon>close</mat-icon></button>`);
    const placeholder = result.pending[0].placeholder;
    const final = audit.applyAnswers(result.fixedCode, { [placeholder]: 'Fechar modal' });
    expect(final).toContain('Fechar modal');
    expect(final).not.toContain(placeholder);
  });
});
