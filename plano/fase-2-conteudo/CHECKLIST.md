# Fase 2 — Conteúdo · Checklist

Estado em 2026-07-28. Marcar concluído com data: `(YYYY-MM-DD)`

## Pré-requisito

- [x] PO decidiu: TypeScript tipado, sem FEW-AI-SERIAL (2026-07-28)
- [x] Fonte corrigida e validada em `fonte/ARIA.html` (2026-07-28)

## Modelo de dados

- [x] Tipo `Part` definido (2026-07-28)
- [x] Tipo `Section` definido (2026-07-28)
- [x] União `Block` com todos os tipos (2026-07-28):
  - [x] `paragraph`
  - [x] `heading`
  - [x] `list`
  - [x] `table`
  - [x] `code` (com `variant: correct | wrong | neutral`)
  - [x] `callout` (com `tone: info | warning | success`)
  - [x] `reading`
- [x] Tipo `Checklist` definido (2026-07-28)
- [x] `id` de seção reaproveitado de `fonte/ARIA.html`, não gerado de novo (2026-07-28)
- [x] Modelo nasce multi-locale (`Locale`, `LOCALE_TAG`, `LocaleContent`) (2026-07-28)
- [x] Slug estável entre locales, para o hreflang casar sem tabela de-para (2026-07-28)

## Extração

- [x] `scripts/extract-content.js` com jsdom (2026-07-28)
- [x] Blocos de código não escapados vs escapados normalizados na fonte (2026-07-28)
- [x] Padrões de "como o leitor anuncia" levantados varrendo a fonte, não por
      heurística genérica (2026-07-28)
- [x] `src/content/pt/parts/` com um arquivo por parte (2026-07-28)
- [x] `src/content/pt/checklists.ts` (2026-07-28)
- [x] `src/content/pt/search-index.ts` (2026-07-28)
- [x] `i18n/content.pt.json` — dump bruto para as demais ferramentas (2026-07-28)
- [x] Tipagem valida a estrutura em tempo de compilação (2026-07-28)
- [x] Nada de parse em runtime (2026-07-28)

## Partes extraídas

- [x] Fundamentos de Acessibilidade Angular — 14 seções (2026-07-28)
- [x] ARIA Completo para Angular — 27 seções (2026-07-28)
- [x] Formulários Acessíveis — 7 seções (2026-07-28)
- [x] Componentes Interativos — 33 seções (2026-07-28)
- [x] Angular, Material e CDK A11y — 39 seções, com as 4 novas de `@angular/aria` (2026-07-28)
- [x] TalkBack, VoiceOver e Testes Reais — 21 seções (2026-07-28)
- [x] QA, Auditoria e WCAG 2.2 — 19 seções (2026-07-28)
- [x] Total: 160 seções (2026-07-28)

## Fidelidade à fonte

- [x] Contagem de `<pre>` fecha: 116 code + 36 reading + 1 no rodapé (2026-07-28)
- [x] `scripts/diff-content.js` acusa 0 blocos de código perdidos (2026-07-28)
- [x] Nenhuma palavra do texto corrido perdida (2026-07-28)
- [x] Roda no CI (2026-07-28)

## Checklists extraídos

- [x] Os 14 checklists, 110 itens (2026-07-28)
- [x] Cada um aponta para a seção de origem (2026-07-28)
- [x] Classificados por público e por etapa do fluxo (2026-07-28)

## Conteúdo novo

- [x] `@angular/aria` — o pacote oficial (2026-07-28)
- [x] `@angular/aria` — os 13 padrões (2026-07-28)
- [x] `@angular/aria` vs Material vs CDK (2026-07-28)
- [x] O que o `@angular/aria` **não** resolve (2026-07-28)
- [x] European Accessibility Act — tema quente de 2026 (2026-07-28)
- [x] Acessibilidade cognitiva (2026-07-28)

## Tradução

- [x] `scripts/extract-strings.js` gera o catálogo (2026-07-28)
- [x] `scripts/build-locale.js` aplica tradução sobre a estrutura do pt (2026-07-28)
- [x] Rótulos de interface traduzidos nos 3 idiomas em `core/i18n/ui-strings.ts` (2026-07-28)
- [x] **`i18n/strings.en.json`** — 1.246 strings, 100% (2026-07-28)
- [x] **`i18n/strings.zh.json`** — 1.246 strings, 100% (2026-07-29)
- [x] `npm run i18n:build` com cobertura de 100% nos dois (2026-07-29)
- [x] Conteúdo de cada idioma ligado no registro de `content/index.ts` (2026-07-29)
- [x] `merge-i18n.js` falha em chave desconhecida, valor vazio ou cobertura parcial (2026-07-28)
- [ ] Revisão por falante nativo — declarada como pendência no README

A ordem de prioridade foi respeitada: títulos de seção primeiro (viram
`<title>`), resumos depois (viram `<meta description>`), corpo por último.

## Resumos

- [x] Gerados por heurística do primeiro parágrafo (2026-07-28)
- [x] **169 resumos escritos à mão em pt** (2026-07-29)
- [x] **169 resumos escritos à mão em en** (2026-07-28)
- [x] **169 resumos escritos à mão em zh** (2026-07-29)
- [x] `i18n/summaries.pt.json` sobrevive a uma re-extração (2026-07-29)
- [x] Extração falha em chave de resumo sem seção correspondente (2026-07-29)

## Validação

- [x] Contagem de seções bate com a fonte: 162 (2026-07-28)
- [x] Teste que falha se alguma seção estiver sem título ou resumo (2026-07-29)
- [x] Teste que falha se houver `id` duplicado (2026-07-29)
- [x] Teste que falha se um idioma publicado repetir o texto do pt (2026-07-29)
- [x] Teste que falha se os ids divergirem entre idiomas (2026-07-29)

## Fechamento

- [x] `ng lint` e `ng build` passando (2026-07-28)
- [x] Commit e push feitos (2026-07-29)
- [x] Fase fechada (2026-07-29)
