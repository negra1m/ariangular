# Fase 10 — Polimento · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

> **Estado:** tudo que é meu está feito. O que resta é o bloco G (teste humano)
> e o bloco H (deploy) — os dois dependem de você, e o roteiro está pronto em
> [ROTEIRO-TESTE.md](ROTEIRO-TESTE.md).

---

## A — Ver funcionando `bloqueia tudo`

Feito parcialmente por prints, não por navegador aberto. Os quatro defeitos de
layout visíveis nos prints foram corrigidos; o resto continua sem olho humano.

- [x] Home aberta e conferida (2026-07-28)
- [x] Página de parte conferida (2026-07-28)
- [x] Página de seção conferida (2026-07-28)
- [x] **Lista de defeitos visuais registrada** (2026-07-28)
- [x] Defeitos corrigidos (2026-07-28)
- [ ] `npm run dev` aberto num navegador de verdade
- [ ] Seção com tabela conferida
- [ ] Seção com callout conferida
- [ ] Seção com bloco de código correto/evitar conferida
- [ ] Seção com bloco de "leitura do leitor de tela" conferida
- [ ] Índice de checklists conferido
- [ ] Página de checklist conferida
- [ ] Auditor conferido
- [ ] Página 404 conferida
- [ ] Raiz (escolha de idioma) conferida
- [ ] Tema claro conferido
- [ ] Tema escuro conferido
- [ ] Layout em 320px conferido
- [ ] Layout em desktop conferido

## B — Buracos de acessibilidade conhecidos

### Menu mobile

- [x] Prende o foco enquanto aberto (2026-07-28)
- [x] Fecha com `ESC` (2026-07-28)
- [x] Devolve o foco ao botão que abriu (2026-07-28)
- [x] `inert` no conteúdo de trás enquanto aberto (2026-07-28)
- [ ] Conferido com teclado *(bloco G)*

### Painel de busca

- [x] Prende o foco enquanto aberto (2026-07-28)
- [x] Devolve o foco ao botão que abriu ao fechar (2026-07-28)
- [x] `inert` no conteúdo de trás (2026-07-28)
- [x] Coberto por teste automatizado com axe (2026-07-29)
- [ ] Conferido com teclado de verdade *(bloco G)*

### CSP

- [x] Hash do script inline de tema calculado — 5 hashes (2026-07-28)
- [x] `'unsafe-inline'` removido de `script-src` (2026-07-28)
- [x] Site continua funcionando com a CSP endurecida — build verde (2026-07-28)

## C — Funcionalidade

### Índice "Nesta página"

- [x] `<nav aria-label="Nesta página">` com lista de âncoras (2026-07-29)
- [x] Presente no HTML prerenderizado (2026-07-29)
- [x] `aria-current="location"` na seção visível (2026-07-29)
- [x] `IntersectionObserver` **não** move foco (2026-07-29)
- [x] `IntersectionObserver` **não** anuncia nada (2026-07-29)
- [x] Sticky no desktop (2026-07-29)
- [x] Escondido abaixo de 64rem — o conteúdo tem prioridade (2026-07-29)

### Âncoras de seção

- [x] Link `#` em cada heading de bloco (2026-07-29)
- [x] `aria-label` descritivo e único (2026-07-29)
- [x] Visível no hover **e** no `:focus-visible` (2026-07-29)
- [x] Sempre visível onde não existe hover (2026-07-29)
- [x] `scroll-margin-top` para o header fixo não cobrir o destino (2026-07-29)
- [x] Id estável entre os três idiomas (2026-07-29)

### Checklists

- [x] Progresso de cada checklist visível na lista do índice (2026-07-28)
- [x] Reset global na página de índice, com confirmação (2026-07-28)
- [x] Export em texto simples, com assinatura ASCII (2026-07-28)
- [x] Data no cabeçalho do export (2026-07-28)
- [x] Escrita no localStorage com debounce (2026-07-28)

### Auditor — 24 regras

- [x] `input-so-placeholder` (2026-07-28)
- [x] `link-sem-texto` (2026-07-28)
- [x] `aria-referencia-quebrada` (2026-07-28)
- [x] `tabela-com-div` (2026-07-28)
- [x] `salto-de-heading` (2026-07-28)
- [x] `aria-inexistente` (2026-07-28)
- [x] `listbox-sem-teclado` (2026-07-28)
- [x] `mouse-sem-teclado` (2026-07-28)
- [x] Número da linha em cada achado (2026-07-28)
- [x] Limite de tamanho da entrada, com aviso (2026-07-28)

## D — Testes automatizados

- [x] Vitest configurado e rodando (2026-07-28)
- [x] **Cada uma das 24 regras com teste de "dispara"** (2026-07-28)
- [x] **Cada uma das 24 regras com teste de "não dispara"** (2026-07-28)
- [x] Motor de busca: peso de keyword (2026-07-28)
- [x] Motor de busca: peso de título (2026-07-28)
- [x] Motor de busca: remoção de acento (2026-07-28)
- [x] Motor de busca: lógica AND (2026-07-28)
- [x] Conteúdo: falha se houver `id` duplicado (2026-07-29)
- [x] Conteúdo: falha se título ou resumo vazio (2026-07-29)
- [x] Conteúdo: falha se um idioma publicado repetir o texto do pt (2026-07-29)
- [x] Conteúdo: falha se os ids divergirem entre idiomas (2026-07-29)
- [x] axe com busca aberta e com resultados (2026-07-29)
- [x] axe com busca aberta e sem resultados (2026-07-29)
- [x] axe com opção ativa por `aria-activedescendant` (2026-07-29)
- [x] axe com dialog de reset aberto (2026-07-29)
- [x] axe no auditor com achados e perguntas pendentes (2026-07-29)
- [x] axe no auditor com erro de parsing (2026-07-29)
- [x] axe com checklist parcialmente marcado (2026-07-29)
- [ ] axe com menu mobile aberto — *o drawer vive no header, que depende do
      router; fica para quando houver teste de integração de rota*
- [ ] Testes no CI — *não há CI configurado; roda em `npm run verify`*

## E — Identidade visual

### Ilustrações

- [x] Fundamentos — árvore de acessibilidade (2026-07-29)
- [x] ARIA — nome, role e estado saindo do elemento (2026-07-29)
- [x] Formulários — campo ligado ao seu erro (2026-07-29)
- [x] Componentes — modal sobre conteúdo inerte (2026-07-29)
- [x] Angular — escudo com o anel de foco (2026-07-29)
- [x] Leitores de tela — som saindo de um elemento focado (2026-07-29)
- [x] QA — checklist com marcações (2026-07-29)
- [x] Todas em SVG inline, herdando os tokens de tema (2026-07-29)
- [x] Todas com `aria-hidden="true"` e `role="presentation"` (2026-07-29)
- [x] Nenhuma carrega significado sozinha (2026-07-29)
- [x] Conferidas nos dois temas (2026-07-29)

O item "Hero — anel de foco abraçando um elemento" saiu de escopo: a home é
tipográfica por decisão de identidade, o wordmark é o gráfico.

### Marca

- [x] Favicon derivado do escudo do `BrandMark` (2026-07-28)
- [x] `favicon.svg` + `.ico` de fallback (2026-07-28)
- [x] `apple-touch-icon` (2026-07-28)
- [x] Watermark zero-width no shell, com `aria-hidden` (2026-07-28)
- [x] Imagem de Open Graph por rota e por idioma — 30 imagens (2026-07-29)
- [ ] Watermark não interfere na leitura *(bloco G)*

## F — Conteúdo

- [x] 169 resumos escritos à mão em pt (2026-07-29)
- [x] 169 resumos escritos à mão em en (2026-07-28)
- [x] 169 resumos escritos à mão em zh (2026-07-29)
- [x] Seção nova: European Accessibility Act (2026-07-28)
- [x] Seção nova: acessibilidade cognitiva (2026-07-28)
- [x] Fonte revalidada após as edições (2026-07-28)
- [x] `npm run content:extract` rodado (2026-07-29)

## G — Teste humano `executado pelo PO`

Roteiro em [ROTEIRO-TESTE.md](ROTEIRO-TESTE.md). ~95 minutos.

### Teclado

- [ ] Jornada completa percorrida só com Tab
- [ ] Foco visível o tempo todo
- [ ] Ordem de foco segue a ordem visual
- [ ] Nenhuma armadilha
- [ ] Foco nunca escondido atrás do header
- [ ] Skip link funciona

### TalkBack (Android)

- [ ] Roteiro executado por completo
- [ ] Achados registrados

### VoiceOver (iPhone)

- [ ] Roteiro executado por completo
- [ ] Achados registrados

### Medições

- [ ] Lighthouse Accessibility — meta 100
- [ ] Lighthouse Performance desktop
- [ ] Lighthouse Performance mobile
- [ ] Zoom 200% sem perda de conteúdo
- [ ] Reflow em 320px sem scroll horizontal
- [ ] Espaçamento de texto customizado sem quebra
- [ ] `prefers-reduced-motion` ligado no sistema

### Resolução

- [ ] Achados registrados com o Template de Bug do próprio conteúdo
- [ ] Zero Crítico em aberto
- [ ] Zero Alto em aberto
- [ ] Médio e Baixo documentados para a v2

## H — Deploy

- [x] `LOCALES` com `pt`, `en` e `zh`, os três 100% traduzidos (2026-07-29)
- [x] Sitemap com os três idiomas — 558 URLs (2026-07-29)
- [x] hreflang nos três + `x-default` (2026-07-29)
- [ ] Projeto criado na Vercel
- [ ] Repositório conectado
- [ ] Node 24 configurado
- [ ] **Deploy de preview**
- [ ] Lighthouse na URL de preview
- [ ] axe na URL de preview
- [ ] Rotas abertas diretamente pela URL
- [ ] Site conferido com JavaScript desligado
- [ ] Headers de segurança conferidos numa resposta real
- [ ] **Promovido para produção**
- [ ] Google Search Console: propriedade criada
- [ ] Sitemap submetido
- [ ] Bing Webmaster Tools
- [ ] hreflang conferido no Search Console após indexar

## I — Traduções

- [x] `i18n/strings.en.json` — 1.246 strings, 100% (2026-07-28)
- [x] `i18n/strings.zh.json` — 1.246 strings, 100% (2026-07-29)
- [x] Títulos de seção revisados nos dois — é o que rankeia (2026-07-29)
- [x] Resumos revisados nos dois — é o texto do resultado de busca (2026-07-29)
- [x] `en` e `zh` no build, no hreflang e no sitemap (2026-07-29)
- [x] Conteúdo de cada idioma ligado no registro, com teste que prova (2026-07-29)
- [ ] Revisão por falante nativo — declarado como pendência no README

## Fechamento

- [x] `README.md` declara o que ainda não foi testado (2026-07-28)
- [x] `README.md` com os números reais: 92 testes, 559 rotas, 3 idiomas (2026-07-29)
- [ ] `README.md` com o link do site no ar
- [ ] `TODO.md` do projeto criado
- [ ] `14.AGENDA/TODO.md` atualizado
- [ ] Link enviado ao PO
