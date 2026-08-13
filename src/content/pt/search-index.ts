// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { SearchEntry } from '../types';

export const searchIndex: SearchEntry[] = [
  {
    "id": "fundamentos/o-que-e-acessibilidade",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "o-que-e-acessibilidade",
    "sectionTitle": "O que é acessibilidade?",
    "text": "Acessibilidade é a capacidade de um produto digital ser utilizado por todas as pessoas, independentemente de limitações visuais, auditivas, motoras, cognitivas ou temporárias. Exemplos de usuários: Pessoa cega usando TalkBack. Pessoa cega usando VoiceOver. Pessoa com baixa visão usando zoom. Pessoa com mobilidade reduzida utilizando teclado. Pessoa com deficiência cognitiva. Pessoa com braço machucado utilizando somente uma mão.",
    "keywords": []
  },
  {
    "id": "fundamentos/wcag-2-2",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "wcag-2-2",
    "sectionTitle": "WCAG 2.2",
    "text": "A WCAG (Web Content Accessibility Guidelines) é o conjunto mais utilizado no mundo para avaliar acessibilidade digital. Níveis de conformidade Nível Descrição A Requisitos mínimos. AA Padrão adotado pela maioria das empresas. AAA Nível mais rigoroso.",
    "keywords": []
  },
  {
    "id": "fundamentos/pour",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "pour",
    "sectionTitle": "POUR",
    "text": "Todos os critérios da WCAG derivam de quatro pilares: P - Perceivable (Perceptível) O usuário precisa conseguir perceber o conteúdo. Imagens precisam de texto alternativo. Informações não podem depender apenas de cor. O - Operable (Operável) A interface deve ser utilizável. Compatível com teclado. Compatível com leitores de tela. U - Understandable (Compreensível) Fluxos consistentes. Mensagens claras. Erros compreensíveis. R - Robust (Robusto) Compatível com tecnologias assistivas. HTML semântico. ARIA correta.",
    "keywords": []
  },
  {
    "id": "fundamentos/leitores-de-tela-2",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "leitores-de-tela-2",
    "sectionTitle": "Leitores de tela",
    "text": "TalkBack Leitor de tela nativo do Android. VoiceOver Leitor de tela nativo do iOS. O que eles precisam para funcionar corretamente? Nome acessível. Role correta. Estado correto. Exemplo Salvar, botão",
    "keywords": []
  },
  {
    "id": "fundamentos/como-um-leitor-de-tela-enxerga-uma-pagina",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "como-um-leitor-de-tela-enxerga-uma-pagina",
    "sectionTitle": "Como um leitor de tela enxerga uma página?",
    "text": "Usuários não enxergam a interface da mesma forma que usuários visuais. Eles navegam por: Títulos. Botões. Links. Campos. Landmarks. A mesma tela, dos dois lados Este é o HTML de um card de conta: Visualmente: um card com título, valor e botão. Impecável. Conta Corrente R$ 4.210,00 Transferir Três textos soltos. Nenhum título para navegar, nenhum botão para acionar, nenhuma forma de saber que \"Transferir\" faz algo. Ao navegar por títulos ou por botões, esta tela está vazia. O mesmo card, escrito para os dois Conta Corrente, título nível 2 R$ 4.210,00 Transferir, botão O que muda de verdade O CSS é o mesmo. A tela é idêntica. O que mudou foi a árvore de acessibilidade — a estrutura paralela que o navegador constrói e entrega ao leitor de tela. Ela não vem das classes nem do visual. Vem das tags e dos atributos. É por isso que trocar div por h2 e button não é preciosismo: é a diferença entre existir e não existir para uma parte das pessoas. Veja a sua No Chrome: F12, aba Elements, painel Accessibility. No Firefox: F12, aba Acessibilidade. É a página como o leitor de tela recebe — e costuma ser uma surpresa desconfortável na primeira vez. Uma tela visualmente perfeita pode ser completamente inutilizável para um leitor de tela.",
    "keywords": []
  },
  {
    "id": "fundamentos/regra-de-ouro-da-acessibilidade",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "regra-de-ouro-da-acessibilidade",
    "sectionTitle": "Regra de Ouro da Acessibilidade",
    "text": "HTML primeiro Sempre prefira HTML semântico antes de usar ARIA. Se existe uma tag HTML nativa capaz de resolver o problema, use ela.",
    "keywords": []
  },
  {
    "id": "fundamentos/estrutura-semantica-basica",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "estrutura-semantica-basica",
    "sectionTitle": "Estrutura Semântica Básica",
    "text": "",
    "keywords": []
  },
  {
    "id": "fundamentos/landmarks",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "landmarks",
    "sectionTitle": "Landmarks",
    "text": "Landmarks permitem que leitores de tela naveguem rapidamente pelas regiões importantes da página. Tag Função header Cabeçalho. nav Navegação. main Conteúdo principal. aside Conteúdo complementar. footer Rodapé. Leitura esperada, ao listar as regiões: Um main por página <main> é o destino do \"pular para o conteúdo\" e o ponto de partida de quem navega por regiões. Dois na mesma página tornam o atalho ambíguo, e o leitor passa a perguntar qual deles. Sem landmark, a única forma de chegar ao conteúdo é percorrer a página inteira desde o topo — a cada visita, em toda tela.",
    "keywords": [
      "aria-label",
      "routerLink",
      "tabindex"
    ]
  },
  {
    "id": "fundamentos/headings",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "headings",
    "sectionTitle": "Headings",
    "text": "Headings criam uma árvore de navegação.",
    "keywords": []
  },
  {
    "id": "fundamentos/accessible-name",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "accessible-name",
    "sectionTitle": "Accessible Name",
    "text": "Todo elemento interativo deve possuir um nome acessível. Texto visível Continuar, botão aria-label Fechar modal, botão",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "fundamentos/accessible-description",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "accessible-description",
    "sectionTitle": "Accessible Description",
    "text": "O leitor combinará o nome do campo com sua descrição.",
    "keywords": [
      "aria-describedby"
    ]
  },
  {
    "id": "fundamentos/nome-role-estado",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "nome-role-estado",
    "sectionTitle": "Nome + Role + Estado",
    "text": "Quase toda análise de leitor de tela pode ser resumida em três perguntas: Pergunta Exemplo Qual é o nome? Salvar Qual é a role? Botão Qual é o estado? Desabilitado Exemplo Salvar, botão, desabilitado",
    "keywords": []
  },
  {
    "id": "fundamentos/erros-mais-comuns-encontrados-em-angular",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "erros-mais-comuns-encontrados-em-angular",
    "sectionTitle": "Erros mais comuns encontrados em Angular",
    "text": "Div clicável simulando botão. Ícone clicável sem aria-label. Input apenas com placeholder. Ausência de heading principal. Modal sem gerenciamento de foco. Erros de formulário não anunciados. Uso excessivo de ARIA. Links agindo como botão. Botões agindo como links. tabindex positivo. Os dez, com a correção ao lado O tabindex positivo é o pior da lista porque contamina a página inteira: qualquer valor maior que zero salta na frente de todos os elementos naturais, inclusive os de outros componentes.",
    "keywords": [
      "aria-label",
      "aria-hidden",
      "aria-labelledby",
      "aria-describedby",
      "aria-invalid",
      "role:alert",
      "role:button",
      "tabindex",
      "ngIf",
      "routerLink"
    ]
  },
  {
    "id": "fundamentos/mentalidade-para-o-time-angular",
    "partId": "fundamentos",
    "partTitle": "Fundamentos de Acessibilidade Angular",
    "sectionId": "mentalidade-para-o-time-angular",
    "sectionTitle": "Mentalidade para o time Angular",
    "text": "Antes de criar qualquer componente, pergunte: Existe uma tag HTML nativa para isso? O elemento possui nome acessível? Funciona com teclado? Funciona com TalkBack? Funciona com VoiceOver?",
    "keywords": []
  },
  {
    "id": "aria/o-que-e-aria",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "o-que-e-aria",
    "sectionTitle": "O que é ARIA?",
    "text": "ARIA significa: ARIA existe para complementar a semântica HTML. ARIA NÃO substitui HTML semântico.",
    "keywords": [
      "role:button"
    ]
  },
  {
    "id": "aria/regra-de-ouro",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "regra-de-ouro",
    "sectionTitle": "Regra de Ouro",
    "text": "Se o HTML nativo resolve, não use ARIA desnecessariamente.",
    "keywords": []
  },
  {
    "id": "aria/accessible-name-2",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "accessible-name-2",
    "sectionTitle": "Accessible Name",
    "text": "Todo elemento interativo deve possuir um nome acessível. Texto interno Continuar, botão",
    "keywords": []
  },
  {
    "id": "aria/aria-label",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-label",
    "sectionTitle": "aria-label",
    "text": "Atributo Valor Uso aria-label string Define nome acessível. Quando usar Botão apenas com ícone. Ações sem texto visível. Elementos customizados. Exemplo Fechar modal, botão",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "aria/aria-labelledby",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-labelledby",
    "sectionTitle": "aria-labelledby",
    "text": "Valor Uso id Usa outro elemento como nome.",
    "keywords": [
      "aria-labelledby"
    ]
  },
  {
    "id": "aria/aria-describedby",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-describedby",
    "sectionTitle": "aria-describedby",
    "text": "Adiciona descrição complementar.",
    "keywords": [
      "aria-describedby"
    ]
  },
  {
    "id": "aria/aria-hidden",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-hidden",
    "sectionTitle": "aria-hidden",
    "text": "Valor Uso true Oculta do leitor. false Expõe ao leitor. Imagem decorativa",
    "keywords": [
      "aria-hidden"
    ]
  },
  {
    "id": "aria/aria-expanded",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-expanded",
    "sectionTitle": "aria-expanded",
    "text": "Indica estado expandido. Detalhes, botão, recolhido",
    "keywords": [
      "aria-expanded"
    ]
  },
  {
    "id": "aria/aria-controls",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-controls",
    "sectionTitle": "aria-controls",
    "text": "Relaciona um controlador a um conteúdo.",
    "keywords": [
      "aria-controls",
      "aria-expanded"
    ]
  },
  {
    "id": "aria/aria-current",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-current",
    "sectionTitle": "aria-current",
    "text": "Valor Uso page Página atual. step Etapa atual. location Local atual. Stepper",
    "keywords": [
      "aria-current"
    ]
  },
  {
    "id": "aria/aria-selected",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-selected",
    "sectionTitle": "aria-selected",
    "text": "Indica seleção.",
    "keywords": [
      "aria-selected",
      "role:tab"
    ]
  },
  {
    "id": "aria/aria-checked",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-checked",
    "sectionTitle": "aria-checked",
    "text": "Aceito, checkbox, marcado",
    "keywords": [
      "aria-checked",
      "role:checkbox"
    ]
  },
  {
    "id": "aria/aria-pressed",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-pressed",
    "sectionTitle": "aria-pressed",
    "text": "Botões toggle.",
    "keywords": [
      "aria-pressed"
    ]
  },
  {
    "id": "aria/aria-disabled",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-disabled",
    "sectionTitle": "aria-disabled",
    "text": "Continuar, botão, indisponível",
    "keywords": [
      "aria-disabled"
    ]
  },
  {
    "id": "aria/aria-required",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-required",
    "sectionTitle": "aria-required",
    "text": "Campo obrigatório",
    "keywords": [
      "aria-required"
    ]
  },
  {
    "id": "aria/aria-invalid",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-invalid",
    "sectionTitle": "aria-invalid",
    "text": "Campo inválido",
    "keywords": [
      "aria-invalid"
    ]
  },
  {
    "id": "aria/aria-live",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-live",
    "sectionTitle": "aria-live",
    "text": "Valor Uso off Não anuncia. polite Anuncia quando possível. assertive Anuncia imediatamente. Toast",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "aria/aria-atomic",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-atomic",
    "sectionTitle": "aria-atomic",
    "text": "Controla quanto será relido.",
    "keywords": [
      "aria-atomic",
      "aria-live"
    ]
  },
  {
    "id": "aria/aria-busy",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-busy",
    "sectionTitle": "aria-busy",
    "text": "Informa carregamento.",
    "keywords": [
      "aria-busy"
    ]
  },
  {
    "id": "aria/aria-modal",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-modal",
    "sectionTitle": "aria-modal",
    "text": "",
    "keywords": [
      "aria-modal",
      "role:dialog"
    ]
  },
  {
    "id": "aria/aria-haspopup",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-haspopup",
    "sectionTitle": "aria-haspopup",
    "text": "Valor Uso menu Abre menu. dialog Abre modal. listbox Abre lista.",
    "keywords": [
      "aria-haspopup"
    ]
  },
  {
    "id": "aria/aria-para-progress-bar",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "aria-para-progress-bar",
    "sectionTitle": "ARIA para Progress Bar",
    "text": "50%",
    "keywords": [
      "aria-valuemin",
      "aria-valuemax",
      "aria-valuenow",
      "role:progressbar"
    ]
  },
  {
    "id": "aria/principais-roles",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "principais-roles",
    "sectionTitle": "Principais Roles",
    "text": "Role Uso button Botão. link Link. dialog Modal. alert Mensagem urgente. status Status informativo. tablist Container de abas. tab Aba. tabpanel Conteúdo da aba. checkbox Checkbox. switch Liga e desliga. menu Menu. menuitem Item menu. listbox Lista selecionável. option Opção. Antes de escrever a role: já existe tag para isso? Metade da tabela acima você nunca precisa digitar, porque o HTML já entrega — com teclado e estado incluídos. Em vez de Use O que ganha de graça role=\"button\" <button> Tab, Enter, Espaço, disabled. role=\"link\" <a href> Tab, Enter, abrir em nova aba. role=\"checkbox\" <input type=\"checkbox\"> Espaço, estado sincronizado. role=\"dialog\" <dialog> Foco preso, ESC, inerte atrás. role=\"progressbar\" <progress> Valor anunciado sozinho. role=\"list\" <ul> e <li> \"lista com N itens\". As que não têm equivalente nativo Estas você escreve mesmo, porque o HTML não tem tag para elas. São também as que exigem mais teclado escrito à mão — e onde o @angular/aria passa a valer mais que a implementação própria. role muda o que se anuncia, não o que acontece Este é o mal-entendido mais caro sobre ARIA. A role é uma etiqueta para a tecnologia assistiva. Ela não adiciona comportamento nenhum — e prometer um botão que não funciona é pior do que não prometer nada.",
    "keywords": [
      "role:button",
      "role:link",
      "role:checkbox",
      "role:dialog",
      "role:progressbar",
      "role:list",
      "role:tablist",
      "role:tab",
      "role:tabpanel",
      "role:menu",
      "role:menuitem",
      "role:listbox",
      "role:option",
      "role:alert",
      "role:status"
    ]
  },
  {
    "id": "aria/roles-que-voce-quase-nunca-precisara",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "roles-que-voce-quase-nunca-precisara",
    "sectionTitle": "Roles que você quase nunca precisará",
    "text": "tree treegrid feed math meter log marquee Não use sem necessidade real.",
    "keywords": []
  },
  {
    "id": "aria/angular-attribute-binding",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "angular-attribute-binding",
    "sectionTitle": "Angular Attribute Binding",
    "text": "Também funciona",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "aria/erros-mais-comuns-com-aria",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "erros-mais-comuns-com-aria",
    "sectionTitle": "Erros mais comuns com ARIA",
    "text": "Adicionar role=\"button\" em botão. Adicionar aria-label desnecessária. aria-hidden em conteúdo importante. aria-live em excesso. Estado aria-expanded desatualizado. aria-describedby apontando para id inexistente. Criar componente customizado sem teclado. Cada erro, lado a lado O erro que não aparece em ferramenta nenhuma Todos acima o axe encontra. Este não: Tem role, tem tabindex, tem nome. O axe aprova. E Enter e Espaço não acionam nada, porque role=\"button\" não traz comportamento — só muda o que é anunciado. O resultado é pior que a div nua: o leitor de tela promete um botão que não funciona. Informação falsa com confiança. A regra que evita a lista inteira Antes de escrever qualquer atributo ARIA, pergunte se existe elemento HTML que já faz aquilo. Na maioria esmagadora dos casos existe, e ele vem com teclado, estado e semântica de graça.",
    "keywords": [
      "aria-label",
      "aria-hidden",
      "aria-live",
      "aria-expanded",
      "aria-describedby",
      "role:button",
      "tabindex"
    ]
  },
  {
    "id": "aria/checklist-aria",
    "partId": "aria",
    "partTitle": "ARIA Completo para Angular",
    "sectionId": "checklist-aria",
    "sectionTitle": "Checklist ARIA",
    "text": "Possui nome acessível? Possui role correta? Possui estado correto? Está sincronizado com o DOM? TalkBack anuncia corretamente? VoiceOver anuncia corretamente?",
    "keywords": []
  },
  {
    "id": "formularios/label",
    "partId": "formularios",
    "partTitle": "Formulários Acessíveis",
    "sectionId": "label",
    "sectionTitle": "Label",
    "text": "Nome, campo de edição",
    "keywords": []
  },
  {
    "id": "formularios/placeholder-nao-e-label",
    "partId": "formularios",
    "partTitle": "Formulários Acessíveis",
    "sectionId": "placeholder-nao-e-label",
    "sectionTitle": "Placeholder não é Label",
    "text": "Placeholder desaparece durante o preenchimento. Leitores de tela também podem apresentar inconsistências ao depender exclusivamente dele.",
    "keywords": []
  },
  {
    "id": "formularios/campos-obrigatorios",
    "partId": "formularios",
    "partTitle": "Formulários Acessíveis",
    "sectionId": "campos-obrigatorios",
    "sectionTitle": "Campos Obrigatórios",
    "text": "HTML Nativo Com ARIA Campo obrigatório",
    "keywords": [
      "aria-required"
    ]
  },
  {
    "id": "formularios/mensagens-de-ajuda",
    "partId": "formularios",
    "partTitle": "Formulários Acessíveis",
    "sectionId": "mensagens-de-ajuda",
    "sectionTitle": "Mensagens de Ajuda",
    "text": "Utilize aria-describedby.",
    "keywords": [
      "aria-describedby"
    ]
  },
  {
    "id": "formularios/validacao-de-erro",
    "partId": "formularios",
    "partTitle": "Formulários Acessíveis",
    "sectionId": "validacao-de-erro",
    "sectionTitle": "Validação de Erro",
    "text": "Campo inválido",
    "keywords": [
      "aria-invalid"
    ]
  },
  {
    "id": "formularios/erro-associado-ao-campo",
    "partId": "formularios",
    "partTitle": "Formulários Acessíveis",
    "sectionId": "erro-associado-ao-campo",
    "sectionTitle": "Erro Associado ao Campo",
    "text": "CPF Campo inválido CPF inválido",
    "keywords": [
      "aria-invalid",
      "aria-describedby"
    ]
  },
  {
    "id": "formularios/erro-dinamico-com-aria-live",
    "partId": "formularios",
    "partTitle": "Formulários Acessíveis",
    "sectionId": "erro-dinamico-com-aria-live",
    "sectionTitle": "Erro Dinâmico com aria-live",
    "text": "Erro que aparece depois do envio precisa de região viva. Sem ela, quem usa leitor de tela não fica sabendo que ele existe. A armadilha da região que ainda não existe Este é o erro mais comum de todos, e ele parece certo no código: Não funciona. role=\"alert\" e aria-live avisam o leitor de tela quando o conteúdo da região muda. Se a região inteira só entra no DOM no momento do erro, não houve mudança de conteúdo para observar — houve o nascimento de um elemento novo, que o leitor não estava monitorando. Vale para *ngIf, para @if e para o <mat-error> do Angular Material, que tem role=\"alert\" por dentro e esbarra exatamente nisso. Esconder com CSS quando não há erro é seguro — :empty não tira a região da árvore de acessibilidade. Alternativa quando a estrutura não permite manter a região montada. Duas armadilhas do Angular Material matInput sobrescreve o seu aria-describedby. O <mat-form-field> monta esse atributo sozinho, juntando hint e error. Um aria-describedby escrito na mão no input é substituído em silêncio, e a ligação com a sua mensagem se perde. aria-describedby apontando para o vazio. Quando não há erro, o atributo precisa sair do DOM. Apontar para um elemento vazio faz o leitor anunciar o nome do campo e cair num silêncio que a pessoa interpreta como conteúdo perdido. null remove o atributo. String vazia, não — aria-describedby=\"\" continua presente no HTML.",
    "keywords": [
      "aria-live",
      "aria-describedby",
      "aria-invalid",
      "role:alert",
      "ngIf",
      "LiveAnnouncer"
    ]
  },
  {
    "id": "componentes/botoes",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "botoes",
    "sectionTitle": "Botões",
    "text": "Continuar, botão",
    "keywords": []
  },
  {
    "id": "componentes/botao-apenas-com-icone",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "botao-apenas-com-icone",
    "sectionTitle": "Botão Apenas com Ícone",
    "text": "Editar endereço, botão",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "componentes/links",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "links",
    "sectionTitle": "Links",
    "text": "Links navegam. Botões executam ações.",
    "keywords": []
  },
  {
    "id": "componentes/cards-clicaveis",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "cards-clicaveis",
    "sectionTitle": "Cards Clicáveis",
    "text": "Alternativa",
    "keywords": []
  },
  {
    "id": "componentes/accordion",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "accordion",
    "sectionTitle": "Accordion",
    "text": "Como funciona? Botão Recolhido",
    "keywords": [
      "aria-expanded",
      "aria-controls"
    ]
  },
  {
    "id": "componentes/accordion-com-angular",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "accordion-com-angular",
    "sectionTitle": "Accordion com Angular",
    "text": "aria-expanded deve refletir o estado real.",
    "keywords": [
      "aria-expanded"
    ]
  },
  {
    "id": "componentes/tabs",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "tabs",
    "sectionTitle": "Tabs",
    "text": "",
    "keywords": [
      "aria-selected",
      "role:tablist",
      "role:tab"
    ]
  },
  {
    "id": "componentes/tab-panel",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "tab-panel",
    "sectionTitle": "Tab Panel",
    "text": "",
    "keywords": [
      "role:tabpanel"
    ]
  },
  {
    "id": "componentes/modal",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "modal",
    "sectionTitle": "Modal",
    "text": "",
    "keywords": [
      "aria-modal",
      "aria-labelledby",
      "role:dialog"
    ]
  },
  {
    "id": "componentes/checklist-modal",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "checklist-modal",
    "sectionTitle": "Checklist Modal",
    "text": "Possui role=\"dialog\"? Possui aria-modal? Recebe foco ao abrir? Prende foco internamente? Fecha com ESC? Retorna foco ao fechar?",
    "keywords": [
      "aria-modal",
      "role:dialog"
    ]
  },
  {
    "id": "componentes/bottom-sheet",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "bottom-sheet",
    "sectionTitle": "Bottom Sheet",
    "text": "Tratar como modal.",
    "keywords": [
      "aria-modal",
      "role:dialog"
    ]
  },
  {
    "id": "componentes/menu",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "menu",
    "sectionTitle": "Menu",
    "text": "",
    "keywords": [
      "aria-haspopup",
      "aria-expanded"
    ]
  },
  {
    "id": "componentes/itens-de-menu",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "itens-de-menu",
    "sectionTitle": "Itens de Menu",
    "text": "",
    "keywords": [
      "role:menu",
      "role:menuitem"
    ]
  },
  {
    "id": "componentes/dropdown",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "dropdown",
    "sectionTitle": "Dropdown",
    "text": "Sempre que possível, prefira select nativo.",
    "keywords": []
  },
  {
    "id": "componentes/combobox",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "combobox",
    "sectionTitle": "Combobox",
    "text": "Implementação complexa. Evite criar manualmente.",
    "keywords": [
      "aria-expanded",
      "role:combobox"
    ]
  },
  {
    "id": "componentes/lista",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "lista",
    "sectionTitle": "Lista",
    "text": "Lista com 2 itens",
    "keywords": []
  },
  {
    "id": "componentes/breadcrumb",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "breadcrumb",
    "sectionTitle": "Breadcrumb",
    "text": "Item Atual",
    "keywords": [
      "aria-label",
      "aria-current"
    ]
  },
  {
    "id": "componentes/stepper",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "stepper",
    "sectionTitle": "Stepper",
    "text": "Pagamento Etapa atual",
    "keywords": [
      "aria-current"
    ]
  },
  {
    "id": "componentes/tabela-simples",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "tabela-simples",
    "sectionTitle": "Tabela Simples",
    "text": "",
    "keywords": []
  },
  {
    "id": "componentes/tabela-boas-praticas",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "tabela-boas-praticas",
    "sectionTitle": "Tabela - Boas Práticas",
    "text": "Usar caption. Usar th. Usar scope. Evitar tabela feita com div. Quando há cabeçalho na coluna e na linha, o scope é o que permite ao leitor de tela dizer \"Março, Energia, R$ 210\" em vez de só \"R$ 210\". Leitura esperada, na célula de 198: Tabela larga precisa de rolagem alcançável Contêiner com rolagem horizontal e sem tabindex é uma armadilha: dá para ver que há mais coluna, e não dá para chegar nela sem mouse. Tabela montada com div perde a relação entre célula e cabeçalho. O leitor de tela lê uma sequência de números soltos, sem dizer a que mês ou categoria cada um pertence, e os comandos de navegação por tabela deixam de funcionar.",
    "keywords": [
      "aria-label",
      "role:region",
      "tabindex"
    ]
  },
  {
    "id": "componentes/tooltip",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "tooltip",
    "sectionTitle": "Tooltip",
    "text": "",
    "keywords": [
      "aria-describedby",
      "role:tooltip"
    ]
  },
  {
    "id": "componentes/toast",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "toast",
    "sectionTitle": "Toast",
    "text": "",
    "keywords": [
      "role:status"
    ]
  },
  {
    "id": "componentes/snackbar",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "snackbar",
    "sectionTitle": "Snackbar",
    "text": "",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "componentes/alertas-criticos",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "alertas-criticos",
    "sectionTitle": "Alertas Críticos",
    "text": "Anunciado imediatamente.",
    "keywords": [
      "role:alert"
    ]
  },
  {
    "id": "componentes/loading",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "loading",
    "sectionTitle": "Loading",
    "text": "",
    "keywords": [
      "aria-busy"
    ]
  },
  {
    "id": "componentes/progress-bar",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "progress-bar",
    "sectionTitle": "Progress Bar",
    "text": "30%",
    "keywords": [
      "aria-valuemin",
      "aria-valuemax",
      "aria-valuenow",
      "role:progressbar"
    ]
  },
  {
    "id": "componentes/skeleton-loading",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "skeleton-loading",
    "sectionTitle": "Skeleton Loading",
    "text": "Conteúdo visual deve ser ignorado pelo leitor de tela.",
    "keywords": [
      "aria-hidden"
    ]
  },
  {
    "id": "componentes/carrossel",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "carrossel",
    "sectionTitle": "Carrossel",
    "text": "Botão anterior. Botão próximo. Botão pausar. Slides identificáveis. Ofertas da semana, carrossel Pausar rotação, botão 1 de 4, slide Pausar não é opcional Conteúdo que se move sozinho por mais de 5 segundos precisa ter como parar. É critério de nível A — o mais básico da WCAG (2.2.2). Carrossel que gira sem botão de pausa é falha, não questão de gosto. O motivo não é só leitor de tela: quem tem dislexia ou déficit de atenção perde a linha quando algo se mexe ao lado do texto que está lendo. Respeite quem pediu menos movimento Setas em div não são alcançáveis por teclado, os slides escondidos continuam no DOM sendo lidos, não há pausa, e nada indica quantos itens existem.",
    "keywords": [
      "aria-roledescription",
      "aria-label",
      "aria-hidden",
      "aria-live",
      "role:region",
      "role:group",
      "ngFor",
      "2.2.2"
    ]
  },
  {
    "id": "componentes/infinite-scroll",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "infinite-scroll",
    "sectionTitle": "Infinite Scroll",
    "text": "Anunciar novos itens carregados. Preservar foco. Evitar mudanças bruscas. O problema que ninguém vê Rolagem infinita empurra o rodapé para longe a cada carga. Quem navega por teclado nunca chega nos links do rodapé — eles fogem. E quem usa leitor de tela não tem como saber quantos itens existem, nem se o carregamento terminou. A solução mais acessível para rolagem infinita é não usar rolagem infinita. Um botão dá controle, deixa o rodapé alcançável, e resolve o anúncio de graça. Carregar mais 20, botão 40 de 137 resultados Carregar só no evento de rolagem exclui quem navega por teclado: sem rolar com o mouse, o carregamento nunca dispara e a lista termina no vigésimo item para sempre.",
    "keywords": [
      "role:status",
      "ngFor"
    ]
  },
  {
    "id": "componentes/drag-and-drop",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "drag-and-drop",
    "sectionTitle": "Drag and Drop",
    "text": "Nunca dependa exclusivamente do gesto. Sempre ofereça alternativa por clique ou teclado. O CDK entrega o arrastar. O caminho por teclado é seu. Revisar contrato movido para a posição 2 de 5 Os dois detalhes que costumam faltar O foco segue o item. Se ficar na posição, a pessoa aperta \"subir\" duas vezes e move dois itens diferentes. Parece que a interface está quebrada. Anuncie a posição, não só a ação. \"Movido para cima\" não diz onde parou. \"Posição 2 de 5\" diz. Só arrastar exclui quem usa teclado, leitor de tela, ou tem limitação motora que dificulta o gesto de segurar e mover. É uma das falhas mais comuns em quadro de tarefas (WCAG 2.1.1).",
    "keywords": [
      "aria-label",
      "aria-hidden",
      "2.1.1"
    ]
  },
  {
    "id": "componentes/upload-de-arquivo",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "upload-de-arquivo",
    "sectionTitle": "Upload de Arquivo",
    "text": "",
    "keywords": []
  },
  {
    "id": "componentes/mensagens-dinamicas",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "mensagens-dinamicas",
    "sectionTitle": "Mensagens Dinâmicas",
    "text": "Muito utilizado para: Toast. Filtro aplicado. Busca concluída. Pagamento aprovado. Upload concluído.",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "componentes/checklist-de-componentes",
    "partId": "componentes",
    "partTitle": "Componentes Interativos e Estruturas Complexas",
    "sectionId": "checklist-de-componentes",
    "sectionTitle": "Checklist de Componentes",
    "text": "Possui nome acessível? Possui role correta? Possui estado correto? Funciona com teclado? Possui foco visível? Funciona com TalkBack? Funciona com VoiceOver? Anuncia mudanças importantes? Mantém ordem de foco adequada?",
    "keywords": []
  },
  {
    "id": "angular/angular-e-acessivel-por-padrao",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "angular-e-acessivel-por-padrao",
    "sectionTitle": "Angular é acessível por padrão?",
    "text": "Não. Angular renderiza o HTML que você escreve. Se o HTML for acessível, a aplicação tende a ser acessível. Se o HTML for ruim, Angular não corrige isso. O mesmo componente, dois resultados Os dois trechos abaixo produzem a mesma tela. Um funciona para todo mundo, o outro só para quem usa mouse e enxerga. Leitura esperada do segundo: O que o framework faz e o que não faz O Angular ajuda O Angular não faz Lint com regras de acessibilidade no template. Escolher o elemento certo por você. CDK A11y: foco, anúncio, teclado. Chamar essas ferramentas sozinho. Material com boa parte pronta. Garantir que o resultado funciona. @angular/aria com padrões da WAI-ARIA. Impedir uma div clicável. Ligue o lint hoje As regras de template do angular-eslint pegam parte da lista de erros comuns antes do commit. Como error, não warn — aviso que não quebra o build é aviso que ninguém lê.",
    "keywords": [
      "aria-pressed",
      "aria-label",
      "aria-hidden",
      "routerLink",
      "tabindex"
    ]
  },
  {
    "id": "angular/regra-principal-para-angular",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "regra-principal-para-angular",
    "sectionTitle": "Regra Principal para Angular",
    "text": "",
    "keywords": []
  },
  {
    "id": "angular/binding-de-aria",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "binding-de-aria",
    "sectionTitle": "Binding de ARIA",
    "text": "Quando o valor é dinâmico: Accordion",
    "keywords": [
      "aria-label",
      "aria-expanded"
    ]
  },
  {
    "id": "angular/ngif-e-foco",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "ngif-e-foco",
    "sectionTitle": "NgIf e Foco",
    "text": "Um dos problemas mais comuns. Quando o elemento some do DOM, o foco pode ser perdido.",
    "keywords": [
      "ngIf"
    ]
  },
  {
    "id": "angular/ngfor-e-acessibilidade",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "ngfor-e-acessibilidade",
    "sectionTitle": "NgFor e Acessibilidade",
    "text": "Prefira estruturas semânticas.",
    "keywords": [
      "ngFor"
    ]
  },
  {
    "id": "angular/router-angular",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "router-angular",
    "sectionTitle": "Router Angular",
    "text": "Aplicações SPA não recarregam a página. O leitor de tela não percebe automaticamente que houve mudança de tela. O que se perde quando a página não recarrega Num carregamento normal, o navegador entrega três coisas de graça. No SPA, as três param de acontecer e viram trabalho seu. O navegador fazia No SPA Quem resolve Reposicionar o foco no topo. O foco fica no link acionado, que já não existe. Serviço de foco de rota. Anunciar o título da nova página. Silêncio total. LiveAnnouncer ou TitleStrategy. Atualizar o título da aba. Fica o título da primeira tela. Title ou TitleStrategy. O título da aba é o primeiro texto que muitos leitores de tela anunciam ao trocar de contexto. Deixar o mesmo em todas as telas faz a pessoa perder a referência de onde está. Para título dinâmico, uma TitleStrategy resolve para toda a aplicação: Navegação por clique em div não é alcançável por Tab, não é anunciada como link, e tira da pessoa o \"abrir em nova aba\". Use routerLink numa âncora de verdade.",
    "keywords": [
      "LiveAnnouncer",
      "routerLink"
    ]
  },
  {
    "id": "angular/foco-apos-navegacao",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "foco-apos-navegacao",
    "sectionTitle": "Foco Após Navegação",
    "text": "Após a navegação: Mover foco para o H1. Ou para o conteúdo principal. Este é o arquivo completo. Registre uma vez, no componente raiz, e vale para todas as rotas da aplicação. Ligando no componente raiz: Três detalhes que decidem se funciona Ignorar mudança de âncora. Clicar num link interno da mesma página dispara evento de rota. Sem a guarda, o foco pula para o topo e a pessoa perde o trecho que pediu para ver. Anunciar depois de focar. Mover o foco cancela a fala em andamento. Anunciar antes faz o texto ser cortado no meio. tabindex=\"-1\", nunca 0. Com 0 o título entra na ordem do Tab e vira uma parada extra em toda navegação por teclado, sem fazer nada. Bônus: aria-current sem escrever código O RouterLinkActive tem uma entrada dedicada que aplica aria-current no link ativo. Resolve um item inteiro de checklist numa linha. Extrato, link, página atual",
    "keywords": [
      "aria-current",
      "tabindex",
      "LiveAnnouncer",
      "routerLink"
    ]
  },
  {
    "id": "angular/exemplo-de-destino-de-foco",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "exemplo-de-destino-de-foco",
    "sectionTitle": "Exemplo de Destino de Foco",
    "text": "",
    "keywords": [
      "tabindex"
    ]
  },
  {
    "id": "angular/anunciar-mudancas-de-tela",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "anunciar-mudancas-de-tela",
    "sectionTitle": "Anunciar Mudanças de Tela",
    "text": "Em aplicações Angular é comum anunciar o nome da tela.",
    "keywords": []
  },
  {
    "id": "angular/angular-cdk-accessibility",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "angular-cdk-accessibility",
    "sectionTitle": "Angular CDK Accessibility",
    "text": "O pacote mais importante para acessibilidade na stack Angular. LiveAnnouncer FocusMonitor FocusTrap FocusKeyManager InteractivityChecker Instalação Não precisa do Angular Material. O CDK é independente e não traz estilo nenhum. O que cada um resolve Utilitário Problema que resolve LiveAnnouncer Algo mudou e o leitor de tela precisa saber. cdkTrapFocus O Tab escapa de dentro do modal. FocusMonitor Mostrar o anel de foco só para quem usa teclado. FocusKeyManager Setas não navegam dentro do componente. InteractivityChecker Descobrir, em código, se um elemento é focável. cdkAriaLive Região viva declarativa, direto no template. Quando o texto já está no template, é mais simples que injetar o LiveAnnouncer. InteractivityChecker Útil ao escrever componente que precisa decidir para onde mandar o foco sem chutar.",
    "keywords": [
      "LiveAnnouncer",
      "FocusMonitor",
      "FocusTrap",
      "FocusKeyManager",
      "InteractivityChecker",
      "cdkTrapFocus"
    ]
  },
  {
    "id": "angular/liveannouncer",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "liveannouncer",
    "sectionTitle": "LiveAnnouncer",
    "text": "Permite criar anúncios para leitores de tela. Pagamento aprovado A armadilha do texto repetido Chamar duas vezes seguidas com o mesmo texto anuncia uma vez só. A região viva recebe a mesma string, não houve mudança de conteúdo, e o leitor de tela não tem o que reanunciar. É a causa de \"o anúncio funcionou no primeiro clique e depois parou\" — o código está certo, o comportamento é esperado. A correção é fazer a mensagem carregar o que mudou de verdade. Quase sempre isso deixa o anúncio melhor, não pior: Quando não há nada que varie, limpar a região antes força o anúncio. assertive interrompe a leitura em andamento. Numa confirmação de sucesso isso corta a frase que a pessoa estava ouvindo para dizer algo que podia esperar dois segundos. Reserve para erro que bloqueia o fluxo.",
    "keywords": [
      "LiveAnnouncer"
    ]
  },
  {
    "id": "angular/quando-usar-liveannouncer",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "quando-usar-liveannouncer",
    "sectionTitle": "Quando usar LiveAnnouncer",
    "text": "Pagamento concluído. Filtro aplicado. Busca concluída. Upload concluído. Erro importante. A regra por trás da lista Anuncie quando o resultado acontece sem trocar de tela e sem mover o foco. Se a pessoa vai perceber pelo foco que chegou em outro lugar, o anúncio vira repetição. Situação Anunciar? Por quê Filtro aplicado, lista atualizou na mesma tela. Sim Nada indica que mudou. Item removido do carrinho. Sim O elemento sumiu sem aviso. Modal abriu e recebeu foco. Não O foco já anuncia o dialog. Campo ficou inválido ao sair dele. Não Anuncia ao voltar o foco no campo. Botão virou \"Salvando…\". Não Foco está no botão, muda sozinho. 12 resultados para transferência Num campo de busca, isso dispara um anúncio por caractere digitado. O leitor de tela vira uma metralhadora e a pessoa não consegue nem terminar de escrever. Use debounce de uns 400ms — o tempo de parar de digitar.",
    "keywords": [
      "LiveAnnouncer"
    ]
  },
  {
    "id": "angular/cdktrapfocus",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "cdktrapfocus",
    "sectionTitle": "cdkTrapFocus",
    "text": "Prende o foco em uma região. Ideal para: Modal. Bottom Sheet. Dialog. Prender o foco é metade do trabalho. As outras metades são devolver o foco ao fechar e tornar o resto da página inalcançável. cdkTrapFocusAutoCapture Sem [cdkTrapFocusAutoCapture]=\"true\" a diretiva prende o foco mas não o move para dentro. O Tab passa a circular na região certa — só que a pessoa continua fora dela. Falta role=\"dialog\", falta aria-modal, falta rótulo, falta ESC e falta devolver o foco. Prender o Tab sozinho não faz um modal acessível — faz uma armadilha de teclado (WCAG 2.1.2).",
    "keywords": [
      "aria-modal",
      "aria-labelledby",
      "role:dialog",
      "cdkTrapFocus",
      "2.1.2"
    ]
  },
  {
    "id": "angular/exemplo-cdktrapfocus",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "exemplo-cdktrapfocus",
    "sectionTitle": "Exemplo cdkTrapFocus",
    "text": "",
    "keywords": [
      "cdkTrapFocus"
    ]
  },
  {
    "id": "angular/focusmonitor",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "focusmonitor",
    "sectionTitle": "FocusMonitor",
    "text": "Identifica como o foco chegou até o elemento. Mouse. Teclado. Touch. Programático. Antes de usar: você precisa mesmo disto? O caso mais comum — mostrar o anel de foco só para quem navega por teclado — o CSS resolve sozinho, sem nenhum código: :focus-visible é suportado em todos os navegadores atuais e já aplica a heurística de \"chegou por teclado\". O FocusMonitor vale quando a decisão precisa acontecer no TypeScript, não no estilo: registrar analytics, escolher para onde mandar o foco seguinte, mudar comportamento por origem. Remover o contorno sem substituto é o erro mais comum de todos. Para quem navega por teclado, equivale a esconder o cursor do mouse: a pessoa perde o rastro de onde está (WCAG 2.4.7).",
    "keywords": [
      "FocusMonitor",
      "2.4.7"
    ]
  },
  {
    "id": "angular/focuskeymanager",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "focuskeymanager",
    "sectionTitle": "FocusKeyManager",
    "text": "Gerencia navegação por setas. Muito utilizado em: Tabs. Menus. Listbox. Combobox. Antes de escrever: já existe pronto? Desde o Angular v22, @angular/aria entrega listbox, menu, tabs e combobox como diretiva, com teclado e ARIA implementados segundo a especificação. Escrever à mão só se justifica quando nenhum padrão de lá serve. O que vem abaixo é para esse caso — e para entender o que a diretiva faz por baixo. O padrão é sempre o mesmo: consultar as opções, inicializar o manager, encaminhar o teclado para ele. Cada opção precisa implementar FocusableOption — é o contrato que o manager usa para mover o foco. FocusKeyManager ou ListKeyManager? Classe O que faz Quando usar FocusKeyManager Move o foco de verdade para cada item. Menu e toolbar, onde o item recebe foco. ActiveDescendantKeyManager Marca o item ativo sem tirar o foco do campo. Combobox, onde o foco fica no input. ListKeyManager Base das duas. Só controla o índice ativo. Quando o comportamento de foco é seu. Dar tabindex=\"0\" a cada opção transforma uma lista de 40 itens em 40 paradas do Tab. O padrão correto é o contêiner receber o Tab uma vez, e as setas moverem dentro dele.",
    "keywords": [
      "aria-selected",
      "role:listbox",
      "role:option",
      "FocusKeyManager",
      "tabindex",
      "ngFor"
    ]
  },
  {
    "id": "angular/angular-material",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "angular-material",
    "sectionTitle": "Angular Material",
    "text": "O Material já possui boa parte da acessibilidade implementada. Mesmo assim, deve ser testado. O que vem pronto Role e atributos ARIA de cada componente. Navegação por teclado nos padrões complexos. Foco preso e ESC nos overlays. Alvos de toque no tamanho mínimo. O que continua sendo seu A regra vale para todo componente do Material: estrutura e comportamento vêm prontos; o significado é você quem escreve. Nome acessível, rótulo de campo, texto alternativo, ordem do DOM e contraste do tema continuam sendo decisão sua. Contraste do tema não é verificado por ninguém Um tema customizado passa a compilar com qualquer cor. Nada avisa que o texto ficou em 3:1. Ícone dentro de componente é sempre decorativo Vale para botão, aba, item de menu, chip e campo. Se o ícone acompanha texto, ele é redundante; se está sozinho, o nome vai no controle, não nele. Sem isso, o leitor de tela anuncia o nome da ligadura da fonte: \"home\", \"delete\", \"more_vert\" — que é o identificador interno, não a função.",
    "keywords": [
      "aria-label",
      "aria-hidden"
    ]
  },
  {
    "id": "angular/matdialog",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "matdialog",
    "sectionTitle": "MatDialog",
    "text": "Benefícios Role dialog. Gerenciamento de foco. ESC. Backdrop. O componente do dialog, com título e descrição ligados por id. E a abertura, com os dois atributos que o Material não infere sozinho. O foco que não volta O problema mais reportado do MatDialog: ao fechar, o foco vai para o início do documento em vez de voltar ao botão que abriu. Quem usa leitor de tela perde o lugar e precisa percorrer a página inteira de novo. O restoreFocus: true resolve a maior parte dos casos. Quando o botão que abriu deixa de existir — uma linha de tabela que some depois da ação, por exemplo — é preciso escolher o destino na mão. Sem ariaLabelledBy o dialog abre sem nome acessível: o leitor de tela anuncia apenas \"diálogo\", e a pessoa não sabe o que está confirmando.",
    "keywords": [
      "MatDialog"
    ]
  },
  {
    "id": "angular/checklist-matdialog",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "checklist-matdialog",
    "sectionTitle": "Checklist MatDialog",
    "text": "Tem título? Recebe foco? Retorna foco? Possui botão fechar?",
    "keywords": [
      "MatDialog"
    ]
  },
  {
    "id": "angular/mattabs",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "mattabs",
    "sectionTitle": "MatTabs",
    "text": "Implementa a estrutura de tabs. Mesmo assim valide: Setas funcionam. TalkBack anuncia corretamente. VoiceOver anuncia corretamente. Extrato, aba, selecionada, 1 de 2 Rótulo com ícone Ícone dentro do rótulo precisa ser escondido, senão o leitor tenta ler o nome da ligadura da fonte. Aba só com ícone é anunciada como \"receipt, aba\" — o nome da ligadura, não a função. Se o espaço não permite texto, use aria-label na aba.",
    "keywords": [
      "aria-label",
      "aria-hidden",
      "MatTabs"
    ]
  },
  {
    "id": "angular/matmenu",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "matmenu",
    "sectionTitle": "MatMenu",
    "text": "Preferível criar menus usando MatMenu ao invés de implementação caseira. Ações da conta, botão, tem menu suspenso O matMenuTriggerFor aplica aria-haspopup e aria-expanded sozinho, e move o foco para o primeiro item ao abrir. Isso é o principal motivo de não fazer menu à mão — é fácil errar em silêncio. Sem aria-label o gatilho é anunciado como \"more_vert, botão\" — o nome do ícone. O menu funciona, mas ninguém sabe o que ele abre.",
    "keywords": [
      "aria-haspopup",
      "aria-expanded",
      "aria-label",
      "aria-hidden",
      "MatMenu"
    ]
  },
  {
    "id": "angular/matselect",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "matselect",
    "sectionTitle": "MatSelect",
    "text": "Componente mais propenso a bugs de acessibilidade. Não é opinião: é o componente com mais issues de acessibilidade abertas no repositório oficial do Angular Material. Problemas conhecidos, reportados no repositório oficial Sintoma Issue Ao receber foco, não anuncia o valor já selecionado. material2#12297 Anuncia o mesmo item três vezes ao navegar com as setas. components#21410 Não anuncia expandido e recolhido ao abrir e fechar. components#20533 Dentro de um dialog, o VoiceOver não lê as opções. components#21787 Dentro do paginator, o leitor não acompanha a troca. components#20333 A lição vale mais que a lista: um componente mantido pelo time do framework, com anos de uso, ainda tem esses casos em aberto. Usar Material não substitui testar. Estado, caixa de combinação, São Paulo Onde o serviço será prestado Contorno quando a seleção não é anunciada Se o leitor de tela não falar o valor escolhido depois de selecionar, anuncie você mesmo. É o único caminho confiável hoje. Placeholder não é rótulo. Sem <mat-label> o campo é anunciado sem nome, e o placeholder some assim que a seleção acontece. O que testar, sempre Abertura: o leitor anuncia que a lista abriu? Fechamento: o leitor anuncia que fechou? Leitura da opção: cada opção é lida uma vez, não três? Estado selecionado: ao voltar o foco ao campo, o valor é falado? Dentro de dialog: as opções continuam sendo lidas?",
    "keywords": [
      "aria-describedby",
      "MatSelect",
      "ngFor",
      "LiveAnnouncer"
    ]
  },
  {
    "id": "angular/matexpansionpanel",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "matexpansionpanel",
    "sectionTitle": "MatExpansionPanel",
    "text": "Equivalente ao Accordion. Verificar: aria-expanded. Foco. Anúncio do estado. Dados pessoais, Nome, CPF e nascimento, botão, recolhido O aria-expanded é aplicado e mantido pelo componente. Não escreva na mão: um valor fixo anuncia \"recolhido\" para sempre, inclusive com o painel aberto. Cuidado com o nível de heading O header do painel não é um heading. Numa página que navega por títulos, os painéis somem da árvore. Quando o accordion organiza o conteúdo principal da tela, envolva o título: Escrever aria-expanded na mão sobrepõe o que o componente calcula, e o valor congela. É o erro clássico de accordion: visualmente abre, o leitor de tela continua dizendo que está fechado.",
    "keywords": [
      "aria-expanded",
      "MatExpansionPanel"
    ]
  },
  {
    "id": "angular/mattable",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "mattable",
    "sectionTitle": "MatTable",
    "text": "Não assumir que toda tabela Material é automaticamente acessível. Validar: caption. headers. sort. foco. Lançamentos dos últimos 30 dias, tabela, 2 colunas Data, cabeçalho de coluna, Ordenar por data, botão Use a versão com table, não com div O MatTable tem duas formas. A que usa <table>, <th> e <td> nativos entrega a semântica de graça. A versão com <mat-table> e <mat-cell> renderiza div com role, e depende de o navegador e o leitor de tela concordarem — o que nem sempre acontece. Ação dentro da linha Botão de ação repetido em toda linha precisa de nome único. Vinte botões \"Editar\" seguidos não dizem editar o quê.",
    "keywords": [
      "aria-label",
      "aria-hidden",
      "MatTable"
    ]
  },
  {
    "id": "angular/overlay-components",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "overlay-components",
    "sectionTitle": "Overlay Components",
    "text": "Todo componente que abre sobre a tela merece atenção extra. Modal. Popover. Tooltip. Select. Menu. Datepicker. As cinco perguntas de todo overlay Independente do componente, são sempre as mesmas. Se qualquer resposta for não, o overlay está quebrado para alguém. Pergunta Como se resolve O foco entra ao abrir? focus() no primeiro controle, ou no dialog. O Tab fica preso dentro? cdkTrapFocus, ou dialog com showModal(). O que está atrás é inalcançável? inert no conteúdo, ou aria-modal. ESC fecha? (keydown.escape) ou o dialog nativo. O foco volta ao abrir de novo? Guardar quem abriu e devolver ao fechar. Tooltip e popover não seguem essas regras São a exceção, e confundir os dois grupos é erro comum. Modal (dialog, select, menu) Não modal (tooltip, popover) Prende o foco Sim Não Recebe o foco ao abrir Sim Não Bloqueia o que está atrás Sim Não Ligação com o gatilho aria-haspopup aria-describedby Prender o foco num tooltip é armadilha de teclado. Ele descreve o controle onde o foco já está — não é um destino, é um complemento. Popover que contém controle acionável precisa das cinco respostas acima — nesse momento ele virou um modal na prática, por mais que o nome no código diga outra coisa.",
    "keywords": [
      "aria-modal",
      "aria-haspopup",
      "aria-describedby",
      "cdkTrapFocus",
      "ngIf"
    ]
  },
  {
    "id": "angular/datepicker",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "datepicker",
    "sectionTitle": "Datepicker",
    "text": "Validar: Navegação por teclado. Leitura do dia. Leitura do mês. Leitura do ano. Seleção correta. O campo de texto é a acessibilidade, não o calendário O ponto mais importante do datepicker: deixe digitar. Uma grade de calendário exige 15 ou 20 toques de seta para chegar numa data distante. Digitar \"15/03/1985\" leva segundos. O mat-hint com o formato esperado não é detalhe: é o que permite a pessoa acertar de primeira sem abrir a grade. readonly para \"forçar\" o uso do calendário é o erro mais comum aqui. Quem usa teclado ou leitor de tela perde o caminho rápido e fica preso na navegação por setas — e em telas de cadastro isso costuma ser o ponto de desistência. Teclado dentro do calendário Tecla Ação Setas Move um dia ou uma semana. Page Up / Page Down Mês anterior e seguinte. Home / End Primeiro e último dia do mês. Enter Seleciona e fecha. Esc Fecha sem selecionar.",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "angular/loading-angular",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "loading-angular",
    "sectionTitle": "Loading Angular",
    "text": "Mudanças de estado devem ser anunciadas. Ou:",
    "keywords": [
      "aria-busy"
    ]
  },
  {
    "id": "angular/lazy-loading",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "lazy-loading",
    "sectionTitle": "Lazy Loading",
    "text": "Quando conteúdo aparece após carregamento assíncrono, o foco e o anúncio devem ser avaliados. Carregando gráfico de gastos Os dois parâmetros que evitam o pior after 100ms — não mostra o \"carregando\" se a resposta vier rápido. Sem isso, um flash aparece e some, e o leitor de tela anuncia algo que já não existe. minimum 500ms — se aparecer, fica tempo suficiente para ser lido. Um estado que dura 80ms é ruído, não informação. Onde o foco deve ficar A regra depende de quem pediu o carregamento: Situação O foco Carregou ao entrar na viewport. Não move. Ninguém pediu. Pessoa clicou em \"ver detalhes\". Move para o conteúdo novo. Erro depois de uma ação. Move para a mensagem de erro. Spinner sem texto não diz nada a quem não vê a tela. O silêncio durante a espera é indistinguível de página quebrada — e depois de alguns segundos a pessoa desiste.",
    "keywords": [
      "aria-busy",
      "role:status",
      "role:alert"
    ]
  },
  {
    "id": "angular/signals-e-acessibilidade",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "signals-e-acessibilidade",
    "sectionTitle": "Signals e Acessibilidade",
    "text": "Signals atualizam a UI automaticamente. Mas leitores de tela não são notificados automaticamente. Use: aria-live LiveAnnouncer Onde o mal-entendido mora Signal atualiza o DOM. Atualizar o DOM não avisa ninguém. Um contador que vai de 3 para 4 muda na tela e não produz som nenhum — a menos que aquele pedaço de DOM esteja numa região viva declarada. 4 itens no carrinho Quando a mudança não tem representação visual em texto, o effect conecta o signal ao anúncio. O effect roda a cada mudança do signal. Ligado num campo de texto, isso é um anúncio por tecla digitada. Use um signal derivado que mude com menos frequência, ou debounce. Nada mudou com signals Signals não têm regra de acessibilidade própria. O que muda é que a atualização ficou mais fácil de escrever — e, com isso, ficou mais fácil atualizar a tela em lugares onde antes ninguém mexia. Cada um desses lugares é um anúncio a decidir.",
    "keywords": [
      "aria-live",
      "role:status",
      "Signals",
      "LiveAnnouncer",
      "Signal"
    ]
  },
  {
    "id": "angular/standalone-components",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "standalone-components",
    "sectionTitle": "Standalone Components",
    "text": "Não possuem diferenças específicas de acessibilidade. As mesmas regras continuam válidas.",
    "keywords": []
  },
  {
    "id": "angular/pipes",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "pipes",
    "sectionTitle": "Pipes",
    "text": "Cuidado com formatações que prejudicam a leitura. Exemplo Validar como o leitor anuncia.",
    "keywords": []
  },
  {
    "id": "angular/custom-components",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "custom-components",
    "sectionTitle": "Custom Components",
    "text": "A maior origem de bugs em Angular. Botões customizados. Select customizado. Dropdown customizado. Stepper customizado. Menu customizado. O que se perde ao trocar o nativo por um customizado Vem de graça no nativo Vira trabalho seu Role anunciada. Escrever e manter a role certa. Alcançável por Tab. tabindex correto em cada estado. Enter e Espaço acionam. Tratar as duas teclas na mão. Estado desabilitado anunciado. aria-disabled sincronizado. Envia formulário. Não envia mais. Funciona com voz e switch. Depende do que você escreveu. Se a estilização exige um elemento próprio, replique o contrato inteiro. Este é o mínimo de um botão feito à mão: Salvar, botão Isso ainda é pior que o nativo Mesmo bem escrito, o componente acima não envia formulário, não responde ao modo de voz do sistema em todos os casos, e precisa de teste em cada leitor de tela. Um <button type=\"button\"> com CSS resolve os mesmos casos sem nada disso. Funciona com mouse e falha em tudo o mais: não é anunciado como botão, o Tab não alcança, Enter e Espaço não acionam. É o erro número um de acessibilidade em Angular.",
    "keywords": [
      "aria-disabled",
      "tabindex"
    ]
  },
  {
    "id": "angular/regra-para-custom-components",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "regra-para-custom-components",
    "sectionTitle": "Regra para Custom Components",
    "text": "Sempre perguntar: Existe componente nativo? Existe componente Material? Existe diretiva no Angular Aria? Preciso mesmo criar do zero?",
    "keywords": []
  },
  {
    "id": "angular/angular-aria",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "angular-aria",
    "sectionTitle": "Angular Aria",
    "text": "Em novembro de 2025, com o Angular v22, o time Angular lançou o pacote oficial Angular Aria. São diretivas headless que implementam os padrões da WAI-ARIA Authoring Practices. Elas cuidam de navegação por teclado, atributos ARIA, gerenciamento de foco e suporte a leitor de tela. Você fornece o HTML e o estilo. Este é o lançamento mais relevante para acessibilidade na história do Angular. Combobox, listbox, menu e tree são os componentes que mais geram bug de acessibilidade quando feitos à mão — e agora existe uma implementação oficial, mantida pelo time do framework, seguindo a especificação. Antes dele, a resposta para \"preciso de um combobox acessível\" era \"a implementação é complexa, evite fazer à mão\" — sem dizer o que fazer no lugar. Agora tem resposta.",
    "keywords": []
  },
  {
    "id": "angular/padroes-do-angular-aria",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "padroes-do-angular-aria",
    "sectionTitle": "Padrões do Angular Aria",
    "text": "São treze padrões disponíveis. Diretiva Uso ngCombobox Campo de texto coordenado com um popup. ngAutocomplete Campo com sugestões filtradas. ngListbox Lista de opções, seleção única ou múltipla. ngSelect Dropdown de seleção única. ngMultiselect Dropdown de seleção múltipla. ngMenu Menu com submenus. ngMenubar Barra de navegação horizontal. ngToolbar Grupo de controles. ngTabs Abas. ngAccordion Painéis expansíveis. ngTree Lista hierárquica com expandir e recolher. ngGrid Dados em duas dimensões com navegação por célula. Compare com a lista de componentes que mais geram bug de acessibilidade em Angular. É quase a mesma lista. Instalação Antes do v22, a resposta para \"preciso de um combobox acessível\" era \"a implementação é complexa, evite fazer à mão\" — sem oferecer nada no lugar. Agora existe. Cidade, caixa de combinação, editável Recife, opção, 1 de 3 O que as diretivas fazem por baixo Tudo isto sai do seu código quando você usa o pacote: role em cada elemento do padrão. aria-expanded, aria-controls, aria-activedescendant sincronizados. Setas, Home, End, Enter e Escape tratados. Foco permanecendo no input, como o padrão exige. aria-selected na opção certa. Headless significa que o CSS é seu As diretivas não trazem estilo nenhum. Você continua responsável pelo foco visível, pelo contraste e pela ordem do DOM — é possível usar @angular/aria e ainda entregar uma tela inacessível.",
    "keywords": [
      "aria-expanded",
      "aria-controls",
      "aria-activedescendant",
      "aria-selected"
    ]
  },
  {
    "id": "angular/angular-aria-material-ou-cdk",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "angular-aria-material-ou-cdk",
    "sectionTitle": "Angular Aria, Material ou CDK?",
    "text": "Os três convivem e resolvem coisas diferentes. Pacote Entrega Quando usar Angular Material Componente pronto, com estilo. O visual do Material serve para o produto. Angular Aria Comportamento sem estilo. Design system próprio, mas sem reimplementar teclado e ARIA. Angular CDK A11y Utilitários de baixo nível. LiveAnnouncer, FocusTrap e FocusMonitor em qualquer cenário. O CDK A11y continua necessário mesmo usando Angular Aria. Anunciar \"pagamento concluído\" com LiveAnnouncer não é padrão de widget.",
    "keywords": [
      "LiveAnnouncer",
      "FocusTrap",
      "FocusMonitor"
    ]
  },
  {
    "id": "angular/o-que-o-angular-aria-nao-resolve",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "o-que-o-angular-aria-nao-resolve",
    "sectionTitle": "O que o Angular Aria não resolve",
    "text": "A biblioteca resolve padrões de widget. A maior parte dos bugs de acessibilidade em produção não é widget complexo. Div clicável no lugar de botão. Ícone clicável sem nome acessível. Input apenas com placeholder. Erro de formulário não anunciado. Foco perdido após navegação de rota. Heading fora de ordem. Contraste insuficiente. Imagem sem texto alternativo. Tabela sem cabeçalho associado. O mesmo componente, os dois lados da fronteira O @angular/aria cuida de tudo que está dentro do padrão. O que fica de fora continua sendo seu — e é onde mora a maior parte dos bugs reais. E o foco visível continua sendo CSS Diretiva headless significa que você fornece o HTML e o CSS. Dá para usar o Angular Aria e ainda assim entregar uma tela inacessível: foco invisível, contraste ruim, ordem de DOM diferente da ordem visual. A biblioteca elimina uma classe de erro. Ela não substitui saber o assunto, nem testar com TalkBack e VoiceOver.",
    "keywords": [
      "aria-selected"
    ]
  },
  {
    "id": "angular/erro-mais-comum-do-time-front",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "erro-mais-comum-do-time-front",
    "sectionTitle": "Erro Mais Comum do Time Front",
    "text": "Visualmente funciona. Mas perde: Role. Teclado. Estado. Semântica.",
    "keywords": []
  },
  {
    "id": "angular/checklist-angular",
    "partId": "angular",
    "partTitle": "Angular, Angular Material e Angular CDK A11y",
    "sectionId": "checklist-angular",
    "sectionTitle": "Checklist Angular",
    "text": "Existe HTML semântico? Existe nome acessível? Existe gerenciamento de foco? Existe anúncio para mudanças importantes? Router move foco corretamente? Material foi validado? Custom Components foram auditados? Funciona só com teclado? Funciona com TalkBack? Funciona com VoiceOver?",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/principio-fundamental",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "principio-fundamental",
    "sectionTitle": "Princípio Fundamental",
    "text": "Leitores de tela dependem de: Nome acessível. Role correta. Estado correto. Os três, num elemento só Favoritar Conta Corrente, botão de alternância, não pressionado Pergunta De onde vem O que a pessoa ouve Qual o nome? aria-label Favoritar Conta Corrente Qual a role? a tag button, mais o aria-pressed botão de alternância Qual o estado? aria-pressed ligado ao signal não pressionado Diagnóstico em três perguntas Diante de qualquer bug de leitor de tela, pergunte nesta ordem — o problema quase sempre está numa das três. O terceiro é o mais traiçoeiro: tudo parece implementado, e o atributo está congelado no valor inicial. Visualmente a estrela acende; para o leitor de tela, nada aconteceu. Quase todos os bugs podem ser analisados por esses três pontos.",
    "keywords": [
      "aria-label",
      "aria-pressed",
      "aria-hidden"
    ]
  },
  {
    "id": "leitores-de-tela/exemplo-de-leitura",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "exemplo-de-leitura",
    "sectionTitle": "Exemplo de Leitura",
    "text": "Salvar, botão Salvar, botão",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/botao-com-icone",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "botao-com-icone",
    "sectionTitle": "Botão com Ícone",
    "text": "Botão Fechar, botão",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "leitores-de-tela/campos-obrigatorios-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "campos-obrigatorios-2",
    "sectionTitle": "Campos Obrigatórios",
    "text": "Campo de edição Obrigatório",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/campo-invalido",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "campo-invalido",
    "sectionTitle": "Campo Inválido",
    "text": "Campo inválido",
    "keywords": [
      "aria-invalid"
    ]
  },
  {
    "id": "leitores-de-tela/checkbox",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "checkbox",
    "sectionTitle": "Checkbox",
    "text": "Aceito os termos Checkbox Não marcado Aceito os termos Checkbox Marcado",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/switch",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "switch",
    "sectionTitle": "Switch",
    "text": "Notificações Switch Ligado",
    "keywords": [
      "aria-checked",
      "role:switch"
    ]
  },
  {
    "id": "leitores-de-tela/accordion-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "accordion-2",
    "sectionTitle": "Accordion",
    "text": "Detalhes Botão Recolhido Detalhes Botão Expandido",
    "keywords": [
      "aria-expanded"
    ]
  },
  {
    "id": "leitores-de-tela/tabs-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "tabs-2",
    "sectionTitle": "Tabs",
    "text": "Dados Aba Selecionada",
    "keywords": [
      "aria-selected",
      "role:tab"
    ]
  },
  {
    "id": "leitores-de-tela/stepper-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "stepper-2",
    "sectionTitle": "Stepper",
    "text": "Pagamento Etapa atual",
    "keywords": [
      "aria-current"
    ]
  },
  {
    "id": "leitores-de-tela/mensagens-dinamicas-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "mensagens-dinamicas-2",
    "sectionTitle": "Mensagens Dinâmicas",
    "text": "O foco não precisa mudar. O leitor anuncia automaticamente.",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "leitores-de-tela/role-alert",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "role-alert",
    "sectionTitle": "Role Alert",
    "text": "É anunciado imediatamente. Utilizar apenas para mensagens importantes.",
    "keywords": [
      "role:alert"
    ]
  },
  {
    "id": "leitores-de-tela/foco-visivel",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "foco-visivel",
    "sectionTitle": "Foco Visível",
    "text": "Todo elemento focável deve indicar visualmente que recebeu foco.",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/sequencia-de-foco",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "sequencia-de-foco",
    "sectionTitle": "Sequência de Foco",
    "text": "A ordem do DOM deve refletir a ordem visual. Usuários de leitor de tela navegam seguindo a estrutura da página. O CSS que quebra a ordem sem avisar order, row-reverse e grid-area mudam o que se vê, e não mudam o DOM. O resultado: a pessoa vê \"Cancelar, Confirmar\" e o Tab entrega \"Confirmar, Cancelar\". É uma falha de WCAG 1.3.2, e das mais difíceis de perceber: para quem enxerga, a tela está perfeita. Quando o DOM precisa divergir de propósito Barra lateral que aparece à esquerda mas deve ser lida depois do conteúdo é um caso legítimo. A saída é colocar no DOM na ordem de leitura e posicionar por grid — nunca o contrário. Como testar em 30 segundos Clique na barra de endereço e vá apertando Tab. O anel de foco tem que descer a página numa linha previsível. Todo pulo para trás, ou para um canto distante, é um defeito.",
    "keywords": [
      "1.3.2"
    ]
  },
  {
    "id": "leitores-de-tela/modais",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "modais",
    "sectionTitle": "Modais",
    "text": "Ao abrir: Foco vai para o modal. Conteúdo anterior fica inacessível. Tab navega apenas dentro dele. Ao fechar: Foco retorna ao elemento que abriu. <dialog> com showModal() entrega role, aria-modal, foco preso e ESC já implementados e testados pelo navegador. Reimplementar isso à mão é a origem clássica de modal inacessível. Leitura esperada, ao abrir: show() e showModal() não são a mesma coisa show() showModal() Conteúdo de trás fica inerte Não Sim ESC fecha Não Sim Tab preso dentro Não Sim Usar show() num modal é o erro silencioso mais comum aqui: visualmente idêntico, e o leitor de tela continua lendo a página inteira por trás. Sem role, sem aria-modal, sem foco, sem ESC, sem retorno de foco. O Tab sai pela parte de trás e a pessoa se perde dentro da página que deveria estar bloqueada.",
    "keywords": [
      "aria-modal",
      "aria-labelledby",
      "ngIf"
    ]
  },
  {
    "id": "leitores-de-tela/problema-classico",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "problema-classico",
    "sectionTitle": "Problema Clássico",
    "text": "Ao fechar o modal, o foco muitas vezes desaparece. Deve retornar ao botão Editar.",
    "keywords": [
      "ngIf"
    ]
  },
  {
    "id": "leitores-de-tela/loading-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "loading-2",
    "sectionTitle": "Loading",
    "text": "Evite deixar usuário sem feedback. Exemplo Extrato carregado com sucesso",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/talkback-x-voiceover",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "talkback-x-voiceover",
    "sectionTitle": "TalkBack x VoiceOver",
    "text": "Cenário Diferenças comuns Forms Pequenas diferenças de anúncio. Tabs Ordem de anúncio pode variar. Modais Foco pode variar. Selects Muito dependente da implementação. Diferenças que mudam o que você escreve Situação TalkBack VoiceOver aria-describedby Lê depois de uma pausa. Às vezes só com o rotor em \"dicas\". Dois aria-live na mesma tela Costuma enfileirar. Costuma descartar o primeiro. role=\"alert\" ao inserir no DOM Frequentemente ignora. Frequentemente ignora. Posição no conjunto Anuncia \"1 de 5\" sozinho em listas. Exige aria-setsize e aria-posinset. Foco após remover elemento Vai para o próximo irmão. Costuma cair no topo. A regra que sobrevive aos dois Não escreva para um leitor de tela específico. Escreva HTML semântico correto e ARIA mínima — é o que os dois interpretam igual. Toda vez que algo funciona só em um deles, quase sempre é sinal de que a solução está apoiada num comportamento específico, e não na especificação. Testar em um não cobre o outro São motores diferentes, com heurísticas diferentes, em navegadores diferentes. A combinação que importa em produção: TalkBack com Chrome no Android, VoiceOver com Safari no iOS. Testar VoiceOver no Mac com Chrome não representa nem um nem outro.",
    "keywords": [
      "aria-describedby",
      "aria-live",
      "aria-setsize",
      "aria-posinset",
      "role:alert"
    ]
  },
  {
    "id": "leitores-de-tela/roteiro-de-teste-manual",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "roteiro-de-teste-manual",
    "sectionTitle": "Roteiro de Teste Manual",
    "text": "Ativar leitor de tela. Percorrer toda tela. Verificar títulos. Verificar botões. Verificar formulários. Testar erros. Testar loading. Testar modal. Testar navegação. Testar saída do fluxo. Como ligar Leitor Onde TalkBack Android: Configurações, Acessibilidade, TalkBack. Atalho: segurar os dois botões de volume por 3 segundos. VoiceOver iPhone: Ajustes, Acessibilidade, VoiceOver. Atalho: três cliques no botão lateral. VoiceOver Mac: Command + F5. NVDA Windows: gratuito, nvaccess.org. Insert + seta para baixo lê tudo. Os gestos que resolvem 90% do teste O que fazer TalkBack VoiceOver Próximo elemento Deslizar para a direita Deslizar para a direita Anterior Deslizar para a esquerda Deslizar para a esquerda Acionar Toque duplo Toque duplo Ler tudo a partir daqui Deslizar para baixo e para a direita Deslizar com dois dedos para baixo Trocar o modo de navegação Deslizar para cima e para a direita Girar dois dedos (rotor) Voltar Deslizar para baixo e para a esquerda Riscar dois dedos em Z O modo por títulos é o mais revelador Antes de percorrer elemento por elemento, mude a navegação para \"títulos\" e desça a página. Em 20 segundos você descobre se a estrutura faz sentido — e é assim que quem usa leitor de tela de verdade se orienta numa página nova. Ninguém percorre 200 elementos um a um. Se ao navegar por títulos você não consegue dizer do que a página trata, a estrutura está errada, independente do que o axe disser. O teste que vale por todos Desligue o monitor, ou feche os olhos, e tente concluir a jornada inteira só com o som. É desconfortável e é exatamente o ponto: essa é a experiência que você está entregando. Se você, que escreveu a tela, não consegue concluir — ninguém consegue.",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/bugs-mais-comuns-encontrados-em-producao",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "bugs-mais-comuns-encontrados-em-producao",
    "sectionTitle": "Bugs Mais Comuns Encontrados em Produção",
    "text": "Botão sem nome acessível. Ícone clicável sem label. Modal sem foco. Erro não anunciado. Toast não anunciado. Foco perdido após navegação. Ordem de foco incorreta. Accordion sem aria-expanded. Tabs sem aria-selected. Select customizado incompleto. Como cada um soa para quem usa leitor de tela A lista acima é técnica. Esta é a mesma lista traduzida para o que a pessoa de fato ouve — que é o que decide se ela conclui a tarefa ou desiste. Bug O que a pessoa ouve O que ela faz Botão sem nome. \"botão\" Aciona no escuro ou desiste. Ícone sem label. \"delete, botão\" Lê o nome da fonte, não a ação. Modal sem foco. Silêncio; continua na página de trás. Não sabe que algo abriu. Erro não anunciado. Nada. O envio parece ter funcionado. Espera uma confirmação que não vem. Toast não anunciado. Nada. Repete a ação, achando que falhou. Foco perdido após navegar. Silêncio; foco no começo do documento. Percorre o menu inteiro de novo. Accordion sem aria-expanded. \"Detalhes, botão\" — sempre igual. Não sabe se abriu. Tabs sem aria-selected. \"Extrato, aba\" — sem dizer qual está ativa. Perde a referência do contexto. Como achar os quatro primeiros em cinco minutos Sem instalar nada, no console do navegador: Isso não substitui axe nem teste real — pega três classes de erro das mais comuns, e roda em qualquer página em segundos.",
    "keywords": [
      "aria-expanded",
      "aria-selected",
      "aria-label",
      "aria-labelledby",
      "tabindex"
    ]
  },
  {
    "id": "leitores-de-tela/checklist-final-de-talkback-e-voiceover",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver e Testes Reais",
    "sectionId": "checklist-final-de-talkback-e-voiceover",
    "sectionTitle": "Checklist Final de TalkBack e VoiceOver",
    "text": "Todos os elementos possuem nome? Todos possuem role correta? Estado é anunciado? Fluxo funciona sem visão? Erros são anunciados? Mensagens dinâmicas são anunciadas? Foco nunca desaparece? A navegação faz sentido? Existe feedback para sucesso e erro?",
    "keywords": []
  },
  {
    "id": "qa-wcag/o-que-significa-uma-tela-acessivel",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "o-que-significa-uma-tela-acessivel",
    "sectionTitle": "O que significa uma tela acessível?",
    "text": "Uma tela acessível não é apenas uma tela sem erros de WCAG. Uma tela acessível permite que o usuário: Compreenda o conteúdo. Navegue sozinho. Execute ações. Receba feedback. Conclua a jornada.",
    "keywords": []
  },
  {
    "id": "qa-wcag/principais-criterios-wcag-para-angular",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "principais-criterios-wcag-para-angular",
    "sectionTitle": "Principais Critérios WCAG para Angular",
    "text": "Critério Tema 1.1.1 Texto alternativo. 1.3.1 Info e relacionamentos. 1.3.2 Sequência significativa. 1.4.3 Contraste. 1.4.10 Reflow. 2.1.1 Teclado. 2.1.2 Sem armadilha de teclado. 2.4.3 Ordem de foco. 2.4.6 Títulos e labels. 2.4.7 Foco visível. 3.3.1 Identificação de erros. 3.3.2 Instruções e labels. 4.1.2 Name, Role e Value.",
    "keywords": [
      "1.1.1",
      "1.3.1",
      "1.3.2",
      "1.4.3",
      "1.4.10",
      "2.1.1",
      "2.1.2",
      "2.4.3",
      "2.4.6",
      "2.4.7",
      "3.3.1",
      "3.3.2",
      "4.1.2"
    ]
  },
  {
    "id": "qa-wcag/criterios-que-mais-geram-bugs",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "criterios-que-mais-geram-bugs",
    "sectionTitle": "Critérios que Mais Geram Bugs",
    "text": "2.4.3 Ordem de foco. 4.1.2 Name Role Value. 3.3.1 Identificação de erros. 2.1.1 Navegação por teclado. 1.3.1 Relacionamentos.",
    "keywords": [
      "2.4.3",
      "4.1.2",
      "3.3.1",
      "2.1.1",
      "1.3.1"
    ]
  },
  {
    "id": "qa-wcag/checklist-de-story",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "checklist-de-story",
    "sectionTitle": "Checklist de Story",
    "text": "Toda história deveria responder: Possui componentes interativos? Existe leitor de tela impactado? Existe navegação por teclado? Existe foco? Existe anúncio dinâmico? Existe tratamento de erro?",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-de-desenvolvimento",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "checklist-de-desenvolvimento",
    "sectionTitle": "Checklist de Desenvolvimento",
    "text": "Existe HTML semântico? Existe label para todos os campos? Existe nome acessível? Existe role correta? Existe gerenciamento de foco? Existe suporte a teclado? Existe feedback para erro? Existe feedback para sucesso? Existe validação TalkBack? Existe validação VoiceOver?",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-de-pull-request",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "checklist-de-pull-request",
    "sectionTitle": "Checklist de Pull Request",
    "text": "Novos componentes foram testados? O foco continua correto? Não houve regressão de leitor de tela? Os labels permanecem corretos? ARIA continua sincronizada? Teclado continua funcionando?",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-de-qa",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "checklist-de-qa",
    "sectionTitle": "Checklist de QA",
    "text": "Todos os botões são anunciados? Todos os links são anunciados? Todos os campos possuem label? Todos os erros são anunciados? Todos os modais abrem corretamente? Todos os modais devolvem foco? Todos os accordions anunciam expandido/recolhido? Todas as tabs anunciam estado selecionado? Todos os steppers anunciam etapa atual? Existem regiões com foco perdido?",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-para-talkback",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "checklist-para-talkback",
    "sectionTitle": "Checklist para TalkBack",
    "text": "Navegar a tela inteira. Validar headings. Validar botões. Validar formulários. Validar modal. Validar mensagens de erro. Validar toast. Validar loading. Validar conclusão do fluxo.",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-para-voiceover",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "checklist-para-voiceover",
    "sectionTitle": "Checklist para VoiceOver",
    "text": "Navegar tela completa. Validar todos os elementos focáveis. Validar formulários. Validar alertas. Validar menus. Validar overlays. Validar conclusão da jornada.",
    "keywords": []
  },
  {
    "id": "qa-wcag/quando-abrir-um-bug-de-acessibilidade",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "quando-abrir-um-bug-de-acessibilidade",
    "sectionTitle": "Quando Abrir um Bug de Acessibilidade?",
    "text": "Sempre que o usuário: Não conseguir concluir uma tarefa. Não conseguir identificar um elemento. Não conseguir navegar. Perder foco. Não receber feedback. Receber informação incorreta.",
    "keywords": []
  },
  {
    "id": "qa-wcag/template-de-bug",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "template-de-bug",
    "sectionTitle": "Template de Bug",
    "text": "",
    "keywords": [
      "4.1.2"
    ]
  },
  {
    "id": "qa-wcag/classificacao-de-severidade",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "classificacao-de-severidade",
    "sectionTitle": "Classificação de Severidade",
    "text": "Nível Descrição Crítico Usuário não conclui a jornada. Alto Grande dificuldade de navegação. Médio Experiência degradada. Baixo Melhoria recomendada.",
    "keywords": []
  },
  {
    "id": "qa-wcag/exemplos-de-bugs-criticos",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "exemplos-de-bugs-criticos",
    "sectionTitle": "Exemplos de Bugs Críticos",
    "text": "Botão principal sem nome. Modal inacessível. Erro não anunciado. Foco preso incorretamente. Campo sem label. Por que estes são críticos e não altos O corte é um só: a pessoa não conclui a jornada. Não é \"fica ruim\", é \"não dá para terminar\". Cada exemplo abaixo trava um fluxo inteiro. O teste de severidade Pergunte: desligando o monitor, uma pessoa consegue concluir esta tarefa? Não consegue de jeito nenhum: crítico. Consegue com muita dificuldade ou tentativa e erro: alto. Consegue, mas a experiência é pior: médio. Consegue normalmente, há algo a melhorar: baixo.",
    "keywords": [
      "ngIf",
      "cdkTrapFocus"
    ]
  },
  {
    "id": "qa-wcag/exemplos-de-bugs-medios",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "exemplos-de-bugs-medios",
    "sectionTitle": "Exemplos de Bugs Médios",
    "text": "Heading incorreto. Texto alternativo ruim. Tooltip sem descrição. Leitura redundante. Médio é o que atrapalha sem impedir Por que médio e não baixo Nenhum desses impede a conclusão da tarefa. Todos aumentam o esforço: heading errado quebra a navegação por títulos, alt ruim esconde a informação do gráfico, redundância dobra o tempo de escuta de cada tela. Em volume, é o que faz a pessoa preferir o telefone ao aplicativo.",
    "keywords": [
      "aria-label",
      "aria-hidden"
    ]
  },
  {
    "id": "qa-wcag/definition-of-done-acessivel",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "definition-of-done-acessivel",
    "sectionTitle": "Definition of Done Acessível",
    "text": "WCAG AA atendida. Teclado funcionando. TalkBack validado. VoiceOver validado. Nome acessível definido. Role correta. Estado correto. Sem perda de foco. Sem erros conhecidos.",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-para-revisao-de-tela-nova",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "checklist-para-revisao-de-tela-nova",
    "sectionTitle": "Checklist para Revisão de Tela Nova",
    "text": "Existe H1? Existe estrutura semântica? Existe ordem lógica? Existe foco? Existe suporte para leitor? Existe tratamento de erro? Existe feedback de sucesso? Existe feedback de carregamento? Existe navegação consistente?",
    "keywords": []
  },
  {
    "id": "qa-wcag/european-accessibility-act",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "european-accessibility-act",
    "sectionTitle": "European Accessibility Act",
    "text": "Desde 28 de junho de 2025 o European Accessibility Act é exigível em todos os países da União Europeia. Ele deixou de ser assunto só de quem vende para a Europa. Empresas brasileiras que atendem clientes europeus, ou que fazem parte da cadeia de fornecimento de uma empresa europeia, entram no escopo. Categoria Exemplos Comércio eletrônico Loja, checkout, área do cliente. Serviços bancários Internet banking, aplicativo, autenticação. Transporte Venda de passagem, informação de viagem. Comunicação Telefonia, mensagens, chamada de emergência. Livros e mídia Leitores digitais, streaming. A norma técnica A conformidade é avaliada pela EN 301 549, que incorpora a WCAG. A versão 4.1.1 está prevista para 2026. Na prática, atender WCAG 2.2 nível AA cobre a maior parte do que a norma exige para conteúdo web. É o mesmo alvo que este guia inteiro persegue. O que muda no dia a dia Acessibilidade deixa de ser melhoria e passa a ser requisito de entrada. Exige documentação de conformidade, não só o site funcionando. Pode ser cobrada em contrato e em processo de compra. Aplica-se a produto novo e a atualização de produto existente. O que fazer Levantar se o produto atende clientes na União Europeia. Auditar contra WCAG 2.2 AA. Registrar os resultados, inclusive o que ainda não está conforme. Colocar acessibilidade no Definition of Done. Testar com pessoas usando tecnologia assistiva de verdade.",
    "keywords": [
      "4.1.1"
    ]
  },
  {
    "id": "qa-wcag/acessibilidade-cognitiva",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "acessibilidade-cognitiva",
    "sectionTitle": "Acessibilidade cognitiva",
    "text": "Boa parte do esforço de acessibilidade vai para deficiência visual e motora. Deficiência cognitiva afeta mais pessoas e recebe menos atenção. Entram aqui dislexia, TDAH, autismo, ansiedade, declínio cognitivo por idade — e também estados temporários: cansaço, pressa, estresse, uso do celular no meio da rua. Interface que funciona para quem está exausto funciona melhor para todo mundo. Este é o caso mais claro de que acessibilidade não é caso de exceção. O que ajuda Linguagem direta, frase curta, sem jargão desnecessário. Uma tarefa principal por tela. Passo a passo visível em fluxo longo. Erro que diz o que fazer, não só o que está errado. Ação destrutiva com confirmação e com desfazer. Sem limite de tempo, ou com opção de estender. Padrão consistente entre telas. Não depender de memória entre etapas. O que atrapalha Movimento automático, carrossel que gira sozinho. Formulário longo sem divisão nem salvamento parcial. Mensagem de erro genérica. Sessão que expira sem aviso. Excesso de informação simultânea. Ícone sem rótulo textual. Critérios WCAG relacionados Critério Tema 2.2.1 Tempo ajustável. 2.2.2 Pausar, parar, ocultar movimento. 3.2.3 Navegação consistente. 3.2.4 Identificação consistente. 3.3.3 Sugestão de correção de erro. 3.3.4 Prevenção de erro em ação importante. 3.3.7 Entrada redundante. 3.3.8 Autenticação acessível. Em Angular Anunciar o erro é metade. A outra metade é a mensagem dizer o que fazer.",
    "keywords": [
      "aria-live",
      "2.2.1",
      "2.2.2",
      "3.2.3",
      "3.2.4",
      "3.3.3",
      "3.3.4",
      "3.3.7",
      "3.3.8"
    ]
  },
  {
    "id": "qa-wcag/ferramentas-recomendadas",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "ferramentas-recomendadas",
    "sectionTitle": "Ferramentas Recomendadas",
    "text": "TalkBack. VoiceOver. Chrome Lighthouse. axe DevTools. Accessibility Insights. Angular CDK A11y. O que cada uma pega, e o que não pega Ferramenta Boa para Custo axe DevTools Violação de regra no DOM. É a engine dentro do Lighthouse. Extensão gratuita. Lighthouse Nota rápida e regressão. Roda no próprio Chrome. Já vem no navegador. Accessibility Insights Roteiro guiado de teste manual, passo a passo. Gratuito, Microsoft. TalkBack e VoiceOver A única resposta que importa: dá para concluir? Já está no celular. angular-eslint Pegar no commit, antes de virar bug. Já está no projeto. Colocar no CI, não só no navegador Verificação que depende de alguém lembrar de rodar não é verificação. O axe roda sobre HTML gerado, sem navegador: Ligue no pipeline com saída diferente de zero em caso de violação. Aviso que não quebra o build é aviso que ninguém lê. A ordem que funciona Lint no editor: pega enquanto você escreve. axe no CI: pega antes do merge. Lighthouse antes de subir: pega regressão geral. TalkBack e VoiceOver na entrega: pega o que importa. Os três primeiros somam cerca de um terço dos problemas. O quarto é o que responde se alguém consegue usar.",
    "keywords": []
  },
  {
    "id": "qa-wcag/o-que-ferramentas-nao-encontram",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "o-que-ferramentas-nao-encontram",
    "sectionTitle": "O que Ferramentas NÃO Encontram",
    "text": "Ferramentas automatizadas não substituem testes reais. Elas não identificam bem: Fluxos quebrados. Foco ruim. Experiência ruim. Anúncios confusos. Navegação complexa. Código que passa no axe e é inutilizável Os três exemplos abaixo têm zero violação em qualquer ferramenta automatizada. Os três são inacessíveis. Por que a ferramenta não vê Ela verifica o que é verificável sem entender a intenção: o atributo existe, o valor é válido, a relação está declarada. Nenhuma delas consegue responder \"esse nome descreve o que o botão faz?\" ou \"essa ordem faz sentido para quem está preenchendo o formulário?\". A conta real Ferramenta automatizada pega em torno de um terço dos problemas de acessibilidade. É um terço importante, barato e que roda em todo commit — mas é piso, não teto. Os outros dois terços exigem alguém percorrendo a jornada com teclado e com leitor de tela, perguntando se dá para concluir a tarefa. Não existe atalho para isso.",
    "keywords": [
      "aria-label",
      "aria-hidden",
      "role:button",
      "tabindex"
    ]
  },
  {
    "id": "qa-wcag/mentalidade-final",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
    "sectionId": "mentalidade-final",
    "sectionTitle": "Mentalidade Final",
    "text": "A pergunta não deve ser: Mas sim: Se a resposta for sim, normalmente a implementação está no caminho certo.",
    "keywords": []
  }
];
