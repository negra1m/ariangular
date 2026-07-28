# Fase 2 — Conteúdo · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

## Pré-requisito

- [x] PO decidiu: TypeScript tipado, sem FEW-AI-SERIAL (2026-07-28)
- [x] Fonte corrigida e validada em `fonte/ARIA.html` (2026-07-28)

## Modelo de dados

- [ ] Tipo `Part` definido
- [ ] Tipo `Section` definido
- [ ] União `Block` definida com todos os tipos:
  - [ ] `paragraph`
  - [ ] `heading`
  - [ ] `list`
  - [ ] `table`
  - [ ] `code` (com `variant: correct | wrong | neutral`)
  - [ ] `callout` (com `tone: info | warning | success`)
  - [ ] `reading`
- [ ] Tipo `Checklist` definido
- [ ] `id` de seção reaproveitado de `fonte/ARIA.html`, não gerado de novo

## Arquivos de conteúdo

- [ ] `src/content/types.ts`
- [ ] `src/content/parts/` com um arquivo por parte
- [ ] `src/content/checklists.ts`
- [ ] `src/content/index.ts` agregando e exportando
- [ ] Tipagem valida a estrutura em tempo de compilação
- [ ] Nada de parse em runtime

## Extração por parte

- [ ] **Formulários Acessíveis** (7 seções) — extraída e conferida
- [ ] **Fundamentos de Acessibilidade Angular** (14 seções) — extraída e conferida
- [ ] **ARIA Completo para Angular** (27 seções) — extraída e conferida
- [ ] **Componentes Interativos e Estruturas Complexas** (33 seções) — extraída e conferida
- [ ] **Angular, Angular Material e Angular CDK A11y** (35 seções) — extraída e conferida
- [ ] **TalkBack, VoiceOver e Testes Reais** (21 seções) — extraída e conferida
- [ ] **QA, Auditoria e WCAG 2.2** (19 seções) — extraída e conferida
- [ ] Total: 156 seções

## Fidelidade à fonte

- [ ] Nenhum bloco de código perdeu ou ganhou caractere
- [ ] Contagem de blocos de código bate com a fonte (152)
- [ ] Contagem de tabelas, linhas e células bate com a fonte
- [ ] `scripts/diff-content.js` adaptado para conferir a extração
- [ ] Conferência rodada e sem perda

## Checklists extraídos

- [ ] Checklist ARIA
- [ ] Checklist Modal
- [ ] Checklist MatDialog
- [ ] Checklist de Componentes
- [ ] Checklist Angular
- [ ] Checklist para TalkBack
- [ ] Checklist para VoiceOver
- [ ] Checklist Final TalkBack e VoiceOver
- [ ] Checklist de Story
- [ ] Checklist de Desenvolvimento
- [ ] Checklist de Pull Request
- [ ] Checklist de QA
- [ ] Definition of Done Acessível
- [ ] Checklist para Revisão de Tela Nova
- [ ] Todo checklist aponta para a seção de origem

## Dados complementares

- [ ] Tabela de critérios WCAG (1.1.1 a 4.1.2) extraída como dado consultável
- [ ] Tabela de severidade (Crítico/Alto/Médio/Baixo) extraída
- [ ] Template de bug extraído
- [ ] Lista de "Bugs Mais Comuns em Produção" extraída — alimenta a Fase 7

## Validação

- [ ] Teste falha se alguma seção estiver sem `id`
- [ ] Teste falha se alguma seção estiver sem título
- [ ] Teste falha se alguma seção estiver sem blocos
- [ ] Teste falha se houver `id` de seção duplicado
- [ ] Contagem de seções bate com a fonte (156)
- [ ] Serviço `ContentService` expõe partes, seções e checklists

## Fechamento da fase

- [ ] `ng lint` e testes passando
- [ ] Commit com gitmoji feito e `git push` executado
