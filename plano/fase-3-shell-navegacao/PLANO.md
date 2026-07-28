# Fase 3 — Shell e Navegação

**Objetivo:** a casca do site — header, navegação lateral, footer, rotas — construída com
o mesmo rigor que a documentação prega.

**Depende de:** Fases 1 e 2.
**Bloqueia:** Fases 4, 5, 6 e 7.

---

## Por que esta fase existe

O documento dedica uma seção inteira ao problema de foco em SPA Angular: *"Aplicações SPA
não recarregam a página. O leitor de tela não percebe automaticamente que houve mudança
de tela."* A solução que ele prescreve — mover foco para o H1 e anunciar a rota — é
exatamente o que este shell precisa implementar. É a prova de conceito do produto.

---

## Entregáveis

### 3.1 Rotas

```
/                    → home
/fundamentos         → parte 1
/aria                → parte 2
/formularios         → parte 3
/componentes         → parte 4
/angular             → parte 5
/leitores-de-tela    → parte 6
/qa-wcag             → parte 7
/checklists          → Fase 6
/auditor             → Fase 7
```

Navegação para seção específica via fragmento: `/aria#aria-label`.

Todas as rotas com `title` no `Route`, e `TitleStrategy` customizada que compõe
`"<Seção> · ARIA Angular"`. Título de página é WCAG 2.4.2 — não é detalhe de SEO.

### 3.2 Estrutura semântica

Exatamente o que o §7 do documento ("Estrutura Semântica Básica") manda:

```html
<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
<header>…</header>
<nav aria-label="Documentação">…</nav>
<main id="conteudo" tabindex="-1">…</main>
<footer>…</footer>
```

- **Skip link** — primeiro elemento focável, invisível até receber foco, visível e com
  contraste quando focado. WCAG 2.4.1.
- **Landmarks** — um `header`, um `main`, um `footer`, e cada `nav` com `aria-label`
  distinto (há mais de um: navegação da doc e navegação do footer).
- **`main` com `tabindex="-1"`** — alvo do skip link e do foco pós-navegação.

### 3.3 Header

- Nome do produto como link para `/`.
- Botão de busca (a busca em si é Fase 5; aqui entra o slot).
- Toggle de tema claro/escuro — `<button>` com `aria-pressed` refletindo o estado,
  não um `<div>` estilizado. Preferência salva em localStorage, com `prefers-color-scheme`
  como padrão inicial.
- Botão de abrir a navegação no mobile — `<button>` com `aria-expanded` e `aria-controls`
  apontando para o `nav`. O `aria-expanded` precisa refletir o estado **real** via
  binding, não valor fixo. O documento cita "aria-expanded desatualizado" como erro comum.

### 3.4 Navegação lateral

- `<nav aria-label="Documentação">` com `<ul>` / `<li>` — lista de verdade, para o leitor
  anunciar "lista com N itens".
- Item da rota atual com `aria-current="page"`.
- Seção atual dentro da parte com `aria-current="location"`.
- No mobile vira painel sobreposto: foco preso enquanto aberto, fecha com `ESC`, e o foco
  volta para o botão que abriu. Mesmas regras de modal descritas no documento.

### 3.5 Footer

- `<nav aria-label="Links do rodapé">`.
- Link para o LinkedIn: `https://www.linkedin.com/in/negra1m/`
  - `target="_blank"` + `rel="noopener noreferrer"`
  - Texto acessível que avisa que abre em nova aba — link com destino externo sem aviso
    é falha de 3.2.5. Ex.: `<span class="sr-only"> (abre em nova aba)</span>`
- Crédito, ano e link para o repositório.
- Link para as licenças (MIT / CC BY 4.0).
- **Disclaimer de não-afiliação**, obrigatório e legível:

  > Projeto independente, sem afiliação com o Google ou com o time Angular.
  > Angular é marca da Open Usage Commons. Logo adaptado do Angular Press Kit, sob CC BY 4.0.

  Texto real, com contraste AA. Não pode ser cinza claro escondido — num site sobre
  acessibilidade, aviso ilegível é contradição. Ver [MARCA-E-LICENCA.md](../MARCA-E-LICENCA.md).
- Sem branding Few Company (decisão do PO em 2026-07-28).

### 3.6 Acessibilidade de navegação — o núcleo da fase

Serviço `core/a11y/route-focus.service.ts`:

1. Assina `NavigationEnd` do Router.
2. Move foco para o `<h1>` da nova página (`tabindex="-1"` no h1, `.focus()`).
3. Anuncia a rota com `LiveAnnouncer` do `@angular/cdk/a11y`:
   `"Formulários Acessíveis carregado"` — o mesmo padrão que o documento exemplifica.
4. Não faz scroll manual — `withInMemoryScrolling` da Fase 1 cuida disso.

Ordem importa: anunciar antes de mover foco causa fala cortada. Mover foco primeiro,
anunciar depois.

`@angular/cdk` entra aqui como dependência — só o pacote `a11y`, não o Material inteiro.
O documento trata o CDK A11y como "o pacote mais importante para acessibilidade na stack
Angular"; usar ele é coerente com o que o site ensina.

---

## Armadilhas conhecidas

| Risco | Mitigação |
|-------|-----------|
| `LiveAnnouncer` no SSR/prerender toca `document` e quebra o build | Guardar com `afterNextRender` ou checagem de plataforma |
| Foco no `h1` dispara scroll indesejado | `focus({ preventScroll: true })` quando houver fragmento na URL |
| Anúncio duplicado ao navegar por fragmento na mesma rota | Só anunciar quando a rota base muda |
| Toggle de tema causa flash na primeira pintura | Script inline no `index.html` aplicando `data-theme` antes do CSS |

---

## Critério de pronto

Navegar entre as 7 partes só com teclado, com foco visível o tempo todo, foco chegando no
H1 a cada troca de rota, rota anunciada por leitor de tela, e o menu mobile abrindo,
prendendo foco, fechando no ESC e devolvendo foco ao botão.
