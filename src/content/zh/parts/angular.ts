// GERADO por scripts/build-locale.js zh — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.zh.json

import type { Part } from '../../types';

export const angular: Part = {
  "id": "angular",
  "order": 5,
  "numeral": "05",
  "title": "Angular、Angular Material 与 Angular CDK A11y",
  "summary": "路由跳转后的焦点处理、Angular CDK A11y、官方的 @angular/aria 包、Material 以及自定义组件。",
  "sections": [
    {
      "id": "angular-e-acessivel-por-padrao",
      "partId": "angular",
      "order": 1,
      "title": "Angular 默认就是无障碍的吗？",
      "summary": "不是。Angular 只渲染你写的 HTML。好的 HTML 容易产出无障碍的应用；糟糕的 HTML，框架不会替你修。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "不是。"
        },
        {
          "kind": "paragraph",
          "text": "Angular 渲染的是你写的 HTML。如果 HTML 是无障碍的，应用往往也是无障碍的。如果 HTML 很糟，Angular 不会替你修好。"
        }
      ]
    },
    {
      "id": "regra-principal-para-angular",
      "partId": "angular",
      "order": 2,
      "title": "Angular 的首要规则",
      "summary": "先语义化 HTML，再考虑 ARIA。带点击事件的 button 永远胜过带点击事件的 div。",
      "blocks": [
        {
          "kind": "code",
          "code": "HTML semântico primeiro.\nARIA depois.",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<button (click)=\"salvar()\">\n\n保存\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<div (click)=\"salvar()\">\n\n保存\n\n</div>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "binding-de-aria",
      "partId": "angular",
      "order": 3,
      "title": "绑定 ARIA",
      "summary": "当 ARIA 的值是动态的时，使用属性绑定，让它跟随真实状态，而不是停留在初始值。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "当值是动态的时："
        },
        {
          "kind": "code",
          "code": "<button\n[attr.aria-label]=\"descricao\">\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "折叠面板"
        },
        {
          "kind": "code",
          "code": "<button\n[attr.aria-expanded]=\"aberto\">\n\n详情\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "ngif-e-foco",
      "partId": "angular",
      "order": 4,
      "title": "NgIf 与焦点",
      "summary": "最常见的缺陷之一：元素离开 DOM 时，原本停在它上面的焦点也随之消失，且没有任何替代。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "最常见的问题之一。"
        },
        {
          "kind": "code",
          "code": "<div *ngIf=\"mostrar\">\n\n内容\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "元素离开 DOM 时，焦点可能会丢失。"
        }
      ]
    },
    {
      "id": "ngfor-e-acessibilidade",
      "partId": "angular",
      "order": 5,
      "title": "NgFor 与无障碍",
      "summary": "在真正的列表里循环。一堆 div 的循环会丢掉“列表，共 N 项”这句用来定位的播报。",
      "blocks": [
        {
          "kind": "code",
          "code": "<li *ngFor=\"let item of itens\">\n\n{{ item.nome }}\n\n</li>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "优先使用语义化结构。"
        },
        {
          "kind": "code",
          "code": "<ul>\n\n<li *ngFor=\"let item of itens\">\n\n...\n\n</li>\n\n</ul>",
          "variant": "correct"
        }
      ]
    },
    {
      "id": "router-angular",
      "partId": "angular",
      "order": 6,
      "title": "Angular 路由",
      "summary": "SPA 不会重新加载页面，屏幕阅读器因此根本察觉不到画面变了。这是 Angular 应用中最大的无障碍缺口。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "SPA 应用不会重新加载页面。"
        },
        {
          "kind": "paragraph",
          "text": "屏幕阅读器不会自动察觉画面已经变了。"
        }
      ]
    },
    {
      "id": "foco-apos-navegacao",
      "partId": "angular",
      "order": 7,
      "title": "跳转后的焦点",
      "summary": "每次路由变化后，把焦点移到 h1 或主内容区。否则焦点会留在旧页面所在的位置。",
      "blocks": [
        {
          "kind": "code",
          "code": "this.router.events\n.subscribe(...)",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "跳转之后："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "把焦点移到 h1。",
            "或者移到主内容区。"
          ]
        }
      ]
    },
    {
      "id": "exemplo-de-destino-de-foco",
      "partId": "angular",
      "order": 8,
      "title": "焦点目标的实际写法",
      "summary": "给标题加上 tabindex=\"-1\"，它就能以编程方式接收焦点，同时不进入 Tab 顺序。",
      "blocks": [
        {
          "kind": "code",
          "code": "<h1\ntabindex=\"-1\"\n#titulo>\n\n活期账户\n\n</h1>",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "this.titulo.nativeElement.focus();",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "anunciar-mudancas-de-tela",
      "partId": "angular",
      "order": 9,
      "title": "播报页面切换",
      "summary": "跳转后播报新页面的名称。要在移动焦点之后播报——顺序反过来，播报会被截断。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "在 Angular 应用中，通常会播报页面的名称。"
        },
        {
          "kind": "code",
          "code": "Extrato carregado\n\nTransferência carregada\n\nPagamento carregado",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "angular-cdk-accessibility",
      "partId": "angular",
      "order": 10,
      "title": "Angular CDK Accessibility",
      "summary": "Angular 技术栈中最重要的无障碍包：LiveAnnouncer、FocusMonitor、FocusTrap、FocusKeyManager 和 InteractivityChecker。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Angular 技术栈中对无障碍最重要的一个包。"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "LiveAnnouncer",
            "FocusMonitor",
            "FocusTrap",
            "FocusKeyManager",
            "InteractivityChecker"
          ]
        }
      ]
    },
    {
      "id": "liveannouncer",
      "partId": "angular",
      "order": 11,
      "title": "LiveAnnouncer",
      "summary": "以编程方式向屏幕阅读器播报一条消息，通过一个托管的实时区域实现——不需要你自己写任何标记。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "用来创建面向屏幕阅读器的播报。"
        },
        {
          "kind": "code",
          "code": "constructor(\nprivate live: LiveAnnouncer\n) {}",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "this.live.announce(\n'Pagamento realizado com sucesso'\n);",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "quando-usar-liveannouncer",
      "partId": "angular",
      "order": 12,
      "title": "什么时候用 LiveAnnouncer",
      "summary": "用于不切换页面就发生的结果：支付完成、筛选生效、搜索结束、上传完成、重要错误。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "支付已完成。",
            "筛选已生效。",
            "搜索已完成。",
            "上传已完成。",
            "重要的错误。"
          ]
        }
      ]
    },
    {
      "id": "cdktrapfocus",
      "partId": "angular",
      "order": 13,
      "title": "cdkTrapFocus",
      "summary": "把 Tab 键锁在某个区域内。模态框、底部面板和对话框必备——焦点跑到后面去，整个交互就崩了。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "把焦点锁在一个区域内。"
        },
        {
          "kind": "paragraph",
          "text": "适用于："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "模态框。",
            "底部弹出面板。",
            "对话框。"
          ]
        }
      ]
    },
    {
      "id": "exemplo-cdktrapfocus",
      "partId": "angular",
      "order": 14,
      "title": "cdkTrapFocus 示例",
      "summary": "在容器上加一个指令，就足以让 Tab 在它内部循环。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div cdkTrapFocus>\n\n...\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "focusmonitor",
      "partId": "angular",
      "order": 15,
      "title": "FocusMonitor",
      "summary": "告诉你焦点是怎么来的——鼠标、键盘、触摸还是编程方式。可以只在有帮助时才显示焦点环。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "识别焦点是通过什么方式到达元素的。"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "鼠标。",
            "键盘。",
            "触摸。",
            "编程方式。"
          ]
        }
      ]
    },
    {
      "id": "focuskeymanager",
      "partId": "angular",
      "order": 16,
      "title": "FocusKeyManager",
      "summary": "负责一组元素内部的方向键导航——选项卡、菜单、列表框和组合框。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "管理方向键导航。"
        },
        {
          "kind": "paragraph",
          "text": "广泛用于："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "选项卡。",
            "菜单。",
            "列表框。",
            "组合框。"
          ]
        }
      ]
    },
    {
      "id": "angular-material",
      "partId": "angular",
      "order": 17,
      "title": "Angular Material",
      "summary": "Material 已经替你实现了大部分无障碍能力——但这不代表不测试结果就是无障碍的。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Material 已经实现了相当一部分无障碍能力。"
        },
        {
          "kind": "paragraph",
          "text": "但仍然必须测试。"
        }
      ]
    },
    {
      "id": "matdialog",
      "partId": "angular",
      "order": 18,
      "title": "MatDialog",
      "summary": "自带 dialog 角色、焦点管理、ESC 关闭和遮罩层。",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "你能直接获得"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "dialog 角色。",
            "焦点管理。",
            "ESC 关闭。",
            "遮罩层。"
          ]
        }
      ]
    },
    {
      "id": "checklist-matdialog",
      "partId": "angular",
      "order": 19,
      "title": "MatDialog 检查清单",
      "summary": "即使用了 MatDialog 也要确认的四件事：标题、焦点进入、焦点归还、关闭按钮。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "它有标题吗？",
            "它会接收焦点吗？",
            "它会归还焦点吗？",
            "它有关闭按钮吗？"
          ]
        }
      ]
    },
    {
      "id": "mattabs",
      "partId": "angular",
      "order": 20,
      "title": "MatTabs",
      "summary": "实现了选项卡结构。仍然要确认方向键可用，并且两款屏幕阅读器都能读出当前选中的选项卡。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "实现了选项卡结构。"
        },
        {
          "kind": "paragraph",
          "text": "即便如此，仍需验证："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "方向键可用。",
            "TalkBack 朗读正确。",
            "VoiceOver 朗读正确。"
          ]
        }
      ]
    },
    {
      "id": "matmenu",
      "partId": "angular",
      "order": 21,
      "title": "MatMenu",
      "summary": "优先用 MatMenu，而不是手写菜单。菜单的键盘导航很容易在细节上出错。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "构建菜单时优先使用 MatMenu，而不是自己实现。"
        }
      ]
    },
    {
      "id": "matselect",
      "partId": "angular",
      "order": 22,
      "title": "MatSelect",
      "summary": "最容易出无障碍缺陷的组件。务必测试展开、收起、选项朗读和选中状态。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "最容易出无障碍缺陷的组件。"
        },
        {
          "kind": "paragraph",
          "text": "务必验证："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "展开。",
            "收起。",
            "选项如何被朗读。",
            "选中状态。"
          ]
        }
      ]
    },
    {
      "id": "matexpansionpanel",
      "partId": "angular",
      "order": 23,
      "title": "MatExpansionPanel",
      "summary": "Material 的折叠面板。检查 aria-expanded、焦点去向，以及状态变化是否被播报。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "相当于折叠面板。"
        },
        {
          "kind": "paragraph",
          "text": "需要检查："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "aria-expanded。",
            "焦点。",
            "状态如何被朗读。"
          ]
        }
      ]
    },
    {
      "id": "mattable",
      "partId": "angular",
      "order": 24,
      "title": "MatTable",
      "summary": "不要想当然地认为 Material 表格自动就是无障碍的。检查 caption、表头、排序和焦点。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "不要想当然地认为每个 Material 表格自动就是无障碍的。"
        },
        {
          "kind": "paragraph",
          "text": "需要验证："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "caption。",
            "表头。",
            "排序。",
            "焦点。"
          ]
        }
      ]
    },
    {
      "id": "overlay-components",
      "partId": "angular",
      "order": 25,
      "title": "浮层类组件",
      "summary": "所有会浮在页面之上打开的东西都值得额外注意：模态框、气泡卡片、工具提示、下拉选择、菜单和日期选择器。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "每一个浮在页面之上打开的组件都值得额外注意。"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "模态框。",
            "气泡卡片。",
            "工具提示。",
            "下拉选择。",
            "菜单。",
            "日期选择器。"
          ]
        }
      ]
    },
    {
      "id": "datepicker",
      "partId": "angular",
      "order": 26,
      "title": "日期选择器",
      "summary": "检查键盘导航，以及日、月、年是怎么被朗读的。日期选择器对键盘用户往往是无声地失效。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "需要验证："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "键盘导航。",
            "日如何被朗读。",
            "月如何被朗读。",
            "年如何被朗读。",
            "选择功能是否正常。"
          ]
        }
      ]
    },
    {
      "id": "loading-angular",
      "partId": "angular",
      "order": 27,
      "title": "Angular 中的加载状态",
      "summary": "状态变化必须被播报。一个只会转圈的加载图标，对使用屏幕阅读器的人什么都没说。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "状态变化必须被播报。"
        },
        {
          "kind": "code",
          "code": "aria-busy=\"true\"",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "或者："
        },
        {
          "kind": "code",
          "code": "this.live.announce(\n'Carregamento concluído'\n);",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "lazy-loading",
      "partId": "angular",
      "order": 28,
      "title": "懒加载",
      "summary": "当内容在异步加载之后才出现时，要有意识地决定焦点去哪里、播报什么。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "当内容在异步加载之后才出现时，焦点和播报都必须被考虑到。"
        }
      ]
    },
    {
      "id": "signals-e-acessibilidade",
      "partId": "angular",
      "order": 29,
      "title": "Signals 与无障碍",
      "summary": "Signals 会自动更新界面，但屏幕阅读器不会被自动通知。请使用 aria-live 或 LiveAnnouncer。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Signals 会自动更新界面。"
        },
        {
          "kind": "paragraph",
          "text": "但屏幕阅读器不会被自动通知。"
        },
        {
          "kind": "paragraph",
          "text": "请使用："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "aria-live",
            "LiveAnnouncer"
          ]
        }
      ]
    },
    {
      "id": "standalone-components",
      "partId": "angular",
      "order": 30,
      "title": "独立组件",
      "summary": "在无障碍方面没有任何特殊之处。原来的规则一条不变，照样适用。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "它们在无障碍方面没有特殊差异。"
        },
        {
          "kind": "paragraph",
          "text": "同样的规则依然适用。"
        }
      ]
    },
    {
      "id": "pipes",
      "partId": "angular",
      "order": 31,
      "title": "管道",
      "summary": "格式化可能会破坏朗读效果。检查货币、日期和数字实际是怎么被读出来的。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "小心那些会破坏朗读效果的格式化。"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "示例"
        },
        {
          "kind": "code",
          "code": "R$ 1.500,00",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "检查屏幕阅读器实际是怎么读的。"
        }
      ]
    },
    {
      "id": "custom-components",
      "partId": "angular",
      "order": 32,
      "title": "自定义组件",
      "summary": "Angular 中最大的无障碍缺陷来源：手写的按钮、下拉选择、下拉菜单、步骤条和菜单。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Angular 中最大的缺陷来源。"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "自定义按钮。",
            "自定义下拉选择。",
            "自定义下拉菜单。",
            "自定义步骤条。",
            "自定义菜单。"
          ]
        }
      ]
    },
    {
      "id": "regra-para-custom-components",
      "partId": "angular",
      "order": 33,
      "title": "自定义组件的规则",
      "summary": "从零开始写之前先问四个问题：有没有原生元素、有没有 Material 组件、有没有 Angular Aria 指令——以及你真的需要自己写吗？",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "永远先问："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "有对应的原生元素吗？",
            "有 Material 组件吗？",
            "有 Angular Aria 指令吗？",
            "我真的需要从零开始写吗？"
          ]
        }
      ]
    },
    {
      "id": "angular-aria",
      "partId": "angular",
      "order": 34,
      "title": "Angular Aria",
      "summary": "随 Angular v22 发布的官方 @angular/aria 包：一组实现 WAI-ARIA Authoring Practices 的无样式指令。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "2025 年 11 月，随着 Angular v22，Angular 团队发布了官方的 Angular Aria 包。"
        },
        {
          "kind": "code",
          "code": "npm install @angular/aria",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "这是一组实现 WAI-ARIA Authoring Practices 模式的无样式（headless）指令。它们负责键盘导航、ARIA 属性、焦点管理和屏幕阅读器支持。HTML 和样式由你来写。"
        },
        {
          "kind": "callout",
          "tone": "success",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "这是 Angular 历史上最重要的一次无障碍相关发布。组合框、列表框、菜单和树，正是手写时最容易出无障碍缺陷的组件——现在有了由框架团队维护、遵循规范的官方实现。"
            }
          ]
        },
        {
          "kind": "paragraph",
          "text": "在此之前，“我需要一个无障碍的组合框”的答案是“实现很复杂，不要手写”——却没有给出替代方案。现在有了。"
        }
      ]
    },
    {
      "id": "padroes-do-angular-aria",
      "partId": "angular",
      "order": 35,
      "title": "Angular Aria 的模式",
      "summary": "十三种模式，从组合框到网格。把这份清单和最容易出无障碍缺陷的组件清单对照一下——几乎是同一份。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "共有十三种可用的模式。"
        },
        {
          "kind": "table",
          "headers": [
            "指令",
            "用途"
          ],
          "rows": [
            [
              "ngCombobox",
              "与弹出层协同的文本输入框。"
            ],
            [
              "ngAutocomplete",
              "带筛选建议的输入框。"
            ],
            [
              "ngListbox",
              "选项列表，支持单选或多选。"
            ],
            [
              "ngSelect",
              "单选下拉框。"
            ],
            [
              "ngMultiselect",
              "多选下拉框。"
            ],
            [
              "ngMenu",
              "带子菜单的菜单。"
            ],
            [
              "ngMenubar",
              "水平导航栏。"
            ],
            [
              "ngToolbar",
              "一组控件。"
            ],
            [
              "ngTabs",
              "选项卡。"
            ],
            [
              "ngAccordion",
              "可展开面板。"
            ],
            [
              "ngTree",
              "可展开收起的层级列表。"
            ],
            [
              "ngGrid",
              "支持单元格导航的二维数据。"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "把它和 Angular 中最容易出无障碍缺陷的组件清单对照一下。几乎是同一份清单。"
        }
      ]
    },
    {
      "id": "angular-aria-material-ou-cdk",
      "partId": "angular",
      "order": 36,
      "title": "Angular Aria、Material 还是 CDK？",
      "summary": "三者共存，解决的是不同的问题：带样式的成品组件、无样式的行为、底层工具。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "三者共存，解决的是不同的问题。"
        },
        {
          "kind": "table",
          "headers": [
            "包",
            "你得到什么",
            "什么时候用"
          ],
          "rows": [
            [
              "Angular Material",
              "带样式的成品组件。",
              "Material 的外观符合产品需要。"
            ],
            [
              "Angular Aria",
              "只有行为，没有样式。",
              "有自己的设计系统，又不想重写键盘和 ARIA。"
            ],
            [
              "Angular CDK A11y",
              "底层工具。",
              "任何场景下的 LiveAnnouncer、FocusTrap 和 FocusMonitor。"
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "即使用了 Angular Aria，CDK A11y 仍然需要。用 LiveAnnouncer 播报“支付已完成”并不属于任何一种控件模式。"
        }
      ]
    },
    {
      "id": "o-que-o-angular-aria-nao-resolve",
      "partId": "angular",
      "order": 37,
      "title": "Angular Aria 解决不了什么",
      "summary": "它覆盖的是控件模式。而生产环境中的大多数缺陷是可点击的 div、没有名称的图标和丢失的焦点——这些它一个都碰不到。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "这个库解决的是控件模式。而生产环境中的大多数无障碍缺陷并不是复杂控件。"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "用可点击的 div 代替按钮。",
            "可点击的图标没有无障碍名称。",
            "输入框只有占位符。",
            "表单错误从未被播报。",
            "路由切换后焦点丢失。",
            "标题层级顺序错乱。",
            "对比度不足。",
            "图片没有替代文本。",
            "表格没有关联表头。"
          ]
        },
        {
          "kind": "callout",
          "tone": "warning",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "无样式指令意味着 HTML 和 CSS 都由你来写。你完全可以用了 Angular Aria，却仍然交付一个无法使用的页面：焦点看不见、对比度不够、DOM 顺序和视觉顺序对不上。"
            }
          ]
        },
        {
          "kind": "paragraph",
          "text": "这个库消除的是一类错误。它不能替代对这门知识的理解，也不能替代用 TalkBack 和 VoiceOver 做的测试。"
        }
      ]
    },
    {
      "id": "erro-mais-comum-do-time-front",
      "partId": "angular",
      "order": 38,
      "title": "前端团队最常犯的错误",
      "summary": "一个带点击事件的 div。它在视觉上能用，却同时丢掉了角色、键盘、状态和语义。",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\n(click)=\"abrir()\">\n\n展开\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "它在视觉上是能用的。"
        },
        {
          "kind": "paragraph",
          "text": "但它丢掉了："
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "角色。",
            "键盘。",
            "状态。",
            "语义。"
          ]
        }
      ]
    },
    {
      "id": "checklist-angular",
      "partId": "angular",
      "order": 39,
      "title": "Angular 检查清单",
      "summary": "十个问题，覆盖语义、无障碍名称、焦点管理、路由行为、Material 和自定义组件。",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "HTML 是语义化的吗？",
            "有无障碍名称吗？",
            "焦点被管理了吗？",
            "重要变化会被播报吗？",
            "路由跳转后焦点处理正确吗？",
            "Material 部分验证过了吗？",
            "自定义组件审查过了吗？",
            "只用键盘能操作吗？",
            "在 TalkBack 下能用吗？",
            "在 VoiceOver 下能用吗？"
          ]
        }
      ]
    }
  ]
};
