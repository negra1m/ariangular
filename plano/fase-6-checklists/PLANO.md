# Fase 6 — Checklists Interativos

**Objetivo:** os 14 checklists espalhados pela documentação viram ferramentas de trabalho:
marcáveis, com progresso salvo e exportáveis para colar num PR ou numa story.

**Depende de:** Fases 2, 3 e 4.
**Bloqueia:** nada.

---

## Por que esta fase existe

É o que separa este produto de um PDF. O documento original termina cada parte com um
checklist — eles foram escritos para serem usados durante o trabalho, não lidos uma vez.
Um checklist que você marca durante o code review é uma ferramenta; o mesmo checklist em
texto corrido é decoração.

---

## Inventário

| ID | Título | Público | Momento de uso |
|----|--------|---------|----------------|
| `story` | Checklist de Story | PO / todos | Refinamento |
| `desenvolvimento` | Checklist de Desenvolvimento | Dev | Durante a implementação |
| `pull-request` | Checklist de Pull Request | Dev | Antes de abrir o PR |
| `qa` | Checklist de QA | QA | Teste da entrega |
| `definition-of-done` | Definition of Done Acessível | Todos | Fechamento |
| `revisao-tela-nova` | Revisão de Tela Nova | Dev / QA | Tela nova |
| `talkback` | Checklist para TalkBack | QA / Dev | Teste em Android |
| `voiceover` | Checklist para VoiceOver | QA / Dev | Teste em iOS |
| `leitores-final` | Checklist Final TalkBack e VoiceOver | QA | Validação final |
| `aria` | Checklist ARIA | Dev | Componente com ARIA |
| `componentes` | Checklist de Componentes | Dev | Componente novo |
| `angular` | Checklist Angular | Dev | Feature Angular |
| `modal` | Checklist Modal | Dev | Modal / bottom sheet |
| `mat-dialog` | Checklist MatDialog | Dev | Uso de MatDialog |

---

## Entregáveis

### 6.1 Página de índice — `/checklists`

Lista dos 14, agrupados por momento de uso (refinamento → desenvolvimento → PR → QA →
fechamento), com progresso de cada um. Agrupar por momento e não por ordem alfabética:
quem chega aqui está num ponto específico do fluxo.

### 6.2 Página de checklist — `/checklists/:id`

O checklist marcável. Decisão estrutural importante:

**Usar `<input type="checkbox">` nativo com `<label>` associado.** Não `role="checkbox"`
em `<div>`, não checkbox custom estilizado com `appearance: none` e pseudo-elemento sem
foco. O documento inteiro argumenta "HTML primeiro"; um checkbox custom aqui seria
contradizer o próprio produto na página mais visível dele.

Estilização: `accent-color` para a cor da marca, mantendo o controle nativo.

```html
<fieldset>
  <legend>Checklist de Pull Request</legend>
  <ul>
    <li>
      <input type="checkbox" id="pr-1" [checked]="…" (change)="…">
      <label for="pr-1">Novos componentes foram testados?</label>
    </li>
  </ul>
</fieldset>
```

Cada checklist mostra:
- Barra de progresso — `<progress>` nativo, ou `role="progressbar"` com
  `aria-valuemin`/`aria-valuemax`/`aria-valuenow` como o próprio documento ensina.
- Link para a seção da doc que originou o checklist.
- Ações: marcar tudo, desmarcar tudo, exportar.

### 6.3 Persistência

`core/progress/progress.service.ts` sobre localStorage.

- Chave versionada: `aria-angular:progress:v1`.
- Formato JSON (interno do localStorage).
- Escrita com debounce; leitura só na inicialização.
- **Guard de SSR**: localStorage não existe no prerender. Todo acesso protegido —
  senão o `ng build` quebra na hora de gerar as páginas estáticas.
- Falha de escrita (quota, modo privado) não pode derrubar a página: try/catch com aviso
  discreto de que o progresso não está sendo salvo.

### 6.4 Anúncio de progresso

Ao marcar um item: `aria-live="polite"` anunciando `"7 de 10 concluídos"`.

- Com debounce, pelo mesmo motivo da busca.
- O checkbox nativo já anuncia "marcado"/"não marcado" sozinho. O anúncio de progresso é
  complementar, não substituto — cuidado para não gerar leitura duplicada e confusa.

### 6.5 Export

Formatos:

1. **Markdown** — `- [x] item` / `- [ ] item`, com título e data. Cola direto no PR.
2. **Texto** — para story ou comentário de ticket.
3. **Copiar para a área de transferência** com confirmação anunciada.

Inclui no cabeçalho do export: nome do checklist, data, e contagem (`8/10`).

### 6.6 Reset

Botão de limpar por checklist, com confirmação. A confirmação é um `<dialog>` nativo ou
um dialog com `role="dialog"`, `aria-modal="true"`, foco preso, `ESC` fechando e foco
devolvido — as regras do "Checklist Modal" do próprio documento. Este dialog é o teste
prático de se a equipe entendeu a seção sobre modais.

Também um reset global na página de índice, com confirmação mais forte.

---

## Riscos

| Risco | Mitigação |
|-------|-----------|
| localStorage quebra o prerender | Guard de plataforma em todo acesso |
| Item de checklist mudar e invalidar progresso salvo | `id` estável por item, nunca índice de array |
| Usuário perder progresso ao limpar o navegador | Avisar na interface que é local; o export existe para isso |

---

## Critério de pronto

Os 14 checklists marcáveis, progresso sobrevivendo a recarga e a fechar o navegador,
export gerando markdown válido, e toda a interação — marcar, resetar, confirmar, exportar
— funcionando só com teclado e anunciada corretamente.
