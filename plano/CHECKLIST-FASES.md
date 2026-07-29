# ariangular — Checklist Macro por Fase

Estado em **2026-07-29**.

> **Onde o projeto está:** tudo que dá para escrever e verificar por ferramenta
> está feito e passando. O que falta não é código — é **olhar num navegador,
> testar com gente e publicar**.

---

## Legenda

- `[x]` feito e verificado
- `[ ]` não feito
- `[~]` parcial

---

## Verificação atual

```
lint         limpo, regras de a11y como erro
testes       92 passando
contraste    38 pares, AA nos dois temas
build        559 rotas prerenderizadas, saída estática
axe          zero violações A/AA em 559 páginas
             + 7 estados pós-interação (busca, dialog, auditor)
CSP          sem unsafe-inline, 5 hashes calculados no build
idiomas      pt, en e zh — 1.246 strings cada, 100%
```

Tudo isso roda em `npm run verify` e quebra o build.

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

## Fase 2 — Conteúdo `[x]`

- [x] 162 seções em TypeScript tipado (2026-07-29)
- [x] 14 checklists, 110 itens (2026-07-28)
- [x] Pipeline de i18n completo (2026-07-28)
- [x] **Tradução `en`** — 1.246 strings, 100% (2026-07-28)
- [x] **Tradução `zh`** — 1.246 strings, 100% (2026-07-29)
- [x] 169 resumos escritos à mão nos três idiomas (2026-07-29)
- [ ] Revisão por falante nativo — declarada como pendência no README

## Fase 3 — Shell e navegação `[~]`

- [x] Rotas, guard de locale, 404, raiz com escolha de idioma (2026-07-29)
- [x] Header enxuto, drawer lateral, rodapé com mapa do site (2026-07-29)
- [x] Drawer prende foco, fecha no ESC, devolve o foco, inert atrás (2026-07-29)
- [x] Foco move para o h1 e a rota é anunciada (2026-07-28)
- [x] Tema e idioma preservando a página (2026-07-29)
- [ ] Verificado em navegador

## Fase 4 — Renderização `[x]`

- [x] 7 tipos de bloco, variante de código com rótulo textual (2026-07-28)
- [x] Home, página de parte, página de seção (2026-07-29)
- [x] Barra lateral com as seções da parte (2026-07-29)
- [x] Paginação atravessando partes (2026-07-28)
- [x] Índice "nesta página" com `aria-current="location"` (2026-07-29)
- [x] Âncora por tópico, id estável entre idiomas (2026-07-29)
- [x] OG image por rota e por idioma — 30 imagens (2026-07-29)
- [x] Ilustração por parte — 7 desenhos decorativos (2026-07-29)

## Fase 5 — Busca `[x]`

- [x] Motor próprio, sem acento, AND, ranking por peso (2026-07-28)
- [x] Combobox WAI-ARIA, foco preso no input (2026-07-28)
- [x] Anúncio com debounce, atalho `/` guardado (2026-07-28)
- [x] Painel prende foco e devolve ao fechar (2026-07-29)
- [x] **18 testes** de ranking, acento, AND e cobertura (2026-07-29)
- [x] axe com o painel aberto, com e sem resultados (2026-07-29)

## Fase 6 — Checklists `[x]`

- [x] 14 checklists, checkbox nativo, progresso persistido (2026-07-28)
- [x] `<dialog>` nativo, foco devolvido (2026-07-28)
- [x] Reset global com confirmação (2026-07-29)
- [x] Progresso visível na lista do índice (2026-07-29)
- [x] Export em Markdown e em texto, com assinatura ASCII (2026-07-29)
- [x] axe com o dialog aberto e com itens marcados (2026-07-29)

## Fase 7 — Auditor `[x]`

- [x] **24 regras**, auto-fix do determinístico (2026-07-29)
- [x] Pergunta o que depende de decisão humana, sem chutar (2026-07-28)
- [x] Número de linha e limite de entrada com contador (2026-07-29)
- [x] **55 testes**, cada regra nos dois sentidos (2026-07-29)
- [x] Limite da ferramenta declarado na própria página (2026-07-28)
- [x] axe com achados, perguntas pendentes e erro de parsing (2026-07-29)

## Fase 8 — Qualidade `[~]`

- [x] axe em todas as páginas geradas, no CI (2026-07-28)
- [x] axe nos estados pós-interação — 7 casos (2026-07-29)
- [x] Contraste por script, no CI (2026-07-28)
- [x] 92 testes, no CI (2026-07-29)
- [x] Teste que prova que um idioma publicado é traduzido de verdade (2026-07-29)
- [ ] **Teclado** — nunca percorrido
- [ ] **TalkBack** — nunca testado
- [ ] **VoiceOver** — nunca testado
- [ ] **Lighthouse** — nunca rodado
- [ ] Zoom 200%, reflow 320px

## Fase 9 — Deploy `[~]`

- [x] 559 rotas prerenderizadas, sem servidor (2026-07-29)
- [x] `vercel.json` com CSP endurecida e cache (2026-07-29)
- [x] Sitemap e robots das rotas reais — 558 URLs, 3 idiomas (2026-07-29)
- [x] `README.md` e `TODO.md` (2026-07-29)
- [ ] **Projeto conectado à Vercel**
- [ ] **Deploy executado**
- [ ] Search Console e Bing

## Fase 10 — Polimento `[~]`

- [~] **A** — Defeitos dos prints corrigidos; falta abrir num navegador
- [x] **B** — Menu, busca e CSP fechados (2026-07-29)
- [x] **C** — Funcionalidade completa (2026-07-29)
- [x] **D** — Testes, incluindo axe pós-interação (2026-07-29)
- [x] **E** — Favicon, watermark, ilustrações e OG (2026-07-29)
- [x] **F** — Seções novas e os 169 resumos nos três idiomas (2026-07-29)
- [ ] **G** — Teste humano `você executa`
- [~] **H** — Configuração pronta; falta conectar e publicar
- [x] **I** — Traduções `en` e `zh` completas (2026-07-29)

---

## O que falta, em uma frase

**Olhar num navegador, testar com gente e publicar.**

O resto está feito e verificado. Roteiro do teste humano (~95 min) em
[fase-10-polimento/ROTEIRO-TESTE.md](fase-10-polimento/ROTEIRO-TESTE.md).
