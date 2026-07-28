# Fase 6 — Checklists Interativos · Checklist

Marcar concluído com data: `(YYYY-MM-DD)`

## Página de índice `/checklists`

- [ ] Os 14 checklists listados
- [ ] Agrupados por momento de uso, não por ordem alfabética
- [ ] Progresso de cada um visível na lista
- [ ] Cards/links são `<a>` reais
- [ ] Reset global com confirmação

## Página de checklist `/checklists/:id`

- [ ] Rota com parâmetro funcionando
- [ ] Rota inválida cai em 404 tratado
- [ ] `<fieldset>` com `<legend>` por checklist
- [ ] `<input type="checkbox">` **nativo**
- [ ] `<label for>` associado a cada checkbox
- [ ] Nenhum checkbox custom com `role="checkbox"` em `<div>`
- [ ] Estilização via `accent-color`, sem perder o controle nativo
- [ ] Foco visível em cada checkbox
- [ ] Barra de progresso com `<progress>` ou `role="progressbar"` completo
- [ ] Link de volta para a seção da doc de origem
- [ ] Ação "marcar tudo"
- [ ] Ação "desmarcar tudo"
- [ ] Ação "exportar"

## Os 14 checklists

- [ ] `story` — Checklist de Story
- [ ] `desenvolvimento` — Checklist de Desenvolvimento
- [ ] `pull-request` — Checklist de Pull Request
- [ ] `qa` — Checklist de QA
- [ ] `definition-of-done` — Definition of Done Acessível
- [ ] `revisao-tela-nova` — Revisão de Tela Nova
- [ ] `talkback` — Checklist para TalkBack
- [ ] `voiceover` — Checklist para VoiceOver
- [ ] `leitores-final` — Checklist Final TalkBack e VoiceOver
- [ ] `aria` — Checklist ARIA
- [ ] `componentes` — Checklist de Componentes
- [ ] `angular` — Checklist Angular
- [ ] `modal` — Checklist Modal
- [ ] `mat-dialog` — Checklist MatDialog

## Persistência

- [ ] `ProgressService` criado
- [ ] Chave versionada `ariangular:progress:v1`
- [ ] Escrita com debounce
- [ ] Leitura só na inicialização
- [ ] Guard de plataforma em todo acesso a localStorage
- [ ] `ng build` (prerender) não quebra por causa de localStorage
- [ ] Falha de escrita tratada com try/catch
- [ ] Aviso discreto quando o progresso não puder ser salvo
- [ ] `id` de item estável (nunca índice de array)
- [ ] Progresso sobrevive a recarga da página
- [ ] Progresso sobrevive a fechar e reabrir o navegador

## Anúncio

- [ ] `aria-live="polite"` com progresso ("7 de 10 concluídos")
- [ ] Anúncio com debounce
- [ ] Sem leitura duplicada junto do anúncio nativo do checkbox
- [ ] Testado com leitor de tela real

## Export

- [ ] Export em Markdown com `- [x]` / `- [ ]`
- [ ] Export em texto simples
- [ ] Cabeçalho com nome do checklist, data e contagem
- [ ] Copiar para área de transferência
- [ ] Confirmação da cópia anunciada
- [ ] Markdown gerado colado num PR renderiza correto

## Reset

- [ ] Botão de reset por checklist
- [ ] Dialog de confirmação com `role="dialog"` e `aria-modal="true"`
- [ ] Dialog recebe foco ao abrir
- [ ] Foco preso dentro do dialog
- [ ] `ESC` fecha o dialog
- [ ] Foco retorna ao botão que abriu
- [ ] Dialog tem título associado via `aria-labelledby`
- [ ] Reset global na página de índice com confirmação

## Fechamento da fase

- [ ] Toda interação operável só com teclado
- [ ] axe sem violação nas rotas de checklist
- [ ] `ng lint` e `ng build` passando
- [ ] Commit com gitmoji feito e `git push` executado
