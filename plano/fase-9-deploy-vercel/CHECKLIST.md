# Fase 9 — Deploy na Vercel · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

## Pré-requisito

- [ ] Fase 8 fechada, zero achado Crítico ou Alto em aberto
- [ ] PO definiu o domínio final

## Prerender

- [ ] `app.routes.server.ts` com `RenderMode.Prerender`
- [ ] `getPrerenderParams` devolvendo os 14 ids de checklist
- [ ] `ng build` sem erro de prerender
- [ ] `index.html` gerado para `/`
- [ ] `index.html` gerado para as 7 rotas de doc
- [ ] `index.html` gerado para `/checklists`
- [ ] `index.html` gerado para as 14 rotas `/checklists/:id`
- [ ] `index.html` gerado para `/auditor`
- [ ] `404.html` gerado
- [ ] Contagem de arquivos conferida contra a lista de rotas esperadas
- [ ] Nenhum acesso a `window`/`document`/`localStorage`/`navigator` sem guard
- [ ] Conteúdo visível no HTML estático (testar com JavaScript desligado)

## Configuração Vercel

- [ ] Projeto criado e repositório conectado
- [ ] Framework preset: Angular
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist/ariangular/browser`
- [ ] Install command: `npm ci`
- [ ] Versão do Node compatível com Angular 22

## vercel.json

- [ ] `Content-Security-Policy` definida
- [ ] CSP compatível com o script inline de tema (hash ou nonce)
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] `Permissions-Policy` negando câmera, microfone e geolocalização
- [ ] `Strict-Transport-Security` configurado
- [ ] Cache imutável para assets com hash
- [ ] Cache `must-revalidate` para HTML
- [ ] **Sem** rewrite universal para `index.html`
- [ ] 404 servido pelo `404.html` do build

## Fluxo

- [ ] `main` → produção
- [ ] Branch → deploy de preview
- [ ] Preview validado no PR antes do merge
- [ ] Nenhum push direto na `main`

## Validação em produção

- [ ] Site abre na URL de produção
- [ ] Cada uma das rotas aberta **diretamente** pela URL
- [ ] Link com fragmento (`/aria#aria-label`) abre na seção certa
- [ ] Lighthouse Accessibility 100 na URL real
- [ ] Lighthouse Performance dentro da meta na URL real
- [ ] Lighthouse Best Practices verificado
- [ ] Lighthouse SEO verificado
- [ ] axe sem violação na URL real
- [ ] Navegação só por teclado na URL real
- [ ] TalkBack validado em aparelho Android real
- [ ] VoiceOver validado em aparelho iOS real
- [ ] Tema claro e escuro conferidos em produção
- [ ] Checklists salvando progresso em produção
- [ ] Auditor funcionando em produção

## Conformidade de marca e licença

- [ ] Checklist do `MARCA-E-LICENCA.md` §7 percorrido por inteiro
- [ ] Disclaimer de não-afiliação visível em produção
- [ ] Domínio não sugere oficialidade
- [ ] Repositório público com `LICENSE` e `LICENSE-CONTENT`
- [ ] CI público mostrando axe e lint verdes

## Fechamento do projeto

- [ ] `README.md` reescrito com o que é, como rodar e link do site
- [ ] `TODO.md` do projeto criado/atualizado com datas
- [ ] `14.AGENDA/TODO.md` atualizado
- [ ] Commit com gitmoji feito
- [ ] `git push` executado
- [ ] Link do site enviado ao PO
