# Fase 10 — Polimento

**Objetivo:** sair de "compila e passa nas ferramentas" para "está no ar, foi usado por
gente, e faz o que promete".

**Depende de:** fases 1 a 7 (feitas em nível de código).
**Entrega:** `/pt` polido, testado e publicado. `/en` logo depois. `/zh` numa v2.

---

## Por que esta fase existe

O projeto tem 553 páginas que passam em lint, contraste e axe — e que **ninguém nunca
viu funcionando**. Todo o resto do plano assumiu que verificar era a última etapa. Não é:
sem abrir o site, não dá para saber se ele existe de verdade.

Esta fase inverte a ordem. Primeiro olhar, depois consertar, depois completar.

---

## Decisões do PO (2026-07-28)

| Tema | Decisão |
|------|---------|
| Ilustrações | Eu desenho em SVG geométrico |
| Aparelhos | PO tem Android e iPhone — roteiro escrito por mim, executado por ele |
| Tradução | **Só `en` agora.** `zh` fica preparado e sai numa v2 |
| Lançamento | Sobe quando `/pt` estiver polido. `en` entra depois |

Consequência da decisão de tradução: **`zh` sai do build por enquanto.** Publicar 184
páginas em chinês com texto em português custa indexação e credibilidade. A estrutura
fica pronta, o locale volta quando houver tradução revisada.

---

## Blocos de trabalho

Ordenados por dependência. O bloco A desbloqueia todos os outros.

### A — Ver funcionando `[bloqueia tudo]`

Sem isso, qualquer estimativa dos outros blocos é chute.

1. `npm run dev` e abrir as 9 telas: home, parte, seção, checklists, checklist,
   auditor, 404, raiz, e uma seção com tabela e callout
2. Registrar o que estiver visualmente quebrado
3. Corrigir os defeitos de layout encontrados
4. Conferir tema claro e escuro
5. Conferir em 320px e em desktop

**Saída:** lista de defeitos reais, que passa a ditar o resto da fase.

### B — Fechar os buracos de acessibilidade conhecidos

Já sabidos, todos violando regras que o próprio site publica.

1. **Menu mobile** — hoje é um modal sem ser tratado como modal:
   - prender o foco enquanto aberto
   - fechar com `ESC`
   - devolver o foco ao botão que abriu
   - `inert` no resto da página enquanto aberto
2. **Painel de busca** — mesmo problema, mesmas quatro correções
3. **CSP** — trocar `'unsafe-inline'` por hash do script de tema

O item 1 e o 2 são o teste prático de se entendemos a seção "Checklist Modal" do
próprio conteúdo.

### C — Completar funcionalidade

1. **Índice "Nesta página"** — `<nav>` com âncoras, `aria-current="location"` via
   `IntersectionObserver`, sem mover foco e sem anunciar
2. **Âncoras de seção** — link `#` nos headings, visível no hover **e** no foco
3. **Progresso na lista** de checklists
4. **Reset global** na página de índice
5. **Export em texto simples**, além do markdown
6. **Auditor:** as 8 regras restantes, número de linha nos achados e limite de
   tamanho de entrada

### D — Testes automatizados

O que hoje não existe.

1. **Regras do auditor** — para cada uma: um snippet que dispara e um que **não**
   dispara. O segundo é o que evita falso positivo, e falso positivo é o que faz as
   pessoas pararem de usar a ferramenta
2. **Motor de busca** — os quatro pesos de ranking, remoção de acento, lógica AND
3. **axe nos estados pós-interação** — menu aberto, busca com e sem resultado, dialog
   aberto, auditor com achados
4. **Integridade do conteúdo** — falha se alguma seção ficar sem `id`, título ou
   blocos, ou se houver `id` duplicado

### E — Identidade visual

1. **8 ilustrações SVG geométricas**, `currentColor`, `aria-hidden`, tema-aware:
   - hero: anel de foco abraçando um elemento
   - Fundamentos: mão navegando por teclado
   - ARIA: onda de som saindo de um botão
   - Formulários: rótulo ligado a um campo
   - Componentes: modal com foco preso dentro
   - Angular: escudo com o anel
   - Leitores de tela: fala saindo de uma tela
   - QA: lista com marcações
2. **Favicon próprio**, derivado do escudo do `BrandMark` (hoje é o do Angular CLI)
3. **Watermark zero-width** no shell, fora do fluxo de leitura, com `aria-hidden`
4. **Gradiente Angular** — extrair os stops oficiais do press kit

### F — Conteúdo

1. **167 resumos escritos à mão.** Hoje são o primeiro parágrafo cortado. São as
   `meta description` — o texto que aparece no resultado de busca
2. **Duas seções novas**, os temas quentes de 2026 que o material não cobre:
   - European Accessibility Act — exigível desde 28/06/2025, `EN 301 549 v4.1.1` em 2026
   - UX cognitiva

### G — Teste humano `[executado pelo PO]`

Roteiro passo a passo em [ROTEIRO-TESTE.md](ROTEIRO-TESTE.md).

1. Jornada completa só com teclado
2. TalkBack em Android real
3. VoiceOver em iPhone real
4. Lighthouse — acessibilidade e performance
5. Zoom 200%, reflow em 320px, espaçamento de texto customizado
6. `prefers-reduced-motion` ligado no sistema

**Nada disso é automatizável, e é o que separa "passa no axe" de "é acessível".**

### H — Deploy

1. Remover `zh` do build enquanto não houver tradução
2. Criar o projeto na Vercel, conectar o repositório
3. Deploy de **preview** primeiro, validar
4. Rodar Lighthouse e axe na URL real
5. Promover para produção
6. Search Console e Bing: registrar e submeter o sitemap
7. Conferir o hreflang no Search Console depois de indexar

### I — Tradução `en`

Depois do `/pt` no ar.

1. Preencher `i18n/strings.en.json` — 1.174 strings, 4.601 palavras
2. `npm run i18n:build` e conferir a cobertura
3. Voltar `en` ao build e ao hreflang
4. Revisar os títulos de seção: são o que rankeia

---

## Ordem sugerida

```
A ─┬─ B ─┬─ D ──┬─ G ── H ── I
   │     │      │
   ├─ C ─┘      │
   │            │
   ├─ E ────────┤
   │            │
   └─ F ────────┘
```

A primeiro, sempre. Depois B e C em paralelo com E e F. D quando o comportamento
estabilizar. G só faz sentido com tudo pronto. H depois de G. I por último.

---

## Critério de pronto

- Nenhum defeito visual conhecido em aberto
- Menu mobile e busca cumprindo o Checklist Modal do próprio conteúdo
- Testes das regras do auditor passando, incluindo os de "não dispara"
- Roteiro de teste humano executado, com os achados Críticos e Altos resolvidos
- Lighthouse Accessibility 100 na URL de produção
- `/pt` no ar, indexado e verificado
- README com o link do site

---

## O que fica declarado como não feito

Um guia de acessibilidade não pode omitir o que não testou. Enquanto não acontecer,
o README precisa dizer:

- `/zh` não publicado — tradução pendente
- Se algum roteiro de leitor de tela não for executado, dizer qual
