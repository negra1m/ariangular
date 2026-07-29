// GERADO por scripts/build-locale.js zh — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.zh.json

import type { Part } from '../../types';

export const leitoresDeTela: Part = {
  "id": "leitores-de-tela",
  "order": 6,
  "numeral": "06",
  "title": "TalkBack、VoiceOver 与真机测试",
  "summary": "TalkBack 和 VoiceOver 的真实行为、各类组件会被朗读成什么，以及手工测试的操作流程。",
  "sections": [
    {
      "id": "principio-fundamental",
      "partId": "leitores-de-tela",
      "order": 1,
      "title": "根本原则",
      "summary": "屏幕阅读器依赖名称、角色和状态。几乎所有缺陷都能靠这三个问题诊断出来。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "屏幕阅读器依赖："
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
          "kind": "paragraph",
          "text": "几乎所有缺陷都能从这三点入手分析。"
        }
      ]
    },
    {
      "id": "exemplo-de-leitura",
      "partId": "leitores-de-tela",
      "order": 2,
      "title": "一次播报听起来是什么样",
      "summary": "一个普通按钮会播报它的名称和角色。在这里 TalkBack 和 VoiceOver 说的是同一句话。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\n\n保存\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "保存，按钮"
        },
        {
          "kind": "reading",
          "text": "保存，按钮"
        }
      ]
    },
    {
      "id": "botao-com-icone",
      "partId": "leitores-de-tela",
      "order": 3,
      "title": "图标按钮",
      "summary": "没有标签时，播报就只有“按钮”两个字。加上 aria-label，它才变成用户即将执行的那个动作。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\n\n<mat-icon>\n关闭\n</mat-icon>\n\n</button>",
          "variant": "wrong"
        },
        {
          "kind": "reading",
          "text": "按钮"
        },
        {
          "kind": "code",
          "code": "<button\naria-label=\"关闭\">\n\n<mat-icon>\n关闭\n</mat-icon>\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "关闭，按钮"
        }
      ]
    },
    {
      "id": "campos-obrigatorios-2",
      "partId": "leitores-de-tela",
      "order": 4,
      "title": "必填字段",
      "summary": "必填状态会和字段一起被播报，用户在输入之前就知道，而不是提交之后才知道。",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\nrequired>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "编辑框\n必填"
        }
      ]
    },
    {
      "id": "campo-invalido",
      "partId": "leitores-de-tela",
      "order": 5,
      "title": "无效字段",
      "summary": "aria-invalid 让校验失败成为焦点到达该字段时屏幕阅读器所说内容的一部分。",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\naria-invalid=\"true\">",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "无效字段"
        }
      ]
    },
    {
      "id": "checkbox",
      "partId": "leitores-de-tela",
      "order": 6,
      "title": "复选框",
      "summary": "原生复选框会播报标签、角色和状态——而且勾选时会自己更新状态。",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\ntype=\"checkbox\">\n\n<label>\n\n我接受条款\n\n</label>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "我接受条款\n复选框\n未勾选"
        },
        {
          "kind": "reading",
          "text": "我接受条款\n复选框\n已勾选"
        }
      ]
    },
    {
      "id": "switch",
      "partId": "leitores-de-tela",
      "order": 7,
      "title": "开关",
      "summary": "role=switch 配合 aria-checked 会播报“开”和“关”，对切换控件来说比“已勾选/未勾选”自然得多。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\nrole=\"switch\"\naria-checked=\"true\">\n\n通知\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "通知\n开关\n开"
        }
      ]
    },
    {
      "id": "accordion-2",
      "partId": "leitores-de-tela",
      "order": 8,
      "title": "折叠面板",
      "summary": "面板打开时播报内容必须跟着变。如果它永远说“已收起”，说明 aria-expanded 没有绑定到真实状态。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\">\n\n详情\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "详情\n按钮\n已收起"
        },
        {
          "kind": "reading",
          "text": "详情\n按钮\n已展开"
        }
      ]
    },
    {
      "id": "tabs-2",
      "partId": "leitores-de-tela",
      "order": 9,
      "title": "选项卡",
      "summary": "被选中的选项卡会被播报为“已选中”。没有 aria-selected，用户只听到“选项卡”，分不清哪个是当前项。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\nrole=\"tab\"\naria-selected=\"true\">\n\n详情\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "详情\n选项卡\n已选中"
        }
      ]
    },
    {
      "id": "stepper-2",
      "partId": "leitores-de-tela",
      "order": 10,
      "title": "步骤条",
      "summary": "aria-current=\"step\" 把一个视觉高亮变成屏幕阅读器能够传达的信息。",
      "blocks": [
        {
          "kind": "code",
          "code": "<li\naria-current=\"step\">\n\n支付\n\n</li>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "支付\n当前步骤"
        }
      ]
    },
    {
      "id": "mensagens-dinamicas-2",
      "partId": "leitores-de-tela",
      "order": 11,
      "title": "动态消息",
      "summary": "实时区域会自己播报，而不移动焦点——这正是确认类消息想要的行为。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\">\n\n支付已完成\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "焦点不需要移动。"
        },
        {
          "kind": "paragraph",
          "text": "屏幕阅读器会自动播报。"
        }
      ]
    },
    {
      "id": "role-alert",
      "partId": "leitores-de-tela",
      "order": 12,
      "title": "role=\"alert\"",
      "summary": "会打断正在朗读的内容。只留给真的等不了的消息——其余的都会变成噪音。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"alert\">\n\n支付失败\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "会被立即播报。"
        },
        {
          "kind": "paragraph",
          "text": "只用于真正重要的消息。"
        }
      ]
    },
    {
      "id": "foco-visivel",
      "partId": "leitores-de-tela",
      "order": 13,
      "title": "可见的焦点",
      "summary": "每个可获得焦点的元素都必须显示出它拿到了焦点。去掉 outline 又不给替代，等于把鼠标指针藏起来。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "每个可获得焦点的元素都必须在视觉上表明它接收到了焦点。"
        },
        {
          "kind": "code",
          "code": "button:focus {\n\noutline: 3px solid blue;\n\n}",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "button:focus {\n\noutline: none;\n\n}",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "sequencia-de-foco",
      "partId": "leitores-de-tela",
      "order": 14,
      "title": "焦点顺序",
      "summary": "DOM 顺序必须与视觉顺序一致。屏幕阅读器用户沿着页面结构移动，而不是沿着布局移动。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "DOM 顺序必须反映视觉顺序。"
        },
        {
          "kind": "paragraph",
          "text": "屏幕阅读器用户是顺着页面结构来导航的。"
        }
      ]
    },
    {
      "id": "modais",
      "partId": "leitores-de-tela",
      "order": 15,
      "title": "模态框",
      "summary": "打开时：焦点进入，后面的内容变得不可达，Tab 留在里面。关闭时：焦点回到打开它的那个元素。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "打开时："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "焦点进入模态框。",
            "后面的内容变得不可达。",
            "Tab 只在它内部循环。"
          ]
        },
        {
          "kind": "paragraph",
          "text": "关闭时："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "焦点回到打开它的那个元素。"
          ]
        }
      ]
    },
    {
      "id": "problema-classico",
      "partId": "leitores-de-tela",
      "order": 16,
      "title": "经典问题",
      "summary": "模态框关闭后焦点消失，跑回文档顶部。它应该回到打开它的那个按钮上。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\n\n编辑\n\n</button>\n\n<div *ngIf=\"aberto\">\n\n模态框\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "模态框关闭时，焦点常常就消失了。"
        },
        {
          "kind": "paragraph",
          "text": "它应该回到“编辑”按钮上。"
        }
      ]
    },
    {
      "id": "loading-2",
      "partId": "leitores-de-tela",
      "order": 17,
      "title": "加载中",
      "summary": "开始和结束都要播报。等待过程中的沉默，和页面坏掉是分不出来的。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "不要让用户完全收不到反馈。"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "示例"
        },
        {
          "kind": "code",
          "code": "Carregando extrato...",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "对账单加载成功"
        }
      ]
    },
    {
      "id": "talkback-x-voiceover",
      "partId": "leitores-de-tela",
      "order": 18,
      "title": "TalkBack 与 VoiceOver 的差异",
      "summary": "两者的差异出现在可预期的地方：表单、选项卡、模态框和下拉选择。测了一个不等于覆盖了另一个。",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "场景",
            "常见差异"
          ],
          "rows": [
            [
              "表单",
              "播报内容存在细微差别。"
            ],
            [
              "选项卡",
              "播报顺序可能不同。"
            ],
            [
              "模态框",
              "焦点行为可能不同。"
            ],
            [
              "下拉选择",
              "高度依赖具体实现。"
            ]
          ]
        }
      ]
    },
    {
      "id": "roteiro-de-teste-manual",
      "partId": "leitores-de-tela",
      "order": 19,
      "title": "手工测试流程",
      "summary": "用真实屏幕阅读器在每个页面上跑十个步骤——这部分没有任何自动化工具能替你完成。",
      "blocks": [
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "打开屏幕阅读器。",
            "把整个页面走一遍。",
            "检查标题层级。",
            "检查按钮。",
            "检查表单。",
            "测试错误提示。",
            "测试加载状态。",
            "测试模态框。",
            "测试页面跳转。",
            "测试中途退出流程。"
          ]
        }
      ]
    },
    {
      "id": "bugs-mais-comuns-encontrados-em-producao",
      "partId": "leitores-de-tela",
      "order": 20,
      "title": "生产环境中最常见的缺陷",
      "summary": "没有名称的按钮、没有标签的图标、不接收焦点的模态框、不被播报的错误，以及跳转后丢失的焦点。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "按钮没有无障碍名称。",
            "可点击的图标没有标签。",
            "模态框从不接收焦点。",
            "错误从未被播报。",
            "轻提示从未被播报。",
            "跳转之后焦点丢失。",
            "焦点顺序不正确。",
            "折叠面板没有 aria-expanded。",
            "选项卡没有 aria-selected。",
            "只做了一半的自定义下拉选择。"
          ]
        }
      ]
    },
    {
      "id": "checklist-final-de-talkback-e-voiceover",
      "partId": "leitores-de-tela",
      "order": 21,
      "title": "TalkBack 与 VoiceOver 最终检查清单",
      "summary": "上线前用真机回答的九个问题——最后一个才是真正重要的那个。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "每个元素都有名称吗？",
            "每个元素的角色都正确吗？",
            "状态会被播报吗？",
            "不靠视觉，整个流程走得通吗？",
            "错误会被播报吗？",
            "动态消息会被播报吗？",
            "焦点从来没有消失过吗？",
            "导航结构讲得通吗？",
            "成功和失败都有反馈吗？"
          ]
        }
      ]
    }
  ]
};
