# Fase 4 — Renderização da Documentação · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

## Página de parte

- [ ] Componente `PartPage` criado
- [ ] Exatamente um `<h1>` por página
- [ ] `<h1>` com `tabindex="-1"` (alvo do foco pós-rota)
- [ ] Cada seção em `<section>` com `<h2 [id]>`
- [ ] Hierarquia de heading gerada sem pular nível
- [ ] Teste que falha se a hierarquia de heading pular nível

## Componentes de bloco

- [ ] `BlockParagraph` — `<p>`, largura máxima ~80 caracteres
- [ ] `BlockHeading` — nível calculado dinamicamente
- [ ] `BlockList` — `<ul>` e `<ol>` reais
- [ ] `BlockTable`:
  - [ ] `<caption>` presente
  - [ ] `<th scope="col">` em todos os cabeçalhos
  - [ ] Container rolável com `tabindex="0"`
  - [ ] Container rolável com `role="region"` e `aria-label`
  - [ ] Sem tabela feita com `<div>`
- [ ] `BlockCode` — ver seção abaixo
- [ ] `BlockCallout` — ver seção abaixo
- [ ] `BlockReading` — ver seção abaixo

## Code block

- [ ] `<pre><code>` com linguagem indicada
- [ ] Botão copiar é `<button>` nativo
- [ ] Botão copiar com `aria-label` descritivo e único na página
- [ ] Cópia confirmada via `LiveAnnouncer`
- [ ] Variante correto/errado com rótulo **textual** visível
- [ ] Significado não depende só de cor (WCAG 1.4.1)
- [ ] Ícone da variante com `aria-hidden="true"`
- [ ] `<pre>` não é focável por padrão
- [ ] Código longo em container rolável com `tabindex="0"` e `role="region"` rotulado
- [ ] Se houver highlight: todos os tokens passam 4.5:1 nos dois temas

## Callout

- [ ] Tom `info` implementado
- [ ] Tom `warning` implementado
- [ ] Tom `success` implementado
- [ ] `<aside>` com rótulo acessível
- [ ] Rótulo textual do tom visível
- [ ] Ícone com `aria-hidden="true"`
- [ ] **Sem** `role="alert"` e **sem** `aria-live`

## Bloco de leitura de tela

- [ ] Renderiza com rótulo "Como o leitor de tela anuncia:"
- [ ] Visualmente distinto de code block comum
- [ ] Sem ARIA especial — é conteúdo normal

## Índice da página (TOC)

- [ ] `<nav aria-label="Nesta página">` com lista de links
- [ ] Âncoras levam à seção correta
- [ ] Seção visível marcada com `aria-current="location"`
- [ ] `IntersectionObserver` **não** move foco
- [ ] `IntersectionObserver` **não** anuncia nada
- [ ] Sticky no desktop
- [ ] Colapsável no mobile, com `aria-expanded` correto
- [ ] TOC presente no HTML prerenderizado

## Âncoras de seção

- [ ] Link de âncora em cada `h2`
- [ ] `aria-label` descritivo por âncora
- [ ] Visível no hover **e** no foco por teclado
- [ ] Copiar endereço da seção funcionando

## Home — landing curta

- [ ] Hero com a tese do produto
- [ ] Ilustração no hero
- [ ] Explica em 5 segundos para quem nunca ouviu falar
- [ ] 7 cards numerados `01`–`07`
- [ ] Cards são `<a>`, nunca `<div (click)>`
- [ ] Atalho para `/checklists`
- [ ] Atalho para `/auditor`
- [ ] Cabe em uma tela e meia

## Numeração e ilustrações

- [ ] Número da parte em escala grande na abertura
- [ ] Número é decorativo para o leitor de tela
- [ ] Ilustração por parte, coerente com o tema
- [ ] Ilustrações com `aria-hidden="true"`
- [ ] Ilustrações funcionam nos dois temas

## Compartilhamento (uso social)

- [ ] `<title>` próprio por rota
- [ ] `<meta name="description">` própria por rota
- [ ] OG image por rota, gerada no build
- [ ] Twitter/X card configurado
- [ ] URL canônica por rota
- [ ] Seção compartilhada faz sentido aberta sozinha

## Conferência de conteúdo

- [ ] Fundamentos — conferida contra o original
- [ ] ARIA Completo — conferida contra o original
- [ ] Formulários — conferida contra o original
- [ ] Componentes Interativos — conferida contra o original
- [ ] Angular/Material/CDK — conferida contra o original
- [ ] TalkBack e VoiceOver — conferida contra o original
- [ ] QA e WCAG — conferida contra o original

## Fechamento da fase

- [ ] axe sem violação em todas as rotas de doc
- [ ] Doc lida de ponta a ponta com leitor de tela, sem trecho confuso
- [ ] `ng lint` e `ng build` passando
- [ ] Commit com gitmoji feito e `git push` executado
