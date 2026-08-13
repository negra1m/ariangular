// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const aria: Part = {
  "id": "aria",
  "order": 2,
  "numeral": "02",
  "title": "ARIA Completo para Angular",
  "summary": "Todos os atributos e roles ARIA que um dev Angular usa no dia a dia, com o que cada um faz o leitor de tela anunciar.",
  "sections": [
    {
      "id": "o-que-e-aria",
      "partId": "aria",
      "order": 1,
      "title": "O que é ARIA?",
      "summary": "ARIA existe para complementar a semântica do HTML, nunca para substituí-la. Se a tag nativa resolve, use a tag nativa.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "ARIA significa:"
        },
        {
          "kind": "code",
          "code": "Accessible Rich Internet Applications",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "ARIA existe para complementar a semântica HTML."
        },
        {
          "kind": "callout",
          "tone": "warning",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "ARIA NÃO substitui HTML semântico."
            }
          ]
        },
        {
          "kind": "code",
          "code": "<button>\nSalvar\n</button>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<div role=\"button\">\nSalvar\n</div>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "regra-de-ouro",
      "partId": "aria",
      "order": 2,
      "title": "Regra de Ouro",
      "summary": "Sem ARIA é melhor que ARIA errada. Se o HTML nativo já resolve, adicionar ARIA só cria espaço para o estado desatualizar.",
      "blocks": [
        {
          "kind": "code",
          "code": "No ARIA is better than bad ARIA.",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Se o HTML nativo resolve, não use ARIA desnecessariamente."
        }
      ]
    },
    {
      "id": "accessible-name-2",
      "partId": "aria",
      "order": 3,
      "title": "Accessible Name",
      "summary": "Todo elemento interativo precisa de nome. Texto interno é a fonte mais simples, e a que menos desatualiza.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Todo elemento interativo deve possuir um nome acessível."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Texto interno"
        },
        {
          "kind": "code",
          "code": "<button>\nContinuar\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Continuar, botão"
        }
      ]
    },
    {
      "id": "aria-label",
      "partId": "aria",
      "order": 4,
      "title": "aria-label",
      "summary": "Define o nome acessível quando não há texto visível — botão só com ícone, ação sem rótulo, elemento customizado.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Atributo",
            "Valor",
            "Uso"
          ],
          "rows": [
            [
              "aria-label",
              "string",
              "Define nome acessível."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Quando usar"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Botão apenas com ícone.",
            "Ações sem texto visível.",
            "Elementos customizados."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Exemplo"
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
      "id": "aria-labelledby",
      "partId": "aria",
      "order": 5,
      "title": "aria-labelledby",
      "summary": "Usa outro elemento da página como nome, referenciando o id. Útil quando o rótulo já existe como texto visível.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Valor",
            "Uso"
          ],
          "rows": [
            [
              "id",
              "Usa outro elemento como nome."
            ]
          ]
        },
        {
          "kind": "code",
          "code": "<h2 id=\"titulo\">\nPagamento\n</h2>\n\n<button\naria-labelledby=\"titulo\">\n\nConfirmar\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-describedby",
      "partId": "aria",
      "order": 6,
      "title": "aria-describedby",
      "summary": "Adiciona uma descrição ao lado do nome. O leitor anuncia o nome primeiro e a descrição depois.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Adiciona descrição complementar."
        },
        {
          "kind": "code",
          "code": "<input\nid=\"cpf\"\naria-describedby=\"ajudaCpf\">\n\n<span id=\"ajudaCpf\">\nDigite apenas números\n</span>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-hidden",
      "partId": "aria",
      "order": 7,
      "title": "aria-hidden",
      "summary": "Esconde o elemento da árvore de acessibilidade. Nunca use em algo focável — o Tab continua chegando, mas nada é anunciado.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Valor",
            "Uso"
          ],
          "rows": [
            [
              "true",
              "Oculta do leitor."
            ],
            [
              "false",
              "Expõe ao leitor."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Imagem decorativa"
        },
        {
          "kind": "code",
          "code": "<img\nsrc=\"ornamento.svg\"\nalt=\"\"\naria-hidden=\"true\">",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-expanded",
      "partId": "aria",
      "order": 8,
      "title": "aria-expanded",
      "summary": "Anuncia se o controle está expandido ou recolhido. Precisa acompanhar o estado real; um valor parado é pior que nenhum.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Indica estado expandido."
        },
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\">\n\nDetalhes\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Detalhes, botão, recolhido"
        }
      ]
    },
    {
      "id": "aria-controls",
      "partId": "aria",
      "order": 9,
      "title": "aria-controls",
      "summary": "Liga um controle ao conteúdo que ele opera, permitindo ao leitor oferecer um atalho direto até lá.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Relaciona um controlador a um conteúdo."
        },
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\"\naria-controls=\"painel1\">\n\nAbrir\n\n</button>\n\n<div id=\"painel1\">\n\nConteúdo\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-current",
      "partId": "aria",
      "order": 10,
      "title": "aria-current",
      "summary": "Marca o item atual de um conjunto: a página atual na navegação, a etapa atual no stepper, o local atual no breadcrumb.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Valor",
            "Uso"
          ],
          "rows": [
            [
              "page",
              "Página atual."
            ],
            [
              "step",
              "Etapa atual."
            ],
            [
              "location",
              "Local atual."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Stepper"
        },
        {
          "kind": "code",
          "code": "<li aria-current=\"step\">\n\nPagamento\n\n</li>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-selected",
      "partId": "aria",
      "order": 11,
      "title": "aria-selected",
      "summary": "Anuncia qual item está selecionado numa lista de abas ou listbox. Sem ele o leitor diz \"aba\" e não diz qual está ativa.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Indica seleção."
        },
        {
          "kind": "code",
          "code": "<button\nrole=\"tab\"\naria-selected=\"true\">\n\nDados\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-checked",
      "partId": "aria",
      "order": 12,
      "title": "aria-checked",
      "summary": "Carrega o estado de um checkbox, radio ou switch customizado. O input nativo já faz isso sozinho.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"checkbox\"\naria-checked=\"true\">\n\nAceito\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Aceito, checkbox, marcado"
        }
      ]
    },
    {
      "id": "aria-pressed",
      "partId": "aria",
      "order": 13,
      "title": "aria-pressed",
      "summary": "Para botões de alternância — favoritar, silenciar, salvar. Diz ao leitor que o botão guarda um estado, não só executa uma ação.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Botões toggle."
        },
        {
          "kind": "code",
          "code": "<button\naria-pressed=\"true\">\n\nFavorito\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-disabled",
      "partId": "aria",
      "order": 14,
      "title": "aria-disabled",
      "summary": "Anuncia o controle como indisponível mantendo ele alcançável por teclado — ao contrário do disabled nativo, que o tira da ordem de foco.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-disabled=\"true\">\n\nContinuar\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Continuar, botão, indisponível"
        }
      ]
    },
    {
      "id": "aria-required",
      "partId": "aria",
      "order": 15,
      "title": "aria-required",
      "summary": "Anuncia que o campo precisa ser preenchido. O required nativo já faz isso; use quando o controle não for um input nativo.",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\naria-required=\"true\">",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Campo obrigatório"
        }
      ]
    },
    {
      "id": "aria-invalid",
      "partId": "aria",
      "order": 16,
      "title": "aria-invalid",
      "summary": "Marca o campo como reprovado na validação, para o estado ser anunciado junto com o nome quando o foco chegar nele.",
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
      "id": "aria-live",
      "partId": "aria",
      "order": 17,
      "title": "aria-live",
      "summary": "Anuncia conteúdo que muda sem recarregar a página — toast, resultado, status. Use polite; assertive interrompe o que está sendo lido.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Valor",
            "Uso"
          ],
          "rows": [
            [
              "off",
              "Não anuncia."
            ],
            [
              "polite",
              "Anuncia quando possível."
            ],
            [
              "assertive",
              "Anuncia imediatamente."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Toast"
        },
        {
          "kind": "code",
          "code": "<div aria-live=\"polite\">\n\nPagamento realizado\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-atomic",
      "partId": "aria",
      "order": 18,
      "title": "aria-atomic",
      "summary": "Controla quanto de uma região viva é relido quando parte dela muda: tudo, ou só o que mudou.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Controla quanto será relido."
        },
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\"\naria-atomic=\"true\">\n\n3 itens selecionados\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-busy",
      "partId": "aria",
      "order": 19,
      "title": "aria-busy",
      "summary": "Avisa a tecnologia assistiva que a região ainda está carregando, para não anunciar um estado pela metade.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Informa carregamento."
        },
        {
          "kind": "code",
          "code": "<div aria-busy=\"true\">\n\nCarregando\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-modal",
      "partId": "aria",
      "order": 20,
      "title": "aria-modal",
      "summary": "Diz ao leitor de tela que tudo atrás do dialog está indisponível. Sem ele, o conteúdo de baixo continua sendo lido.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"dialog\"\naria-modal=\"true\">\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-haspopup",
      "partId": "aria",
      "order": 21,
      "title": "aria-haspopup",
      "summary": "Anuncia que o controle abre um menu, um modal ou uma lista — a pessoa sabe o que esperar antes de acionar.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Valor",
            "Uso"
          ],
          "rows": [
            [
              "menu",
              "Abre menu."
            ],
            [
              "dialog",
              "Abre modal."
            ],
            [
              "listbox",
              "Abre lista."
            ]
          ]
        },
        {
          "kind": "code",
          "code": "<button\naria-haspopup=\"menu\">\n\nAções\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-para-progress-bar",
      "partId": "aria",
      "order": 22,
      "title": "ARIA para Progress Bar",
      "summary": "role=progressbar precisa de valuemin, valuemax e valuenow juntos — senão o leitor anuncia uma barra sem número nenhum.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"progressbar\"\naria-valuemin=\"0\"\naria-valuemax=\"100\"\naria-valuenow=\"50\">\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "50%"
        }
      ]
    },
    {
      "id": "principais-roles",
      "partId": "aria",
      "order": 23,
      "title": "Principais Roles",
      "summary": "As poucas roles ARIA que cobrem quase todo caso real: button, link, dialog, alert, status, tabs, checkbox, switch, menu e listbox.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Role",
            "Uso"
          ],
          "rows": [
            [
              "button",
              "Botão."
            ],
            [
              "link",
              "Link."
            ],
            [
              "dialog",
              "Modal."
            ],
            [
              "alert",
              "Mensagem urgente."
            ],
            [
              "status",
              "Status informativo."
            ],
            [
              "tablist",
              "Container de abas."
            ],
            [
              "tab",
              "Aba."
            ],
            [
              "tabpanel",
              "Conteúdo da aba."
            ],
            [
              "checkbox",
              "Checkbox."
            ],
            [
              "switch",
              "Liga e desliga."
            ],
            [
              "menu",
              "Menu."
            ],
            [
              "menuitem",
              "Item menu."
            ],
            [
              "listbox",
              "Lista selecionável."
            ],
            [
              "option",
              "Opção."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Antes de escrever a role: já existe tag para isso?"
        },
        {
          "kind": "paragraph",
          "text": "Metade da tabela acima você nunca precisa digitar, porque o HTML já entrega — com teclado e estado incluídos."
        },
        {
          "kind": "table",
          "headers": [
            "Em vez de",
            "Use",
            "O que ganha de graça"
          ],
          "rows": [
            [
              "role=\"button\"",
              "<button>",
              "Tab, Enter, Espaço, disabled."
            ],
            [
              "role=\"link\"",
              "<a href>",
              "Tab, Enter, abrir em nova aba."
            ],
            [
              "role=\"checkbox\"",
              "<input type=\"checkbox\">",
              "Espaço, estado sincronizado."
            ],
            [
              "role=\"dialog\"",
              "<dialog>",
              "Foco preso, ESC, inerte atrás."
            ],
            [
              "role=\"progressbar\"",
              "<progress>",
              "Valor anunciado sozinho."
            ],
            [
              "role=\"list\"",
              "<ul> e <li>",
              "\"lista com N itens\"."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "As que não têm equivalente nativo"
        },
        {
          "kind": "paragraph",
          "text": "Estas você escreve mesmo, porque o HTML não tem tag para elas. São também as que exigem mais teclado escrito à mão — e onde o @angular/aria passa a valer mais que a implementação própria."
        },
        {
          "kind": "code",
          "code": "role=\"tablist\"  role=\"tab\"  role=\"tabpanel\"\nrole=\"menu\"     role=\"menuitem\"\nrole=\"listbox\"  role=\"option\"\nrole=\"alert\"    role=\"status\"",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "role muda o que se anuncia, não o que acontece"
        },
        {
          "kind": "code",
          "code": "<!-- ❌ anuncia \"botão\", não aciona com teclado -->\n<div role=\"button\" (click)=\"salvar()\">Salvar</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Este é o mal-entendido mais caro sobre ARIA. A role é uma etiqueta para a tecnologia assistiva. Ela não adiciona comportamento nenhum — e prometer um botão que não funciona é pior do que não prometer nada."
        }
      ]
    },
    {
      "id": "roles-que-voce-quase-nunca-precisara",
      "partId": "aria",
      "order": 24,
      "title": "Roles que você quase nunca precisará",
      "summary": "tree, treegrid, feed, math, meter, log e marquee. Usar sem necessidade real costuma piorar a situação.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "tree",
            "treegrid",
            "feed",
            "math",
            "meter",
            "log",
            "marquee"
          ]
        },
        {
          "kind": "paragraph",
          "text": "Não use sem necessidade real."
        }
      ]
    },
    {
      "id": "angular-attribute-binding",
      "partId": "aria",
      "order": 25,
      "title": "Angular Attribute Binding",
      "summary": "Como ligar ARIA a um valor dinâmico no Angular, para o atributo acompanhar o estado real em vez de congelar no valor inicial.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\n[attr.aria-label]=\"descricao\">\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Também funciona"
        },
        {
          "kind": "code",
          "code": "<button\n[aria-label]=\"descricao\">\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "erros-mais-comuns-com-aria",
      "partId": "aria",
      "order": 26,
      "title": "Erros mais comuns com ARIA",
      "summary": "Role redundante, label desnecessária, aria-hidden em conteúdo real, excesso de região viva e estado que para de acompanhar o DOM.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Adicionar role=\"button\" em botão.",
            "Adicionar aria-label desnecessária.",
            "aria-hidden em conteúdo importante.",
            "aria-live em excesso.",
            "Estado aria-expanded desatualizado.",
            "aria-describedby apontando para id inexistente.",
            "Criar componente customizado sem teclado."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Cada erro, lado a lado"
        },
        {
          "kind": "code",
          "code": "<!-- ❌ role redundante: button já é button -->\n<button role=\"button\">Salvar</button>\n\n<!-- ✅ -->\n<button>Salvar</button>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- ❌ o aria-label SUBSTITUI o texto visível.\n     Quem usa comando de voz diz \"clicar em Salvar\" e nada acontece,\n     porque o nome real virou \"Salvar formulário\". -->\n<button aria-label=\"Salvar formulário\">Salvar</button>\n\n<!-- ✅ o texto visível já é o nome -->\n<button>Salvar</button>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- ❌ some da árvore de acessibilidade, mas o Tab continua chegando:\n     a pessoa foca um botão que não é anunciado -->\n<button aria-hidden=\"true\">Fechar</button>\n\n<!-- ✅ esconda o ícone, nunca o controle -->\n<button aria-label=\"Fechar\">\n  <svg aria-hidden=\"true\"><!-- ... --></svg>\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- ❌ valor fixo: anuncia \"recolhido\" para sempre -->\n<button aria-expanded=\"false\" (click)=\"alternar()\">Detalhes</button>\n\n<!-- ✅ ligado ao estado real -->\n<button [attr.aria-expanded]=\"aberto()\" (click)=\"alternar()\">Detalhes</button>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- ❌ id que não existe: o leitor não lê descrição nenhuma,\n     e não avisa que a referência quebrou -->\n<input aria-describedby=\"dica-cpf\">\n\n<!-- ✅ o id existe no DOM -->\n<input aria-describedby=\"dica-cpf\">\n<p id=\"dica-cpf\">Apenas números</p>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O erro que não aparece em ferramenta nenhuma"
        },
        {
          "kind": "paragraph",
          "text": "Todos acima o axe encontra. Este não:"
        },
        {
          "kind": "code",
          "code": "<div role=\"button\" tabindex=\"0\" (click)=\"salvar()\">Salvar</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Tem role, tem tabindex, tem nome. O axe aprova. E Enter e Espaço não acionam nada, porque role=\"button\" não traz comportamento — só muda o que é anunciado."
        },
        {
          "kind": "paragraph",
          "text": "O resultado é pior que a div nua: o leitor de tela promete um botão que não funciona. Informação falsa com confiança."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "A regra que evita a lista inteira"
        },
        {
          "kind": "paragraph",
          "text": "Antes de escrever qualquer atributo ARIA, pergunte se existe elemento HTML que já faz aquilo. Na maioria esmagadora dos casos existe, e ele vem com teclado, estado e semântica de graça."
        }
      ]
    },
    {
      "id": "checklist-aria",
      "partId": "aria",
      "order": 27,
      "title": "Checklist ARIA",
      "summary": "Seis perguntas para rodar sobre qualquer elemento com ARIA antes de considerá-lo pronto.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Possui nome acessível?",
            "Possui role correta?",
            "Possui estado correto?",
            "Está sincronizado com o DOM?",
            "TalkBack anuncia corretamente?",
            "VoiceOver anuncia corretamente?"
          ]
        }
      ]
    }
  ]
};
