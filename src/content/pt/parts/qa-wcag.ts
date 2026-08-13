// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const qaWcag: Part = {
  "id": "qa-wcag",
  "order": 7,
  "numeral": "07",
  "title": "QA, Auditoria e WCAG 2.2 Aplicada ao Time Angular",
  "summary": "Guia operacional para story, desenvolvimento, PR, QA e release — com os critérios WCAG que mais geram bug.",
  "sections": [
    {
      "id": "o-que-significa-uma-tela-acessivel",
      "partId": "qa-wcag",
      "order": 1,
      "title": "O que significa uma tela acessível?",
      "summary": "Não é só uma tela sem erro de WCAG. É uma tela onde a pessoa entende, navega sozinha, age, recebe retorno e conclui a jornada.",
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
      "summary": "Treze critérios que cobrem a maior parte do que uma aplicação Angular erra, de texto alternativo a name, role e value.",
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
      "summary": "Ordem de foco, name-role-value, identificação de erro, navegação por teclado e relacionamentos — nessa ordem.",
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
      "summary": "Seis perguntas que toda história deveria responder no refinamento, antes de escrever a primeira linha.",
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
      "summary": "Dez perguntas para rodar durante a implementação — semântica, label, nome, role, foco, teclado, retorno e os dois leitores.",
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
      "summary": "Seis perguntas antes de abrir o PR, focadas em pegar regressão, não trabalho novo.",
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
      "summary": "Dez verificações sobre uma tela pronta: botões, links, labels, erros, modais, accordions, tabs, steppers e foco perdido.",
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
      "summary": "Nove passagens para rodar num Android, terminando em se o fluxo pode de fato ser concluído.",
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
      "summary": "Sete passagens num iOS, incluindo alertas, menus e overlays, onde o VoiceOver difere do TalkBack.",
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
      "summary": "Sempre que a pessoa não conclui a tarefa, não identifica um elemento, não navega, perde o foco, não recebe retorno ou recebe informação falsa.",
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
      "summary": "Título, problema, comportamento esperado, impacto e critério WCAG — o suficiente para qualquer um reproduzir e priorizar.",
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
      "summary": "Crítico é a jornada não poder ser concluída. Todo o resto é medido contra isso.",
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
      "summary": "Botão principal sem nome, modal inacessível, erro não anunciado, foco preso no lugar errado, campo sem label.",
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Por que estes são críticos e não altos"
        },
        {
          "kind": "paragraph",
          "text": "O corte é um só: a pessoa não conclui a jornada. Não é \"fica ruim\", é \"não dá para terminar\". Cada exemplo abaixo trava um fluxo inteiro."
        },
        {
          "kind": "code",
          "code": "<!-- Botão principal sem nome.\n     Anunciado: \"botão\". A pessoa não confirma o pagamento\n     porque não sabe que aquilo confirma o pagamento. -->\n<button (click)=\"confirmar()\">\n  <mat-icon>check</mat-icon>\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- Modal inacessível.\n     Abre, o foco não entra, o leitor continua na página de trás.\n     A pessoa não sabe que existe algo para confirmar. -->\n<div class=\"modal\" *ngIf=\"aberto\">\n  <button (click)=\"excluirConta()\">Confirmar exclusão</button>\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- Erro não anunciado.\n     O envio falha em silêncio. A pessoa espera uma confirmação\n     que nunca vem, tenta de novo, e desiste. -->\n<span *ngIf=\"erro\" class=\"erro\">{{ erro }}</span>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- Foco preso incorretamente.\n     cdkTrapFocus sem forma de sair: nem ESC, nem botão fechar.\n     A pessoa fica presa até recarregar a página. -->\n<div cdkTrapFocus>\n  <p>Carregando…</p>\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- Campo sem label.\n     \"campo de edição\". Num cadastro de 8 campos iguais,\n     não há como saber qual é qual. -->\n<input type=\"text\" placeholder=\"CPF\">",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O teste de severidade"
        },
        {
          "kind": "paragraph",
          "text": "Pergunte: desligando o monitor, uma pessoa consegue concluir esta tarefa?"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Não consegue de jeito nenhum: crítico.",
            "Consegue com muita dificuldade ou tentativa e erro: alto.",
            "Consegue, mas a experiência é pior: médio.",
            "Consegue normalmente, há algo a melhorar: baixo."
          ]
        }
      ]
    },
    {
      "id": "exemplos-de-bugs-medios",
      "partId": "qa-wcag",
      "order": 14,
      "title": "Exemplos de Bugs Médios",
      "summary": "Nível de heading errado, texto alternativo fraco, tooltip sem descrição, leitura redundante.",
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Médio é o que atrapalha sem impedir"
        },
        {
          "kind": "code",
          "code": "<!-- ❌ salto de nível: sugere uma seção que não existe -->\n<h1>Extrato</h1>\n<h4>Últimos lançamentos</h4>\n\n<!-- ✅ -->\n<h1>Extrato</h1>\n<h2>Últimos lançamentos</h2>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- ❌ alt que descreve o arquivo, não a informação -->\n<img src=\"grafico.png\" alt=\"grafico\">\n\n<!-- ✅ o alt carrega o que a imagem informa -->\n<img src=\"grafico.png\"\n  alt=\"Gastos caíram de R$ 3.200 em janeiro para R$ 2.100 em junho\">\n\n<!-- ✅ imagem decorativa: alt vazio, nunca ausente -->\n<img src=\"ornamento.svg\" alt=\"\">",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- ❌ leitura redundante: o nome repete a role -->\n<button aria-label=\"Botão de salvar\">Salvar</button>\n<!-- ouve-se: \"Botão de salvar, botão\" -->\n\n<!-- ✅ -->\n<button>Salvar</button>\n<!-- ouve-se: \"Salvar, botão\" -->",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- ❌ ícone e texto dizendo a mesma coisa duas vezes -->\n<button>\n  <mat-icon>save</mat-icon>\n  Salvar\n</button>\n<!-- ouve-se: \"save Salvar, botão\" -->\n\n<!-- ✅ -->\n<button>\n  <mat-icon aria-hidden=\"true\">save</mat-icon>\n  Salvar\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Por que médio e não baixo"
        },
        {
          "kind": "paragraph",
          "text": "Nenhum desses impede a conclusão da tarefa. Todos aumentam o esforço: heading errado quebra a navegação por títulos, alt ruim esconde a informação do gráfico, redundância dobra o tempo de escuta de cada tela."
        },
        {
          "kind": "paragraph",
          "text": "Em volume, é o que faz a pessoa preferir o telefone ao aplicativo."
        }
      ]
    },
    {
      "id": "definition-of-done-acessivel",
      "partId": "qa-wcag",
      "order": 15,
      "title": "Definition of Done Acessível",
      "summary": "Nove condições antes de considerar qualquer coisa pronta, incluindo validação nos dois leitores de tela reais.",
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
      "summary": "Nove perguntas para uma tela que você vê pela primeira vez, do h1 até o retorno de carregamento.",
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
      "id": "european-accessibility-act",
      "partId": "qa-wcag",
      "order": 17,
      "title": "European Accessibility Act",
      "summary": "Exigível em toda a União Europeia desde 28 de junho de 2025. Acessibilidade deixou de ser melhoria e virou requisito de entrada.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Desde 28 de junho de 2025 o European Accessibility Act é exigível em todos os países da União Europeia."
        },
        {
          "kind": "paragraph",
          "text": "Ele deixou de ser assunto só de quem vende para a Europa. Empresas brasileiras que atendem clientes europeus, ou que fazem parte da cadeia de fornecimento de uma empresa europeia, entram no escopo."
        },
        {
          "kind": "table",
          "headers": [
            "Categoria",
            "Exemplos"
          ],
          "rows": [
            [
              "Comércio eletrônico",
              "Loja, checkout, área do cliente."
            ],
            [
              "Serviços bancários",
              "Internet banking, aplicativo, autenticação."
            ],
            [
              "Transporte",
              "Venda de passagem, informação de viagem."
            ],
            [
              "Comunicação",
              "Telefonia, mensagens, chamada de emergência."
            ],
            [
              "Livros e mídia",
              "Leitores digitais, streaming."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "A norma técnica"
        },
        {
          "kind": "paragraph",
          "text": "A conformidade é avaliada pela EN 301 549, que incorpora a WCAG. A versão 4.1.1 está prevista para 2026."
        },
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "Na prática, atender WCAG 2.2 nível AA cobre a maior parte do que a norma exige para conteúdo web. É o mesmo alvo que este guia inteiro persegue."
            }
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O que muda no dia a dia"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Acessibilidade deixa de ser melhoria e passa a ser requisito de entrada.",
            "Exige documentação de conformidade, não só o site funcionando.",
            "Pode ser cobrada em contrato e em processo de compra.",
            "Aplica-se a produto novo e a atualização de produto existente."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O que fazer"
        },
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "Levantar se o produto atende clientes na União Europeia.",
            "Auditar contra WCAG 2.2 AA.",
            "Registrar os resultados, inclusive o que ainda não está conforme.",
            "Colocar acessibilidade no Definition of Done.",
            "Testar com pessoas usando tecnologia assistiva de verdade."
          ]
        }
      ]
    },
    {
      "id": "acessibilidade-cognitiva",
      "partId": "qa-wcag",
      "order": 18,
      "title": "Acessibilidade cognitiva",
      "summary": "Afeta mais gente que deficiência visual ou motora e recebe uma fração da atenção. Interface que funciona para quem está exausto funciona melhor para todos.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Boa parte do esforço de acessibilidade vai para deficiência visual e motora. Deficiência cognitiva afeta mais pessoas e recebe menos atenção."
        },
        {
          "kind": "paragraph",
          "text": "Entram aqui dislexia, TDAH, autismo, ansiedade, declínio cognitivo por idade — e também estados temporários: cansaço, pressa, estresse, uso do celular no meio da rua."
        },
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "Interface que funciona para quem está exausto funciona melhor para todo mundo. Este é o caso mais claro de que acessibilidade não é caso de exceção."
            }
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O que ajuda"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Linguagem direta, frase curta, sem jargão desnecessário.",
            "Uma tarefa principal por tela.",
            "Passo a passo visível em fluxo longo.",
            "Erro que diz o que fazer, não só o que está errado.",
            "Ação destrutiva com confirmação e com desfazer.",
            "Sem limite de tempo, ou com opção de estender.",
            "Padrão consistente entre telas.",
            "Não depender de memória entre etapas."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O que atrapalha"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Movimento automático, carrossel que gira sozinho.",
            "Formulário longo sem divisão nem salvamento parcial.",
            "Mensagem de erro genérica.",
            "Sessão que expira sem aviso.",
            "Excesso de informação simultânea.",
            "Ícone sem rótulo textual."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Critérios WCAG relacionados"
        },
        {
          "kind": "table",
          "headers": [
            "Critério",
            "Tema"
          ],
          "rows": [
            [
              "2.2.1",
              "Tempo ajustável."
            ],
            [
              "2.2.2",
              "Pausar, parar, ocultar movimento."
            ],
            [
              "3.2.3",
              "Navegação consistente."
            ],
            [
              "3.2.4",
              "Identificação consistente."
            ],
            [
              "3.3.3",
              "Sugestão de correção de erro."
            ],
            [
              "3.3.4",
              "Prevenção de erro em ação importante."
            ],
            [
              "3.3.7",
              "Entrada redundante."
            ],
            [
              "3.3.8",
              "Autenticação acessível."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Em Angular"
        },
        {
          "kind": "code",
          "code": "<div aria-live=\"polite\">\n\n{{ mensagemDeErro }}\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Anunciar o erro é metade. A outra metade é a mensagem dizer o que fazer."
        },
        {
          "kind": "code",
          "code": "Erro ao salvar.",
          "variant": "wrong"
        },
        {
          "kind": "code",
          "code": "Não foi possível salvar porque o CPF tem 10 dígitos.\nO CPF precisa ter 11. Confira e tente de novo.",
          "variant": "correct"
        }
      ]
    },
    {
      "id": "ferramentas-recomendadas",
      "partId": "qa-wcag",
      "order": 19,
      "title": "Ferramentas Recomendadas",
      "summary": "TalkBack, VoiceOver, Lighthouse, axe DevTools, Accessibility Insights e o pacote Angular CDK A11y.",
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O que cada uma pega, e o que não pega"
        },
        {
          "kind": "table",
          "headers": [
            "Ferramenta",
            "Boa para",
            "Custo"
          ],
          "rows": [
            [
              "axe DevTools",
              "Violação de regra no DOM. É a engine dentro do Lighthouse.",
              "Extensão gratuita."
            ],
            [
              "Lighthouse",
              "Nota rápida e regressão. Roda no próprio Chrome.",
              "Já vem no navegador."
            ],
            [
              "Accessibility Insights",
              "Roteiro guiado de teste manual, passo a passo.",
              "Gratuito, Microsoft."
            ],
            [
              "TalkBack e VoiceOver",
              "A única resposta que importa: dá para concluir?",
              "Já está no celular."
            ],
            [
              "angular-eslint",
              "Pegar no commit, antes de virar bug.",
              "Já está no projeto."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Colocar no CI, não só no navegador"
        },
        {
          "kind": "paragraph",
          "text": "Verificação que depende de alguém lembrar de rodar não é verificação. O axe roda sobre HTML gerado, sem navegador:"
        },
        {
          "kind": "code",
          "code": "npm install --save-dev axe-core jsdom",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "// scripts/check-a11y.js\nconst { JSDOM } = require('jsdom');\nconst fs = require('fs');\n\nconst axeSource = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');\n\nasync function verificar(arquivo) {\n  const dom = new JSDOM(fs.readFileSync(arquivo, 'utf8'), {\n    runScripts: 'outside-only',\n    pretendToBeVisual: true,\n  });\n\n  dom.window.eval(axeSource);\n\n  const r = await dom.window.axe.run(dom.window.document, {\n    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'] },\n    // Contraste precisa de CSS computado, que o jsdom não faz.\n    rules: { 'color-contrast': { enabled: false } },\n  });\n\n  return r.violations;\n}",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Ligue no pipeline com saída diferente de zero em caso de violação. Aviso que não quebra o build é aviso que ninguém lê."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "A ordem que funciona"
        },
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "Lint no editor: pega enquanto você escreve.",
            "axe no CI: pega antes do merge.",
            "Lighthouse antes de subir: pega regressão geral.",
            "TalkBack e VoiceOver na entrega: pega o que importa."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Os três primeiros somam cerca de um terço dos problemas. O quarto é o que responde se alguém consegue usar."
        }
      ]
    },
    {
      "id": "o-que-ferramentas-nao-encontram",
      "partId": "qa-wcag",
      "order": 20,
      "title": "O que Ferramentas NÃO Encontram",
      "summary": "Ferramenta automatizada não substitui teste real. Ela é ruim em fluxo quebrado, foco ruim, anúncio confuso e navegação complexa.",
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
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Código que passa no axe e é inutilizável"
        },
        {
          "kind": "paragraph",
          "text": "Os três exemplos abaixo têm zero violação em qualquer ferramenta automatizada. Os três são inacessíveis."
        },
        {
          "kind": "code",
          "code": "<!-- 1. Role sem comportamento.\n     Tem role, tem tabindex, tem nome. O axe aprova.\n     Enter e Espaço não fazem nada: role não traz comportamento. -->\n<div role=\"button\" tabindex=\"0\" (click)=\"salvar()\">Salvar</div>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- 2. Nome acessível mentiroso.\n     Existe nome, então a ferramenta passa.\n     O leitor de tela anuncia \"Editar\" num botão que exclui. -->\n<button aria-label=\"Editar\" (click)=\"excluir()\">\n  <mat-icon aria-hidden=\"true\">delete</mat-icon>\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<!-- 3. Ordem de leitura invertida.\n     O HTML está impecável. O CSS troca a ordem, e o Tab\n     entrega Confirmar antes de Cancelar. -->\n<div style=\"display:flex; flex-direction:row-reverse\">\n  <button>Confirmar</button>\n  <button>Cancelar</button>\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Por que a ferramenta não vê"
        },
        {
          "kind": "paragraph",
          "text": "Ela verifica o que é verificável sem entender a intenção: o atributo existe, o valor é válido, a relação está declarada. Nenhuma delas consegue responder \"esse nome descreve o que o botão faz?\" ou \"essa ordem faz sentido para quem está preenchendo o formulário?\"."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "A conta real"
        },
        {
          "kind": "paragraph",
          "text": "Ferramenta automatizada pega em torno de um terço dos problemas de acessibilidade. É um terço importante, barato e que roda em todo commit — mas é piso, não teto."
        },
        {
          "kind": "paragraph",
          "text": "Os outros dois terços exigem alguém percorrendo a jornada com teclado e com leitor de tela, perguntando se dá para concluir a tarefa. Não existe atalho para isso."
        }
      ]
    },
    {
      "id": "mentalidade-final",
      "partId": "qa-wcag",
      "order": 21,
      "title": "Mentalidade Final",
      "summary": "A pergunta não é se a tela passou na WCAG. É se uma pessoa usando TalkBack ou VoiceOver consegue concluir a jornada sozinha.",
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
