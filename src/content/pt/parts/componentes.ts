// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const componentes: Part = {
  "id": "componentes",
  "order": 4,
  "numeral": "04",
  "title": "Componentes Interativos e Estruturas Complexas",
  "summary": "Esta seção cobre os componentes que mais geram bugs de acessibilidade em aplicações Angular.",
  "sections": [
    {
      "id": "botoes",
      "partId": "componentes",
      "order": 1,
      "title": "Botões",
      "summary": "Botões — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\nContinuar\n</button>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Continuar, botão"
        },
        {
          "kind": "code",
          "code": "<div (click)=\"continuar()\">\nContinuar\n</div>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "botao-apenas-com-icone",
      "partId": "componentes",
      "order": 2,
      "title": "Botão Apenas com Ícone",
      "summary": "Botão Apenas com Ícone — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-label=\"Editar endereço\">\n\n  <mat-icon>edit</mat-icon>\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Editar endereço, botão"
        }
      ]
    },
    {
      "id": "links",
      "partId": "componentes",
      "order": 3,
      "title": "Links",
      "summary": "Links navegam. Botões executam ações.",
      "blocks": [
        {
          "kind": "code",
          "code": "<a href=\"/conta\">\nVer conta\n</a>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<a (click)=\"salvar()\">\nSalvar\n</a>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Links navegam. Botões executam ações."
        }
      ]
    },
    {
      "id": "cards-clicaveis",
      "partId": "componentes",
      "order": 4,
      "title": "Cards Clicáveis",
      "summary": "Cards Clicáveis — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button class=\"card\">\n\nConta Corrente\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Alternativa"
        },
        {
          "kind": "code",
          "code": "<a\nhref=\"/conta\">\n\nConta Corrente\n\n</a>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "accordion",
      "partId": "componentes",
      "order": 5,
      "title": "Accordion",
      "summary": "Accordion — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\"\naria-controls=\"faq1\">\n\nComo funciona?\n\n</button>\n\n<div id=\"faq1\">\n\nConteúdo\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Como funciona?\nBotão\nRecolhido"
        }
      ]
    },
    {
      "id": "accordion-com-angular",
      "partId": "componentes",
      "order": 6,
      "title": "Accordion com Angular",
      "summary": "aria-expanded deve refletir o estado real.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\n[attr.aria-expanded]=\"aberto\">\n\nPergunta\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "aria-expanded deve refletir o estado real."
        }
      ]
    },
    {
      "id": "tabs",
      "partId": "componentes",
      "order": 7,
      "title": "Tabs",
      "summary": "Tabs — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"tablist\">\n\n  <button\n  role=\"tab\"\n  aria-selected=\"true\">\n\n    Dados\n\n  </button>\n\n  <button\n  role=\"tab\"\n  aria-selected=\"false\">\n\n    Endereço\n\n  </button>\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "tab-panel",
      "partId": "componentes",
      "order": 8,
      "title": "Tab Panel",
      "summary": "Tab Panel — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"tabpanel\">\n\nConteúdo da aba.\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "modal",
      "partId": "componentes",
      "order": 9,
      "title": "Modal",
      "summary": "Modal — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"dialog\"\naria-modal=\"true\"\naria-labelledby=\"tituloModal\">\n\n<h2 id=\"tituloModal\">\nConfirmar pagamento\n</h2>\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "checklist-modal",
      "partId": "componentes",
      "order": 10,
      "title": "Checklist Modal",
      "summary": "Checklist Modal: Possui role=\"dialog\"?; Possui aria-modal?; Recebe foco ao abrir?",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Possui role=\"dialog\"?",
            "Possui aria-modal?",
            "Recebe foco ao abrir?",
            "Prende foco internamente?",
            "Fecha com ESC?",
            "Retorna foco ao fechar?"
          ]
        }
      ]
    },
    {
      "id": "bottom-sheet",
      "partId": "componentes",
      "order": 11,
      "title": "Bottom Sheet",
      "summary": "Bottom Sheet — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Tratar como modal."
        },
        {
          "kind": "code",
          "code": "role=\"dialog\"\naria-modal=\"true\"",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "menu",
      "partId": "componentes",
      "order": 12,
      "title": "Menu",
      "summary": "Menu — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-haspopup=\"menu\"\naria-expanded=\"false\">\n\nAções\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "itens-de-menu",
      "partId": "componentes",
      "order": 13,
      "title": "Itens de Menu",
      "summary": "Itens de Menu — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"menu\">\n\n  <button role=\"menuitem\">\n  Editar\n  </button>\n\n  <button role=\"menuitem\">\n  Excluir\n  </button>\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "dropdown",
      "partId": "componentes",
      "order": 14,
      "title": "Dropdown",
      "summary": "Sempre que possível, prefira select nativo.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Sempre que possível, prefira select nativo."
        },
        {
          "kind": "code",
          "code": "<select>\n\n...\n\n</select>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "combobox",
      "partId": "componentes",
      "order": 15,
      "title": "Combobox",
      "summary": "Implementação complexa. Evite criar manualmente.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"combobox\"\naria-expanded=\"false\">\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Implementação complexa. Evite criar manualmente."
        }
      ]
    },
    {
      "id": "lista",
      "partId": "componentes",
      "order": 16,
      "title": "Lista",
      "summary": "Lista — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<ul>\n\n  <li>Item 1</li>\n\n  <li>Item 2</li>\n\n</ul>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Lista com 2 itens"
        }
      ]
    },
    {
      "id": "breadcrumb",
      "partId": "componentes",
      "order": 17,
      "title": "Breadcrumb",
      "summary": "Breadcrumb — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<nav aria-label=\"Breadcrumb\">\n\n...\n\n</nav>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Item Atual"
        },
        {
          "kind": "code",
          "code": "aria-current=\"page\"",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "stepper",
      "partId": "componentes",
      "order": 18,
      "title": "Stepper",
      "summary": "Stepper — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<li aria-current=\"step\">\n\nPagamento\n\n</li>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Pagamento\nEtapa atual"
        }
      ]
    },
    {
      "id": "tabela-simples",
      "partId": "componentes",
      "order": 19,
      "title": "Tabela Simples",
      "summary": "Tabela Simples — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<table>\n\n  <caption>\n  Extrato\n  </caption>\n\n  <thead>\n\n    <tr>\n\n      <th scope=\"col\">\n      Data\n      </th>\n\n      <th scope=\"col\">\n      Valor\n      </th>\n\n    </tr>\n\n  </thead>\n\n</table>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "tabela-boas-praticas",
      "partId": "componentes",
      "order": 20,
      "title": "Tabela - Boas Práticas",
      "summary": "Tabela - Boas Práticas: Usar caption.; Usar th.; Usar scope.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Usar caption.",
            "Usar th.",
            "Usar scope.",
            "Evitar tabela feita com div."
          ]
        }
      ]
    },
    {
      "id": "tooltip",
      "partId": "componentes",
      "order": 21,
      "title": "Tooltip",
      "summary": "Tooltip — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-describedby=\"tooltip1\">\n\n?",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<div\nid=\"tooltip1\"\nrole=\"tooltip\">\n\nInformação adicional\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "toast",
      "partId": "componentes",
      "order": 22,
      "title": "Toast",
      "summary": "Toast — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"status\">\n\nPagamento realizado\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "snackbar",
      "partId": "componentes",
      "order": 23,
      "title": "Snackbar",
      "summary": "Snackbar — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\">\n\nItem adicionado\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "alertas-criticos",
      "partId": "componentes",
      "order": 24,
      "title": "Alertas Críticos",
      "summary": "Alertas Críticos — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"alert\">\n\nFalha na transação\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Anunciado imediatamente."
        }
      ]
    },
    {
      "id": "loading",
      "partId": "componentes",
      "order": 25,
      "title": "Loading",
      "summary": "Loading — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-busy=\"true\">\n\nCarregando\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "progress-bar",
      "partId": "componentes",
      "order": 26,
      "title": "Progress Bar",
      "summary": "Progress Bar — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"progressbar\"\naria-valuemin=\"0\"\naria-valuemax=\"100\"\naria-valuenow=\"30\">\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "30%"
        }
      ]
    },
    {
      "id": "skeleton-loading",
      "partId": "componentes",
      "order": 27,
      "title": "Skeleton Loading",
      "summary": "Conteúdo visual deve ser ignorado pelo leitor de tela.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Conteúdo visual deve ser ignorado pelo leitor de tela."
        },
        {
          "kind": "code",
          "code": "aria-hidden=\"true\"",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "carrossel",
      "partId": "componentes",
      "order": 28,
      "title": "Carrossel",
      "summary": "Carrossel: Botão anterior.; Botão próximo.; Botão pausar.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Botão anterior.",
            "Botão próximo.",
            "Botão pausar.",
            "Slides identificáveis."
          ]
        }
      ]
    },
    {
      "id": "infinite-scroll",
      "partId": "componentes",
      "order": 29,
      "title": "Infinite Scroll",
      "summary": "Infinite Scroll: Anunciar novos itens carregados.; Preservar foco.; Evitar mudanças bruscas.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Anunciar novos itens carregados.",
            "Preservar foco.",
            "Evitar mudanças bruscas."
          ]
        }
      ]
    },
    {
      "id": "drag-and-drop",
      "partId": "componentes",
      "order": 30,
      "title": "Drag and Drop",
      "summary": "Nunca dependa exclusivamente do gesto.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Nunca dependa exclusivamente do gesto."
        },
        {
          "kind": "paragraph",
          "text": "Sempre ofereça alternativa por clique ou teclado."
        }
      ]
    },
    {
      "id": "upload-de-arquivo",
      "partId": "componentes",
      "order": 31,
      "title": "Upload de Arquivo",
      "summary": "Upload de Arquivo — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<label for=\"arquivo\">\nDocumento\n</label>\n\n<input\nid=\"arquivo\"\ntype=\"file\">",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "mensagens-dinamicas",
      "partId": "componentes",
      "order": 32,
      "title": "Mensagens Dinâmicas",
      "summary": "Mensagens Dinâmicas: Toast.; Filtro aplicado.; Busca concluída.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\">\n\n{{ mensagem }}\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Muito utilizado para:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Toast.",
            "Filtro aplicado.",
            "Busca concluída.",
            "Pagamento aprovado.",
            "Upload concluído."
          ]
        }
      ]
    },
    {
      "id": "checklist-de-componentes",
      "partId": "componentes",
      "order": 33,
      "title": "Checklist de Componentes",
      "summary": "Checklist de Componentes: Possui nome acessível?; Possui role correta?; Possui estado correto?",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Possui nome acessível?",
            "Possui role correta?",
            "Possui estado correto?",
            "Funciona com teclado?",
            "Possui foco visível?",
            "Funciona com TalkBack?",
            "Funciona com VoiceOver?",
            "Anuncia mudanças importantes?",
            "Mantém ordem de foco adequada?"
          ]
        }
      ]
    }
  ]
};
