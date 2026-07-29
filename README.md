# ariangular

Guia interativo de acessibilidade para times Angular — fundamentos, ARIA, formulários,
componentes, Angular CDK A11y, `@angular/aria`, TalkBack, VoiceOver e WCAG 2.2.

Três camadas de uso:

1. **Ler** — 162 seções em 7 partes, com busca
2. **Aplicar** — 14 checklists marcáveis, com progresso salvo e export
3. **Verificar** — um auditor que recebe um template Angular e devolve corrigido no que
   é seguro, perguntando o que depende de você

> **Projeto independente.** Sem afiliação, patrocínio ou endosso do Google ou do time
> Angular. Angular é marca da [Open Usage Commons](https://openusage.org/). O logo é
> adaptado do [Angular Press Kit](https://angular.dev/press-kit), sob CC BY 4.0 —
> ver [NOTICE.md](NOTICE.md).

---

## Estado

**Não está no ar ainda.** Ver [plano/fase-10-polimento](plano/fase-10-polimento/CHECKLIST.md).

### O que está verificado

| | |
|---|---|
| Testes | 77 passando |
| Lint | limpo, regras de acessibilidade como **erro** |
| Contraste | 38 pares, WCAG AA nos dois temas |
| axe | **zero violações A/AA** em todas as páginas geradas |
| Build | 373 rotas prerenderizadas, saída estática |
| Idiomas | português e inglês, 100% traduzidos |

Tudo isso roda no CI e quebra o build.

### O que ainda NÃO foi verificado

Um guia de acessibilidade não pode omitir o que não testou:

- **Nunca foi aberto num navegador.** Todas as garantias acima vêm de ferramenta sobre
  HTML, não de uso
- **Teclado, TalkBack e VoiceOver: não testados.** Existe roteiro pronto em
  [plano/fase-10-polimento/ROTEIRO-TESTE.md](plano/fase-10-polimento/ROTEIRO-TESTE.md)
- **Lighthouse: nunca rodado**

A pergunta que o próprio conteúdo diz ser a única que importa — *uma pessoa usando
TalkBack consegue concluir a jornada sozinha?* — ainda não tem resposta.

### Idiomas

**Português e inglês**, ambos completos — 1.246 strings traduzidas, com hreflang
ligando as duas versões e troca de idioma que preserva a página.

**Chinês** fica fora do build até haver tradução. Publicar 162 páginas em chinês com o
corpo em português custaria indexação e credibilidade. A estrutura está pronta: traduzir
`i18n/zh/*.json`, rodar `npm run i18n:build` e incluir `'zh'` em `LOCALES`.

Ressalva honesta sobre a tradução: foi feita por mim, sem revisão de falante nativo. Em
inglês a confiança é alta, mas termo técnico de acessibilidade tem convenção própria e
uma segunda leitura seria bem-vinda.

---

## A regra deste projeto

Um site sobre acessibilidade que não é acessível não é um produto com bug — é um produto
sem argumento.

Onde estética e acessibilidade conflitarem, acessibilidade ganha. Na prática:

- Lint de acessibilidade quebra o build, não emite warning
- Contraste é verificado por script em todo par de cor, nos dois temas
- axe roda em todas as páginas geradas, no CI
- Nenhuma informação é transmitida só por cor
- Foco sempre visível, com o **mesmo peso** do hover
- Toda animação desligável por `prefers-reduced-motion`

O CI já pegou defeitos reais: raiz gerada sem `lang`, borda em 2.85:1, e o auditor cego
ao próprio caso principal porque o `DOMParser` descartava `(click)`.

---

## Stack

| | |
|---|---|
| Framework | Angular 22, standalone, zoneless, signals |
| Renderização | SSG — todas as rotas prerenderizadas, sem servidor |
| Estilo | CSS puro com custom properties, dark-first |
| Hospedagem | Vercel (estático) |
| Node | 24 (fixado em `.node-version`) |

Sem Tailwind e sem Angular Material — de propósito. O site precisa de controle explícito
sobre foco, contraste e movimento, e precisa demonstrar HTML semântico cru em vez de
delegar acessibilidade a uma biblioteca.

---

## Rodando

Requer Node 24. Com [fnm](https://github.com/Schniz/fnm), a versão troca sozinha ao
entrar na pasta.

```bash
npm install
npm run dev      # http://localhost:4200
```

### Scripts

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build + sitemap + hashes da CSP |
| `npm test` | 77 testes (regras do auditor, busca, watermark) |
| `npm run lint` | ESLint com regras de acessibilidade como erro |
| `npm run contrast` | Contraste WCAG AA de todos os tokens, nos dois temas |
| `npm run a11y` | axe em todas as páginas geradas |
| `npm run verify` | Tudo acima, em sequência |
| `npm run content:extract` | Regenera o conteúdo a partir de `fonte/ARIA.html` |
| `npm run i18n:strings` | Regenera o catálogo de tradução |
| `npm run i18n:build` | Monta o conteúdo de en e zh |

---

## Estrutura

```
plano/      planejamento por fase, identidade visual, marca, licença, SEO
fonte/      documento de origem — corrigido e validado
scripts/    verificação: contraste, axe, HTML, perda de conteúdo, CSP, sitemap
i18n/       catálogo de strings para tradução
src/        aplicação
```

Planejamento completo em [plano/PLANO.md](plano/PLANO.md).

---

## Deploy

Configuração pronta em `vercel.json`. Falta conectar o projeto:

```bash
npx vercel        # preview
npx vercel --prod # produção
```

- Output: `dist/ariangular/browser`
- CSP sem `unsafe-inline` — os hashes dos scripts inline são calculados no build
- Sitemap e `robots.txt` gerados das rotas que o build realmente produziu

---

## Contribuindo

Ver [CONTRIBUTING.md](CONTRIBUTING.md). A regra curta: **PR que quebra acessibilidade não
entra**, e `npm run verify` precisa passar.

---

## Licenças

| O quê | Licença |
|-------|---------|
| Código | [MIT](LICENSE) |
| Conteúdo da documentação | [CC BY 4.0](LICENSE-CONTENT) |

---

Feito por [Vinícius Negrão](https://www.linkedin.com/in/negra1m/).
