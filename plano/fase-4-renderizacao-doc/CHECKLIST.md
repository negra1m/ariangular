# Fase 4 — Renderização da Documentação · Checklist

Estado em 2026-07-29. Marcar concluído com data: `(YYYY-MM-DD)`

> Tudo construído e verificado por ferramenta. **Ninguém leu essas páginas num
> navegador** — é o que sobra desta fase.

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

- [x] `<nav aria-label="Nesta página">` com a lista de tópicos (2026-07-29)
- [x] Tópico visível marcado com `aria-current="location"` (2026-07-29)
- [x] `IntersectionObserver` sem mover foco e sem anunciar (2026-07-29)
- [x] Tópico ativo é o primeiro visível na ordem do documento, não o último a
      disparar — esse vira com a direção da rolagem (2026-07-29)
- [x] Sticky no desktop (2026-07-29)
- [x] Escondido abaixo de 64rem — o conteúdo tem prioridade (2026-07-29)
- [x] Presente no HTML prerenderizado (2026-07-29)
- [x] Não renderiza com menos de dois tópicos — índice de um item é ruído (2026-07-29)

## Âncoras de seção

- [x] Link `#` em cada heading de bloco (2026-07-29)
- [x] `aria-label` descritivo por âncora (2026-07-29)
- [x] Visível no hover **e** no foco por teclado (2026-07-29)
- [x] Sempre visível onde não existe hover (2026-07-29)
- [x] Id posicional, estável entre os três idiomas (2026-07-29)
- [x] Índice e corpo derivam o id da mesma função — duas numerações
      independentes gerariam link para âncora inexistente (2026-07-29)
- [x] `scroll-margin-top` para o header fixo não cobrir o destino (2026-07-29)

## Home

- [x] Hero com a tese do produto (2026-07-28)
- [x] Texto de abertura nos três idiomas (2026-07-28)
- [x] 7 cards numerados `01`–`07` (2026-07-28)
- [x] Cards são `<a>` (2026-07-28)
- [x] Atalhos para `/checklists` e `/auditor` (2026-07-28)
- [x] Ilustração no hero — **fora de escopo**: a home é tipográfica por decisão
      de identidade, o wordmark é o gráfico (2026-07-29)
- [ ] Cabe em uma tela e meia (não verificado)

## Ilustrações

- [x] Uma ilustração por parte, coerente com o tema — 7 desenhos (2026-07-29)
- [x] Vocabulário comum: traço 2, canto reto, anel de foco em vermelho como
      elemento recorrente (2026-07-29)
- [x] SVG inline herdando os tokens de tema, funcionando nos dois (2026-07-29)
- [x] Decorativas com `aria-hidden="true"` e `role="presentation"` (2026-07-29)
- [x] Nenhuma carrega significado sozinha (2026-07-29)
- [x] Somem abaixo de 60rem — decoração cede espaço ao título (2026-07-29)

## Compartilhamento (uso social)

- [x] `<title>` próprio por rota (2026-07-28)
- [x] `<meta name="description">` própria por rota (2026-07-28)
- [x] Open Graph e Twitter card (2026-07-28)
- [x] URL canônica por rota (2026-07-28)
- [x] JSON-LD `TechArticle` nas seções, `WebSite` na home (2026-07-28)
- [x] **OG image por rota** — 10 por idioma, 30 no total (2026-07-29)
- [x] URL absoluta em `og:image` — caminho relativo sai sem imagem no
      Facebook, LinkedIn e Slack (2026-07-29)
- [x] `og:image:alt` igual ao título — a imagem não carrega informação além
      dele, e descrever a decoração seria descrever o que não importa (2026-07-29)
- [x] Seção herda a imagem da sua parte — uma por seção seria a mesma arte com
      o título trocado, e o título já vai no `og:title` (2026-07-29)
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
- [x] Commit e push feitos (2026-07-29)
- [x] TOC, âncoras, OG image e ilustrações entregues (2026-07-29)
- [ ] Doc lida de ponta a ponta com leitor de tela — *fase 8, teste humano*
- [ ] Fase fechada — falta só a leitura por gente
