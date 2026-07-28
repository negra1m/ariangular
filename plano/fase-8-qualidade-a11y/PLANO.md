# Fase 8 — Qualidade e Acessibilidade

**Objetivo:** provar que o site cumpre o que ensina. Esta fase não é "testar antes de
subir" — é a auditoria formal do produto contra a própria documentação que ele publica.

**Depende de:** Fases 3, 4, 5 e 6. (Fase 7 é desejável, não obrigatória.)
**Bloqueia:** Fase 9.

---

## Por que esta fase existe

Um guia de acessibilidade com problema de acessibilidade não é um produto com bug — é um
produto sem argumento. O site precisa ser o exemplo, e isso precisa ser verificado, não
presumido.

O método é o próprio documento: rodar no site os checklists que ele prescreve.

---

## 8.1 Automatizado

| Ferramenta | Como | Meta |
|------------|------|------|
| **axe-core** | Integrado nos testes, percorrendo todas as rotas | Zero violação |
| **Lighthouse** | Rodado no build de produção | Accessibility 100 em toda rota |
| **ESLint a11y** | Já da Fase 1, em CI | Zero erro |
| **Contraste** | Verificação de todos os pares de cor dos tokens | AA nos dois temas |

Automatizado pega, na melhor das hipóteses, cerca de um terço dos problemas reais. É
piso, não teto — por isso os itens seguintes.

Estados que os testes automatizados precisam cobrir explicitamente, porque não aparecem
no carregamento inicial da página:

- Menu mobile aberto
- Busca aberta com resultados
- Busca aberta sem resultados
- Dialog de confirmação de reset aberto
- Auditor com resultados
- Tema claro **e** tema escuro
- Checklist parcialmente marcado

### Automatizar de verdade

axe rodando manualmente uma vez não protege nada. Precisa estar em CI (GitHub Actions),
falhando o build. Regressão de acessibilidade é silenciosa — ninguém percebe até um
usuário reclamar.

---

## 8.2 Teclado

Percorrer o site inteiro **sem tocar no mouse**, verificando:

- Ordem de foco seguindo a ordem visual (WCAG 2.4.3)
- Foco visível o tempo todo, com contraste suficiente (2.4.7, 2.4.13)
- Foco nunca preso onde não deve (2.1.2)
- Foco nunca desaparecendo — o bug que o documento mais cita
- Foco nunca escondido atrás de header sticky (2.4.11)
- Skip link funcionando
- Todo controle alcançável e operável (2.1.1)

Jornadas obrigatórias: ler uma parte inteira, buscar e navegar para o resultado, marcar
um checklist e exportar, resetar com confirmação, analisar um snippet, trocar tema, abrir
e fechar o menu mobile.

---

## 8.3 TalkBack (Android)

Roteiro de teste manual, exatamente o que o documento prescreve na seção "Roteiro de
Teste Manual":

1. Percorrer cada tela por completo
2. Validar headings — a árvore faz sentido?
3. Validar botões — todos têm nome, role e estado?
4. Validar formulários — busca e auditor
5. Testar erros e estados vazios
6. Testar loading
7. Testar modal (dialog de reset)
8. Testar navegação entre rotas — a mudança é anunciada?
9. Testar saída do fluxo

Além do roteiro, os pontos de risco específicos deste site:

- O combobox de busca — `aria-activedescendant` é onde o TalkBack mais diverge
- O anúncio de rota — chega? chega uma vez só?
- O checkbox nativo + anúncio de progresso — leitura duplicada?
- Code blocks longos — dá para pular sem ouvir caractere por caractere?

---

## 8.4 VoiceOver (iOS)

Mesmo roteiro. Diferenças esperadas em relação ao TalkBack, conforme o próprio documento
("TalkBack x VoiceOver"): ordem de anúncio em tabs, comportamento de foco em modais,
tratamento de selects.

Pontos de risco próprios do VoiceOver:
- Navegação por rotor (headings, links, landmarks, form controls) precisa fazer sentido
- `aria-live` com debounce — o VoiceOver às vezes engole anúncio muito próximo do anterior
- Gesto de voltar não deve deixar o foco perdido

---

## 8.5 Visual e cognitivo

- Zoom 200% sem perda de conteúdo ou função (1.4.4)
- Reflow em 320px sem scroll horizontal (1.4.10)
- Espaçamento de texto customizado sem quebra de layout (1.4.12)
- `prefers-reduced-motion` desligando toda animação (2.3.3)
- Nenhuma informação transmitida só por cor (1.4.1)
- Foco não obstruído por elementos sticky (2.4.11)
- Alvos de toque com no mínimo 24×24 CSS px (2.5.8)

---

## 8.6 Performance

Não é acessibilidade formal, mas é acessibilidade real: um site pesado exclui quem tem
conexão ruim ou aparelho antigo.

- Lighthouse Performance ≥ 95 em desktop, ≥ 90 em mobile
- Bundle inicial medido e registrado
- Índice de busca não bloqueando o first paint
- Sem fonte externa bloqueante

---

## 8.7 Registro

Todo achado desta fase vira um item usando o **Template de Bug** do próprio documento
(título, problema, comportamento esperado, impacto, WCAG) e a classificação de severidade
dele (Crítico / Alto / Médio / Baixo).

**Nenhum achado Crítico ou Alto sobe para produção.** Médio e Baixo podem ir para a
próxima iteração, documentados.

---

## Critério de pronto

Zero violação de axe, Lighthouse Accessibility 100, jornada completa só com teclado, e os
checklists de TalkBack e VoiceOver do próprio documento aplicados ao site e aprovados.
