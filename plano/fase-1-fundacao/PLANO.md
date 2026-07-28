# Fase 1 — Fundação

**Objetivo:** ter um workspace Angular 21 configurado para saída estática, com o tooling
que vai garantir acessibilidade e consistência do primeiro commit ao último.

**Depende de:** nada.
**Bloqueia:** todas as outras fases.

---

## Por que esta fase existe

Duas coisas são caras de corrigir depois: a configuração de renderização (SSG vs SSR) e
as regras de estilo/foco. Ambas ficam travadas aqui.

---

## Entregáveis

### 1.1 Workspace

Angular 21 criado com SSR habilitado e depois configurado para **output estático**.

- `ng new aria-angular --ssr --style=css --routing`
- Em `angular.json`, o build usa `"outputMode": "static"`.
- `app.routes.server.ts` marca todas as rotas com `RenderMode.Prerender`.

O motivo de nascer com `--ssr` mesmo sendo SSG: o esquema de prerender do Angular vive no
pacote `@angular/ssr`. Sem ele não existe prerender de rota. O `outputMode: static` é o
que faz o build cuspir HTML e não uma função de servidor.

**Verificação:** após `ng build`, `dist/aria-angular/browser/` contém um `index.html` por
rota e **não** existe `dist/aria-angular/server/`.

### 1.2 Configuração da aplicação

`app.config.ts`:

- `provideZonelessChangeDetection()` — zoneless, padrão Angular 21.
- `provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }))`
  — âncoras e restauração de scroll são requisito de acessibilidade, não conforto.
- `provideClientHydration(withEventReplay())`.

`index.html`: `<html lang="pt-BR">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`
sem `maximum-scale` nem `user-scalable=no` (bloqueio de zoom é violação de WCAG 1.4.4).

### 1.3 Tooling

- **ESLint** com `angular-eslint` e o conjunto de regras de template a11y ligado
  (`@angular-eslint/template/*` — alt-text, elements-content, label-has-associated-control,
  no-autofocus, no-positive-tabindex, valid-aria, click-events-have-key-events,
  interactive-supports-focus, role-has-required-aria, table-scope). Regras a11y como
  **error**, não warning. Este projeto não pode ter lint de acessibilidade em amarelo.
- **Prettier** com config no repo.
- `package.json` com scripts: `dev`, `build`, `lint`, `format`, `test`.

### 1.4 Estilos base

Implementa [IDENTIDADE-VISUAL.md](../IDENTIDADE-VISUAL.md). Ler antes de escrever token.

`src/styles/` com quatro arquivos:

- `tokens.css` — custom properties: cores, espaçamento, tipografia, raio, sombra.
  Cores definidas em pares light/dark via `prefers-color-scheme` **e** `[data-theme]`,
  para o toggle manual da Fase 3 poder sobrepor. **Tema claro é o padrão.**

Cores oficiais Angular como base: `#E40035` (primária), `#151517` (ink), `#FFFFFF`.

Duas tarefas específicas:

1. **Extrair os stops do gradiente** do logo Angular dos arquivos oficiais do
   [press kit](https://angular.dev/press-kit). O gradiente é a assinatura visual do
   Angular pós-v17 e entra como superfície decorativa — nunca atrás de texto.
2. **Derivar `--accent-dark`.** Medição feita: `#E40035` sobre `#151517` dá **3.79:1** e
   **reprova** AA para texto normal. No tema escuro a cor da marca precisa ser clareada.
   Sobre branco dá 4.83:1 e passa AA — mas não AAA.
- `reset.css` — reset mínimo. Não zera `outline`.
- `focus.css` — anel de foco global usando `:focus-visible`, com espessura e offset
  suficientes para passar em 2.4.11 (Focus Not Obscured) e 2.4.13 (Focus Appearance).
  **Nunca** `outline: none` sem substituto visível.
- `motion.css` — bloco `@media (prefers-reduced-motion: reduce)` desligando transições
  e animações.

Paleta precisa fechar contraste AA (4.5:1 texto normal, 3:1 texto grande e componentes)
nos dois temas. Isso é verificado agora, não na Fase 8 — refazer paleta no fim é retrabalho.

Tipografia: sans geométrica de peso alto nos títulos, sans de leitura no corpo (17–18px,
line-height ~1.7), mono no código. **Nenhuma fonte externa bloqueante** — sistema ou
self-hosted com `font-display: swap`.

### 1.4.1 Ilustrações base

O PO pediu ilustrações de acessibilidade e "carinho" por todo o site. A biblioteca começa
aqui para os componentes das fases seguintes já terem o que usar.

Formato: **SVG inline**, herdando `currentColor`, funcionando nos dois temas.
Decorativas levam `aria-hidden="true"`. Nenhuma pode carregar significado sozinha.

Direção e inventário em [IDENTIDADE-VISUAL.md §5](../IDENTIDADE-VISUAL.md).
Pendente do PO: usar ou não a mascote Angie do press kit Angular.

### 1.4.2 Logo do produto

Adaptação do **escudo Angular atual (v17+)**: silhueta reconhecível, conteúdo interno
próprio de acessibilidade. Permitido e encorajado pelo press kit, que licencia os logos
sob CC BY 4.0.

Nunca o escudo de 2016 (v3–v16) nem o do AngularJS — o press kit pede para evitar por
causa de confusão de versão. Atribuição CC BY 4.0 obrigatória.

Regras completas em [MARCA-E-LICENCA.md](../MARCA-E-LICENCA.md).

### 1.4.3 Arquivos de projeto open source

Como o projeto nasce aberto, esses arquivos entram já na fundação — não no fim:

- `LICENSE` — MIT (código)
- `LICENSE-CONTENT` — CC BY 4.0 (conteúdo da documentação)
- `README.md` com o disclaimer de não-afiliação
- `NOTICE.md` com a atribuição CC BY 4.0 do logo
- `CONTRIBUTING.md` — incluindo que PR que quebra acessibilidade não passa
- `CODE_OF_CONDUCT.md`
- Issue templates, um deles usando o Template de Bug do próprio conteúdo

Pendente do PO: confirmar a origem/titularidade do texto do `ARIA.html` antes de publicar
sob licença aberta.

### 1.5 Watermark

Watermark invisível em zero-width Unicode (U+200B e U+200D) no shell da aplicação,
conforme padrão Few. Decisão do PO em 2026-07-28.

Cuidado específico deste projeto: os caracteres zero-width **não podem** cair dentro de
texto lido por leitor de tela nem dentro de elemento interativo — em alguns leitores eles
geram pausa ou leitura espúria. Um guia de acessibilidade não pode introduzir ruído de
leitura no próprio markup.

Local seguro: um nó dedicado no shell, fora do fluxo de leitura, com `aria-hidden="true"`.
Verificar em TalkBack e VoiceOver na Fase 8.

Se o Prettier ou o editor removerem os caracteres, restaurar imediatamente.

### 1.6 Estrutura de pastas

Criar o esqueleto de `core/`, `shared/`, `features/` conforme `plano/PLANO.md` §7,
mesmo que vazio, para não haver improviso de organização depois.

---

## Decisões técnicas

| Questão | Decisão | Alternativa descartada |
|---------|---------|------------------------|
| CSS | CSS puro + custom properties | Tailwind — abstrai foco e contraste, e o projeto precisa de controle explícito |
| UI kit | Nenhum | Angular Material — o site precisa demonstrar HTML semântico cru, não delegar |
| Change detection | Zoneless | Zone.js — descontinuado como padrão no 21 |
| Testes | Vitest (padrão do Angular 21) | Karma — descontinuado |

---

## Critério de pronto

`ng serve` sobe, `ng lint` passa limpo, `ng build` gera saída estática, e a página inicial
em branco já passa em axe e tem foco visível ao tabular.
