# Fase 8 — Qualidade e Acessibilidade · Checklist

Estado em 2026-07-29. Marcar concluído com data: `(YYYY-MM-DD)`

> **O automatizado está fechado. O humano não começou.**
> Automatizado pega cerca de um terço dos problemas reais — é piso, não teto.
> Nada abaixo de "Teclado" foi feito.

## Automatizado — feito

- [x] `scripts/check-a11y.js` roda axe-core em jsdom sobre o HTML gerado (2026-07-28)
- [x] **559 páginas, zero violações WCAG A e AA** (2026-07-29)
- [x] Roda no CI e quebra o build (2026-07-28)
- [x] `scripts/check-contrast.js` — 38 pares, zero falha nos dois temas (2026-07-29)
- [x] Contraste roda no CI (2026-07-28)
- [x] `ng lint` com regras a11y como **error**, no CI (2026-07-28)
- [x] Validação estrutural e de perda de conteúdo da fonte, no CI (2026-07-28)
- [x] CI falha se o build gerar pasta `server/` (2026-07-28)
- [x] **92 testes**, incluindo componente e conteúdo (2026-07-29)

### Defeitos reais que a ferramenta pegou

- [x] Raiz gerada pelo Angular como meta-refresh sem `lang` — WCAG 3.1.1.
      Corrigido: virou página real com `lang`, `h1` e escolha de idioma (2026-07-28)
- [x] `DOMParser` descartava `(click)` e `[attr.x]`, deixando o auditor cego
      no caso principal dele. Pego pelos testes das regras (2026-07-28)
- [x] Script de contraste testava o tema escuro com as cores do claro — aspas
      diferentes no seletor. Corrigido, com guarda que falha se nenhum token
      de tema for encontrado (2026-07-28)
- [x] `zh` publicado apontando para o conteúdo em português: interface
      traduzida, corpo inteiro em pt, e nada falhava. Pego por teste novo, que
      exige que um idioma publicado prove que é um idioma (2026-07-29)

## Automatizado — falta

- [x] **axe nos estados pós-interação** — 7 casos em `a11y-states.spec.ts`,
      zero violação (2026-07-29):
  - [x] Busca aberta com resultados (2026-07-29)
  - [x] Busca aberta sem resultados (2026-07-29)
  - [x] Opção ativa apontada por `aria-activedescendant` (2026-07-29)
  - [x] Dialog de reset aberto (2026-07-29)
  - [x] Auditor com achados e perguntas pendentes (2026-07-29)
  - [x] Auditor com erro de parsing anunciado por `role="alert"` (2026-07-29)
  - [x] Checklist parcialmente marcado (2026-07-29)
  - [ ] Menu mobile aberto — o drawer vive no header, que depende do router;
        fica para quando houver teste de integração de rota
- [ ] Tema escuro (o axe roda sobre o HTML, que não carrega o tema; o contraste
      dos dois temas é coberto por `check-contrast.js`)
- [ ] **Lighthouse nunca rodado** — nem acessibilidade, nem performance

## Teclado — NADA FEITO

- [ ] Ordem de foco segue a ordem visual
- [ ] Foco visível em todos os elementos focáveis
- [ ] Contraste do indicador de foco conferido na tela, nos dois temas
- [ ] Nenhuma armadilha de teclado
- [ ] Foco nunca desaparece
- [ ] Foco nunca escondido atrás do header sticky
- [ ] Skip link funciona

### Jornadas só com teclado

- [ ] Ler uma seção de ponta a ponta
- [ ] Navegar entre seções pela paginação
- [ ] Abrir a busca com `/`, digitar, navegar por setas, `Enter`
- [ ] Marcar itens de um checklist
- [ ] Exportar um checklist
- [ ] Resetar com confirmação no dialog
- [ ] Analisar um snippet no auditor e preencher uma resposta
- [ ] Trocar o tema
- [ ] Trocar o idioma
- [ ] Abrir e fechar o menu mobile

## TalkBack (Android) — NADA FEITO

- [ ] Percorrer cada tela por completo
- [ ] Árvore de headings faz sentido
- [ ] Todos os botões anunciam nome, role e estado
- [ ] Busca: `aria-activedescendant` funciona
- [ ] Mudança de rota anunciada, e uma vez só
- [ ] Checkbox + anúncio de progresso sem leitura duplicada
- [ ] Dialog de reset: abre, prende foco, fecha, devolve foco
- [ ] Code blocks longos puláveis
- [ ] Saída do fluxo sem foco perdido

## VoiceOver (iOS) — NADA FEITO

- [ ] Percorrer cada tela por completo
- [ ] Rotor: headings, links, landmarks, form controls
- [ ] Busca validada
- [ ] Auditor validado
- [ ] Dialog validado
- [ ] Mudança de rota anunciada
- [ ] `aria-live` não engolido por anúncio anterior
- [ ] Gesto de voltar não perde o foco

## Visual e cognitivo — NADA FEITO

- [ ] Zoom 200% sem perda de conteúdo (1.4.4)
- [ ] Reflow em 320px sem scroll horizontal (1.4.10)
- [ ] Espaçamento de texto customizado sem quebra (1.4.12)
- [ ] `prefers-reduced-motion` desliga a animação na prática (2.3.3)
- [ ] Nenhuma informação transmitida só por cor — conferido na tela (1.4.1)
- [ ] Foco não obstruído por sticky (2.4.11)
- [ ] Alvos de toque ≥ 24×24 px conferidos (2.5.8)

## Performance — NADA FEITO

- [x] Bundle inicial medido: 524.77 kB bruto (2026-07-29) — passou do orçamento
      de 500 kB em 24.77 kB, com aviso e não erro. Cresceu com o terceiro
      idioma. Medir na Vercel antes de decidir se vale dividir
- [ ] Lighthouse Performance desktop
- [ ] Lighthouse Performance mobile
- [x] Sem fonte externa bloqueante — só fontes de sistema (2026-07-28)
- [ ] Índice de busca não bloqueia o first paint — por medir

## Registro de achados

- [ ] Template de Bug do documento usado para registrar
- [ ] Severidade classificada
- [ ] Zero achado Crítico em aberto
- [ ] Zero achado Alto em aberto

## Fechamento

- [x] Bloco automatizado fechado (2026-07-29)
- [ ] Relatório da auditoria salvo no repo
- [ ] Fase fechada — **não começou a parte humana**

---

## O que isso significa

O site passa em tudo que uma máquina consegue medir — agora inclusive nos
estados que só existem depois de um clique, que é onde moram as violações mais
caras. Isso é mais do que a maioria dos projetos faz, e continua não sendo
suficiente para afirmar que o site é acessível.

A pergunta que o próprio conteúdo diz ser a que importa continua sem resposta:

> Uma pessoa usando TalkBack ou VoiceOver consegue concluir a jornada sozinha?

Ninguém tentou. Roteiro pronto, ~95 minutos, em
[../fase-10-polimento/ROTEIRO-TESTE.md](../fase-10-polimento/ROTEIRO-TESTE.md).
