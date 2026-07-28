# Fase 7 — Auditor de Snippet · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

## Parser

- [ ] Pré-processamento substitui `{{ … }}` por placeholder
- [ ] Blocos `@if` neutralizados mantendo conteúdo
- [ ] Blocos `@for` neutralizados mantendo conteúdo
- [ ] Blocos `@switch` neutralizados mantendo conteúdo
- [ ] Blocos `@defer` neutralizados mantendo conteúdo
- [ ] `*ngIf` / `*ngFor` sobrevivem ao parse
- [ ] Atributos `[x]`, `(x)`, `#ref` sobrevivem ao parse (confirmado por teste)
- [ ] `DOMParser` não roda no prerender (guard de plataforma)
- [ ] Falha de parse mostra mensagem clara, sem erro cru
- [ ] Teste com template real de projeto Angular

## Regras — implementação e teste (dispara / não dispara)

- [ ] 1. `<div>`/`<span>` com `(click)` sem role e tabindex — Crítico
- [ ] 2. `(click)` sem handler de teclado equivalente — Crítico
- [ ] 3. `<button>` só com ícone sem rótulo acessível — Crítico
- [ ] 4. Campo de formulário sem rótulo acessível — Crítico
- [ ] 5. `<input>` só com `placeholder` como rótulo — Crítico
- [ ] 6. `<img>` sem `alt` — Crítico
- [ ] 7. `<a>` com `(click)` sem `href`/`routerLink` — Alto
- [ ] 8. `<a>` sem texto e sem rótulo acessível — Alto
- [ ] 9. `tabindex` positivo — Alto
- [ ] 10. `aria-hidden="true"` em elemento focável — Crítico
- [ ] 11. `aria-describedby`/`labelledby` com `id` inexistente — Médio
- [ ] 12. ARIA redundante (`role="button"` em `<button>`) — Baixo
- [ ] 13. `aria-expanded` literal em vez de binding — Médio
- [ ] 14. `role="tab"` sem `aria-selected` — Médio
- [ ] 15. `role="dialog"` sem `aria-modal` ou sem rótulo — Alto
- [ ] 16. `role="checkbox"`/`switch` sem `aria-checked` — Médio
- [ ] 17. `role="progressbar"` sem `aria-valuenow`/`min`/`max` — Médio
- [ ] 18. Tabela feita com `<div>` — Médio
- [ ] 19. `<table>` sem `<th>` ou `<th>` sem `scope` — Médio
- [ ] 20. Salto de nível de heading — Médio
- [ ] 21. `outline: none` inline sem substituto — Alto
- [ ] 22. `autofocus` presente — Baixo
- [ ] 23. `role` inválido ou `aria-*` inexistente — Médio
- [ ] 24. Listbox custom sem gestão de teclado aparente — Médio

## Metadados de cada achado

- [ ] Toda regra tem severidade
- [ ] Toda regra tem critério WCAG (ou "—" explícito)
- [ ] Toda regra tem explicação do impacto no leitor de tela
- [ ] Toda regra tem exemplo de correção
- [ ] Toda regra aponta para uma seção existente da doc
- [ ] Teste que falha se alguma regra apontar para seção inexistente

## Interface — entrada

- [ ] `<label>` real associado ao `<textarea>`
- [ ] Sem usar placeholder como rótulo
- [ ] Botão "Analisar" explícito
- [ ] **Sem** análise automática a cada tecla
- [ ] Botão de carregar snippet de exemplo
- [ ] Limite de tamanho com aviso antes de travar

## Interface — resultado

- [ ] Contagem por severidade no topo
- [ ] Achados ordenados por severidade
- [ ] Trecho ofensor exibido
- [ ] Número da linha, quando disponível
- [ ] Explicação do impacto
- [ ] Exemplo de correção
- [ ] Critério WCAG exibido
- [ ] Link para a seção da doc
- [ ] Severidade com rótulo textual, não só cor
- [ ] Ícone de severidade com `aria-hidden="true"`
- [ ] Estado sem violações com mensagem que também relembra o limite

## Limite declarado

- [ ] Aviso visível na página de que o auditor não substitui axe, Lighthouse nem teste real
- [ ] Aviso presente também no estado "nenhuma violação"
- [ ] Número de regras informado ao usuário

## Anúncio e foco

- [ ] Resultado anunciado via `aria-live="polite"`
- [ ] Anúncio inclui contagem por severidade
- [ ] Foco move para o cabeçalho do resultado após analisar
- [ ] Resultado navegável só com teclado

## Fechamento da fase

- [ ] Snippet de exemplo dispara exatamente os achados esperados
- [ ] Nenhum falso positivo nos testes de "não dispara"
- [ ] axe sem violação na rota `/auditor`
- [ ] `ng lint` e `ng build` passando
- [ ] Commit com gitmoji feito e `git push` executado
