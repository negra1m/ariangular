# Fase 8 — Qualidade e Acessibilidade · Checklist

Estado em 2026-07-28. Marcar concluído com data: `(YYYY-MM-DD)`

> **O automatizado está forte. O humano não começou.**
> Automatizado pega cerca de um terço dos problemas reais — é piso, não teto.
> Nada abaixo de "Teclado" foi feito.

## Automatizado — feito

- [x] `scripts/check-a11y.js` roda axe-core em jsdom sobre o HTML gerado (2026-07-28)
- [x] **553 páginas, zero violações WCAG A e AA** (2026-07-28)
- [x] Roda no CI e quebra o build (2026-07-28)
- [x] `scripts/check-contrast.js` — 36 pares, zero falha nos dois temas (2026-07-28)
- [x] Contraste roda no CI (2026-07-28)
- [x] `ng lint` com regras a11y como **error**, no CI (2026-07-28)
- [x] Validação estrutural e de perda de conteúdo da fonte, no CI (2026-07-28)
- [x] CI falha se o build gerar pasta `server/` (2026-07-28)

### Defeito real que o axe pegou

- [x] Raiz gerada pelo Angular como meta-refresh sem `lang` — WCAG 3.1.1.
      Corrigido: virou página real com `lang`, `h1` e escolha de idioma (2026-07-28)

## Automatizado — falta

- [ ] **axe nos estados pós-interação**, que hoje não são cobertos:
  - [ ] Menu mobile aberto
  - [ ] Busca aberta com resultados
  - [ ] Busca aberta sem resultados
  - [ ] Dialog de reset aberto
  - [ ] Auditor com resultados e com perguntas pendentes
  - [ ] Checklist parcialmente marcado
- [ ] Tema escuro (o axe roda sobre o HTML, que não carrega o tema)
- [ ] **Nenhum teste unitário ou de componente escrito**
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

- [x] Bundle inicial medido: 400.81 kB bruto, 105.37 kB transferido (2026-07-28)
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

- [ ] Relatório da auditoria salvo no repo
- [ ] Fase fechada — **não começou a parte humana**

---

## O que isso significa

O site passa em tudo que uma máquina consegue medir sobre HTML estático. Isso é
mais do que a maioria dos projetos faz, e não é suficiente para afirmar que o
site é acessível.

A pergunta que o próprio conteúdo diz ser a que importa continua sem resposta:

> Uma pessoa usando TalkBack ou VoiceOver consegue concluir a jornada sozinha?

Ninguém tentou.
