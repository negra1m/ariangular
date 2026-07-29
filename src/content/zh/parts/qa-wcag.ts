// GERADO por scripts/build-locale.js zh — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.zh.json

import type { Part } from '../../types';

export const qaWcag: Part = {
  "id": "qa-wcag",
  "order": 7,
  "numeral": "07",
  "title": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
  "summary": "覆盖需求、开发、PR、QA 和发布的实操指南——附上最容易出缺陷的 WCAG 准则。",
  "sections": [
    {
      "id": "o-que-significa-uma-tela-acessivel",
      "partId": "qa-wcag",
      "order": 1,
      "title": "一个无障碍的页面到底意味着什么？",
      "summary": "不只是没有 WCAG 错误的页面。而是用户能理解、能独立导航、能操作、能收到反馈、能走完整个流程的页面。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "无障碍的页面不只是一个没有 WCAG 错误的页面。"
        },
        {
          "kind": "paragraph",
          "text": "无障碍的页面让用户能够："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "理解内容。",
            "独立完成导航。",
            "执行操作。",
            "收到反馈。",
            "走完整个流程。"
          ]
        }
      ]
    },
    {
      "id": "principais-criterios-wcag-para-angular",
      "partId": "qa-wcag",
      "order": 2,
      "title": "Angular 中最要紧的 WCAG 准则",
      "summary": "十三条准则，涵盖了 Angular 应用大部分会出错的地方，从替代文本到名称、角色和值。",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "准则",
            "主题"
          ],
          "rows": [
            [
              "1.1.1",
              "替代文本。"
            ],
            [
              "1.3.1",
              "信息与关系。"
            ],
            [
              "1.3.2",
              "有意义的顺序。"
            ],
            [
              "1.4.3",
              "对比度。"
            ],
            [
              "1.4.10",
              "回流。"
            ],
            [
              "2.1.1",
              "键盘可操作。"
            ],
            [
              "2.1.2",
              "无键盘陷阱。"
            ],
            [
              "2.4.3",
              "焦点顺序。"
            ],
            [
              "2.4.6",
              "标题与标签。"
            ],
            [
              "2.4.7",
              "焦点可见。"
            ],
            [
              "3.3.1",
              "错误识别。"
            ],
            [
              "3.3.2",
              "标签或说明。"
            ],
            [
              "4.1.2",
              "名称、角色和值。"
            ]
          ]
        }
      ]
    },
    {
      "id": "criterios-que-mais-geram-bugs",
      "partId": "qa-wcag",
      "order": 3,
      "title": "最容易产生缺陷的准则",
      "summary": "焦点顺序、名称-角色-值、错误识别、键盘导航和关系——按这个顺序。",
      "blocks": [
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "2.4.3 焦点顺序。",
            "4.1.2 名称、角色、值。",
            "3.3.1 错误识别。",
            "2.1.1 键盘导航。",
            "1.3.1 关系。"
          ]
        }
      ]
    },
    {
      "id": "checklist-de-story",
      "partId": "qa-wcag",
      "order": 4,
      "title": "用户故事检查清单",
      "summary": "每个需求在评审阶段就该回答的六个问题，早于写下第一行代码。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "每个需求都应该回答："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "涉及交互组件吗？",
            "会影响屏幕阅读器吗？",
            "涉及键盘导航吗？",
            "涉及焦点处理吗？",
            "涉及动态播报吗？",
            "涉及错误处理吗？"
          ]
        }
      ]
    },
    {
      "id": "checklist-de-desenvolvimento",
      "partId": "qa-wcag",
      "order": 5,
      "title": "开发检查清单",
      "summary": "开发过程中要过的十个问题——语义、标签、名称、角色、焦点、键盘、反馈，以及两款屏幕阅读器。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "HTML 是语义化的吗？",
            "每个字段都有标签吗？",
            "有无障碍名称吗？",
            "角色正确吗？",
            "焦点被管理了吗？",
            "支持键盘操作吗？",
            "错误有反馈吗？",
            "成功有反馈吗？",
            "用 TalkBack 检查过了吗？",
            "用 VoiceOver 检查过了吗？"
          ]
        }
      ]
    },
    {
      "id": "checklist-de-pull-request",
      "partId": "qa-wcag",
      "order": 6,
      "title": "Pull Request 检查清单",
      "summary": "提 PR 之前的六个问题，重点在于抓回归，而不是抓新工作。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "新组件测试过了吗？",
            "焦点仍然正确吗？",
            "屏幕阅读器没有出现回归吗？",
            "标签仍然正确吗？",
            "ARIA 仍然是同步的吗？",
            "键盘仍然可用吗？"
          ]
        }
      ]
    },
    {
      "id": "checklist-de-qa",
      "partId": "qa-wcag",
      "order": 7,
      "title": "QA 检查清单",
      "summary": "对一个做完的页面做十项检查：按钮、链接、标签、错误、模态框、折叠面板、选项卡、步骤条和焦点丢失。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "每个按钮都会被播报吗？",
            "每个链接都会被播报吗？",
            "每个字段都有标签吗？",
            "每个错误都会被播报吗？",
            "每个模态框都能正确打开吗？",
            "每个模态框都会归还焦点吗？",
            "每个折叠面板都会播报展开和收起吗？",
            "每个选项卡都会播报选中状态吗？",
            "每个步骤条都会播报当前步骤吗？",
            "有没有哪里会丢失焦点？"
          ]
        }
      ]
    },
    {
      "id": "checklist-para-talkback",
      "partId": "qa-wcag",
      "order": 8,
      "title": "TalkBack 检查清单",
      "summary": "在 Android 真机上跑的九轮检查，最后一轮是流程到底能不能走完。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "把整个页面走一遍。",
            "检查标题层级。",
            "检查按钮。",
            "检查表单。",
            "检查模态框。",
            "检查错误提示。",
            "检查轻提示。",
            "检查加载状态。",
            "确认流程能够走完。"
          ]
        }
      ]
    },
    {
      "id": "checklist-para-voiceover",
      "partId": "qa-wcag",
      "order": 9,
      "title": "VoiceOver 检查清单",
      "summary": "在 iOS 真机上跑的七轮检查，包含警告、菜单和浮层——VoiceOver 在这些地方与 TalkBack 不同。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "把整个页面走一遍。",
            "检查每个可获得焦点的元素。",
            "检查表单。",
            "检查警告提示。",
            "检查菜单。",
            "检查浮层。",
            "确认整个流程能够走完。"
          ]
        }
      ]
    },
    {
      "id": "quando-abrir-um-bug-de-acessibilidade",
      "partId": "qa-wcag",
      "order": 10,
      "title": "什么时候该提无障碍缺陷",
      "summary": "只要用户无法完成任务、无法识别元素、无法导航、丢失焦点、收不到反馈，或者被告知了错误的信息。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "只要用户出现以下情况："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "无法完成任务。",
            "无法识别某个元素。",
            "无法导航。",
            "丢失焦点。",
            "收不到任何反馈。",
            "收到了错误的信息。"
          ]
        }
      ]
    },
    {
      "id": "template-de-bug",
      "partId": "qa-wcag",
      "order": 11,
      "title": "缺陷模板",
      "summary": "标题、问题、预期行为、影响和 WCAG 准则——足够让任何人复现并排定优先级。",
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
      "title": "严重级别",
      "summary": "“严重”的定义是流程走不完。其余一切都以此为尺度衡量。",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "级别",
            "说明"
          ],
          "rows": [
            [
              "严重",
              "用户无法走完流程。"
            ],
            [
              "高",
              "导航存在明显困难。"
            ],
            [
              "中",
              "体验有所下降。"
            ],
            [
              "低",
              "建议性改进。"
            ]
          ]
        }
      ]
    },
    {
      "id": "exemplos-de-bugs-criticos",
      "partId": "qa-wcag",
      "order": 13,
      "title": "严重缺陷示例",
      "summary": "主按钮没有名称、模态框无法到达、错误不被播报、焦点被锁在错误的位置、字段没有标签。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "主按钮没有名称。",
            "模态框无法访问。",
            "错误从未被播报。",
            "焦点被锁在错误的位置。",
            "字段没有标签。"
          ]
        }
      ]
    },
    {
      "id": "exemplos-de-bugs-medios",
      "partId": "qa-wcag",
      "order": 14,
      "title": "中等缺陷示例",
      "summary": "标题层级错误、替代文本敷衍、工具提示没有描述、播报内容重复。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "标题层级不正确。",
            "替代文本质量差。",
            "工具提示没有描述。",
            "播报内容重复。"
          ]
        }
      ]
    },
    {
      "id": "definition-of-done-acessivel",
      "partId": "qa-wcag",
      "order": 15,
      "title": "无障碍完成标准",
      "summary": "在认定任何东西做完之前的九个条件，其中包括在两款真实屏幕阅读器上验证。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "满足 WCAG AA。",
            "键盘可用。",
            "已用 TalkBack 验证。",
            "已用 VoiceOver 验证。",
            "已定义无障碍名称。",
            "角色正确。",
            "状态正确。",
            "没有焦点丢失。",
            "没有已知缺陷。"
          ]
        }
      ]
    },
    {
      "id": "checklist-para-revisao-de-tela-nova",
      "partId": "qa-wcag",
      "order": 16,
      "title": "新页面评审检查清单",
      "summary": "面对一个第一次看到的页面时要问的九个问题，从 h1 一直问到加载反馈。",
      "blocks": [
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "有 h1 吗？",
            "结构是语义化的吗？",
            "顺序合乎逻辑吗？",
            "焦点被处理了吗？",
            "支持屏幕阅读器吗？",
            "有错误处理吗？",
            "有成功反馈吗？",
            "有加载反馈吗？",
            "导航一致吗？"
          ]
        }
      ]
    },
    {
      "id": "european-accessibility-act",
      "partId": "qa-wcag",
      "order": 17,
      "title": "欧洲无障碍法案",
      "summary": "自 2025 年 6 月 28 日起在全欧盟强制执行。无障碍不再是加分项，而成了准入条件。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "自 2025 年 6 月 28 日起，《欧洲无障碍法案》已在欧盟所有国家强制执行。"
        },
        {
          "kind": "paragraph",
          "text": "它已不再只是面向欧洲销售的企业才需要关心的事。服务欧洲客户的企业，或处在欧洲企业供应链中的企业，都在适用范围内。"
        },
        {
          "kind": "table",
          "headers": [
            "类别",
            "示例"
          ],
          "rows": [
            [
              "电子商务",
              "商城、结算、用户中心。"
            ],
            [
              "银行服务",
              "网上银行、App、身份认证。"
            ],
            [
              "交通出行",
              "票务销售、出行信息。"
            ],
            [
              "通信",
              "电话、即时消息、紧急呼叫。"
            ],
            [
              "图书与媒体",
              "电子阅读器、流媒体。"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "技术标准"
        },
        {
          "kind": "paragraph",
          "text": "符合性依据 EN 301 549 评估，该标准纳入了 WCAG。4.1.1 版预计于 2026 年发布。"
        },
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "在实践中，达到 WCAG 2.2 AA 级别就覆盖了该标准对网页内容的大部分要求。这也正是本指南自始至终瞄准的目标。"
            }
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "日常工作会有什么变化"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "无障碍不再是加分项，而成了准入条件。",
            "需要符合性文档，而不只是一个能跑的站点。",
            "可能在合同和招标中被明确要求。",
            "既适用于新产品，也适用于既有产品的更新。"
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "该做什么"
        },
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "确认产品是否服务欧盟境内的客户。",
            "按 WCAG 2.2 AA 做一次审查。",
            "记录结果，包括尚未达标的部分。",
            "把无障碍写进完成标准。",
            "让真正使用辅助技术的人来测试。"
          ]
        }
      ]
    },
    {
      "id": "acessibilidade-cognitiva",
      "partId": "qa-wcag",
      "order": 18,
      "title": "认知无障碍",
      "summary": "它影响的人比视觉或运动障碍更多，得到的关注却少得多。一个让疲惫的人也能用的界面，对所有人都更好用。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "大部分无障碍投入都花在视觉和运动障碍上。认知障碍影响的人更多，得到的关注却更少。"
        },
        {
          "kind": "paragraph",
          "text": "它涵盖阅读障碍、注意力缺陷、自闭症、焦虑和年龄相关的认知衰退——也包括临时状态：疲惫、赶时间、压力大、在马路上边走边用手机。"
        },
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "一个让疲惫的人也能用的界面，对所有人都更好用。这是“无障碍不是边缘情况”最清楚的例证。"
            }
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "什么有帮助"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "语言直白、句子简短、不用不必要的行话。",
            "一个页面只做一件主要的事。",
            "长流程中提供可见的步骤指示。",
            "错误提示告诉用户该怎么做，而不只是哪里错了。",
            "破坏性操作要有确认和撤销。",
            "不设时间限制，或者允许延长。",
            "各页面之间保持一致的模式。",
            "不要求用户在步骤之间靠记忆。"
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "什么会造成阻碍"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "自动播放的动效、会自己轮播的组件。",
            "又长又没有分段、也不能中途保存的表单。",
            "笼统的错误提示。",
            "毫无预警就过期的会话。",
            "一次性给出太多信息。",
            "没有文字标签的图标。"
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "相关的 WCAG 准则"
        },
        {
          "kind": "table",
          "headers": [
            "准则",
            "主题"
          ],
          "rows": [
            [
              "2.2.1",
              "时间可调整。"
            ],
            [
              "2.2.2",
              "暂停、停止、隐藏动效。"
            ],
            [
              "3.2.3",
              "一致的导航。"
            ],
            [
              "3.2.4",
              "一致的标识。"
            ],
            [
              "3.3.3",
              "错误纠正建议。"
            ],
            [
              "3.3.4",
              "重要操作的错误预防。"
            ],
            [
              "3.3.7",
              "冗余输入。"
            ],
            [
              "3.3.8",
              "无障碍身份验证。"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "在 Angular 中"
        },
        {
          "kind": "code",
          "code": "<div aria-live=\"polite\">\n\n{{ mensagemDeErro }}\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "把错误播报出来只是一半。另一半是这条消息要说清楚该怎么办。"
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
      "title": "推荐工具",
      "summary": "TalkBack、VoiceOver、Lighthouse、axe DevTools、Accessibility Insights 和 Angular CDK A11y 包。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "TalkBack。",
            "VoiceOver。",
            "Chrome Lighthouse。",
            "axe DevTools。",
            "Accessibility Insights。",
            "Angular CDK A11y。"
          ]
        }
      ]
    },
    {
      "id": "o-que-ferramentas-nao-encontram",
      "partId": "qa-wcag",
      "order": 20,
      "title": "工具找不出来的东西",
      "summary": "自动化工具替代不了真实测试。它们在断裂的流程、糟糕的焦点、混乱的播报和复杂导航上表现很差。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "自动化工具替代不了真实测试。"
        },
        {
          "kind": "paragraph",
          "text": "它们不擅长识别："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "断裂的流程。",
            "糟糕的焦点行为。",
            "糟糕的体验。",
            "令人困惑的播报。",
            "复杂的导航。"
          ]
        }
      ]
    },
    {
      "id": "mentalidade-final",
      "partId": "qa-wcag",
      "order": 21,
      "title": "真正重要的思维方式",
      "summary": "问题不是这个页面有没有通过 WCAG，而是一个用 TalkBack 或 VoiceOver 的人能不能独立走完整个流程。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "该问的问题不该是："
        },
        {
          "kind": "code",
          "code": "A tela passou na WCAG?",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "而应该是："
        },
        {
          "kind": "code",
          "code": "Uma pessoa usando TalkBack ou VoiceOver\nconsegue concluir a jornada sozinha?",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "如果答案是肯定的，实现通常就走在正确的方向上。"
        }
      ]
    }
  ]
};
