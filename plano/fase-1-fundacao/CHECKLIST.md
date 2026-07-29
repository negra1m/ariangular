# Fase 1 — Fundação · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

> **Nota:** o PO trocou Angular 21 por **Angular 22** em 2026-07-28. Angular 22 exige
> Node ≥22.22.3; a máquina tinha 22.22.0. Resolvido instalando **fnm** e fixando
> **Node 24** via `.node-version`, sem tocar no Node global dos outros projetos.

## Workspace

- [x] Workspace Angular 22 criado na raiz do repo (2026-07-28)
- [x] `angular.json` com `"outputMode": "static"` no target de build (2026-07-28)
- [x] `app.routes.server.ts` com `RenderMode.Prerender` como padrão (2026-07-28)
- [x] `ng build` gera `dist/ariangular/browser/index.html` (2026-07-28)
- [x] `ng build` **não** gera `dist/ariangular/server/` (2026-07-28)
- [x] `src/server.ts` e `express` removidos — SSG não usa servidor (2026-07-28)
- [x] `.gitignore` correto para Angular + Vercel (o herdado era de Next.js) (2026-07-28)
- [x] `.gitattributes` normalizando fim de linha (2026-07-28)
- [x] `.node-version` fixando Node 24 (2026-07-28)

## Configuração da app

- [x] Zoneless (padrão do Angular 22, sem `zone.js` nas dependências) (2026-07-28)
- [x] `provideRouter` com `withInMemoryScrolling` (anchor + scroll restoration) (2026-07-28)
- [x] `withRouterConfig({ onSameUrlNavigation: 'reload' })` para fragmentos (2026-07-28)
- [x] `provideClientHydration(withEventReplay())` (2026-07-28)
- [x] `<html lang="pt-BR">` no `index.html` (2026-07-28)
- [x] Viewport sem `maximum-scale` e sem `user-scalable=no` (2026-07-28)
- [x] `<title>` e `<meta name="description">` base definidos (2026-07-28)
- [x] Script inline aplicando o tema antes da primeira pintura (sem flash) (2026-07-28)

## Tooling

- [x] `angular-eslint` instalado e configurado (2026-07-28)
- [x] Regras de template a11y ligadas como **error**, explicitamente (2026-07-28):
  - [x] `alt-text`
  - [x] `elements-content`
  - [x] `label-has-associated-control`
  - [x] `no-autofocus`
  - [x] `no-distracting-elements`
  - [x] `no-positive-tabindex`
  - [x] `valid-aria`
  - [x] `click-events-have-key-events`
  - [x] `interactive-supports-focus`
  - [x] `role-has-required-aria`
  - [x] `table-scope`
  - [x] `mouse-events-have-key-events`
  - [x] `button-has-type`
- [x] Prettier configurado (2026-07-28)
- [x] Scripts no `package.json`: `dev`, `build`, `lint`, `contrast`, `verify`, `format`, `test` (2026-07-28)
- [x] `ng lint` passa sem erro nem warning (2026-07-28)
- [x] CI no GitHub Actions rodando lint + contraste + validação da fonte + build (2026-07-28)
- [x] CI falha se o build gerar pasta `server/` (2026-07-28)

## Estilos

- [x] `IDENTIDADE-VISUAL.md` lido antes de começar (2026-07-28)
- [x] `src/styles/tokens.css` com custom properties de cor, espaço, tipografia (2026-07-28)
- [x] Cores oficiais Angular como base (`#E40035`, `#151517`, `#FFFFFF`) (2026-07-28)
- [ ] Stops do gradiente Angular extraídos do press kit oficial
      — usando aproximação; os stops exatos só estão nos arquivos do Google Drive
- [x] Gradiente usado só em superfície decorativa, nunca atrás de texto (2026-07-28)
- [x] `--accent-dark` derivado e medido (2026-07-28)
- [x] Tema **escuro** como padrão, claro como alternativa completa (2026-07-29)
- [x] Tokens definidos para light e dark via `prefers-color-scheme` (2026-07-28)
- [x] Tokens sobrescritíveis por `[data-theme="light"]` e `[data-theme="dark"]` (2026-07-28)
- [x] `src/styles/reset.css` sem zerar `outline` (2026-07-28)
- [x] `src/styles/focus.css` com `:focus-visible` global, espessura e offset visíveis (2026-07-28)
- [x] `scroll-padding-top` para o foco não ficar sob o header sticky (WCAG 2.4.11) (2026-07-28)
- [x] `src/styles/motion.css` com `@media (prefers-reduced-motion: reduce)` (2026-07-28)
- [x] Contraste verificado: 4.5:1 texto normal nos dois temas (2026-07-28)
- [x] Contraste verificado: 3:1 borda de componente e foco nos dois temas (2026-07-28)
- [x] `scripts/check-contrast.js` automatiza a verificação — 38 pares, 0 falhas (2026-07-29)
- [x] Acento duplo por medição: `--color-accent` (3:1, display) e
      `--color-accent-text` (4.5:1, texto normal) (2026-07-28)

## Tipografia

- [x] Escala tipográfica definida (2026-07-28)
- [x] Corpo em 17px (`--text-base: 1.0625rem`), line-height 1.7 (2026-07-28)
- [x] Fonte monoespaçada para código (2026-07-28)
- [x] **Nenhuma fonte externa bloqueante** — só fontes de sistema (2026-07-28)
- [x] Corpo limitado a 68 caracteres por linha (`--measure`) (2026-07-28)

## Ilustrações base

O pedido do PO era "figuras de acessibilidade e carinho por todo ele".
Entregues sete, uma por parte, em `shared/part-art/`.

- [x] Direção validada contra `IDENTIDADE-VISUAL.md` §5 (2026-07-29)
- [x] Ilustrações em SVG inline (2026-07-29)
- [x] SVGs herdam os tokens de tema e funcionam nos dois (2026-07-29)
- [x] Decorativas com `aria-hidden="true"` e `role="presentation"` (2026-07-29)
- [x] Nenhuma ilustração carrega significado sozinha (2026-07-29)
- [x] Sem animação — não há o que degradar sob `prefers-reduced-motion` (2026-07-29)
- [ ] PO decidiu sobre a mascote Angie do press kit Angular — *não usada; o
      escudo próprio já cobre a identidade*

## Logo e marca

- [x] `MARCA-E-LICENCA.md` escrito, com os limites levantados nas fontes (2026-07-28)
- [x] Logo é adaptação do escudo Angular **atual (v17+)** — `BrandMark` (2026-07-28)
- [x] **Não** usa o escudo de 2016 (v3–v16) (2026-07-28)
- [x] **Não** usa o logo AngularJS (2026-07-28)
- [x] **Não** usa o escudo oficial intacto como logo do produto (2026-07-28)
- [x] Conteúdo interno do escudo é próprio: um anel de foco (2026-07-28)
- [x] Wordmark com sobreposição `aria` + `angular`, destaque só visual (2026-07-28)
- [x] SVG decorativo com `aria-hidden`, nome acessível vindo do texto (2026-07-28)
- [x] **Favicon e ícones derivados do logo** — `favicon.svg` + `.ico` +
      `apple-touch-icon` (2026-07-28)
- [x] Atribuição CC BY 4.0 preparada em `NOTICE.md` (2026-07-28)
- [ ] Logo conferido renderizado num navegador

## Watermark

- [x] Watermark zero-width (U+200B / U+200D) no shell (2026-07-28)
- [x] Fora do fluxo de leitura, com `aria-hidden="true"` (2026-07-28)
- [x] Escrito com escapes Unicode, não literais — o ESLint acusa literal como
      `no-irregular-whitespace` e editor limpa caractere invisível (2026-07-28)
- [x] Coberto por teste (2026-07-28)
- [ ] Verificado em TalkBack e VoiceOver (Fase 8)

## Estrutura de pastas

- [x] `src/app/core/` — i18n, a11y, seo, theme, progress, search (2026-07-28)
- [x] `src/app/shared/` — header, footer, busca, blocos, marca (2026-07-28)
- [x] `src/app/features/` — home, doc, checklists, auditor, not-found (2026-07-28)
- [x] `src/content/` — tipos e conteúdo por locale (2026-07-28)
- [x] `src/styles/` — tokens, reset, focus, motion (2026-07-28)
- [x] `scripts/` — 7 ferramentas de verificação e geração (2026-07-28)
- [x] `i18n/` — catálogo de tradução (2026-07-28)

## Open source

- [x] PO confirmou a origem do conteúdo: autoria própria (2026-07-28)
- [x] PO confirmou a licença do conteúdo: CC BY 4.0 (2026-07-28)
- [x] `LICENSE` (MIT) na raiz (2026-07-28)
- [x] `LICENSE-CONTENT` (CC BY 4.0) na raiz (2026-07-28)
- [x] `README.md` com disclaimer de não-afiliação (2026-07-28)
- [x] `NOTICE.md` com atribuição CC BY 4.0 do logo (2026-07-28)
- [x] `CONTRIBUTING.md`, incluindo a regra de acessibilidade em PR (2026-07-28)
- [x] `CODE_OF_CONDUCT.md` (2026-07-28)
- [x] Issue template de bug de acessibilidade seguindo o Template de Bug do conteúdo (2026-07-28)

## Estrutura

- [x] `src/app/core/` criado (2026-07-28)
- [x] `src/app/shared/` criado (2026-07-28)
- [x] `src/app/features/` criado (2026-07-28)
- [x] `src/content/` criado (2026-07-28)
- [x] `src/styles/` criado (2026-07-28)

## Fechamento da fase

- [x] `ng build` passa e prerenderiza (2026-07-28)
- [x] `npm run verify` (lint + contraste + testes + build + axe) verde (2026-07-29)
- [x] Conteúdo presente no HTML estático, não só shell (2026-07-28)
- [x] Página inicial passa em axe sem violação (2026-07-28)
- [x] Commit com gitmoji feito e `git push` executado (2026-07-29)
- [ ] Tabular na página inicial mostra foco visível (verificar no navegador)
