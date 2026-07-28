# Marca e Licença

Como ter cara de produto oficial do ecossistema Angular sem passar do limite, e como
abrir o código.

> Não é parecer jurídico. É leitura das licenças e políticas públicas das próprias
> partes envolvidas, com as fontes linkadas. Para uso comercial de peso, vale confirmar
> com advogado.

---

## 1. O achado principal

**Os logos do Angular estão sob CC BY 4.0** e o press kit oficial **convida** a comunidade
a adaptá-los. Nas palavras do próprio [press kit](https://angular.dev/press-kit):

- "change the logo colors to match your brand colors, flag, cause, etc."
- adaptar a forma do escudo para combinar com a sua marca
- "keep designs respectful and be mindful of our community guidelines"

E a marca Angular não é gerida diretamente pelo Google — pertence à
[Open Usage Commons](https://openusage.org/), criada justamente para que projetos de
terceiros possam sinalizar relação com o projeto maior. A OUC declara que muitas
organizações e grupos usam variação do nome e/ou do logo Angular exatamente para mostrar
que são relacionados.

**Tradução:** parecer parte do ecossistema é o comportamento previsto e desejado. O que
não pode é parecer *ser* o Angular oficial.

---

## 2. O que dá para fazer — e é o que dá a cara oficial

### 2.1 Logo derivado do escudo Angular

Esta é a jogada principal. Criar o logo do produto como uma **adaptação do escudo
Angular** — mesma silhueta reconhecível, conteúdo interno próprio (um símbolo de
acessibilidade, um anel de foco, o que a Fase 1 desenhar), paleta própria dentro da
família Angular.

Isso é literalmente o uso que o press kit descreve. E é o que faz alguém bater o olho e
sentir "isso é do mundo Angular" sem nenhuma mentira.

Condições:
- Usar o **escudo atual** (v17+). O press kit pede para **não** usar o logo de 2016
  (v3–v16) nem o do AngularJS — os dois geram confusão de versão
- Atribuição CC BY 4.0 (ver §4)
- Não pode ser o escudo oficial intacto servindo de logo do produto

### 2.2 Nome

**"AngulARIA"** é uso nominativo descritivo: descreve para que serve a ferramenta.
Segue o padrão consolidado da comunidade (`ngx-*`, `Angular Material`, etc.).

O que evitar no nome e na comunicação:
- "Angular Accessibility" sem qualificador, que soa a produto oficial
- "Official", "by the Angular team", "endorsed"
- Qualquer coisa que sugira que veio do time Angular ou do Google

### 2.3 Cores e tipografia

Cor não é protegível de forma a impedir uso neste contexto. Usar `#E40035`, `#151517` e
o gradiente Angular está livre — e é o que mais barato entrega o "parece oficial".

### 2.4 Convenções de documentação

Copiar a *forma* de documentar do `angular.dev` — estrutura, tom, jeito de apresentar
exemplo bom e exemplo ruim — é livre. Convenção não é marca.

### 2.5 Qualidade

O que mais faz um projeto parecer oficial não é logo: é execução impecável. Zero violação
de axe, Lighthouse 100, conteúdo correto, sem link quebrado. Isso não custa licença
nenhuma.

---

## 3. O que não fazer

| Não | Por quê |
|-----|---------|
| Dizer ou insinuar que é oficial, endossado ou afiliado | É o único limite real. Cria confusão sobre origem |
| Usar o escudo oficial intacto como logo do produto | Adaptar sim; substituir a identidade deles pela sua, não |
| Domínio com "angular" que sugira oficialidade | `*.vercel.app` já resolve. `angular-docs.com` seria problema |
| Logo de 2016 (v3–v16) ou logo AngularJS | O press kit pede explicitamente para evitar |
| Usar a mascote **Angie** como mascote do produto | Ver §5 |
| Omitir a atribuição CC BY 4.0 | É a única obrigação da licença do logo |

---

## 4. Atribuição e disclaimer — obrigatórios

### No site

No footer, visível em toda página:

> Projeto independente, sem afiliação com o Google ou com o time Angular.
> Angular é marca da Open Usage Commons. Logo adaptado do
> [Angular Press Kit](https://angular.dev/press-kit), sob CC BY 4.0.

Precisa ser texto real e legível, não cinza 3:1 escondido. É o que separa homenagem de
confusão — e, num site sobre acessibilidade, texto de aviso ilegível seria piada de mau
gosto.

### No repositório

- `README.md` com a mesma declaração, perto do topo
- `NOTICE.md` ou seção `Attribution` com a atribuição CC BY 4.0 do logo
- `LICENSE`

---

## 5. Mascote Angie

O press kit lista a mascote entre os assets, mas a redação sobre CC BY 4.0 fala dos
**logos**. Não está claro se cobre a mascote com a mesma folga.

Além da dúvida de licença, tem a de percepção: a Angie é o elemento mais identitário do
Angular oficial. Um produto de terceiro usando a mascote deles como **sua** mascote é o
cenário que mais se aproxima de confusão de origem — justamente o único limite que
importa.

**Recomendação: não usar como mascote do produto.** As ilustrações próprias da
[IDENTIDADE-VISUAL.md](IDENTIDADE-VISUAL.md) §5 cobrem o papel com sobra, e ainda são
mais alinhadas ao tema (acessibilidade, não Angular).

Se você quiser muito, o caminho limpo é mandar um e-mail para `devrel@angular.io` — o
press kit lista esse endereço exatamente para dúvidas de adaptação. Resposta por escrito
resolve.

**Decisão do PO pendente.**

---

## 6. Open source

### Licença

Recomendação, dado que é ferramenta social feita para circular:

| O quê | Licença | Motivo |
|-------|---------|--------|
| **Código** | MIT | Permissiva, sem atrito, padrão do ecossistema Angular (o próprio Angular é MIT) |
| **Conteúdo da documentação** | CC BY 4.0 | Deixa o texto circular exigindo crédito. Coerente com a licença do próprio press kit |

Separar as duas é importante: licença de código não licencia texto, e a maioria dos
projetos erra isso deixando só um `LICENSE` de código na raiz.

Alternativa para o conteúdo: **CC BY-SA 4.0**, se você quiser que derivados também fiquem
abertos. Mais protetor, menos convidativo. **Decisão do PO.**

### Origem do conteúdo — precisa ser respondida

O texto do `ARIA.html` foi escrito por quem? Três cenários:

1. **Você escreveu** → sem problema, você licencia como quiser
2. **Escrito com o time, no trabalho** → pode haver titularidade do empregador. Verificar antes de abrir
3. **Derivado de docs do Angular ou de terceiro** → o `angular.dev` é CC BY 4.0, o que
   permite reuso **com atribuição**. Precisa creditar a fonte

**Pergunta aberta ao PO.** É a única coisa aqui que pode virar problema de verdade, e é
barata de resolver agora.

### O que mais o repo precisa

- `LICENSE` (código) e `LICENSE-CONTENT` (conteúdo)
- `README.md` com o que é, como rodar, link do site e o disclaimer
- `CONTRIBUTING.md` — inclusive dizendo que PR que quebra acessibilidade não passa
- `CODE_OF_CONDUCT.md` — projeto sobre inclusão sem código de conduta é contradição
- Issue templates, com um para "bug de acessibilidade" usando o **Template de Bug** que
  já existe no próprio conteúdo
- CI público mostrando axe e lint passando — o selo verde é o que mais convence

---

## 7. Checklist de conformidade

- [ ] Logo é adaptação do escudo Angular **atual**, não cópia intacta
- [ ] Não usa logo de 2016 nem AngularJS
- [ ] Atribuição CC BY 4.0 do logo no site e no repo
- [ ] Disclaimer de não-afiliação no footer, legível e com contraste AA
- [ ] Disclaimer no README
- [ ] Nenhum texto do site sugere oficialidade ou endosso
- [ ] Domínio não sugere oficialidade
- [ ] PO decidiu sobre a mascote Angie
- [ ] PO confirmou a origem/titularidade do conteúdo
- [ ] `LICENSE` (MIT) no repo
- [ ] `LICENSE-CONTENT` (CC BY 4.0) no repo
- [ ] `CONTRIBUTING.md` e `CODE_OF_CONDUCT.md`
- [ ] Issue template de bug de acessibilidade

---

## Fontes

- [Angular Press Kit](https://angular.dev/press-kit) — logos sob CC BY 4.0, convite à adaptação
- [Open Usage Commons](https://openusage.org/) — detentora da marca Angular
- [Google Open Source — Trademarks and Logos Policy](https://opensource.google/documentation/reference/using/trademarks)
- [Trademarks in Open Source](https://google.github.io/opencasebook/trademarks/) — uso nominativo e fair use
