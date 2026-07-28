// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const angular: Part = {
  "id": "angular",
  "order": 5,
  "numeral": "05",
  "title": "Angular, Angular Material e Angular CDK A11y",
  "summary": "Esta seção cobre as práticas específicas para Angular, Angular Material e Angular CDK.",
  "sections": [
    {
      "id": "angular-e-acessivel-por-padrao",
      "partId": "angular",
      "order": 1,
      "title": "Angular é acessível por padrão?",
      "summary": "Angular renderiza o HTML que você escreve. Se o HTML for acessível, a aplicação tende a ser acessível. Se o HTML for ruim, Angular não corrige isso.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Não."
        },
        {
          "kind": "paragraph",
          "text": "Angular renderiza o HTML que você escreve. Se o HTML for acessível, a aplicação tende a ser acessível. Se o HTML for ruim, Angular não corrige isso."
        }
      ]
    },
    {
      "id": "regra-principal-para-angular",
      "partId": "angular",
      "order": 2,
      "title": "Regra Principal para Angular",
      "summary": "Regra Principal para Angular — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "HTML semântico primeiro.\nARIA depois.",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<button (click)=\"salvar()\">\n\nSalvar\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<div (click)=\"salvar()\">\n\nSalvar\n\n</div>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "binding-de-aria",
      "partId": "angular",
      "order": 3,
      "title": "Binding de ARIA",
      "summary": "Binding de ARIA — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Quando o valor é dinâmico:"
        },
        {
          "kind": "code",
          "code": "<button\n[attr.aria-label]=\"descricao\">\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Accordion"
        },
        {
          "kind": "code",
          "code": "<button\n[attr.aria-expanded]=\"aberto\">\n\nDetalhes\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "ngif-e-foco",
      "partId": "angular",
      "order": 4,
      "title": "NgIf e Foco",
      "summary": "Quando o elemento some do DOM, o foco pode ser perdido.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Um dos problemas mais comuns."
        },
        {
          "kind": "code",
          "code": "<div *ngIf=\"mostrar\">\n\nConteúdo\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Quando o elemento some do DOM, o foco pode ser perdido."
        }
      ]
    },
    {
      "id": "ngfor-e-acessibilidade",
      "partId": "angular",
      "order": 5,
      "title": "NgFor e Acessibilidade",
      "summary": "NgFor e Acessibilidade — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<li *ngFor=\"let item of itens\">\n\n{{ item.nome }}\n\n</li>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Prefira estruturas semânticas."
        },
        {
          "kind": "code",
          "code": "<ul>\n\n<li *ngFor=\"let item of itens\">\n\n...\n\n</li>\n\n</ul>",
          "variant": "correct"
        }
      ]
    },
    {
      "id": "router-angular",
      "partId": "angular",
      "order": 6,
      "title": "Router Angular",
      "summary": "Aplicações SPA não recarregam a página.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Aplicações SPA não recarregam a página."
        },
        {
          "kind": "paragraph",
          "text": "O leitor de tela não percebe automaticamente que houve mudança de tela."
        }
      ]
    },
    {
      "id": "foco-apos-navegacao",
      "partId": "angular",
      "order": 7,
      "title": "Foco Após Navegação",
      "summary": "Foco Após Navegação: Mover foco para o H1.; Ou para o conteúdo principal.",
      "blocks": [
        {
          "kind": "code",
          "code": "this.router.events\n.subscribe(...)",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Após a navegação:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Mover foco para o H1.",
            "Ou para o conteúdo principal."
          ]
        }
      ]
    },
    {
      "id": "exemplo-de-destino-de-foco",
      "partId": "angular",
      "order": 8,
      "title": "Exemplo de Destino de Foco",
      "summary": "Exemplo de Destino de Foco — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<h1\ntabindex=\"-1\"\n#titulo>\n\nConta Corrente\n\n</h1>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "this.titulo.nativeElement.focus();",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "anunciar-mudancas-de-tela",
      "partId": "angular",
      "order": 9,
      "title": "Anunciar Mudanças de Tela",
      "summary": "Em aplicações Angular é comum anunciar o nome da tela.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Em aplicações Angular é comum anunciar o nome da tela."
        },
        {
          "kind": "code",
          "code": "Extrato carregado\n\nTransferência carregada\n\nPagamento carregado",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "angular-cdk-accessibility",
      "partId": "angular",
      "order": 10,
      "title": "Angular CDK Accessibility",
      "summary": "O pacote mais importante para acessibilidade na stack Angular.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "O pacote mais importante para acessibilidade na stack Angular."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "LiveAnnouncer",
            "FocusMonitor",
            "FocusTrap",
            "FocusKeyManager",
            "InteractivityChecker"
          ]
        }
      ]
    },
    {
      "id": "liveannouncer",
      "partId": "angular",
      "order": 11,
      "title": "LiveAnnouncer",
      "summary": "Permite criar anúncios para leitores de tela.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Permite criar anúncios para leitores de tela."
        },
        {
          "kind": "code",
          "code": "constructor(\nprivate live: LiveAnnouncer\n) {}",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "this.live.announce(\n'Pagamento realizado com sucesso'\n);",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "quando-usar-liveannouncer",
      "partId": "angular",
      "order": 12,
      "title": "Quando usar LiveAnnouncer",
      "summary": "Quando usar LiveAnnouncer: Pagamento concluído.; Filtro aplicado.; Busca concluída.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Pagamento concluído.",
            "Filtro aplicado.",
            "Busca concluída.",
            "Upload concluído.",
            "Erro importante."
          ]
        }
      ]
    },
    {
      "id": "cdktrapfocus",
      "partId": "angular",
      "order": 13,
      "title": "cdkTrapFocus",
      "summary": "cdkTrapFocus: Modal.; Bottom Sheet.; Dialog.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Prende o foco em uma região."
        },
        {
          "kind": "paragraph",
          "text": "Ideal para:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Modal.",
            "Bottom Sheet.",
            "Dialog."
          ]
        }
      ]
    },
    {
      "id": "exemplo-cdktrapfocus",
      "partId": "angular",
      "order": 14,
      "title": "Exemplo cdkTrapFocus",
      "summary": "Exemplo cdkTrapFocus — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div cdkTrapFocus>\n\n...\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "focusmonitor",
      "partId": "angular",
      "order": 15,
      "title": "FocusMonitor",
      "summary": "Identifica como o foco chegou até o elemento.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Identifica como o foco chegou até o elemento."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Mouse.",
            "Teclado.",
            "Touch.",
            "Programático."
          ]
        }
      ]
    },
    {
      "id": "focuskeymanager",
      "partId": "angular",
      "order": 16,
      "title": "FocusKeyManager",
      "summary": "FocusKeyManager: Tabs.; Menus.; Listbox.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Gerencia navegação por setas."
        },
        {
          "kind": "paragraph",
          "text": "Muito utilizado em:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Tabs.",
            "Menus.",
            "Listbox.",
            "Combobox."
          ]
        }
      ]
    },
    {
      "id": "angular-material",
      "partId": "angular",
      "order": 17,
      "title": "Angular Material",
      "summary": "O Material já possui boa parte da acessibilidade implementada.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "O Material já possui boa parte da acessibilidade implementada."
        },
        {
          "kind": "paragraph",
          "text": "Mesmo assim, deve ser testado."
        }
      ]
    },
    {
      "id": "matdialog",
      "partId": "angular",
      "order": 18,
      "title": "MatDialog",
      "summary": "MatDialog: Role dialog.; Gerenciamento de foco.; ESC.",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "Benefícios"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Role dialog.",
            "Gerenciamento de foco.",
            "ESC.",
            "Backdrop."
          ]
        }
      ]
    },
    {
      "id": "checklist-matdialog",
      "partId": "angular",
      "order": 19,
      "title": "Checklist MatDialog",
      "summary": "Checklist MatDialog: Tem título?; Recebe foco?; Retorna foco?",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Tem título?",
            "Recebe foco?",
            "Retorna foco?",
            "Possui botão fechar?"
          ]
        }
      ]
    },
    {
      "id": "mattabs",
      "partId": "angular",
      "order": 20,
      "title": "MatTabs",
      "summary": "Implementa a estrutura de tabs.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Implementa a estrutura de tabs."
        },
        {
          "kind": "paragraph",
          "text": "Mesmo assim valide:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Setas funcionam.",
            "TalkBack anuncia corretamente.",
            "VoiceOver anuncia corretamente."
          ]
        }
      ]
    },
    {
      "id": "matmenu",
      "partId": "angular",
      "order": 21,
      "title": "MatMenu",
      "summary": "Preferível criar menus usando MatMenu ao invés de implementação caseira.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Preferível criar menus usando MatMenu ao invés de implementação caseira."
        }
      ]
    },
    {
      "id": "matselect",
      "partId": "angular",
      "order": 22,
      "title": "MatSelect",
      "summary": "Componente mais propenso a bugs de acessibilidade.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Componente mais propenso a bugs de acessibilidade."
        },
        {
          "kind": "paragraph",
          "text": "Sempre validar:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Abertura.",
            "Fechamento.",
            "Leitura da opção.",
            "Estado selecionado."
          ]
        }
      ]
    },
    {
      "id": "matexpansionpanel",
      "partId": "angular",
      "order": 23,
      "title": "MatExpansionPanel",
      "summary": "MatExpansionPanel: aria-expanded.; Foco.; Anúncio do estado.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Equivalente ao Accordion."
        },
        {
          "kind": "paragraph",
          "text": "Verificar:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "aria-expanded.",
            "Foco.",
            "Anúncio do estado."
          ]
        }
      ]
    },
    {
      "id": "mattable",
      "partId": "angular",
      "order": 24,
      "title": "MatTable",
      "summary": "Não assumir que toda tabela Material é automaticamente acessível.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Não assumir que toda tabela Material é automaticamente acessível."
        },
        {
          "kind": "paragraph",
          "text": "Validar:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "caption.",
            "headers.",
            "sort.",
            "foco."
          ]
        }
      ]
    },
    {
      "id": "overlay-components",
      "partId": "angular",
      "order": 25,
      "title": "Overlay Components",
      "summary": "Todo componente que abre sobre a tela merece atenção extra.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Todo componente que abre sobre a tela merece atenção extra."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Modal.",
            "Popover.",
            "Tooltip.",
            "Select.",
            "Menu.",
            "Datepicker."
          ]
        }
      ]
    },
    {
      "id": "datepicker",
      "partId": "angular",
      "order": 26,
      "title": "Datepicker",
      "summary": "Datepicker: Navegação por teclado.; Leitura do dia.; Leitura do mês.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Validar:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Navegação por teclado.",
            "Leitura do dia.",
            "Leitura do mês.",
            "Leitura do ano.",
            "Seleção correta."
          ]
        }
      ]
    },
    {
      "id": "loading-angular",
      "partId": "angular",
      "order": 27,
      "title": "Loading Angular",
      "summary": "Mudanças de estado devem ser anunciadas.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Mudanças de estado devem ser anunciadas."
        },
        {
          "kind": "code",
          "code": "aria-busy=\"true\"",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Ou:"
        },
        {
          "kind": "code",
          "code": "this.live.announce(\n'Carregamento concluído'\n);",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "lazy-loading",
      "partId": "angular",
      "order": 28,
      "title": "Lazy Loading",
      "summary": "Quando conteúdo aparece após carregamento assíncrono, o foco e o anúncio devem ser avaliados.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Quando conteúdo aparece após carregamento assíncrono, o foco e o anúncio devem ser avaliados."
        }
      ]
    },
    {
      "id": "signals-e-acessibilidade",
      "partId": "angular",
      "order": 29,
      "title": "Signals e Acessibilidade",
      "summary": "Signals atualizam a UI automaticamente.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Signals atualizam a UI automaticamente."
        },
        {
          "kind": "paragraph",
          "text": "Mas leitores de tela não são notificados automaticamente."
        },
        {
          "kind": "paragraph",
          "text": "Use:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "aria-live",
            "LiveAnnouncer"
          ]
        }
      ]
    },
    {
      "id": "standalone-components",
      "partId": "angular",
      "order": 30,
      "title": "Standalone Components",
      "summary": "Não possuem diferenças específicas de acessibilidade.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Não possuem diferenças específicas de acessibilidade."
        },
        {
          "kind": "paragraph",
          "text": "As mesmas regras continuam válidas."
        }
      ]
    },
    {
      "id": "pipes",
      "partId": "angular",
      "order": 31,
      "title": "Pipes",
      "summary": "Cuidado com formatações que prejudicam a leitura.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Cuidado com formatações que prejudicam a leitura."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Exemplo"
        },
        {
          "kind": "code",
          "code": "R$ 1.500,00",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Validar como o leitor anuncia."
        }
      ]
    },
    {
      "id": "custom-components",
      "partId": "angular",
      "order": 32,
      "title": "Custom Components",
      "summary": "A maior origem de bugs em Angular.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "A maior origem de bugs em Angular."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Botões customizados.",
            "Select customizado.",
            "Dropdown customizado.",
            "Stepper customizado.",
            "Menu customizado."
          ]
        }
      ]
    },
    {
      "id": "regra-para-custom-components",
      "partId": "angular",
      "order": 33,
      "title": "Regra para Custom Components",
      "summary": "Regra para Custom Components: Existe componente nativo?; Existe componente Material?; Existe diretiva no Angular Aria?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Sempre perguntar:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Existe componente nativo?",
            "Existe componente Material?",
            "Existe diretiva no Angular Aria?",
            "Preciso mesmo criar do zero?"
          ]
        }
      ]
    },
    {
      "id": "angular-aria",
      "partId": "angular",
      "order": 34,
      "title": "Angular Aria",
      "summary": "Em novembro de 2025, com o Angular v22, o time Angular lançou o pacote oficial Angular Aria.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Em novembro de 2025, com o Angular v22, o time Angular lançou o pacote oficial Angular Aria."
        },
        {
          "kind": "code",
          "code": "npm install @angular/aria",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "São diretivas headless que implementam os padrões da WAI-ARIA Authoring Practices. Elas cuidam de navegação por teclado, atributos ARIA, gerenciamento de foco e suporte a leitor de tela. Você fornece o HTML e o estilo."
        },
        {
          "kind": "callout",
          "tone": "success",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "Este é o lançamento mais relevante para acessibilidade na história do Angular. Combobox, listbox, menu e tree são os componentes que mais geram bug de acessibilidade quando feitos à mão — e agora existe uma implementação oficial, mantida pelo time do framework, seguindo a especificação."
            }
          ]
        },
        {
          "kind": "paragraph",
          "text": "Antes dele, a resposta para \"preciso de um combobox acessível\" era \"a implementação é complexa, evite fazer à mão\" — sem dizer o que fazer no lugar. Agora tem resposta."
        }
      ]
    },
    {
      "id": "padroes-do-angular-aria",
      "partId": "angular",
      "order": 35,
      "title": "Padrões do Angular Aria",
      "summary": "Compare com a lista de componentes que mais geram bug de acessibilidade em Angular. É quase a mesma lista.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "São treze padrões disponíveis."
        },
        {
          "kind": "table",
          "headers": [
            "Diretiva",
            "Uso"
          ],
          "rows": [
            [
              "ngCombobox",
              "Campo de texto coordenado com um popup."
            ],
            [
              "ngAutocomplete",
              "Campo com sugestões filtradas."
            ],
            [
              "ngListbox",
              "Lista de opções, seleção única ou múltipla."
            ],
            [
              "ngSelect",
              "Dropdown de seleção única."
            ],
            [
              "ngMultiselect",
              "Dropdown de seleção múltipla."
            ],
            [
              "ngMenu",
              "Menu com submenus."
            ],
            [
              "ngMenubar",
              "Barra de navegação horizontal."
            ],
            [
              "ngToolbar",
              "Grupo de controles."
            ],
            [
              "ngTabs",
              "Abas."
            ],
            [
              "ngAccordion",
              "Painéis expansíveis."
            ],
            [
              "ngTree",
              "Lista hierárquica com expandir e recolher."
            ],
            [
              "ngGrid",
              "Dados em duas dimensões com navegação por célula."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Compare com a lista de componentes que mais geram bug de acessibilidade em Angular. É quase a mesma lista."
        }
      ]
    },
    {
      "id": "angular-aria-material-ou-cdk",
      "partId": "angular",
      "order": 36,
      "title": "Angular Aria, Material ou CDK?",
      "summary": "Os três convivem e resolvem coisas diferentes.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Os três convivem e resolvem coisas diferentes."
        },
        {
          "kind": "table",
          "headers": [
            "Pacote",
            "Entrega",
            "Quando usar"
          ],
          "rows": [
            [
              "Angular Material",
              "Componente pronto, com estilo.",
              "O visual do Material serve para o produto."
            ],
            [
              "Angular Aria",
              "Comportamento sem estilo.",
              "Design system próprio, mas sem reimplementar teclado e ARIA."
            ],
            [
              "Angular CDK A11y",
              "Utilitários de baixo nível.",
              "LiveAnnouncer, FocusTrap e FocusMonitor em qualquer cenário."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "O CDK A11y continua necessário mesmo usando Angular Aria. Anunciar \"pagamento concluído\" com LiveAnnouncer não é padrão de widget."
        }
      ]
    },
    {
      "id": "o-que-o-angular-aria-nao-resolve",
      "partId": "angular",
      "order": 37,
      "title": "O que o Angular Aria não resolve",
      "summary": "A biblioteca resolve padrões de widget. A maior parte dos bugs de acessibilidade em produção não é widget complexo.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "A biblioteca resolve padrões de widget. A maior parte dos bugs de acessibilidade em produção não é widget complexo."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Div clicável no lugar de botão.",
            "Ícone clicável sem nome acessível.",
            "Input apenas com placeholder.",
            "Erro de formulário não anunciado.",
            "Foco perdido após navegação de rota.",
            "Heading fora de ordem.",
            "Contraste insuficiente.",
            "Imagem sem texto alternativo.",
            "Tabela sem cabeçalho associado."
          ]
        },
        {
          "kind": "callout",
          "tone": "warning",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "Diretiva headless significa que você fornece o HTML e o CSS. Dá para usar o Angular Aria e ainda assim entregar uma tela inacessível: foco invisível, contraste ruim, ordem de DOM diferente da ordem visual."
            }
          ]
        },
        {
          "kind": "paragraph",
          "text": "A biblioteca elimina uma classe de erro. Ela não substitui saber o assunto, nem testar com TalkBack e VoiceOver."
        }
      ]
    },
    {
      "id": "erro-mais-comum-do-time-front",
      "partId": "angular",
      "order": 38,
      "title": "Erro Mais Comum do Time Front",
      "summary": "Erro Mais Comum do Time Front: Role.; Teclado.; Estado.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\n(click)=\"abrir()\">\n\nAbrir\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Visualmente funciona."
        },
        {
          "kind": "paragraph",
          "text": "Mas perde:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Role.",
            "Teclado.",
            "Estado.",
            "Semântica."
          ]
        }
      ]
    },
    {
      "id": "checklist-angular",
      "partId": "angular",
      "order": 39,
      "title": "Checklist Angular",
      "summary": "Checklist Angular: Existe HTML semântico?; Existe nome acessível?; Existe gerenciamento de foco?",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Existe HTML semântico?",
            "Existe nome acessível?",
            "Existe gerenciamento de foco?",
            "Existe anúncio para mudanças importantes?",
            "Router move foco corretamente?",
            "Material foi validado?",
            "Custom Components foram auditados?",
            "Funciona só com teclado?",
            "Funciona com TalkBack?",
            "Funciona com VoiceOver?"
          ]
        }
      ]
    }
  ]
};
