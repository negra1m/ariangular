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
          "kind": "heading",
          "level": 1,
          "text": "Os três, num elemento só"
        },
        {
          "kind": "code",
          "code": "<button\n  [attr.aria-pressed]=\"favorito()\"\n  aria-label=\"Favoritar Conta Corrente\"\n  (click)=\"alternar()\"\n>\n  <mat-icon aria-hidden=\"true\">star</mat-icon>\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Favoritar Conta Corrente, botão de alternância, não pressionado"
        },
        {
          "kind": "table",
          "headers": [
            "Pergunta",
            "De onde vem",
            "O que a pessoa ouve"
          ],
          "rows": [
            [
              "Qual o nome?",
              "aria-label",
              "Favoritar Conta Corrente"
            ],
            [
              "Qual a role?",
              "a tag button, mais o aria-pressed",
              "botão de alternância"
            ],
            [
              "Qual o estado?",
              "aria-pressed ligado ao signal",
              "não pressionado"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Diagnóstico em três perguntas"
        },
        {
          "kind": "paragraph",
          "text": "Diante de qualquer bug de leitor de tela, pergunte nesta ordem — o problema quase sempre está numa das três."
        },
        {
          "kind": "code",
          "code": "<!-- Anunciou só \"botão\"? Falta NOME. -->\n<button><mat-icon>star</mat-icon></button>\n\n<!-- Anunciou como texto comum? Falta ROLE. -->\n<div (click)=\"alternar()\">Favoritar</div>\n\n<!-- Anunciou certo, mas nunca muda? Falta ESTADO. -->\n<button aria-pressed=\"false\" (click)=\"alternar()\">Favoritar</button>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "O terceiro é o mais traiçoeiro: tudo parece implementado, e o atributo está congelado no valor inicial. Visualmente a estrela acende; para o leitor de tela, nada aconteceu."
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O CSS que quebra a ordem sem avisar"
        },
        {
          "kind": "paragraph",
          "text": "order, row-reverse e grid-area mudam o que se vê, e não mudam o DOM. O resultado: a pessoa vê \"Cancelar, Confirmar\" e o Tab entrega \"Confirmar, Cancelar\"."
        },
        {
          "kind": "code",
          "code": "<!-- ❌ o visual inverte, o Tab não -->\n<div class=\"acoes\">\n  <button>Confirmar</button>\n  <button>Cancelar</button>\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": ".acoes {\n  display: flex;\n  flex-direction: row-reverse;\n}",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "É uma falha de WCAG 1.3.2, e das mais difíceis de perceber: para quem enxerga, a tela está perfeita."
        },
        {
          "kind": "code",
          "code": "<div class=\"acoes\">\n  <button>Cancelar</button>\n  <button>Confirmar</button>\n</div>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": ".acoes {\n  display: flex;\n  justify-content: flex-end;\n}",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Quando o DOM precisa divergir de propósito"
        },
        {
          "kind": "paragraph",
          "text": "Barra lateral que aparece à esquerda mas deve ser lida depois do conteúdo é um caso legítimo. A saída é colocar no DOM na ordem de leitura e posicionar por grid — nunca o contrário."
        },
        {
          "kind": "code",
          "code": "<div class=\"pagina\">\n  <main><!-- primeiro no DOM: é o que importa --></main>\n  <aside><!-- depois --></aside>\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": ".pagina {\n  display: grid;\n  grid-template-columns: 16rem 1fr;\n}\n/* O aside vai para a coluna 1 sem sair do lugar no DOM. */\n.pagina aside { grid-column: 1; grid-row: 1; }\n.pagina main  { grid-column: 2; grid-row: 1; }",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Como testar em 30 segundos"
        },
        {
          "kind": "paragraph",
          "text": "Clique na barra de endereço e vá apertando Tab. O anel de foco tem que descer a página numa linha previsível. Todo pulo para trás, ou para um canto distante, é um defeito."
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
        },
        {
          "kind": "paragraph",
          "text": "<dialog> com showModal() entrega role, aria-modal, foco preso e ESC já implementados e testados pelo navegador. Reimplementar isso à mão é a origem clássica de modal inacessível."
        },
        {
          "kind": "code",
          "code": "@Component({\n  template: `\n    <button #abridor (click)=\"abrir()\">Excluir conta</button>\n\n    <dialog #dialog (close)=\"aoFechar()\" aria-labelledby=\"excluir-titulo\">\n\n      <h2 id=\"excluir-titulo\">Excluir conta</h2>\n      <p>Esta ação não pode ser desfeita.</p>\n\n      <button (click)=\"dialog.close()\">Cancelar</button>\n      <button (click)=\"confirmar()\">Excluir</button>\n\n    </dialog>\n  `,\n})\nexport class ExcluirConta {\n\n  private readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');\n  private readonly abridor = viewChild<ElementRef<HTMLElement>>('abridor');\n\n  protected abrir(): void {\n    // showModal(), não show(): só ele torna o resto inerte.\n    this.dialog()?.nativeElement.showModal();\n  }\n\n  protected aoFechar(): void {\n    // A única parte que o navegador não faz sozinho.\n    this.abridor()?.nativeElement.focus();\n  }\n\n}",
          "variant": "correct"
        },
        {
          "kind": "paragraph",
          "text": "Leitura esperada, ao abrir:"
        },
        {
          "kind": "code",
          "code": "Excluir conta, diálogo\nEsta ação não pode ser desfeita.\nCancelar, botão",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "show() e showModal() não são a mesma coisa"
        },
        {
          "kind": "table",
          "headers": [
            "",
            "show()",
            "showModal()"
          ],
          "rows": [
            [
              "Conteúdo de trás fica inerte",
              "Não",
              "Sim"
            ],
            [
              "ESC fecha",
              "Não",
              "Sim"
            ],
            [
              "Tab preso dentro",
              "Não",
              "Sim"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Usar show() num modal é o erro silencioso mais comum aqui: visualmente idêntico, e o leitor de tela continua lendo a página inteira por trás."
        },
        {
          "kind": "code",
          "code": "<div class=\"overlay\" *ngIf=\"aberto\">\n  <div class=\"modal\">\n    <h2>Excluir conta</h2>\n  </div>\n</div>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Sem role, sem aria-modal, sem foco, sem ESC, sem retorno de foco. O Tab sai pela parte de trás e a pessoa se perde dentro da página que deveria estar bloqueada."
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Diferenças que mudam o que você escreve"
        },
        {
          "kind": "table",
          "headers": [
            "Situação",
            "TalkBack",
            "VoiceOver"
          ],
          "rows": [
            [
              "aria-describedby",
              "Lê depois de uma pausa.",
              "Às vezes só com o rotor em \"dicas\"."
            ],
            [
              "Dois aria-live na mesma tela",
              "Costuma enfileirar.",
              "Costuma descartar o primeiro."
            ],
            [
              "role=\"alert\" ao inserir no DOM",
              "Frequentemente ignora.",
              "Frequentemente ignora."
            ],
            [
              "Posição no conjunto",
              "Anuncia \"1 de 5\" sozinho em listas.",
              "Exige aria-setsize e aria-posinset."
            ],
            [
              "Foco após remover elemento",
              "Vai para o próximo irmão.",
              "Costuma cair no topo."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "A regra que sobrevive aos dois"
        },
        {
          "kind": "paragraph",
          "text": "Não escreva para um leitor de tela específico. Escreva HTML semântico correto e ARIA mínima — é o que os dois interpretam igual. Toda vez que algo funciona só em um deles, quase sempre é sinal de que a solução está apoiada num comportamento específico, e não na especificação."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Testar em um não cobre o outro"
        },
        {
          "kind": "paragraph",
          "text": "São motores diferentes, com heurísticas diferentes, em navegadores diferentes. A combinação que importa em produção: TalkBack com Chrome no Android, VoiceOver com Safari no iOS. Testar VoiceOver no Mac com Chrome não representa nem um nem outro."
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Como ligar"
        },
        {
          "kind": "table",
          "headers": [
            "Leitor",
            "Onde"
          ],
          "rows": [
            [
              "TalkBack",
              "Android: Configurações, Acessibilidade, TalkBack. Atalho: segurar os dois botões de volume por 3 segundos."
            ],
            [
              "VoiceOver",
              "iPhone: Ajustes, Acessibilidade, VoiceOver. Atalho: três cliques no botão lateral."
            ],
            [
              "VoiceOver",
              "Mac: Command + F5."
            ],
            [
              "NVDA",
              "Windows: gratuito, nvaccess.org. Insert + seta para baixo lê tudo."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Os gestos que resolvem 90% do teste"
        },
        {
          "kind": "table",
          "headers": [
            "O que fazer",
            "TalkBack",
            "VoiceOver"
          ],
          "rows": [
            [
              "Próximo elemento",
              "Deslizar para a direita",
              "Deslizar para a direita"
            ],
            [
              "Anterior",
              "Deslizar para a esquerda",
              "Deslizar para a esquerda"
            ],
            [
              "Acionar",
              "Toque duplo",
              "Toque duplo"
            ],
            [
              "Ler tudo a partir daqui",
              "Deslizar para baixo e para a direita",
              "Deslizar com dois dedos para baixo"
            ],
            [
              "Trocar o modo de navegação",
              "Deslizar para cima e para a direita",
              "Girar dois dedos (rotor)"
            ],
            [
              "Voltar",
              "Deslizar para baixo e para a esquerda",
              "Riscar dois dedos em Z"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O modo por títulos é o mais revelador"
        },
        {
          "kind": "paragraph",
          "text": "Antes de percorrer elemento por elemento, mude a navegação para \"títulos\" e desça a página. Em 20 segundos você descobre se a estrutura faz sentido — e é assim que quem usa leitor de tela de verdade se orienta numa página nova. Ninguém percorre 200 elementos um a um."
        },
        {
          "kind": "paragraph",
          "text": "Se ao navegar por títulos você não consegue dizer do que a página trata, a estrutura está errada, independente do que o axe disser."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O teste que vale por todos"
        },
        {
          "kind": "paragraph",
          "text": "Desligue o monitor, ou feche os olhos, e tente concluir a jornada inteira só com o som. É desconfortável e é exatamente o ponto: essa é a experiência que você está entregando."
        },
        {
          "kind": "paragraph",
          "text": "Se você, que escreveu a tela, não consegue concluir — ninguém consegue."
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Como cada um soa para quem usa leitor de tela"
        },
        {
          "kind": "paragraph",
          "text": "A lista acima é técnica. Esta é a mesma lista traduzida para o que a pessoa de fato ouve — que é o que decide se ela conclui a tarefa ou desiste."
        },
        {
          "kind": "table",
          "headers": [
            "Bug",
            "O que a pessoa ouve",
            "O que ela faz"
          ],
          "rows": [
            [
              "Botão sem nome.",
              "\"botão\"",
              "Aciona no escuro ou desiste."
            ],
            [
              "Ícone sem label.",
              "\"delete, botão\"",
              "Lê o nome da fonte, não a ação."
            ],
            [
              "Modal sem foco.",
              "Silêncio; continua na página de trás.",
              "Não sabe que algo abriu."
            ],
            [
              "Erro não anunciado.",
              "Nada. O envio parece ter funcionado.",
              "Espera uma confirmação que não vem."
            ],
            [
              "Toast não anunciado.",
              "Nada.",
              "Repete a ação, achando que falhou."
            ],
            [
              "Foco perdido após navegar.",
              "Silêncio; foco no começo do documento.",
              "Percorre o menu inteiro de novo."
            ],
            [
              "Accordion sem aria-expanded.",
              "\"Detalhes, botão\" — sempre igual.",
              "Não sabe se abriu."
            ],
            [
              "Tabs sem aria-selected.",
              "\"Extrato, aba\" — sem dizer qual está ativa.",
              "Perde a referência do contexto."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Como achar os quatro primeiros em cinco minutos"
        },
        {
          "kind": "paragraph",
          "text": "Sem instalar nada, no console do navegador:"
        },
        {
          "kind": "code",
          "code": "// Botões e links sem nome acessível\ndocument.querySelectorAll('button, a').forEach((el) => {\n  const nome = (\n    el.getAttribute('aria-label') ??\n    el.textContent ??\n    ''\n  ).trim();\n  if (!nome) console.warn('sem nome:', el);\n});\n\n// Campos sem label associado\ndocument.querySelectorAll('input, select, textarea').forEach((el) => {\n  const temLabel =\n    el.labels?.length ||\n    el.getAttribute('aria-label') ||\n    el.getAttribute('aria-labelledby');\n  if (!temLabel) console.warn('sem label:', el);\n});\n\n// tabindex positivo\ndocument.querySelectorAll('[tabindex]').forEach((el) => {\n  if (Number(el.getAttribute('tabindex')) > 0) console.warn('tabindex+:', el);\n});",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Isso não substitui axe nem teste real — pega três classes de erro das mais comuns, e roda em qualquer página em segundos."
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
