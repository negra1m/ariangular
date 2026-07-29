# ariangular — Checklist Macro por Fase

Estado em **2026-07-29**.

> **Onde o projeto está:** todo o código que dá para escrever e verificar por ferramenta
> está feito e passando. O que falta não é código — é **olhar, testar com gente e
> publicar**. E traduzir.

---

## Legenda

- `[x]` feito e verificado
- `[ ]` não feito
- `[~]` parcial

---

## Verificação atual

```
lint         limpo, regras de a11y como erro
testes       77 passando
contraste    38 pares, AA nos dois temas
build        187 rotas prerenderizadas, saída estática
axe          zero violações A/AA em 187 páginas
CSP          sem unsafe-inline, 5 hashes calculados no build
```

Tudo isso roda no CI e quebra o build.

---

## Fase 0 — Ajuste da fonte `[x]`

- [x] Defeitos estruturais corrigidos (2026-07-28)
- [x] 152/152 blocos de código idênticos, zero texto perdido (2026-07-28)
- [x] 4 seções sobre `@angular/aria` (2026-07-28)
- [x] European Accessibility Act e acessibilidade cognitiva (2026-07-29)
- [x] 162 seções, validadas no CI (2026-07-29)

## Fase 1 — Fundação `[x]`

- [x] Angular 22 zoneless, saída estática (2026-07-28)
- [x] Lint com regras de a11y como erro (2026-07-28)
- [x] Tokens dark-first, contraste verificado por script (2026-07-29)
- [x] Licenças, CONTRIBUTING, CODE_OF_CONDUCT, issue template (2026-07-28)
- [x] CI: lint + contraste + testes + fonte + build + axe (2026-07-29)
- [x] Favicon próprio, escudo adaptado do Angular (2026-07-29)
- [x] Watermark zero-width, com testes (2026-07-29)
- [ ] Stops oficiais do gradiente Angular — hoje é aproximação

## Fase 2 — Conteúdo `[~]`

- [x] 162 seções em TypeScript tipado (2026-07-29)
- [x] 14 checklists, 110 itens (2026-07-28)
- [x] Pipeline de i18n completo (2026-07-28)
- [ ] **Tradução `en`** — 1.246 strings
- [ ] **Tradução `zh`**
- [ ] 167 resumos escritos à mão (hoje são o primeiro parágrafo)

## Fase 3 — Shell e navegação `[~]`

- [x] Rotas, guard de locale, 404, raiz com escolha de idioma (2026-07-29)
- [x] Header enxuto, drawer lateral, rodapé com mapa do site (2026-07-29)
- [x] Drawer prende foco, fecha no ESC, devolve o foco, inert atrás (2026-07-29)
- [x] Foco move para o h1 e a rota é anunciada (2026-07-28)
- [x] Tema e idioma preservando a página (2026-07-29)
- [ ] Verificado em navegador

## Fase 4 — Renderização `[~]`

- [x] 7 tipos de bloco, variante de código com rótulo textual (2026-07-28)
- [x] Home, página de parte, página de seção (2026-07-29)
- [x] Barra lateral com as seções da parte (2026-07-29)
- [x] Paginação atravessando partes (2026-07-28)
- [ ] OG image por rota
- [ ] Ilustração por parte

## Fase 5 — Busca `[x]`

- [x] Motor próprio, sem acento, AND, ranking por peso (2026-07-28)
- [x] Combobox WAI-ARIA, foco preso no input (2026-07-28)
- [x] Anúncio com debounce, atalho `/` guardado (2026-07-28)
- [x] Painel prende foco e devolve ao fechar (2026-07-29)
- [x] **18 testes** de ranking, acento, AND e cobertura (2026-07-29)

## Fase 6 — Checklists `[x]`

- [x] 14 checklists, checkbox nativo, progresso persistido (2026-07-28)
- [x] `<dialog>` nativo, foco devolvido (2026-07-28)
- [x] Reset global com confirmação (2026-07-29)
- [x] Progresso visível na lista do índice (2026-07-29)
- [x] Export em Markdown e em texto, com assinatura ASCII (2026-07-29)

## Fase 7 — Auditor `[x]`

- [x] **24 regras**, auto-fix do determinístico (2026-07-29)
- [x] Pergunta o que depende de decisão humana, sem chutar (2026-07-28)
- [x] Número de linha e limite de entrada com contador (2026-07-29)
- [x] **55 testes**, cada regra nos dois sentidos (2026-07-29)
- [x] Limite da ferramenta declarado na própria página (2026-07-28)

## Fase 8 — Qualidade `[~]`

- [x] axe em todas as páginas geradas, no CI (2026-07-28)
- [x] Contraste por script, no CI (2026-07-28)
- [x] 77 testes, no CI (2026-07-29)
- [ ] axe nos estados pós-interação
- [ ] **Teclado** — nunca percorrido
- [ ] **TalkBack** — nunca testado
- [ ] **VoiceOver** — nunca testado
- [ ] **Lighthouse** — nunca rodado
- [ ] Zoom 200%, reflow 320px

## Fase 9 — Deploy `[~]`

- [x] 187 rotas prerenderizadas, sem servidor (2026-07-29)
- [x] `vercel.json` com CSP endurecida e cache (2026-07-29)
- [x] Sitemap e robots das rotas reais (2026-07-29)
- [x] `README.md` e `TODO.md` (2026-07-29)
- [ ] **Projeto conectado à Vercel**
- [ ] **Deploy executado**
- [ ] Search Console e Bing

## Fase 10 — Polimento `[~]`

- [ ] **A** — Ver funcionando `bloqueia`
- [x] **B** — Menu, busca e CSP fechados (2026-07-29)
- [x] **C** — Funcionalidade completa (2026-07-29)
- [~] **D** — Testes de serviço feitos; falta axe pós-interação
- [~] **E** — Favicon e watermark feitos; faltam ilustrações por parte
- [~] **F** — 2 seções novas feitas; faltam os 167 resumos
- [ ] **G** — Teste humano `você executa`
- [~] **H** — Configuração pronta; falta conectar e publicar
- [ ] **I** — Tradução `en`

---

## O que falta, em uma frase

**Olhar, testar com gente, publicar e traduzir.**

O resto está feito e verificado.
