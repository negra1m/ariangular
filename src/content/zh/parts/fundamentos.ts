// GERADO por scripts/build-locale.js zh — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.zh.json

import type { Part } from '../../types';

export const fundamentos: Part = {
  "id": "fundamentos",
  "order": 1,
  "numeral": "01",
  "title": "Angular 无障碍基础",
  "summary": "基础知识：什么是无障碍、WCAG 2.2、POUR 四原则、屏幕阅读器如何朗读页面，以及 Angular 中最常见的错误。",
  "sections": [
    {
      "id": "o-que-e-acessibilidade",
      "partId": "fundamentos",
      "order": 1,
      "title": "什么是无障碍？",
      "summary": "无障碍是指数字产品能被任何人使用，无论其存在视觉、听觉、运动、认知还是暂时性的限制。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "无障碍是数字产品能被每一个人使用的能力，无论其存在视觉、听觉、运动、认知还是暂时性的限制。"
        },
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "用户示例："
            },
            {
              "kind": "list",
              "ordered": false,
              "items": [
                "使用 TalkBack 的视障人士。",
                "使用 VoiceOver 的视障人士。",
                "使用缩放功能的低视力人士。",
                "使用键盘的行动不便人士。",
                "有认知障碍的人士。",
                "手臂受伤、只能单手操作的人。"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "wcag-2-2",
      "partId": "fundamentos",
      "order": 2,
      "title": "WCAG 2.2",
      "summary": "WCAG 是全球评估数字无障碍最通用的标准。AA 是大多数企业追求的级别。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "WCAG（Web Content Accessibility Guidelines，网页内容无障碍指南）是全球评估数字无障碍最通用的一套准则。"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "符合级别"
        },
        {
          "kind": "table",
          "headers": [
            "级别",
            "说明"
          ],
          "rows": [
            [
              "A",
              "最低要求。"
            ],
            [
              "AA",
              "大多数企业采用的级别。"
            ],
            [
              "AAA",
              "最严格的级别。"
            ]
          ]
        }
      ]
    },
    {
      "id": "pour",
      "partId": "fundamentos",
      "order": 3,
      "title": "POUR 四原则",
      "summary": "每一条 WCAG 准则都源自四大支柱：可感知、可操作、可理解、健壮性。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "每一条 WCAG 准则都源自四大支柱："
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "P — 可感知"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "用户必须能够感知内容。",
            "图片需要替代文本。",
            "信息不能只靠颜色传达。"
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O — 可操作"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "界面必须是可操作的。",
            "能用键盘操作。",
            "能配合屏幕阅读器使用。"
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "U — 可理解"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "流程保持一致。",
            "信息表达清晰。",
            "错误容易理解。"
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "R — 健壮性"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "能与辅助技术协同工作。",
            "语义化 HTML。",
            "正确的 ARIA。"
          ]
        }
      ]
    },
    {
      "id": "leitores-de-tela-2",
      "partId": "fundamentos",
      "order": 4,
      "title": "屏幕阅读器",
      "summary": "Android 上是 TalkBack，iOS 上是 VoiceOver。两者都需要三样东西：无障碍名称、正确的角色、正确的状态。",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "TalkBack"
        },
        {
          "kind": "paragraph",
          "text": "Android 的原生屏幕阅读器。"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "VoiceOver"
        },
        {
          "kind": "paragraph",
          "text": "iOS 的原生屏幕阅读器。"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "它们需要什么才能正常工作？"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "无障碍名称。",
            "正确的角色。",
            "正确的状态。"
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "示例"
        },
        {
          "kind": "code",
          "code": "<button>\n保存\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "保存，按钮"
        }
      ]
    },
    {
      "id": "como-um-leitor-de-tela-enxerga-uma-pagina",
      "partId": "fundamentos",
      "order": 5,
      "title": "屏幕阅读器是怎么“看”页面的？",
      "summary": "和视力正常的人完全不同。它按标题、按钮、链接、字段和地标来遍历——一个视觉上完美的页面可能完全无法使用。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "这些用户看界面的方式和视力正常的人完全不同。"
        },
        {
          "kind": "paragraph",
          "text": "他们通过以下方式导航："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "标题。",
            "按钮。",
            "链接。",
            "字段。",
            "地标。"
          ]
        },
        {
          "kind": "callout",
          "tone": "warning",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "一个视觉上完美的页面，用屏幕阅读器可能完全无法使用。"
            }
          ]
        }
      ]
    },
    {
      "id": "regra-de-ouro-da-acessibilidade",
      "partId": "fundamentos",
      "order": 6,
      "title": "无障碍的黄金法则",
      "summary": "先语义化 HTML，再考虑 ARIA。如果原生标签能解决问题，就用它——角色、键盘和状态都是免费附带的。",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "HTML 优先"
        },
        {
          "kind": "paragraph",
          "text": "在动用 ARIA 之前，永远优先使用语义化 HTML。"
        },
        {
          "kind": "code",
          "code": "<button>\n保存\n</button>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<div (click)=\"salvar()\">\n保存\n</div>",
          "variant": "wrong"
        },
        {
          "kind": "callout",
          "tone": "success",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "如果原生 HTML 标签能解决问题，就用它。"
            }
          ]
        }
      ]
    },
    {
      "id": "estrutura-semantica-basica",
      "partId": "fundamentos",
      "order": 7,
      "title": "基本语义结构",
      "summary": "header、nav、main 和 footer 在第一行内容被读出之前，就把页面的地图交给了屏幕阅读器。",
      "blocks": [
        {
          "kind": "code",
          "code": "<header>\n  页头\n</header>\n\n<nav>\n  导航\n</nav>\n\n<main>\n\n  <section>\n\n    <h1>主标题</h1>\n\n  </section>\n\n</main>\n\n<footer>\n  页脚\n</footer>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "landmarks",
      "partId": "fundamentos",
      "order": 8,
      "title": "地标",
      "summary": "地标让屏幕阅读器可以直接跳到页面的重要区域，而不必把所有内容都听一遍。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "地标让屏幕阅读器能够在页面的重要区域之间快速导航。"
        },
        {
          "kind": "table",
          "headers": [
            "标签",
            "用途"
          ],
          "rows": [
            [
              "header",
              "页头。"
            ],
            [
              "nav",
              "导航。"
            ],
            [
              "main",
              "主要内容。"
            ],
            [
              "aside",
              "补充内容。"
            ],
            [
              "footer",
              "页脚。"
            ]
          ]
        }
      ]
    },
    {
      "id": "headings",
      "partId": "fundamentos",
      "order": 9,
      "title": "标题层级",
      "summary": "标题构成一棵导航树。跳级会暗示一个并不存在的结构，让人迷失方向。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "标题构成一棵导航树。"
        },
        {
          "kind": "code",
          "code": "<h1>活期账户</h1>\n\n<h2>余额</h2>\n\n<h2>对账单</h2>\n\n<h3>最新记录</h3>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<h1>活期账户</h1>\n<h4>对账单</h4>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "accessible-name",
      "partId": "fundamentos",
      "order": 10,
      "title": "无障碍名称",
      "summary": "每个可交互元素都需要名称。它来自可见文本，或者在没有文本可用时来自 aria-label。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "每个可交互元素都必须有无障碍名称。"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "可见文本"
        },
        {
          "kind": "code",
          "code": "<button>\n继续\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "继续，按钮"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "aria-label"
        },
        {
          "kind": "code",
          "code": "<button aria-label=\"关闭模态框\">\n\n  <mat-icon>关闭</mat-icon>\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "关闭模态框，按钮"
        }
      ]
    },
    {
      "id": "accessible-description",
      "partId": "fundamentos",
      "order": 11,
      "title": "无障碍描述",
      "summary": "aria-describedby 在名称之外补充一段提示。屏幕阅读器会先读字段名称，再读描述。",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\n id=\"cpf\"\n aria-describedby=\"ajudaCpf\">\n\n<span id=\"ajudaCpf\">\n仅限数字\n</span>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "屏幕阅读器会把字段名称和它的描述合在一起朗读。"
        }
      ]
    },
    {
      "id": "nome-role-estado",
      "partId": "fundamentos",
      "order": 12,
      "title": "名称 + 角色 + 状态",
      "summary": "几乎所有屏幕阅读器问题都可以归结为三个问题：名称是什么、角色是什么、状态是什么。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "几乎任何屏幕阅读器分析都可以归结为三个问题："
        },
        {
          "kind": "table",
          "headers": [
            "问题",
            "示例"
          ],
          "rows": [
            [
              "名称是什么？",
              "保存"
            ],
            [
              "角色是什么？",
              "按钮"
            ],
            [
              "状态是什么？",
              "已禁用"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "示例"
        },
        {
          "kind": "code",
          "code": "<button disabled>\n保存\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "保存，按钮，已禁用"
        }
      ]
    },
    {
      "id": "erros-mais-comuns-encontrados-em-angular",
      "partId": "fundamentos",
      "order": 13,
      "title": "Angular 中最常见的错误",
      "summary": "可点击的 div、没有标签的图标按钮、只有占位符的输入框、缺失的标题、不管理焦点的模态框，以及正数 tabindex。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "用可点击的 div 冒充按钮。",
            "可点击的图标没有 aria-label。",
            "输入框只有占位符。",
            "没有主标题。",
            "模态框不管理焦点。",
            "表单错误从来没有被朗读出来。",
            "滥用 ARIA。",
            "链接的行为像按钮。",
            "按钮的行为像链接。",
            "使用正数 tabindex。"
          ]
        }
      ]
    },
    {
      "id": "mentalidade-para-o-time-angular",
      "partId": "fundamentos",
      "order": 14,
      "title": "Angular 团队应有的思维方式",
      "summary": "在做任何组件之前先问五个问题——它们能在写下第一行代码之前就拦住大多数问题。",
      "blocks": [
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "在做任何组件之前，先问自己："
            },
            {
              "kind": "list",
              "ordered": true,
              "items": [
                "有没有对应的原生 HTML 标签？",
                "这个元素有无障碍名称吗？",
                "它能用键盘操作吗？",
                "它在 TalkBack 下能用吗？",
                "它在 VoiceOver 下能用吗？"
              ]
            }
          ]
        }
      ]
    }
  ]
};
