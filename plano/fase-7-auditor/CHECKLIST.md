# Fase 7 — Auditor de Snippet · Checklist

Estado em 2026-07-28. Marcar concluído com data: `(YYYY-MM-DD)`

> **16 das 24 regras. Nenhum teste. Nunca executado com um snippet real.**
> É a fase com maior distância entre "escrito" e "verificado" — e a mais perigosa,
> porque uma regra errada corrige código para pior.

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
- [ ] **Confirmado por teste** que `*ngIf`, `[attr.x]`, `(click)` e `#ref` sobrevivem
- [ ] Testado com template real de projeto Angular

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

## Regras faltando — 8

- [ ] `input-so-placeholder` — placeholder como único rótulo
- [ ] `link-sem-texto` — `<a>` sem conteúdo nem rótulo
- [ ] `aria-describedby-id-inexistente` — referência quebrada
- [ ] `tabela-com-div` — grid de divs com aparência de tabela
- [ ] `salto-de-heading` — h1 seguido de h4
- [ ] `role-invalido` — role inexistente ou `aria-*` que não existe
- [ ] `listbox-custom-sem-teclado`
- [ ] `mouse-sem-teclado` — `(mouseover)` sem `(focus)` equivalente

## Testes — NENHUM ESCRITO

- [ ] **Cada regra com teste de "dispara"**
- [ ] **Cada regra com teste de "não dispara"** (o que evita falso positivo)
- [ ] Teste de que o auto-fix produz markup válido
- [ ] Teste de que nenhuma regra aponta para seção inexistente da doc
- [ ] Teste de round-trip: preprocess → postprocess preserva o código

> Sem os testes de "não dispara", o auditor acumula falso positivo e as pessoas
> param de confiar nele. É o risco número um desta fase.

## Metadados de cada achado

- [x] Severidade (2026-07-28)
- [x] Critério WCAG (2026-07-28)
- [x] Explicação do impacto no leitor de tela (2026-07-28)
- [x] Link para a seção da documentação (2026-07-28)
- [x] Trecho ofensor (2026-07-28)
- [ ] **Número da linha** — não implementado

## Interface — entrada

- [x] `<label>` real associado ao `<textarea>` (2026-07-28)
- [x] Sem usar placeholder como rótulo (2026-07-28)
- [x] Botão "Analisar" explícito (2026-07-28)
- [x] **Sem** análise automática a cada tecla (2026-07-28)
- [x] Botão de carregar snippet de exemplo (2026-07-28)
- [ ] **Limite de tamanho** com aviso antes de travar

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

## Validação funcional — NENHUMA FEITA

- [ ] Snippet de exemplo dispara exatamente os achados esperados
- [ ] Nenhum falso positivo num template correto
- [ ] O código corrigido é HTML/template válido
- [ ] Preencher uma resposta injeta no lugar certo
- [ ] Colar template Angular real não quebra o parser

## Fechamento

- [x] axe sem violação na rota `/auditor` (2026-07-28)
- [x] `ng lint` e `ng build` passando (2026-07-28)
- [x] Commit e push feitos (2026-07-28)
- [ ] Fase fechada — bloqueada por testes, 8 regras e verificação
