# SEO — pt, en, zh

Como o ariangular fica encontrável nos três índices de busca.

Pesquisa feita em 2026-07-28. Fontes no fim.

---

## 1. O que já está implementado

| Item | Onde |
|------|------|
| Uma URL por seção — 160 por idioma, 480 no total | `app.routes.ts` |
| Título e descrição próprios por rota | `core/seo/seo.service.ts` |
| hreflang das 3 versões + `x-default` em toda página | `seo.service.ts` |
| Canonical por página | `seo.service.ts` |
| Open Graph e Twitter card | `seo.service.ts` |
| JSON-LD: `TechArticle` nas seções, `WebSite` na home | `seo.service.ts` |
| `sitemap.xml` com `xhtml:link` de hreflang, gerado das rotas reais | `scripts/generate-sitemap.js` |
| `robots.txt` | idem |
| Raiz com escolha de idioma, não redirect cego | idem |
| 553 páginas prerenderizadas — HTML completo, sem depender de JS | build |
| `lang` correto por locale (`pt-BR`, `en`, `zh-Hans`) | `locale.service.ts` |

A decisão que mais importa aqui é **uma URL por seção**. Com 7 páginas longas, o
buscador teria 7 alvos genéricos. Com 160, cada tema técnico tem a sua página, e
quem procura "aria-label botão ícone" chega na resposta, não num índice.

---

## 2. Temas quentes de acessibilidade front-end — 2026

Levantados por pesquisa, não por palpite.

### 2.1 O que está movimentando o assunto

| Tema | Por que está quente | Onde já cobrimos |
|------|--------------------|------------------|
| **European Accessibility Act** | Exigível desde 28/06/2025 em toda a UE. `EN 301 549 v4.1.1` sai em 2026 e deve virar o padrão técnico de conformidade | Indireto — o conteúdo cobre WCAG 2.2 AA, que é a base |
| **Shift-left** | Acessibilidade saindo do "corrige no fim" para "constrói desde o começo" | Forte — os checklists de Story, Dev e PR são exatamente isso |
| **Auditoria contínua** | De auditoria anual para verificação a cada commit | Forte — o próprio repo roda axe e contraste no CI |
| **IA em acessibilidade** | Ferramentas automáticas pegam 55–65% dos erros WCAG. O consenso é usar IA para velocidade e gente para julgamento | Nosso auditor assume esse limite em voz alta |
| **`@angular/aria`** | Pacote oficial lançado no Angular v22 | 4 seções novas na parte Angular |
| **UX cognitiva** | Deixou de ser nicho | Lacuna |
| **Maturidade organizacional** | Acessibilidade como responsabilidade dividida entre design, eng, conteúdo, QA e liderança | Parcial — os checklists por papel |

### 2.2 Termos de busca por idioma

Slugs não são traduzidos, e isso é proposital: `aria-label` é `aria-label` em
qualquer idioma, e é assim que a pessoa digita. O que muda por idioma é o
**título** e a **descrição**.

**Português** — volume menor, concorrência muito menor. É onde dá para ser o
primeiro resultado rápido.

- acessibilidade angular, wcag 2.2, leitor de tela, talkback, voiceover
- aria-label, aria-live, foco teclado, div clicável, campo sem label
- checklist acessibilidade, teste acessibilidade

**Inglês** — maior volume, maior concorrência. Disputa com MDN, web.dev, Deque.
O caminho é long-tail específico de Angular.

- angular accessibility, angular a11y, angular screen reader
- angular focus management route change, angular aria-live announce
- cdkTrapFocus, LiveAnnouncer, MatDialog accessibility
- accessible modal angular, angular combobox accessible

**Chinês** — mercado enorme e material bem mais escasso. Termos:

- 无障碍 (acessibilidade), 前端无障碍 (a11y front-end)
- 信息无障碍, 屏幕阅读器 (leitor de tela), 键盘导航
- WCAG 2.2, Angular 无障碍

Nota da pesquisa: uma matéria chinesa cita que ~70% dos defeitos de
acessibilidade exigem verificação humana, e a pesquisa WebAIM 2024 aponta que
70% dos sites ainda têm problemas sérios. Os dois números são bons ganchos.

---

## 3. O que falta

### 3.1 Tradução do conteúdo — o item crítico

**Status: pipeline pronto, tradução não feita.**

- `i18n/strings.pt.json` — 1.174 strings, 4.601 palavras
- `scripts/build-locale.js` aplica a tradução sobre a estrutura do pt e gera
  `src/content/en/` e `src/content/zh/`
- Enquanto não existirem, `src/content/index.ts` faz `en` e `zh` caírem no pt

**Isso significa que `/en` e `/zh` hoje servem conteúdo em português.** A
estrutura, as URLs, o hreflang e os metadados estão corretos; o texto não está
traduzido. Publicar assim tem um custo real de SEO: o Google detecta o
descasamento entre `lang` e o idioma do corpo, e pode desindexar ou penalizar.

Ordem de prioridade quando for traduzir:

1. **Títulos de seção** (181) — é o que vira `<title>` e o que rankeia
2. **Resumos** (167) — vira `<meta description>`, o texto que aparece no resultado
3. **Corpo** (826) — sustenta a relevância e a permanência na página

Os rótulos de interface já estão traduzidos nos três idiomas
(`core/i18n/ui-strings.ts`).

### 3.2 Outros pendentes

- **Resumos gerados por heurística.** Os `summary` saem do primeiro parágrafo da
  seção. Funciona, mas meta description escrita à mão converte bem melhor. 167 a
  revisar.
- **OG image por rota.** Hoje não há imagem. Gerar no build, com o título da
  seção, melhora muito o compartilhamento — que é o uso social pretendido.
- **Domínio.** `*.vercel.app` divide autoridade com todos os outros projetos no
  mesmo domínio. Domínio próprio é o maior ganho isolado de SEO disponível aqui.
- **UX cognitiva** e **European Accessibility Act** como seções novas: são os
  dois temas quentes que o conteúdo não cobre.

---

## 4. Depois de publicar

- [ ] Registrar o domínio no Google Search Console e no Bing Webmaster Tools
- [ ] Submeter o `sitemap.xml` nos dois
- [ ] Para o índice chinês, considerar Baidu Ziyuan — o Google tem alcance
      limitado na China continental
- [ ] Conferir no Search Console se o hreflang foi lido sem erro de pareamento
- [ ] Acompanhar quais seções recebem impressão e reescrever os títulos das que
      não recebem

---

## Fontes

- [Three Trends That Will Shape Digital Accessibility in 2026 — Level Access](https://www.levelaccess.com/blog/three-insights-that-will-shape-accessibility-strategy-in-2026/)
- [European Accessibility Act — Level Access](https://www.levelaccess.com/compliance-overview/european-accessibility-act-eaa/)
- [Accessibility Trends to Watch in 2026 — accessibility.com](https://www.accessibility.com/blog/accessibility-trends-to-watch-in-2026)
- [前端无障碍设计的深层逻辑与实践路径 — 腾讯云](https://cloud.tencent.com/developer/article/2551013)
- [前端无障碍开发检查清单，WCAG合规 — CSDN](https://blog.csdn.net/2509_93939101/article/details/154876811)
- [Accessibility — angular.dev](https://angular.dev/best-practices/a11y)
- [Angular Aria — angular.dev](https://angular.dev/guide/aria/overview)
