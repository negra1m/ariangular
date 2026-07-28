# Fase 3 — Shell e Navegação · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

## Rotas

- [ ] `/` (home)
- [ ] `/fundamentos`
- [ ] `/aria`
- [ ] `/formularios`
- [ ] `/componentes`
- [ ] `/angular`
- [ ] `/leitores-de-tela`
- [ ] `/qa-wcag`
- [ ] `/checklists` (placeholder até a Fase 6)
- [ ] `/auditor` (placeholder até a Fase 7)
- [ ] Rota 404 com página própria e link de volta
- [ ] Navegação por fragmento funcionando (`/aria#aria-label`)
- [ ] `title` definido em toda rota
- [ ] `TitleStrategy` customizada compondo `"<Seção> · ARIA Angular"`

## Estrutura semântica

- [ ] Skip link é o primeiro elemento focável do DOM
- [ ] Skip link invisível por padrão e visível ao receber foco
- [ ] Skip link com contraste suficiente quando visível
- [ ] Um único `<header>` de banner
- [ ] Um único `<main id="conteudo" tabindex="-1">`
- [ ] Um único `<footer>` de contentinfo
- [ ] Todo `<nav>` tem `aria-label` distinto
- [ ] Nenhuma landmark aninhada incorretamente

## Header

- [ ] Nome do produto como link para `/`
- [ ] Slot do botão de busca presente
- [ ] Toggle de tema é `<button>` com `aria-pressed` refletindo estado real
- [ ] Preferência de tema salva em localStorage
- [ ] `prefers-color-scheme` respeitado como padrão inicial
- [ ] Sem flash de tema errado na primeira pintura
- [ ] Botão de menu mobile com `aria-expanded` via binding
- [ ] Botão de menu mobile com `aria-controls` apontando para o `nav`

## Navegação lateral

- [ ] `<nav aria-label="Documentação">` com `<ul>`/`<li>`
- [ ] Lista anunciada corretamente pelo leitor ("lista com N itens")
- [ ] Parte atual com `aria-current="page"`
- [ ] Seção atual com `aria-current="location"`
- [ ] Navegável só com teclado, na ordem visual
- [ ] Painel mobile prende o foco enquanto aberto
- [ ] Painel mobile fecha com `ESC`
- [ ] Painel mobile devolve o foco ao botão que abriu

## Footer

- [ ] `<nav aria-label="Links do rodapé">`
- [ ] Link do LinkedIn: `https://www.linkedin.com/in/negra1m/`
- [ ] Link externo com `target="_blank"` e `rel="noopener noreferrer"`
- [ ] Link externo avisa que abre em nova aba (texto para leitor de tela)
- [ ] Crédito e ano
- [ ] Link para o repositório
- [ ] Link para as licenças (MIT / CC BY 4.0)
- [ ] Disclaimer de não-afiliação presente
- [ ] Disclaimer com contraste AA, legível — não cinza escondido
- [ ] Atribuição CC BY 4.0 do logo adaptado
- [ ] Nenhum texto do site sugere oficialidade ou endosso
- [ ] Sem branding Few Company

## Foco e anúncio de rota

- [ ] `@angular/cdk` instalado (só `a11y`)
- [ ] `RouteFocusService` assinando `NavigationEnd`
- [ ] Foco move para o `<h1>` a cada navegação
- [ ] `<h1>` das páginas com `tabindex="-1"`
- [ ] `LiveAnnouncer` anuncia o nome da rota
- [ ] Anúncio acontece **depois** de mover o foco
- [ ] Sem anúncio duplicado ao navegar por fragmento na mesma rota
- [ ] `preventScroll` usado quando há fragmento na URL
- [ ] `LiveAnnouncer` não quebra o prerender (`afterNextRender` ou guard de plataforma)

## Responsivo

- [ ] Layout funciona a partir de 320px
- [ ] Reflow OK em 320px sem scroll horizontal (WCAG 1.4.10)
- [ ] Zoom até 200% sem perda de conteúdo ou função
- [ ] Alvos de toque com no mínimo 24×24 CSS px (WCAG 2.5.8)

## Fechamento da fase

- [ ] Jornada completa entre as 7 partes só com teclado
- [ ] Foco visível em todos os elementos focáveis do shell
- [ ] axe sem violação no shell
- [ ] `ng lint` e `ng build` passando
- [ ] Commit com gitmoji feito e `git push` executado
