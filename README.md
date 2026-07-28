# ARIA Angular

Guia interativo de acessibilidade para times Angular — fundamentos, ARIA, formulários,
componentes, Angular CDK A11y, TalkBack, VoiceOver e WCAG 2.2.

Três camadas de uso:

1. **Ler** — 156 seções em 7 partes, com busca
2. **Aplicar** — os 14 checklists da documentação viram listas marcáveis com progresso
3. **Verificar** — um auditor que recebe um trecho de template Angular e aponta as
   violações mais comuns

> **Projeto independente.** Sem afiliação, patrocínio ou endosso do Google ou do time
> Angular. Angular é marca da [Open Usage Commons](https://openusage.org/). O logo é
> adaptado do [Angular Press Kit](https://angular.dev/press-kit), sob CC BY 4.0 —
> ver [NOTICE.md](NOTICE.md).

---

## A regra deste projeto

Um site sobre acessibilidade que não é acessível não é um produto com bug — é um produto
sem argumento.

Onde estética e acessibilidade conflitarem, acessibilidade ganha. Na prática:

- Lint de acessibilidade quebra o build, não emite warning
- Contraste é verificado por script em todo par de cor, nos dois temas
- Nenhuma informação é transmitida só por cor
- Foco sempre visível, nunca perdido, nunca escondido atrás do header
- Toda animação desligável por `prefers-reduced-motion`

---

## Stack

| | |
|---|---|
| Framework | Angular 22, standalone, zoneless, signals |
| Renderização | SSG — todas as rotas prerenderizadas, sem servidor |
| Estilo | CSS puro com custom properties |
| Hospedagem | Vercel (estático) |
| Node | 24 (fixado em `.node-version`) |

Sem Tailwind e sem Angular Material — de propósito. O site precisa de controle explícito
sobre foco, contraste e movimento, e precisa demonstrar HTML semântico cru em vez de
delegar acessibilidade a uma biblioteca.

---

## Rodando

Requer Node 24. Com [fnm](https://github.com/Schniz/fnm) instalado, a versão é trocada
automaticamente ao entrar na pasta (`.node-version`).

```bash
npm install
npm run dev      # http://localhost:4200
```

### Scripts

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção, prerenderizando todas as rotas |
| `npm run lint` | ESLint, com as regras de acessibilidade como erro |
| `npm run contrast` | Verifica contraste WCAG AA de todos os tokens, nos dois temas |
| `npm run verify` | lint + contraste + build |
| `npm run format` | Prettier |
| `npm run fonte:fix` | Regenera `fonte/ARIA.html` a partir do original |
| `npm run fonte:validate` | Valida aninhamento e acessibilidade estrutural da fonte |
| `npm run fonte:diff` | Compara a fonte corrigida com a original, procurando perda |

---

## Estrutura

```
plano/      planejamento por fase, identidade visual, marca e licença
fonte/      documento de origem — corrigido e validado (ver fonte/README.md)
scripts/    ferramentas de verificação (contraste, HTML, perda de conteúdo)
src/        aplicação Angular
```

O planejamento completo está em [plano/PLANO.md](plano/PLANO.md).

---

## Estado

Fase 1 (Fundação) em andamento. Ver [plano/CHECKLIST-FASES.md](plano/CHECKLIST-FASES.md).

---

## Licenças

| O quê | Licença |
|-------|---------|
| Código | [MIT](LICENSE) |
| Conteúdo da documentação | [CC BY 4.0](LICENSE-CONTENT) |

---

Feito por [Vinícius Negrão](https://www.linkedin.com/in/negra1m/).
