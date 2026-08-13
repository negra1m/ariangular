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
        },
        {
          "kind": "paragraph",
          "text": "Quando há cabeçalho na coluna e na linha, o scope é o que permite ao leitor de tela dizer \"Março, Energia, R$ 210\" em vez de só \"R$ 210\"."
        },
        {
          "kind": "code",
          "code": "<table>\n\n  <caption>Despesas por mês, em reais</caption>\n\n  <thead>\n    <tr>\n      <td></td>\n      <th scope=\"col\">Janeiro</th>\n      <th scope=\"col\">Fevereiro</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr>\n      <th scope=\"row\">Energia</th>\n      <td>210,00</td>\n      <td>198,00</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Água</th>\n      <td>87,00</td>\n      <td>91,00</td>\n    </tr>\n  </tbody>\n\n</table>",
          "variant": "correct"
        },
        {
          "kind": "paragraph",
          "text": "Leitura esperada, na célula de 198:"
        },
        {
          "kind": "code",
          "code": "Fevereiro, Energia, 198,00",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Tabela larga precisa de rolagem alcançável"
        },
        {
          "kind": "paragraph",
          "text": "Contêiner com rolagem horizontal e sem tabindex é uma armadilha: dá para ver que há mais coluna, e não dá para chegar nela sem mouse."
        },
        {
          "kind": "code",
          "code": "<div class=\"rolagem\" tabindex=\"0\" role=\"region\"\n  aria-label=\"Tabela: despesas por mês\">\n  <table><!-- ... --></table>\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": ".rolagem { overflow-x: auto; }",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<div class=\"tabela\">\n  <div class=\"linha\">\n    <div class=\"celula\">Energia</div>\n    <div class=\"celula\">210,00</div>\n  </div>\n</div>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Tabela montada com div perde a relação entre célula e cabeçalho. O leitor de tela lê uma sequência de números soltos, sem dizer a que mês ou categoria cada um pertence, e os comandos de navegação por tabela deixam de funcionar."
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
        },
        {
          "kind": "code",
          "code": "<section\n  class=\"carrossel\"\n  role=\"region\"\n  aria-roledescription=\"carrossel\"\n  aria-label=\"Ofertas da semana\"\n>\n\n  <!-- O botão de pausa vem PRIMEIRO no DOM.\n       Quem precisa parar o movimento tem que alcançá-lo\n       antes de percorrer os slides. -->\n  <button type=\"button\" (click)=\"alternarRotacao()\"\n    [attr.aria-label]=\"rodando() ? 'Pausar rotação' : 'Retomar rotação'\">\n    <span aria-hidden=\"true\">{{ rodando() ? '⏸' : '▶' }}</span>\n  </button>\n\n  <!-- aria-live só enquanto está pausado: com a rotação\n       automática ligada, cada troca viraria um anúncio. -->\n  <div class=\"slides\" [attr.aria-live]=\"rodando() ? 'off' : 'polite'\">\n\n    @for (oferta of ofertas(); track oferta.id; let i = $index) {\n      <div\n        class=\"slide\"\n        role=\"group\"\n        aria-roledescription=\"slide\"\n        [attr.aria-label]=\"(i + 1) + ' de ' + ofertas().length\"\n        [hidden]=\"i !== atual()\"\n      >\n        <h3>{{ oferta.titulo }}</h3>\n        <p>{{ oferta.texto }}</p>\n      </div>\n    }\n\n  </div>\n\n  <button type=\"button\" (click)=\"anterior()\" aria-label=\"Oferta anterior\">\n    <span aria-hidden=\"true\">←</span>\n  </button>\n\n  <button type=\"button\" (click)=\"proximo()\" aria-label=\"Próxima oferta\">\n    <span aria-hidden=\"true\">→</span>\n  </button>\n\n</section>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Ofertas da semana, carrossel\nPausar rotação, botão\n1 de 4, slide"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Pausar não é opcional"
        },
        {
          "kind": "paragraph",
          "text": "Conteúdo que se move sozinho por mais de 5 segundos precisa ter como parar. É critério de nível A — o mais básico da WCAG (2.2.2). Carrossel que gira sem botão de pausa é falha, não questão de gosto."
        },
        {
          "kind": "paragraph",
          "text": "O motivo não é só leitor de tela: quem tem dislexia ou déficit de atenção perde a linha quando algo se mexe ao lado do texto que está lendo."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Respeite quem pediu menos movimento"
        },
        {
          "kind": "code",
          "code": "@media (prefers-reduced-motion: reduce) {\n  .slides { scroll-behavior: auto; }\n}",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "// E também no TypeScript, para não iniciar a rotação:\nconst menosMovimento = matchMedia('(prefers-reduced-motion: reduce)').matches;\nif (!menosMovimento) this.iniciarRotacao();",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<div class=\"carrossel\">\n  <div class=\"slide\" *ngFor=\"let o of ofertas\">{{ o.titulo }}</div>\n  <div class=\"seta\" (click)=\"proximo()\">→</div>\n</div>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Setas em div não são alcançáveis por teclado, os slides escondidos continuam no DOM sendo lidos, não há pausa, e nada indica quantos itens existem."
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O problema que ninguém vê"
        },
        {
          "kind": "paragraph",
          "text": "Rolagem infinita empurra o rodapé para longe a cada carga. Quem navega por teclado nunca chega nos links do rodapé — eles fogem. E quem usa leitor de tela não tem como saber quantos itens existem, nem se o carregamento terminou."
        },
        {
          "kind": "paragraph",
          "text": "A solução mais acessível para rolagem infinita é não usar rolagem infinita. Um botão dá controle, deixa o rodapé alcançável, e resolve o anúncio de graça."
        },
        {
          "kind": "code",
          "code": "<ul>\n  @for (item of itens(); track item.id) {\n    <li>{{ item.titulo }}</li>\n  }\n</ul>\n\n<p role=\"status\">{{ itens().length }} de {{ total() }} resultados</p>\n\n@if (temMais()) {\n  <button type=\"button\" (click)=\"carregarMais()\" [disabled]=\"carregando()\">\n    {{ carregando() ? 'Carregando…' : 'Carregar mais 20' }}\n  </button>\n}",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Carregar mais 20, botão\n40 de 137 resultados"
        },
        {
          "kind": "code",
          "code": "carregarMais(): void {\n  const antes = this.itens().length;\n\n  this.servico.pagina(this.pagina++).subscribe((novos) => {\n    this.itens.update((atual) => [...atual, ...novos]);\n\n    // Anuncia o que chegou, sem mover o foco.\n    this.announcer.announce(\n      `${novos.length} itens carregados. ${this.itens().length} de ${this.total()}.`,\n      'polite',\n    );\n\n    // Foco no primeiro item novo, para quem usa teclado\n    // continuar de onde parou em vez de voltar ao topo.\n    queueMicrotask(() => this.itemRefs()[antes]?.nativeElement.focus());\n  });\n}",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<div (scroll)=\"carregarMais()\">\n  <div *ngFor=\"let item of itens\">{{ item.titulo }}</div>\n</div>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Carregar só no evento de rolagem exclui quem navega por teclado: sem rolar com o mouse, o carregamento nunca dispara e a lista termina no vigésimo item para sempre."
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
        },
        {
          "kind": "paragraph",
          "text": "O CDK entrega o arrastar. O caminho por teclado é seu."
        },
        {
          "kind": "code",
          "code": "<ul cdkDropList (cdkDropListDropped)=\"soltar($event)\">\n\n  @for (tarefa of tarefas(); track tarefa.id; let i = $index) {\n    <li cdkDrag>\n\n      <span>{{ tarefa.titulo }}</span>\n\n      <!-- A alternativa por teclado: dois botões por item.\n           Simples, previsível e não exige gesto nenhum. -->\n      <button type=\"button\"\n        (click)=\"mover(i, -1)\"\n        [disabled]=\"i === 0\"\n        [attr.aria-label]=\"'Mover ' + tarefa.titulo + ' para cima'\">\n        <span aria-hidden=\"true\">↑</span>\n      </button>\n\n      <button type=\"button\"\n        (click)=\"mover(i, 1)\"\n        [disabled]=\"i === tarefas().length - 1\"\n        [attr.aria-label]=\"'Mover ' + tarefa.titulo + ' para baixo'\">\n        <span aria-hidden=\"true\">↓</span>\n      </button>\n\n    </li>\n  }\n\n</ul>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "mover(de: number, delta: number): void {\n  const para = de + delta;\n  const lista = [...this.tarefas()];\n  const [item] = lista.splice(de, 1);\n  lista.splice(para, 0, item);\n  this.tarefas.set(lista);\n\n  // Sem anúncio, a pessoa não tem como saber que funcionou:\n  // o item mudou de lugar numa lista que ela não vê.\n  this.announcer.announce(\n    `${item.titulo} movido para a posição ${para + 1} de ${lista.length}`,\n    'polite',\n  );\n\n  // O foco tem que seguir o item, não a posição.\n  queueMicrotask(() => this.botoes()[para]?.nativeElement.focus());\n}",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Revisar contrato movido para a posição 2 de 5"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Os dois detalhes que costumam faltar"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "O foco segue o item. Se ficar na posição, a pessoa aperta \"subir\" duas vezes e move dois itens diferentes. Parece que a interface está quebrada.",
            "Anuncie a posição, não só a ação. \"Movido para cima\" não diz onde parou. \"Posição 2 de 5\" diz."
          ]
        },
        {
          "kind": "code",
          "code": "<div cdkDrag>{{ tarefa.titulo }}</div>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Só arrastar exclui quem usa teclado, leitor de tela, ou tem limitação motora que dificulta o gesto de segurar e mover. É uma das falhas mais comuns em quadro de tarefas (WCAG 2.1.1)."
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
