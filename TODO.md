# ariangular — Pendências

**Stack:** Angular 22 + SSG + TypeScript
**Status:** código pronto e verificado por ferramenta; nunca aberto num navegador; não está no ar

---

## Concluido

- [x] Fonte ARIA.html corrigida e validada — 152/152 blocos de código intactos (2026-07-28)
- [x] Plano em 10 fases, identidade visual, marca e licença, SEO (2026-07-28)
- [x] Workspace Angular 22 zoneless, SSG, CI (2026-07-28)
- [x] 162 seções extraídas para TypeScript tipado (2026-07-28)
- [x] 4 seções novas sobre `@angular/aria` (2026-07-28)
- [x] European Accessibility Act e acessibilidade cognitiva (2026-07-29)
- [x] Uma URL por seção, 559 rotas prerenderizadas (2026-07-29)
- [x] Shell, drawer, footer com mapa do site, foco pós-rota (2026-07-29)
- [x] Busca com combobox WAI-ARIA e debounce (2026-07-28)
- [x] 14 checklists com progresso, reset global, export MD e TXT com assinatura (2026-07-29)
- [x] Auditor com 24 regras, auto-fix, nº de linha e limite de entrada (2026-07-29)
- [x] Visual dark-first, refeito a partir da referência real (2026-07-29)
- [x] Watermark zero-width com testes (2026-07-29)
- [x] Favicon próprio, escudo adaptado do Angular (2026-07-29)
- [x] CSP sem `unsafe-inline`, hashes calculados no build (2026-07-29)
- [x] SEO: hreflang, canonical, JSON-LD, sitemap das rotas reais (2026-07-29)
- [x] Renomeado para `ariangular` — `AngulARIA` colidia com `@angular/aria` (2026-07-28)
- [x] Tradução `en` — 1.246 strings, 100% (2026-07-28)
- [x] Tradução `zh` — 1.246 strings, 100% (2026-07-29)
- [x] 169 resumos escritos à mão nos três idiomas (2026-07-29)
- [x] Uma ilustração por parte — 7 SVGs decorativos (2026-07-29)
- [x] OG image por rota e por idioma — 30 imagens (2026-07-29)
- [x] Índice "nesta página" com `aria-current="location"` (2026-07-29)
- [x] Âncora por tópico, id estável entre os três idiomas (2026-07-29)
- [x] 92 testes — regras do auditor nos dois sentidos, busca, watermark,
      conteúdo por idioma, axe em 7 estados pós-interação (2026-07-29)

---

## Pendencias

### Bloqueia o lançamento

- [ ] **Abrir o site num navegador** — nunca foi feito
- [ ] **Deploy na Vercel** — configuração pronta, falta conectar o projeto
- [ ] Roteiro de teste humano: teclado, TalkBack, VoiceOver, Lighthouse, zoom
      (ver `plano/fase-10-polimento/ROTEIRO-TESTE.md`, ~95 min)

### Conteúdo

- [ ] Revisão da tradução por falante nativo — nenhum dos três idiomas teve.
      Confiança alta no inglês, menor no chinês

### Qualidade

- [ ] axe com o menu mobile aberto — o drawer depende do router, precisa de
      teste de integração de rota
- [ ] Bundle inicial em 524 kB, 24 kB acima do orçamento. Cresceu com o
      terceiro idioma; medir na Vercel antes de decidir se vale dividir

### Visual

- [ ] Stops oficiais do gradiente Angular (hoje é aproximação)

### Depois de publicar

- [ ] Google Search Console e Bing Webmaster Tools
- [ ] Baidu Ziyuan — agora faz sentido, o `zh` está no ar
- [ ] Submeter o sitemap
- [ ] Domínio próprio (`*.vercel.app` divide autoridade)
