# Fase 1 — Fundação · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

## Workspace

- [ ] `ng new aria-angular --ssr --style=css --routing` executado na raiz do repo
- [ ] `angular.json` com `"outputMode": "static"` no target de build
- [ ] `app.routes.server.ts` com `RenderMode.Prerender` como padrão
- [ ] `ng build` gera `dist/aria-angular/browser/index.html`
- [ ] `ng build` **não** gera `dist/aria-angular/server/`
- [ ] `.gitignore` cobrindo `node_modules`, `dist`, `.angular`, `.vercel`, `.env`

## Configuração da app

- [ ] `provideZonelessChangeDetection()` em `app.config.ts`
- [ ] `provideRouter` com `withInMemoryScrolling` (anchorScrolling + scrollPositionRestoration)
- [ ] `provideClientHydration(withEventReplay())`
- [ ] `<html lang="pt-BR">` no `index.html`
- [ ] Viewport sem `maximum-scale` e sem `user-scalable=no`
- [ ] `<title>` e `<meta name="description">` base definidos

## Tooling

- [ ] `angular-eslint` instalado e configurado
- [ ] Regras de template a11y ligadas como **error**:
  - [ ] `alt-text`
  - [ ] `elements-content`
  - [ ] `label-has-associated-control`
  - [ ] `no-autofocus`
  - [ ] `no-positive-tabindex`
  - [ ] `valid-aria`
  - [ ] `click-events-have-key-events`
  - [ ] `interactive-supports-focus`
  - [ ] `role-has-required-aria`
  - [ ] `table-scope`
- [ ] Prettier configurado com `.prettierrc` no repo
- [ ] Scripts `dev`, `build`, `lint`, `format`, `test` no `package.json`
- [ ] `ng lint` passa sem erro nem warning

## Estilos

- [ ] `IDENTIDADE-VISUAL.md` lido antes de começar
- [ ] `src/styles/tokens.css` com custom properties de cor, espaço, tipografia
- [ ] Cores oficiais Angular como base (`#E40035`, `#151517`, `#FFFFFF`)
- [ ] Stops do gradiente Angular extraídos do press kit oficial
- [ ] Gradiente usado só em superfície decorativa, nunca atrás de texto
- [ ] `--accent-dark` derivado e medido (o `#E40035` reprova AA no tema escuro)
- [ ] Tema **claro** como padrão
- [ ] Tokens definidos para light e dark via `prefers-color-scheme`
- [ ] Tokens sobrescritíveis por `[data-theme="light"]` e `[data-theme="dark"]`
- [ ] `src/styles/reset.css` sem zerar `outline`
- [ ] `src/styles/focus.css` com `:focus-visible` global, espessura e offset visíveis
- [ ] `src/styles/motion.css` com `@media (prefers-reduced-motion: reduce)`
- [ ] Contraste da paleta verificado: 4.5:1 texto normal nos dois temas
- [ ] Contraste da paleta verificado: 3:1 texto grande e bordas de componente nos dois temas
- [ ] Contraste do indicador de foco verificado nos dois temas

## Tipografia

- [ ] Escala tipográfica definida (título de parte bem maior que o corpo)
- [ ] Corpo entre 17 e 18px, line-height ~1.7
- [ ] Fonte monoespaçada para código
- [ ] **Nenhuma fonte externa bloqueante**
- [ ] Se self-hosted: `font-display: swap`
- [ ] Corpo limitado a ~68 caracteres por linha

## Ilustrações base

- [ ] Direção validada contra `IDENTIDADE-VISUAL.md` §5
- [ ] PO decidiu sobre a mascote Angie do press kit Angular
- [ ] Primeiras ilustrações em SVG inline
- [ ] SVGs herdam `currentColor` e funcionam nos dois temas
- [ ] Decorativas com `aria-hidden="true"`
- [ ] Nenhuma ilustração carrega significado sozinha
- [ ] Animação só sob `prefers-reduced-motion: no-preference`

## Logo e marca

- [ ] `MARCA-E-LICENCA.md` lido antes de desenhar o logo
- [ ] Logo é adaptação do escudo Angular **atual (v17+)**
- [ ] **Não** usa o escudo de 2016 (v3–v16)
- [ ] **Não** usa o logo AngularJS
- [ ] **Não** usa o escudo oficial intacto como logo do produto
- [ ] Conteúdo interno do escudo é próprio, ligado a acessibilidade
- [ ] Favicon e ícones derivados do mesmo logo
- [ ] Atribuição CC BY 4.0 preparada para site e repo

## Open source

- [ ] PO confirmou a origem/titularidade do texto do `ARIA.html`
- [ ] PO confirmou a licença do conteúdo (CC BY 4.0 ou CC BY-SA 4.0)
- [ ] `LICENSE` (MIT) na raiz
- [ ] `LICENSE-CONTENT` (CC do conteúdo) na raiz
- [ ] `README.md` com disclaimer de não-afiliação
- [ ] `NOTICE.md` com atribuição CC BY 4.0 do logo
- [ ] `CONTRIBUTING.md`, incluindo a regra de acessibilidade em PR
- [ ] `CODE_OF_CONDUCT.md`
- [ ] Issue template de bug de acessibilidade usando o Template de Bug do conteúdo

## Estrutura

- [ ] `src/app/core/` criado
- [ ] `src/app/shared/` criado
- [ ] `src/app/features/` criado
- [ ] `src/content/` criado
- [ ] `src/styles/` criado

## Fechamento da fase

- [ ] `ng serve` sobe sem erro
- [ ] Página inicial passa em axe sem violação
- [ ] Tabular na página inicial mostra foco visível
- [ ] Commit com gitmoji feito e `git push` executado
