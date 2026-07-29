# Fase 9 — Deploy na Vercel · Checklist

Estado em 2026-07-28. Marcar concluído com data: `(YYYY-MM-DD)`

> **O site não está no ar.** A configuração está escrita e nunca foi exercitada.

## Pré-requisito

- [ ] Fase 8 fechada, zero achado Crítico ou Alto em aberto
- [x] PO definiu o domínio: `*.vercel.app` (2026-07-28)

## Prerender — feito

- [x] `app.routes.server.ts` com `RenderMode.Prerender` (2026-07-28)
- [x] `getPrerenderParams` em todas as rotas com parâmetro (2026-07-28)
- [x] **559 rotas prerenderizadas** (2026-07-29)
- [x] Nenhum acesso a `window`/`document`/`localStorage` sem guard (2026-07-28)
- [x] Conteúdo presente no HTML estático, não só shell (2026-07-28)
- [x] Build **não** gera pasta `server/` (2026-07-28)
- [x] Raiz com escolha de idioma e `lang` correto (2026-07-28)

### Contagem

| Rota | Por idioma | Total |
|------|-----------|-------|
| home | 1 | 3 |
| partes | 7 | 21 |
| seções | 162 | 486 |
| índice de checklists | 1 | 3 |
| checklists | 14 | 42 |
| auditor | 1 | 3 |
| 404 | 1 | 3 |
| raiz | — | 1 |
| **Total** | | **559** |

## SEO — feito

- [x] `sitemap.xml` gerado das rotas reais, com `xhtml:link` de hreflang (2026-07-28)
- [x] 558 URLs cobertas, 3 idiomas (2026-07-29)
- [x] `robots.txt` (2026-07-28)
- [x] hreflang das 3 versões + `x-default` em toda página (2026-07-29)
- [x] Canonical por página (2026-07-28)
- [x] JSON-LD `TechArticle` / `WebSite` (2026-07-28)
- [x] **OG image por rota e por idioma** — 30 imagens (2026-07-29)
- [x] Lista de idiomas lida de `types.ts` pelo sitemap e pelo gerador de OG —
      duplicar à mão fazia o esquecimento passar em silêncio (2026-07-29)

## vercel.json — escrito, headers não exercitados numa resposta real

- [x] `outputDirectory: dist/ariangular/browser` (2026-07-28)
- [x] `Content-Security-Policy` (2026-07-28)
- [x] `X-Content-Type-Options: nosniff` (2026-07-28)
- [x] `Referrer-Policy` (2026-07-28)
- [x] `Permissions-Policy` negando câmera, microfone e geolocalização (2026-07-28)
- [x] `Strict-Transport-Security` (2026-07-28)
- [x] Cache imutável para assets com hash (2026-07-28)
- [x] Cache `must-revalidate` para HTML (2026-07-28)
- [x] **Sem** rewrite universal para `index.html` (2026-07-28)
- [x] **CSP endurecida** — `'unsafe-inline'` removido de `script-src`, 5 hashes
      SHA-256 calculados no build (2026-07-28)
- [x] Filtro de script não executável no cálculo do hash — sem ele eram 873
      hashes, um por página de state transfer (2026-07-28)
- [ ] Headers conferidos numa resposta real

## Deploy — NADA FEITO

- [ ] **Projeto criado na Vercel**
- [ ] **Repositório conectado**
- [ ] Versão do Node configurada (24)
- [ ] `main` → produção
- [ ] **Primeiro deploy executado**

## Validação em produção — NADA FEITO

- [ ] Site abre na URL de produção
- [ ] Rotas abertas **diretamente** pela URL, não navegando de dentro
- [ ] Link com fragmento abre na seção certa
- [ ] Lighthouse Accessibility na URL real
- [ ] Lighthouse Performance na URL real
- [ ] axe na URL real
- [ ] Navegação só por teclado na URL real
- [ ] TalkBack em aparelho Android real
- [ ] VoiceOver em aparelho iOS real
- [ ] Tema claro e escuro em produção
- [ ] Checklists salvando progresso em produção
- [ ] Busca funcionando em produção
- [ ] Auditor funcionando em produção
- [ ] Conferir com JavaScript desligado — o conteúdo deve aparecer

## Conformidade de marca e licença

- [x] Nome não colide com pacote oficial — `AngulARIA` trocado por `ariangular`
      após descobrir o `@angular/aria` (2026-07-28)
- [x] `LICENSE` (MIT) e `LICENSE-CONTENT` (CC BY 4.0) no repo (2026-07-28)
- [x] `NOTICE.md` com atribuição CC BY 4.0 do logo (2026-07-28)
- [x] Disclaimer de não-afiliação no footer, com contraste AA (2026-07-28)
- [x] Domínio não sugere oficialidade (2026-07-28)
- [x] **Favicon próprio**, derivado do escudo do `BrandMark` (2026-07-28)
- [ ] Disclaimer conferido em produção
- [ ] CI público mostrando verde

## Fechamento do projeto

- [x] Repositório renomeado para `ariangular` no GitHub (2026-07-28)
- [x] `README.md` com os números reais e o que ainda não foi testado (2026-07-29)
- [ ] `README.md` com o link do site no ar
- [ ] `TODO.md` do projeto criado
- [ ] `14.AGENDA/TODO.md` atualizado
- [ ] Link do site enviado ao PO
- [ ] Search Console e Bing Webmaster Tools
- [ ] Sitemap submetido
- [ ] Baidu Ziyuan, para o índice chinês — agora faz sentido, o `zh` está no ar
