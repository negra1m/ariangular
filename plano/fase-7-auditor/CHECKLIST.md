# Fase 7 — Auditor de Snippet · Checklist

Estado em 2026-07-29. Marcar concluído com data: `(YYYY-MM-DD)`

> **24 regras, 55 testes, cada uma nos dois sentidos.** Era a fase com maior
> distância entre "escrito" e "verificado", e a mais perigosa, porque uma regra
> errada corrige código para pior. Os testes acharam o bug que provava isso.

## Decisão do PO (2026-07-28)

- [x] Corrige o determinístico automaticamente e pergunta o que depende de decisão
      humana. Não chuta nome acessível: `aria-label` errado faz o leitor anunciar
      informação falsa com confiança, e isso é pior que ausência

## Parser

- [x] `{{ … }}` protegido durante o parse e restaurado depois (2026-07-28)
- [x] Blocos `@if`/`@for`/`@switch`/`@defer` neutralizados mantendo o conteúdo (2026-07-28)
- [x] `DOMParser` com guard de plataforma — não roda no prerender (2026-07-28)
- [x] Falha de parse mostra mensagem clara, sem erro cru (2026-07-28)
- [x] Reindentação da saída (2026-07-28)
- [x] **Confirmado por teste** que `*ngIf`, `[attr.x]`, `(click)` e `#ref`
      sobrevivem (2026-07-28)
- [ ] Testado com template real de projeto Angular

> **Bug que os testes acharam:** `(click)`, `[attr.x]`, `*ngIf` e `#ref` não são
> nomes de atributo válidos. O `DOMParser` descartava todos em silêncio — e sem
> eles o auditor ficava cego no caso principal dele, a div clicável. Corrigido
> traduzindo a sintaxe Angular para `data-*` antes do parse.

## Regras implementadas — 16

- [x] `div-clicavel` — `<div>`/`<span>` com `(click)` · Crítico · **corrige** (2026-07-28)
- [x] `botao-icone-sem-nome` — só ícone, sem nome · Crítico · **pergunta** (2026-07-28)
- [x] `campo-sem-label` — campo sem rótulo · Crítico · **pergunta** (2026-07-28)
- [x] `img-sem-alt` — `<img>` sem alt · Crítico · **pergunta** (2026-07-28)
- [x] `aria-hidden-focavel` — aria-hidden em focável · Crítico · **corrige** (2026-07-28)
- [x] `link-sem-href` — `<a>` com `(click)` sem destino · Alto · **corrige** (2026-07-28)
- [x] `tabindex-positivo` · Alto · **corrige** (2026-07-28)
- [x] `dialog-sem-rotulo` — sem aria-modal ou sem rótulo · Alto · **corrige** (2026-07-28)
- [x] `outline-none` — inline sem substituto · Alto · **corrige** (2026-07-28)
- [x] `aria-expanded-literal` — valor fixo em vez de binding · Médio · sinaliza (2026-07-28)
- [x] `tab-sem-selected` · Médio · **corrige** (2026-07-28)
- [x] `checkbox-sem-checked` · Médio · **corrige** (2026-07-28)
- [x] `progressbar-incompleto` · Médio · **corrige** (2026-07-28)
- [x] `th-sem-scope` · Médio · **corrige** (2026-07-28)
- [x] `aria-redundante` — role repetindo a semântica nativa · Baixo · **corrige** (2026-07-28)
- [x] `autofocus` · Baixo · **corrige** (2026-07-28)

## Regras restantes — 8, entregues

- [x] `input-so-placeholder` — placeholder como único rótulo (2026-07-28)
- [x] `link-sem-texto` — `<a>` sem conteúdo nem rótulo (2026-07-28)
- [x] `aria-referencia-quebrada` — `aria-describedby`/`labelledby` apontando
      para id inexistente (2026-07-28)
- [x] `tabela-com-div` — grid de divs com aparência de tabela (2026-07-28)
- [x] `salto-de-heading` — h1 seguido de h4 (2026-07-28)
- [x] `aria-inexistente` — role ou `aria-*` que não existe na especificação (2026-07-28)
- [x] `listbox-sem-teclado` (2026-07-28)
- [x] `mouse-sem-teclado` — `(mouseover)` sem `(focus)` equivalente (2026-07-28)

## Testes — 55

- [x] **Cada uma das 24 regras com teste de "dispara"** (2026-07-28)
- [x] **Cada uma das 24 regras com teste de "não dispara"** (2026-07-28)
- [x] Teste de que o auto-fix troca o div por button de verdade (2026-07-28)
- [x] Teste de que nenhuma regra aponta para seção inexistente da doc (2026-07-28)
- [x] Teste de que a interpolação `{{ … }}` sobrevive ao round-trip (2026-07-28)
- [x] Teste de que não inventa nome acessível, deixa ponto a preencher (2026-07-28)
- [x] Teste de que a resposta da pessoa entra no lugar marcado (2026-07-28)
- [x] Teste de que não acusa nada num template correto e completo (2026-07-28)
- [x] Teste de que o registro cobre todas as regras (2026-07-28)
- [x] axe sobre o resultado, com achados e com erro de parsing (2026-07-29)

> Sem os testes de "não dispara", o auditor acumula falso positivo e as pessoas
> param de confiar nele. Era o risco número um desta fase — e foi um teste
> desses que expôs duas regras se sobrepondo no mesmo elemento, onde a genérica
> ganhava por rodar primeiro.

## Metadados de cada achado

- [x] Severidade (2026-07-28)
- [x] Critério WCAG (2026-07-28)
- [x] Explicação do impacto no leitor de tela (2026-07-28)
- [x] Link para a seção da documentação (2026-07-28)
- [x] Trecho ofensor (2026-07-28)
- [x] **Número da linha** (2026-07-28)

## Interface — entrada

- [x] `<label>` real associado ao `<textarea>` (2026-07-28)
- [x] Sem usar placeholder como rótulo (2026-07-28)
- [x] Botão "Analisar" explícito (2026-07-28)
- [x] **Sem** análise automática a cada tecla (2026-07-28)
- [x] Botão de carregar snippet de exemplo (2026-07-28)
- [x] **Limite de tamanho** com contador antes do limite, não depois — avisar
      quando já travou é inútil (2026-07-28)

## Interface — resultado

- [x] Contagem: corrigidos automaticamente vs precisam de resposta (2026-07-28)
- [x] Achados ordenados por severidade (2026-07-28)
- [x] Campo de resposta para cada pergunta pendente (2026-07-28)
- [x] Resposta injetada no código de saída (2026-07-28)
- [x] Severidade com rótulo textual, não só cor (2026-07-28)
- [x] Ícone de severidade com `aria-hidden="true"` (2026-07-28)
- [x] Código corrigido em painel próprio, com botão copiar (2026-07-28)
- [x] Estado sem violações relembra o limite da ferramenta (2026-07-28)

## Limite declarado

- [x] Aviso visível na página: lê markup estático, não executa o código, não
      substitui axe, Lighthouse nem teste real (2026-07-28)
- [x] Número de regras informado (2026-07-28)
- [x] Aviso repetido no estado "nenhuma violação" (2026-07-28)

## Anúncio e foco

- [x] Resultado anunciado via `LiveAnnouncer` com a contagem (2026-07-28)
- [x] Foco move para o cabeçalho do resultado após analisar (2026-07-28)
- [ ] Verificado com leitor de tela

## Validação funcional — coberta por teste

- [x] Snippet de exemplo dispara achados dos dois tipos: corrigidos e
      pendentes de resposta (2026-07-29)
- [x] Nenhum falso positivo num template correto (2026-07-28)
- [x] O código corrigido troca o div por button de verdade (2026-07-28)
- [x] Preencher uma resposta injeta no lugar certo (2026-07-28)
- [x] Sintaxe Angular real sobrevive ao parser (2026-07-28)
- [ ] Colado um template de projeto Angular de verdade

## Fechamento

- [x] axe sem violação na rota `/auditor` (2026-07-29)
- [x] axe com achados, perguntas pendentes e erro de parsing (2026-07-29)
- [x] `ng lint` e `ng build` passando (2026-07-29)
- [x] Commit e push feitos (2026-07-29)
- [x] 24 regras e 55 testes entregues (2026-07-28)
- [ ] Verificado com leitor de tela — *fase 8*
- [ ] Fase fechada — falta a verificação humana
