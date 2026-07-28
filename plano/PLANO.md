# aria-angular — Plano Geral

**Produto:** guia interativo de acessibilidade para times Angular.
**Natureza:** ferramenta pessoal (PF), open source, de uso social/público — sem branding Few Company.
**Visual:** ver [IDENTIDADE-VISUAL.md](IDENTIDADE-VISUAL.md).
**Marca e licença:** ver [MARCA-E-LICENCA.md](MARCA-E-LICENCA.md).
**Stack:** Angular 21 (standalone, signals, zoneless) + SSG/prerender + TypeScript.
**Deploy:** Vercel, domínio `*.vercel.app`.
**Fonte do conteúdo:** [`fonte/ARIA.html`](../fonte/README.md) — já corrigido e validado (2026-07-28).

---

## 1. O que é

Um site de documentação navegável que centraliza conhecimento de acessibilidade
Angular, com três camadas de uso:

1. **Ler** — a documentação completa, dividida em partes e seções, com busca.
2. **Aplicar** — os checklists do documento viram listas marcáveis com progresso salvo.
3. **Verificar** — um auditor que recebe um trecho de template Angular e aponta as
   violações mais comuns descritas na própria documentação.

O objetivo declarado no README do repo é "centralizar, organizar e compartilhar
conhecimento de acessibilidade entre projetos e ambientes Angular". As três camadas
acima são a tradução disso.

---

## 1.1 A fonte é dado, não design

**Do `fonte/ARIA.html` sai só o conteúdo.** Nada do visual dele vai para o site.

O CSS daquele arquivo existe para ele ser legível aberto sozinho no navegador — é
descartável. O site tem identidade visual própria, construída do zero na Fase 1
(tokens) e na Fase 4 (componentes).

O que **não** deve ser herdado: paleta, tipografia, espaçamento, o visual de callout com
borda colorida à esquerda, os `<hr>` separando seções, a coluna única de texto corrido.

O que **é** herdado: os textos, os exemplos de código, as tabelas, os checklists e a
divisão em partes e seções.

O visual próprio está definido em [IDENTIDADE-VISUAL.md](IDENTIDADE-VISUAL.md):
referência dragonfly.xyz com as cores do Angular, seções numeradas `01`–`07`, e
ilustrações de acessibilidade espalhadas pelo site.

---

## 2. Restrição fundadora

Um site sobre acessibilidade que não é acessível é um produto morto.

Toda decisão de UI deste projeto é subordinada a: **WCAG 2.2 AA, navegação 100% por
teclado, TalkBack e VoiceOver validados**. Onde houver conflito entre estética e
acessibilidade, acessibilidade ganha. Isso não é um item de fase — é um filtro em todas
as fases, e a Fase 8 existe só para provar que foi cumprido.

---

## 3. Mapa do conteúdo de origem

**156 seções em 7 partes.** Os `id` abaixo já existem no `fonte/ARIA.html` corrigido e
são os mesmos usados nas rotas.

| # | Parte | Seções | Rota / `id` |
|---|-------|--------|-------------|
| 1 | Fundamentos de Acessibilidade Angular | 14 | `/fundamentos` |
| 2 | ARIA Completo para Angular | 27 | `/aria` |
| 3 | Formulários Acessíveis | 7 | `/formularios` |
| 4 | Componentes Interativos e Estruturas Complexas | 33 | `/componentes` |
| 5 | Angular, Angular Material e Angular CDK A11y | 35 | `/angular` |
| 6 | TalkBack, VoiceOver e Testes Reais | 21 | `/leitores-de-tela` |
| 7 | QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular | 19 | `/qa-wcag` |

**Estado da fonte (2026-07-28):** o HTML original não era bem formado — `<section>` sem
fechar na linha 1711, `<style>` duplicado no `<body>`, bloco ` ``` ` solto, 7 `<h1>` no
mesmo documento e escaping inconsistente nos blocos de código. **Tudo já foi corrigido**
em `fonte/ARIA.html`, com validação de aninhamento e conferência de perda de conteúdo
(152/152 blocos de código idênticos, zero texto perdido). Ver [fonte/README.md](../fonte/README.md).

Os checklists espalhados pelo documento são extraídos para uma coleção própria — eles
alimentam a Fase 6.

---

## 4. Decisões travadas

| Tema | Decisão | Motivo |
|------|---------|--------|
| Framework | Angular 21, standalone, zoneless | Pedido do PO; o produto fala de Angular, tem que ser Angular |
| Renderização | SSG / prerender de todas as rotas | Conteúdo fixo. Sem servidor, custo zero, SEO e first paint bons |
| Hospedagem | Vercel, output estático | Pedido do PO |
| Estilo | CSS puro com custom properties, sem Tailwind/Material | O site precisa de controle total sobre foco, contraste e reduced-motion |
| Visual | Referência dragonfly.xyz + cores Angular + ilustrações | Decisão do PO (2026-07-28) |
| Estado | Signals | Padrão Angular 21 |
| Persistência | localStorage (checklists) | Sem backend, sem conta, sem LGPD |
| Formato de dados | Módulos TypeScript tipados | **Sem FEW-AI-SERIAL** — decisão do PO (2026-07-28) |
| Branding | Nenhum. Footer com LinkedIn pessoal | Decisão do PO (2026-07-28) |
| Watermark | Zero-width Unicode, aplicar | Decisão do PO (2026-07-28) |
| Domínio | `*.vercel.app` | Decisão do PO (2026-07-28) |
| Idioma | pt-BR, `<html lang="pt-BR">` | Origem é pt-BR |

**Footer:** `https://www.linkedin.com/in/negra1m/`

---

## 5. Decisões do PO — todas fechadas (2026-07-28)

| Item | Decisão |
|------|---------|
| FEW-AI-SERIAL | **Não usar.** Conteúdo, índice de busca e regras do auditor em módulos TypeScript tipados. Sem camada de encode/decode |
| Watermark zero-width | **Aplicar.** U+200B e U+200D codificando a assinatura, no shell da aplicação |
| Domínio | `*.vercel.app`, sem domínio próprio |
| Banner Few Company | Não usar. Ferramenta PF |

Nada pendente. As fases podem rodar de ponta a ponta.

---

## 6. Fases

| Fase | Nome | Entrega |
|------|------|---------|
| 0 | ~~Ajuste da fonte~~ | ✅ **Concluída (2026-07-28)** — `fonte/ARIA.html` corrigido e validado |
| 1 | [Fundação](fase-1-fundacao/PLANO.md) | Workspace Angular 21 rodando, tooling, tokens, `ng build` limpo |
| 2 | [Conteúdo](fase-2-conteudo/PLANO.md) | ARIA.html convertido em dados estruturados e tipados |
| 3 | [Shell e navegação](fase-3-shell-navegacao/PLANO.md) | Header, sidebar, footer, rotas, foco pós-navegação |
| 4 | [Renderização da doc](fase-4-renderizacao-doc/PLANO.md) | Seções, code blocks, tabelas, callouts, TOC |
| 5 | [Busca](fase-5-busca/PLANO.md) | Busca client-side com combobox acessível |
| 6 | [Checklists interativos](fase-6-checklists/PLANO.md) | 14 checklists marcáveis, progresso, export |
| 7 | [Auditor de snippet](fase-7-auditor/PLANO.md) | Cola template Angular, recebe violações + WCAG |
| 8 | [Qualidade e a11y](fase-8-qualidade-a11y/PLANO.md) | axe, Lighthouse, teclado, TalkBack, VoiceOver |
| 9 | [Deploy Vercel](fase-9-deploy-vercel/PLANO.md) | Site no ar, prerender completo, headers |

Ordem é sequencial com uma exceção: **Fase 7 não bloqueia Fase 8**. Se o auditor esticar,
o site sobe sem ele e a rota `/auditor` entra depois.

---

## 7. Estrutura de pastas alvo

```
aria-angular/
├── plano/                        # este planejamento
├── fonte/                        # ARIA.html corrigido + original
├── scripts/                      # fix-aria, validate-html, diff-content
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── content/          # serviço de acesso ao conteúdo
│   │   │   ├── search/           # índice e busca
│   │   │   ├── progress/         # persistência dos checklists
│   │   │   └── a11y/             # foco pós-rota, LiveAnnouncer
│   │   ├── shared/               # componentes reutilizáveis
│   │   ├── features/
│   │   │   ├── doc/              # leitura da documentação
│   │   │   ├── checklists/
│   │   │   └── auditor/
│   │   ├── app.routes.ts
│   │   └── app.routes.server.ts  # RenderMode.Prerender
│   ├── content/                  # dados da doc em TypeScript tipado
│   └── styles/                   # tokens, reset, foco
├── vercel.json
└── angular.json
```

---

## 8. Como usar este plano

- Cada fase tem sua própria pasta com `PLANO.md` (o quê e por quê) e `CHECKLIST.md`
  (as tarefas granulares daquela fase).
- O [CHECKLIST-FASES.md](CHECKLIST-FASES.md) nesta pasta é o macro: um marco por fase,
  para acompanhar o projeto de cima. Ele **não** repete as tarefas granulares.
- Regra de marcação: toda tarefa concluída recebe a data no formato `(YYYY-MM-DD)`.
- Ao fechar uma fase, atualizar o `TODO.md` do projeto e o `14.AGENDA/TODO.md`.
