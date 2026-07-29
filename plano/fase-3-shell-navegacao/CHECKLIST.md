# Fase 3 — Shell e Navegação · Checklist

Estado em 2026-07-28. Marcar concluído com data: `(YYYY-MM-DD)`

> **Nada nesta fase foi visto num navegador.** Os itens marcados foram verificados por
> build, lint e axe sobre o HTML gerado.

## Rotas

- [x] `/:locale` — home (2026-07-28)
- [x] `/:locale/:partId` — índice da parte (2026-07-28)
- [x] `/:locale/:partId/:sectionId` — seção (2026-07-28)
- [x] `/:locale/checklists` (2026-07-28)
- [x] `/:locale/checklists/:checklistId` (2026-07-28)
- [x] `/:locale/auditor` (2026-07-28)
- [x] Rota 404 com página própria e link de volta (2026-07-28)
- [x] Raiz `/` com escolha de idioma, não redirect cego (2026-07-28)
- [x] Guard de locale: URL sem idioma cai no padrão preservando o caminho (2026-07-28)
- [x] `title` por rota via `SeoService` (2026-07-28)
- [ ] `TitleStrategy` customizada do Router (hoje o título é aplicado pelo SeoService)

## Estrutura semântica

- [x] Skip link é o primeiro elemento focável do DOM (2026-07-28)
- [x] Skip link invisível por padrão e visível ao receber foco (2026-07-28)
- [x] Um único `<header>` de banner (2026-07-28)
- [x] Um único `<main id="conteudo" tabindex="-1">` (2026-07-28)
- [x] Um único `<footer>` (2026-07-28)
- [x] Todo `<nav>` com `aria-label` distinto (2026-07-28)
- [x] axe confirma landmarks corretas em 553 páginas (2026-07-28)
- [ ] Skip link testado de verdade (Tab na primeira posição, salto acontece)

## Header

- [x] Nome do produto como link para a home do idioma (2026-07-28)
- [x] Busca no header (2026-07-28)
- [x] Toggle de tema é `<button>` com `aria-pressed` refletindo estado real (2026-07-28)
- [x] Preferência de tema salva em localStorage com guard de plataforma (2026-07-28)
- [x] `prefers-color-scheme` como padrão inicial (2026-07-28)
- [x] Script inline no `index.html` evita flash do tema errado (2026-07-28)
- [x] Botão de menu mobile com `aria-expanded` via binding (2026-07-28)
- [x] Botão de menu mobile com `aria-controls` (2026-07-28)
- [ ] Ausência de flash de tema verificada na prática

## Seletor de idioma

- [x] Três idiomas como botões, com `aria-current` no ativo (2026-07-28)
- [x] `lang` no botão do idioma, para o leitor pronunciar certo (2026-07-28)
- [x] Troca preserva a página atual, não volta para a home (2026-07-28)
- [ ] Verificado em navegador

## Navegação

- [x] `<nav aria-label>` com `<ul>`/`<li>` (2026-07-28)
- [x] Parte atual com `aria-current="page"` (2026-07-28)
- [x] Estado ativo com cor **e** borda, não só cor (2026-07-28)
- [ ] **Painel mobile não prende o foco**
- [ ] **Painel mobile não fecha com ESC**
- [ ] **Painel mobile não devolve o foco ao botão que abriu**
- [ ] Navegação lateral por seção dentro da parte (hoje só a lista de partes)

> As três lacunas acima são exatamente o que o "Checklist Modal" do próprio conteúdo
> exige. O menu mobile sobreposto é um modal na prática — e hoje o site não cumpre
> o que publica.

## Footer

- [x] `<nav aria-label>` no rodapé (2026-07-28)
- [x] Link do LinkedIn (2026-07-28)
- [x] Link externo com `rel="noopener noreferrer"` (2026-07-28)
- [x] Link externo avisa que abre em nova aba, em texto para leitor de tela (2026-07-28)
- [x] Disclaimer de não-afiliação presente (2026-07-28)
- [x] Disclaimer com contraste AA, não cinza escondido (2026-07-28)
- [x] Links das licenças MIT e CC BY 4.0 (2026-07-28)
- [x] Sem branding Few Company (2026-07-28)

## Foco e anúncio de rota

- [x] `@angular/cdk` instalado (2026-07-28)
- [x] `RouteFocusService` assinando `NavigationEnd` (2026-07-28)
- [x] Foco move para o `<h1>` a cada navegação (2026-07-28)
- [x] `<h1>` das páginas com `tabindex="-1"` (2026-07-28)
- [x] `LiveAnnouncer` anuncia o nome da tela (2026-07-28)
- [x] Anúncio acontece **depois** de mover o foco (2026-07-28)
- [x] Sem anúncio na primeira renderização (2026-07-28)
- [x] Sem anúncio ao trocar só o fragmento (2026-07-28)
- [x] `preventScroll` quando há fragmento na URL (2026-07-28)
- [x] Guard de plataforma — não quebra o prerender (2026-07-28)
- [ ] **Comportamento verificado com leitor de tela real**

## Responsivo

- [x] Layout em grid/flex com unidades relativas (2026-07-28)
- [x] Alvos de toque com mínimo 2.75rem no header (2026-07-28)
- [x] `scroll-padding-top` para o foco não ficar sob o header sticky (2026-07-28)
- [ ] Reflow em 320px sem scroll horizontal
- [ ] Zoom até 200% sem perda de conteúdo
- [ ] Verificado em aparelho real

## Fechamento

- [x] `ng lint` e `ng build` passando (2026-07-28)
- [x] axe sem violação nas páginas geradas (2026-07-28)
- [x] Commit e push feitos (2026-07-28)
- [ ] Jornada entre as partes só com teclado
- [ ] Fase fechada — bloqueada pelo menu mobile e pela verificação em navegador
