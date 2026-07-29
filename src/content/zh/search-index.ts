// GERADO por scripts/build-locale.js zh — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.zh.json

import type { SearchEntry } from '../types';

export const searchIndex: SearchEntry[] = [
  {
    "id": "fundamentos/o-que-e-acessibilidade",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "o-que-e-acessibilidade",
    "sectionTitle": "什么是无障碍？",
    "text": "无障碍是数字产品能被每一个人使用的能力，无论其存在视觉、听觉、运动、认知还是暂时性的限制。 用户示例： 使用 TalkBack 的视障人士。 使用 VoiceOver 的视障人士。 使用缩放功能的低视力人士。 使用键盘的行动不便人士。 有认知障碍的人士。 手臂受伤、只能单手操作的人。",
    "keywords": []
  },
  {
    "id": "fundamentos/wcag-2-2",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "wcag-2-2",
    "sectionTitle": "WCAG 2.2",
    "text": "WCAG（Web Content Accessibility Guidelines，网页内容无障碍指南）是全球评估数字无障碍最通用的一套准则。 符合级别 级别 说明 A 最低要求。 AA 大多数企业采用的级别。 AAA 最严格的级别。",
    "keywords": []
  },
  {
    "id": "fundamentos/pour",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "pour",
    "sectionTitle": "POUR 四原则",
    "text": "每一条 WCAG 准则都源自四大支柱： P — 可感知 用户必须能够感知内容。 图片需要替代文本。 信息不能只靠颜色传达。 O — 可操作 界面必须是可操作的。 能用键盘操作。 能配合屏幕阅读器使用。 U — 可理解 流程保持一致。 信息表达清晰。 错误容易理解。 R — 健壮性 能与辅助技术协同工作。 语义化 HTML。 正确的 ARIA。",
    "keywords": []
  },
  {
    "id": "fundamentos/leitores-de-tela-2",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "leitores-de-tela-2",
    "sectionTitle": "屏幕阅读器",
    "text": "TalkBack Android 的原生屏幕阅读器。 VoiceOver iOS 的原生屏幕阅读器。 它们需要什么才能正常工作？ 无障碍名称。 正确的角色。 正确的状态。 示例 保存，按钮",
    "keywords": []
  },
  {
    "id": "fundamentos/como-um-leitor-de-tela-enxerga-uma-pagina",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "como-um-leitor-de-tela-enxerga-uma-pagina",
    "sectionTitle": "屏幕阅读器是怎么“看”页面的？",
    "text": "这些用户看界面的方式和视力正常的人完全不同。 他们通过以下方式导航： 标题。 按钮。 链接。 字段。 地标。 一个视觉上完美的页面，用屏幕阅读器可能完全无法使用。",
    "keywords": []
  },
  {
    "id": "fundamentos/regra-de-ouro-da-acessibilidade",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "regra-de-ouro-da-acessibilidade",
    "sectionTitle": "无障碍的黄金法则",
    "text": "HTML 优先 在动用 ARIA 之前，永远优先使用语义化 HTML。 如果原生 HTML 标签能解决问题，就用它。",
    "keywords": []
  },
  {
    "id": "fundamentos/estrutura-semantica-basica",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "estrutura-semantica-basica",
    "sectionTitle": "基本语义结构",
    "text": "",
    "keywords": []
  },
  {
    "id": "fundamentos/landmarks",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "landmarks",
    "sectionTitle": "地标",
    "text": "地标让屏幕阅读器能够在页面的重要区域之间快速导航。 标签 用途 header 页头。 nav 导航。 main 主要内容。 aside 补充内容。 footer 页脚。",
    "keywords": []
  },
  {
    "id": "fundamentos/headings",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "headings",
    "sectionTitle": "标题层级",
    "text": "标题构成一棵导航树。",
    "keywords": []
  },
  {
    "id": "fundamentos/accessible-name",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "accessible-name",
    "sectionTitle": "无障碍名称",
    "text": "每个可交互元素都必须有无障碍名称。 可见文本 继续，按钮 aria-label 关闭模态框，按钮",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "fundamentos/accessible-description",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "accessible-description",
    "sectionTitle": "无障碍描述",
    "text": "屏幕阅读器会把字段名称和它的描述合在一起朗读。",
    "keywords": [
      "aria-describedby"
    ]
  },
  {
    "id": "fundamentos/nome-role-estado",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "nome-role-estado",
    "sectionTitle": "名称 + 角色 + 状态",
    "text": "几乎任何屏幕阅读器分析都可以归结为三个问题： 问题 示例 名称是什么？ 保存 角色是什么？ 按钮 状态是什么？ 已禁用 示例 保存，按钮，已禁用",
    "keywords": []
  },
  {
    "id": "fundamentos/erros-mais-comuns-encontrados-em-angular",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "erros-mais-comuns-encontrados-em-angular",
    "sectionTitle": "Angular 中最常见的错误",
    "text": "用可点击的 div 冒充按钮。 可点击的图标没有 aria-label。 输入框只有占位符。 没有主标题。 模态框不管理焦点。 表单错误从来没有被朗读出来。 滥用 ARIA。 链接的行为像按钮。 按钮的行为像链接。 使用正数 tabindex。",
    "keywords": [
      "aria-label",
      "tabindex"
    ]
  },
  {
    "id": "fundamentos/mentalidade-para-o-time-angular",
    "partId": "fundamentos",
    "partTitle": "Angular 无障碍基础",
    "sectionId": "mentalidade-para-o-time-angular",
    "sectionTitle": "Angular 团队应有的思维方式",
    "text": "在做任何组件之前，先问自己： 有没有对应的原生 HTML 标签？ 这个元素有无障碍名称吗？ 它能用键盘操作吗？ 它在 TalkBack 下能用吗？ 它在 VoiceOver 下能用吗？",
    "keywords": []
  },
  {
    "id": "aria/o-que-e-aria",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "o-que-e-aria",
    "sectionTitle": "什么是 ARIA？",
    "text": "ARIA 的全称是： ARIA 的存在是为了补充 HTML 语义。 ARIA 不能取代语义化 HTML。",
    "keywords": [
      "role:button"
    ]
  },
  {
    "id": "aria/regra-de-ouro",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "regra-de-ouro",
    "sectionTitle": "黄金法则",
    "text": "如果原生 HTML 能解决，就不要无缘无故加 ARIA。",
    "keywords": []
  },
  {
    "id": "aria/accessible-name-2",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "accessible-name-2",
    "sectionTitle": "无障碍名称",
    "text": "每个可交互元素都必须有无障碍名称。 元素内文本 继续，按钮",
    "keywords": []
  },
  {
    "id": "aria/aria-label",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-label",
    "sectionTitle": "aria-label",
    "text": "属性 取值 用途 aria-label 字符串 设置无障碍名称。 什么时候用 纯图标按钮。 没有可见文字的操作。 自定义元素。 示例 关闭模态框，按钮",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "aria/aria-labelledby",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-labelledby",
    "sectionTitle": "aria-labelledby",
    "text": "取值 用途 id 用另一个元素作为名称。",
    "keywords": [
      "aria-labelledby"
    ]
  },
  {
    "id": "aria/aria-describedby",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-describedby",
    "sectionTitle": "aria-describedby",
    "text": "补充一段说明性描述。",
    "keywords": [
      "aria-describedby"
    ]
  },
  {
    "id": "aria/aria-hidden",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-hidden",
    "sectionTitle": "aria-hidden",
    "text": "取值 用途 true 对屏幕阅读器隐藏。 false 对屏幕阅读器暴露。 装饰性图片",
    "keywords": [
      "aria-hidden"
    ]
  },
  {
    "id": "aria/aria-expanded",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-expanded",
    "sectionTitle": "aria-expanded",
    "text": "表示展开状态。 详情，按钮，已收起",
    "keywords": [
      "aria-expanded"
    ]
  },
  {
    "id": "aria/aria-controls",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-controls",
    "sectionTitle": "aria-controls",
    "text": "把控件和一块内容连接起来。",
    "keywords": [
      "aria-controls",
      "aria-expanded"
    ]
  },
  {
    "id": "aria/aria-current",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-current",
    "sectionTitle": "aria-current",
    "text": "取值 用途 page 当前页面。 step 当前步骤。 location 当前位置。 步骤条",
    "keywords": [
      "aria-current"
    ]
  },
  {
    "id": "aria/aria-selected",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-selected",
    "sectionTitle": "aria-selected",
    "text": "表示选中状态。",
    "keywords": [
      "aria-selected",
      "role:tab"
    ]
  },
  {
    "id": "aria/aria-checked",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-checked",
    "sectionTitle": "aria-checked",
    "text": "我同意，复选框，已勾选",
    "keywords": [
      "aria-checked",
      "role:checkbox"
    ]
  },
  {
    "id": "aria/aria-pressed",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-pressed",
    "sectionTitle": "aria-pressed",
    "text": "切换型按钮。",
    "keywords": [
      "aria-pressed"
    ]
  },
  {
    "id": "aria/aria-disabled",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-disabled",
    "sectionTitle": "aria-disabled",
    "text": "继续，按钮，不可用",
    "keywords": [
      "aria-disabled"
    ]
  },
  {
    "id": "aria/aria-required",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-required",
    "sectionTitle": "aria-required",
    "text": "必填字段",
    "keywords": [
      "aria-required"
    ]
  },
  {
    "id": "aria/aria-invalid",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-invalid",
    "sectionTitle": "aria-invalid",
    "text": "无效字段",
    "keywords": [
      "aria-invalid"
    ]
  },
  {
    "id": "aria/aria-live",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-live",
    "sectionTitle": "aria-live",
    "text": "取值 用途 off 不朗读。 polite 在停顿时朗读。 assertive 立即朗读。 提示消息",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "aria/aria-atomic",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-atomic",
    "sectionTitle": "aria-atomic",
    "text": "控制重读的范围。",
    "keywords": [
      "aria-atomic",
      "aria-live"
    ]
  },
  {
    "id": "aria/aria-busy",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-busy",
    "sectionTitle": "aria-busy",
    "text": "表示正在加载。",
    "keywords": [
      "aria-busy"
    ]
  },
  {
    "id": "aria/aria-modal",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
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
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-haspopup",
    "sectionTitle": "aria-haspopup",
    "text": "取值 用途 menu 打开菜单。 dialog 打开模态框。 listbox 打开列表。",
    "keywords": [
      "aria-haspopup"
    ]
  },
  {
    "id": "aria/aria-para-progress-bar",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "aria-para-progress-bar",
    "sectionTitle": "进度条的 ARIA",
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
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "principais-roles",
    "sectionTitle": "真正会用到的角色",
    "text": "角色 用途 button 按钮。 link 链接。 dialog 模态框。 alert 紧急消息。 status 信息性状态。 tablist 选项卡容器。 tab 选项卡。 tabpanel 选项卡内容。 checkbox 复选框。 switch 开与关。 menu 菜单。 menuitem 菜单项。 listbox 可选择的列表。 option 选项。",
    "keywords": []
  },
  {
    "id": "aria/roles-que-voce-quase-nunca-precisara",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "roles-que-voce-quase-nunca-precisara",
    "sectionTitle": "几乎永远用不上的角色",
    "text": "tree treegrid feed math meter log marquee 没有真实需求就不要使用它们。",
    "keywords": []
  },
  {
    "id": "aria/angular-attribute-binding",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "angular-attribute-binding",
    "sectionTitle": "Angular 属性绑定",
    "text": "这样写也可以",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "aria/erros-mais-comuns-com-aria",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "erros-mais-comuns-com-aria",
    "sectionTitle": "最常见的 ARIA 错误",
    "text": "给 button 再加一个 role=\"button\"。 加上根本不需要的 aria-label。 给重要内容加 aria-hidden。 实时区域太多。 aria-expanded 状态不再跟随实际情况。 aria-describedby 指向一个不存在的 id。 自定义组件完全不支持键盘。",
    "keywords": [
      "aria-label",
      "aria-hidden",
      "aria-live",
      "aria-expanded",
      "aria-describedby",
      "role:button"
    ]
  },
  {
    "id": "aria/checklist-aria",
    "partId": "aria",
    "partTitle": "Angular 完整 ARIA 指南",
    "sectionId": "checklist-aria",
    "sectionTitle": "ARIA 检查清单",
    "text": "它有无障碍名称吗？ 它的角色正确吗？ 它的状态正确吗？ 它和 DOM 保持同步吗？ TalkBack 朗读得正确吗？ VoiceOver 朗读得正确吗？",
    "keywords": []
  },
  {
    "id": "formularios/label",
    "partId": "formularios",
    "partTitle": "无障碍表单",
    "sectionId": "label",
    "sectionTitle": "标签",
    "text": "姓名，编辑框",
    "keywords": []
  },
  {
    "id": "formularios/placeholder-nao-e-label",
    "partId": "formularios",
    "partTitle": "无障碍表单",
    "sectionId": "placeholder-nao-e-label",
    "sectionTitle": "占位符不是标签",
    "text": "填写字段时占位符会消失。 当它是名称的唯一来源时，屏幕阅读器的行为也可能不一致。",
    "keywords": []
  },
  {
    "id": "formularios/campos-obrigatorios",
    "partId": "formularios",
    "partTitle": "无障碍表单",
    "sectionId": "campos-obrigatorios",
    "sectionTitle": "必填字段",
    "text": "原生 HTML 使用 ARIA 必填字段",
    "keywords": [
      "aria-required"
    ]
  },
  {
    "id": "formularios/mensagens-de-ajuda",
    "partId": "formularios",
    "partTitle": "无障碍表单",
    "sectionId": "mensagens-de-ajuda",
    "sectionTitle": "帮助信息",
    "text": "使用 aria-describedby。",
    "keywords": [
      "aria-describedby"
    ]
  },
  {
    "id": "formularios/validacao-de-erro",
    "partId": "formularios",
    "partTitle": "无障碍表单",
    "sectionId": "validacao-de-erro",
    "sectionTitle": "错误校验",
    "text": "无效字段",
    "keywords": [
      "aria-invalid"
    ]
  },
  {
    "id": "formularios/erro-associado-ao-campo",
    "partId": "formularios",
    "partTitle": "无障碍表单",
    "sectionId": "erro-associado-ao-campo",
    "sectionTitle": "把错误绑定到字段",
    "text": "身份证号 无效字段 身份证号无效",
    "keywords": [
      "aria-invalid",
      "aria-describedby"
    ]
  },
  {
    "id": "formularios/erro-dinamico-com-aria-live",
    "partId": "formularios",
    "partTitle": "无障碍表单",
    "sectionId": "erro-dinamico-com-aria-live",
    "sectionTitle": "用 aria-live 处理动态错误",
    "text": "",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "componentes/botoes",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "botoes",
    "sectionTitle": "按钮",
    "text": "继续，按钮",
    "keywords": []
  },
  {
    "id": "componentes/botao-apenas-com-icone",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "botao-apenas-com-icone",
    "sectionTitle": "纯图标按钮",
    "text": "编辑地址，按钮",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "componentes/links",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "links",
    "sectionTitle": "链接",
    "text": "链接用于跳转。按钮用于执行操作。",
    "keywords": []
  },
  {
    "id": "componentes/cards-clicaveis",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "cards-clicaveis",
    "sectionTitle": "可点击卡片",
    "text": "替代写法",
    "keywords": []
  },
  {
    "id": "componentes/accordion",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "accordion",
    "sectionTitle": "折叠面板",
    "text": "它是怎么运作的？ 按钮 已收起",
    "keywords": [
      "aria-expanded",
      "aria-controls"
    ]
  },
  {
    "id": "componentes/accordion-com-angular",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "accordion-com-angular",
    "sectionTitle": "Angular 中的折叠面板",
    "text": "aria-expanded 必须反映真实状态。",
    "keywords": [
      "aria-expanded"
    ]
  },
  {
    "id": "componentes/tabs",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "tabs",
    "sectionTitle": "选项卡",
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
    "partTitle": "交互组件与复杂结构",
    "sectionId": "tab-panel",
    "sectionTitle": "选项卡面板",
    "text": "",
    "keywords": [
      "role:tabpanel"
    ]
  },
  {
    "id": "componentes/modal",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "modal",
    "sectionTitle": "模态框",
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
    "partTitle": "交互组件与复杂结构",
    "sectionId": "checklist-modal",
    "sectionTitle": "模态框检查清单",
    "text": "有 role=\"dialog\" 吗？ 有 aria-modal 吗？ 打开时会接收焦点吗？ 焦点被锁在里面了吗？ 按 ESC 会关闭吗？ 关闭时会把焦点还回去吗？",
    "keywords": [
      "aria-modal",
      "role:dialog"
    ]
  },
  {
    "id": "componentes/bottom-sheet",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "bottom-sheet",
    "sectionTitle": "底部弹出面板",
    "text": "把它当作模态框来对待。",
    "keywords": [
      "aria-modal",
      "role:dialog"
    ]
  },
  {
    "id": "componentes/menu",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "menu",
    "sectionTitle": "菜单",
    "text": "",
    "keywords": [
      "aria-haspopup",
      "aria-expanded"
    ]
  },
  {
    "id": "componentes/itens-de-menu",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "itens-de-menu",
    "sectionTitle": "菜单项",
    "text": "",
    "keywords": [
      "role:menu",
      "role:menuitem"
    ]
  },
  {
    "id": "componentes/dropdown",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "dropdown",
    "sectionTitle": "下拉选择",
    "text": "只要可能，就优先使用原生 select。",
    "keywords": []
  },
  {
    "id": "componentes/combobox",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "combobox",
    "sectionTitle": "组合框",
    "text": "实现复杂。不要手写——参见 Angular Aria。",
    "keywords": [
      "aria-expanded",
      "role:combobox"
    ]
  },
  {
    "id": "componentes/lista",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "lista",
    "sectionTitle": "列表",
    "text": "列表，共 2 项",
    "keywords": []
  },
  {
    "id": "componentes/breadcrumb",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "breadcrumb",
    "sectionTitle": "面包屑",
    "text": "当前项",
    "keywords": [
      "aria-label",
      "aria-current"
    ]
  },
  {
    "id": "componentes/stepper",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "stepper",
    "sectionTitle": "步骤条",
    "text": "支付 当前步骤",
    "keywords": [
      "aria-current"
    ]
  },
  {
    "id": "componentes/tabela-simples",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "tabela-simples",
    "sectionTitle": "简单表格",
    "text": "",
    "keywords": []
  },
  {
    "id": "componentes/tabela-boas-praticas",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "tabela-boas-praticas",
    "sectionTitle": "表格最佳实践",
    "text": "使用 caption。 使用 th。 使用 scope。 避免用 div 拼表格。",
    "keywords": []
  },
  {
    "id": "componentes/tooltip",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "tooltip",
    "sectionTitle": "工具提示",
    "text": "",
    "keywords": [
      "aria-describedby",
      "role:tooltip"
    ]
  },
  {
    "id": "componentes/toast",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "toast",
    "sectionTitle": "轻提示",
    "text": "",
    "keywords": [
      "role:status"
    ]
  },
  {
    "id": "componentes/snackbar",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "snackbar",
    "sectionTitle": "消息条",
    "text": "",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "componentes/alertas-criticos",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "alertas-criticos",
    "sectionTitle": "紧急警告",
    "text": "立即朗读。",
    "keywords": [
      "role:alert"
    ]
  },
  {
    "id": "componentes/loading",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "loading",
    "sectionTitle": "加载中",
    "text": "",
    "keywords": [
      "aria-busy"
    ]
  },
  {
    "id": "componentes/progress-bar",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "progress-bar",
    "sectionTitle": "进度条",
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
    "partTitle": "交互组件与复杂结构",
    "sectionId": "skeleton-loading",
    "sectionTitle": "骨架屏",
    "text": "视觉占位应当被屏幕阅读器忽略。",
    "keywords": [
      "aria-hidden"
    ]
  },
  {
    "id": "componentes/carrossel",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "carrossel",
    "sectionTitle": "轮播",
    "text": "上一张按钮。 下一张按钮。 暂停按钮。 可识别的幻灯片。",
    "keywords": []
  },
  {
    "id": "componentes/infinite-scroll",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "infinite-scroll",
    "sectionTitle": "无限滚动",
    "text": "朗读新加载的项目。 保持焦点位置。 避免突兀的位移。",
    "keywords": []
  },
  {
    "id": "componentes/drag-and-drop",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "drag-and-drop",
    "sectionTitle": "拖放",
    "text": "永远不要只依赖手势。 始终提供点击或键盘的替代方式。",
    "keywords": []
  },
  {
    "id": "componentes/upload-de-arquivo",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "upload-de-arquivo",
    "sectionTitle": "文件上传",
    "text": "",
    "keywords": []
  },
  {
    "id": "componentes/mensagens-dinamicas",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "mensagens-dinamicas",
    "sectionTitle": "动态消息",
    "text": "常见用途： 轻提示。 筛选已生效。 搜索已完成。 支付已通过。 上传已完成。",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "componentes/checklist-de-componentes",
    "partId": "componentes",
    "partTitle": "交互组件与复杂结构",
    "sectionId": "checklist-de-componentes",
    "sectionTitle": "组件检查清单",
    "text": "它有无障碍名称吗？ 它的角色正确吗？ 它的状态正确吗？ 它能用键盘操作吗？ 焦点看得见吗？ 它在 TalkBack 下能用吗？ 它在 VoiceOver 下能用吗？ 重要变化会被朗读出来吗？ 焦点顺序合理吗？",
    "keywords": []
  },
  {
    "id": "angular/angular-e-acessivel-por-padrao",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "angular-e-acessivel-por-padrao",
    "sectionTitle": "Angular 默认就是无障碍的吗？",
    "text": "不是。 Angular 渲染的是你写的 HTML。如果 HTML 是无障碍的，应用往往也是无障碍的。如果 HTML 很糟，Angular 不会替你修好。",
    "keywords": []
  },
  {
    "id": "angular/regra-principal-para-angular",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "regra-principal-para-angular",
    "sectionTitle": "Angular 的首要规则",
    "text": "",
    "keywords": []
  },
  {
    "id": "angular/binding-de-aria",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "binding-de-aria",
    "sectionTitle": "绑定 ARIA",
    "text": "当值是动态的时： 折叠面板",
    "keywords": [
      "aria-label",
      "aria-expanded"
    ]
  },
  {
    "id": "angular/ngif-e-foco",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "ngif-e-foco",
    "sectionTitle": "NgIf 与焦点",
    "text": "最常见的问题之一。 元素离开 DOM 时，焦点可能会丢失。",
    "keywords": [
      "ngIf"
    ]
  },
  {
    "id": "angular/ngfor-e-acessibilidade",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "ngfor-e-acessibilidade",
    "sectionTitle": "NgFor 与无障碍",
    "text": "优先使用语义化结构。",
    "keywords": [
      "ngFor"
    ]
  },
  {
    "id": "angular/router-angular",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "router-angular",
    "sectionTitle": "Angular 路由",
    "text": "SPA 应用不会重新加载页面。 屏幕阅读器不会自动察觉画面已经变了。",
    "keywords": []
  },
  {
    "id": "angular/foco-apos-navegacao",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "foco-apos-navegacao",
    "sectionTitle": "跳转后的焦点",
    "text": "跳转之后： 把焦点移到 h1。 或者移到主内容区。",
    "keywords": []
  },
  {
    "id": "angular/exemplo-de-destino-de-foco",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "exemplo-de-destino-de-foco",
    "sectionTitle": "焦点目标的实际写法",
    "text": "",
    "keywords": [
      "tabindex"
    ]
  },
  {
    "id": "angular/anunciar-mudancas-de-tela",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "anunciar-mudancas-de-tela",
    "sectionTitle": "播报页面切换",
    "text": "在 Angular 应用中，通常会播报页面的名称。",
    "keywords": []
  },
  {
    "id": "angular/angular-cdk-accessibility",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "angular-cdk-accessibility",
    "sectionTitle": "Angular CDK Accessibility",
    "text": "Angular 技术栈中对无障碍最重要的一个包。 LiveAnnouncer FocusMonitor FocusTrap FocusKeyManager InteractivityChecker",
    "keywords": [
      "LiveAnnouncer",
      "FocusMonitor",
      "FocusTrap",
      "FocusKeyManager",
      "InteractivityChecker"
    ]
  },
  {
    "id": "angular/liveannouncer",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "liveannouncer",
    "sectionTitle": "LiveAnnouncer",
    "text": "用来创建面向屏幕阅读器的播报。",
    "keywords": [
      "LiveAnnouncer"
    ]
  },
  {
    "id": "angular/quando-usar-liveannouncer",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "quando-usar-liveannouncer",
    "sectionTitle": "什么时候用 LiveAnnouncer",
    "text": "支付已完成。 筛选已生效。 搜索已完成。 上传已完成。 重要的错误。",
    "keywords": [
      "LiveAnnouncer"
    ]
  },
  {
    "id": "angular/cdktrapfocus",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "cdktrapfocus",
    "sectionTitle": "cdkTrapFocus",
    "text": "把焦点锁在一个区域内。 适用于： 模态框。 底部弹出面板。 对话框。",
    "keywords": [
      "cdkTrapFocus"
    ]
  },
  {
    "id": "angular/exemplo-cdktrapfocus",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "exemplo-cdktrapfocus",
    "sectionTitle": "cdkTrapFocus 示例",
    "text": "",
    "keywords": [
      "cdkTrapFocus"
    ]
  },
  {
    "id": "angular/focusmonitor",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "focusmonitor",
    "sectionTitle": "FocusMonitor",
    "text": "识别焦点是通过什么方式到达元素的。 鼠标。 键盘。 触摸。 编程方式。",
    "keywords": [
      "FocusMonitor"
    ]
  },
  {
    "id": "angular/focuskeymanager",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "focuskeymanager",
    "sectionTitle": "FocusKeyManager",
    "text": "管理方向键导航。 广泛用于： 选项卡。 菜单。 列表框。 组合框。",
    "keywords": [
      "FocusKeyManager"
    ]
  },
  {
    "id": "angular/angular-material",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "angular-material",
    "sectionTitle": "Angular Material",
    "text": "Material 已经实现了相当一部分无障碍能力。 但仍然必须测试。",
    "keywords": []
  },
  {
    "id": "angular/matdialog",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "matdialog",
    "sectionTitle": "MatDialog",
    "text": "你能直接获得 dialog 角色。 焦点管理。 ESC 关闭。 遮罩层。",
    "keywords": [
      "MatDialog"
    ]
  },
  {
    "id": "angular/checklist-matdialog",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "checklist-matdialog",
    "sectionTitle": "MatDialog 检查清单",
    "text": "它有标题吗？ 它会接收焦点吗？ 它会归还焦点吗？ 它有关闭按钮吗？",
    "keywords": [
      "MatDialog"
    ]
  },
  {
    "id": "angular/mattabs",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "mattabs",
    "sectionTitle": "MatTabs",
    "text": "实现了选项卡结构。 即便如此，仍需验证： 方向键可用。 TalkBack 朗读正确。 VoiceOver 朗读正确。",
    "keywords": [
      "MatTabs"
    ]
  },
  {
    "id": "angular/matmenu",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "matmenu",
    "sectionTitle": "MatMenu",
    "text": "构建菜单时优先使用 MatMenu，而不是自己实现。",
    "keywords": [
      "MatMenu"
    ]
  },
  {
    "id": "angular/matselect",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "matselect",
    "sectionTitle": "MatSelect",
    "text": "最容易出无障碍缺陷的组件。 务必验证： 展开。 收起。 选项如何被朗读。 选中状态。",
    "keywords": [
      "MatSelect"
    ]
  },
  {
    "id": "angular/matexpansionpanel",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "matexpansionpanel",
    "sectionTitle": "MatExpansionPanel",
    "text": "相当于折叠面板。 需要检查： aria-expanded。 焦点。 状态如何被朗读。",
    "keywords": [
      "aria-expanded",
      "MatExpansionPanel"
    ]
  },
  {
    "id": "angular/mattable",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "mattable",
    "sectionTitle": "MatTable",
    "text": "不要想当然地认为每个 Material 表格自动就是无障碍的。 需要验证： caption。 表头。 排序。 焦点。",
    "keywords": [
      "MatTable"
    ]
  },
  {
    "id": "angular/overlay-components",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "overlay-components",
    "sectionTitle": "浮层类组件",
    "text": "每一个浮在页面之上打开的组件都值得额外注意。 模态框。 气泡卡片。 工具提示。 下拉选择。 菜单。 日期选择器。",
    "keywords": []
  },
  {
    "id": "angular/datepicker",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "datepicker",
    "sectionTitle": "日期选择器",
    "text": "需要验证： 键盘导航。 日如何被朗读。 月如何被朗读。 年如何被朗读。 选择功能是否正常。",
    "keywords": []
  },
  {
    "id": "angular/loading-angular",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "loading-angular",
    "sectionTitle": "Angular 中的加载状态",
    "text": "状态变化必须被播报。 或者：",
    "keywords": [
      "aria-busy"
    ]
  },
  {
    "id": "angular/lazy-loading",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "lazy-loading",
    "sectionTitle": "懒加载",
    "text": "当内容在异步加载之后才出现时，焦点和播报都必须被考虑到。",
    "keywords": []
  },
  {
    "id": "angular/signals-e-acessibilidade",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "signals-e-acessibilidade",
    "sectionTitle": "Signals 与无障碍",
    "text": "Signals 会自动更新界面。 但屏幕阅读器不会被自动通知。 请使用： aria-live LiveAnnouncer",
    "keywords": [
      "aria-live",
      "Signals",
      "LiveAnnouncer"
    ]
  },
  {
    "id": "angular/standalone-components",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "standalone-components",
    "sectionTitle": "独立组件",
    "text": "它们在无障碍方面没有特殊差异。 同样的规则依然适用。",
    "keywords": []
  },
  {
    "id": "angular/pipes",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "pipes",
    "sectionTitle": "管道",
    "text": "小心那些会破坏朗读效果的格式化。 示例 检查屏幕阅读器实际是怎么读的。",
    "keywords": []
  },
  {
    "id": "angular/custom-components",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "custom-components",
    "sectionTitle": "自定义组件",
    "text": "Angular 中最大的缺陷来源。 自定义按钮。 自定义下拉选择。 自定义下拉菜单。 自定义步骤条。 自定义菜单。",
    "keywords": []
  },
  {
    "id": "angular/regra-para-custom-components",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "regra-para-custom-components",
    "sectionTitle": "自定义组件的规则",
    "text": "永远先问： 有对应的原生元素吗？ 有 Material 组件吗？ 有 Angular Aria 指令吗？ 我真的需要从零开始写吗？",
    "keywords": []
  },
  {
    "id": "angular/angular-aria",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "angular-aria",
    "sectionTitle": "Angular Aria",
    "text": "2025 年 11 月，随着 Angular v22，Angular 团队发布了官方的 Angular Aria 包。 这是一组实现 WAI-ARIA Authoring Practices 模式的无样式（headless）指令。它们负责键盘导航、ARIA 属性、焦点管理和屏幕阅读器支持。HTML 和样式由你来写。 这是 Angular 历史上最重要的一次无障碍相关发布。组合框、列表框、菜单和树，正是手写时最容易出无障碍缺陷的组件——现在有了由框架团队维护、遵循规范的官方实现。 在此之前，“我需要一个无障碍的组合框”的答案是“实现很复杂，不要手写”——却没有给出替代方案。现在有了。",
    "keywords": []
  },
  {
    "id": "angular/padroes-do-angular-aria",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "padroes-do-angular-aria",
    "sectionTitle": "Angular Aria 的模式",
    "text": "共有十三种可用的模式。 指令 用途 ngCombobox 与弹出层协同的文本输入框。 ngAutocomplete 带筛选建议的输入框。 ngListbox 选项列表，支持单选或多选。 ngSelect 单选下拉框。 ngMultiselect 多选下拉框。 ngMenu 带子菜单的菜单。 ngMenubar 水平导航栏。 ngToolbar 一组控件。 ngTabs 选项卡。 ngAccordion 可展开面板。 ngTree 可展开收起的层级列表。 ngGrid 支持单元格导航的二维数据。 把它和 Angular 中最容易出无障碍缺陷的组件清单对照一下。几乎是同一份清单。",
    "keywords": []
  },
  {
    "id": "angular/angular-aria-material-ou-cdk",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "angular-aria-material-ou-cdk",
    "sectionTitle": "Angular Aria、Material 还是 CDK？",
    "text": "三者共存，解决的是不同的问题。 包 你得到什么 什么时候用 Angular Material 带样式的成品组件。 Material 的外观符合产品需要。 Angular Aria 只有行为，没有样式。 有自己的设计系统，又不想重写键盘和 ARIA。 Angular CDK A11y 底层工具。 任何场景下的 LiveAnnouncer、FocusTrap 和 FocusMonitor。 即使用了 Angular Aria，CDK A11y 仍然需要。用 LiveAnnouncer 播报“支付已完成”并不属于任何一种控件模式。",
    "keywords": [
      "LiveAnnouncer",
      "FocusTrap",
      "FocusMonitor"
    ]
  },
  {
    "id": "angular/o-que-o-angular-aria-nao-resolve",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "o-que-o-angular-aria-nao-resolve",
    "sectionTitle": "Angular Aria 解决不了什么",
    "text": "这个库解决的是控件模式。而生产环境中的大多数无障碍缺陷并不是复杂控件。 用可点击的 div 代替按钮。 可点击的图标没有无障碍名称。 输入框只有占位符。 表单错误从未被播报。 路由切换后焦点丢失。 标题层级顺序错乱。 对比度不足。 图片没有替代文本。 表格没有关联表头。 无样式指令意味着 HTML 和 CSS 都由你来写。你完全可以用了 Angular Aria，却仍然交付一个无法使用的页面：焦点看不见、对比度不够、DOM 顺序和视觉顺序对不上。 这个库消除的是一类错误。它不能替代对这门知识的理解，也不能替代用 TalkBack 和 VoiceOver 做的测试。",
    "keywords": []
  },
  {
    "id": "angular/erro-mais-comum-do-time-front",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "erro-mais-comum-do-time-front",
    "sectionTitle": "前端团队最常犯的错误",
    "text": "它在视觉上是能用的。 但它丢掉了： 角色。 键盘。 状态。 语义。",
    "keywords": []
  },
  {
    "id": "angular/checklist-angular",
    "partId": "angular",
    "partTitle": "Angular、Angular Material 与 Angular CDK A11y",
    "sectionId": "checklist-angular",
    "sectionTitle": "Angular 检查清单",
    "text": "HTML 是语义化的吗？ 有无障碍名称吗？ 焦点被管理了吗？ 重要变化会被播报吗？ 路由跳转后焦点处理正确吗？ Material 部分验证过了吗？ 自定义组件审查过了吗？ 只用键盘能操作吗？ 在 TalkBack 下能用吗？ 在 VoiceOver 下能用吗？",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/principio-fundamental",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "principio-fundamental",
    "sectionTitle": "根本原则",
    "text": "屏幕阅读器依赖： 无障碍名称。 正确的角色。 正确的状态。 几乎所有缺陷都能从这三点入手分析。",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/exemplo-de-leitura",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "exemplo-de-leitura",
    "sectionTitle": "一次播报听起来是什么样",
    "text": "保存，按钮 保存，按钮",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/botao-com-icone",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "botao-com-icone",
    "sectionTitle": "图标按钮",
    "text": "按钮 关闭，按钮",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "leitores-de-tela/campos-obrigatorios-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "campos-obrigatorios-2",
    "sectionTitle": "必填字段",
    "text": "编辑框 必填",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/campo-invalido",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "campo-invalido",
    "sectionTitle": "无效字段",
    "text": "无效字段",
    "keywords": [
      "aria-invalid"
    ]
  },
  {
    "id": "leitores-de-tela/checkbox",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "checkbox",
    "sectionTitle": "复选框",
    "text": "我接受条款 复选框 未勾选 我接受条款 复选框 已勾选",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/switch",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "switch",
    "sectionTitle": "开关",
    "text": "通知 开关 开",
    "keywords": [
      "aria-checked",
      "role:switch"
    ]
  },
  {
    "id": "leitores-de-tela/accordion-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "accordion-2",
    "sectionTitle": "折叠面板",
    "text": "详情 按钮 已收起 详情 按钮 已展开",
    "keywords": [
      "aria-expanded"
    ]
  },
  {
    "id": "leitores-de-tela/tabs-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "tabs-2",
    "sectionTitle": "选项卡",
    "text": "详情 选项卡 已选中",
    "keywords": [
      "aria-selected",
      "role:tab"
    ]
  },
  {
    "id": "leitores-de-tela/stepper-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "stepper-2",
    "sectionTitle": "步骤条",
    "text": "支付 当前步骤",
    "keywords": [
      "aria-current"
    ]
  },
  {
    "id": "leitores-de-tela/mensagens-dinamicas-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "mensagens-dinamicas-2",
    "sectionTitle": "动态消息",
    "text": "焦点不需要移动。 屏幕阅读器会自动播报。",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "leitores-de-tela/role-alert",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "role-alert",
    "sectionTitle": "role=\"alert\"",
    "text": "会被立即播报。 只用于真正重要的消息。",
    "keywords": [
      "role:alert"
    ]
  },
  {
    "id": "leitores-de-tela/foco-visivel",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "foco-visivel",
    "sectionTitle": "可见的焦点",
    "text": "每个可获得焦点的元素都必须在视觉上表明它接收到了焦点。",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/sequencia-de-foco",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "sequencia-de-foco",
    "sectionTitle": "焦点顺序",
    "text": "DOM 顺序必须反映视觉顺序。 屏幕阅读器用户是顺着页面结构来导航的。",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/modais",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "modais",
    "sectionTitle": "模态框",
    "text": "打开时： 焦点进入模态框。 后面的内容变得不可达。 Tab 只在它内部循环。 关闭时： 焦点回到打开它的那个元素。",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/problema-classico",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "problema-classico",
    "sectionTitle": "经典问题",
    "text": "模态框关闭时，焦点常常就消失了。 它应该回到“编辑”按钮上。",
    "keywords": [
      "ngIf"
    ]
  },
  {
    "id": "leitores-de-tela/loading-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "loading-2",
    "sectionTitle": "加载中",
    "text": "不要让用户完全收不到反馈。 示例 对账单加载成功",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/talkback-x-voiceover",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "talkback-x-voiceover",
    "sectionTitle": "TalkBack 与 VoiceOver 的差异",
    "text": "场景 常见差异 表单 播报内容存在细微差别。 选项卡 播报顺序可能不同。 模态框 焦点行为可能不同。 下拉选择 高度依赖具体实现。",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/roteiro-de-teste-manual",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "roteiro-de-teste-manual",
    "sectionTitle": "手工测试流程",
    "text": "打开屏幕阅读器。 把整个页面走一遍。 检查标题层级。 检查按钮。 检查表单。 测试错误提示。 测试加载状态。 测试模态框。 测试页面跳转。 测试中途退出流程。",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/bugs-mais-comuns-encontrados-em-producao",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "bugs-mais-comuns-encontrados-em-producao",
    "sectionTitle": "生产环境中最常见的缺陷",
    "text": "按钮没有无障碍名称。 可点击的图标没有标签。 模态框从不接收焦点。 错误从未被播报。 轻提示从未被播报。 跳转之后焦点丢失。 焦点顺序不正确。 折叠面板没有 aria-expanded。 选项卡没有 aria-selected。 只做了一半的自定义下拉选择。",
    "keywords": [
      "aria-expanded",
      "aria-selected"
    ]
  },
  {
    "id": "leitores-de-tela/checklist-final-de-talkback-e-voiceover",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack、VoiceOver 与真机测试",
    "sectionId": "checklist-final-de-talkback-e-voiceover",
    "sectionTitle": "TalkBack 与 VoiceOver 最终检查清单",
    "text": "每个元素都有名称吗？ 每个元素的角色都正确吗？ 状态会被播报吗？ 不靠视觉，整个流程走得通吗？ 错误会被播报吗？ 动态消息会被播报吗？ 焦点从来没有消失过吗？ 导航结构讲得通吗？ 成功和失败都有反馈吗？",
    "keywords": []
  },
  {
    "id": "qa-wcag/o-que-significa-uma-tela-acessivel",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "o-que-significa-uma-tela-acessivel",
    "sectionTitle": "一个无障碍的页面到底意味着什么？",
    "text": "无障碍的页面不只是一个没有 WCAG 错误的页面。 无障碍的页面让用户能够： 理解内容。 独立完成导航。 执行操作。 收到反馈。 走完整个流程。",
    "keywords": []
  },
  {
    "id": "qa-wcag/principais-criterios-wcag-para-angular",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "principais-criterios-wcag-para-angular",
    "sectionTitle": "Angular 中最要紧的 WCAG 准则",
    "text": "准则 主题 1.1.1 替代文本。 1.3.1 信息与关系。 1.3.2 有意义的顺序。 1.4.3 对比度。 1.4.10 回流。 2.1.1 键盘可操作。 2.1.2 无键盘陷阱。 2.4.3 焦点顺序。 2.4.6 标题与标签。 2.4.7 焦点可见。 3.3.1 错误识别。 3.3.2 标签或说明。 4.1.2 名称、角色和值。",
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
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "criterios-que-mais-geram-bugs",
    "sectionTitle": "最容易产生缺陷的准则",
    "text": "2.4.3 焦点顺序。 4.1.2 名称、角色、值。 3.3.1 错误识别。 2.1.1 键盘导航。 1.3.1 关系。",
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
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "checklist-de-story",
    "sectionTitle": "用户故事检查清单",
    "text": "每个需求都应该回答： 涉及交互组件吗？ 会影响屏幕阅读器吗？ 涉及键盘导航吗？ 涉及焦点处理吗？ 涉及动态播报吗？ 涉及错误处理吗？",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-de-desenvolvimento",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "checklist-de-desenvolvimento",
    "sectionTitle": "开发检查清单",
    "text": "HTML 是语义化的吗？ 每个字段都有标签吗？ 有无障碍名称吗？ 角色正确吗？ 焦点被管理了吗？ 支持键盘操作吗？ 错误有反馈吗？ 成功有反馈吗？ 用 TalkBack 检查过了吗？ 用 VoiceOver 检查过了吗？",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-de-pull-request",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "checklist-de-pull-request",
    "sectionTitle": "Pull Request 检查清单",
    "text": "新组件测试过了吗？ 焦点仍然正确吗？ 屏幕阅读器没有出现回归吗？ 标签仍然正确吗？ ARIA 仍然是同步的吗？ 键盘仍然可用吗？",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-de-qa",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "checklist-de-qa",
    "sectionTitle": "QA 检查清单",
    "text": "每个按钮都会被播报吗？ 每个链接都会被播报吗？ 每个字段都有标签吗？ 每个错误都会被播报吗？ 每个模态框都能正确打开吗？ 每个模态框都会归还焦点吗？ 每个折叠面板都会播报展开和收起吗？ 每个选项卡都会播报选中状态吗？ 每个步骤条都会播报当前步骤吗？ 有没有哪里会丢失焦点？",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-para-talkback",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "checklist-para-talkback",
    "sectionTitle": "TalkBack 检查清单",
    "text": "把整个页面走一遍。 检查标题层级。 检查按钮。 检查表单。 检查模态框。 检查错误提示。 检查轻提示。 检查加载状态。 确认流程能够走完。",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-para-voiceover",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "checklist-para-voiceover",
    "sectionTitle": "VoiceOver 检查清单",
    "text": "把整个页面走一遍。 检查每个可获得焦点的元素。 检查表单。 检查警告提示。 检查菜单。 检查浮层。 确认整个流程能够走完。",
    "keywords": []
  },
  {
    "id": "qa-wcag/quando-abrir-um-bug-de-acessibilidade",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "quando-abrir-um-bug-de-acessibilidade",
    "sectionTitle": "什么时候该提无障碍缺陷",
    "text": "只要用户出现以下情况： 无法完成任务。 无法识别某个元素。 无法导航。 丢失焦点。 收不到任何反馈。 收到了错误的信息。",
    "keywords": []
  },
  {
    "id": "qa-wcag/template-de-bug",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "template-de-bug",
    "sectionTitle": "缺陷模板",
    "text": "",
    "keywords": [
      "4.1.2"
    ]
  },
  {
    "id": "qa-wcag/classificacao-de-severidade",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "classificacao-de-severidade",
    "sectionTitle": "严重级别",
    "text": "级别 说明 严重 用户无法走完流程。 高 导航存在明显困难。 中 体验有所下降。 低 建议性改进。",
    "keywords": []
  },
  {
    "id": "qa-wcag/exemplos-de-bugs-criticos",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "exemplos-de-bugs-criticos",
    "sectionTitle": "严重缺陷示例",
    "text": "主按钮没有名称。 模态框无法访问。 错误从未被播报。 焦点被锁在错误的位置。 字段没有标签。",
    "keywords": []
  },
  {
    "id": "qa-wcag/exemplos-de-bugs-medios",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "exemplos-de-bugs-medios",
    "sectionTitle": "中等缺陷示例",
    "text": "标题层级不正确。 替代文本质量差。 工具提示没有描述。 播报内容重复。",
    "keywords": []
  },
  {
    "id": "qa-wcag/definition-of-done-acessivel",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "definition-of-done-acessivel",
    "sectionTitle": "无障碍完成标准",
    "text": "满足 WCAG AA。 键盘可用。 已用 TalkBack 验证。 已用 VoiceOver 验证。 已定义无障碍名称。 角色正确。 状态正确。 没有焦点丢失。 没有已知缺陷。",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-para-revisao-de-tela-nova",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "checklist-para-revisao-de-tela-nova",
    "sectionTitle": "新页面评审检查清单",
    "text": "有 h1 吗？ 结构是语义化的吗？ 顺序合乎逻辑吗？ 焦点被处理了吗？ 支持屏幕阅读器吗？ 有错误处理吗？ 有成功反馈吗？ 有加载反馈吗？ 导航一致吗？",
    "keywords": []
  },
  {
    "id": "qa-wcag/european-accessibility-act",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "european-accessibility-act",
    "sectionTitle": "欧洲无障碍法案",
    "text": "自 2025 年 6 月 28 日起，《欧洲无障碍法案》已在欧盟所有国家强制执行。 它已不再只是面向欧洲销售的企业才需要关心的事。服务欧洲客户的企业，或处在欧洲企业供应链中的企业，都在适用范围内。 类别 示例 电子商务 商城、结算、用户中心。 银行服务 网上银行、App、身份认证。 交通出行 票务销售、出行信息。 通信 电话、即时消息、紧急呼叫。 图书与媒体 电子阅读器、流媒体。 技术标准 符合性依据 EN 301 549 评估，该标准纳入了 WCAG。4.1.1 版预计于 2026 年发布。 在实践中，达到 WCAG 2.2 AA 级别就覆盖了该标准对网页内容的大部分要求。这也正是本指南自始至终瞄准的目标。 日常工作会有什么变化 无障碍不再是加分项，而成了准入条件。 需要符合性文档，而不只是一个能跑的站点。 可能在合同和招标中被明确要求。 既适用于新产品，也适用于既有产品的更新。 该做什么 确认产品是否服务欧盟境内的客户。 按 WCAG 2.2 AA 做一次审查。 记录结果，包括尚未达标的部分。 把无障碍写进完成标准。 让真正使用辅助技术的人来测试。",
    "keywords": [
      "4.1.1"
    ]
  },
  {
    "id": "qa-wcag/acessibilidade-cognitiva",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "acessibilidade-cognitiva",
    "sectionTitle": "认知无障碍",
    "text": "大部分无障碍投入都花在视觉和运动障碍上。认知障碍影响的人更多，得到的关注却更少。 它涵盖阅读障碍、注意力缺陷、自闭症、焦虑和年龄相关的认知衰退——也包括临时状态：疲惫、赶时间、压力大、在马路上边走边用手机。 一个让疲惫的人也能用的界面，对所有人都更好用。这是“无障碍不是边缘情况”最清楚的例证。 什么有帮助 语言直白、句子简短、不用不必要的行话。 一个页面只做一件主要的事。 长流程中提供可见的步骤指示。 错误提示告诉用户该怎么做，而不只是哪里错了。 破坏性操作要有确认和撤销。 不设时间限制，或者允许延长。 各页面之间保持一致的模式。 不要求用户在步骤之间靠记忆。 什么会造成阻碍 自动播放的动效、会自己轮播的组件。 又长又没有分段、也不能中途保存的表单。 笼统的错误提示。 毫无预警就过期的会话。 一次性给出太多信息。 没有文字标签的图标。 相关的 WCAG 准则 准则 主题 2.2.1 时间可调整。 2.2.2 暂停、停止、隐藏动效。 3.2.3 一致的导航。 3.2.4 一致的标识。 3.3.3 错误纠正建议。 3.3.4 重要操作的错误预防。 3.3.7 冗余输入。 3.3.8 无障碍身份验证。 在 Angular 中 把错误播报出来只是一半。另一半是这条消息要说清楚该怎么办。",
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
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "ferramentas-recomendadas",
    "sectionTitle": "推荐工具",
    "text": "TalkBack。 VoiceOver。 Chrome Lighthouse。 axe DevTools。 Accessibility Insights。 Angular CDK A11y。",
    "keywords": []
  },
  {
    "id": "qa-wcag/o-que-ferramentas-nao-encontram",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "o-que-ferramentas-nao-encontram",
    "sectionTitle": "工具找不出来的东西",
    "text": "自动化工具替代不了真实测试。 它们不擅长识别： 断裂的流程。 糟糕的焦点行为。 糟糕的体验。 令人困惑的播报。 复杂的导航。",
    "keywords": []
  },
  {
    "id": "qa-wcag/mentalidade-final",
    "partId": "qa-wcag",
    "partTitle": "面向 Angular 团队的 QA、审查与 WCAG 2.2 实践",
    "sectionId": "mentalidade-final",
    "sectionTitle": "真正重要的思维方式",
    "text": "该问的问题不该是： 而应该是： 如果答案是肯定的，实现通常就走在正确的方向上。",
    "keywords": []
  }
];
