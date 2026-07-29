// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const componentes: Part = {
  "id": "componentes",
  "order": 4,
  "numeral": "04",
  "title": "Componentes Interativos e Estruturas Complexas",
  "summary": "Os componentes que mais geram bug de acessibilidade: modal, tabs, accordion, menu, combobox, tabela e carrossel.",
  "sections": [
    {
      "id": "botoes",
      "partId": "componentes",
      "order": 1,
      "title": "Botões",
      "summary": "Use botão de verdade. Uma div clicável perde role, teclado, estado e semântica de uma vez só.",
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
      "summary": "Sem rótulo, o leitor anuncia apenas \"botão\". A pessoa sabe que há um controle, mas não o que ele faz.",
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
      "summary": "Links navegam, botões executam. Trocar os dois confunde quem depende da role anunciada para saber o que vai acontecer.",
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
      "summary": "Envolva o card num botão ou âncora de verdade. Uma div com handler de clique é invisível para o teclado.",
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
      "summary": "O gatilho precisa de aria-expanded e aria-controls, para o estado ser anunciado junto com o nome.",
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
      "summary": "Ligue aria-expanded ao estado real. Valor fixo anuncia \"recolhido\" para sempre, mesmo com o painel aberto.",
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
      "summary": "role=tablist com aria-selected em cada aba. Sem isso o leitor diz \"aba\" e não diz qual está ativa.",
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
      "summary": "O painel com o conteúdo da aba selecionada, ligado a ela para o leitor conseguir ir e voltar entre os dois.",
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
      "summary": "role=dialog, aria-modal e um rótulo. Sem aria-modal o leitor continua lendo o conteúdo de trás.",
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
      "summary": "Seis coisas que todo modal precisa fazer: role, aria-modal, receber foco, prender foco, fechar no ESC e devolver o foco.",
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
      "summary": "É um modal que sobe de baixo. Valem as mesmas regras, sem exceção.",
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
      "summary": "O gatilho anuncia que abre um menu, através de aria-haspopup e aria-expanded.",
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
      "summary": "Cada item leva role=menuitem, e o conjunto todo precisa ser alcançável pelas setas.",
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
      "summary": "Prefira o select nativo sempre que der. Ele já vem com teclado, estado e comportamento mobile corretos.",
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
      "summary": "Um dos padrões mais difíceis de acertar. Desde o Angular v22 existe resposta oficial: ngCombobox, do @angular/aria.",
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
      "summary": "Uma ul ou ol de verdade faz o leitor anunciar \"lista com N itens\", que diz à pessoa o quanto vem pela frente.",
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
      "summary": "Um nav rotulado, com aria-current=\"page\" no item atual para ele ser anunciado como onde você está.",
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
      "summary": "aria-current=\"step\" marca a etapa atual, para a pessoa saber onde está no fluxo sem ver o destaque visual.",
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
      "summary": "caption, th e scope são o que permite ao leitor ligar cada célula ao seu cabeçalho, em vez de ler números soltos.",
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
      "summary": "Use caption, th e scope, e nunca monte tabela com div — isso destrói a relação entre célula e cabeçalho.",
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
      "summary": "Ligue com aria-describedby e abra também no foco — tooltip que só responde ao hover não existe para o teclado.",
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
      "summary": "role=status anuncia a mensagem sem roubar o foco, que é o comportamento certo para uma confirmação.",
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
      "summary": "Uma região viva educada: anuncia quando houver pausa, em vez de cortar o que está sendo lido.",
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
      "summary": "role=alert interrompe na hora. Reserve para o que realmente não pode esperar — o resto vira ruído.",
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
      "summary": "aria-busy avisa a tecnologia assistiva que a região ainda está atualizando, para não anunciar um estado pela metade.",
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
      "summary": "role=progressbar precisa de valuemin, valuemax e valuenow, senão a barra é anunciada sem número algum.",
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
      "summary": "As formas de placeholder não carregam informação. Esconda com aria-hidden para o leitor não receber uma parede de nada.",
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
      "summary": "Precisa de botão anterior, próximo e pausar, e slides identificáveis. Rotação automática sem pausa é falha de WCAG.",
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
      "summary": "Anuncie os itens que chegaram, preserve o foco onde estava, e evite a página pular sob a pessoa.",
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
      "summary": "Nunca dependa só do gesto. Precisa existir um caminho por clique ou teclado para o mesmo resultado.",
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
      "summary": "Input de arquivo nativo com label de verdade. Upload customizado é um lugar comum de perder o teclado por completo.",
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
      "summary": "Tudo que muda sem recarregar precisa de região viva: toast, filtro aplicado, busca concluída, pagamento aprovado.",
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
      "summary": "Nove perguntas para rodar sobre qualquer componente antes de considerá-lo pronto — nome, role, estado, teclado, foco e anúncio.",
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
