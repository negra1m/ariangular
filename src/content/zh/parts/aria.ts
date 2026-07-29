// GERADO por scripts/build-locale.js zh — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.zh.json

import type { Part } from '../../types';

export const aria: Part = {
  "id": "aria",
  "order": 2,
  "numeral": "02",
  "title": "Angular 完整 ARIA 指南",
  "summary": "Angular 开发者日常会用到的全部 ARIA 属性和角色，以及每一个会让屏幕阅读器朗读出什么。",
  "sections": [
    {
      "id": "o-que-e-aria",
      "partId": "aria",
      "order": 1,
      "title": "什么是 ARIA？",
      "summary": "ARIA 的存在是为了补充 HTML 语义，而不是取代它。如果原生标签能解决，就用原生标签。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "ARIA 的全称是："
        },
        {
          "kind": "code",
          "code": "Accessible Rich Internet Applications",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "ARIA 的存在是为了补充 HTML 语义。"
        },
        {
          "kind": "callout",
          "tone": "warning",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "ARIA 不能取代语义化 HTML。"
            }
          ]
        },
        {
          "kind": "code",
          "code": "<button>\n保存\n</button>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<div role=\"button\">\n保存\n</div>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "regra-de-ouro",
      "partId": "aria",
      "order": 2,
      "title": "黄金法则",
      "summary": "没有 ARIA 好过错误的 ARIA。如果原生 HTML 已经解决了问题，加上 ARIA 只是给状态失效留了空间。",
      "blocks": [
        {
          "kind": "code",
          "code": "No ARIA is better than bad ARIA.",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "如果原生 HTML 能解决，就不要无缘无故加 ARIA。"
        }
      ]
    },
    {
      "id": "accessible-name-2",
      "partId": "aria",
      "order": 3,
      "title": "无障碍名称",
      "summary": "每个可交互元素都需要名称。元素内的文本是最简单的来源，也是最不容易过时的来源。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "每个可交互元素都必须有无障碍名称。"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "元素内文本"
        },
        {
          "kind": "code",
          "code": "<button>\n继续\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "继续，按钮"
        }
      ]
    },
    {
      "id": "aria-label",
      "partId": "aria",
      "order": 4,
      "title": "aria-label",
      "summary": "在没有可见文本时设置无障碍名称——纯图标按钮、没有文字的操作、自定义元素。",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "属性",
            "取值",
            "用途"
          ],
          "rows": [
            [
              "aria-label",
              "字符串",
              "设置无障碍名称。"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "什么时候用"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "纯图标按钮。",
            "没有可见文字的操作。",
            "自定义元素。"
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "示例"
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
      "id": "aria-labelledby",
      "partId": "aria",
      "order": 5,
      "title": "aria-labelledby",
      "summary": "通过引用 id，把页面上的另一个元素当作名称。当标签本身已经是可见文字时很好用。",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "取值",
            "用途"
          ],
          "rows": [
            [
              "id",
              "用另一个元素作为名称。"
            ]
          ]
        },
        {
          "kind": "code",
          "code": "<h2 id=\"titulo\">\n支付\n</h2>\n\n<button\naria-labelledby=\"titulo\">\n\n确认\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-describedby",
      "partId": "aria",
      "order": 6,
      "title": "aria-describedby",
      "summary": "在名称之外补充一段描述。屏幕阅读器先读名称，再读描述。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "补充一段说明性描述。"
        },
        {
          "kind": "code",
          "code": "<input\nid=\"cpf\"\naria-describedby=\"ajudaCpf\">\n\n<span id=\"ajudaCpf\">\n仅限数字\n</span>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-hidden",
      "partId": "aria",
      "order": 7,
      "title": "aria-hidden",
      "summary": "把元素从无障碍树中隐藏。绝对不要用在可获得焦点的元素上——Tab 键仍然会走到它，但什么都不会被朗读。",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "取值",
            "用途"
          ],
          "rows": [
            [
              "true",
              "对屏幕阅读器隐藏。"
            ],
            [
              "false",
              "对屏幕阅读器暴露。"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "装饰性图片"
        },
        {
          "kind": "code",
          "code": "<img\nsrc=\"ornamento.svg\"\nalt=\"\"\naria-hidden=\"true\">",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-expanded",
      "partId": "aria",
      "order": 8,
      "title": "aria-expanded",
      "summary": "朗读控件是展开还是收起。它必须跟随真实状态——一个不再更新的值比没有还糟。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "表示展开状态。"
        },
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\">\n\n详情\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "详情，按钮，已收起"
        }
      ]
    },
    {
      "id": "aria-controls",
      "partId": "aria",
      "order": 9,
      "title": "aria-controls",
      "summary": "把控件和它操作的内容连接起来，屏幕阅读器就能提供一条直达那里的捷径。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "把控件和一块内容连接起来。"
        },
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\"\naria-controls=\"painel1\">\n\n展开\n\n</button>\n\n<div id=\"painel1\">\n\n内容\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-current",
      "partId": "aria",
      "order": 10,
      "title": "aria-current",
      "summary": "标记一组元素中的当前项：导航中的当前页、步骤条中的当前步、面包屑中的当前位置。",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "取值",
            "用途"
          ],
          "rows": [
            [
              "page",
              "当前页面。"
            ],
            [
              "step",
              "当前步骤。"
            ],
            [
              "location",
              "当前位置。"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "步骤条"
        },
        {
          "kind": "code",
          "code": "<li aria-current=\"step\">\n\n支付\n\n</li>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-selected",
      "partId": "aria",
      "order": 11,
      "title": "aria-selected",
      "summary": "朗读选项卡、列表框或网格中哪一项被选中。没有它，屏幕阅读器只会说“选项卡”，却不说是哪一个。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "表示选中状态。"
        },
        {
          "kind": "code",
          "code": "<button\nrole=\"tab\"\naria-selected=\"true\">\n\n详情\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-checked",
      "partId": "aria",
      "order": 12,
      "title": "aria-checked",
      "summary": "承载自定义复选框、单选框或开关的勾选状态。原生 input 自己就做到了这一点。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"checkbox\"\naria-checked=\"true\">\n\n我同意\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "我同意，复选框，已勾选"
        }
      ]
    },
    {
      "id": "aria-pressed",
      "partId": "aria",
      "order": 13,
      "title": "aria-pressed",
      "summary": "用于切换型按钮——收藏、静音、保存。它告诉屏幕阅读器这个按钮带有状态，而不只是执行一个动作。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "切换型按钮。"
        },
        {
          "kind": "code",
          "code": "<button\naria-pressed=\"true\">\n\n收藏\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-disabled",
      "partId": "aria",
      "order": 14,
      "title": "aria-disabled",
      "summary": "把控件朗读为不可用，同时保持键盘可达——这与原生 disabled 不同，后者会把它从 Tab 顺序中移除。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-disabled=\"true\">\n\n继续\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "继续，按钮，不可用"
        }
      ]
    },
    {
      "id": "aria-required",
      "partId": "aria",
      "order": 15,
      "title": "aria-required",
      "summary": "朗读该字段必须填写。原生 required 已经做到了；当控件不是原生 input 时才用它。",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\naria-required=\"true\">",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "必填字段"
        }
      ]
    },
    {
      "id": "aria-invalid",
      "partId": "aria",
      "order": 16,
      "title": "aria-invalid",
      "summary": "把字段标记为校验失败，焦点到达时状态会和名称一起被朗读出来。",
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
      "id": "aria-live",
      "partId": "aria",
      "order": 17,
      "title": "aria-live",
      "summary": "朗读不刷新页面就发生变化的内容——提示消息、结果、状态。用 polite；assertive 会打断正在朗读的内容。",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "取值",
            "用途"
          ],
          "rows": [
            [
              "off",
              "不朗读。"
            ],
            [
              "polite",
              "在停顿时朗读。"
            ],
            [
              "assertive",
              "立即朗读。"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "提示消息"
        },
        {
          "kind": "code",
          "code": "<div aria-live=\"polite\">\n\n支付已完成\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-atomic",
      "partId": "aria",
      "order": 18,
      "title": "aria-atomic",
      "summary": "控制实时区域中某一部分变化时要重读多少内容——是整块，还是只读变化的部分。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "控制重读的范围。"
        },
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\"\naria-atomic=\"true\">\n\n已选择 3 项\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-busy",
      "partId": "aria",
      "order": 19,
      "title": "aria-busy",
      "summary": "告诉辅助技术该区域仍在加载，先别朗读一个只更新了一半的状态。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "表示正在加载。"
        },
        {
          "kind": "code",
          "code": "<div aria-busy=\"true\">\n\n加载中\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-modal",
      "partId": "aria",
      "order": 20,
      "title": "aria-modal",
      "summary": "告诉屏幕阅读器对话框后面的一切都不可用。没有它，下层内容仍会被继续朗读。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"dialog\"\naria-modal=\"true\">\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-haspopup",
      "partId": "aria",
      "order": 21,
      "title": "aria-haspopup",
      "summary": "朗读该控件会打开菜单、模态框还是列表——用户在触发之前就知道会发生什么。",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "取值",
            "用途"
          ],
          "rows": [
            [
              "menu",
              "打开菜单。"
            ],
            [
              "dialog",
              "打开模态框。"
            ],
            [
              "listbox",
              "打开列表。"
            ]
          ]
        },
        {
          "kind": "code",
          "code": "<button\naria-haspopup=\"menu\">\n\n操作\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-para-progress-bar",
      "partId": "aria",
      "order": 22,
      "title": "进度条的 ARIA",
      "summary": "role=progressbar 需要 valuemin、valuemax 和 valuenow 三者齐备——否则屏幕阅读器朗读出的是一个没有数字的进度条。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"progressbar\"\naria-valuemin=\"0\"\naria-valuemax=\"100\"\naria-valuenow=\"50\">\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "50%"
        }
      ]
    },
    {
      "id": "principais-roles",
      "partId": "aria",
      "order": 23,
      "title": "真正会用到的角色",
      "summary": "少数几个 ARIA 角色几乎覆盖了所有真实场景：button、link、dialog、alert、status、选项卡、复选框、开关、菜单和列表框。",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "角色",
            "用途"
          ],
          "rows": [
            [
              "button",
              "按钮。"
            ],
            [
              "link",
              "链接。"
            ],
            [
              "dialog",
              "模态框。"
            ],
            [
              "alert",
              "紧急消息。"
            ],
            [
              "status",
              "信息性状态。"
            ],
            [
              "tablist",
              "选项卡容器。"
            ],
            [
              "tab",
              "选项卡。"
            ],
            [
              "tabpanel",
              "选项卡内容。"
            ],
            [
              "checkbox",
              "复选框。"
            ],
            [
              "switch",
              "开与关。"
            ],
            [
              "menu",
              "菜单。"
            ],
            [
              "menuitem",
              "菜单项。"
            ],
            [
              "listbox",
              "可选择的列表。"
            ],
            [
              "option",
              "选项。"
            ]
          ]
        }
      ]
    },
    {
      "id": "roles-que-voce-quase-nunca-precisara",
      "partId": "aria",
      "order": 24,
      "title": "几乎永远用不上的角色",
      "summary": "tree、treegrid、feed、math、meter、log 和 marquee。没有真实需求就动用它们，通常只会让情况更糟。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "tree",
            "treegrid",
            "feed",
            "math",
            "meter",
            "log",
            "marquee"
          ]
        },
        {
          "kind": "paragraph",
          "text": "没有真实需求就不要使用它们。"
        }
      ]
    },
    {
      "id": "angular-attribute-binding",
      "partId": "aria",
      "order": 25,
      "title": "Angular 属性绑定",
      "summary": "在 Angular 中如何把 ARIA 绑定到动态值，让属性跟随真实状态，而不是停留在初始值上。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\n[attr.aria-label]=\"descricao\">\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "这样写也可以"
        },
        {
          "kind": "code",
          "code": "<button\n[aria-label]=\"descricao\">\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "erros-mais-comuns-com-aria",
      "partId": "aria",
      "order": 26,
      "title": "最常见的 ARIA 错误",
      "summary": "冗余的角色、多余的标签、给真实内容加 aria-hidden、滥用实时区域，以及不再跟随 DOM 的状态。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "给 button 再加一个 role=\"button\"。",
            "加上根本不需要的 aria-label。",
            "给重要内容加 aria-hidden。",
            "实时区域太多。",
            "aria-expanded 状态不再跟随实际情况。",
            "aria-describedby 指向一个不存在的 id。",
            "自定义组件完全不支持键盘。"
          ]
        }
      ]
    },
    {
      "id": "checklist-aria",
      "partId": "aria",
      "order": 27,
      "title": "ARIA 检查清单",
      "summary": "在认为任何带 ARIA 的元素做完之前，先过一遍这六个问题。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "它有无障碍名称吗？",
            "它的角色正确吗？",
            "它的状态正确吗？",
            "它和 DOM 保持同步吗？",
            "TalkBack 朗读得正确吗？",
            "VoiceOver 朗读得正确吗？"
          ]
        }
      ]
    }
  ]
};
