// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const leitoresDeTela: Part = {
  "id": "leitores-de-tela",
  "order": 6,
  "numeral": "06",
  "title": "TalkBack, VoiceOver e Testes Reais",
  "summary": "Como TalkBack e VoiceOver realmente se comportam, o que anunciam em cada componente, e o roteiro de teste manual.",
  "sections": [
    {
      "id": "principio-fundamental",
      "partId": "leitores-de-tela",
      "order": 1,
      "title": "Princípio Fundamental",
      "summary": "Leitores de tela dependem de nome, role e estado. Quase todo bug pode ser diagnosticado por essas três perguntas.",
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
      "summary": "Um botão simples anuncia o nome e a role. TalkBack e VoiceOver dizem a mesma coisa aqui.",
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
      "summary": "Sem rótulo o anúncio é só \"botão\". Com aria-label ele vira a ação que a pessoa está prestes a executar.",
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
      "summary": "A obrigatoriedade é anunciada junto com o campo, para a pessoa saber antes de digitar e não depois de enviar.",
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
      "summary": "aria-invalid faz a falha ser parte do que o leitor diz quando o foco chega no campo.",
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
      "summary": "Um checkbox nativo anuncia o rótulo, a role e o estado — e atualiza o estado sozinho quando é marcado.",
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
      "summary": "role=switch com aria-checked anuncia ligado e desligado, que soa mais natural que marcado e desmarcado num toggle.",
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
      "summary": "O anúncio precisa mudar quando o painel abre. Se disser sempre \"recolhido\", aria-expanded não está ligado ao estado real.",
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
      "summary": "A aba selecionada é anunciada como selecionada. Sem aria-selected a pessoa ouve \"aba\" e não sabe qual está ativa.",
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
      "summary": "aria-current=\"step\" transforma um destaque visual em algo que o leitor de tela consegue transmitir.",
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
      "summary": "Uma região viva anuncia sozinha, sem mover o foco — que é exatamente o que se quer numa confirmação.",
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
      "summary": "Interrompe o que está sendo lido. Reserve para o que realmente não pode esperar; o resto vira ruído.",
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
      "summary": "Todo elemento focável precisa mostrar que está com o foco. Tirar o outline sem substituto equivale a esconder o cursor do mouse.",
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
      "summary": "A ordem do DOM tem que bater com a ordem visual. Quem usa leitor de tela navega pela estrutura, não pelo layout.",
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
      "summary": "Ao abrir: foco entra, o conteúdo de trás fica inalcançável, o Tab não sai. Ao fechar: o foco volta para quem abriu.",
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
      "summary": "O modal fecha e o foco desaparece para o topo do documento. Ele tem que voltar para o botão que abriu.",
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
      "summary": "Anuncie que começou e que terminou. Silêncio durante a espera é indistinguível de página quebrada.",
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
      "summary": "Os dois divergem em lugares previsíveis: formulário, tabs, modal e select. Testar em um não cobre o outro.",
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
      "summary": "Dez passos para rodar em cada tela com leitor de tela real — a parte que nenhuma ferramenta automatizada faz por você.",
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
      "summary": "Botão sem nome, ícone sem label, modal sem foco, erro não anunciado e foco perdido após navegação.",
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
      "summary": "Nove perguntas para responder com aparelho real antes de publicar, terminando na única que realmente importa.",
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
