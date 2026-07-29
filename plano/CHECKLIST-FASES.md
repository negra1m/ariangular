# ariangular — Checklist Macro por Fase

Um marco por fase. As tarefas granulares vivem no `CHECKLIST.md` dentro da pasta de cada fase.
Toda tarefa concluída recebe a data no final: `(YYYY-MM-DD)`.

> **Estado em 2026-07-28.** O projeto **não está pronto**. Build, lint, contraste e axe
> passam — mas **nada foi visto rodando num navegador** e **não há deploy**. Tudo que está
> afirmado abaixo como concluído foi verificado por ferramenta, não por uso.

---

## Legenda

- `[x]` feito e verificado
- `[ ]` não feito
- `[~]` feito parcialmente — o que falta está no checklist da fase

---

## Fase 0 — Ajuste da fonte

- [x] Defeitos estruturais do ARIA.html corrigidos (2026-07-28)
- [x] Aninhamento de tags validado, zero desbalanceamento (2026-07-28)
- [x] Perda de conteúdo verificada: 152/152 blocos de código, zero texto perdido (2026-07-28)
- [x] `fonte/ARIA.html` e `fonte/ARIA.original.html` no repo (2026-07-28)
- [x] 4 seções novas sobre `@angular/aria` (2026-07-28)

## Pré-início

- [x] PO decidiu: **sem** FEW-AI-SERIAL, conteúdo em TypeScript tipado (2026-07-28)
- [x] PO decidiu: watermark zero-width **aplicar** (2026-07-28)
- [x] PO decidiu: domínio `*.vercel.app` (2026-07-28)
- [x] PO decidiu: uma URL por seção, 3 idiomas completos, landing curta (2026-07-28)
- [x] PO decidiu: auditor corrige o determinístico e pergunta o resto (2026-07-28)
- [x] Nome trocado para `ariangular` — `AngulARIA` colidia com `@angular/aria` oficial (2026-07-28)
- [ ] PO decidiu sobre a mascote Angie

---

## Fase 1 — Fundação `[~]`

- [x] Workspace Angular 22 criado e rodando (2026-07-28)
- [x] `ng build` gera saída estática sem erro (2026-07-28)
- [x] Tooling de qualidade instalado e passando (lint com regras a11y como erro) (2026-07-28)
- [x] Design tokens com as cores Angular, contraste verificado nos dois temas (2026-07-28)
- [x] Arquivos de open source no repo (LICENSE, CONTRIBUTING, CODE_OF_CONDUCT) (2026-07-28)
- [x] CI rodando lint + contraste + fonte + build + axe (2026-07-28)
- [ ] **Ilustrações de acessibilidade** — nada feito
- [ ] **Logo/favicon próprio** — ainda o favicon padrão do Angular CLI
- [ ] **Watermark zero-width** aplicado no shell
- [ ] Stops oficiais do gradiente Angular (hoje é aproximação)

## Fase 2 — Conteúdo `[~]`

- [x] As 7 partes (160 seções) extraídas de `fonte/ARIA.html`, sem perda (2026-07-28)
- [x] Modelo de dados tipado e multi-locale (2026-07-28)
- [x] Os 14 checklists da doc extraídos para coleção própria (2026-07-28)
- [x] Pipeline de i18n pronto (catálogo + builder por locale) (2026-07-28)
- [ ] **Tradução en** — 1.174 strings. `/en` serve português
- [ ] **Tradução zh** — idem
- [ ] **167 resumos escritos à mão** — hoje são heurística (primeiro parágrafo cortado)

## Fase 3 — Shell e navegação `[~]`

- [x] Rotas das 7 partes e das 160 seções navegando (2026-07-28)
- [x] Skip link, header e footer no ar (2026-07-28)
- [x] Footer com o link do LinkedIn e disclaimer de não-afiliação (2026-07-28)
- [x] Foco move para o H1 a cada navegação e a rota é anunciada (2026-07-28)
- [x] Troca de idioma preservando a página (2026-07-28)
- [x] Tema claro/escuro com toggle e sem flash (2026-07-28)
- [ ] **Menu mobile sem focus trap, sem ESC, sem retorno de foco**
- [ ] Navegação lateral por seção (hoje só a lista de partes no header)
- [ ] Verificado em navegador

## Fase 4 — Renderização da doc `[~]`

- [x] Todos os tipos de bloco renderizam (texto, lista, tabela, código, callout, leitura) (2026-07-28)
- [x] Code blocks com botão copiar acessível (2026-07-28)
- [x] Variante correto/evitar com rótulo textual, não só cor (2026-07-28)
- [x] Home landing com os 7 cards numerados (2026-07-28)
- [x] Paginação anterior/próxima atravessando partes (2026-07-28)
- [ ] **Índice lateral "Nesta página"** — não existe
- [ ] **Âncoras de seção** (link `#` nos headings) — não existem
- [ ] **OG image por rota** — não existe
- [ ] Ilustração por parte
- [ ] Documentação lida de ponta a ponta por uma pessoa

## Fase 5 — Busca `[~]`

- [x] Índice construído a partir do conteúdo do idioma (2026-07-28)
- [x] Busca sem acento, múltiplos termos com AND, ranking por peso (2026-07-28)
- [x] Combobox seguindo o padrão WAI-ARIA, foco preso no input (2026-07-28)
- [x] Contagem de resultados anunciada com debounce (2026-07-28)
- [x] Atalho `/` inerte dentro de campo de texto (2026-07-28)
- [ ] **Nunca exercitada em runtime** — só compilada
- [ ] Validação funcional das buscas de exemplo

## Fase 6 — Checklists interativos `[~]`

- [x] 14 checklists disponíveis e marcáveis (2026-07-28)
- [x] Progresso persiste em localStorage com guard de plataforma (2026-07-28)
- [x] Export em markdown funcionando (2026-07-28)
- [x] Reset com `<dialog>` nativo e retorno de foco (2026-07-28)
- [ ] **Reset global** na página de índice
- [ ] **Progresso visível na lista** do índice
- [ ] Export em texto simples
- [ ] Persistência verificada de verdade (recarga, fechar navegador)

## Fase 7 — Auditor `[~]`

- [x] Parser aceita template Angular (interpolação e blocos `@if`/`@for`) (2026-07-28)
- [x] 16 regras implementadas (2026-07-28)
- [x] Correção automática do que é determinístico (2026-07-28)
- [x] Pergunta o que depende de decisão humana, em vez de chutar (2026-07-28)
- [x] Cada achado traz severidade, WCAG e link para a seção (2026-07-28)
- [x] Limite da ferramenta declarado na própria página (2026-07-28)
- [ ] **8 regras restantes** das 24 planejadas
- [ ] **Nenhum teste** de regra (dispara / não dispara)
- [ ] Número de linha nos achados
- [ ] Limite de tamanho da entrada
- [ ] Nunca exercitado em runtime

## Fase 8 — Qualidade e a11y `[~]`

- [x] axe sem violação nas 553 páginas geradas (2026-07-28)
- [x] Contraste AA verificado nos dois temas, 36 pares (2026-07-28)
- [x] Lint de acessibilidade como erro, no CI (2026-07-28)
- [ ] **axe nos estados pós-interação** (menu aberto, busca com resultado, dialog aberto)
- [ ] **Lighthouse** — nunca rodado
- [ ] **Jornada completa só com teclado** — nunca percorrida
- [ ] **TalkBack** — nunca testado
- [ ] **VoiceOver** — nunca testado
- [ ] Zoom 200% e reflow em 320px
- [ ] `prefers-reduced-motion` verificado na prática
- [ ] **Nenhum teste automatizado** de componente ou de regra

## Fase 9 — Deploy Vercel `[ ]`

- [x] Todas as rotas prerenderizadas no build — 553 (2026-07-28)
- [x] `vercel.json` com headers de segurança e cache (2026-07-28)
- [x] `sitemap.xml` com hreflang e `robots.txt` gerados do build real (2026-07-28)
- [ ] **Projeto conectado à Vercel**
- [ ] **Deploy feito**
- [ ] Site validado em produção
- [ ] `TODO.md` do projeto e `14.AGENDA/TODO.md` atualizados
- [ ] Repositório renomeado para `ariangular` no GitHub

## Fase 10 — Polimento `[ ]`

Criada em 2026-07-28 com tudo que falta para terminar.
Ver [PLANO](fase-10-polimento/PLANO.md) · [CHECKLIST](fase-10-polimento/CHECKLIST.md) ·
[ROTEIRO DE TESTE](fase-10-polimento/ROTEIRO-TESTE.md)

- [ ] **A** — Ver o site funcionando num navegador `bloqueia tudo`
- [ ] **B** — Fechar os buracos conhecidos (menu mobile, busca, CSP)
- [ ] **C** — Completar funcionalidade (TOC, âncoras, 8 regras do auditor)
- [ ] **D** — Testes automatizados (regras, busca, axe pós-interação)
- [ ] **E** — Identidade visual (8 ilustrações, favicon, watermark)
- [ ] **F** — Conteúdo (167 resumos, EAA, UX cognitiva)
- [ ] **G** — Teste humano: teclado, TalkBack, VoiceOver, Lighthouse `PO executa`
- [ ] **H** — Deploy na Vercel
- [ ] **I** — Tradução `en`

### Decisões do PO (2026-07-28)

- Ilustrações: eu desenho em SVG geométrico
- PO tem Android e iPhone — roteiro escrito por mim, executado por ele
- **Só `en` agora**; `zh` sai do build até haver tradução revisada
- Lançamento quando `/pt` estiver polido

---

## Resumo honesto

| | |
|---|---|
| Verificado por ferramenta | lint, contraste (36 pares), axe (553 páginas), build (553 rotas), integridade da fonte |
| **Nunca verificado** | navegador, teclado, leitor de tela, Lighthouse, produção |
| Fases fechadas | nenhuma |
| Maior risco | o site nunca foi visto funcionando |
