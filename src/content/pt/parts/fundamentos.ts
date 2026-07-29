// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const fundamentos: Part = {
  "id": "fundamentos",
  "order": 1,
  "numeral": "01",
  "title": "Fundamentos de Acessibilidade Angular",
  "summary": "Os fundamentos: o que é acessibilidade, WCAG 2.2, POUR, como leitores de tela leem uma página, e os erros mais comuns em Angular.",
  "sections": [
    {
      "id": "o-que-e-acessibilidade",
      "partId": "fundamentos",
      "order": 1,
      "title": "O que é acessibilidade?",
      "summary": "É um produto digital poder ser usado por qualquer pessoa, independentemente de limitação visual, auditiva, motora, cognitiva ou temporária.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Acessibilidade é a capacidade de um produto digital ser utilizado por todas as pessoas, independentemente de limitações visuais, auditivas, motoras, cognitivas ou temporárias."
        },
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "Exemplos de usuários:"
            },
            {
              "kind": "list",
              "ordered": false,
              "items": [
                "Pessoa cega usando TalkBack.",
                "Pessoa cega usando VoiceOver.",
                "Pessoa com baixa visão usando zoom.",
                "Pessoa com mobilidade reduzida utilizando teclado.",
                "Pessoa com deficiência cognitiva.",
                "Pessoa com braço machucado utilizando somente uma mão."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "wcag-2-2",
      "partId": "fundamentos",
      "order": 2,
      "title": "WCAG 2.2",
      "summary": "A WCAG é o padrão mais usado no mundo para avaliar acessibilidade digital. AA é o nível que a maioria das empresas persegue.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "A WCAG (Web Content Accessibility Guidelines) é o conjunto mais utilizado no mundo para avaliar acessibilidade digital."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Níveis de conformidade"
        },
        {
          "kind": "table",
          "headers": [
            "Nível",
            "Descrição"
          ],
          "rows": [
            [
              "A",
              "Requisitos mínimos."
            ],
            [
              "AA",
              "Padrão adotado pela maioria das empresas."
            ],
            [
              "AAA",
              "Nível mais rigoroso."
            ]
          ]
        }
      ]
    },
    {
      "id": "pour",
      "partId": "fundamentos",
      "order": 3,
      "title": "POUR",
      "summary": "Todo critério da WCAG vem de quatro pilares: Perceptível, Operável, Compreensível e Robusto.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Todos os critérios da WCAG derivam de quatro pilares:"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "P - Perceivable (Perceptível)"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "O usuário precisa conseguir perceber o conteúdo.",
            "Imagens precisam de texto alternativo.",
            "Informações não podem depender apenas de cor."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O - Operable (Operável)"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "A interface deve ser utilizável.",
            "Compatível com teclado.",
            "Compatível com leitores de tela."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "U - Understandable (Compreensível)"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Fluxos consistentes.",
            "Mensagens claras.",
            "Erros compreensíveis."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "R - Robust (Robusto)"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Compatível com tecnologias assistivas.",
            "HTML semântico.",
            "ARIA correta."
          ]
        }
      ]
    },
    {
      "id": "leitores-de-tela-2",
      "partId": "fundamentos",
      "order": 4,
      "title": "Leitores de tela",
      "summary": "TalkBack no Android, VoiceOver no iOS. Os dois precisam de três coisas: nome acessível, role correta e estado correto.",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "TalkBack"
        },
        {
          "kind": "paragraph",
          "text": "Leitor de tela nativo do Android."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "VoiceOver"
        },
        {
          "kind": "paragraph",
          "text": "Leitor de tela nativo do iOS."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O que eles precisam para funcionar corretamente?"
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
          "kind": "heading",
          "level": 1,
          "text": "Exemplo"
        },
        {
          "kind": "code",
          "code": "<button>\nSalvar\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Salvar, botão"
        }
      ]
    },
    {
      "id": "como-um-leitor-de-tela-enxerga-uma-pagina",
      "partId": "fundamentos",
      "order": 5,
      "title": "Como um leitor de tela enxerga uma página?",
      "summary": "Não do jeito que quem enxerga vê. A navegação é por títulos, botões, links, campos e landmarks — uma tela visualmente perfeita pode ser inutilizável.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Usuários não enxergam a interface da mesma forma que usuários visuais."
        },
        {
          "kind": "paragraph",
          "text": "Eles navegam por:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Títulos.",
            "Botões.",
            "Links.",
            "Campos.",
            "Landmarks."
          ]
        },
        {
          "kind": "callout",
          "tone": "warning",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "Uma tela visualmente perfeita pode ser completamente inutilizável para um leitor de tela."
            }
          ]
        }
      ]
    },
    {
      "id": "regra-de-ouro-da-acessibilidade",
      "partId": "fundamentos",
      "order": 6,
      "title": "Regra de Ouro da Acessibilidade",
      "summary": "HTML semântico primeiro, ARIA depois. Se existe tag nativa que resolve, ela já traz role, teclado e estado de graça.",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "HTML primeiro"
        },
        {
          "kind": "paragraph",
          "text": "Sempre prefira HTML semântico antes de usar ARIA."
        },
        {
          "kind": "code",
          "code": "<button>\nSalvar\n</button>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<div (click)=\"salvar()\">\nSalvar\n</div>",
          "variant": "wrong"
        },
        {
          "kind": "callout",
          "tone": "success",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "Se existe uma tag HTML nativa capaz de resolver o problema, use ela."
            }
          ]
        }
      ]
    },
    {
      "id": "estrutura-semantica-basica",
      "partId": "fundamentos",
      "order": 7,
      "title": "Estrutura Semântica Básica",
      "summary": "header, nav, main e footer dão ao leitor de tela o mapa da página antes de qualquer linha ser lida.",
      "blocks": [
        {
          "kind": "code",
          "code": "<header>\n  Cabeçalho\n</header>\n\n<nav>\n  Navegação\n</nav>\n\n<main>\n\n  <section>\n\n    <h1>Título principal</h1>\n\n  </section>\n\n</main>\n\n<footer>\n  Rodapé\n</footer>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "landmarks",
      "partId": "fundamentos",
      "order": 8,
      "title": "Landmarks",
      "summary": "Landmarks permitem pular direto para as regiões importantes da página, em vez de percorrer tudo.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Landmarks permitem que leitores de tela naveguem rapidamente pelas regiões importantes da página."
        },
        {
          "kind": "table",
          "headers": [
            "Tag",
            "Função"
          ],
          "rows": [
            [
              "header",
              "Cabeçalho."
            ],
            [
              "nav",
              "Navegação."
            ],
            [
              "main",
              "Conteúdo principal."
            ],
            [
              "aside",
              "Conteúdo complementar."
            ],
            [
              "footer",
              "Rodapé."
            ]
          ]
        }
      ]
    },
    {
      "id": "headings",
      "partId": "fundamentos",
      "order": 9,
      "title": "Headings",
      "summary": "Headings formam uma árvore de navegação. Pular um nível sugere uma estrutura que não existe e desorienta.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Headings criam uma árvore de navegação."
        },
        {
          "kind": "code",
          "code": "<h1>Conta Corrente</h1>\n\n<h2>Saldo</h2>\n\n<h2>Extrato</h2>\n\n<h3>Últimos lançamentos</h3>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<h1>Conta Corrente</h1>\n<h4>Extrato</h4>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "accessible-name",
      "partId": "fundamentos",
      "order": 10,
      "title": "Accessible Name",
      "summary": "Todo elemento interativo precisa de nome. Ele vem do texto visível, ou do aria-label quando não há texto para usar.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Todo elemento interativo deve possuir um nome acessível."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Texto visível"
        },
        {
          "kind": "code",
          "code": "<button>\nContinuar\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Continuar, botão"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "aria-label"
        },
        {
          "kind": "code",
          "code": "<button aria-label=\"Fechar modal\">\n\n  <mat-icon>close</mat-icon>\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Fechar modal, botão"
        }
      ]
    },
    {
      "id": "accessible-description",
      "partId": "fundamentos",
      "order": 11,
      "title": "Accessible Description",
      "summary": "aria-describedby acrescenta uma dica ao lado do nome. O leitor lê o nome do campo e depois a descrição.",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\n id=\"cpf\"\n aria-describedby=\"ajudaCpf\">\n\n<span id=\"ajudaCpf\">\nDigite somente números\n</span>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "O leitor combinará o nome do campo com sua descrição."
        }
      ]
    },
    {
      "id": "nome-role-estado",
      "partId": "fundamentos",
      "order": 12,
      "title": "Nome + Role + Estado",
      "summary": "Quase todo problema de leitor de tela se resume a três perguntas: qual o nome, qual a role, qual o estado.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Quase toda análise de leitor de tela pode ser resumida em três perguntas:"
        },
        {
          "kind": "table",
          "headers": [
            "Pergunta",
            "Exemplo"
          ],
          "rows": [
            [
              "Qual é o nome?",
              "Salvar"
            ],
            [
              "Qual é a role?",
              "Botão"
            ],
            [
              "Qual é o estado?",
              "Desabilitado"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Exemplo"
        },
        {
          "kind": "code",
          "code": "<button disabled>\nSalvar\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Salvar, botão, desabilitado"
        }
      ]
    },
    {
      "id": "erros-mais-comuns-encontrados-em-angular",
      "partId": "fundamentos",
      "order": 13,
      "title": "Erros mais comuns encontrados em Angular",
      "summary": "Div clicável, ícone sem label, input só com placeholder, falta de heading, modal sem foco e tabindex positivo.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Div clicável simulando botão.",
            "Ícone clicável sem aria-label.",
            "Input apenas com placeholder.",
            "Ausência de heading principal.",
            "Modal sem gerenciamento de foco.",
            "Erros de formulário não anunciados.",
            "Uso excessivo de ARIA.",
            "Links agindo como botão.",
            "Botões agindo como links.",
            "tabindex positivo."
          ]
        }
      ]
    },
    {
      "id": "mentalidade-para-o-time-angular",
      "partId": "fundamentos",
      "order": 14,
      "title": "Mentalidade para o time Angular",
      "summary": "Cinco perguntas antes de criar qualquer componente — elas pegam a maioria dos problemas antes da primeira linha.",
      "blocks": [
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "Antes de criar qualquer componente, pergunte:"
            },
            {
              "kind": "list",
              "ordered": true,
              "items": [
                "Existe uma tag HTML nativa para isso?",
                "O elemento possui nome acessível?",
                "Funciona com teclado?",
                "Funciona com TalkBack?",
                "Funciona com VoiceOver?"
              ]
            }
          ]
        }
      ]
    }
  ]
};
