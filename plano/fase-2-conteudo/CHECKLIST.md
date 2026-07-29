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
- [ ] European Accessibility Act — tema quente de 2026, não coberto
- [ ] UX cognitiva — idem

## Tradução — NÃO FEITA

- [x] `scripts/extract-strings.js` gera o catálogo (2026-07-28)
- [x] `scripts/build-locale.js` aplica tradução sobre a estrutura do pt (2026-07-28)
- [x] Rótulos de interface traduzidos nos 3 idiomas em `core/i18n/ui-strings.ts` (2026-07-28)
- [x] Fallback: `en` e `zh` caem no pt em vez de quebrar (2026-07-28)
- [ ] **`i18n/strings.en.json`** — 1.174 strings, 4.601 palavras
- [ ] **`i18n/strings.zh.json`** — idem
- [ ] Rodar `npm run i18n:build` e conferir a cobertura
- [ ] **Consequência atual: `/en` e `/zh` servem texto em português.** Estrutura,
      URLs, hreflang e metadados corretos; corpo não traduzido. Publicar assim tem
      custo de SEO — o descasamento entre `lang` e o idioma do corpo é detectável

### Ordem de prioridade quando for traduzir

1. 181 títulos de seção — viram `<title>`, é o que rankeia
2. 167 resumos — viram `<meta description>`, é o texto do resultado de busca
3. 826 do corpo — sustentam relevância e permanência

## Resumos

- [x] Gerados por heurística do primeiro parágrafo (2026-07-28)
- [ ] **167 resumos reescritos à mão** — meta description gerada converte mal

## Validação

- [x] Contagem de seções bate com a fonte: 160 (2026-07-28)
- [ ] Teste que falha se alguma seção estiver sem `id`, título ou blocos
- [ ] Teste que falha se houver `id` duplicado

## Fechamento

- [x] `ng lint` e `ng build` passando (2026-07-28)
- [x] Commit e push feitos (2026-07-28)
- [ ] Fase fechada — bloqueada pela tradução
