# aria-angular — Checklist Macro por Fase

Um marco por fase. As tarefas granulares vivem no `CHECKLIST.md` dentro da pasta de cada fase.
Toda tarefa concluída recebe a data no final: `(YYYY-MM-DD)`.

---

## Fase 0 — Ajuste da fonte

- [x] Defeitos estruturais do ARIA.html corrigidos (2026-07-28)
- [x] Aninhamento de tags validado, zero desbalanceamento (2026-07-28)
- [x] Perda de conteúdo verificada: 152/152 blocos de código, zero texto perdido (2026-07-28)
- [x] `fonte/ARIA.html` e `fonte/ARIA.original.html` no repo (2026-07-28)

## Pré-início

- [x] PO decidiu: **sem** FEW-AI-SERIAL, conteúdo em TypeScript tipado (2026-07-28)
- [x] PO decidiu: watermark zero-width **aplicar** (2026-07-28)
- [x] PO decidiu: domínio `*.vercel.app` (2026-07-28)

---

## Fase 1 — Fundação

- [ ] Workspace Angular 22 criado e rodando em `ng serve`
- [ ] `ng build` gera saída estática sem erro nem warning
- [ ] Tooling de qualidade instalado e passando (lint com regras a11y, format)
- [ ] Design tokens com as cores Angular, contraste verificado nos dois temas
- [ ] Primeiras ilustrações de acessibilidade em SVG
- [ ] Watermark zero-width aplicado no shell
- [ ] Logo adaptado do escudo Angular v17+, com atribuição CC BY 4.0
- [ ] Arquivos de open source no repo (LICENSE, CONTRIBUTING, CODE_OF_CONDUCT)
- [ ] PO decidiu sobre a mascote Angie
- [ ] PO confirmou origem/titularidade do conteúdo

## Fase 2 — Conteúdo

- [ ] As 7 partes (156 seções) extraídas de `fonte/ARIA.html`, sem perda
- [ ] Modelo de dados tipado e validado
- [ ] Os 14 checklists da doc extraídos para coleção própria

## Fase 3 — Shell e navegação

- [ ] Rotas das 7 partes navegando
- [ ] Skip link, header, sidebar e footer no ar
- [ ] Footer com o link do LinkedIn
- [ ] Foco move para o H1 a cada navegação e a rota é anunciada

## Fase 4 — Renderização da doc

- [ ] Todos os tipos de bloco renderizam (texto, lista, tabela, código, callout)
- [ ] Code blocks com botão copiar acessível
- [ ] Índice lateral da página com âncoras funcionando
- [ ] Documentação inteira legível de ponta a ponta
- [ ] Home landing com os 7 cards numerados
- [ ] OG image por rota, gerada no build

## Fase 5 — Busca

- [ ] Índice de busca gerado no build
- [ ] Busca retorna resultado relevante em todas as partes
- [ ] Combobox segue o padrão WAI-ARIA e funciona só com teclado
- [ ] Contagem de resultados anunciada por leitor de tela

## Fase 6 — Checklists interativos

- [ ] 14 checklists disponíveis e marcáveis
- [ ] Progresso persiste entre sessões
- [ ] Export do resultado funcionando
- [ ] Reset por checklist com confirmação

## Fase 7 — Auditor de snippet

- [ ] Parser aceita template Angular sem quebrar
- [ ] Conjunto de regras implementado e testado
- [ ] Cada achado traz severidade, critério WCAG e link para a seção da doc
- [ ] Resultado da análise anunciado por leitor de tela

## Fase 8 — Qualidade e a11y

- [ ] axe sem violação em todas as rotas
- [ ] Lighthouse Accessibility 100 em todas as rotas
- [ ] Jornada completa só com teclado
- [ ] Validado no TalkBack
- [ ] Validado no VoiceOver
- [ ] Contraste AA verificado nos dois temas
- [ ] `prefers-reduced-motion` respeitado

## Fase 9 — Deploy Vercel

- [ ] Todas as rotas prerenderizadas no build
- [ ] Projeto conectado e deploy verde
- [ ] Headers de segurança e cache configurados
- [ ] Site validado em produção (a11y + performance)
- [ ] Conformidade de marca e licença conferida
- [ ] Repositório público com licenças e CI verde
- [ ] `git push` feito e TODOs atualizados
