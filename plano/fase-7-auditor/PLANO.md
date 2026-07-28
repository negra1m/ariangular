# Fase 7 — Auditor de Snippet

**Objetivo:** colar um trecho de template Angular e receber, na hora, as violações de
acessibilidade mais comuns — cada uma com severidade, critério WCAG e link para a seção
da documentação que explica o problema.

**Depende de:** Fases 2, 3 e 4.
**Bloqueia:** nada. **Não bloqueia a Fase 8 nem o deploy** — se esticar, o site sobe sem
o auditor e a rota entra depois.

---

## Por que esta fase existe

Fecha o ciclo: ler → aplicar → verificar. E é o único diferencial real deste produto
frente a qualquer outra doc de acessibilidade na internet.

---

## Escopo e limite honesto

O auditor **não** é um substituto do axe, nem do Lighthouse, nem de teste com leitor de
tela real. Ele analisa markup estático, sem DOM renderizado, sem CSS computado, sem
runtime. Não sabe o que `[attr.aria-label]="descricao"` vai valer em tempo de execução.

A própria documentação diz isso na seção "O que Ferramentas NÃO Encontram". **A interface
precisa dizer isso também**, visível na página, não escondido num rodapé. Um auditor que
finge ser completo cria falsa confiança — que é pior que não ter auditor.

O que ele faz bem: pegar os erros de padrão que aparecem em 90% dos PRs, e ensinar
enquanto pega, apontando para a seção da doc.

---

## Regras

Derivadas de "Erros mais comuns encontrados em Angular", "Erros mais comuns com ARIA" e
"Bugs Mais Comuns Encontrados em Produção" — todas do próprio documento.

| # | Regra | Severidade | WCAG |
|---|-------|-----------|------|
| 1 | `<div>`/`<span>` com `(click)` sem `role` e sem `tabindex` | Crítico | 2.1.1, 4.1.2 |
| 2 | Elemento com `(click)` sem handler de teclado equivalente | Crítico | 2.1.1 |
| 3 | `<button>` cujo conteúdo é só ícone (`<mat-icon>`, `<i>`, `<svg>`) sem `aria-label`/`aria-labelledby` | Crítico | 4.1.2 |
| 4 | `<input>`/`<select>`/`<textarea>` sem `id` com `<label for>`, sem `aria-label`, sem `aria-labelledby` | Crítico | 1.3.1, 3.3.2 |
| 5 | `<input>` só com `placeholder` como rótulo | Crítico | 3.3.2 |
| 6 | `<img>` sem `alt` | Crítico | 1.1.1 |
| 7 | `<a>` com `(click)` e sem `href`/`routerLink` | Alto | 2.1.1, 4.1.2 |
| 8 | `<a>` sem conteúdo textual e sem rótulo acessível | Alto | 2.4.4 |
| 9 | `tabindex` positivo | Alto | 2.4.3 |
| 10 | `aria-hidden="true"` em elemento focável ou que contém focável | Crítico | 4.1.2 |
| 11 | `aria-describedby`/`aria-labelledby` apontando `id` inexistente no snippet | Médio | 1.3.1 |
| 12 | `role="button"` em `<button>`, `role="link"` em `<a href>` — ARIA redundante | Baixo | — |
| 13 | `aria-expanded` com valor literal (`"false"`) em vez de binding | Médio | 4.1.2 |
| 14 | `role="tab"` sem `aria-selected` | Médio | 4.1.2 |
| 15 | `role="dialog"` sem `aria-modal` ou sem rótulo acessível | Alto | 4.1.2 |
| 16 | `role="checkbox"`/`switch` sem `aria-checked` | Médio | 4.1.2 |
| 17 | `role="progressbar"` sem `aria-valuenow`/`min`/`max` | Médio | 4.1.2 |
| 18 | Tabela feita com `<div>` (grid de divs com aparência de tabela) | Médio | 1.3.1 |
| 19 | `<table>` sem `<th>` ou `<th>` sem `scope` | Médio | 1.3.1 |
| 20 | Salto de nível de heading dentro do snippet (h1 → h4) | Médio | 1.3.1, 2.4.6 |
| 21 | `outline: none` em CSS inline sem substituto | Alto | 2.4.7 |
| 22 | `autofocus` presente | Baixo | 2.4.3 |
| 23 | `role` inválido / atributo `aria-*` inexistente | Médio | 4.1.2 |
| 24 | `<select>`/`<option>` custom com `<div role="listbox">` sem gestão de teclado aparente | Médio | 2.1.1 |

Cada regra é um módulo isolado com seus próprios testes: snippet que dispara, snippet que
não dispara. Sem isso, o auditor acumula falso positivo e o usuário para de confiar.

---

## Parsing

Template Angular **não é HTML válido**: `*ngIf`, `@if`, `[attr.x]`, `(click)`, `{{ }}`,
`#ref`. Duas opções avaliadas:

| Opção | Prós | Contras |
|-------|------|---------|
| **`DOMParser`** com pré-processamento | Nativo, zero dependência, entende estrutura | Precisa proteger `{{ }}` e sintaxe de bloco `@if`/`@for` antes de parsear |
| Compilador de template do Angular | Fidelidade total | Pesa muito no bundle; API não é pública e estável para isso |

**Decisão: `DOMParser`.**

Pré-processamento antes de parsear:
1. Substituir `{{ … }}` por um placeholder inócuo.
2. Neutralizar blocos `@if`/`@for`/`@switch`/`@defer` mantendo o conteúdo interno.
3. Atributos com `[`, `(`, `*`, `#` sobrevivem ao `DOMParser` — ele aceita nomes de
   atributo estranhos. Confirmar por teste antes de assumir.

Falha de parse não pode dar erro cru na tela: mensagem clara de que o trecho não pôde ser
analisado e por quê.

---

## Interface

### 7.1 Entrada

- `<label for="snippet">Cole seu template Angular</label>` + `<textarea>` — label real,
  não placeholder. O auditor não pode cometer a regra 5.
- Botão "Analisar" explícito. **Não** analisar a cada tecla: análise automática enquanto
  digita gera anúncios constantes e resultado instável.
- Botão de exemplo, carregando um snippet com problemas conhecidos — serve de tutorial.
- Limite de tamanho com aviso antes de travar.

### 7.2 Resultado

- Contagem por severidade no topo.
- Lista de achados ordenada por severidade. Cada achado:
  - Título do problema
  - Trecho ofensor (com número da linha, se der)
  - Por que é problema — como o leitor de tela se comporta
  - Como corrigir — exemplo correto
  - Critério WCAG
  - **Link para a seção da doc** que explica
- Severidade nunca comunicada só por cor: rótulo textual + ícone com `aria-hidden`.
- Estado limpo: mensagem que celebra **e** relembra o limite — "nenhuma violação
  detectada nas 24 regras. Isso não substitui teste com TalkBack e VoiceOver."

### 7.3 Anúncio

- Resultado anunciado via `aria-live="polite"`: `"Análise concluída. 3 problemas críticos,
  1 médio."`
- Após analisar, mover foco para o cabeçalho do resultado. Aqui mover foco é correto —
  foi uma ação explícita do usuário, não uma mudança espontânea.

---

## Critério de pronto

As 24 regras implementadas e testadas nos dois sentidos, snippet de exemplo disparando os
achados esperados, resultado navegável só com teclado, e o limite do auditor declarado de
forma visível na interface.
