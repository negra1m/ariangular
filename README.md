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
| Testes | 84 passando, incluindo axe nos estados pós-interação |
| Lint | limpo, regras de acessibilidade como **erro** |
| Contraste | 38 pares, WCAG AA nos dois temas |
| axe | **zero violações A/AA** em todas as páginas geradas |
| Build | 559 rotas prerenderizadas, saída estática |
| Idiomas | português, inglês e chinês, 100% traduzidos |

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

**Português, inglês e chinês simplificado**, os três completos — 1.246 strings cada,
com hreflang ligando as versões e troca de idioma que preserva a página. Os slugs de
URL são os mesmos nos três (`/pt/aria/aria-label`, `/en/aria/aria-label`,
`/zh/aria/aria-label`): o termo técnico não muda de idioma, e slug estável é o que faz
o hreflang casar sem tabela de-para.

Um idioma só entra no build com 100% traduzido — `merge-i18n.js` falha abaixo disso.
Publicar metade custa indexação e credibilidade: página com metadado traduzido e corpo
em português não rankeia em nenhum dos dois idiomas.

Ressalva honesta: a tradução foi feita por mim, sem revisão de falante nativo em
nenhum dos três. Em inglês a confiança é alta. Em chinês ela é menor — a terminologia
de acessibilidade tem convenção estabelecida (无障碍, 屏幕阅读器, 无障碍名称) e uma
revisão nativa seria bem-vinda antes de divulgar para esse público.

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
| `npm run og` | Regenera as imagens de Open Graph em `public/og/` |

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
