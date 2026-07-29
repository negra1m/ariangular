# Identidade Visual

Decisões do PO. **Reescrito em 2026-07-28** — a versão anterior descrevia a referência
errado, porque eu tinha lido uma descrição em texto do dragonfly.xyz em vez de ver o
site. A descrição dizia "fundo branco dominante, muito whitespace". O site é preto,
denso e dramático. Este documento foi refeito a partir de capturas reais.

---

## 1. Posicionamento

**Ferramenta social.** Não é doc interna. É um site público, para compartilhar, mandar
no grupo do time, linkar num PR. Consequências de projeto:

- Cada seção linkável e coerente aberta sozinha
- OG image por rota
- A home explica em 5 segundos o que é
- Precisa ser bonito o suficiente para alguém querer mostrar

Acessibilidade costuma ser apresentada como obrigação e checklist chato. A aposta aqui é
o contrário: apresentar como cuidado, com peso visual.

---

## 2. Referência — [dragonfly.xyz](https://www.dragonfly.xyz/)

O que o site realmente é, visto nas capturas:

| Elemento | Como é |
|----------|--------|
| **Fundo** | Preto absoluto. Não é dark mode, é preto |
| **Acento** | Um único laranja vivo, usado com parcimônia e com força |
| **Arte** | ASCII animada — libélula, espirais, globo. É a alma, não enfeite |
| **Display** | Grotesca pesada em caixa alta, gigantesca, ocupando a largura |
| **Serif** | Alto contraste tipo Didot, branca, para frases de impacto e resumos |
| **Mono** | Minúscula, para labels técnicos: `SEC-01`, `ETHOS`, `TENET` |
| **Cabeçalho de seção** | `01` em laranja centralizado, título gigante, linha atravessando a tela, `SEC-01` colado na linha à esquerda |
| **Listagem** | Linhas com divisória. No hover, **a linha inteira vira chapada no acento** |
| **Spotlight** | Serif gigante, um item por linha, label mono alinhado na base |
| **Moldura** | `D` `F` `L` `Y` fixos nos quatro cantos da viewport, alguns espelhados |
| **Marcas de registro** | `+` nas bordas e `⁘` no canto dos cards, como marca de corte de gráfica |
| **Header** | Flutuante, pequeno, centralizado. Não atravessa a tela |
| **Menu** | Overlay com lista numerada e divisórias |

### O que traduzimos

| Deles | Nosso |
|-------|-------|
| Laranja | `#E40035`, o vermelho oficial do Angular |
| `D` `F` `L` `Y` nos cantos | `a` `r` `i` `a` |
| Libélula em ASCII | Anel de foco, onda de som, teclado, escudo — o tema deste projeto |
| `SEC-01` | `SEC—01` |
| Numeração 01–07 das seções | Numeração 01–07 das partes |
| Spotlight de empresas | Índice das 7 partes, em serif gigante |
| Listagem de conteúdo | Índice das seções dentro de cada parte |

---

## 3. Onde a referência conflita com acessibilidade

O dragonfly não precisa ser acessível. Nós precisamos. Três ajustes conscientes:

### 3.1 Serif de alto contraste só em display

Didot e similares têm traço fino e contraste extremo entre hastes. Bonito em título,
**ruim em corpo de texto** para dislexia e baixa visão. No dragonfly funciona porque são
três parágrafos por tela.

Nós temos 160 seções de leitura técnica. Regra: **serif em abertura, resumo e display.
Sans no corpo.**

### 3.2 Arte animada é opt-in do sistema

A arte em caracteres só anima sob `prefers-reduced-motion: no-preference`. Quem pediu
menos movimento recebe um quadro estático — não uma versão degradada, o mesmo desenho
parado.

Toda arte leva `aria-hidden` e `role="presentation"`. Um campo de 110×30 caracteres lido
em voz alta seria tortura, e não carrega informação.

### 3.3 Dois acentos, não um

Medido: `#E40035` sobre preto dá **4.35:1**. Passa para texto grande (3:1), **reprova**
para texto normal (4.5:1).

```
--color-accent        #E40035   display, numerais, superfície chapada
--color-accent-text   #FF5470   qualquer texto de tamanho normal
```

A marca se subordina ao critério. Onde não couber, a cor vai em superfície ou borda, não
em texto pequeno.

---

## 4. Cores

**Escuro é o padrão.** O claro é uma alternativa completa, não um remendo — quem tem
sensibilidade a fundo escuro precisa da mesma qualidade.

| Token | Escuro | Claro |
|-------|--------|-------|
| `--color-bg` | `#000000` | `#ffffff` |
| `--color-surface` | `#0c0c0e` | `#f4f4f6` |
| `--color-text` | `#ffffff` | `#0a0a0c` |
| `--color-muted` | `#9b9ba4` | `#56565f` |
| `--color-border` | `#5c5c66` | `#8b8b95` |
| `--color-accent` | `#e40035` | `#c4002c` |
| `--color-accent-text` | `#ff5470` | `#c4002c` |
| `--color-focus` | `#7fb2ff` | `#0b4fd6` |

**38 pares verificados, zero falha nos dois temas.** `npm run contrast` roda no CI e
quebra o build. Sobre preto absoluto a borda precisa de um cinza mais claro do que a
intuição sugere — `#55555f` reprovava com 2.85:1.

---

## 5. Tipografia

Quatro papéis, como na referência. **Nenhuma fonte externa** — bloquear a renderização
exclui quem tem conexão ruim.

| Papel | Onde | Stack |
|-------|------|-------|
| **Display** | Wordmark, títulos de seção, nomes de card | Arial Black, Helvetica Neue, Inter |
| **Serif** | Aberturas, resumos, índice em destaque | Didot, Bodoni MT, Georgia |
| **Mono** | Labels técnicos, numerais, breadcrumb | ui-monospace, Cascadia Code |
| **Sans** | Corpo de texto — onde se lê | system-ui |

Display em `clamp()` de viewport: o texto **é** o gráfico.
Corpo limitado a 68 caracteres por linha (WCAG 1.4.8).

---

## 6. Motivos recorrentes

- **Moldura de cantos** — `a` `r` `i` `a` fixos, decorativos, some no mobile e em zoom alto
- **Marcas de registro** — `+` nas bordas, `⁘` no fim das linhas de lista
- **Linha atravessando a tela** sob o título de seção, com label mono colado
- **Hover chapado** — a linha inteira vira acento. **O foco recebe o mesmo tratamento**,
  para quem usa teclado enxergar o que quem usa mouse enxerga
- **Numeração em toda parte** — `01`, `SEC—01`, `TOOL—01`, `01.4`

---

## 7. Ilustrações

Arte em caracteres, gerada por função de intensidade. Quatro motivos, todos do tema:

| Motivo | O que mostra |
|--------|--------------|
| `focus-ring` | Anéis concêntricos pulsando — o foco abraçando o elemento |
| `sound-wave` | Ondas saindo de um ponto — o leitor de tela anunciando |
| `keyboard` | Malha de teclas com um brilho percorrendo — o Tab caminhando |
| `shield` | Escudo com o anel dentro |

Não usar o repertório batido: nada de cadeira de rodas genérica nem símbolo internacional
de acesso como enfeite. O próprio conteúdo abre listando "pessoa com braço machucado
usando uma mão só" — acessibilidade não é só deficiência permanente.

### Mascote

Ver [MARCA-E-LICENCA.md §5](MARCA-E-LICENCA.md). Recomendação: **não** usar a Angie.
Decisão do PO pendente.

---

## 8. Logo

Escudo adaptado do Angular v17+, com um anel de foco dentro. Wordmark `aria` + `ngular`
com sobreposição no `a`, destaque só visual.

O nome **não** começa com "Angular" de propósito: `@angular/aria` é pacote oficial, e um
nome que começasse igual criaria confusão de origem. Detalhes em
[MARCA-E-LICENCA.md](MARCA-E-LICENCA.md).

---

## 9. Regras que não se negociam

1. Contraste AA verificado em todo par, nos dois temas, antes de commitar
2. Foco visível sempre, com o **mesmo peso** do hover
3. Nenhuma informação transmitida só por cor
4. Toda animação desligável por `prefers-reduced-motion`
5. Nenhuma fonte externa bloqueante
6. Arte decorativa invisível para leitor de tela
7. Serif nunca em corpo de texto longo
8. Layout íntegro em 320px e em zoom 200%

O visual serve o conteúdo. Onde o bonito conflitar com o acessível, o acessível ganha —
e quase sempre dá para ter os dois com mais trabalho.
