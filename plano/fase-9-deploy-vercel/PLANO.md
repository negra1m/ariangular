# Fase 9 — Deploy na Vercel

**Objetivo:** site no ar, estático, com todas as rotas prerenderizadas, headers corretos
e deploy automático a cada push.

**Depende de:** Fase 8 (nada sobe com achado Crítico ou Alto em aberto).
**Bloqueia:** nada.

---

## 9.1 Prerender

Todas as rotas precisam sair do build como HTML estático. Rota que não prerenderiza vira
página em branco para quem chega sem JavaScript ou com JS quebrado — e some do índice do
Google.

`app.routes.server.ts`:

```ts
export const serverRoutes: ServerRoute[] = [
  { path: '**', renderMode: RenderMode.Prerender },
];
```

Rota com parâmetro (`/checklists/:id`) precisa de `getPrerenderParams` devolvendo os 14
ids. Sem isso o build ignora as páginas de checklist individuais.

**Verificação obrigatória:** contar os `index.html` gerados em `dist/angularia/browser/`
e conferir contra a lista de rotas esperadas. São 10 rotas fixas + 14 de checklist + 404.

Armadilha conhecida: qualquer acesso a `window`, `document`, `localStorage` ou
`navigator` fora de um guard de plataforma quebra o prerender — e o erro do Angular
nesse caso não aponta a linha com clareza. Os pontos de risco já mapeados: `ProgressService`
(Fase 6), `LiveAnnouncer` (Fase 3), `DOMParser` do auditor (Fase 7), toggle de tema (Fase 3).

---

## 9.2 Configuração Vercel

- **Framework preset:** Angular
- **Build command:** `npm run build`
- **Output directory:** `dist/angularia/browser`
- **Node:** versão LTS compatível com Angular 22
- **Install command:** `npm ci`

`vercel.json` com:

### Headers de segurança

| Header | Valor |
|--------|-------|
| `Content-Security-Policy` | Restritiva. Site sem API externa — sem `unsafe-eval`. Cuidado com o script inline de tema (Fase 3): precisa de hash |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Negar câmera, microfone, geolocalização — nada disso é usado |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains` |

### Cache

- Assets com hash (`/*.js`, `/*.css`): `max-age=31536000, immutable`
- HTML: `max-age=0, must-revalidate`

### Rewrites

Com prerender completo, **não** usar rewrite universal para `index.html` — isso serve a
home no lugar da página real e destrói o benefício do SSG. Cada rota tem seu HTML.
O 404 é servido pelo `404.html` gerado no build.

---

## 9.3 Fluxo de deploy

- Repositório conectado à Vercel.
- `main` → produção. Branch → preview.
- Regra do projeto: nada de push direto na `main`. Branch + PR, preview validado no PR,
  merge depois.

---

## 9.4 Validação em produção

O site em produção não é o site em `localhost`. Repetir:

- Lighthouse (Accessibility, Performance, Best Practices, SEO) na URL real
- axe na URL real
- Teclado na URL real
- TalkBack em aparelho Android real, na URL real
- VoiceOver em aparelho iOS real, na URL real
- Todas as rotas abertas diretamente (não navegando de dentro do site) — é aqui que
  prerender faltando aparece
- Compartilhar um link com fragmento (`/aria#aria-label`) e conferir que abre na seção

---

## 9.5 Fechamento do projeto

- `README.md` reescrito: o que é, como rodar, como contribuir, link do site no ar
- `TODO.md` do projeto criado/atualizado, com datas `(YYYY-MM-DD)`
- `14.AGENDA/TODO.md` atualizado
- `git push` feito — regra do projeto: sem push, não está pronto

---

## Critério de pronto

Site acessível pela URL de produção, todas as rotas abrindo diretamente, Lighthouse
Accessibility 100 na URL real, e validação em aparelho Android e iOS reais.
