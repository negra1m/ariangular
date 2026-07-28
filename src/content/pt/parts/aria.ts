// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const aria: Part = {
  id: 'aria',
  order: 2,
  numeral: '02',
  title: 'ARIA Completo para Angular',
  summary: 'Tudo que um dev Angular normalmente usa no dia a dia para TalkBack, VoiceOver e WCAG.',
  sections: [
    {
      id: 'o-que-e-aria',
      partId: 'aria',
      order: 1,
      title: 'O que é ARIA?',
      summary: 'ARIA existe para complementar a semântica HTML.',
      blocks: [
        {
          kind: 'paragraph',
          text: 'ARIA significa:',
        },
        {
          kind: 'code',
          code: 'Accessible Rich Internet Applications',
          variant: 'neutral',
        },
        {
          kind: 'paragraph',
          text: 'ARIA existe para complementar a semântica HTML.',
        },
        {
          kind: 'callout',
          tone: 'warning',
          blocks: [
            {
              kind: 'paragraph',
              text: 'ARIA NÃO substitui HTML semântico.',
            },
          ],
        },
        {
          kind: 'code',
          code: '<button>\nSalvar\n</button>',
          variant: 'correct',
        },
        {
          kind: 'code',
          code: '<div role="button">\nSalvar\n</div>',
          variant: 'wrong',
        },
      ],
    },
    {
      id: 'regra-de-ouro',
      partId: 'aria',
      order: 2,
      title: 'Regra de Ouro',
      summary: 'Se o HTML nativo resolve, não use ARIA desnecessariamente.',
      blocks: [
        {
          kind: 'code',
          code: 'No ARIA is better than bad ARIA.',
          variant: 'neutral',
        },
        {
          kind: 'paragraph',
          text: 'Se o HTML nativo resolve, não use ARIA desnecessariamente.',
        },
      ],
    },
    {
      id: 'accessible-name-2',
      partId: 'aria',
      order: 3,
      title: 'Accessible Name',
      summary: 'Todo elemento interativo deve possuir um nome acessível.',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Todo elemento interativo deve possuir um nome acessível.',
        },
        {
          kind: 'heading',
          level: 1,
          text: 'Texto interno',
        },
        {
          kind: 'code',
          code: '<button>\nContinuar\n</button>',
          variant: 'neutral',
        },
        {
          kind: 'reading',
          text: 'Continuar, botão',
        },
      ],
    },
    {
      id: 'aria-label',
      partId: 'aria',
      order: 4,
      title: 'aria-label',
      summary:
        'aria-label: Botão apenas com ícone.; Ações sem texto visível.; Elementos customizados.',
      blocks: [
        {
          kind: 'table',
          headers: ['Atributo', 'Valor', 'Uso'],
          rows: [['aria-label', 'string', 'Define nome acessível.']],
        },
        {
          kind: 'heading',
          level: 1,
          text: 'Quando usar',
        },
        {
          kind: 'list',
          ordered: false,
          items: ['Botão apenas com ícone.', 'Ações sem texto visível.', 'Elementos customizados.'],
        },
        {
          kind: 'heading',
          level: 1,
          text: 'Exemplo',
        },
        {
          kind: 'code',
          code: '<button aria-label="Fechar modal">\n\n  <mat-icon>close</mat-icon>\n\n</button>',
          variant: 'neutral',
        },
        {
          kind: 'reading',
          text: 'Fechar modal, botão',
        },
      ],
    },
    {
      id: 'aria-labelledby',
      partId: 'aria',
      order: 5,
      title: 'aria-labelledby',
      summary: 'aria-labelledby — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'table',
          headers: ['Valor', 'Uso'],
          rows: [['id', 'Usa outro elemento como nome.']],
        },
        {
          kind: 'code',
          code: '<h2 id="titulo">\nPagamento\n</h2>\n\n<button\naria-labelledby="titulo">\n\nConfirmar\n\n</button>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-describedby',
      partId: 'aria',
      order: 6,
      title: 'aria-describedby',
      summary: 'Adiciona descrição complementar.',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Adiciona descrição complementar.',
        },
        {
          kind: 'code',
          code: '<input\nid="cpf"\naria-describedby="ajudaCpf">\n\n<span id="ajudaCpf">\nDigite apenas números\n</span>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-hidden',
      partId: 'aria',
      order: 7,
      title: 'aria-hidden',
      summary: 'aria-hidden — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'table',
          headers: ['Valor', 'Uso'],
          rows: [
            ['true', 'Oculta do leitor.'],
            ['false', 'Expõe ao leitor.'],
          ],
        },
        {
          kind: 'heading',
          level: 1,
          text: 'Imagem decorativa',
        },
        {
          kind: 'code',
          code: '<img\nsrc="ornamento.svg"\nalt=""\naria-hidden="true">',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-expanded',
      partId: 'aria',
      order: 8,
      title: 'aria-expanded',
      summary: 'aria-expanded — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Indica estado expandido.',
        },
        {
          kind: 'code',
          code: '<button\naria-expanded="false">\n\nDetalhes\n\n</button>',
          variant: 'neutral',
        },
        {
          kind: 'reading',
          text: 'Detalhes, botão, recolhido',
        },
      ],
    },
    {
      id: 'aria-controls',
      partId: 'aria',
      order: 9,
      title: 'aria-controls',
      summary: 'Relaciona um controlador a um conteúdo.',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Relaciona um controlador a um conteúdo.',
        },
        {
          kind: 'code',
          code: '<button\naria-expanded="false"\naria-controls="painel1">\n\nAbrir\n\n</button>\n\n<div id="painel1">\n\nConteúdo\n\n</div>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-current',
      partId: 'aria',
      order: 10,
      title: 'aria-current',
      summary: 'aria-current — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'table',
          headers: ['Valor', 'Uso'],
          rows: [
            ['page', 'Página atual.'],
            ['step', 'Etapa atual.'],
            ['location', 'Local atual.'],
          ],
        },
        {
          kind: 'heading',
          level: 1,
          text: 'Stepper',
        },
        {
          kind: 'code',
          code: '<li aria-current="step">\n\nPagamento\n\n</li>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-selected',
      partId: 'aria',
      order: 11,
      title: 'aria-selected',
      summary: 'aria-selected — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Indica seleção.',
        },
        {
          kind: 'code',
          code: '<button\nrole="tab"\naria-selected="true">\n\nDados\n\n</button>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-checked',
      partId: 'aria',
      order: 12,
      title: 'aria-checked',
      summary: 'aria-checked — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'code',
          code: '<div\nrole="checkbox"\naria-checked="true">\n\nAceito\n\n</div>',
          variant: 'neutral',
        },
        {
          kind: 'reading',
          text: 'Aceito, checkbox, marcado',
        },
      ],
    },
    {
      id: 'aria-pressed',
      partId: 'aria',
      order: 13,
      title: 'aria-pressed',
      summary: 'aria-pressed — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Botões toggle.',
        },
        {
          kind: 'code',
          code: '<button\naria-pressed="true">\n\nFavorito\n\n</button>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-disabled',
      partId: 'aria',
      order: 14,
      title: 'aria-disabled',
      summary: 'aria-disabled — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'code',
          code: '<button\naria-disabled="true">\n\nContinuar\n\n</button>',
          variant: 'neutral',
        },
        {
          kind: 'reading',
          text: 'Continuar, botão, indisponível',
        },
      ],
    },
    {
      id: 'aria-required',
      partId: 'aria',
      order: 15,
      title: 'aria-required',
      summary: 'aria-required — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'code',
          code: '<input\naria-required="true">',
          variant: 'neutral',
        },
        {
          kind: 'reading',
          text: 'Campo obrigatório',
        },
      ],
    },
    {
      id: 'aria-invalid',
      partId: 'aria',
      order: 16,
      title: 'aria-invalid',
      summary: 'aria-invalid — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'code',
          code: '<input\naria-invalid="true">',
          variant: 'neutral',
        },
        {
          kind: 'reading',
          text: 'Campo inválido',
        },
      ],
    },
    {
      id: 'aria-live',
      partId: 'aria',
      order: 17,
      title: 'aria-live',
      summary: 'aria-live — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'table',
          headers: ['Valor', 'Uso'],
          rows: [
            ['off', 'Não anuncia.'],
            ['polite', 'Anuncia quando possível.'],
            ['assertive', 'Anuncia imediatamente.'],
          ],
        },
        {
          kind: 'heading',
          level: 1,
          text: 'Toast',
        },
        {
          kind: 'code',
          code: '<div aria-live="polite">\n\nPagamento realizado\n\n</div>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-atomic',
      partId: 'aria',
      order: 18,
      title: 'aria-atomic',
      summary: 'aria-atomic — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Controla quanto será relido.',
        },
        {
          kind: 'code',
          code: '<div\naria-live="polite"\naria-atomic="true">\n\n3 itens selecionados\n\n</div>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-busy',
      partId: 'aria',
      order: 19,
      title: 'aria-busy',
      summary: 'aria-busy — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'paragraph',
          text: 'Informa carregamento.',
        },
        {
          kind: 'code',
          code: '<div aria-busy="true">\n\nCarregando\n\n</div>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-modal',
      partId: 'aria',
      order: 20,
      title: 'aria-modal',
      summary: 'aria-modal — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'code',
          code: '<div\nrole="dialog"\naria-modal="true">\n\n</div>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-haspopup',
      partId: 'aria',
      order: 21,
      title: 'aria-haspopup',
      summary: 'aria-haspopup — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'table',
          headers: ['Valor', 'Uso'],
          rows: [
            ['menu', 'Abre menu.'],
            ['dialog', 'Abre modal.'],
            ['listbox', 'Abre lista.'],
          ],
        },
        {
          kind: 'code',
          code: '<button\naria-haspopup="menu">\n\nAções\n\n</button>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'aria-para-progress-bar',
      partId: 'aria',
      order: 22,
      title: 'ARIA para Progress Bar',
      summary: 'ARIA para Progress Bar — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'code',
          code: '<div\nrole="progressbar"\naria-valuemin="0"\naria-valuemax="100"\naria-valuenow="50">\n\n</div>',
          variant: 'neutral',
        },
        {
          kind: 'reading',
          text: '50%',
        },
      ],
    },
    {
      id: 'principais-roles',
      partId: 'aria',
      order: 23,
      title: 'Principais Roles',
      summary: 'Principais Roles — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'table',
          headers: ['Role', 'Uso'],
          rows: [
            ['button', 'Botão.'],
            ['link', 'Link.'],
            ['dialog', 'Modal.'],
            ['alert', 'Mensagem urgente.'],
            ['status', 'Status informativo.'],
            ['tablist', 'Container de abas.'],
            ['tab', 'Aba.'],
            ['tabpanel', 'Conteúdo da aba.'],
            ['checkbox', 'Checkbox.'],
            ['switch', 'Liga e desliga.'],
            ['menu', 'Menu.'],
            ['menuitem', 'Item menu.'],
            ['listbox', 'Lista selecionável.'],
            ['option', 'Opção.'],
          ],
        },
      ],
    },
    {
      id: 'roles-que-voce-quase-nunca-precisara',
      partId: 'aria',
      order: 24,
      title: 'Roles que você quase nunca precisará',
      summary: 'Roles que você quase nunca precisará: tree; treegrid; feed',
      blocks: [
        {
          kind: 'list',
          ordered: false,
          items: ['tree', 'treegrid', 'feed', 'math', 'meter', 'log', 'marquee'],
        },
        {
          kind: 'paragraph',
          text: 'Não use sem necessidade real.',
        },
      ],
    },
    {
      id: 'angular-attribute-binding',
      partId: 'aria',
      order: 25,
      title: 'Angular Attribute Binding',
      summary: 'Angular Attribute Binding — acessibilidade em Angular.',
      blocks: [
        {
          kind: 'code',
          code: '<button\n[attr.aria-label]="descricao">\n\n</button>',
          variant: 'correct',
        },
        {
          kind: 'heading',
          level: 1,
          text: 'Também funciona',
        },
        {
          kind: 'code',
          code: '<button\n[aria-label]="descricao">\n\n</button>',
          variant: 'neutral',
        },
      ],
    },
    {
      id: 'erros-mais-comuns-com-aria',
      partId: 'aria',
      order: 26,
      title: 'Erros mais comuns com ARIA',
      summary:
        'Erros mais comuns com ARIA: Adicionar role="button" em botão.; Adicionar aria-label desnecessária.; aria-hidden em conteúdo importante.',
      blocks: [
        {
          kind: 'list',
          ordered: false,
          items: [
            'Adicionar role="button" em botão.',
            'Adicionar aria-label desnecessária.',
            'aria-hidden em conteúdo importante.',
            'aria-live em excesso.',
            'Estado aria-expanded desatualizado.',
            'aria-describedby apontando para id inexistente.',
            'Criar componente customizado sem teclado.',
          ],
        },
      ],
    },
    {
      id: 'checklist-aria',
      partId: 'aria',
      order: 27,
      title: 'Checklist ARIA',
      summary:
        'Checklist ARIA: Possui nome acessível?; Possui role correta?; Possui estado correto?',
      blocks: [
        {
          kind: 'list',
          ordered: false,
          items: [
            'Possui nome acessível?',
            'Possui role correta?',
            'Possui estado correto?',
            'Está sincronizado com o DOM?',
            'TalkBack anuncia corretamente?',
            'VoiceOver anuncia corretamente?',
          ],
        },
      ],
    },
  ],
};
