# Fase 2 — Conteúdo

**Objetivo:** transformar o `ARIA.html` em dados estruturados, tipados e consultáveis,
sem perder nenhuma informação do original.

**Depende de:** Fase 1.
**Bloqueia:** Fases 3, 4, 5, 6 e 7 (o auditor tira as regras daqui).

---

## Por que esta fase existe

O conteúdo é o produto. Se ele ficar preso em HTML colado dentro de componente, não dá
para buscar, não dá para gerar índice, não dá para linkar do auditor para a seção que
explica o erro, e cada correção de texto vira mexida em template.

Extraindo para dados: uma fonte, várias vistas.

---

## Estado do arquivo de origem — resolvido

O `ARIA.html` original não era HTML bem formado. **Isso já foi corrigido em 2026-07-28**
e a fonte de verdade agora é [`fonte/ARIA.html`](../../fonte/README.md).

O que estava quebrado e foi consertado: `<section>` sem fechar na linha 1711 (deixava
todo o resto do documento aninhado dentro dela), `<p>` órfão, `<style>` duplicado no
`<body>`, bloco ` ``` ` de markdown solto, 7 `<h1>` no mesmo documento, e — o mais
perigoso — escaping inconsistente nos blocos de código, com parte dos exemplos usando
`&lt;` e parte usando `<` cru.

A conversão foi validada: aninhamento de tags sem desbalanceamento, 152 de 152 blocos de
código presentes e idênticos, tabelas e células idênticas, zero texto perdido.

**Consequência para esta fase:** a extração agora parte de um documento regular, com
`id` já atribuídos a partes e seções, hierarquia de heading consistente (`h2` parte,
`h3` seção, `h4`/`h5` subtítulo) e escaping uniforme. O parse deixa de ser o risco que
era. Ainda assim, cada parte é conferida contra a fonte antes de seguir.

---

## Modelo de dados

Três coleções.

### 2.1 `parts` — as 7 partes

```
Part {
  id: string          // 'fundamentos'
  order: number
  title: string       // 'Fundamentos de Acessibilidade Angular'
  summary: string     // parágrafo de abertura da parte
  sections: Section[]
}
```

### 2.2 `sections` — as 156 seções

Os `id` já existem no `fonte/ARIA.html` — reaproveitar, não gerar de novo. Assim as
âncoras do documento e as do site são as mesmas.

```
Section {
  id: string          // 'aria-label' — vira a âncora da URL
  partId: string
  order: number
  title: string       // 'aria-label'
  blocks: Block[]
}
```

`Block` é uma união discriminada. Os tipos presentes no original:

| Tipo | Origem no HTML | Campos |
|------|----------------|--------|
| `paragraph` | `<p>` | `text` |
| `heading` | `<h4>`, `<h5>` | `level`, `text` |
| `list` | `<ul>`, `<ol>` | `ordered`, `items[]` |
| `table` | `<table>` | `caption?`, `headers[]`, `rows[][]` |
| `code` | `<pre><code>` | `language`, `code`, `variant?` |
| `callout` | `<aside class="callout callout--*">` | `tone`, `blocks[]` |
| `reading` | `<p>Leitura:</p>` + `<pre>` | `text` — como o leitor de tela anuncia |

Dois refinamentos que o original pede:

- **`code.variant`** — o documento marca exemplos com `✅ Correto`, `❌ Errado`,
  `🚫 Evitar`. Isso vira `variant: 'correct' | 'wrong' | 'neutral'`, e a UI renderiza
  com rótulo textual, não só emoji e cor. Cor sozinha para transmitir significado é
  violação de WCAG 1.4.1 — o site não pode cometer o erro que ele documenta.
- **`reading`** — o par "Leitura: / `Salvar, botão`" aparece dezenas de vezes e é o
  padrão mais característico do documento. Merece tipo próprio para renderizar como
  saída de leitor de tela, não como bloco de código genérico.

### 2.3 `checklists` — os 14 checklists

Extraídos das seções onde aparecem e promovidos a coleção de primeira classe.

```
Checklist {
  id: string            // 'pull-request'
  title: string         // 'Checklist de Pull Request'
  audience: 'dev' | 'qa' | 'po' | 'todos'
  sourceSectionId: string   // volta para a seção de origem
  items: { id: string, text: string }[]
}
```

Inventário: ARIA, Modal, MatDialog, Componentes, Angular, TalkBack, VoiceOver,
Final TalkBack/VoiceOver, Story, Desenvolvimento, Pull Request, QA, Definition of Done,
Revisão de Tela Nova.

---

## Formato de armazenamento

**Módulos TypeScript tipados.** Decisão do PO em 2026-07-28: sem FEW-AI-SERIAL neste
projeto.

- `src/content/types.ts` — `Part`, `Section`, `Block`, `Checklist`
- `src/content/parts/fundamentos.ts` … `qa-wcag.ts` — um arquivo por parte
- `src/content/checklists.ts`
- `src/content/index.ts` — agrega e exporta

Vantagem prática: o TypeScript valida a estrutura em tempo de compilação, o tree-shaking
funciona, o prerender enxerga tudo, e não há custo de parse no cliente. Sem camada de
encode/decode para manter.

---

## Ordem de trabalho

Parte por parte, na ordem do documento. Cada parte extraída é conferida contra
`fonte/ARIA.html` antes de ir para a próxima — evita descobrir no fim que o modelo de
blocos não cobre um caso que só aparece na parte 5.

Começar por **Formulários** (7 seções, a menor) para validar o modelo com pouco custo,
depois seguir na ordem natural.

O `scripts/diff-content.js` já existente pode ser adaptado para conferir a extração
contra a fonte, em vez de conferência só visual.

---

## Critério de pronto

As 7 partes (156 seções) e os 14 checklists em dados tipados; um teste que percorre a
coleção e falha se alguma seção estiver sem `id`, sem título ou sem blocos; e conferência
de cada parte contra `fonte/ARIA.html`.
