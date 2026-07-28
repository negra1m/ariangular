# Fase 5 — Busca

**Objetivo:** achar qualquer seção da documentação em segundos, com um combobox que
funciona igualmente bem no mouse, no teclado e no leitor de tela.

**Depende de:** Fases 2, 3 e 4.
**Bloqueia:** nada.

---

## Por que esta fase existe

São 156 seções. Sem busca, o site é um PDF com sidebar. Com busca, vira consulta — que é
o uso real: o dev bate num problema, procura "modal foco" e chega na resposta.

---

## Entregáveis

### 5.1 Índice de busca

Gerado em **build time** a partir das coleções da Fase 2, nunca montado no cliente
percorrendo o DOM.

```
SearchEntry {
  id: string          // 'aria#aria-label'
  partId: string
  partTitle: string
  sectionId: string
  sectionTitle: string
  text: string        // texto achatado da seção, sem markup
  keywords: string[]  // atributos ARIA, roles, nomes de API citados
}
```

`keywords` é o que faz a busca ser útil de verdade: `aria-expanded`, `cdkTrapFocus`,
`LiveAnnouncer`, `MatDialog`, `role="tablist"`, `2.4.3`. Buscar por um critério WCAG ou
por um nome de API do CDK precisa funcionar.

Armazenado como módulo TypeScript tipado, junto com o resto do conteúdo.

### 5.2 Motor de busca

Implementação própria, sem biblioteca. O volume é pequeno (156 entradas, poucas centenas
de KB) e o custo de Lunr/FlexSearch no bundle não se justifica.

Ranking, em ordem de peso:

1. Match exato em `keywords`
2. Match no título da seção
3. Match no título da parte
4. Match no corpo do texto

Normalização: minúsculas e **remoção de acento** — buscar "formularios" precisa achar
"Formulários". Isso não é opcional em pt-BR.

Busca por múltiplos termos: AND (todos os termos precisam aparecer).

### 5.3 Componente de busca — padrão combobox

Segue o WAI-ARIA Authoring Practices para combobox com listbox popup. Este componente é
a vitrine técnica do site: se ele estiver errado, o produto perde credibilidade.

```html
<input
  type="text"
  role="combobox"
  aria-expanded="true|false"
  aria-controls="resultados-busca"
  aria-autocomplete="list"
  [attr.aria-activedescendant]="opcaoAtivaId"
  aria-label="Buscar na documentação">

<ul id="resultados-busca" role="listbox">
  <li role="option" [attr.aria-selected]="…" [id]="…">…</li>
</ul>
```

Teclado obrigatório:

| Tecla | Comportamento |
|-------|---------------|
| `↓` / `↑` | Move a opção ativa. O foco **permanece** no input |
| `Enter` | Navega para a opção ativa |
| `Esc` | Fecha a lista; segundo `Esc` limpa o campo |
| `Home` / `End` | Primeira / última opção |
| `Tab` | Fecha a lista e segue o fluxo normal |

Ponto crítico: o foco **nunca** sai do input. A opção ativa é indicada por
`aria-activedescendant`, não por `.focus()` no `<li>`. Trocar isso quebra a digitação
para quem usa leitor de tela.

### 5.4 Anúncio de resultados

`<div aria-live="polite" aria-atomic="true">` com a contagem: `"12 resultados"`.

- `polite`, nunca `assertive` — busca não é emergência.
- **Debounce de ~300ms** antes de anunciar. Sem debounce, cada tecla dispara um anúncio
  e o leitor de tela vira uma metralhadora. Este é o erro mais comum em combobox
  acessível e é o que o documento chama de "aria-live em excesso".
- Estado vazio com texto útil, não só "nada encontrado".

### 5.5 Abertura da busca

- Botão no header com `aria-haspopup` adequado.
- Atalho `/` para focar a busca — mas **desativado** quando o foco estiver em campo de
  texto, senão quebra a digitação. Atalho de caractere único precisa disso por WCAG 2.1.4.
- Documentar o atalho na interface; atalho invisível não existe.

### 5.6 Realce do termo

O termo buscado realçado no resultado usando `<mark>`. Semântico e com contraste próprio
verificado nos dois temas.

---

## Riscos

| Risco | Mitigação |
|-------|-----------|
| Índice cresce e pesa no bundle | Medir; se passar de ~300KB, carregar sob demanda no primeiro uso da busca |
| Busca instável em SSG (`window` indefinido) | Motor puro, sem tocar `window`; só o componente é client-side |
| `aria-activedescendant` ignorado por alguns leitores | Validar em TalkBack e VoiceOver na Fase 8 antes de dar por pronto |

---

## Critério de pronto

Buscar por termo com acento, sem acento, por atributo ARIA, por critério WCAG e por nome
de API do CDK — todos retornando resultado certo. Fluxo inteiro operável só com teclado,
com foco preso no input e contagem anunciada uma vez, não a cada tecla.
