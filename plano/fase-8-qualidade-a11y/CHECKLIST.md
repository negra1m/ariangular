# Fase 8 — Qualidade e Acessibilidade · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

## Automatizado

- [ ] axe-core integrado aos testes
- [ ] axe rodando em **todas** as rotas
- [ ] Zero violação de axe
- [ ] Lighthouse Accessibility 100 em `/`
- [ ] Lighthouse Accessibility 100 nas 7 rotas de doc
- [ ] Lighthouse Accessibility 100 em `/checklists`
- [ ] Lighthouse Accessibility 100 em `/auditor`
- [ ] `ng lint` sem erro de regra a11y
- [ ] CI (GitHub Actions) rodando lint + testes + axe
- [ ] CI falha o build em caso de regressão de acessibilidade

### Estados cobertos pelo axe

- [ ] Menu mobile aberto
- [ ] Busca aberta com resultados
- [ ] Busca aberta sem resultados
- [ ] Dialog de confirmação de reset aberto
- [ ] Auditor com resultados
- [ ] Tema claro
- [ ] Tema escuro
- [ ] Checklist parcialmente marcado

## Teclado

- [ ] Ordem de foco segue a ordem visual em todas as rotas
- [ ] Foco visível em todos os elementos focáveis
- [ ] Contraste do indicador de foco verificado nos dois temas
- [ ] Nenhuma armadilha de teclado
- [ ] Foco nunca desaparece
- [ ] Foco nunca fica escondido atrás do header sticky
- [ ] Skip link funcionando

### Jornadas só com teclado

- [ ] Ler uma parte inteira de ponta a ponta
- [ ] Buscar e navegar até o resultado
- [ ] Marcar itens de um checklist
- [ ] Exportar um checklist
- [ ] Resetar com confirmação no dialog
- [ ] Analisar um snippet no auditor
- [ ] Trocar o tema
- [ ] Abrir e fechar o menu mobile

## TalkBack (Android)

- [ ] Percorrer cada tela por completo
- [ ] Árvore de headings faz sentido
- [ ] Todos os botões anunciam nome, role e estado
- [ ] Formulário de busca validado
- [ ] Formulário do auditor validado
- [ ] Estados vazios validados
- [ ] Estados de carregamento validados
- [ ] Dialog de reset validado (abre, prende foco, fecha, devolve foco)
- [ ] Mudança de rota anunciada
- [ ] Mudança de rota anunciada **uma vez só**
- [ ] Combobox de busca: `aria-activedescendant` funcionando
- [ ] Checkbox + anúncio de progresso sem leitura duplicada
- [ ] Code blocks longos puláveis
- [ ] Saída do fluxo sem foco perdido

## VoiceOver (iOS)

- [ ] Percorrer cada tela por completo
- [ ] Navegação por rotor: headings
- [ ] Navegação por rotor: links
- [ ] Navegação por rotor: landmarks
- [ ] Navegação por rotor: form controls
- [ ] Todos os botões anunciam nome, role e estado
- [ ] Formulário de busca validado
- [ ] Formulário do auditor validado
- [ ] Dialog de reset validado
- [ ] Mudança de rota anunciada
- [ ] `aria-live` não engolido por anúncio anterior
- [ ] Gesto de voltar não perde o foco

## Visual e cognitivo

- [ ] Zoom 200% sem perda de conteúdo ou função (1.4.4)
- [ ] Reflow em 320px sem scroll horizontal (1.4.10)
- [ ] Espaçamento de texto customizado sem quebra (1.4.12)
- [ ] `prefers-reduced-motion` desliga toda animação (2.3.3)
- [ ] Nenhuma informação transmitida só por cor (1.4.1)
- [ ] Foco não obstruído por sticky (2.4.11)
- [ ] Alvos de toque ≥ 24×24 CSS px (2.5.8)
- [ ] Contraste AA verificado em todos os pares de token, tema claro
- [ ] Contraste AA verificado em todos os pares de token, tema escuro

## Performance

- [ ] Lighthouse Performance ≥ 95 desktop
- [ ] Lighthouse Performance ≥ 90 mobile
- [ ] Tamanho do bundle inicial medido e registrado
- [ ] Índice de busca não bloqueia o first paint
- [ ] Sem fonte externa bloqueante

## Registro de achados

- [ ] Todo achado registrado com o Template de Bug do documento
- [ ] Todo achado com severidade classificada
- [ ] **Zero achado Crítico em aberto**
- [ ] **Zero achado Alto em aberto**
- [ ] Achados Médio e Baixo documentados para a próxima iteração

## Fechamento da fase

- [ ] Relatório da auditoria salvo no repo
- [ ] Commit com gitmoji feito e `git push` executado
