# Roteiro de Teste Humano

Para o PO executar. É a parte que nenhuma ferramenta faz — e a que decide se o site
tem direito de falar sobre acessibilidade.

Tempo estimado: **teclado 20 min · TalkBack 30 min · VoiceOver 30 min · medições 15 min**

Anote tudo que soar estranho, mesmo sem saber se é bug. Estranho é sinal.

---

## Como anotar

Para cada problema, no formato do próprio conteúdo do site:

```
Tela:
Problema:
Comportamento esperado:
Impacto:
Severidade: Crítico | Alto | Médio | Baixo
```

**Severidade:**
- **Crítico** — você não conclui a tarefa
- **Alto** — dificuldade grande de navegar
- **Médio** — experiência degradada
- **Baixo** — melhoria recomendada

---

# 1. Teclado (20 min)

Desktop, mouse **longe da mão**. Se você pegar o mouse, recomeça.

## 1.1 O básico

- [ ] Abrir a home e apertar `Tab` **uma vez**. O primeiro foco é o link "Pular para o
      conteúdo"? Ele fica **visível**?
- [ ] Apertar `Enter` nele. O foco pulou para o conteúdo principal?
- [ ] Tabular pela página inteira. **Em algum momento você perde de vista onde está?**
- [ ] Algum elemento focado fica escondido atrás do cabeçalho fixo?
- [ ] A ordem em que o foco anda bate com a ordem visual?
- [ ] Consegue sair de todos os lugares, ou algum prende o `Tab`?

## 1.2 Busca

- [ ] Apertar `/` fora de um campo. A busca abriu e o cursor está nela?
- [ ] Digitar `aria`. Aparecem resultados?
- [ ] Seta `↓` algumas vezes. **O destaque anda pela lista sem o cursor sair do campo?**
- [ ] Continuar apertando `↓` no último item — volta pro primeiro?
- [ ] `Enter`. Navegou para a seção?
- [ ] Abrir de novo, digitar, apertar `Esc`. Limpou o campo?
- [ ] `Esc` de novo. Fechou?
- [ ] **Depois de fechar, onde está o foco?** Deveria voltar pro botão de busca.
- [ ] Abrir a busca, apertar `Tab`. Fechou e seguiu o fluxo normal?
- [ ] Com o cursor dentro do campo de busca, digitar `/`. **Ele digita a barra ou abre
      outra busca?** Tem que digitar.

## 1.3 Checklists

- [ ] Ir em Checklists, entrar em um
- [ ] Tabular até um item e apertar `Espaço`. Marcou?
- [ ] Marcar vários. A barra de progresso acompanha?
- [ ] `Tab` até "Limpar progresso" e `Enter`
- [ ] **O foco foi para dentro do diálogo?**
- [ ] Tabular dentro dele — **o foco fica preso lá dentro ou escapa pra página atrás?**
- [ ] `Esc`. Fechou?
- [ ] **O foco voltou para o botão "Limpar progresso"?**
- [ ] Abrir de novo, confirmar. Limpou?
- [ ] `Tab` até "Exportar" e `Enter`. Colar num editor — o markdown está certo?

## 1.4 Auditor

- [ ] Ir no Auditor, `Tab` até "Carregar exemplo", `Enter`
- [ ] `Tab` até "Analisar", `Enter`
- [ ] **Para onde o foco foi?** Deveria ir para o cabeçalho do resultado
- [ ] Tabular até um campo de pergunta e digitar um texto
- [ ] O código da direita mudou com o que você digitou?

## 1.5 Resto

- [ ] Trocar o tema pelo teclado. Funcionou?
- [ ] Trocar o idioma pelo teclado. **Continuou na mesma página ou voltou pra home?**
      Tem que continuar na mesma.
- [ ] Estreitar a janela até o menu virar hambúrguer
- [ ] Abrir o menu pelo teclado
- [ ] **O foco fica preso dentro do menu?** (hoje provavelmente não — é um defeito
      conhecido, confirme)
- [ ] `Esc` fecha o menu? (hoje provavelmente não)
- [ ] Ao fechar, o foco volta pro botão?

---

# 2. TalkBack — Android (30 min)

**Ativar:** Configurações → Acessibilidade → TalkBack.
Atalho: segurar os dois botões de volume por 3 segundos.

**Gestos:** deslizar direita/esquerda anda entre elementos · toque duplo ativa ·
deslizar dois dedos rola.

## 2.1 Home

- [ ] Deslizar da esquerda até o fim da página. Tudo faz sentido?
- [ ] O nome do site é anunciado **uma vez só**, ou ele fala "aria" e "ngular" separado?
- [ ] Os números 01 a 07 são lidos? **Não deveriam** — são decorativos
- [ ] Os cards anunciam como link, com o nome da parte?
- [ ] O botão de tema anuncia o estado (ativado / desativado)?

## 2.2 Navegação entre telas — o ponto mais importante

- [ ] Abrir uma parte, depois uma seção
- [ ] **Ao trocar de tela, o TalkBack anuncia o nome da nova tela?**
- [ ] Anuncia **uma vez**, ou repete?
- [ ] Depois do anúncio, onde está o foco? Deveria estar no título da página
- [ ] Voltar pelo gesto de voltar. **O foco se perdeu?**

## 2.3 Conteúdo de uma seção

Use uma seção com tabela e código, por exemplo `/pt/aria/aria-label`.

- [ ] Percorrer a seção inteira
- [ ] Os blocos de código são anunciados de forma navegável, ou ele lê caractere por
      caractere sem parar?
- [ ] **Dá para pular um bloco de código longo?**
- [ ] O botão "copiar" anuncia o que copia, ou só "botão"?
- [ ] Ativar o copiar. **O TalkBack confirma que copiou?**
- [ ] O bloco "Como o leitor de tela anuncia" faz sentido sendo lido em voz alta?
- [ ] A tabela: ele relaciona cada célula ao cabeçalho?
- [ ] O callout anuncia o tom (Atenção / Boa prática)?

## 2.4 Busca

- [ ] Abrir a busca e digitar `foco`
- [ ] **A quantidade de resultados é anunciada?**
- [ ] Ela é anunciada **a cada letra** ou só quando você para de digitar? Só quando
      parar é o correto
- [ ] Navegar pelos resultados. Ele anuncia qual está selecionado?
- [ ] Ativar um. Foi para a seção certa?

## 2.5 Checklist

- [ ] Abrir um checklist
- [ ] Cada item anuncia o texto **e** o estado (marcado / não marcado)?
- [ ] Marcar um item. Ele confirma?
- [ ] **Depois de confirmar, ele anuncia o progresso também?** Escute se fica confuso
      ou repetitivo
- [ ] A barra de progresso é anunciada com o valor?
- [ ] Abrir o diálogo de limpar. **O foco entrou no diálogo?**
- [ ] O conteúdo de trás ainda é lido? **Não deveria**
- [ ] Fechar. O foco voltou?

## 2.6 Auditor

- [ ] Carregar o exemplo e analisar
- [ ] **O resultado da análise é anunciado?**
- [ ] As severidades são ditas em palavra (Crítico / Alto), não só sugeridas por cor?
- [ ] Os campos de pergunta têm rótulo lido?

## 2.7 A pergunta final

- [ ] **Sem olhar para a tela, você conseguiu: achar uma seção, ler, marcar um
      checklist e exportar?**

Se a resposta for não, anote exatamente onde travou. Esse é o achado mais valioso do
roteiro inteiro.

---

# 3. VoiceOver — iPhone (30 min)

**Ativar:** Ajustes → Acessibilidade → VoiceOver.
Atalho: três cliques no botão lateral.

**Gestos:** deslizar direita/esquerda anda · toque duplo ativa · dois dedos pra cima lê
tudo · girar dois dedos abre o **rotor**.

## 3.1 Rotor — o jeito que iOS navega

Gire dois dedos para escolher o modo, depois deslize para cima/baixo.

- [ ] Rotor em **Títulos**: dá para pular de seção em seção? Faz sentido?
- [ ] Rotor em **Links**: os links têm nomes que se explicam sozinhos, ou tem vários
      "Ver mais"?
- [ ] Rotor em **Pontos de referência**: aparecem cabeçalho, navegação, principal e
      rodapé?
- [ ] Rotor em **Controles de formulário**, na busca e no auditor

## 3.2 Repetir os blocos do TalkBack

- [ ] 2.2 — navegação entre telas
- [ ] 2.3 — conteúdo de uma seção
- [ ] 2.4 — busca
- [ ] 2.5 — checklist
- [ ] 2.6 — auditor

**Anote onde o comportamento for diferente do TalkBack.** O próprio conteúdo do site
tem uma seção sobre isso, e as diferenças esperadas são em tabs, modais e selects.

## 3.3 Específicos do iOS

- [ ] O `aria-live` da busca é anunciado, ou o VoiceOver engole?
- [ ] O diálogo de limpar prende o foco de verdade?
- [ ] Gesto de voltar: o foco fica num lugar coerente?
- [ ] Trocar para o idioma inglês. **A voz muda de pronúncia?** É o `lang` funcionando

---

# 4. Medições (15 min)

## Lighthouse

Chrome → F12 → aba Lighthouse. Rodar em **modo anônimo** (extensão atrapalha).

- [ ] Home, desktop: Accessibility ______ / Performance ______
- [ ] Home, mobile: Accessibility ______ / Performance ______
- [ ] Uma seção, mobile: Accessibility ______ / Performance ______
- [ ] Auditor, mobile: Accessibility ______ / Performance ______

Meta: **Accessibility 100** em todas. Qualquer coisa abaixo é bug.

## Zoom e reflow

- [ ] `Ctrl` `+` até **200%**. Perdeu conteúdo? Algo ficou inalcançável?
- [ ] `Ctrl` `+` até **400%**. Tem barra de rolagem **horizontal**? Não deveria
- [ ] F12 → modo dispositivo → largura **320px**. Rola pro lado? Não deveria

## Movimento

- [ ] Windows: Configurações → Acessibilidade → Efeitos visuais → desligar animações
- [ ] Recarregar o site. **Alguma coisa ainda anima?** Não deveria

## Sem JavaScript

- [ ] F12 → Ctrl+Shift+P → "Disable JavaScript" → recarregar
- [ ] **O texto da seção aparece?** Deveria — é HTML pré-renderizado
- [ ] Os links funcionam?

---

# 5. Onde registrar

Crie `plano/fase-10-polimento/ACHADOS.md` com o que encontrar, um bloco por problema
no formato do topo deste arquivo.

Regra da Fase 10: **nada Crítico ou Alto sobe para produção.**
