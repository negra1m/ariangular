# Fase 5 — Busca · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

## Índice

- [ ] Tipo `SearchEntry` definido
- [ ] Índice gerado em build time a partir das coleções da Fase 2
- [ ] Índice **não** é montado percorrendo o DOM
- [ ] Uma entrada por seção (156)
- [ ] Texto da seção achatado sem markup
- [ ] `keywords` com atributos ARIA citados na seção
- [ ] `keywords` com roles citadas na seção
- [ ] `keywords` com APIs do CDK/Material citadas
- [ ] `keywords` com critérios WCAG citados (ex: `2.4.3`)
- [ ] Tamanho do índice medido e registrado

## Motor

- [ ] Busca implementada sem biblioteca externa
- [ ] Normalização para minúsculas
- [ ] Remoção de acento na consulta e no índice
- [ ] Múltiplos termos com lógica AND
- [ ] Ranking por peso: keywords > título da seção > título da parte > corpo
- [ ] Motor é função pura, sem tocar `window` ou `document`
- [ ] Testes de ranking cobrindo os quatro pesos

## Componente combobox

- [ ] `role="combobox"` no input
- [ ] `aria-expanded` refletindo o estado real
- [ ] `aria-controls` apontando para a listbox
- [ ] `aria-autocomplete="list"`
- [ ] `aria-activedescendant` apontando para a opção ativa
- [ ] `aria-label` no input
- [ ] `role="listbox"` no container de resultados
- [ ] `role="option"` com `id` único em cada resultado
- [ ] `aria-selected` correto na opção ativa
- [ ] **O foco nunca sai do input**

## Teclado

- [ ] `↓` move a opção ativa para baixo
- [ ] `↑` move a opção ativa para cima
- [ ] Navegação circula (ou para) de forma previsível nas pontas
- [ ] `Enter` navega para a opção ativa
- [ ] `Esc` fecha a lista
- [ ] Segundo `Esc` limpa o campo
- [ ] `Home` vai para a primeira opção
- [ ] `End` vai para a última opção
- [ ] `Tab` fecha a lista e segue o fluxo
- [ ] Sem armadilha de teclado (WCAG 2.1.2)

## Anúncio

- [ ] `aria-live="polite"` com contagem de resultados
- [ ] `aria-atomic="true"`
- [ ] Debounce de ~300ms antes de anunciar
- [ ] Sem anúncio a cada tecla digitada
- [ ] Nunca `assertive`
- [ ] Estado vazio com texto útil

## Abertura

- [ ] Botão de busca no header
- [ ] Atalho `/` foca a busca
- [ ] Atalho `/` desativado quando o foco está em campo de texto
- [ ] Atalho documentado na interface

## Realce

- [ ] Termo realçado com `<mark>`
- [ ] Contraste do realce verificado no tema claro
- [ ] Contraste do realce verificado no tema escuro

## Validação funcional

- [ ] Buscar "formularios" (sem acento) acha "Formulários"
- [ ] Buscar "aria-expanded" acha as seções corretas
- [ ] Buscar "cdkTrapFocus" acha a seção do CDK
- [ ] Buscar "LiveAnnouncer" acha a seção correta
- [ ] Buscar "2.4.3" acha a tabela de critérios WCAG
- [ ] Buscar "modal foco" (dois termos) retorna resultado relevante
- [ ] Todas as 7 partes aparecem em alguma busca

## Fechamento da fase

- [ ] Fluxo completo operável só com teclado
- [ ] axe sem violação na busca
- [ ] `ng lint` e `ng build` passando
- [ ] Commit com gitmoji feito e `git push` executado
