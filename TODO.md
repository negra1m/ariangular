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
- [x] Uma URL por seção, 187 rotas prerenderizadas (2026-07-29)
- [x] Shell, drawer, footer com mapa do site, foco pós-rota (2026-07-29)
- [x] Busca com combobox WAI-ARIA e debounce (2026-07-28)
- [x] 14 checklists com progresso, reset global, export MD e TXT com assinatura (2026-07-29)
- [x] Auditor com 24 regras, auto-fix, nº de linha e limite de entrada (2026-07-29)
- [x] 77 testes — regras do auditor nos dois sentidos, busca, watermark (2026-07-29)
- [x] Visual dark-first, refeito a partir da referência real (2026-07-29)
- [x] Watermark zero-width com testes (2026-07-29)
- [x] Favicon próprio, escudo adaptado do Angular (2026-07-29)
- [x] CSP sem `unsafe-inline`, hashes calculados no build (2026-07-29)
- [x] SEO: hreflang, canonical, JSON-LD, sitemap das rotas reais (2026-07-29)
- [x] Renomeado para `ariangular` — `AngulARIA` colidia com `@angular/aria` (2026-07-28)

---

## Pendencias

### Bloqueia o lançamento

- [ ] **Abrir o site num navegador** — nunca foi feito
- [ ] **Deploy na Vercel** — configuração pronta, falta conectar o projeto
- [ ] Roteiro de teste humano: teclado, TalkBack, VoiceOver, Lighthouse, zoom
      (ver `plano/fase-10-polimento/ROTEIRO-TESTE.md`)

### Conteúdo

- [ ] Traduzir 1.246 strings para inglês — `/en` não sobe até lá
- [ ] Traduzir para chinês
- [ ] 167 resumos escritos à mão (hoje são o primeiro parágrafo da seção)

### Qualidade

- [ ] axe nos estados pós-interação (menu aberto, busca com resultado, dialog)
- [ ] Testes de componente além dos de serviço

### Visual

- [ ] Ilustrações por parte (existe a arte em caracteres, faltam as das partes)
- [ ] OG image por rota
- [ ] Stops oficiais do gradiente Angular (hoje é aproximação)

### Depois de publicar

- [ ] Google Search Console e Bing Webmaster Tools
- [ ] Submeter o sitemap
- [ ] Domínio próprio (`*.vercel.app` divide autoridade)
