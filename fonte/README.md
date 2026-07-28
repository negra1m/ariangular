# fonte/

Conteúdo de origem do projeto. É daqui que a Fase 2 extrai os dados da aplicação.

| Arquivo | O que é |
|---------|---------|
| `ARIA.original.html` | Cópia intacta do documento original, como recebido. Não editar. |
| `ARIA.html` | Versão corrigida. **Esta é a fonte de verdade.** |

O original em `C:\Users\vnsn_\Downloads\ARIA.html` também segue intacto.

---

## O que foi corrigido

O documento original tinha 4.646 linhas e não era HTML bem formado.

| Defeito | Onde | Correção |
|---------|------|----------|
| `<section>` não fechada, deixando todo o resto do documento aninhado dentro dela | linha ~1711 | Estrutura reconstruída a partir dos headings |
| `<p>` aberto e nunca fechado | linha ~1711 | Removido |
| `<style>` duplicado no meio do `<body>` | linha ~612 | Removido; um único `<style>` no `<head>` |
| Bloco ` ``` ` de markdown solto | linha ~2490 | Removido |
| 7 `<h1>` no mesmo documento | várias | `h1` único; partes viraram `h2`, seções `h3`, subtítulos `h4`/`h5` |
| Blocos de código com escaping inconsistente — parte com `&lt;`, parte com `<` cru | várias | Todos normalizados para escaping completo |
| Tabelas sem `<thead>`/`<tbody>` e `<th>` sem `scope` | 13 tabelas | Normalizadas |
| `<div class="info\|warning\|success">` sem rótulo textual | 5 callouts | Viraram `<aside>` com rótulo textual — cor sozinha viola WCAG 1.4.1 |
| Sem âncoras | — | `id` em toda parte e seção, mais sumário navegável |
| Sem skip link, sem `<main>` | — | Adicionados |
| CRLF misturado | — | Normalizado para LF |

Título da parte 2 (`Parte 2 - ARIA Completo para Angular`) perdeu o prefixo de numeração,
que só ela tinha.

---

## Estrutura resultante

156 seções em 7 partes:

| Parte | Seções | `id` |
|-------|--------|------|
| Fundamentos de Acessibilidade Angular | 14 | `fundamentos` |
| ARIA Completo para Angular | 27 | `aria` |
| Formulários Acessíveis | 7 | `formularios` |
| Componentes Interativos e Estruturas Complexas | 33 | `componentes` |
| Angular, Angular Material e Angular CDK A11y | 35 | `angular` |
| TalkBack, VoiceOver e Testes Reais | 21 | `leitores-de-tela` |
| QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular | 19 | `qa-wcag` |

---

## Verificação de perda de conteúdo

Comparação entre original e corrigido:

- 152 de 152 blocos de código presentes e idênticos
- 13 tabelas, 72 `<tr>`, 119 `<td>`, 27 `<th>` — todos idênticos
- Nenhuma palavra do texto corrido perdida, exceto `Parte` (do prefixo removido)
- `<li>` foi de 326 para 486 — os 160 a mais são os itens do sumário novo

---

## Reproduzir

```bash
node scripts/fix-aria.js fonte/ARIA.original.html fonte/ARIA.html
node scripts/validate-html.js fonte/ARIA.html
node scripts/diff-content.js fonte/ARIA.original.html fonte/ARIA.html
```

`validate-html.js` confere aninhamento de tags e 14 checagens de acessibilidade
estrutural. `diff-content.js` compara o conteúdo dos dois arquivos para detectar perda.
