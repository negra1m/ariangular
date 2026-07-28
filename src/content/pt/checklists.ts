// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Checklist } from '../types';

export const checklists: Checklist[] = [
  {
    id: 'aria',
    title: 'Checklist ARIA',
    audience: 'dev',
    stage: 'desenvolvimento',
    sourceSectionId: 'checklist-aria',
    sourcePartId: 'aria',
    items: [
      {
        id: 'checklist-aria-1',
        text: 'Possui nome acessível?',
      },
      {
        id: 'checklist-aria-2',
        text: 'Possui role correta?',
      },
      {
        id: 'checklist-aria-3',
        text: 'Possui estado correto?',
      },
      {
        id: 'checklist-aria-4',
        text: 'Está sincronizado com o DOM?',
      },
      {
        id: 'checklist-aria-5',
        text: 'TalkBack anuncia corretamente?',
      },
      {
        id: 'checklist-aria-6',
        text: 'VoiceOver anuncia corretamente?',
      },
    ],
  },
  {
    id: 'modal',
    title: 'Checklist Modal',
    audience: 'dev',
    stage: 'desenvolvimento',
    sourceSectionId: 'checklist-modal',
    sourcePartId: 'componentes',
    items: [
      {
        id: 'checklist-modal-1',
        text: 'Possui role="dialog"?',
      },
      {
        id: 'checklist-modal-2',
        text: 'Possui aria-modal?',
      },
      {
        id: 'checklist-modal-3',
        text: 'Recebe foco ao abrir?',
      },
      {
        id: 'checklist-modal-4',
        text: 'Prende foco internamente?',
      },
      {
        id: 'checklist-modal-5',
        text: 'Fecha com ESC?',
      },
      {
        id: 'checklist-modal-6',
        text: 'Retorna foco ao fechar?',
      },
    ],
  },
  {
    id: 'componentes',
    title: 'Checklist de Componentes',
    audience: 'dev',
    stage: 'desenvolvimento',
    sourceSectionId: 'checklist-de-componentes',
    sourcePartId: 'componentes',
    items: [
      {
        id: 'checklist-de-componentes-1',
        text: 'Possui nome acessível?',
      },
      {
        id: 'checklist-de-componentes-2',
        text: 'Possui role correta?',
      },
      {
        id: 'checklist-de-componentes-3',
        text: 'Possui estado correto?',
      },
      {
        id: 'checklist-de-componentes-4',
        text: 'Funciona com teclado?',
      },
      {
        id: 'checklist-de-componentes-5',
        text: 'Possui foco visível?',
      },
      {
        id: 'checklist-de-componentes-6',
        text: 'Funciona com TalkBack?',
      },
      {
        id: 'checklist-de-componentes-7',
        text: 'Funciona com VoiceOver?',
      },
      {
        id: 'checklist-de-componentes-8',
        text: 'Anuncia mudanças importantes?',
      },
      {
        id: 'checklist-de-componentes-9',
        text: 'Mantém ordem de foco adequada?',
      },
    ],
  },
  {
    id: 'matdialog',
    title: 'Checklist MatDialog',
    audience: 'dev',
    stage: 'desenvolvimento',
    sourceSectionId: 'checklist-matdialog',
    sourcePartId: 'angular',
    items: [
      {
        id: 'checklist-matdialog-1',
        text: 'Tem título?',
      },
      {
        id: 'checklist-matdialog-2',
        text: 'Recebe foco?',
      },
      {
        id: 'checklist-matdialog-3',
        text: 'Retorna foco?',
      },
      {
        id: 'checklist-matdialog-4',
        text: 'Possui botão fechar?',
      },
    ],
  },
  {
    id: 'angular',
    title: 'Checklist Angular',
    audience: 'dev',
    stage: 'desenvolvimento',
    sourceSectionId: 'checklist-angular',
    sourcePartId: 'angular',
    items: [
      {
        id: 'checklist-angular-1',
        text: 'Existe HTML semântico?',
      },
      {
        id: 'checklist-angular-2',
        text: 'Existe nome acessível?',
      },
      {
        id: 'checklist-angular-3',
        text: 'Existe gerenciamento de foco?',
      },
      {
        id: 'checklist-angular-4',
        text: 'Existe anúncio para mudanças importantes?',
      },
      {
        id: 'checklist-angular-5',
        text: 'Router move foco corretamente?',
      },
      {
        id: 'checklist-angular-6',
        text: 'Material foi validado?',
      },
      {
        id: 'checklist-angular-7',
        text: 'Custom Components foram auditados?',
      },
      {
        id: 'checklist-angular-8',
        text: 'Funciona só com teclado?',
      },
      {
        id: 'checklist-angular-9',
        text: 'Funciona com TalkBack?',
      },
      {
        id: 'checklist-angular-10',
        text: 'Funciona com VoiceOver?',
      },
    ],
  },
  {
    id: 'final-de-talkback-e-voiceover',
    title: 'Checklist Final de TalkBack e VoiceOver',
    audience: 'qa',
    stage: 'qa',
    sourceSectionId: 'checklist-final-de-talkback-e-voiceover',
    sourcePartId: 'leitores-de-tela',
    items: [
      {
        id: 'checklist-final-de-talkback-e-voiceover-1',
        text: 'Todos os elementos possuem nome?',
      },
      {
        id: 'checklist-final-de-talkback-e-voiceover-2',
        text: 'Todos possuem role correta?',
      },
      {
        id: 'checklist-final-de-talkback-e-voiceover-3',
        text: 'Estado é anunciado?',
      },
      {
        id: 'checklist-final-de-talkback-e-voiceover-4',
        text: 'Fluxo funciona sem visão?',
      },
      {
        id: 'checklist-final-de-talkback-e-voiceover-5',
        text: 'Erros são anunciados?',
      },
      {
        id: 'checklist-final-de-talkback-e-voiceover-6',
        text: 'Mensagens dinâmicas são anunciadas?',
      },
      {
        id: 'checklist-final-de-talkback-e-voiceover-7',
        text: 'Foco nunca desaparece?',
      },
      {
        id: 'checklist-final-de-talkback-e-voiceover-8',
        text: 'A navegação faz sentido?',
      },
      {
        id: 'checklist-final-de-talkback-e-voiceover-9',
        text: 'Existe feedback para sucesso e erro?',
      },
    ],
  },
  {
    id: 'story',
    title: 'Checklist de Story',
    audience: 'po',
    stage: 'refinamento',
    sourceSectionId: 'checklist-de-story',
    sourcePartId: 'qa-wcag',
    items: [
      {
        id: 'checklist-de-story-1',
        text: 'Possui componentes interativos?',
      },
      {
        id: 'checklist-de-story-2',
        text: 'Existe leitor de tela impactado?',
      },
      {
        id: 'checklist-de-story-3',
        text: 'Existe navegação por teclado?',
      },
      {
        id: 'checklist-de-story-4',
        text: 'Existe foco?',
      },
      {
        id: 'checklist-de-story-5',
        text: 'Existe anúncio dinâmico?',
      },
      {
        id: 'checklist-de-story-6',
        text: 'Existe tratamento de erro?',
      },
    ],
  },
  {
    id: 'desenvolvimento',
    title: 'Checklist de Desenvolvimento',
    audience: 'dev',
    stage: 'desenvolvimento',
    sourceSectionId: 'checklist-de-desenvolvimento',
    sourcePartId: 'qa-wcag',
    items: [
      {
        id: 'checklist-de-desenvolvimento-1',
        text: 'Existe HTML semântico?',
      },
      {
        id: 'checklist-de-desenvolvimento-2',
        text: 'Existe label para todos os campos?',
      },
      {
        id: 'checklist-de-desenvolvimento-3',
        text: 'Existe nome acessível?',
      },
      {
        id: 'checklist-de-desenvolvimento-4',
        text: 'Existe role correta?',
      },
      {
        id: 'checklist-de-desenvolvimento-5',
        text: 'Existe gerenciamento de foco?',
      },
      {
        id: 'checklist-de-desenvolvimento-6',
        text: 'Existe suporte a teclado?',
      },
      {
        id: 'checklist-de-desenvolvimento-7',
        text: 'Existe feedback para erro?',
      },
      {
        id: 'checklist-de-desenvolvimento-8',
        text: 'Existe feedback para sucesso?',
      },
      {
        id: 'checklist-de-desenvolvimento-9',
        text: 'Existe validação TalkBack?',
      },
      {
        id: 'checklist-de-desenvolvimento-10',
        text: 'Existe validação VoiceOver?',
      },
    ],
  },
  {
    id: 'pull-request',
    title: 'Checklist de Pull Request',
    audience: 'dev',
    stage: 'pull-request',
    sourceSectionId: 'checklist-de-pull-request',
    sourcePartId: 'qa-wcag',
    items: [
      {
        id: 'checklist-de-pull-request-1',
        text: 'Novos componentes foram testados?',
      },
      {
        id: 'checklist-de-pull-request-2',
        text: 'O foco continua correto?',
      },
      {
        id: 'checklist-de-pull-request-3',
        text: 'Não houve regressão de leitor de tela?',
      },
      {
        id: 'checklist-de-pull-request-4',
        text: 'Os labels permanecem corretos?',
      },
      {
        id: 'checklist-de-pull-request-5',
        text: 'ARIA continua sincronizada?',
      },
      {
        id: 'checklist-de-pull-request-6',
        text: 'Teclado continua funcionando?',
      },
    ],
  },
  {
    id: 'qa',
    title: 'Checklist de QA',
    audience: 'qa',
    stage: 'qa',
    sourceSectionId: 'checklist-de-qa',
    sourcePartId: 'qa-wcag',
    items: [
      {
        id: 'checklist-de-qa-1',
        text: 'Todos os botões são anunciados?',
      },
      {
        id: 'checklist-de-qa-2',
        text: 'Todos os links são anunciados?',
      },
      {
        id: 'checklist-de-qa-3',
        text: 'Todos os campos possuem label?',
      },
      {
        id: 'checklist-de-qa-4',
        text: 'Todos os erros são anunciados?',
      },
      {
        id: 'checklist-de-qa-5',
        text: 'Todos os modais abrem corretamente?',
      },
      {
        id: 'checklist-de-qa-6',
        text: 'Todos os modais devolvem foco?',
      },
      {
        id: 'checklist-de-qa-7',
        text: 'Todos os accordions anunciam expandido/recolhido?',
      },
      {
        id: 'checklist-de-qa-8',
        text: 'Todas as tabs anunciam estado selecionado?',
      },
      {
        id: 'checklist-de-qa-9',
        text: 'Todos os steppers anunciam etapa atual?',
      },
      {
        id: 'checklist-de-qa-10',
        text: 'Existem regiões com foco perdido?',
      },
    ],
  },
  {
    id: 'talkback',
    title: 'Checklist para TalkBack',
    audience: 'qa',
    stage: 'qa',
    sourceSectionId: 'checklist-para-talkback',
    sourcePartId: 'qa-wcag',
    items: [
      {
        id: 'checklist-para-talkback-1',
        text: 'Navegar a tela inteira.',
      },
      {
        id: 'checklist-para-talkback-2',
        text: 'Validar headings.',
      },
      {
        id: 'checklist-para-talkback-3',
        text: 'Validar botões.',
      },
      {
        id: 'checklist-para-talkback-4',
        text: 'Validar formulários.',
      },
      {
        id: 'checklist-para-talkback-5',
        text: 'Validar modal.',
      },
      {
        id: 'checklist-para-talkback-6',
        text: 'Validar mensagens de erro.',
      },
      {
        id: 'checklist-para-talkback-7',
        text: 'Validar toast.',
      },
      {
        id: 'checklist-para-talkback-8',
        text: 'Validar loading.',
      },
      {
        id: 'checklist-para-talkback-9',
        text: 'Validar conclusão do fluxo.',
      },
    ],
  },
  {
    id: 'voiceover',
    title: 'Checklist para VoiceOver',
    audience: 'qa',
    stage: 'qa',
    sourceSectionId: 'checklist-para-voiceover',
    sourcePartId: 'qa-wcag',
    items: [
      {
        id: 'checklist-para-voiceover-1',
        text: 'Navegar tela completa.',
      },
      {
        id: 'checklist-para-voiceover-2',
        text: 'Validar todos os elementos focáveis.',
      },
      {
        id: 'checklist-para-voiceover-3',
        text: 'Validar formulários.',
      },
      {
        id: 'checklist-para-voiceover-4',
        text: 'Validar alertas.',
      },
      {
        id: 'checklist-para-voiceover-5',
        text: 'Validar menus.',
      },
      {
        id: 'checklist-para-voiceover-6',
        text: 'Validar overlays.',
      },
      {
        id: 'checklist-para-voiceover-7',
        text: 'Validar conclusão da jornada.',
      },
    ],
  },
  {
    id: 'definition-of-done-acessivel',
    title: 'Definition of Done Acessível',
    audience: 'todos',
    stage: 'fechamento',
    sourceSectionId: 'definition-of-done-acessivel',
    sourcePartId: 'qa-wcag',
    items: [
      {
        id: 'definition-of-done-acessivel-1',
        text: 'WCAG AA atendida.',
      },
      {
        id: 'definition-of-done-acessivel-2',
        text: 'Teclado funcionando.',
      },
      {
        id: 'definition-of-done-acessivel-3',
        text: 'TalkBack validado.',
      },
      {
        id: 'definition-of-done-acessivel-4',
        text: 'VoiceOver validado.',
      },
      {
        id: 'definition-of-done-acessivel-5',
        text: 'Nome acessível definido.',
      },
      {
        id: 'definition-of-done-acessivel-6',
        text: 'Role correta.',
      },
      {
        id: 'definition-of-done-acessivel-7',
        text: 'Estado correto.',
      },
      {
        id: 'definition-of-done-acessivel-8',
        text: 'Sem perda de foco.',
      },
      {
        id: 'definition-of-done-acessivel-9',
        text: 'Sem erros conhecidos.',
      },
    ],
  },
  {
    id: 'revisao-de-tela-nova',
    title: 'Checklist para Revisão de Tela Nova',
    audience: 'todos',
    stage: 'qa',
    sourceSectionId: 'checklist-para-revisao-de-tela-nova',
    sourcePartId: 'qa-wcag',
    items: [
      {
        id: 'checklist-para-revisao-de-tela-nova-1',
        text: 'Existe H1?',
      },
      {
        id: 'checklist-para-revisao-de-tela-nova-2',
        text: 'Existe estrutura semântica?',
      },
      {
        id: 'checklist-para-revisao-de-tela-nova-3',
        text: 'Existe ordem lógica?',
      },
      {
        id: 'checklist-para-revisao-de-tela-nova-4',
        text: 'Existe foco?',
      },
      {
        id: 'checklist-para-revisao-de-tela-nova-5',
        text: 'Existe suporte para leitor?',
      },
      {
        id: 'checklist-para-revisao-de-tela-nova-6',
        text: 'Existe tratamento de erro?',
      },
      {
        id: 'checklist-para-revisao-de-tela-nova-7',
        text: 'Existe feedback de sucesso?',
      },
      {
        id: 'checklist-para-revisao-de-tela-nova-8',
        text: 'Existe feedback de carregamento?',
      },
      {
        id: 'checklist-para-revisao-de-tela-nova-9',
        text: 'Existe navegação consistente?',
      },
    ],
  },
];
