# Fase 4 — Renderização da Documentação

**Objetivo:** transformar os blocos da Fase 2 em páginas legíveis, com o índice lateral,
âncoras e code blocks que fazem a doc ser realmente usável.

**Depende de:** Fases 2 e 3.
**Bloqueia:** Fase 5 (a busca precisa navegar para seções renderizadas).

---

## Por que esta fase existe

Aqui o conteúdo vira produto. É também onde mora o maior risco de o site violar o que
ensina: exemplo de código errado marcado só com cor vermelha, tabela sem `scope`, botão
de copiar sem nome acessível.

> **O visual é próprio.** Nada do CSS de `fonte/ARIA.html` entra aqui. Os componentes
> abaixo descrevem *estrutura e requisito de acessibilidade*, não aparência — a
> aparência sai dos tokens da Fase 1 e da direção visual definida pelo PO.

---

## Entregáveis

### 4.1 Página de parte

`features/doc/part-page`:

```html
<article>
  <h1 tabindex="-1">{{ part.title }}</h1>
  <p class="lead">{{ part.summary }}</p>

  <section *para cada seção*>
    <h2 [id]="section.id">{{ section.title }}</h2>
    <!-- blocos -->
  </section>
</article>
```

Regras de heading: **um** `h1` por página (o título da parte), `h2` para seção, e os
headings internos dos blocos entram como `h3`/`h4` — nunca pulando nível. O documento
tem uma seção inteira sobre isso (§9, "Headings"); a hierarquia é gerada e validada, não
copiada cegamente do original.

### 4.2 Componentes de bloco

Um componente por tipo de bloco, com `@switch` no tipo:

| Componente | Requisitos de acessibilidade |
|------------|------------------------------|
| `BlockParagraph` | `<p>`. Largura máxima ~80 caracteres (WCAG 1.4.8) |
| `BlockHeading` | Nível calculado, nunca fixo |
| `BlockList` | `<ul>`/`<ol>` reais |
| `BlockTable` | `<caption>`, `<th scope="col">`, container com `overflow-x:auto` **e** `tabindex="0"` + `role="region"` + `aria-label`, senão a tabela rolável vira armadilha para teclado |
| `BlockCode` | Ver 4.3 |
| `BlockCallout` | Ver 4.4 |
| `BlockReading` | Ver 4.5 |

### 4.3 Code block

- `<pre><code>` com a linguagem indicada.
- **Botão copiar**: `<button>` de verdade, `aria-label="Copiar código de <título da seção>"`.
  Ao copiar, confirmação anunciada via `LiveAnnouncer` — não só um tooltip visual.
- **Variante correto/errado**: rótulo **textual** visível ("Correto" / "Evitar"), com
  borda e ícone. Nunca só cor. WCAG 1.4.1.
- **Não** tornar o `<pre>` focável por padrão. Se o código passar da largura, aí sim
  container rolável com `tabindex="0"` e `role="region"` rotulado.
- Highlight de sintaxe: opcional e por último. Se entrar, precisa passar contraste 4.5:1
  em **todos** os tokens, nos dois temas. A maioria dos temas prontos não passa. Sem
  tempo para validar isso, fica sem highlight — legibilidade acima de enfeite.

### 4.4 Callout

Os três tons do original: `info`, `warning`, `success`.

- `<aside>` com heading próprio ou `aria-label` — precisa ser identificável fora de contexto.
- Rótulo textual do tom ("Atenção", "Boa prática", "Informação"), não só cor de borda.
- Ícone com `aria-hidden="true"` — o rótulo textual já dá o significado, o ícone duplicaria.
- **Sem** `role="alert"` ou `aria-live`. É conteúdo estático de página, não notificação.
  Usar `alert` aqui seria exatamente o "aria-live em excesso" que o documento lista como
  erro comum.

### 4.5 Bloco de leitura de tela

O padrão mais característico do documento: "Leitura: `Salvar, botão`".

Renderizado como um bloco visualmente distinto, com rótulo "Como o leitor de tela
anuncia:" e o texto em destaque. É conteúdo, então é lido normalmente — sem ARIA especial.

### 4.6 Índice da página (TOC)

- `<nav aria-label="Nesta página">` com lista de links para as âncoras das seções.
- Seção visível marcada com `aria-current="location"`, via `IntersectionObserver`.
- O `IntersectionObserver` **não** pode mover foco nem anunciar nada — é indicação
  visual passiva. Anunciar a cada scroll seria tortura para quem usa leitor de tela.
- Sticky no desktop, colapsável no mobile.
- No prerender, o TOC precisa existir no HTML estático — nada de renderizar só no cliente.

### 4.7 Âncoras de seção

Cada `h2` recebe um link de âncora (`#`) para copiar o endereço direto da seção.
`aria-label="Link direto para <título da seção>"`. Visível no hover **e** no foco —
`opacity: 0` que só reage a hover exclui quem navega por teclado.

### 4.8 Home — landing curta

Decisão do PO: landing curta com entrada, não a doc direto.

- Hero com a tese do produto e uma ilustração
- As 7 partes em cards numerados `01`–`07`, no estilo de seções numeradas da referência
- Atalho para `/checklists` e `/auditor`
- Uma tela e meia, não mais

Cards são `<a>` envolvendo o conteúdo, não `<div (click)>` — o documento chama isso de
"Erro Mais Comum do Time Front".

O site é **social**: a home precisa explicar em 5 segundos para quem nunca ouviu falar.

### 4.9 Numeração e ilustração das partes

Cada parte abre com o número (`01`–`07`) em escala grande e uma ilustração de
acessibilidade coerente com o tema daquela parte. Número é decorativo para o leitor de
tela — o título é que carrega o significado.

### 4.10 Compartilhamento

Como o uso é social, cada rota precisa de metadados próprios:

- `<title>` e `<meta name="description">` por rota
- OG image por rota, gerada no build — não uma imagem genérica para o site inteiro
- Twitter/X card
- URL canônica

Uma seção compartilhada precisa fazer sentido aberta sozinha, sem o resto do site.

---

## Critério de pronto

As 7 partes renderizadas por completo, conferidas contra o original, sem violação de axe,
lidas de ponta a ponta com leitor de tela sem trecho confuso ou perdido.
