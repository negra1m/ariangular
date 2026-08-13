# O que as pessoas realmente perguntam sobre acessibilidade em Angular

Levantamento feito em 2026-08-13 para dirigir o próximo ciclo de conteúdo.

**Método:** busca por dúvidas recorrentes em issues do repositório oficial
`angular/components`, documentação do Angular, e blogs técnicos de referência
da comunidade. Issue aberta por dev com problema real vale mais que artigo
genérico — ela mostra onde a pessoa travou de verdade, com o caso reproduzido.

---

## Por que este documento existe

Medição do conteúdo atual, em 149 seções de documentação (fora checklists):

| | |
|---|---|
| Sem nenhum exemplo de código | **55** |
| Com apenas um exemplo | 72 |
| Sem o par errado / certo | 84 |
| Sem "o que o leitor de tela anuncia" | 118 |
| **Completas** (errado + certo + leitura) | **3** |

O buraco está concentrado na parte `angular`: **24 das 39 seções sem código
nenhum**, incluindo MatDialog, MatSelect, MatTable, cdkTrapFocus,
FocusMonitor e LiveAnnouncer. Justamente as mais específicas, e as que o dev
abre esperando copiar e colar.

Hoje seções como `angular/matselect` dizem *"o componente mais propenso a bug
de acessibilidade"* e param aí. Não dizem **quais** bugs, nem **como
contornar**. Este documento é a matéria-prima para consertar isso.

---

## A. Foco depois de trocar de rota

**O que perguntam:** *"troquei de página e o leitor de tela continuou lendo a
tela antiga"*, *"como mando o foco para o topo depois do routerLink?"*

É a dúvida número um, e a lacuna de acessibilidade mais citada em SPA. O
router não recarrega a página, então o navegador não reposiciona o foco como
faria num carregamento normal — a pessoa fica presa no link que acabou de
acionar, que agora aponta para conteúdo que não existe mais.

**O que a resposta canônica diz:** assinar `NavigationEnd`, mover o foco para
o `<h1>` ou para o `<main>` com `tabindex="-1"`.

**Estado no guia:** coberto conceitualmente em `angular/foco-apos-navegacao` e
`angular/exemplo-de-destino-de-foco`. **Falta o serviço completo** — o dev
quer o arquivo inteiro para colar, não o trecho.

**Pepita que o guia não tem:** `RouterLinkActive` expõe `ariaCurrentWhenActive`,
que aplica `aria-current` automaticamente no link ativo. É API oficial,
resolve um item de checklist inteiro numa linha, e quase ninguém conhece.

Fontes: [angular.dev/best-practices/a11y](https://angular.dev/best-practices/a11y),
[Angular v17 — Accessibility](https://v17.angular.io/guide/accessibility),
[Pope Tech — Angular, Accessibility and You](https://blog.pope.tech/2018/10/25/angular-accessibility-and-you/)

---

## B. LiveAnnouncer

**O que perguntam:** *"chamei o LiveAnnouncer duas vezes com o mesmo texto e
só anunciou na primeira"*

**A pegadinha:** o `LiveAnnouncer` não anuncia chamadas consecutivas com texto
idêntico. A região viva não muda de conteúdo, então o leitor de tela não tem
o que reanunciar. Quem valida "salvo com sucesso" duas vezes seguidas acha que
a função quebrou.

Reportado em [angular/components#21507](https://github.com/angular/components/issues/21507).

**Contorno:** variar a string (contador, timestamp invisível) ou limpar a
região antes de anunciar de novo.

**Estado no guia:** `angular/liveannouncer` e
`angular/quando-usar-liveannouncer` existem, ambas **sem uma linha de código**.
A pegadinha não é mencionada em lugar nenhum.

---

## C. Angular Material — MatSelect

O componente com mais issues de acessibilidade abertas no repositório. O guia
já diz que é o mais problemático; falta dizer **em quê**.

| Sintoma | Onde foi reportado |
|---|---|
| Ao receber foco, não anuncia o valor já selecionado | [#12297](https://github.com/angular/material2/issues/12297) |
| Anuncia o mesmo item três vezes ao navegar com as setas | [#21410](https://github.com/angular/components/issues/21410) |
| NVDA não fala "expandido"/"recolhido" ao abrir e fechar | [#20533](https://github.com/angular/components/issues/20533) |
| Dentro de `mat-dialog`, o VoiceOver não lê as opções | [#21787](https://github.com/angular/components/issues/21787) |
| Dentro do `mat-paginator`, o leitor não acompanha a troca | [#20333](https://github.com/angular/components/issues/20333) |
| Rework de acessibilidade do componente | [#11083](https://github.com/angular/components/issues/11083) |
| Problema geral de acessibilidade | [#27248](https://github.com/angular/components/issues/27248) |

**O que isso ensina, e o guia deveria dizer em voz alta:** usar Material não
te isenta de testar. Um componente mantido pelo time do framework, com anos de
uso, ainda tem essa lista em aberto. É o argumento mais forte que existe a
favor do teste manual com TalkBack e VoiceOver — e ele está documentado
publicamente, não é opinião.

---

## D. Angular Material — MatDialog

**O que perguntam:** *"fechei o dialog e o foco foi parar no topo da página"*

| Sintoma | Onde foi reportado |
|---|---|
| Ao fechar pelo botão cancelar, o foco volta ao início do documento em vez do botão que abriu | [#19338](https://github.com/angular/components/issues/19338) |
| A descrição do dialog não é lida pelo NVDA no Chrome | [#10591](https://github.com/angular/components/issues/10591) |

**Estado no guia:** `angular/matdialog` lista o que o componente entrega
(role, foco, ESC, backdrop) e `angular/checklist-matdialog` manda conferir
quatro coisas. Nenhuma das duas mostra código, e nenhuma avisa que o retorno
de foco é justamente o ponto que falha na prática.

---

## E. Formulários — o erro que não é anunciado

**O que perguntam:** *"o `mat-error` aparece na tela mas o leitor de tela não
fala nada"*

**A causa:** `MatError` tem `role="alert"`, mas `role="alert"` **não dispara
quando o elemento é inserido no DOM naquele momento**. O leitor precisa que a
região já exista para perceber a mudança. Como o `mat-error` só entra no DOM
quando o campo fica inválido, o anúncio se perde.

Reportado em [angular/components#13952](https://github.com/angular/components/issues/13952).

**Dois contornos, os dois válidos:**

1. Manter o `mat-error` sempre no DOM, escondido por CSS, e revelar quando o
   campo entrar em erro
2. Anunciar pelo `LiveAnnouncer` quando o controle mudar para inválido

**Segunda pegadinha, independente:** `matInput` **sobrescreve** o
`aria-describedby` que você definiu manualmente. Quem liga a mensagem de ajuda
na mão perde a ligação sem perceber. Reportado em
[angular/components#19528](https://github.com/angular/components/issues/19528).

**Terceira:** `aria-describedby` deve ser `null` quando não há erro. Deixar o
atributo apontando para um elemento vazio faz o leitor ler silêncio como se
fosse conteúdo.

**Estado no guia:** a parte `formularios` tem 7 seções e é a mais bem servida
de exemplos. Mas nenhuma das três pegadinhas acima aparece — todas são de
Angular Material, e a parte de formulários fala de HTML puro.

Fontes: [Angular Architects — Building Accessible Forms with Angular](https://www.angulararchitects.io/blog/accessible-angular-forms/),
[This Dot Labs — Dealing with Form Errors in Angular](https://www.thisdot.co/blog/make-it-accessible-dealing-with-form-errors-in-angular),
[Cory Rylan — Build Accessible Forms with Angular](https://coryrylan.com/blog/build-accessible-forms-with-angular)

---

## F. Componente customizado com navegação por teclado

**O que perguntam:** *"fiz uma lista customizada, como faço as setas
funcionarem?"*

**A resposta que a comunidade dá:** `ListKeyManager` do CDK. O padrão tem três
passos fixos:

1. `@ViewChildren` sobre as opções
2. Inicializar o `ListKeyManager` com essa lista
3. Encaminhar o `keydown` do contêiner para o manager

**Estado no guia:** `angular/focuskeymanager` existe e **não menciona o
`ListKeyManager`**, que é a classe base e a mais usada. Sem código.

**Resposta moderna, que o guia já tem:** `@angular/aria` do v22 resolve isso
com diretiva pronta. Vale conectar as duas seções — quem chega procurando
`ListKeyManager` deveria sair sabendo que existe caminho melhor desde o v22.

Fontes: [Angular Love — Doing A11y easily with Angular CDK](https://angular.love/doing-a11y-easily-with-angular-cdk-keyboard-navigable-lists),
[Angular Architects — Enhancing A11y with Angular CDK](https://www.angulararchitects.io/blog/angular-cdk-accessibility/),
[Brian Treese — Angular CDK Focus Trap](https://briantree.se/using-the-angular-cdk-trap-focus-directive/)

---

## G. Binding de ARIA — o erro de sintaxe que todo mundo comete

**O que perguntam:** *"por que `[aria-label]="texto"` não funciona?"*

**A causa:** atributos ARIA **não são propriedades do DOM**. Property binding
não os alcança. Precisa ser attribute binding: `[attr.aria-label]="texto"`.

**Estado no guia:** `aria/angular-attribute-binding` cobre. É uma das poucas
seções com exemplo. **Serve de modelo para as outras.**

Fonte: [Angular Architects — ARIA roles and attributes in Angular](https://www.angulararchitects.io/blog/aria-roles-attributes/)

---

## Prioridade sugerida

Ordenado por dor causada, cruzando o que as pessoas perguntam com o que o guia
não entrega:

| # | Onde | O que fazer |
|---|---|---|
| 1 | `angular/matselect` | Tabela dos 5 sintomas com link para a issue + como contornar |
| 2 | `angular/matdialog` + `checklist-matdialog` | Código do dialog completo + o bug do retorno de foco |
| 3 | `formularios/erro-dinamico-com-aria-live` | As três pegadinhas do Material: `role="alert"` inserido no DOM, `matInput` sobrescrevendo `aria-describedby`, `aria-describedby` nulo |
| 4 | `angular/liveannouncer` | Serviço completo + a pegadinha do texto repetido |
| 5 | `angular/foco-apos-navegacao` | Serviço de foco de rota inteiro, pronto para colar + `ariaCurrentWhenActive` |
| 6 | `angular/focuskeymanager` | `ListKeyManager` com os três passos + ponte para o `@angular/aria` |
| 7 | As outras 49 seções sem código | Exemplo mínimo em cada |

---

## Custo, para decidir com número na mão

Cada bloco de conteúdo novo em português precisa ser traduzido para inglês e
chinês — `merge-i18n.js` falha abaixo de 100%, então não dá para publicar pela
metade.

O caminho é: editar `fonte/ARIA.html`, rodar `npm run content:extract`,
`npm run i18n:strings` para gerar as chaves novas, traduzir os dois idiomas,
`npm run i18n:build` e verificar.

| Escopo | Seções | Strings novas (estimado) |
|---|---|---|
| Só os 6 primeiros itens da tabela | 6 | ~120 por idioma |
| Os 6 + as 24 da parte `angular` | 30 | ~500 por idioma |
| Todas as 55 sem código | 55 | ~900 por idioma |

---

## O que este levantamento não cobriu

Honestidade sobre o método: a busca foi feita em inglês, sobre fontes
públicas, e não inclui fóruns fechados, Discord, nem o Stack Overflow em
profundidade. As issues do `angular/components` são a fonte mais confiável
aqui porque cada uma tem caso reproduzido e resposta do time do framework —
mas representam quem foi longe o bastante para abrir issue, não quem desistiu
antes.

Também não há dado de volume: sei que estas dúvidas existem e são recorrentes,
não sei quais são as mais frequentes em números.
