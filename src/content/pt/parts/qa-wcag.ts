// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const qaWcag: Part = {
  "id": "qa-wcag",
  "order": 7,
  "numeral": "07",
  "title": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
  "summary": "Esta seção serve como guia operacional para desenvolvimento, QA, refinamentos, stories, PRs e releases. O objetivo não é decorar a WCAG, mas aplicá-la diariamente.",
  "sections": [
    {
      "id": "o-que-significa-uma-tela-acessivel",
      "partId": "qa-wcag",
      "order": 1,
      "title": "O que significa uma tela acessível?",
      "summary": "Uma tela acessível não é apenas uma tela sem erros de WCAG.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Uma tela acessível não é apenas uma tela sem erros de WCAG."
        },
        {
          "kind": "paragraph",
          "text": "Uma tela acessível permite que o usuário:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Compreenda o conteúdo.",
            "Navegue sozinho.",
            "Execute ações.",
            "Receba feedback.",
            "Conclua a jornada."
          ]
        }
      ]
    },
    {
      "id": "principais-criterios-wcag-para-angular",
      "partId": "qa-wcag",
      "order": 2,
      "title": "Principais Critérios WCAG para Angular",
      "summary": "Principais Critérios WCAG para Angular — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Critério",
            "Tema"
          ],
          "rows": [
            [
              "1.1.1",
              "Texto alternativo."
            ],
            [
              "1.3.1",
              "Info e relacionamentos."
            ],
            [
              "1.3.2",
              "Sequência significativa."
            ],
            [
              "1.4.3",
              "Contraste."
            ],
            [
              "1.4.10",
              "Reflow."
            ],
            [
              "2.1.1",
              "Teclado."
            ],
            [
              "2.1.2",
              "Sem armadilha de teclado."
            ],
            [
              "2.4.3",
              "Ordem de foco."
            ],
            [
              "2.4.6",
              "Títulos e labels."
            ],
            [
              "2.4.7",
              "Foco visível."
            ],
            [
              "3.3.1",
              "Identificação de erros."
            ],
            [
              "3.3.2",
              "Instruções e labels."
            ],
            [
              "4.1.2",
              "Name, Role e Value."
            ]
          ]
        }
      ]
    },
    {
      "id": "criterios-que-mais-geram-bugs",
      "partId": "qa-wcag",
      "order": 3,
      "title": "Critérios que Mais Geram Bugs",
      "summary": "Critérios que Mais Geram Bugs: 2.4.3 Ordem de foco.; 4.1.2 Name Role Value.; 3.3.1 Identificação de erros.",
      "blocks": [
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "2.4.3 Ordem de foco.",
            "4.1.2 Name Role Value.",
            "3.3.1 Identificação de erros.",
            "2.1.1 Navegação por teclado.",
            "1.3.1 Relacionamentos."
          ]
        }
      ]
    },
    {
      "id": "checklist-de-story",
      "partId": "qa-wcag",
      "order": 4,
      "title": "Checklist de Story",
      "summary": "Toda história deveria responder:",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Toda história deveria responder:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Possui componentes interativos?",
            "Existe leitor de tela impactado?",
            "Existe navegação por teclado?",
            "Existe foco?",
            "Existe anúncio dinâmico?",
            "Existe tratamento de erro?"
          ]
        }
      ]
    },
    {
      "id": "checklist-de-desenvolvimento",
      "partId": "qa-wcag",
      "order": 5,
      "title": "Checklist de Desenvolvimento",
      "summary": "Checklist de Desenvolvimento: Existe HTML semântico?; Existe label para todos os campos?; Existe nome acessível?",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Existe HTML semântico?",
            "Existe label para todos os campos?",
            "Existe nome acessível?",
            "Existe role correta?",
            "Existe gerenciamento de foco?",
            "Existe suporte a teclado?",
            "Existe feedback para erro?",
            "Existe feedback para sucesso?",
            "Existe validação TalkBack?",
            "Existe validação VoiceOver?"
          ]
        }
      ]
    },
    {
      "id": "checklist-de-pull-request",
      "partId": "qa-wcag",
      "order": 6,
      "title": "Checklist de Pull Request",
      "summary": "Checklist de Pull Request: Novos componentes foram testados?; O foco continua correto?; Não houve regressão de leitor de tela?",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Novos componentes foram testados?",
            "O foco continua correto?",
            "Não houve regressão de leitor de tela?",
            "Os labels permanecem corretos?",
            "ARIA continua sincronizada?",
            "Teclado continua funcionando?"
          ]
        }
      ]
    },
    {
      "id": "checklist-de-qa",
      "partId": "qa-wcag",
      "order": 7,
      "title": "Checklist de QA",
      "summary": "Checklist de QA: Todos os botões são anunciados?; Todos os links são anunciados?; Todos os campos possuem label?",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Todos os botões são anunciados?",
            "Todos os links são anunciados?",
            "Todos os campos possuem label?",
            "Todos os erros são anunciados?",
            "Todos os modais abrem corretamente?",
            "Todos os modais devolvem foco?",
            "Todos os accordions anunciam expandido/recolhido?",
            "Todas as tabs anunciam estado selecionado?",
            "Todos os steppers anunciam etapa atual?",
            "Existem regiões com foco perdido?"
          ]
        }
      ]
    },
    {
      "id": "checklist-para-talkback",
      "partId": "qa-wcag",
      "order": 8,
      "title": "Checklist para TalkBack",
      "summary": "Checklist para TalkBack: Navegar a tela inteira.; Validar headings.; Validar botões.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Navegar a tela inteira.",
            "Validar headings.",
            "Validar botões.",
            "Validar formulários.",
            "Validar modal.",
            "Validar mensagens de erro.",
            "Validar toast.",
            "Validar loading.",
            "Validar conclusão do fluxo."
          ]
        }
      ]
    },
    {
      "id": "checklist-para-voiceover",
      "partId": "qa-wcag",
      "order": 9,
      "title": "Checklist para VoiceOver",
      "summary": "Checklist para VoiceOver: Navegar tela completa.; Validar todos os elementos focáveis.; Validar formulários.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Navegar tela completa.",
            "Validar todos os elementos focáveis.",
            "Validar formulários.",
            "Validar alertas.",
            "Validar menus.",
            "Validar overlays.",
            "Validar conclusão da jornada."
          ]
        }
      ]
    },
    {
      "id": "quando-abrir-um-bug-de-acessibilidade",
      "partId": "qa-wcag",
      "order": 10,
      "title": "Quando Abrir um Bug de Acessibilidade?",
      "summary": "Quando Abrir um Bug de Acessibilidade?: Não conseguir concluir uma tarefa.; Não conseguir identificar um elemento.; Não conseguir navegar.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Sempre que o usuário:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Não conseguir concluir uma tarefa.",
            "Não conseguir identificar um elemento.",
            "Não conseguir navegar.",
            "Perder foco.",
            "Não receber feedback.",
            "Receber informação incorreta."
          ]
        }
      ]
    },
    {
      "id": "template-de-bug",
      "partId": "qa-wcag",
      "order": 11,
      "title": "Template de Bug",
      "summary": "Template de Bug — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "Título:\nBotão sem nome acessível\n\nProblema:\nTalkBack anuncia apenas \"botão\"\n\nComportamento esperado:\n\"Editar endereço, botão\"\n\nImpacto:\nUsuário não identifica a ação.\n\nWCAG:\n4.1.2 Name Role Value",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "classificacao-de-severidade",
      "partId": "qa-wcag",
      "order": 12,
      "title": "Classificação de Severidade",
      "summary": "Classificação de Severidade — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Nível",
            "Descrição"
          ],
          "rows": [
            [
              "Crítico",
              "Usuário não conclui a jornada."
            ],
            [
              "Alto",
              "Grande dificuldade de navegação."
            ],
            [
              "Médio",
              "Experiência degradada."
            ],
            [
              "Baixo",
              "Melhoria recomendada."
            ]
          ]
        }
      ]
    },
    {
      "id": "exemplos-de-bugs-criticos",
      "partId": "qa-wcag",
      "order": 13,
      "title": "Exemplos de Bugs Críticos",
      "summary": "Exemplos de Bugs Críticos: Botão principal sem nome.; Modal inacessível.; Erro não anunciado.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Botão principal sem nome.",
            "Modal inacessível.",
            "Erro não anunciado.",
            "Foco preso incorretamente.",
            "Campo sem label."
          ]
        }
      ]
    },
    {
      "id": "exemplos-de-bugs-medios",
      "partId": "qa-wcag",
      "order": 14,
      "title": "Exemplos de Bugs Médios",
      "summary": "Exemplos de Bugs Médios: Heading incorreto.; Texto alternativo ruim.; Tooltip sem descrição.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Heading incorreto.",
            "Texto alternativo ruim.",
            "Tooltip sem descrição.",
            "Leitura redundante."
          ]
        }
      ]
    },
    {
      "id": "definition-of-done-acessivel",
      "partId": "qa-wcag",
      "order": 15,
      "title": "Definition of Done Acessível",
      "summary": "Definition of Done Acessível: WCAG AA atendida.; Teclado funcionando.; TalkBack validado.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "WCAG AA atendida.",
            "Teclado funcionando.",
            "TalkBack validado.",
            "VoiceOver validado.",
            "Nome acessível definido.",
            "Role correta.",
            "Estado correto.",
            "Sem perda de foco.",
            "Sem erros conhecidos."
          ]
        }
      ]
    },
    {
      "id": "checklist-para-revisao-de-tela-nova",
      "partId": "qa-wcag",
      "order": 16,
      "title": "Checklist para Revisão de Tela Nova",
      "summary": "Checklist para Revisão de Tela Nova: Existe H1?; Existe estrutura semântica?; Existe ordem lógica?",
      "blocks": [
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "Existe H1?",
            "Existe estrutura semântica?",
            "Existe ordem lógica?",
            "Existe foco?",
            "Existe suporte para leitor?",
            "Existe tratamento de erro?",
            "Existe feedback de sucesso?",
            "Existe feedback de carregamento?",
            "Existe navegação consistente?"
          ]
        }
      ]
    },
    {
      "id": "ferramentas-recomendadas",
      "partId": "qa-wcag",
      "order": 17,
      "title": "Ferramentas Recomendadas",
      "summary": "Ferramentas Recomendadas: TalkBack.; VoiceOver.; Chrome Lighthouse.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "TalkBack.",
            "VoiceOver.",
            "Chrome Lighthouse.",
            "axe DevTools.",
            "Accessibility Insights.",
            "Angular CDK A11y."
          ]
        }
      ]
    },
    {
      "id": "o-que-ferramentas-nao-encontram",
      "partId": "qa-wcag",
      "order": 18,
      "title": "O que Ferramentas NÃO Encontram",
      "summary": "Ferramentas automatizadas não substituem testes reais.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Ferramentas automatizadas não substituem testes reais."
        },
        {
          "kind": "paragraph",
          "text": "Elas não identificam bem:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Fluxos quebrados.",
            "Foco ruim.",
            "Experiência ruim.",
            "Anúncios confusos.",
            "Navegação complexa."
          ]
        }
      ]
    },
    {
      "id": "mentalidade-final",
      "partId": "qa-wcag",
      "order": 19,
      "title": "Mentalidade Final",
      "summary": "Se a resposta for sim, normalmente a implementação está no caminho certo.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "A pergunta não deve ser:"
        },
        {
          "kind": "code",
          "code": "A tela passou na WCAG?",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Mas sim:"
        },
        {
          "kind": "code",
          "code": "Uma pessoa usando TalkBack ou VoiceOver\nconsegue concluir a jornada sozinha?",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Se a resposta for sim, normalmente a implementação está no caminho certo."
        }
      ]
    }
  ]
};
