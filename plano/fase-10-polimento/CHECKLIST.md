# Fase 10 — Polimento · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

---

## A — Ver funcionando `bloqueia tudo`

- [ ] `npm run dev` sobe sem erro no console
- [ ] Home aberta e conferida
- [ ] Página de parte conferida
- [ ] Página de seção conferida
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
- [ ] **Lista de defeitos visuais registrada**
- [ ] Defeitos corrigidos

## B — Buracos de acessibilidade conhecidos

### Menu mobile

- [ ] Prende o foco enquanto aberto (`cdkTrapFocus` ou `inert` no resto)
- [ ] Fecha com `ESC`
- [ ] Devolve o foco ao botão que abriu
- [ ] `inert` no conteúdo de trás enquanto aberto
- [ ] Conferido com teclado

### Painel de busca

- [ ] Prende o foco enquanto aberto
- [ ] Devolve o foco ao botão que abriu ao fechar
- [ ] `inert` no conteúdo de trás
- [ ] Conferido com teclado

### CSP

- [ ] Hash do script inline de tema calculado
- [ ] `'unsafe-inline'` removido de `script-src`
- [ ] Site continua funcionando com a CSP endurecida

## C — Funcionalidade

### Índice "Nesta página"

- [ ] `<nav aria-label="Nesta página">` com lista de âncoras
- [ ] Presente no HTML prerenderizado
- [ ] `aria-current="location"` na seção visível
- [ ] `IntersectionObserver` **não** move foco
- [ ] `IntersectionObserver` **não** anuncia nada
- [ ] Sticky no desktop
- [ ] Colapsável no mobile, com `aria-expanded`

### Âncoras de seção

- [ ] Link `#` em cada heading de bloco
- [ ] `aria-label` descritivo e único
- [ ] Visível no hover **e** no `:focus-visible`
- [ ] Copiar endereço funcionando

### Checklists

- [ ] Progresso de cada checklist visível na lista do índice
- [ ] Reset global na página de índice, com confirmação
- [ ] Export em texto simples
- [ ] Data no cabeçalho do export
- [ ] Escrita no localStorage com debounce

### Auditor — 8 regras restantes

- [ ] `input-so-placeholder`
- [ ] `link-sem-texto`
- [ ] `aria-describedby-id-inexistente`
- [ ] `tabela-com-div`
- [ ] `salto-de-heading`
- [ ] `role-invalido` / `aria-*` inexistente
- [ ] `listbox-custom-sem-teclado`
- [ ] `mouse-sem-teclado`
- [ ] Número da linha em cada achado
- [ ] Limite de tamanho da entrada, com aviso

## D — Testes automatizados

- [ ] Vitest configurado e rodando
- [ ] **Cada uma das 24 regras com teste de "dispara"**
- [ ] **Cada uma das 24 regras com teste de "não dispara"**
- [ ] Teste de que o auto-fix produz markup válido
- [ ] Teste de que toda regra aponta para uma seção existente da doc
- [ ] Motor de busca: peso de keyword
- [ ] Motor de busca: peso de título
- [ ] Motor de busca: remoção de acento
- [ ] Motor de busca: lógica AND
- [ ] Conteúdo: falha se seção sem `id`, título ou blocos
- [ ] Conteúdo: falha se houver `id` duplicado
- [ ] axe com menu mobile aberto
- [ ] axe com busca aberta e com resultados
- [ ] axe com busca aberta e sem resultados
- [ ] axe com dialog de reset aberto
- [ ] axe no auditor com achados e perguntas pendentes
- [ ] axe com checklist parcialmente marcado
- [ ] Testes no CI

## E — Identidade visual

### Ilustrações

- [ ] Hero — anel de foco abraçando um elemento
- [ ] Fundamentos — mão navegando por teclado
- [ ] ARIA — onda de som saindo de um botão
- [ ] Formulários — rótulo ligado a um campo
- [ ] Componentes — modal com foco preso dentro
- [ ] Angular — escudo com o anel
- [ ] Leitores de tela — fala saindo de uma tela
- [ ] QA — lista com marcações
- [ ] Todas em SVG inline, herdando `currentColor`
- [ ] Todas com `aria-hidden="true"`
- [ ] Nenhuma carrega significado sozinha
- [ ] Conferidas nos dois temas

### Marca

- [ ] Favicon derivado do escudo do `BrandMark`
- [ ] `favicon.svg` + `.ico` de fallback
- [ ] `apple-touch-icon`
- [ ] Watermark zero-width no shell, com `aria-hidden`
- [ ] Watermark não interfere na leitura (conferir na Fase G)
- [ ] Stops oficiais do gradiente extraídos do press kit

## F — Conteúdo

- [ ] 167 resumos reescritos à mão
- [ ] Seção nova: European Accessibility Act
- [ ] Seção nova: UX cognitiva
- [ ] Fonte revalidada após as edições
- [ ] `npm run content:extract` rodado

## G — Teste humano `executado pelo PO`

Roteiro em [ROTEIRO-TESTE.md](ROTEIRO-TESTE.md).

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

- [ ] `zh` removido do build enquanto não houver tradução
- [ ] `LOCALES` ajustado, hreflang só com `pt` e `en`
- [ ] Sitemap regenerado sem `zh`
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

## I — Tradução `en`

- [ ] `i18n/strings.en.json` preenchido — 1.174 strings
- [ ] `npm run i18n:build` com 100% de cobertura
- [ ] Títulos de seção revisados (é o que rankeia)
- [ ] Resumos revisados (é o texto do resultado de busca)
- [ ] `en` de volta ao build e ao hreflang
- [ ] Sitemap regenerado
- [ ] Deploy

## Fechamento

- [ ] `README.md` com o link do site no ar
- [ ] `README.md` declara o que ainda não foi testado
- [ ] `TODO.md` do projeto criado
- [ ] `14.AGENDA/TODO.md` atualizado
- [ ] Repositório renomeado para `ariangular` no GitHub
- [ ] Link enviado ao PO
