// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const leitoresDeTela: Part = {
  "id": "leitores-de-tela",
  "order": 6,
  "numeral": "06",
  "title": "TalkBack, VoiceOver e Testes Reais",
  "summary": "Nesta seção vamos focar em como leitores de tela realmente se comportam. Muitos componentes estão tecnicamente corretos no HTML, mas a experiência final para o usuário continua ruim.",
  "sections": [
    {
      "id": "principio-fundamental",
      "partId": "leitores-de-tela",
      "order": 1,
      "title": "Princípio Fundamental",
      "summary": "Quase todos os bugs podem ser analisados por esses três pontos.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Leitores de tela dependem de:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Nome acessível.",
            "Role correta.",
            "Estado correto."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Quase todos os bugs podem ser analisados por esses três pontos."
        }
      ]
    },
    {
      "id": "exemplo-de-leitura",
      "partId": "leitores-de-tela",
      "order": 2,
      "title": "Exemplo de Leitura",
      "summary": "Exemplo de Leitura — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\n\nSalvar\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Salvar, botão"
        },
        {
          "kind": "reading",
          "text": "Salvar, botão"
        }
      ]
    },
    {
      "id": "botao-com-icone",
      "partId": "leitores-de-tela",
      "order": 3,
      "title": "Botão com Ícone",
      "summary": "Botão com Ícone — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\n\n<mat-icon>\nclose\n</mat-icon>\n\n</button>",
          "variant": "wrong"
        },
        {
          "kind": "reading",
          "text": "Botão"
        },
        {
          "kind": "code",
          "code": "<button\naria-label=\"Fechar\">\n\n<mat-icon>\nclose\n</mat-icon>\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Fechar, botão"
        }
      ]
    },
    {
      "id": "campos-obrigatorios-2",
      "partId": "leitores-de-tela",
      "order": 4,
      "title": "Campos Obrigatórios",
      "summary": "Campos Obrigatórios — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\nrequired>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Campo de edição\nObrigatório"
        }
      ]
    },
    {
      "id": "campo-invalido",
      "partId": "leitores-de-tela",
      "order": 5,
      "title": "Campo Inválido",
      "summary": "Campo Inválido — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\naria-invalid=\"true\">",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Campo inválido"
        }
      ]
    },
    {
      "id": "checkbox",
      "partId": "leitores-de-tela",
      "order": 6,
      "title": "Checkbox",
      "summary": "Checkbox — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\ntype=\"checkbox\">\n\n<label>\n\nAceito os termos\n\n</label>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Aceito os termos\nCheckbox\nNão marcado"
        },
        {
          "kind": "reading",
          "text": "Aceito os termos\nCheckbox\nMarcado"
        }
      ]
    },
    {
      "id": "switch",
      "partId": "leitores-de-tela",
      "order": 7,
      "title": "Switch",
      "summary": "Switch — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\nrole=\"switch\"\naria-checked=\"true\">\n\nNotificações\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Notificações\nSwitch\nLigado"
        }
      ]
    },
    {
      "id": "accordion-2",
      "partId": "leitores-de-tela",
      "order": 8,
      "title": "Accordion",
      "summary": "Accordion — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\">\n\nDetalhes\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Detalhes\nBotão\nRecolhido"
        },
        {
          "kind": "reading",
          "text": "Detalhes\nBotão\nExpandido"
        }
      ]
    },
    {
      "id": "tabs-2",
      "partId": "leitores-de-tela",
      "order": 9,
      "title": "Tabs",
      "summary": "Tabs — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\nrole=\"tab\"\naria-selected=\"true\">\n\nDados\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Dados\nAba\nSelecionada"
        }
      ]
    },
    {
      "id": "stepper-2",
      "partId": "leitores-de-tela",
      "order": 10,
      "title": "Stepper",
      "summary": "Stepper — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<li\naria-current=\"step\">\n\nPagamento\n\n</li>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Pagamento\nEtapa atual"
        }
      ]
    },
    {
      "id": "mensagens-dinamicas-2",
      "partId": "leitores-de-tela",
      "order": 11,
      "title": "Mensagens Dinâmicas",
      "summary": "O leitor anuncia automaticamente.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\">\n\nPagamento realizado\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "O foco não precisa mudar."
        },
        {
          "kind": "paragraph",
          "text": "O leitor anuncia automaticamente."
        }
      ]
    },
    {
      "id": "role-alert",
      "partId": "leitores-de-tela",
      "order": 12,
      "title": "Role Alert",
      "summary": "Utilizar apenas para mensagens importantes.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"alert\">\n\nFalha no pagamento\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "É anunciado imediatamente."
        },
        {
          "kind": "paragraph",
          "text": "Utilizar apenas para mensagens importantes."
        }
      ]
    },
    {
      "id": "foco-visivel",
      "partId": "leitores-de-tela",
      "order": 13,
      "title": "Foco Visível",
      "summary": "Todo elemento focável deve indicar visualmente que recebeu foco.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Todo elemento focável deve indicar visualmente que recebeu foco."
        },
        {
          "kind": "code",
          "code": "button:focus {\n\noutline: 3px solid blue;\n\n}",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "button:focus {\n\noutline: none;\n\n}",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "sequencia-de-foco",
      "partId": "leitores-de-tela",
      "order": 14,
      "title": "Sequência de Foco",
      "summary": "A ordem do DOM deve refletir a ordem visual.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "A ordem do DOM deve refletir a ordem visual."
        },
        {
          "kind": "paragraph",
          "text": "Usuários de leitor de tela navegam seguindo a estrutura da página."
        }
      ]
    },
    {
      "id": "modais",
      "partId": "leitores-de-tela",
      "order": 15,
      "title": "Modais",
      "summary": "Modais: Foco vai para o modal.; Conteúdo anterior fica inacessível.; Tab navega apenas dentro dele.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Ao abrir:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Foco vai para o modal.",
            "Conteúdo anterior fica inacessível.",
            "Tab navega apenas dentro dele."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Ao fechar:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Foco retorna ao elemento que abriu."
          ]
        }
      ]
    },
    {
      "id": "problema-classico",
      "partId": "leitores-de-tela",
      "order": 16,
      "title": "Problema Clássico",
      "summary": "Ao fechar o modal, o foco muitas vezes desaparece.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\n\nEditar\n\n</button>\n\n<div *ngIf=\"aberto\">\n\nModal\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Ao fechar o modal, o foco muitas vezes desaparece."
        },
        {
          "kind": "paragraph",
          "text": "Deve retornar ao botão Editar."
        }
      ]
    },
    {
      "id": "loading-2",
      "partId": "leitores-de-tela",
      "order": 17,
      "title": "Loading",
      "summary": "Evite deixar usuário sem feedback.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Evite deixar usuário sem feedback."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Exemplo"
        },
        {
          "kind": "code",
          "code": "Carregando extrato...",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Extrato carregado com sucesso"
        }
      ]
    },
    {
      "id": "talkback-x-voiceover",
      "partId": "leitores-de-tela",
      "order": 18,
      "title": "TalkBack x VoiceOver",
      "summary": "TalkBack x VoiceOver — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Cenário",
            "Diferenças comuns"
          ],
          "rows": [
            [
              "Forms",
              "Pequenas diferenças de anúncio."
            ],
            [
              "Tabs",
              "Ordem de anúncio pode variar."
            ],
            [
              "Modais",
              "Foco pode variar."
            ],
            [
              "Selects",
              "Muito dependente da implementação."
            ]
          ]
        }
      ]
    },
    {
      "id": "roteiro-de-teste-manual",
      "partId": "leitores-de-tela",
      "order": 19,
      "title": "Roteiro de Teste Manual",
      "summary": "Roteiro de Teste Manual: Ativar leitor de tela.; Percorrer toda tela.; Verificar títulos.",
      "blocks": [
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "Ativar leitor de tela.",
            "Percorrer toda tela.",
            "Verificar títulos.",
            "Verificar botões.",
            "Verificar formulários.",
            "Testar erros.",
            "Testar loading.",
            "Testar modal.",
            "Testar navegação.",
            "Testar saída do fluxo."
          ]
        }
      ]
    },
    {
      "id": "bugs-mais-comuns-encontrados-em-producao",
      "partId": "leitores-de-tela",
      "order": 20,
      "title": "Bugs Mais Comuns Encontrados em Produção",
      "summary": "Bugs Mais Comuns Encontrados em Produção: Botão sem nome acessível.; Ícone clicável sem label.; Modal sem foco.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Botão sem nome acessível.",
            "Ícone clicável sem label.",
            "Modal sem foco.",
            "Erro não anunciado.",
            "Toast não anunciado.",
            "Foco perdido após navegação.",
            "Ordem de foco incorreta.",
            "Accordion sem aria-expanded.",
            "Tabs sem aria-selected.",
            "Select customizado incompleto."
          ]
        }
      ]
    },
    {
      "id": "checklist-final-de-talkback-e-voiceover",
      "partId": "leitores-de-tela",
      "order": 21,
      "title": "Checklist Final de TalkBack e VoiceOver",
      "summary": "Checklist Final de TalkBack e VoiceOver: Todos os elementos possuem nome?; Todos possuem role correta?; Estado é anunciado?",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Todos os elementos possuem nome?",
            "Todos possuem role correta?",
            "Estado é anunciado?",
            "Fluxo funciona sem visão?",
            "Erros são anunciados?",
            "Mensagens dinâmicas são anunciadas?",
            "Foco nunca desaparece?",
            "A navegação faz sentido?",
            "Existe feedback para sucesso e erro?"
          ]
        }
      ]
    }
  ]
};
