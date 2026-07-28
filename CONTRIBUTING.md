# Contribuindo

Obrigado por querer ajudar. Este projeto tem uma regra que não é negociável, então ela
vem primeiro.

## A regra

**PR que quebra acessibilidade não entra.** Sem exceção, sem "depois a gente arruma".

Este é um guia de acessibilidade. Se o site que ensina acessibilidade tiver problema de
acessibilidade, o projeto perde o direito de existir. Isso não é rigor estético — é a
tese do produto.

Na prática, antes de abrir o PR:

```bash
npm run verify
```

Isso roda lint (com as regras de a11y como erro), verificação de contraste e build.
Se qualquer um falhar, o PR não passa no CI.

## Checklist de PR

O próprio conteúdo do site tem um **Checklist de Pull Request**. Use ele:

- Novos componentes foram testados com teclado?
- O foco continua correto e nunca desaparece?
- Não houve regressão de leitor de tela?
- Os labels permanecem corretos?
- ARIA continua sincronizada com o estado real?
- Nenhuma informação passou a depender só de cor?

## Antes de escrever componente

As perguntas que o próprio guia manda fazer:

1. Existe uma tag HTML nativa para isso?
2. O elemento tem nome acessível?
3. Funciona com teclado?
4. Funciona com TalkBack?
5. Funciona com VoiceOver?

`<div (click)>` não passa. `<button>` passa.

## Mexeu em cor?

Rode `npm run contrast`. Ele lê `src/styles/tokens.css` e falha se qualquer par cair
abaixo do exigido pela WCAG AA, em qualquer um dos dois temas.

Se precisar de um par novo, adicione em `PAIRS` no `scripts/check-contrast.js`. Cor que
não está na lista é cor que ninguém está verificando.

## Mexeu no conteúdo?

A fonte de verdade é `fonte/ARIA.html`. Depois de alterar:

```bash
npm run fonte:validate   # aninhamento + acessibilidade estrutural
npm run fonte:diff       # confere que nada se perdeu
```

## Commits

Gitmoji, mensagem em inglês:

```
✨ add search combobox
🐛 fix focus lost after route change
♿ improve contrast on dark theme accent
♻️ refactor content service
```

## Reportando bug de acessibilidade

Use o template de bug de acessibilidade nas issues. Ele segue o formato do próprio
conteúdo do site: título, problema, comportamento esperado, impacto e critério WCAG.

Bug de acessibilidade tem prioridade sobre feature.
