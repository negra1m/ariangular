# Identidade Visual

Decisões do PO em 2026-07-28. Este documento manda no visual — as fases implementam o que
está aqui.

---

## 1. Posicionamento

**Ferramenta social.** Não é doc interna. É um site público, para compartilhar, mandar
no grupo do time, linkar num PR, postar no LinkedIn. Isso tem consequência de projeto:

- Cada seção precisa ser linkável e fazer sentido aberta sozinha
- OG image por rota, não uma genérica para o site todo
- Home tem que explicar em 5 segundos o que é, para quem nunca ouviu falar
- O site precisa ser bonito o suficiente para alguém querer mostrar

Acessibilidade normalmente é apresentada como obrigação e checklist chato. A aposta aqui
é o contrário: apresentar como cuidado. Daí o "carinho" pedido pelo PO — não é decoração,
é a tese do produto.

---

## 2. Referência

**[dragonfly.xyz](https://www.dragonfly.xyz/)**, trocando o acento laranja pela cor do Angular.

O que se aproveita da referência:

| Elemento | Como aplicar |
|----------|--------------|
| Seções numeradas (`01`, `02`…) | As 7 partes viram `01` a `07`. Número grande, visível, é a espinha do site |
| Alto contraste, fundo claro dominante | Base clara, preto quase puro no texto, acento usado com parcimônia |
| Muito whitespace | Respiro generoso entre blocos; a doc não pode parecer denso |
| Tipografia grande nos títulos | Títulos de parte em escala bem maior que o corpo |
| Âncoras sticky de seção | Vira o índice lateral da Fase 4 |
| Grid de cards | Home (7 partes) e índice de checklists |

O que **não** se aproveita: é um site de fundo de investimento. Nada do tom corporativo,
nada de foto de time, nada de linguagem institucional.

---

## 3. Cores

### Base oficial Angular

| Token | Hex | Origem |
|-------|-----|--------|
| `--angular-red` | `#E40035` | Red Ribbon — cor primária oficial |
| `--angular-ink` | `#151517` | Woodsmoke — preto oficial |
| `--angular-white` | `#FFFFFF` | Branco oficial |

**Tarefa da Fase 1:** extrair os stops exatos do gradiente do logo (rosa → roxo) dos
arquivos oficiais do [press kit](https://angular.dev/press-kit). O gradiente é a
assinatura visual do Angular pós-v17 e o site deve usá-lo — mas só em superfície
decorativa, nunca atrás de texto.

### Alerta de contraste — ler antes de usar a cor da marca

Medições feitas:

| Combinação | Contraste | Veredito |
|------------|-----------|----------|
| `#E40035` sobre branco | **4.83:1** | Passa AA para texto normal. **Não** passa AAA (7:1) |
| `#E40035` sobre `#151517` | **3.79:1** | **Reprova** AA para texto normal no tema escuro |

Consequência direta: **no tema escuro a cor da marca não pode ser usada em texto sem ser
clareada.** Definir um `--accent-dark` derivado, mais claro, e medir antes de usar.

Este site não tem o direito de errar contraste. A cor da marca se subordina ao critério,
não o contrário. Onde não couber, usa-se a cor em borda, fundo de badge ou detalhe
gráfico — não em texto.

### Estrutura de tokens

- Neutros: escala de cinza do branco ao `#151517`
- Acento: `--accent` (claro) e `--accent-dark` (escuro), ambos verificados
- Semânticos dos callouts: info / atenção / boa prática — derivados, cada um verificado
  nos dois temas
- Gradiente Angular: só em superfície decorativa

**Tema claro é o padrão** (a referência é clara), com toggle para escuro.

---

## 4. Tipografia

- **Títulos:** sans-serif geométrica, peso alto, escala grande. Contraste forte com o corpo
- **Corpo:** sans-serif de leitura, tamanho base 17–18px, altura de linha ~1.7
- **Código:** monoespaçada
- **Números de seção:** o maior elemento tipográfico da página depois do título

Regra dura: **nada de fonte externa bloqueante.** Fonte de sistema ou self-hosted com
`font-display: swap`. Um guia de acessibilidade não pode ter texto invisível esperando
download — isso exclui quem tem conexão ruim.

Corpo de texto limitado a ~68 caracteres por linha (WCAG 1.4.8).

---

## 5. Ilustrações — "carinho por todo ele"

Pedido explícito do PO. Ilustrações sobre acessibilidade espalhadas pelo site, com tom
afetuoso, não clínico.

### Direção

Não usar o repertório batido: nada de cadeira de rodas genérica, nada do símbolo
internacional de acesso como enfeite, nada de ícone de olho cortado. Acessibilidade não
é só deficiência permanente — o próprio documento abre listando "pessoa com braço
machucado usando uma mão só" e "pessoa usando zoom".

O que ilustrar, seguindo o que o conteúdo já diz:

- Mão navegando por teclado
- Onda de som saindo de um botão (o leitor anunciando "Salvar, botão")
- Dedo em alvo de toque grande
- Foco como um anel que abraça o elemento
- Alguém usando o celular no sol, apertando os olhos
- Uma mão só segurando o telefone

### Requisitos técnicos

- **SVG inline**, não PNG — escala, herda `currentColor`, pesa pouco
- Decorativa: `aria-hidden="true"` e `alt=""`. Ilustração não deve ser lida
- Informativa (se houver): `<title>` no SVG e descrição no texto
- Precisa funcionar nos dois temas — usar `currentColor` e tokens, não hex fixo
- Animação apenas com `prefers-reduced-motion: no-preference`
- Nenhuma ilustração pode carregar significado sozinha (WCAG 1.4.1)

### Mascote

Ver [MARCA-E-LICENCA.md §5](MARCA-E-LICENCA.md). Recomendação: **não** usar a Angie como
mascote do produto. As ilustrações próprias cobrem o papel e são mais alinhadas ao tema.
Decisão do PO pendente.

---

## 5.1 Logo do produto

**Adaptação do escudo Angular atual (v17+)** — silhueta reconhecível, conteúdo interno
próprio ligado a acessibilidade, dentro da família cromática Angular.

Isso é explicitamente permitido e encorajado pelo press kit oficial, que licencia os
logos sob CC BY 4.0 e convida a comunidade a adaptar cor e forma. É o que entrega "cara
de ecossistema Angular" sem afirmar nada falso.

Regras: usar o escudo **atual**, nunca o de 2016 nem o do AngularJS; atribuição CC BY 4.0
no site e no repo; nunca o escudo oficial intacto como logo do produto.

Detalhes e limites em [MARCA-E-LICENCA.md](MARCA-E-LICENCA.md).

---

## 6. Aplicação por área

| Área | Direção |
|------|---------|
| **Home** | Landing curta: hero com a tese, 7 cards numerados `01`–`07`, atalho para checklists e auditor. Ilustração no hero. Uma tela e meia |
| **Doc** | Coluna de leitura confortável, número da parte grande no topo, índice lateral sticky, ilustração pontual abrindo cada parte |
| **Checklists** | Cara de ferramenta: progresso visível, denso, funcional. Menos ilustração, mais utilidade |
| **Auditor** | Duas colunas — cola à esquerda, resultado à direita. Severidade com rótulo textual e cor, nunca só cor |
| **Footer** | Enxuto. Crédito, LinkedIn, repositório, licença e **disclaimer de não-afiliação legível** |

---

## 7. Regras que não se negociam

1. Contraste AA verificado em **todo** par de cor, nos dois temas, antes de commitar
2. Foco visível sempre, com contraste próprio verificado
3. Nenhuma informação transmitida só por cor
4. Toda animação desligável por `prefers-reduced-motion`
5. Nenhuma fonte externa bloqueante
6. Ilustração decorativa é invisível para leitor de tela
7. Layout íntegro em 320px e em zoom 200%

O visual serve o conteúdo. Onde o bonito conflitar com o acessível, o acessível ganha —
e quase sempre dá para ter os dois com mais trabalho.
