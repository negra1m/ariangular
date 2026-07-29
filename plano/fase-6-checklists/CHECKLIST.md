# Fase 6 — Checklists Interativos · Checklist

Estado em 2026-07-29. Marcar concluído com data: `(YYYY-MM-DD)`

> Tudo implementado; marcação e dialog cobertos por teste com axe.
> **Persistência e export nunca foram exercitados num navegador.**

## Página de índice `/:locale/checklists`

- [x] Os 14 checklists listados (2026-07-28)
- [x] Agrupados por momento de uso, não por ordem alfabética (2026-07-28)
- [x] Cards são `<a>` reais (2026-07-28)
- [x] Contagem de itens por checklist (2026-07-28)
- [x] **Progresso de cada um visível na lista** (2026-07-28)
- [x] **Reset global** com confirmação (2026-07-28)

## Página de checklist `/:locale/checklists/:id`

- [x] Rota com parâmetro funcionando, 14 páginas por idioma prerenderizadas (2026-07-28)
- [x] `<fieldset>` com `<legend>` (2026-07-28)
- [x] `<input type="checkbox">` **nativo** (2026-07-28)
- [x] `<label for>` associado a cada checkbox (2026-07-28)
- [x] Nenhum checkbox custom com `role="checkbox"` em `<div>` (2026-07-28)
- [x] Estilização por `accent-color`, mantendo o controle nativo (2026-07-28)
- [x] `<progress>` nativo com `aria-label` (2026-07-28)
- [x] Link para a seção da doc de origem (2026-07-28)
- [x] Ação "marcar tudo" (2026-07-28)
- [x] Ação "desmarcar tudo" (2026-07-28)
- [x] Ação "exportar" (2026-07-28)
- [ ] Foco visível em cada checkbox — por verificar

## Os 14 checklists

- [x] Todos disponíveis, 110 itens no total (2026-07-28)
- [x] Cada um aponta para a seção de origem (2026-07-28)
- [x] Classificados por etapa: refinamento, desenvolvimento, PR, QA, fechamento (2026-07-28)

## Persistência

- [x] `ProgressService` criado (2026-07-28)
- [x] Chave versionada `ariangular:progress:v1` (2026-07-28)
- [x] Guard de plataforma em todo acesso a localStorage (2026-07-28)
- [x] `ng build` (prerender) não quebra por causa de localStorage (2026-07-28)
- [x] Falha de escrita tratada com try/catch (2026-07-28)
- [x] Aviso na interface quando o progresso não puder ser salvo (2026-07-28)
- [x] `id` de item estável, nunca índice de array (2026-07-28)
- [x] Escrita com debounce (2026-07-28)
- [ ] **Progresso sobrevive a recarga** — por verificar
- [ ] **Progresso sobrevive a fechar o navegador** — por verificar

## Anúncio

- [x] Progresso anunciado via `LiveAnnouncer` (2026-07-28)
- [x] Debounce de 600ms (2026-07-28)
- [ ] Sem leitura duplicada junto do anúncio nativo do checkbox — por verificar
- [ ] Testado com leitor de tela real

## Export

- [x] Export em Markdown com `- [x]` / `- [ ]` (2026-07-28)
- [x] Cabeçalho com nome do checklist e contagem (2026-07-28)
- [x] Copiar para área de transferência (2026-07-28)
- [x] Confirmação da cópia anunciada (2026-07-28)
- [x] **Export em texto simples**, com assinatura em ASCII (2026-07-28)
- [x] Data no cabeçalho do export, no formato do idioma (2026-07-28)
- [x] Assinatura em bloco de código no Markdown, para preservar o alinhamento
      dos caracteres de caixa (2026-07-28)
- [ ] Markdown gerado colado num PR e conferido

## Reset

- [x] Botão de reset por checklist (2026-07-28)
- [x] `<dialog>` nativo com `showModal()` — role, aria-modal, foco preso e ESC
      vêm implementados e testados pelo navegador (2026-07-28)
- [x] `aria-labelledby` apontando para o título do dialog (2026-07-28)
- [x] Foco devolvido a quem abriu, no evento `close` (2026-07-28)
- [x] Reset global na página de índice (2026-07-28)
- [x] axe com o dialog aberto — zero violação (2026-07-29)
- [ ] **Comportamento do dialog verificado à mão** — abre, prende foco, ESC,
      devolve foco

## Fechamento

- [x] axe sem violação nas rotas de checklist (2026-07-29)
- [x] axe com itens parcialmente marcados (2026-07-29)
- [x] `ng lint` e `ng build` passando (2026-07-29)
- [x] Commit e push feitos (2026-07-29)
- [ ] Toda interação operável só com teclado, num navegador
- [ ] Fase fechada — falta a verificação humana
