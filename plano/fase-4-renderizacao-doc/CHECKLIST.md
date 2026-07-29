# Fase 4 — Renderização da Documentação · Checklist

Estado em 2026-07-28. Marcar concluído com data: `(YYYY-MM-DD)`

> Renderiza e passa no axe. **Ninguém leu essas páginas num navegador.**

## Página de seção

- [x] Componente `SectionPage` criado (2026-07-28)
- [x] Exatamente um `<h1>` por página (2026-07-28)
- [x] `<h1>` com `tabindex="-1"` (alvo do foco pós-rota) (2026-07-28)
- [x] Breadcrumb com `aria-current="page"` no item atual (2026-07-28)
- [x] Paginação anterior/próxima atravessando a fronteira entre partes (2026-07-28)
- [x] Metadados por rota (title, description, OG, canonical, hreflang, JSON-LD) (2026-07-28)
- [x] axe confirma hierarquia de heading correta (2026-07-28)

## Página de parte

- [x] Componente `PartPage` criado (2026-07-28)
- [x] Numeral grande decorativo, com `aria-hidden` (2026-07-28)
- [x] Lista das seções com resumo (2026-07-28)
- [x] Cards são `<a>`, nunca `<div (click)>` (2026-07-28)

## Componentes de bloco

- [x] `paragraph` — `<p>`, largura limitada por `--measure` (2026-07-28)
- [x] `heading` — nível calculado, nunca fixo (2026-07-28)
- [x] `list` — `<ul>` e `<ol>` reais (2026-07-28)
- [x] `table`:
  - [x] `<th scope="col">` em todos os cabeçalhos (2026-07-28)
  - [x] Container rolável com `tabindex="0"` (2026-07-28)
  - [x] Container com `role="region"` e `aria-label` composto pelo título da seção (2026-07-28)
- [x] `code` — ver abaixo (2026-07-28)
- [x] `callout` — ver abaixo (2026-07-28)
- [x] `reading` — bloco de "como o leitor anuncia", com rótulo próprio (2026-07-28)

## Code block

- [x] `<pre><code>` (2026-07-28)
- [x] Botão copiar é `<button>` nativo (2026-07-28)
- [x] Botão copiar com `aria-label` incluindo o título da seção (2026-07-28)
- [x] Cópia confirmada via `LiveAnnouncer` (2026-07-28)
- [x] Variante correto/evitar com **rótulo textual** visível (2026-07-28)
- [x] Significado não depende só de cor — texto + ícone + borda (2026-07-28)
- [x] Ícone da variante com `aria-hidden="true"` (2026-07-28)
- [x] Falha de clipboard tratada sem derrubar a página (2026-07-28)
- [ ] Sem highlight de sintaxe — decisão consciente: nenhum tema pronto passa
      4.5:1 em todos os tokens nos dois temas sem trabalho de validação
- [ ] Cópia verificada em navegador

## Callout

- [x] Tons `info`, `warning` e `success` (2026-07-28)
- [x] `<aside>` com `aria-label` do tom (2026-07-28)
- [x] Rótulo textual do tom visível (2026-07-28)
- [x] **Sem** `role="alert"` e **sem** `aria-live` — é conteúdo, não notificação (2026-07-28)
- [x] Conteúdo interno renderizado sem recursão (standalone não pode se auto-importar) (2026-07-28)

## Índice da página (TOC)

- [ ] **`<nav aria-label="Nesta página">` — não existe**
- [ ] Seção visível marcada com `aria-current="location"`
- [ ] `IntersectionObserver` sem mover foco e sem anunciar
- [ ] Sticky no desktop, colapsável no mobile
- [ ] Presente no HTML prerenderizado

## Âncoras de seção

- [ ] **Link de âncora nos headings — não existe**
- [ ] `aria-label` descritivo por âncora
- [ ] Visível no hover **e** no foco por teclado

## Home

- [x] Hero com a tese do produto (2026-07-28)
- [x] Texto de abertura nos três idiomas (2026-07-28)
- [x] 7 cards numerados `01`–`07` (2026-07-28)
- [x] Cards são `<a>` (2026-07-28)
- [x] Atalhos para `/checklists` e `/auditor` (2026-07-28)
- [ ] Ilustração no hero
- [ ] Cabe em uma tela e meia (não verificado)

## Ilustrações

- [ ] **Nenhuma ilustração feita.** O pedido era "figuras de acessibilidade e
      carinho por todo ele"
- [ ] Ilustração por parte, coerente com o tema
- [ ] SVG inline herdando `currentColor`, funcionando nos dois temas
- [ ] Decorativas com `aria-hidden="true"`

## Compartilhamento (uso social)

- [x] `<title>` próprio por rota (2026-07-28)
- [x] `<meta name="description">` própria por rota (2026-07-28)
- [x] Open Graph e Twitter card (2026-07-28)
- [x] URL canônica por rota (2026-07-28)
- [x] JSON-LD `TechArticle` nas seções, `WebSite` na home (2026-07-28)
- [ ] **OG image por rota** — não existe. Compartilhar hoje mostra card sem imagem
- [ ] Seção compartilhada verificada abrindo sozinha

## Conferência de conteúdo

- [x] Contagem de seções e blocos bate com a fonte (2026-07-28)
- [ ] Fundamentos lida e conferida por uma pessoa
- [ ] ARIA Completo lida e conferida
- [ ] Formulários lida e conferida
- [ ] Componentes Interativos lida e conferida
- [ ] Angular/Material/CDK lida e conferida
- [ ] TalkBack e VoiceOver lida e conferida
- [ ] QA e WCAG lida e conferida

## Fechamento

- [x] axe sem violação em todas as rotas de doc (2026-07-28)
- [x] `ng lint` e `ng build` passando (2026-07-28)
- [x] Commit e push feitos (2026-07-28)
- [ ] Doc lida de ponta a ponta com leitor de tela
- [ ] Fase fechada — bloqueada por TOC, âncoras, OG image e ilustrações
