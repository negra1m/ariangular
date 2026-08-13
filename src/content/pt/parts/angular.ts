// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const angular: Part = {
  "id": "angular",
  "order": 5,
  "numeral": "05",
  "title": "Angular, Angular Material e Angular CDK A11y",
  "summary": "Foco após navegação de rota, Angular CDK A11y, o pacote oficial @angular/aria, Material e componentes customizados.",
  "sections": [
    {
      "id": "angular-e-acessivel-por-padrao",
      "partId": "angular",
      "order": 1,
      "title": "Angular é acessível por padrão?",
      "summary": "Não. O Angular renderiza o HTML que você escreve. HTML bom tende a gerar app acessível; HTML ruim o framework não conserta.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Não."
        },
        {
          "kind": "paragraph",
          "text": "Angular renderiza o HTML que você escreve. Se o HTML for acessível, a aplicação tende a ser acessível. Se o HTML for ruim, Angular não corrige isso."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O mesmo componente, dois resultados"
        },
        {
          "kind": "paragraph",
          "text": "Os dois trechos abaixo produzem a mesma tela. Um funciona para todo mundo, o outro só para quem usa mouse e enxerga."
        },
        {
          "kind": "code",
          "code": "<!-- ❌ Angular renderiza exatamente isto, sem reclamar -->\n<div class=\"card\" (click)=\"abrir(conta)\">\n  <div class=\"titulo\">Conta Corrente</div>\n  <div class=\"saldo\">{{ conta.saldo | currency }}</div>\n  <div class=\"acao\" (click)=\"favoritar(conta); $event.stopPropagation()\">\n    <mat-icon>star</mat-icon>\n  </div>\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- ✅ mesma aparência, com o contrato inteiro -->\n<article class=\"card\">\n\n  <h2>\n    <a [routerLink]=\"['/conta', conta.id]\">Conta Corrente</a>\n  </h2>\n\n  <p class=\"saldo\">{{ conta.saldo | currency }}</p>\n\n  <button\n    type=\"button\"\n    class=\"acao\"\n    (click)=\"favoritar(conta)\"\n    [attr.aria-pressed]=\"conta.favorita\"\n    [attr.aria-label]=\"'Favoritar Conta Corrente'\"\n  >\n    <mat-icon aria-hidden=\"true\">star</mat-icon>\n  </button>\n\n</article>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Leitura esperada do segundo:"
        },
        {
          "kind": "code",
          "code": "Conta Corrente, link, título nível 2\nR$ 4.210,00\nFavoritar Conta Corrente, botão de alternância, não pressionado",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O que o framework faz e o que não faz"
        },
        {
          "kind": "table",
          "headers": [
            "O Angular ajuda",
            "O Angular não faz"
          ],
          "rows": [
            [
              "Lint com regras de acessibilidade no template.",
              "Escolher o elemento certo por você."
            ],
            [
              "CDK A11y: foco, anúncio, teclado.",
              "Chamar essas ferramentas sozinho."
            ],
            [
              "Material com boa parte pronta.",
              "Garantir que o resultado funciona."
            ],
            [
              "@angular/aria com padrões da WAI-ARIA.",
              "Impedir uma div clicável."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Ligue o lint hoje"
        },
        {
          "kind": "paragraph",
          "text": "As regras de template do angular-eslint pegam parte da lista de erros comuns antes do commit. Como error, não warn — aviso que não quebra o build é aviso que ninguém lê."
        },
        {
          "kind": "code",
          "code": "// eslint.config.js\n{\n  files: ['**/*.html'],\n  rules: {\n    '@angular-eslint/template/click-events-have-key-events': 'error',\n    '@angular-eslint/template/interactive-supports-focus': 'error',\n    '@angular-eslint/template/label-has-associated-control': 'error',\n    '@angular-eslint/template/alt-text': 'error',\n    '@angular-eslint/template/valid-aria': 'error',\n    '@angular-eslint/template/no-positive-tabindex': 'error',\n  },\n}",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "regra-principal-para-angular",
      "partId": "angular",
      "order": 2,
      "title": "Regra Principal para Angular",
      "summary": "HTML semântico primeiro, ARIA depois. Um button com handler de clique ganha de uma div com handler de clique, sempre.",
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
      "summary": "Use attribute binding quando o valor ARIA for dinâmico, para ele acompanhar o estado real em vez de congelar no inicial.",
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
      "summary": "Um dos bugs mais comuns: quando o elemento sai do DOM, o foco que estava nele some sem substituto.",
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
      "summary": "Repita dentro de uma lista de verdade. Um loop de divs perde o \"lista com N itens\" que orienta quem não vê a tela.",
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
      "summary": "SPA não recarrega a página, então o leitor de tela não percebe que a tela mudou. É a maior lacuna de acessibilidade em app Angular.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Aplicações SPA não recarregam a página."
        },
        {
          "kind": "paragraph",
          "text": "O leitor de tela não percebe automaticamente que houve mudança de tela."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O que se perde quando a página não recarrega"
        },
        {
          "kind": "paragraph",
          "text": "Num carregamento normal, o navegador entrega três coisas de graça. No SPA, as três param de acontecer e viram trabalho seu."
        },
        {
          "kind": "table",
          "headers": [
            "O navegador fazia",
            "No SPA",
            "Quem resolve"
          ],
          "rows": [
            [
              "Reposicionar o foco no topo.",
              "O foco fica no link acionado, que já não existe.",
              "Serviço de foco de rota."
            ],
            [
              "Anunciar o título da nova página.",
              "Silêncio total.",
              "LiveAnnouncer ou TitleStrategy."
            ],
            [
              "Atualizar o título da aba.",
              "Fica o título da primeira tela.",
              "Title ou TitleStrategy."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "O título da aba é o primeiro texto que muitos leitores de tela anunciam ao trocar de contexto. Deixar o mesmo em todas as telas faz a pessoa perder a referência de onde está."
        },
        {
          "kind": "code",
          "code": "export const routes: Routes = [\n  { path: 'extrato', component: Extrato, title: 'Extrato — Banco' },\n  { path: 'pix', component: Pix, title: 'Área Pix — Banco' },\n];",
          "variant": "correct"
        },
        {
          "kind": "paragraph",
          "text": "Para título dinâmico, uma TitleStrategy resolve para toda a aplicação:"
        },
        {
          "kind": "code",
          "code": "@Injectable({ providedIn: 'root' })\nexport class TituloDaRota extends TitleStrategy {\n\n  private readonly title = inject(Title);\n\n  override updateTitle(snapshot: RouterStateSnapshot): void {\n    const titulo = this.buildTitle(snapshot);\n    this.title.setTitle(titulo ? `${titulo} — Banco` : 'Banco');\n  }\n\n}",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "providers: [\n  { provide: TitleStrategy, useClass: TituloDaRota },\n]",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<div (click)=\"router.navigate(['/extrato'])\">Extrato</div>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Navegação por clique em div não é alcançável por Tab, não é anunciada como link, e tira da pessoa o \"abrir em nova aba\". Use routerLink numa âncora de verdade."
        }
      ]
    },
    {
      "id": "foco-apos-navegacao",
      "partId": "angular",
      "order": 7,
      "title": "Foco Após Navegação",
      "summary": "A cada troca de rota, mova o foco para o h1 ou para o conteúdo principal. Senão ele fica onde a página antiga estava.",
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
        },
        {
          "kind": "paragraph",
          "text": "Este é o arquivo completo. Registre uma vez, no componente raiz, e vale para todas as rotas da aplicação."
        },
        {
          "kind": "code",
          "code": "import { Injectable, inject, DOCUMENT } from '@angular/core';\nimport { Router, NavigationEnd } from '@angular/router';\nimport { LiveAnnouncer } from '@angular/cdk/a11y';\nimport { filter } from 'rxjs';\n\n@Injectable({ providedIn: 'root' })\nexport class RouteFocusService {\n\n  private readonly router = inject(Router);\n  private readonly doc = inject(DOCUMENT);\n  private readonly announcer = inject(LiveAnnouncer);\n\n  start(): void {\n    this.router.events\n      .pipe(filter((e) => e instanceof NavigationEnd))\n      .subscribe(() => this.aoTrocarDeTela());\n  }\n\n  private aoTrocarDeTela(): void {\n    // Mudança só de âncora não é troca de tela: mover o foco\n    // aqui tiraria a pessoa do lugar onde ela acabou de chegar.\n    if (this.router.url.includes('#')) return;\n\n    const alvo =\n      this.doc.querySelector<HTMLElement>('main h1') ??\n      this.doc.getElementById('conteudo');\n\n    if (!alvo) return;\n\n    // tabindex -1 permite foco por código sem entrar na ordem do Tab.\n    if (!alvo.hasAttribute('tabindex')) alvo.setAttribute('tabindex', '-1');\n    alvo.focus({ preventScroll: false });\n\n    // O anúncio vem DEPOIS do foco. Na ordem inversa, mover o\n    // foco interrompe a fala e a pessoa ouve a frase pela metade.\n    this.announcer.announce(alvo.textContent?.trim() ?? '', 'polite');\n  }\n\n}",
          "variant": "correct"
        },
        {
          "kind": "paragraph",
          "text": "Ligando no componente raiz:"
        },
        {
          "kind": "code",
          "code": "export class App {\n  constructor() {\n    inject(RouteFocusService).start();\n  }\n}",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Três detalhes que decidem se funciona"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Ignorar mudança de âncora. Clicar num link interno da mesma página dispara evento de rota. Sem a guarda, o foco pula para o topo e a pessoa perde o trecho que pediu para ver.",
            "Anunciar depois de focar. Mover o foco cancela a fala em andamento. Anunciar antes faz o texto ser cortado no meio.",
            "tabindex=\"-1\", nunca 0. Com 0 o título entra na ordem do Tab e vira uma parada extra em toda navegação por teclado, sem fazer nada."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Bônus: aria-current sem escrever código"
        },
        {
          "kind": "paragraph",
          "text": "O RouterLinkActive tem uma entrada dedicada que aplica aria-current no link ativo. Resolve um item inteiro de checklist numa linha."
        },
        {
          "kind": "code",
          "code": "<a\n  routerLink=\"/extrato\"\n  routerLinkActive=\"ativo\"\n  ariaCurrentWhenActive=\"page\"\n>\n  Extrato\n</a>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Extrato, link, página atual"
        }
      ]
    },
    {
      "id": "exemplo-de-destino-de-foco",
      "partId": "angular",
      "order": 8,
      "title": "Exemplo de Destino de Foco",
      "summary": "Dê tabindex=\"-1\" ao heading para ele receber foco programaticamente sem entrar na ordem do Tab.",
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
      "summary": "Anuncie o nome da nova tela depois de navegar. Anuncie depois de mover o foco — na ordem inversa o anúncio é cortado.",
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
      "summary": "O pacote mais importante de acessibilidade da stack Angular: LiveAnnouncer, FocusMonitor, FocusTrap, FocusKeyManager e InteractivityChecker.",
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Instalação"
        },
        {
          "kind": "code",
          "code": "npm install @angular/cdk",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Não precisa do Angular Material. O CDK é independente e não traz estilo nenhum."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O que cada um resolve"
        },
        {
          "kind": "table",
          "headers": [
            "Utilitário",
            "Problema que resolve"
          ],
          "rows": [
            [
              "LiveAnnouncer",
              "Algo mudou e o leitor de tela precisa saber."
            ],
            [
              "cdkTrapFocus",
              "O Tab escapa de dentro do modal."
            ],
            [
              "FocusMonitor",
              "Mostrar o anel de foco só para quem usa teclado."
            ],
            [
              "FocusKeyManager",
              "Setas não navegam dentro do componente."
            ],
            [
              "InteractivityChecker",
              "Descobrir, em código, se um elemento é focável."
            ],
            [
              "cdkAriaLive",
              "Região viva declarativa, direto no template."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Quando o texto já está no template, é mais simples que injetar o LiveAnnouncer."
        },
        {
          "kind": "code",
          "code": "<p cdkAriaLive=\"polite\">{{ resultados().length }} resultados</p>",
          "variant": "correct"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "InteractivityChecker"
        },
        {
          "kind": "paragraph",
          "text": "Útil ao escrever componente que precisa decidir para onde mandar o foco sem chutar."
        },
        {
          "kind": "code",
          "code": "private readonly checker = inject(InteractivityChecker);\n\nfocarPrimeiroDisponivel(container: HTMLElement): void {\n  const alvo = Array.from(container.querySelectorAll<HTMLElement>('*'))\n    .find((el) => this.checker.isFocusable(el));\n\n  alvo?.focus();\n}",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "liveannouncer",
      "partId": "angular",
      "order": 11,
      "title": "LiveAnnouncer",
      "summary": "Anuncia uma mensagem para leitores de tela programaticamente, através de uma região viva gerenciada — sem markup próprio.",
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
        },
        {
          "kind": "code",
          "code": "import { Component, inject } from '@angular/core';\nimport { LiveAnnouncer } from '@angular/cdk/a11y';\n\n@Component({ /* ... */ })\nexport class Checkout {\n\n  private readonly announcer = inject(LiveAnnouncer);\n\n  async concluir(): Promise<void> {\n    await this.pagamento.processar();\n\n    // 'polite' espera uma pausa. 'assertive' interrompe\n    // o que estiver sendo lido — só para o que não pode esperar.\n    this.announcer.announce('Pagamento aprovado', 'polite');\n  }\n\n}",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Pagamento aprovado"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "A armadilha do texto repetido"
        },
        {
          "kind": "paragraph",
          "text": "Chamar duas vezes seguidas com o mesmo texto anuncia uma vez só. A região viva recebe a mesma string, não houve mudança de conteúdo, e o leitor de tela não tem o que reanunciar."
        },
        {
          "kind": "code",
          "code": "// ❌ o segundo anúncio não acontece\nthis.announcer.announce('Item adicionado');\nthis.announcer.announce('Item adicionado');",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "É a causa de \"o anúncio funcionou no primeiro clique e depois parou\" — o código está certo, o comportamento é esperado."
        },
        {
          "kind": "paragraph",
          "text": "A correção é fazer a mensagem carregar o que mudou de verdade. Quase sempre isso deixa o anúncio melhor, não pior:"
        },
        {
          "kind": "code",
          "code": "// ✅ a contagem muda, então o texto muda\nthis.announcer.announce(`Item adicionado. ${this.total()} no carrinho.`);",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Quando não há nada que varie, limpar a região antes força o anúncio."
        },
        {
          "kind": "code",
          "code": "this.announcer.clear();\nthis.announcer.announce('Item adicionado');",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "this.announcer.announce('Salvo', 'assertive');",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "assertive interrompe a leitura em andamento. Numa confirmação de sucesso isso corta a frase que a pessoa estava ouvindo para dizer algo que podia esperar dois segundos. Reserve para erro que bloqueia o fluxo."
        }
      ]
    },
    {
      "id": "quando-usar-liveannouncer",
      "partId": "angular",
      "order": 12,
      "title": "Quando usar LiveAnnouncer",
      "summary": "Para resultados que acontecem sem trocar de tela: pagamento concluído, filtro aplicado, busca terminada, erro importante.",
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "A regra por trás da lista"
        },
        {
          "kind": "paragraph",
          "text": "Anuncie quando o resultado acontece sem trocar de tela e sem mover o foco. Se a pessoa vai perceber pelo foco que chegou em outro lugar, o anúncio vira repetição."
        },
        {
          "kind": "table",
          "headers": [
            "Situação",
            "Anunciar?",
            "Por quê"
          ],
          "rows": [
            [
              "Filtro aplicado, lista atualizou na mesma tela.",
              "Sim",
              "Nada indica que mudou."
            ],
            [
              "Item removido do carrinho.",
              "Sim",
              "O elemento sumiu sem aviso."
            ],
            [
              "Modal abriu e recebeu foco.",
              "Não",
              "O foco já anuncia o dialog."
            ],
            [
              "Campo ficou inválido ao sair dele.",
              "Não",
              "Anuncia ao voltar o foco no campo."
            ],
            [
              "Botão virou \"Salvando…\".",
              "Não",
              "Foco está no botão, muda sozinho."
            ]
          ]
        },
        {
          "kind": "code",
          "code": "aplicarFiltro(termo: string): void {\n  this.resultados.set(this.buscar(termo));\n\n  const n = this.resultados().length;\n\n  this.announcer.announce(\n    n === 0\n      ? 'Nenhum resultado para ' + termo\n      : `${n} ${n === 1 ? 'resultado' : 'resultados'} para ${termo}`,\n    'polite',\n  );\n}",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "12 resultados para transferência"
        },
        {
          "kind": "code",
          "code": "onInput(valor: string): void {\n  this.announcer.announce(`${this.buscar(valor).length} resultados`);\n}",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Num campo de busca, isso dispara um anúncio por caractere digitado. O leitor de tela vira uma metralhadora e a pessoa não consegue nem terminar de escrever. Use debounce de uns 400ms — o tempo de parar de digitar."
        }
      ]
    },
    {
      "id": "cdktrapfocus",
      "partId": "angular",
      "order": 13,
      "title": "cdkTrapFocus",
      "summary": "Mantém o Tab dentro de uma região. Essencial em modal, bottom sheet e dialog, onde o foco escapar para trás quebra tudo.",
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
        },
        {
          "kind": "paragraph",
          "text": "Prender o foco é metade do trabalho. As outras metades são devolver o foco ao fechar e tornar o resto da página inalcançável."
        },
        {
          "kind": "code",
          "code": "@Component({\n  imports: [A11yModule],\n  template: `\n    <button #abridor (click)=\"abrir()\">Filtros</button>\n\n    @if (aberto()) {\n      <div\n        class=\"painel\"\n        role=\"dialog\"\n        aria-modal=\"true\"\n        aria-labelledby=\"filtros-titulo\"\n        cdkTrapFocus\n        [cdkTrapFocusAutoCapture]=\"true\"\n        (keydown.escape)=\"fechar()\"\n      >\n        <h2 id=\"filtros-titulo\">Filtros</h2>\n        <!-- ... -->\n        <button (click)=\"fechar()\">Aplicar</button>\n      </div>\n    }\n  `,\n})\nexport class Filtros {\n\n  private readonly abridor = viewChild<ElementRef<HTMLElement>>('abridor');\n\n  protected readonly aberto = signal(false);\n\n  protected abrir(): void {\n    this.aberto.set(true);\n    // O conteúdo de trás sai da árvore de acessibilidade.\n    // Sem isto, o leitor de tela continua lendo o que está atrás.\n    document.getElementById('conteudo')?.setAttribute('inert', '');\n  }\n\n  protected fechar(): void {\n    this.aberto.set(false);\n    document.getElementById('conteudo')?.removeAttribute('inert');\n\n    // Devolver o foco é obrigatório: sem isso ele cai no body\n    // e a pessoa recomeça a página do zero.\n    this.abridor()?.nativeElement.focus();\n  }\n\n}",
          "variant": "correct"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "cdkTrapFocusAutoCapture"
        },
        {
          "kind": "paragraph",
          "text": "Sem [cdkTrapFocusAutoCapture]=\"true\" a diretiva prende o foco mas não o move para dentro. O Tab passa a circular na região certa — só que a pessoa continua fora dela."
        },
        {
          "kind": "code",
          "code": "<div class=\"modal\" cdkTrapFocus>\n  <h2>Filtros</h2>\n</div>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Falta role=\"dialog\", falta aria-modal, falta rótulo, falta ESC e falta devolver o foco. Prender o Tab sozinho não faz um modal acessível — faz uma armadilha de teclado (WCAG 2.1.2)."
        }
      ]
    },
    {
      "id": "exemplo-cdktrapfocus",
      "partId": "angular",
      "order": 14,
      "title": "Exemplo cdkTrapFocus",
      "summary": "Uma diretiva no contêiner já basta para o Tab ciclar dentro dele.",
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
      "summary": "Diz como o foco chegou — mouse, teclado, toque ou programaticamente. Útil para mostrar o anel de foco só quando ajuda.",
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
        },
        {
          "kind": "code",
          "code": "import { FocusMonitor } from '@angular/cdk/a11y';\n\nexport class Cartao implements AfterViewInit, OnDestroy {\n\n  private readonly monitor = inject(FocusMonitor);\n  private readonly el = inject(ElementRef<HTMLElement>);\n\n  ngAfterViewInit(): void {\n    this.monitor\n      .monitor(this.el, true) // true = observa os filhos também\n      .subscribe((origem) => {\n        // 'keyboard' | 'mouse' | 'touch' | 'program' | null\n        this.el.nativeElement.classList.toggle(\n          'foco-visivel',\n          origem === 'keyboard',\n        );\n      });\n  }\n\n  ngOnDestroy(): void {\n    // Obrigatório: sem isto o monitor vaza a cada componente destruído.\n    this.monitor.stopMonitoring(this.el);\n  }\n\n}",
          "variant": "correct"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Antes de usar: você precisa mesmo disto?"
        },
        {
          "kind": "paragraph",
          "text": "O caso mais comum — mostrar o anel de foco só para quem navega por teclado — o CSS resolve sozinho, sem nenhum código:"
        },
        {
          "kind": "code",
          "code": "button:focus-visible {\n  outline: 3px solid var(--cor-foco);\n  outline-offset: 3px;\n}",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": ":focus-visible é suportado em todos os navegadores atuais e já aplica a heurística de \"chegou por teclado\". O FocusMonitor vale quando a decisão precisa acontecer no TypeScript, não no estilo: registrar analytics, escolher para onde mandar o foco seguinte, mudar comportamento por origem."
        },
        {
          "kind": "code",
          "code": "button:focus {\n  outline: none;\n}",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Remover o contorno sem substituto é o erro mais comum de todos. Para quem navega por teclado, equivale a esconder o cursor do mouse: a pessoa perde o rastro de onde está (WCAG 2.4.7)."
        }
      ]
    },
    {
      "id": "focuskeymanager",
      "partId": "angular",
      "order": 16,
      "title": "FocusKeyManager",
      "summary": "Cuida da navegação por setas dentro de um conjunto de itens — tabs, menus, listbox e combobox.",
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Antes de escrever: já existe pronto?"
        },
        {
          "kind": "paragraph",
          "text": "Desde o Angular v22, @angular/aria entrega listbox, menu, tabs e combobox como diretiva, com teclado e ARIA implementados segundo a especificação. Escrever à mão só se justifica quando nenhum padrão de lá serve."
        },
        {
          "kind": "paragraph",
          "text": "O que vem abaixo é para esse caso — e para entender o que a diretiva faz por baixo."
        },
        {
          "kind": "paragraph",
          "text": "O padrão é sempre o mesmo: consultar as opções, inicializar o manager, encaminhar o teclado para ele."
        },
        {
          "kind": "code",
          "code": "import { Component, viewChildren, AfterViewInit, inject } from '@angular/core';\nimport { FocusKeyManager, FocusableOption } from '@angular/cdk/a11y';\n\n@Component({\n  selector: 'app-lista-opcoes',\n  template: `\n    <!-- O contêiner escuta o teclado. Cada opção é um item. -->\n    <ul role=\"listbox\" tabindex=\"0\" (keydown)=\"aoTeclar($event)\">\n      <li\n        app-opcao\n        role=\"option\"\n        *ngFor=\"let item of itens\"\n        [attr.aria-selected]=\"item === selecionado\"\n      >\n        {{ item.nome }}\n      </li>\n    </ul>\n  `,\n})\nexport class ListaOpcoes implements AfterViewInit {\n\n  // 1. as opções\n  private readonly opcoes = viewChildren(Opcao);\n\n  private manager!: FocusKeyManager<Opcao>;\n\n  ngAfterViewInit(): void {\n    // 2. o manager\n    this.manager = new FocusKeyManager(this.opcoes())\n      .withWrap()        // da última volta para a primeira\n      .withTypeAhead();  // digitar \"sa\" pula para \"Salvador\"\n  }\n\n  // 3. encaminhar o teclado\n  aoTeclar(event: KeyboardEvent): void {\n    this.manager.onKeydown(event);\n  }\n\n}",
          "variant": "correct"
        },
        {
          "kind": "paragraph",
          "text": "Cada opção precisa implementar FocusableOption — é o contrato que o manager usa para mover o foco."
        },
        {
          "kind": "code",
          "code": "@Directive({ selector: '[app-opcao]' })\nexport class Opcao implements FocusableOption {\n\n  private readonly el = inject(ElementRef<HTMLElement>);\n\n  // O manager chama isto. Sem ele, nada se move.\n  focus(): void {\n    this.el.nativeElement.focus();\n  }\n\n  // Usado pelo withTypeAhead.\n  getLabel(): string {\n    return this.el.nativeElement.textContent?.trim() ?? '';\n  }\n\n}",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "FocusKeyManager ou ListKeyManager?"
        },
        {
          "kind": "table",
          "headers": [
            "Classe",
            "O que faz",
            "Quando usar"
          ],
          "rows": [
            [
              "FocusKeyManager",
              "Move o foco de verdade para cada item.",
              "Menu e toolbar, onde o item recebe foco."
            ],
            [
              "ActiveDescendantKeyManager",
              "Marca o item ativo sem tirar o foco do campo.",
              "Combobox, onde o foco fica no input."
            ],
            [
              "ListKeyManager",
              "Base das duas. Só controla o índice ativo.",
              "Quando o comportamento de foco é seu."
            ]
          ]
        },
        {
          "kind": "code",
          "code": "<li role=\"option\" tabindex=\"0\" (click)=\"selecionar(item)\">\n  {{ item.nome }}\n</li>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Dar tabindex=\"0\" a cada opção transforma uma lista de 40 itens em 40 paradas do Tab. O padrão correto é o contêiner receber o Tab uma vez, e as setas moverem dentro dele."
        }
      ]
    },
    {
      "id": "angular-material",
      "partId": "angular",
      "order": 17,
      "title": "Angular Material",
      "summary": "O Material implementa boa parte da acessibilidade — o que não significa que o resultado seja acessível sem testar.",
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
      "summary": "Traz a role dialog, gerenciamento de foco, ESC e backdrop já implementados.",
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
        },
        {
          "kind": "paragraph",
          "text": "O componente do dialog, com título e descrição ligados por id."
        },
        {
          "kind": "code",
          "code": "@Component({\n  template: `\n    <h2 mat-dialog-title id=\"confirmar-titulo\">Confirmar pagamento</h2>\n\n    <mat-dialog-content id=\"confirmar-descricao\">\n      Serão debitados R$ 240,00 da conta corrente.\n    </mat-dialog-content>\n\n    <mat-dialog-actions>\n      <button mat-button mat-dialog-close>Cancelar</button>\n      <button mat-button [mat-dialog-close]=\"true\">Confirmar</button>\n    </mat-dialog-actions>\n  `,\n})\nexport class ConfirmarPagamento {}",
          "variant": "correct"
        },
        {
          "kind": "paragraph",
          "text": "E a abertura, com os dois atributos que o Material não infere sozinho."
        },
        {
          "kind": "code",
          "code": "this.dialog.open(ConfirmarPagamento, {\n  ariaLabelledBy: 'confirmar-titulo',\n  ariaDescribedBy: 'confirmar-descricao',\n  restoreFocus: true,\n});",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O foco que não volta"
        },
        {
          "kind": "paragraph",
          "text": "O problema mais reportado do MatDialog: ao fechar, o foco vai para o início do documento em vez de voltar ao botão que abriu. Quem usa leitor de tela perde o lugar e precisa percorrer a página inteira de novo."
        },
        {
          "kind": "paragraph",
          "text": "O restoreFocus: true resolve a maior parte dos casos. Quando o botão que abriu deixa de existir — uma linha de tabela que some depois da ação, por exemplo — é preciso escolher o destino na mão."
        },
        {
          "kind": "code",
          "code": "const ref = this.dialog.open(ConfirmarPagamento, {\n  ariaLabelledBy: 'confirmar-titulo',\n  restoreFocus: true,\n});\n\nref.afterClosed().subscribe(() => {\n  // O elemento que abriu pode ter sumido junto com a ação.\n  // Sem destino explícito, o foco cai no body.\n  this.tituloDaLista.nativeElement.focus();\n});",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "this.dialog.open(ConfirmarPagamento);",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Sem ariaLabelledBy o dialog abre sem nome acessível: o leitor de tela anuncia apenas \"diálogo\", e a pessoa não sabe o que está confirmando."
        }
      ]
    },
    {
      "id": "checklist-matdialog",
      "partId": "angular",
      "order": 19,
      "title": "Checklist MatDialog",
      "summary": "Quatro coisas para conferir mesmo usando MatDialog: título, foco entrando, foco voltando e botão de fechar.",
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
      "summary": "Implementa a estrutura de tabs. Ainda assim, confirme que as setas funcionam e que os dois leitores anunciam a aba selecionada.",
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
        },
        {
          "kind": "code",
          "code": "<mat-tab-group [attr.aria-label]=\"'Detalhes da conta'\">\n\n  <mat-tab label=\"Extrato\">\n    <ng-template matTabContent>\n      <!-- matTabContent adia a renderização até a aba abrir.\n           Sem ele, todo o conteúdo das abas fechadas está no DOM\n           e o leitor de tela percorre tudo. -->\n      <app-extrato />\n    </ng-template>\n  </mat-tab>\n\n  <mat-tab label=\"Limites\">\n    <ng-template matTabContent><app-limites /></ng-template>\n  </mat-tab>\n\n</mat-tab-group>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Extrato, aba, selecionada, 1 de 2"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Rótulo com ícone"
        },
        {
          "kind": "paragraph",
          "text": "Ícone dentro do rótulo precisa ser escondido, senão o leitor tenta ler o nome da ligadura da fonte."
        },
        {
          "kind": "code",
          "code": "<mat-tab>\n  <ng-template mat-tab-label>\n    <mat-icon aria-hidden=\"true\">receipt</mat-icon>\n    Extrato\n  </ng-template>\n</mat-tab>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<mat-tab>\n  <ng-template mat-tab-label>\n    <mat-icon>receipt</mat-icon>\n  </ng-template>\n</mat-tab>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Aba só com ícone é anunciada como \"receipt, aba\" — o nome da ligadura, não a função. Se o espaço não permite texto, use aria-label na aba."
        }
      ]
    },
    {
      "id": "matmenu",
      "partId": "angular",
      "order": 21,
      "title": "MatMenu",
      "summary": "Prefira MatMenu a menu caseiro. Navegação por teclado em menu é fácil de errar de forma sutil.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Preferível criar menus usando MatMenu ao invés de implementação caseira."
        },
        {
          "kind": "code",
          "code": "<button mat-icon-button [matMenuTriggerFor]=\"acoes\" aria-label=\"Ações da conta\">\n  <mat-icon aria-hidden=\"true\">more_vert</mat-icon>\n</button>\n\n<mat-menu #acoes=\"matMenu\">\n  <button mat-menu-item (click)=\"editar()\">Editar</button>\n  <button mat-menu-item (click)=\"excluir()\">Excluir</button>\n</mat-menu>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Ações da conta, botão, tem menu suspenso"
        },
        {
          "kind": "paragraph",
          "text": "O matMenuTriggerFor aplica aria-haspopup e aria-expanded sozinho, e move o foco para o primeiro item ao abrir. Isso é o principal motivo de não fazer menu à mão — é fácil errar em silêncio."
        },
        {
          "kind": "code",
          "code": "<button mat-icon-button [matMenuTriggerFor]=\"acoes\">\n  <mat-icon>more_vert</mat-icon>\n</button>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Sem aria-label o gatilho é anunciado como \"more_vert, botão\" — o nome do ícone. O menu funciona, mas ninguém sabe o que ele abre."
        }
      ]
    },
    {
      "id": "matselect",
      "partId": "angular",
      "order": 22,
      "title": "MatSelect",
      "summary": "O componente mais propenso a bug de acessibilidade. Sempre teste abertura, fechamento, leitura da opção e estado selecionado.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Componente mais propenso a bugs de acessibilidade. Não é opinião: é o componente com mais issues de acessibilidade abertas no repositório oficial do Angular Material."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Problemas conhecidos, reportados no repositório oficial"
        },
        {
          "kind": "table",
          "headers": [
            "Sintoma",
            "Issue"
          ],
          "rows": [
            [
              "Ao receber foco, não anuncia o valor já selecionado.",
              "material2#12297"
            ],
            [
              "Anuncia o mesmo item três vezes ao navegar com as setas.",
              "components#21410"
            ],
            [
              "Não anuncia expandido e recolhido ao abrir e fechar.",
              "components#20533"
            ],
            [
              "Dentro de um dialog, o VoiceOver não lê as opções.",
              "components#21787"
            ],
            [
              "Dentro do paginator, o leitor não acompanha a troca.",
              "components#20333"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "A lição vale mais que a lista: um componente mantido pelo time do framework, com anos de uso, ainda tem esses casos em aberto. Usar Material não substitui testar."
        },
        {
          "kind": "code",
          "code": "<mat-form-field>\n\n  <mat-label>Estado</mat-label>\n\n  <mat-select [(value)]=\"estado\" [attr.aria-describedby]=\"ajudaId\">\n\n    <mat-option *ngFor=\"let uf of estados\" [value]=\"uf.sigla\">\n      {{ uf.nome }}\n    </mat-option>\n\n  </mat-select>\n\n  <mat-hint [id]=\"ajudaId\">Onde o serviço será prestado</mat-hint>\n\n</mat-form-field>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Estado, caixa de combinação, São Paulo\nOnde o serviço será prestado"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Contorno quando a seleção não é anunciada"
        },
        {
          "kind": "paragraph",
          "text": "Se o leitor de tela não falar o valor escolhido depois de selecionar, anuncie você mesmo. É o único caminho confiável hoje."
        },
        {
          "kind": "code",
          "code": "import { LiveAnnouncer } from '@angular/cdk/a11y';\n\nexport class FormularioEndereco {\n\n  private readonly announcer = inject(LiveAnnouncer);\n\n  aoSelecionar(uf: Estado): void {\n    this.announcer.announce(`Estado selecionado: ${uf.nome}`, 'polite');\n  }\n\n}",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<mat-select placeholder=\"Estado\">\n  <mat-option value=\"SP\">São Paulo</mat-option>\n</mat-select>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Placeholder não é rótulo. Sem <mat-label> o campo é anunciado sem nome, e o placeholder some assim que a seleção acontece."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O que testar, sempre"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Abertura: o leitor anuncia que a lista abriu?",
            "Fechamento: o leitor anuncia que fechou?",
            "Leitura da opção: cada opção é lida uma vez, não três?",
            "Estado selecionado: ao voltar o foco ao campo, o valor é falado?",
            "Dentro de dialog: as opções continuam sendo lidas?"
          ]
        }
      ]
    },
    {
      "id": "matexpansionpanel",
      "partId": "angular",
      "order": 23,
      "title": "MatExpansionPanel",
      "summary": "O accordion do Material. Confira aria-expanded, para onde o foco vai, e se a mudança de estado é anunciada.",
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
        },
        {
          "kind": "code",
          "code": "<mat-accordion>\n\n  <mat-expansion-panel>\n\n    <mat-expansion-panel-header>\n      <mat-panel-title>Dados pessoais</mat-panel-title>\n      <mat-panel-description>Nome, CPF e nascimento</mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <app-dados-pessoais />\n\n  </mat-expansion-panel>\n\n</mat-accordion>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Dados pessoais, Nome, CPF e nascimento, botão, recolhido"
        },
        {
          "kind": "paragraph",
          "text": "O aria-expanded é aplicado e mantido pelo componente. Não escreva na mão: um valor fixo anuncia \"recolhido\" para sempre, inclusive com o painel aberto."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Cuidado com o nível de heading"
        },
        {
          "kind": "paragraph",
          "text": "O header do painel não é um heading. Numa página que navega por títulos, os painéis somem da árvore. Quando o accordion organiza o conteúdo principal da tela, envolva o título:"
        },
        {
          "kind": "code",
          "code": "<mat-panel-title>\n  <h3>Dados pessoais</h3>\n</mat-panel-title>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<mat-expansion-panel [expanded]=\"aberto\" aria-expanded=\"false\">",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Escrever aria-expanded na mão sobrepõe o que o componente calcula, e o valor congela. É o erro clássico de accordion: visualmente abre, o leitor de tela continua dizendo que está fechado."
        }
      ]
    },
    {
      "id": "mattable",
      "partId": "angular",
      "order": 24,
      "title": "MatTable",
      "summary": "Não assuma que toda tabela Material é acessível. Confira caption, headers, ordenação e foco.",
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
        },
        {
          "kind": "code",
          "code": "<table mat-table [dataSource]=\"lancamentos\" matSort>\n\n  <caption>Lançamentos dos últimos 30 dias</caption>\n\n  <ng-container matColumnDef=\"data\">\n    <!-- sortActionDescription diz o que o botão de ordenar faz.\n         Sem ele, o leitor anuncia só \"Data, botão\". -->\n    <th mat-header-cell *matHeaderCellDef mat-sort-header\n        sortActionDescription=\"Ordenar por data\">\n      Data\n    </th>\n    <td mat-cell *matCellDef=\"let l\">{{ l.data | date }}</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"valor\">\n    <th mat-header-cell *matHeaderCellDef>Valor</th>\n    <td mat-cell *matCellDef=\"let l\">{{ l.valor | currency }}</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"colunas\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: colunas\"></tr>\n\n</table>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Lançamentos dos últimos 30 dias, tabela, 2 colunas\nData, cabeçalho de coluna, Ordenar por data, botão"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Use a versão com table, não com div"
        },
        {
          "kind": "paragraph",
          "text": "O MatTable tem duas formas. A que usa <table>, <th> e <td> nativos entrega a semântica de graça. A versão com <mat-table> e <mat-cell> renderiza div com role, e depende de o navegador e o leitor de tela concordarem — o que nem sempre acontece."
        },
        {
          "kind": "code",
          "code": "<!-- ✅ semântica nativa -->\n<table mat-table>\n\n<!-- ❌ div com role, suporte irregular -->\n<mat-table>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Ação dentro da linha"
        },
        {
          "kind": "paragraph",
          "text": "Botão de ação repetido em toda linha precisa de nome único. Vinte botões \"Editar\" seguidos não dizem editar o quê."
        },
        {
          "kind": "code",
          "code": "<td mat-cell *matCellDef=\"let l\">\n  <button mat-icon-button [attr.aria-label]=\"'Editar lançamento de ' + l.descricao\">\n    <mat-icon aria-hidden=\"true\">edit</mat-icon>\n  </button>\n</td>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "overlay-components",
      "partId": "angular",
      "order": 25,
      "title": "Overlay Components",
      "summary": "Tudo que abre sobre a tela merece atenção extra: modal, popover, tooltip, select, menu e datepicker.",
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
      "summary": "Confira a navegação por teclado e como dia, mês e ano são anunciados. Datepicker falha em silêncio para quem usa teclado.",
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
        },
        {
          "kind": "code",
          "code": "<mat-form-field>\n\n  <mat-label>Data de nascimento</mat-label>\n\n  <input matInput [matDatepicker]=\"picker\" [formControl]=\"nascimento\">\n\n  <mat-hint>dd/mm/aaaa</mat-hint>\n\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"\n    aria-label=\"Abrir calendário\">\n  </mat-datepicker-toggle>\n\n  <mat-datepicker #picker />\n\n</mat-form-field>",
          "variant": "correct"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O campo de texto é a acessibilidade, não o calendário"
        },
        {
          "kind": "paragraph",
          "text": "O ponto mais importante do datepicker: deixe digitar. Uma grade de calendário exige 15 ou 20 toques de seta para chegar numa data distante. Digitar \"15/03/1985\" leva segundos."
        },
        {
          "kind": "paragraph",
          "text": "O mat-hint com o formato esperado não é detalhe: é o que permite a pessoa acertar de primeira sem abrir a grade."
        },
        {
          "kind": "code",
          "code": "<input matInput [matDatepicker]=\"picker\" readonly>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "readonly para \"forçar\" o uso do calendário é o erro mais comum aqui. Quem usa teclado ou leitor de tela perde o caminho rápido e fica preso na navegação por setas — e em telas de cadastro isso costuma ser o ponto de desistência."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Teclado dentro do calendário"
        },
        {
          "kind": "table",
          "headers": [
            "Tecla",
            "Ação"
          ],
          "rows": [
            [
              "Setas",
              "Move um dia ou uma semana."
            ],
            [
              "Page Up / Page Down",
              "Mês anterior e seguinte."
            ],
            [
              "Home / End",
              "Primeiro e último dia do mês."
            ],
            [
              "Enter",
              "Seleciona e fecha."
            ],
            [
              "Esc",
              "Fecha sem selecionar."
            ]
          ]
        }
      ]
    },
    {
      "id": "loading-angular",
      "partId": "angular",
      "order": 27,
      "title": "Loading Angular",
      "summary": "Mudança de estado precisa ser anunciada. Um spinner que só gira não diz nada a quem usa leitor de tela.",
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
      "summary": "Quando conteúdo aparece depois de um carregamento assíncrono, decida de propósito para onde vai o foco e o que é anunciado.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Quando conteúdo aparece após carregamento assíncrono, o foco e o anúncio devem ser avaliados."
        },
        {
          "kind": "code",
          "code": "@defer (on viewport) {\n\n  <app-grafico-gastos />\n\n} @placeholder {\n\n  <p>Gráfico de gastos</p>\n\n} @loading (after 100ms; minimum 500ms) {\n\n  <!-- role=\"status\" faz o leitor anunciar sem roubar o foco.\n       O aria-busy diz que a região ainda não terminou. -->\n  <p role=\"status\" aria-busy=\"true\">Carregando gráfico de gastos</p>\n\n} @error {\n\n  <p role=\"alert\">Não foi possível carregar o gráfico. Tente novamente.</p>\n\n}",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Carregando gráfico de gastos"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Os dois parâmetros que evitam o pior"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "after 100ms — não mostra o \"carregando\" se a resposta vier rápido. Sem isso, um flash aparece e some, e o leitor de tela anuncia algo que já não existe.",
            "minimum 500ms — se aparecer, fica tempo suficiente para ser lido. Um estado que dura 80ms é ruído, não informação."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Onde o foco deve ficar"
        },
        {
          "kind": "paragraph",
          "text": "A regra depende de quem pediu o carregamento:"
        },
        {
          "kind": "table",
          "headers": [
            "Situação",
            "O foco"
          ],
          "rows": [
            [
              "Carregou ao entrar na viewport.",
              "Não move. Ninguém pediu."
            ],
            [
              "Pessoa clicou em \"ver detalhes\".",
              "Move para o conteúdo novo."
            ],
            [
              "Erro depois de uma ação.",
              "Move para a mensagem de erro."
            ]
          ]
        },
        {
          "kind": "code",
          "code": "@loading {\n  <mat-spinner />\n}",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Spinner sem texto não diz nada a quem não vê a tela. O silêncio durante a espera é indistinguível de página quebrada — e depois de alguns segundos a pessoa desiste."
        }
      ]
    },
    {
      "id": "signals-e-acessibilidade",
      "partId": "angular",
      "order": 29,
      "title": "Signals e Acessibilidade",
      "summary": "Signals atualizam a UI sozinhos, mas leitores de tela não são notificados sozinhos. Use aria-live ou LiveAnnouncer.",
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Onde o mal-entendido mora"
        },
        {
          "kind": "paragraph",
          "text": "Signal atualiza o DOM. Atualizar o DOM não avisa ninguém. Um contador que vai de 3 para 4 muda na tela e não produz som nenhum — a menos que aquele pedaço de DOM esteja numa região viva declarada."
        },
        {
          "kind": "code",
          "code": "@Component({\n  template: `\n    <button (click)=\"adicionar()\">Adicionar ao carrinho</button>\n\n    <!-- role=\"status\" é uma região viva polite pronta.\n         O signal atualiza o texto; a região faz o anúncio. -->\n    <p role=\"status\">{{ itens() }} itens no carrinho</p>\n  `,\n})\nexport class Carrinho {\n\n  protected readonly itens = signal(0);\n\n  protected adicionar(): void {\n    this.itens.update((n) => n + 1);\n  }\n\n}",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "4 itens no carrinho"
        },
        {
          "kind": "paragraph",
          "text": "Quando a mudança não tem representação visual em texto, o effect conecta o signal ao anúncio."
        },
        {
          "kind": "code",
          "code": "export class Filtros {\n\n  private readonly announcer = inject(LiveAnnouncer);\n\n  readonly resultados = signal<Item[]>([]);\n\n  constructor() {\n    effect(() => {\n      const n = this.resultados().length;\n      this.announcer.announce(`${n} resultados`, 'polite');\n    });\n  }\n\n}",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "effect(() => {\n  this.announcer.announce(this.termoBusca());\n});",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "O effect roda a cada mudança do signal. Ligado num campo de texto, isso é um anúncio por tecla digitada. Use um signal derivado que mude com menos frequência, ou debounce."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Nada mudou com signals"
        },
        {
          "kind": "paragraph",
          "text": "Signals não têm regra de acessibilidade própria. O que muda é que a atualização ficou mais fácil de escrever — e, com isso, ficou mais fácil atualizar a tela em lugares onde antes ninguém mexia. Cada um desses lugares é um anúncio a decidir."
        }
      ]
    },
    {
      "id": "standalone-components",
      "partId": "angular",
      "order": 30,
      "title": "Standalone Components",
      "summary": "Não têm diferença de acessibilidade própria. As mesmas regras continuam valendo exatamente como antes.",
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
      "summary": "Formatação pode atrapalhar a leitura em voz alta. Confira como moeda, data e número são realmente anunciados.",
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
      "summary": "A maior fonte de bug de acessibilidade em Angular: botão, select, dropdown, stepper e menu feitos à mão.",
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O que se perde ao trocar o nativo por um customizado"
        },
        {
          "kind": "table",
          "headers": [
            "Vem de graça no nativo",
            "Vira trabalho seu"
          ],
          "rows": [
            [
              "Role anunciada.",
              "Escrever e manter a role certa."
            ],
            [
              "Alcançável por Tab.",
              "tabindex correto em cada estado."
            ],
            [
              "Enter e Espaço acionam.",
              "Tratar as duas teclas na mão."
            ],
            [
              "Estado desabilitado anunciado.",
              "aria-disabled sincronizado."
            ],
            [
              "Envia formulário.",
              "Não envia mais."
            ],
            [
              "Funciona com voz e switch.",
              "Depende do que você escreveu."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Se a estilização exige um elemento próprio, replique o contrato inteiro. Este é o mínimo de um botão feito à mão:"
        },
        {
          "kind": "code",
          "code": "@Component({\n  selector: 'app-botao',\n  host: {\n    'role': 'button',\n    '[attr.tabindex]': 'desabilitado() ? -1 : 0',\n    '[attr.aria-disabled]': 'desabilitado()',\n    '(click)': 'acionar()',\n    '(keydown.enter)': 'acionar()',\n    '(keydown.space)': 'acionar($event)',\n  },\n  template: `<ng-content />`,\n})\nexport class Botao {\n\n  readonly desabilitado = input(false);\n  readonly acionado = output<void>();\n\n  protected acionar(event?: Event): void {\n    // Espaço rola a página por padrão. Num botão, não pode.\n    event?.preventDefault();\n    if (this.desabilitado()) return;\n    this.acionado.emit();\n  }\n\n}",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Salvar, botão"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Isso ainda é pior que o nativo"
        },
        {
          "kind": "paragraph",
          "text": "Mesmo bem escrito, o componente acima não envia formulário, não responde ao modo de voz do sistema em todos os casos, e precisa de teste em cada leitor de tela. Um <button type=\"button\"> com CSS resolve os mesmos casos sem nada disso."
        },
        {
          "kind": "code",
          "code": "<div class=\"botao\" (click)=\"salvar()\">Salvar</div>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Funciona com mouse e falha em tudo o mais: não é anunciado como botão, o Tab não alcança, Enter e Espaço não acionam. É o erro número um de acessibilidade em Angular."
        }
      ]
    },
    {
      "id": "regra-para-custom-components",
      "partId": "angular",
      "order": 33,
      "title": "Regra para Custom Components",
      "summary": "Quatro perguntas antes de criar do zero: existe elemento nativo, componente Material, diretiva do Angular Aria — e você precisa mesmo do seu?",
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
      "summary": "O pacote oficial @angular/aria, lançado no Angular v22: diretivas headless que implementam os padrões da WAI-ARIA.",
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
      "summary": "Treze padrões, de combobox a grid. Compare com a lista de componentes que mais geram bug — é quase a mesma lista.",
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
      "summary": "Os três convivem e resolvem coisas diferentes: componente pronto, comportamento sem estilo, e utilitário de baixo nível.",
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
      "summary": "Ele cobre padrões de widget. A maioria dos bugs em produção é div clicável, ícone sem nome e foco perdido — nada disso ele toca.",
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
      "summary": "Uma div com handler de clique. Funciona visualmente e perde role, teclado, estado e semântica de uma vez.",
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
      "summary": "Dez perguntas cobrindo semântica, nome acessível, gerenciamento de foco, comportamento do router, Material e componentes customizados.",
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
