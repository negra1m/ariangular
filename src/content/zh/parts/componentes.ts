// GERADO por scripts/build-locale.js zh — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.zh.json

import type { Part } from '../../types';

export const componentes: Part = {
  "id": "componentes",
  "order": 4,
  "numeral": "04",
  "title": "交互组件与复杂结构",
  "summary": "最容易产生无障碍缺陷的组件：模态框、选项卡、折叠面板、菜单、组合框、表格和轮播。",
  "sections": [
    {
      "id": "botoes",
      "partId": "componentes",
      "order": 1,
      "title": "按钮",
      "summary": "用真正的 button。可点击的 div 会同时失去角色、键盘、状态和语义。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\n继续\n</button>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "继续，按钮"
        },
        {
          "kind": "code",
          "code": "<div (click)=\"continuar()\">\n继续\n</div>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "botao-apenas-com-icone",
      "partId": "componentes",
      "order": 2,
      "title": "纯图标按钮",
      "summary": "没有标签时，屏幕阅读器只会朗读“按钮”。用户知道这里有个控件，却不知道它是做什么的。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-label=\"编辑地址\">\n\n  <mat-icon>编辑</mat-icon>\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "编辑地址，按钮"
        }
      ]
    },
    {
      "id": "links",
      "partId": "componentes",
      "order": 3,
      "title": "链接",
      "summary": "链接用于跳转，按钮用于执行。两者混用会让依赖角色播报来判断后果的人无所适从。",
      "blocks": [
        {
          "kind": "code",
          "code": "<a href=\"/conta\">\n查看账户\n</a>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<a (click)=\"salvar()\">\n保存\n</a>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "链接用于跳转。按钮用于执行操作。"
        }
      ]
    },
    {
      "id": "cards-clicaveis",
      "partId": "componentes",
      "order": 4,
      "title": "可点击卡片",
      "summary": "把卡片包在真正的 button 或 a 里。带点击事件的 div 对键盘来说是不存在的。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button class=\"card\">\n\n活期账户\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "替代写法"
        },
        {
          "kind": "code",
          "code": "<a\nhref=\"/conta\">\n\n活期账户\n\n</a>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "accordion",
      "partId": "componentes",
      "order": 5,
      "title": "折叠面板",
      "summary": "触发器需要 aria-expanded 和 aria-controls，这样状态才会和名称一起被朗读出来。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\"\naria-controls=\"faq1\">\n\n它是怎么运作的？\n\n</button>\n\n<div id=\"faq1\">\n\n内容\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "它是怎么运作的？\n按钮\n已收起"
        }
      ]
    },
    {
      "id": "accordion-com-angular",
      "partId": "componentes",
      "order": 6,
      "title": "Angular 中的折叠面板",
      "summary": "把 aria-expanded 绑定到真实状态。写死的值会永远朗读“已收起”，哪怕面板是打开的。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\n[attr.aria-expanded]=\"aberto\">\n\n问题\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "aria-expanded 必须反映真实状态。"
        }
      ]
    },
    {
      "id": "tabs",
      "partId": "componentes",
      "order": 7,
      "title": "选项卡",
      "summary": "用 role=tablist，并在每个选项卡上加 aria-selected。没有它，屏幕阅读器只说“选项卡”，却不说哪个是当前项。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"tablist\">\n\n  <button\n  role=\"tab\"\n  aria-selected=\"true\">\n\n    详情\n\n  </button>\n\n  <button\n  role=\"tab\"\n  aria-selected=\"false\">\n\n    地址\n\n  </button>\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "tab-panel",
      "partId": "componentes",
      "order": 8,
      "title": "选项卡面板",
      "summary": "承载所选选项卡内容的面板，与选项卡相互关联，屏幕阅读器才能在两者之间来回移动。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"tabpanel\">\n\n选项卡内容。\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "modal",
      "partId": "componentes",
      "order": 9,
      "title": "模态框",
      "summary": "role=dialog、aria-modal，再加一个标签。没有 aria-modal，屏幕阅读器会继续朗读后面的内容。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"dialog\"\naria-modal=\"true\"\naria-labelledby=\"tituloModal\">\n\n<h2 id=\"tituloModal\">\n确认支付\n</h2>\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "checklist-modal",
      "partId": "componentes",
      "order": 10,
      "title": "模态框检查清单",
      "summary": "每个模态框都必须做到的六件事：角色、aria-modal、接收焦点、锁住焦点、ESC 关闭、归还焦点。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "有 role=\"dialog\" 吗？",
            "有 aria-modal 吗？",
            "打开时会接收焦点吗？",
            "焦点被锁在里面了吗？",
            "按 ESC 会关闭吗？",
            "关闭时会把焦点还回去吗？"
          ]
        }
      ]
    },
    {
      "id": "bottom-sheet",
      "partId": "componentes",
      "order": 11,
      "title": "底部弹出面板",
      "summary": "它就是一个从底部滑上来的模态框。同样的规则，一条都不能少。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "把它当作模态框来对待。"
        },
        {
          "kind": "code",
          "code": "role=\"dialog\"\naria-modal=\"true\"",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "menu",
      "partId": "componentes",
      "order": 12,
      "title": "菜单",
      "summary": "触发器通过 aria-haspopup 和 aria-expanded 告知用户它会打开一个菜单。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-haspopup=\"menu\"\naria-expanded=\"false\">\n\n操作\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "itens-de-menu",
      "partId": "componentes",
      "order": 13,
      "title": "菜单项",
      "summary": "每一项都带 role=menuitem，并且整组必须能用方向键到达。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"menu\">\n\n  <button role=\"menuitem\">\n  编辑\n  </button>\n\n  <button role=\"menuitem\">\n  删除\n  </button>\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "dropdown",
      "partId": "componentes",
      "order": 14,
      "title": "下拉选择",
      "summary": "只要可能就优先用原生 select。它自带正确的键盘操作、状态和移动端行为。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "只要可能，就优先使用原生 select。"
        },
        {
          "kind": "code",
          "code": "<select>\n\n...\n\n</select>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "combobox",
      "partId": "componentes",
      "order": 15,
      "title": "组合框",
      "summary": "最难做对的模式之一。从 Angular v22 起有了官方答案：@angular/aria 里的 ngCombobox。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"combobox\"\naria-expanded=\"false\">\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "实现复杂。不要手写——参见 Angular Aria。"
        }
      ]
    },
    {
      "id": "lista",
      "partId": "componentes",
      "order": 16,
      "title": "列表",
      "summary": "真正的 ul 或 ol 会让屏幕阅读器朗读“列表，共 N 项”，用户由此知道后面还有多少内容。",
      "blocks": [
        {
          "kind": "code",
          "code": "<ul>\n\n  <li>第 1 项</li>\n\n  <li>第 2 项</li>\n\n</ul>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "列表，共 2 项"
        }
      ]
    },
    {
      "id": "breadcrumb",
      "partId": "componentes",
      "order": 17,
      "title": "面包屑",
      "summary": "一个带标签的 nav，在当前项上加 aria-current=\"page\"，它才会被朗读为“你所在的位置”。",
      "blocks": [
        {
          "kind": "code",
          "code": "<nav aria-label=\"面包屑导航\">\n\n...\n\n</nav>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "当前项"
        },
        {
          "kind": "code",
          "code": "aria-current=\"page\"",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "stepper",
      "partId": "componentes",
      "order": 18,
      "title": "步骤条",
      "summary": "aria-current=\"step\" 标出当前步骤，用户看不到高亮也能知道自己走到了哪里。",
      "blocks": [
        {
          "kind": "code",
          "code": "<li aria-current=\"step\">\n\n支付\n\n</li>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "支付\n当前步骤"
        }
      ]
    },
    {
      "id": "tabela-simples",
      "partId": "componentes",
      "order": 19,
      "title": "简单表格",
      "summary": "caption、th 和 scope 让屏幕阅读器能把每个单元格和它的表头对应起来，而不是读出一串孤立的数字。",
      "blocks": [
        {
          "kind": "code",
          "code": "<table>\n\n  <caption>\n  对账单\n  </caption>\n\n  <thead>\n\n    <tr>\n\n      <th scope=\"col\">\n      日期\n      </th>\n\n      <th scope=\"col\">\n      金额\n      </th>\n\n    </tr>\n\n  </thead>\n\n</table>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "tabela-boas-praticas",
      "partId": "componentes",
      "order": 20,
      "title": "表格最佳实践",
      "summary": "使用 caption、th 和 scope，绝对不要用 div 拼表格——那会摧毁单元格与表头之间的关系。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "使用 caption。",
            "使用 th。",
            "使用 scope。",
            "避免用 div 拼表格。"
          ]
        }
      ]
    },
    {
      "id": "tooltip",
      "partId": "componentes",
      "order": 21,
      "title": "工具提示",
      "summary": "用 aria-describedby 绑定，并且让它在获得焦点时也显示——只响应悬停的提示对键盘用户等于不存在。",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-describedby=\"tooltip1\">\n\n?",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<div\nid=\"tooltip1\"\nrole=\"tooltip\">\n\n补充信息\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "toast",
      "partId": "componentes",
      "order": 22,
      "title": "轻提示",
      "summary": "role=status 会朗读消息但不抢走焦点，这正是确认类提示应有的行为。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"status\">\n\n支付已完成\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "snackbar",
      "partId": "componentes",
      "order": 23,
      "title": "消息条",
      "summary": "一个有礼貌的实时区域：它会在停顿时朗读，而不是打断正在读的内容。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\">\n\n已添加\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "alertas-criticos",
      "partId": "componentes",
      "order": 24,
      "title": "紧急警告",
      "summary": "role=alert 会立即打断。只留给真的等不了的内容——其余的都是噪音。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"alert\">\n\n交易失败\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "立即朗读。"
        }
      ]
    },
    {
      "id": "loading",
      "partId": "componentes",
      "order": 25,
      "title": "加载中",
      "summary": "aria-busy 告诉辅助技术该区域仍在更新，避免朗读一个只完成了一半的状态。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-busy=\"true\">\n\n加载中\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "progress-bar",
      "partId": "componentes",
      "order": 26,
      "title": "进度条",
      "summary": "role=progressbar 需要 valuemin、valuemax 和 valuenow，否则朗读出的进度条不带任何数值。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"progressbar\"\naria-valuemin=\"0\"\naria-valuemax=\"100\"\naria-valuenow=\"30\">\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "30%"
        }
      ]
    },
    {
      "id": "skeleton-loading",
      "partId": "componentes",
      "order": 27,
      "title": "骨架屏",
      "summary": "占位形状不携带任何信息。用 aria-hidden 藏起来，别让屏幕阅读器读出一整面的空白。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "视觉占位应当被屏幕阅读器忽略。"
        },
        {
          "kind": "code",
          "code": "aria-hidden=\"true\"",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "carrossel",
      "partId": "componentes",
      "order": 28,
      "title": "轮播",
      "summary": "需要上一张、下一张和暂停按钮，幻灯片也要可识别。自动轮播且无法暂停，本身就是一条 WCAG 失败项。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "上一张按钮。",
            "下一张按钮。",
            "暂停按钮。",
            "可识别的幻灯片。"
          ]
        }
      ]
    },
    {
      "id": "infinite-scroll",
      "partId": "componentes",
      "order": 29,
      "title": "无限滚动",
      "summary": "朗读新加载的内容，把焦点留在原处，避免页面在用户脚下突然跳动。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "朗读新加载的项目。",
            "保持焦点位置。",
            "避免突兀的位移。"
          ]
        }
      ]
    },
    {
      "id": "drag-and-drop",
      "partId": "componentes",
      "order": 30,
      "title": "拖放",
      "summary": "永远不要只依赖手势。必须有一条通过点击或键盘达到同样结果的路径。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "永远不要只依赖手势。"
        },
        {
          "kind": "paragraph",
          "text": "始终提供点击或键盘的替代方式。"
        }
      ]
    },
    {
      "id": "upload-de-arquivo",
      "partId": "componentes",
      "order": 31,
      "title": "文件上传",
      "summary": "使用带真实标签的原生 file input。自定义上传控件是最常见的“把键盘彻底弄丢”的地方。",
      "blocks": [
        {
          "kind": "code",
          "code": "<label for=\"arquivo\">\n文件\n</label>\n\n<input\nid=\"arquivo\"\ntype=\"file\">",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "mensagens-dinamicas",
      "partId": "componentes",
      "order": 32,
      "title": "动态消息",
      "summary": "所有不刷新页面就发生变化的内容都需要实时区域：轻提示、筛选生效、搜索完成、支付成功。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\">\n\n{{ mensagem }}\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "常见用途："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "轻提示。",
            "筛选已生效。",
            "搜索已完成。",
            "支付已通过。",
            "上传已完成。"
          ]
        }
      ]
    },
    {
      "id": "checklist-de-componentes",
      "partId": "componentes",
      "order": 33,
      "title": "组件检查清单",
      "summary": "在认为任何组件做完之前先过一遍这九个问题——名称、角色、状态、键盘、焦点和播报。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "它有无障碍名称吗？",
            "它的角色正确吗？",
            "它的状态正确吗？",
            "它能用键盘操作吗？",
            "焦点看得见吗？",
            "它在 TalkBack 下能用吗？",
            "它在 VoiceOver 下能用吗？",
            "重要变化会被朗读出来吗？",
            "焦点顺序合理吗？"
          ]
        }
      ]
    }
  ]
};
