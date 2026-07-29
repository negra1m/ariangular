# Fase 5 — Busca · Checklist

Estado em 2026-07-29. Marcar concluído com data: `(YYYY-MM-DD)`

> Motor e combobox cobertos por teste — 18 do serviço e 3 de axe sobre o painel
> aberto. **Ninguém digitou uma letra nela num navegador.**

## Índice

- [x] Montado a partir do conteúdo do idioma corrente (2026-07-28)
- [x] Uma entrada por seção — 160 (2026-07-28)
- [x] Texto achatado sem markup (2026-07-28)
- [x] `keywords` com atributos ARIA citados (2026-07-28)
- [x] `keywords` com roles citadas (2026-07-28)
- [x] `keywords` com APIs do CDK, Material e `@angular/aria` (2026-07-28)
- [x] `keywords` com critérios WCAG (`2.4.3` e afins) (2026-07-28)
- [x] Keywords técnicas não traduzidas — `aria-label` é igual em qualquer idioma (2026-07-28)
- [x] `computed` — recalcula ao trocar de idioma (2026-07-28)

## Motor

- [x] Implementado sem biblioteca (2026-07-28)
- [x] Normalização para minúsculas (2026-07-28)
- [x] Remoção de acento na consulta e no índice (2026-07-28)
- [x] Múltiplos termos com lógica AND (2026-07-28)
- [x] Ranking por peso: keyword > título da seção > título da parte > corpo (2026-07-28)
- [x] Função pura, sem tocar `window` ou `document` (2026-07-28)
- [x] **18 testes** de ranking, acento, AND, bordas e cobertura (2026-07-28)
- [x] Teste de que ordena por relevância, não por posição no documento (2026-07-28)
- [ ] Tamanho do índice medido

## Componente combobox

- [x] `role="combobox"` no input (2026-07-28)
- [x] `aria-expanded` refletindo o estado real (2026-07-28)
- [x] `aria-controls` apontando para a listbox (2026-07-28)
- [x] `aria-autocomplete="list"` (2026-07-28)
- [x] `aria-activedescendant` apontando para a opção ativa (2026-07-28)
- [x] `<label>` real associado, não placeholder como rótulo (2026-07-28)
- [x] `role="listbox"` no container (2026-07-28)
- [x] `role="option"` com `id` único em cada resultado (2026-07-28)
- [x] `aria-selected` na opção ativa (2026-07-28)
- [x] **O foco nunca sai do input** — opção não é focável, por desenho (2026-07-28)
- [x] Exceção ao lint documentada inline, sem afrouxar a regra global (2026-07-28)

## Teclado

- [x] `↓` move a opção ativa para baixo, circulando (2026-07-28)
- [x] `↑` move para cima, circulando (2026-07-28)
- [x] `Enter` navega para a opção ativa (2026-07-28)
- [x] `Esc` limpa; segundo `Esc` fecha (2026-07-28)
- [x] `Home` e `End` (2026-07-28)
- [x] `Tab` fecha e segue o fluxo (2026-07-28)
- [x] `↓` exercitada por teste, com `aria-activedescendant` conferido (2026-07-29)
- [ ] Teclas pressionadas num navegador de verdade
- [ ] Sem armadilha de teclado (WCAG 2.1.2) — por verificar

## Anúncio

- [x] `aria-live="polite"` com `aria-atomic="true"` (2026-07-28)
- [x] Debounce de 400ms antes de anunciar (2026-07-28)
- [x] Nunca `assertive` (2026-07-28)
- [x] Estado vazio com texto útil, não só "nada encontrado" (2026-07-28)
- [ ] Anúncio verificado com leitor de tela
- [ ] Confirmar que não anuncia a cada tecla

## Abertura

- [x] Botão de busca no header (2026-07-28)
- [x] Atalho `/` foca a busca (2026-07-28)
- [x] Atalho `/` inerte quando o foco está em campo de texto (WCAG 2.1.4) (2026-07-28)
- [x] Atalho documentado na própria interface (2026-07-28)
- [x] Painel prende o foco — é um modal na prática (2026-07-28)
- [x] Painel devolve o foco a quem abriu (2026-07-28)
- [x] `inert` no conteúdo de trás enquanto aberto (2026-07-28)
- [ ] Painel fecha ao clicar fora — implementado, não exercitado num navegador

## Realce

- [x] Termo realçado com `<mark>` (2026-07-28)
- [x] Contraste do realce verificado nos dois temas — 11.11:1 e 7.51:1 (2026-07-28)

## Validação funcional — coberta por teste

- [x] Buscar "formularios" (sem acento) acha "Formulários" (2026-07-28)
- [x] Buscar "aria-expanded" acha as seções corretas (2026-07-28)
- [x] Buscar "cdkTrapFocus" acha a seção do CDK (2026-07-28)
- [x] Buscar "LiveAnnouncer" acha a seção correta (2026-07-28)
- [x] Buscar "2.4.3" acha a tabela de critérios WCAG (2026-07-28)
- [x] Buscar "ngCombobox" acha as seções novas de `@angular/aria` (2026-07-28)
- [x] Dois termos com AND retornam resultado relevante (2026-07-28)
- [x] Todas as 7 partes aparecem em alguma busca (2026-07-28)
- [x] Todas as seções de todas as partes estão indexadas (2026-07-28)

## Fechamento

- [x] axe sem violação (2026-07-29)
- [x] axe com o painel aberto, com e sem resultados (2026-07-29)
- [x] `ng lint` e `ng build` passando (2026-07-29)
- [x] Commit e push feitos (2026-07-29)
- [ ] Fluxo completo operável só com teclado, num navegador
- [ ] Fase fechada — falta o exercício humano
