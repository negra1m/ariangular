// GERADO por scripts/build-locale.js en — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.en.json

import type { SearchEntry } from '../types';

export const searchIndex: SearchEntry[] = [
  {
    "id": "fundamentos/o-que-e-acessibilidade",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "o-que-e-acessibilidade",
    "sectionTitle": "What is accessibility?",
    "text": "Accessibility is the capacity of a digital product to be used by every person, regardless of visual, hearing, motor, cognitive or temporary limitations. Examples of users: A blind person using TalkBack. A blind person using VoiceOver. A person with low vision using zoom. A person with reduced mobility using the keyboard. A person with a cognitive disability. A person with an injured arm using only one hand.",
    "keywords": []
  },
  {
    "id": "fundamentos/wcag-2-2",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "wcag-2-2",
    "sectionTitle": "WCAG 2.2",
    "text": "WCAG (Web Content Accessibility Guidelines) is the most widely used set of guidelines in the world for evaluating digital accessibility. Conformance levels Level Description A Minimum requirements. AA The level most companies adopt. AAA The strictest level.",
    "keywords": []
  },
  {
    "id": "fundamentos/pour",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "pour",
    "sectionTitle": "POUR",
    "text": "Every WCAG criterion derives from four pillars: P — Perceivable The user has to be able to perceive the content. Images need alternative text. Information cannot depend on colour alone. O — Operable The interface has to be usable. Works with the keyboard. Works with screen readers. U — Understandable Consistent flows. Clear messages. Understandable errors. R — Robust Works with assistive technology. Semantic HTML. Correct ARIA.",
    "keywords": []
  },
  {
    "id": "fundamentos/leitores-de-tela-2",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "leitores-de-tela-2",
    "sectionTitle": "Screen readers",
    "text": "TalkBack The native screen reader on Android. VoiceOver The native screen reader on iOS. What do they need in order to work correctly? An accessible name. The correct role. The correct state. Example Save, button",
    "keywords": []
  },
  {
    "id": "fundamentos/como-um-leitor-de-tela-enxerga-uma-pagina",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "como-um-leitor-de-tela-enxerga-uma-pagina",
    "sectionTitle": "How does a screen reader see a page?",
    "text": "These users do not see the interface the way sighted users do. They navigate by: Headings. Buttons. Links. Fields. Landmarks. A visually perfect screen can be completely unusable with a screen reader.",
    "keywords": []
  },
  {
    "id": "fundamentos/regra-de-ouro-da-acessibilidade",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "regra-de-ouro-da-acessibilidade",
    "sectionTitle": "The Golden Rule of Accessibility",
    "text": "HTML first Always prefer semantic HTML before reaching for ARIA. If a native HTML tag can solve the problem, use it.",
    "keywords": []
  },
  {
    "id": "fundamentos/estrutura-semantica-basica",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "estrutura-semantica-basica",
    "sectionTitle": "Basic Semantic Structure",
    "text": "",
    "keywords": []
  },
  {
    "id": "fundamentos/landmarks",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "landmarks",
    "sectionTitle": "Landmarks",
    "text": "Landmarks let screen readers navigate quickly through the important regions of the page. Tag Purpose header Header. nav Navigation. main Main content. aside Complementary content. footer Footer.",
    "keywords": []
  },
  {
    "id": "fundamentos/headings",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "headings",
    "sectionTitle": "Headings",
    "text": "Headings create a navigation tree.",
    "keywords": []
  },
  {
    "id": "fundamentos/accessible-name",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "accessible-name",
    "sectionTitle": "Accessible Name",
    "text": "Every interactive element must have an accessible name. Visible text Continue, button aria-label Close modal, button",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "fundamentos/accessible-description",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "accessible-description",
    "sectionTitle": "Accessible Description",
    "text": "The screen reader will combine the field name with its description.",
    "keywords": [
      "aria-describedby"
    ]
  },
  {
    "id": "fundamentos/nome-role-estado",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "nome-role-estado",
    "sectionTitle": "Name + Role + State",
    "text": "Almost any screen reader analysis can be reduced to three questions: Question Example What is the name? Save What is the role? Button What is the state? Disabled Example Save, button, disabled",
    "keywords": []
  },
  {
    "id": "fundamentos/erros-mais-comuns-encontrados-em-angular",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "erros-mais-comuns-encontrados-em-angular",
    "sectionTitle": "The most common mistakes in Angular",
    "text": "A clickable div pretending to be a button. A clickable icon with no aria-label. An input with only a placeholder. No main heading. A modal with no focus management. Form errors that are never announced. Overuse of ARIA. Links behaving like buttons. Buttons behaving like links. Positive tabindex.",
    "keywords": [
      "aria-label",
      "tabindex"
    ]
  },
  {
    "id": "fundamentos/mentalidade-para-o-time-angular",
    "partId": "fundamentos",
    "partTitle": "Angular Accessibility Fundamentals",
    "sectionId": "mentalidade-para-o-time-angular",
    "sectionTitle": "A mindset for the Angular team",
    "text": "Before building any component, ask: Is there a native HTML tag for this? Does the element have an accessible name? Does it work with the keyboard? Does it work with TalkBack? Does it work with VoiceOver?",
    "keywords": []
  },
  {
    "id": "aria/o-que-e-aria",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "o-que-e-aria",
    "sectionTitle": "What is ARIA?",
    "text": "ARIA stands for: ARIA exists to complement HTML semantics. ARIA does NOT replace semantic HTML.",
    "keywords": [
      "role:button"
    ]
  },
  {
    "id": "aria/regra-de-ouro",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "regra-de-ouro",
    "sectionTitle": "The Golden Rule",
    "text": "If native HTML solves it, do not add ARIA for no reason.",
    "keywords": []
  },
  {
    "id": "aria/accessible-name-2",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "accessible-name-2",
    "sectionTitle": "Accessible Name",
    "text": "Every interactive element must have an accessible name. Inner text Continue, button",
    "keywords": []
  },
  {
    "id": "aria/aria-label",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-label",
    "sectionTitle": "aria-label",
    "text": "Attribute Value Purpose aria-label string Sets the accessible name. When to use it An icon-only button. Actions with no visible text. Custom elements. Example Close modal, button",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "aria/aria-labelledby",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-labelledby",
    "sectionTitle": "aria-labelledby",
    "text": "Value Purpose id Uses another element as the name.",
    "keywords": [
      "aria-labelledby"
    ]
  },
  {
    "id": "aria/aria-describedby",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-describedby",
    "sectionTitle": "aria-describedby",
    "text": "Adds a complementary description.",
    "keywords": [
      "aria-describedby"
    ]
  },
  {
    "id": "aria/aria-hidden",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-hidden",
    "sectionTitle": "aria-hidden",
    "text": "Value Purpose true Hides it from the screen reader. false Exposes it to the screen reader. Decorative image",
    "keywords": [
      "aria-hidden"
    ]
  },
  {
    "id": "aria/aria-expanded",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-expanded",
    "sectionTitle": "aria-expanded",
    "text": "Indicates the expanded state. Details, button, collapsed",
    "keywords": [
      "aria-expanded"
    ]
  },
  {
    "id": "aria/aria-controls",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-controls",
    "sectionTitle": "aria-controls",
    "text": "Connects a control to a piece of content.",
    "keywords": [
      "aria-controls",
      "aria-expanded"
    ]
  },
  {
    "id": "aria/aria-current",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-current",
    "sectionTitle": "aria-current",
    "text": "Value Purpose page Current page. step Current step. location Current location. Stepper",
    "keywords": [
      "aria-current"
    ]
  },
  {
    "id": "aria/aria-selected",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-selected",
    "sectionTitle": "aria-selected",
    "text": "Indicates selection.",
    "keywords": [
      "aria-selected",
      "role:tab"
    ]
  },
  {
    "id": "aria/aria-checked",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-checked",
    "sectionTitle": "aria-checked",
    "text": "I agree, checkbox, checked",
    "keywords": [
      "aria-checked",
      "role:checkbox"
    ]
  },
  {
    "id": "aria/aria-pressed",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-pressed",
    "sectionTitle": "aria-pressed",
    "text": "Toggle buttons.",
    "keywords": [
      "aria-pressed"
    ]
  },
  {
    "id": "aria/aria-disabled",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-disabled",
    "sectionTitle": "aria-disabled",
    "text": "Continue, button, unavailable",
    "keywords": [
      "aria-disabled"
    ]
  },
  {
    "id": "aria/aria-required",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-required",
    "sectionTitle": "aria-required",
    "text": "Required field",
    "keywords": [
      "aria-required"
    ]
  },
  {
    "id": "aria/aria-invalid",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-invalid",
    "sectionTitle": "aria-invalid",
    "text": "Invalid field",
    "keywords": [
      "aria-invalid"
    ]
  },
  {
    "id": "aria/aria-live",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-live",
    "sectionTitle": "aria-live",
    "text": "Value Purpose off Does not announce. polite Announces when there is a pause. assertive Announces immediately. Toast",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "aria/aria-atomic",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-atomic",
    "sectionTitle": "aria-atomic",
    "text": "Controls how much gets re-read.",
    "keywords": [
      "aria-atomic",
      "aria-live"
    ]
  },
  {
    "id": "aria/aria-busy",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-busy",
    "sectionTitle": "aria-busy",
    "text": "Signals loading.",
    "keywords": [
      "aria-busy"
    ]
  },
  {
    "id": "aria/aria-modal",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
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
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-haspopup",
    "sectionTitle": "aria-haspopup",
    "text": "Value Purpose menu Opens a menu. dialog Opens a modal. listbox Opens a list.",
    "keywords": [
      "aria-haspopup"
    ]
  },
  {
    "id": "aria/aria-para-progress-bar",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "aria-para-progress-bar",
    "sectionTitle": "ARIA for a Progress Bar",
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
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "principais-roles",
    "sectionTitle": "The roles you will actually use",
    "text": "Role Purpose button Button. link Link. dialog Modal. alert Urgent message. status Informational status. tablist Tab container. tab Tab. tabpanel Tab content. checkbox Checkbox. switch On and off. menu Menu. menuitem Menu item. listbox Selectable list. option Option.",
    "keywords": []
  },
  {
    "id": "aria/roles-que-voce-quase-nunca-precisara",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "roles-que-voce-quase-nunca-precisara",
    "sectionTitle": "Roles you will almost never need",
    "text": "tree treegrid feed math meter log marquee Do not use them without a real need.",
    "keywords": []
  },
  {
    "id": "aria/angular-attribute-binding",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "angular-attribute-binding",
    "sectionTitle": "Angular Attribute Binding",
    "text": "This also works",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "aria/erros-mais-comuns-com-aria",
    "partId": "aria",
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "erros-mais-comuns-com-aria",
    "sectionTitle": "The most common ARIA mistakes",
    "text": "Adding role=\"button\" to a button. Adding an aria-label that is not needed. aria-hidden on content that matters. Too many live regions. An aria-expanded state that stops tracking reality. aria-describedby pointing at an id that does not exist. Building a custom component with no keyboard support.",
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
    "partTitle": "Complete ARIA for Angular",
    "sectionId": "checklist-aria",
    "sectionTitle": "ARIA Checklist",
    "text": "Does it have an accessible name? Does it have the correct role? Does it have the correct state? Is it in sync with the DOM? Does TalkBack announce it correctly? Does VoiceOver announce it correctly?",
    "keywords": []
  },
  {
    "id": "formularios/label",
    "partId": "formularios",
    "partTitle": "Accessible Forms",
    "sectionId": "label",
    "sectionTitle": "Label",
    "text": "Name, edit field",
    "keywords": []
  },
  {
    "id": "formularios/placeholder-nao-e-label",
    "partId": "formularios",
    "partTitle": "Accessible Forms",
    "sectionId": "placeholder-nao-e-label",
    "sectionTitle": "Placeholder is not a Label",
    "text": "The placeholder disappears while the field is being filled in. Screen readers may also behave inconsistently when it is the only source of the name.",
    "keywords": []
  },
  {
    "id": "formularios/campos-obrigatorios",
    "partId": "formularios",
    "partTitle": "Accessible Forms",
    "sectionId": "campos-obrigatorios",
    "sectionTitle": "Required Fields",
    "text": "Native HTML With ARIA Required field",
    "keywords": [
      "aria-required"
    ]
  },
  {
    "id": "formularios/mensagens-de-ajuda",
    "partId": "formularios",
    "partTitle": "Accessible Forms",
    "sectionId": "mensagens-de-ajuda",
    "sectionTitle": "Help Messages",
    "text": "Use aria-describedby.",
    "keywords": [
      "aria-describedby"
    ]
  },
  {
    "id": "formularios/validacao-de-erro",
    "partId": "formularios",
    "partTitle": "Accessible Forms",
    "sectionId": "validacao-de-erro",
    "sectionTitle": "Error Validation",
    "text": "Invalid field",
    "keywords": [
      "aria-invalid"
    ]
  },
  {
    "id": "formularios/erro-associado-ao-campo",
    "partId": "formularios",
    "partTitle": "Accessible Forms",
    "sectionId": "erro-associado-ao-campo",
    "sectionTitle": "Error Tied to the Field",
    "text": "Tax ID Invalid field Invalid tax ID",
    "keywords": [
      "aria-invalid",
      "aria-describedby"
    ]
  },
  {
    "id": "formularios/erro-dinamico-com-aria-live",
    "partId": "formularios",
    "partTitle": "Accessible Forms",
    "sectionId": "erro-dinamico-com-aria-live",
    "sectionTitle": "Dynamic Error with aria-live",
    "text": "",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "componentes/botoes",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "botoes",
    "sectionTitle": "Buttons",
    "text": "Continue, button",
    "keywords": []
  },
  {
    "id": "componentes/botao-apenas-com-icone",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "botao-apenas-com-icone",
    "sectionTitle": "Icon-only Button",
    "text": "Edit address, button",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "componentes/links",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "links",
    "sectionTitle": "Links",
    "text": "Links navigate. Buttons perform actions.",
    "keywords": []
  },
  {
    "id": "componentes/cards-clicaveis",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "cards-clicaveis",
    "sectionTitle": "Clickable Cards",
    "text": "Alternative",
    "keywords": []
  },
  {
    "id": "componentes/accordion",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "accordion",
    "sectionTitle": "Accordion",
    "text": "How does it work? Button Collapsed",
    "keywords": [
      "aria-expanded",
      "aria-controls"
    ]
  },
  {
    "id": "componentes/accordion-com-angular",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "accordion-com-angular",
    "sectionTitle": "Accordion in Angular",
    "text": "aria-expanded has to reflect the real state.",
    "keywords": [
      "aria-expanded"
    ]
  },
  {
    "id": "componentes/tabs",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "tabs",
    "sectionTitle": "Tabs",
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
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "tab-panel",
    "sectionTitle": "Tab Panel",
    "text": "",
    "keywords": [
      "role:tabpanel"
    ]
  },
  {
    "id": "componentes/modal",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "modal",
    "sectionTitle": "Modal",
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
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "checklist-modal",
    "sectionTitle": "Modal Checklist",
    "text": "Does it have role=\"dialog\"? Does it have aria-modal? Does it receive focus when it opens? Does it trap focus inside? Does it close on ESC? Does it return focus when it closes?",
    "keywords": [
      "aria-modal",
      "role:dialog"
    ]
  },
  {
    "id": "componentes/bottom-sheet",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "bottom-sheet",
    "sectionTitle": "Bottom Sheet",
    "text": "Treat it as a modal.",
    "keywords": [
      "aria-modal",
      "role:dialog"
    ]
  },
  {
    "id": "componentes/menu",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "menu",
    "sectionTitle": "Menu",
    "text": "",
    "keywords": [
      "aria-haspopup",
      "aria-expanded"
    ]
  },
  {
    "id": "componentes/itens-de-menu",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "itens-de-menu",
    "sectionTitle": "Menu Items",
    "text": "",
    "keywords": [
      "role:menu",
      "role:menuitem"
    ]
  },
  {
    "id": "componentes/dropdown",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "dropdown",
    "sectionTitle": "Dropdown",
    "text": "Whenever possible, prefer the native select.",
    "keywords": []
  },
  {
    "id": "componentes/combobox",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "combobox",
    "sectionTitle": "Combobox",
    "text": "Complex to implement. Avoid building it by hand — see Angular Aria.",
    "keywords": [
      "aria-expanded",
      "role:combobox"
    ]
  },
  {
    "id": "componentes/lista",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "lista",
    "sectionTitle": "List",
    "text": "List with 2 items",
    "keywords": []
  },
  {
    "id": "componentes/breadcrumb",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "breadcrumb",
    "sectionTitle": "Breadcrumb",
    "text": "Current item",
    "keywords": [
      "aria-label",
      "aria-current"
    ]
  },
  {
    "id": "componentes/stepper",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "stepper",
    "sectionTitle": "Stepper",
    "text": "Payment Current step",
    "keywords": [
      "aria-current"
    ]
  },
  {
    "id": "componentes/tabela-simples",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "tabela-simples",
    "sectionTitle": "Simple Table",
    "text": "",
    "keywords": []
  },
  {
    "id": "componentes/tabela-boas-praticas",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "tabela-boas-praticas",
    "sectionTitle": "Tables — Good Practice",
    "text": "Use caption. Use th. Use scope. Avoid tables built out of divs.",
    "keywords": []
  },
  {
    "id": "componentes/tooltip",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "tooltip",
    "sectionTitle": "Tooltip",
    "text": "",
    "keywords": [
      "aria-describedby",
      "role:tooltip"
    ]
  },
  {
    "id": "componentes/toast",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "toast",
    "sectionTitle": "Toast",
    "text": "",
    "keywords": [
      "role:status"
    ]
  },
  {
    "id": "componentes/snackbar",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "snackbar",
    "sectionTitle": "Snackbar",
    "text": "",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "componentes/alertas-criticos",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "alertas-criticos",
    "sectionTitle": "Critical Alerts",
    "text": "Announced immediately.",
    "keywords": [
      "role:alert"
    ]
  },
  {
    "id": "componentes/loading",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "loading",
    "sectionTitle": "Loading",
    "text": "",
    "keywords": [
      "aria-busy"
    ]
  },
  {
    "id": "componentes/progress-bar",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "progress-bar",
    "sectionTitle": "Progress Bar",
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
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "skeleton-loading",
    "sectionTitle": "Skeleton Loading",
    "text": "The visual placeholder should be ignored by the screen reader.",
    "keywords": [
      "aria-hidden"
    ]
  },
  {
    "id": "componentes/carrossel",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "carrossel",
    "sectionTitle": "Carousel",
    "text": "Previous button. Next button. Pause button. Identifiable slides.",
    "keywords": []
  },
  {
    "id": "componentes/infinite-scroll",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "infinite-scroll",
    "sectionTitle": "Infinite Scroll",
    "text": "Announce newly loaded items. Preserve focus. Avoid abrupt shifts.",
    "keywords": []
  },
  {
    "id": "componentes/drag-and-drop",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "drag-and-drop",
    "sectionTitle": "Drag and Drop",
    "text": "Never rely on the gesture alone. Always offer a click or keyboard alternative.",
    "keywords": []
  },
  {
    "id": "componentes/upload-de-arquivo",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "upload-de-arquivo",
    "sectionTitle": "File Upload",
    "text": "",
    "keywords": []
  },
  {
    "id": "componentes/mensagens-dinamicas",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "mensagens-dinamicas",
    "sectionTitle": "Dynamic Messages",
    "text": "Commonly used for: Toast. Filter applied. Search finished. Payment approved. Upload finished.",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "componentes/checklist-de-componentes",
    "partId": "componentes",
    "partTitle": "Interactive Components and Complex Structures",
    "sectionId": "checklist-de-componentes",
    "sectionTitle": "Component Checklist",
    "text": "Does it have an accessible name? Does it have the correct role? Does it have the correct state? Does it work with the keyboard? Is the focus visible? Does it work with TalkBack? Does it work with VoiceOver? Does it announce important changes? Does it keep a sensible focus order?",
    "keywords": []
  },
  {
    "id": "angular/angular-e-acessivel-por-padrao",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "angular-e-acessivel-por-padrao",
    "sectionTitle": "Is Angular accessible by default?",
    "text": "No. Angular renders the HTML you write. If the HTML is accessible, the application tends to be accessible. If the HTML is bad, Angular does not fix it.",
    "keywords": []
  },
  {
    "id": "angular/regra-principal-para-angular",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "regra-principal-para-angular",
    "sectionTitle": "The main rule for Angular",
    "text": "",
    "keywords": []
  },
  {
    "id": "angular/binding-de-aria",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "binding-de-aria",
    "sectionTitle": "Binding ARIA",
    "text": "When the value is dynamic: Accordion",
    "keywords": [
      "aria-label",
      "aria-expanded"
    ]
  },
  {
    "id": "angular/ngif-e-foco",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "ngif-e-foco",
    "sectionTitle": "NgIf and Focus",
    "text": "One of the most common problems. When the element leaves the DOM, focus can be lost.",
    "keywords": [
      "ngIf"
    ]
  },
  {
    "id": "angular/ngfor-e-acessibilidade",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "ngfor-e-acessibilidade",
    "sectionTitle": "NgFor and Accessibility",
    "text": "Prefer semantic structures.",
    "keywords": [
      "ngFor"
    ]
  },
  {
    "id": "angular/router-angular",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "router-angular",
    "sectionTitle": "The Angular Router",
    "text": "SPA applications do not reload the page. The screen reader does not automatically notice that the screen changed.",
    "keywords": []
  },
  {
    "id": "angular/foco-apos-navegacao",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "foco-apos-navegacao",
    "sectionTitle": "Focus after navigation",
    "text": "After navigation: Move focus to the h1. Or to the main content.",
    "keywords": []
  },
  {
    "id": "angular/exemplo-de-destino-de-foco",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "exemplo-de-destino-de-foco",
    "sectionTitle": "A focus target, in practice",
    "text": "",
    "keywords": [
      "tabindex"
    ]
  },
  {
    "id": "angular/anunciar-mudancas-de-tela",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "anunciar-mudancas-de-tela",
    "sectionTitle": "Announcing screen changes",
    "text": "In Angular applications it is common to announce the name of the screen.",
    "keywords": []
  },
  {
    "id": "angular/angular-cdk-accessibility",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "angular-cdk-accessibility",
    "sectionTitle": "Angular CDK Accessibility",
    "text": "The most important package for accessibility in the Angular stack. LiveAnnouncer FocusMonitor FocusTrap FocusKeyManager InteractivityChecker",
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
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "liveannouncer",
    "sectionTitle": "LiveAnnouncer",
    "text": "Lets you create announcements for screen readers.",
    "keywords": [
      "LiveAnnouncer"
    ]
  },
  {
    "id": "angular/quando-usar-liveannouncer",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "quando-usar-liveannouncer",
    "sectionTitle": "When to use LiveAnnouncer",
    "text": "Payment completed. Filter applied. Search finished. Upload finished. An error that matters.",
    "keywords": [
      "LiveAnnouncer"
    ]
  },
  {
    "id": "angular/cdktrapfocus",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "cdktrapfocus",
    "sectionTitle": "cdkTrapFocus",
    "text": "Traps focus inside a region. Ideal for: Modal. Bottom Sheet. Dialog.",
    "keywords": [
      "cdkTrapFocus"
    ]
  },
  {
    "id": "angular/exemplo-cdktrapfocus",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "exemplo-cdktrapfocus",
    "sectionTitle": "cdkTrapFocus example",
    "text": "",
    "keywords": [
      "cdkTrapFocus"
    ]
  },
  {
    "id": "angular/focusmonitor",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "focusmonitor",
    "sectionTitle": "FocusMonitor",
    "text": "Identifies how focus reached the element. Mouse. Keyboard. Touch. Programmatic.",
    "keywords": [
      "FocusMonitor"
    ]
  },
  {
    "id": "angular/focuskeymanager",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "focuskeymanager",
    "sectionTitle": "FocusKeyManager",
    "text": "Manages arrow key navigation. Widely used in: Tabs. Menus. Listbox. Combobox.",
    "keywords": [
      "FocusKeyManager"
    ]
  },
  {
    "id": "angular/angular-material",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "angular-material",
    "sectionTitle": "Angular Material",
    "text": "Material already implements a good part of the accessibility. It still has to be tested.",
    "keywords": []
  },
  {
    "id": "angular/matdialog",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "matdialog",
    "sectionTitle": "MatDialog",
    "text": "What you get The dialog role. Focus management. ESC. Backdrop.",
    "keywords": [
      "MatDialog"
    ]
  },
  {
    "id": "angular/checklist-matdialog",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "checklist-matdialog",
    "sectionTitle": "MatDialog Checklist",
    "text": "Does it have a title? Does it receive focus? Does it return focus? Does it have a close button?",
    "keywords": [
      "MatDialog"
    ]
  },
  {
    "id": "angular/mattabs",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "mattabs",
    "sectionTitle": "MatTabs",
    "text": "Implements the tab structure. Even so, verify: Arrow keys work. TalkBack announces correctly. VoiceOver announces correctly.",
    "keywords": [
      "MatTabs"
    ]
  },
  {
    "id": "angular/matmenu",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "matmenu",
    "sectionTitle": "MatMenu",
    "text": "Prefer building menus with MatMenu rather than a homemade implementation.",
    "keywords": [
      "MatMenu"
    ]
  },
  {
    "id": "angular/matselect",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "matselect",
    "sectionTitle": "MatSelect",
    "text": "The component most prone to accessibility bugs. Always verify: Opening. Closing. How the option is announced. The selected state.",
    "keywords": [
      "MatSelect"
    ]
  },
  {
    "id": "angular/matexpansionpanel",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "matexpansionpanel",
    "sectionTitle": "MatExpansionPanel",
    "text": "The equivalent of an accordion. Check: aria-expanded. Focus. How the state is announced.",
    "keywords": [
      "aria-expanded",
      "MatExpansionPanel"
    ]
  },
  {
    "id": "angular/mattable",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "mattable",
    "sectionTitle": "MatTable",
    "text": "Do not assume every Material table is automatically accessible. Verify: caption. headers. sort. focus.",
    "keywords": [
      "MatTable"
    ]
  },
  {
    "id": "angular/overlay-components",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "overlay-components",
    "sectionTitle": "Overlay Components",
    "text": "Every component that opens over the screen deserves extra attention. Modal. Popover. Tooltip. Select. Menu. Datepicker.",
    "keywords": []
  },
  {
    "id": "angular/datepicker",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "datepicker",
    "sectionTitle": "Datepicker",
    "text": "Verify: Keyboard navigation. How the day is announced. How the month is announced. How the year is announced. That selection works.",
    "keywords": []
  },
  {
    "id": "angular/loading-angular",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "loading-angular",
    "sectionTitle": "Loading in Angular",
    "text": "State changes have to be announced. Or:",
    "keywords": [
      "aria-busy"
    ]
  },
  {
    "id": "angular/lazy-loading",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "lazy-loading",
    "sectionTitle": "Lazy Loading",
    "text": "When content appears after an asynchronous load, focus and announcement both have to be considered.",
    "keywords": []
  },
  {
    "id": "angular/signals-e-acessibilidade",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "signals-e-acessibilidade",
    "sectionTitle": "Signals and Accessibility",
    "text": "Signals update the UI automatically. But screen readers are not notified automatically. Use: aria-live LiveAnnouncer",
    "keywords": [
      "aria-live",
      "Signals",
      "LiveAnnouncer"
    ]
  },
  {
    "id": "angular/standalone-components",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "standalone-components",
    "sectionTitle": "Standalone Components",
    "text": "They have no accessibility-specific differences. The same rules still apply.",
    "keywords": []
  },
  {
    "id": "angular/pipes",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "pipes",
    "sectionTitle": "Pipes",
    "text": "Be careful with formatting that harms how the value is read. Example Check how the screen reader announces it.",
    "keywords": []
  },
  {
    "id": "angular/custom-components",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "custom-components",
    "sectionTitle": "Custom Components",
    "text": "The biggest source of bugs in Angular. Custom buttons. Custom select. Custom dropdown. Custom stepper. Custom menu.",
    "keywords": []
  },
  {
    "id": "angular/regra-para-custom-components",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "regra-para-custom-components",
    "sectionTitle": "The rule for Custom Components",
    "text": "Always ask: Is there a native element for this? Is there a Material component? Is there an Angular Aria directive? Do I really need to build it from scratch?",
    "keywords": []
  },
  {
    "id": "angular/angular-aria",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "angular-aria",
    "sectionTitle": "Angular Aria",
    "text": "In November 2025, with Angular v22, the Angular team released the official Angular Aria package. These are headless directives implementing the WAI-ARIA Authoring Practices patterns. They handle keyboard navigation, ARIA attributes, focus management and screen reader support. You provide the HTML and the styling. This is the most significant accessibility release in Angular's history. Combobox, listbox, menu and tree are the components that produce the most accessibility bugs when hand-rolled — and now there is an official implementation, maintained by the framework team, following the specification. Before it, the answer to \"I need an accessible combobox\" was \"the implementation is complex, avoid building it by hand\" — with nothing offered in its place. Now there is an answer.",
    "keywords": []
  },
  {
    "id": "angular/padroes-do-angular-aria",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "padroes-do-angular-aria",
    "sectionTitle": "Angular Aria patterns",
    "text": "There are thirteen patterns available. Directive Purpose ngCombobox A text input coordinated with a popup. ngAutocomplete An input with filtered suggestions. ngListbox A list of options, single or multiple selection. ngSelect Single-selection dropdown. ngMultiselect Multiple-selection dropdown. ngMenu A menu with submenus. ngMenubar A horizontal navigation bar. ngToolbar A group of controls. ngTabs Tabs. ngAccordion Expandable panels. ngTree A hierarchical list with expand and collapse. ngGrid Two-dimensional data with cell navigation. Compare this with the list of components that produce the most accessibility bugs in Angular. It is almost the same list.",
    "keywords": []
  },
  {
    "id": "angular/angular-aria-material-ou-cdk",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "angular-aria-material-ou-cdk",
    "sectionTitle": "Angular Aria, Material or CDK?",
    "text": "The three coexist and solve different problems. Package What you get When to use it Angular Material A finished component, with styling. The Material look works for the product. Angular Aria Behaviour without styling. Your own design system, without reimplementing keyboard and ARIA. Angular CDK A11y Low-level utilities. LiveAnnouncer, FocusTrap and FocusMonitor in any scenario. The CDK A11y package is still needed even when using Angular Aria. Announcing \"payment completed\" with LiveAnnouncer is not a widget pattern.",
    "keywords": [
      "LiveAnnouncer",
      "FocusTrap",
      "FocusMonitor"
    ]
  },
  {
    "id": "angular/o-que-o-angular-aria-nao-resolve",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "o-que-o-angular-aria-nao-resolve",
    "sectionTitle": "What Angular Aria does not solve",
    "text": "The library solves widget patterns. Most accessibility bugs in production are not complex widgets. A clickable div instead of a button. A clickable icon with no accessible name. An input with only a placeholder. A form error that is never announced. Focus lost after a route change. Headings out of order. Insufficient contrast. An image with no alternative text. A table with no associated headers. Headless directive means you provide the HTML and the CSS. You can use Angular Aria and still ship an inaccessible screen: invisible focus, poor contrast, DOM order that does not match the visual order. The library removes one class of error. It does not replace knowing the subject, nor testing with TalkBack and VoiceOver.",
    "keywords": []
  },
  {
    "id": "angular/erro-mais-comum-do-time-front",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "erro-mais-comum-do-time-front",
    "sectionTitle": "The front-end team's most common mistake",
    "text": "It works visually. But it loses: The role. The keyboard. The state. The semantics.",
    "keywords": []
  },
  {
    "id": "angular/checklist-angular",
    "partId": "angular",
    "partTitle": "Angular, Angular Material and Angular CDK A11y",
    "sectionId": "checklist-angular",
    "sectionTitle": "Angular Checklist",
    "text": "Is the HTML semantic? Is there an accessible name? Is focus managed? Are important changes announced? Does the router move focus correctly? Has Material been verified? Have custom components been audited? Does it work with the keyboard alone? Does it work with TalkBack? Does it work with VoiceOver?",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/principio-fundamental",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "principio-fundamental",
    "sectionTitle": "The Fundamental Principle",
    "text": "Screen readers rely on: An accessible name. The correct role. The correct state. Almost every bug can be analysed through those three points.",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/exemplo-de-leitura",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "exemplo-de-leitura",
    "sectionTitle": "What an announcement sounds like",
    "text": "Save, button Save, button",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/botao-com-icone",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "botao-com-icone",
    "sectionTitle": "Icon Button",
    "text": "Button Close, button",
    "keywords": [
      "aria-label"
    ]
  },
  {
    "id": "leitores-de-tela/campos-obrigatorios-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "campos-obrigatorios-2",
    "sectionTitle": "Required Fields",
    "text": "Edit field Required",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/campo-invalido",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "campo-invalido",
    "sectionTitle": "Invalid Field",
    "text": "Invalid field",
    "keywords": [
      "aria-invalid"
    ]
  },
  {
    "id": "leitores-de-tela/checkbox",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "checkbox",
    "sectionTitle": "Checkbox",
    "text": "I accept the terms Checkbox Not checked I accept the terms Checkbox Checked",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/switch",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "switch",
    "sectionTitle": "Switch",
    "text": "Notifications Switch On",
    "keywords": [
      "aria-checked",
      "role:switch"
    ]
  },
  {
    "id": "leitores-de-tela/accordion-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "accordion-2",
    "sectionTitle": "Accordion",
    "text": "Details Button Collapsed Details Button Expanded",
    "keywords": [
      "aria-expanded"
    ]
  },
  {
    "id": "leitores-de-tela/tabs-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "tabs-2",
    "sectionTitle": "Tabs",
    "text": "Details Tab Selected",
    "keywords": [
      "aria-selected",
      "role:tab"
    ]
  },
  {
    "id": "leitores-de-tela/stepper-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "stepper-2",
    "sectionTitle": "Stepper",
    "text": "Payment Current step",
    "keywords": [
      "aria-current"
    ]
  },
  {
    "id": "leitores-de-tela/mensagens-dinamicas-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "mensagens-dinamicas-2",
    "sectionTitle": "Dynamic Messages",
    "text": "Focus does not need to move. The screen reader announces it automatically.",
    "keywords": [
      "aria-live"
    ]
  },
  {
    "id": "leitores-de-tela/role-alert",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "role-alert",
    "sectionTitle": "role=\"alert\"",
    "text": "It is announced immediately. Use it only for messages that matter.",
    "keywords": [
      "role:alert"
    ]
  },
  {
    "id": "leitores-de-tela/foco-visivel",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "foco-visivel",
    "sectionTitle": "Visible Focus",
    "text": "Every focusable element must visually indicate that it received focus.",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/sequencia-de-foco",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "sequencia-de-foco",
    "sectionTitle": "Focus Order",
    "text": "The DOM order has to reflect the visual order. Screen reader users navigate by following the structure of the page.",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/modais",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "modais",
    "sectionTitle": "Modals",
    "text": "When it opens: Focus moves into the modal. The content behind becomes unreachable. Tab only cycles inside it. When it closes: Focus returns to the element that opened it.",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/problema-classico",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "problema-classico",
    "sectionTitle": "The Classic Problem",
    "text": "When the modal closes, focus often disappears. It should return to the Edit button.",
    "keywords": [
      "ngIf"
    ]
  },
  {
    "id": "leitores-de-tela/loading-2",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "loading-2",
    "sectionTitle": "Loading",
    "text": "Do not leave the user without feedback. Example Statement loaded successfully",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/talkback-x-voiceover",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "talkback-x-voiceover",
    "sectionTitle": "TalkBack vs VoiceOver",
    "text": "Scenario Common differences Forms Small differences in what gets announced. Tabs The order of the announcement can vary. Modals Focus behaviour can vary. Selects Highly dependent on the implementation.",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/roteiro-de-teste-manual",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "roteiro-de-teste-manual",
    "sectionTitle": "Manual Test Script",
    "text": "Turn the screen reader on. Go through the entire screen. Check the headings. Check the buttons. Check the forms. Test the errors. Test loading. Test the modal. Test navigation. Test leaving the flow.",
    "keywords": []
  },
  {
    "id": "leitores-de-tela/bugs-mais-comuns-encontrados-em-producao",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "bugs-mais-comuns-encontrados-em-producao",
    "sectionTitle": "The most common bugs found in production",
    "text": "A button with no accessible name. A clickable icon with no label. A modal that never takes focus. An error that is never announced. A toast that is never announced. Focus lost after navigation. Incorrect focus order. An accordion with no aria-expanded. Tabs with no aria-selected. A half-finished custom select.",
    "keywords": [
      "aria-expanded",
      "aria-selected"
    ]
  },
  {
    "id": "leitores-de-tela/checklist-final-de-talkback-e-voiceover",
    "partId": "leitores-de-tela",
    "partTitle": "TalkBack, VoiceOver and Real Testing",
    "sectionId": "checklist-final-de-talkback-e-voiceover",
    "sectionTitle": "Final TalkBack and VoiceOver Checklist",
    "text": "Does every element have a name? Does every element have the correct role? Is the state announced? Does the flow work without sight? Are errors announced? Are dynamic messages announced? Does focus never disappear? Does the navigation make sense? Is there feedback for both success and error?",
    "keywords": []
  },
  {
    "id": "qa-wcag/o-que-significa-uma-tela-acessivel",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "o-que-significa-uma-tela-acessivel",
    "sectionTitle": "What does an accessible screen actually mean?",
    "text": "An accessible screen is not simply a screen with no WCAG errors. An accessible screen lets the user: Understand the content. Navigate on their own. Perform actions. Receive feedback. Finish the journey.",
    "keywords": []
  },
  {
    "id": "qa-wcag/principais-criterios-wcag-para-angular",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "principais-criterios-wcag-para-angular",
    "sectionTitle": "The WCAG criteria that matter most in Angular",
    "text": "Criterion Topic 1.1.1 Alternative text. 1.3.1 Info and relationships. 1.3.2 Meaningful sequence. 1.4.3 Contrast. 1.4.10 Reflow. 2.1.1 Keyboard. 2.1.2 No keyboard trap. 2.4.3 Focus order. 2.4.6 Headings and labels. 2.4.7 Focus visible. 3.3.1 Error identification. 3.3.2 Labels or instructions. 4.1.2 Name, Role and Value.",
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
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "criterios-que-mais-geram-bugs",
    "sectionTitle": "The criteria that produce the most bugs",
    "text": "2.4.3 Focus order. 4.1.2 Name, Role, Value. 3.3.1 Error identification. 2.1.1 Keyboard navigation. 1.3.1 Relationships.",
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
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "checklist-de-story",
    "sectionTitle": "Story Checklist",
    "text": "Every story should answer: Does it have interactive components? Is a screen reader affected? Is there keyboard navigation? Is focus involved? Is there a dynamic announcement? Is there error handling?",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-de-desenvolvimento",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "checklist-de-desenvolvimento",
    "sectionTitle": "Development Checklist",
    "text": "Is the HTML semantic? Does every field have a label? Is there an accessible name? Is the role correct? Is focus managed? Is there keyboard support? Is there feedback for errors? Is there feedback for success? Has it been checked with TalkBack? Has it been checked with VoiceOver?",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-de-pull-request",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "checklist-de-pull-request",
    "sectionTitle": "Pull Request Checklist",
    "text": "Have the new components been tested? Is focus still correct? Was there no screen reader regression? Are the labels still correct? Is the ARIA still in sync? Does the keyboard still work?",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-de-qa",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "checklist-de-qa",
    "sectionTitle": "QA Checklist",
    "text": "Is every button announced? Is every link announced? Does every field have a label? Is every error announced? Does every modal open correctly? Does every modal return focus? Does every accordion announce expanded and collapsed? Does every tab announce its selected state? Does every stepper announce the current step? Are there any regions where focus is lost?",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-para-talkback",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "checklist-para-talkback",
    "sectionTitle": "TalkBack Checklist",
    "text": "Go through the entire screen. Check the headings. Check the buttons. Check the forms. Check the modal. Check the error messages. Check the toast. Check loading. Check that the flow can be completed.",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-para-voiceover",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "checklist-para-voiceover",
    "sectionTitle": "VoiceOver Checklist",
    "text": "Go through the whole screen. Check every focusable element. Check the forms. Check the alerts. Check the menus. Check the overlays. Check that the journey can be completed.",
    "keywords": []
  },
  {
    "id": "qa-wcag/quando-abrir-um-bug-de-acessibilidade",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "quando-abrir-um-bug-de-acessibilidade",
    "sectionTitle": "When to open an accessibility bug",
    "text": "Whenever the user: Cannot finish a task. Cannot identify an element. Cannot navigate. Loses focus. Receives no feedback. Receives incorrect information.",
    "keywords": []
  },
  {
    "id": "qa-wcag/template-de-bug",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "template-de-bug",
    "sectionTitle": "Bug Template",
    "text": "",
    "keywords": [
      "4.1.2"
    ]
  },
  {
    "id": "qa-wcag/classificacao-de-severidade",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "classificacao-de-severidade",
    "sectionTitle": "Severity",
    "text": "Level Description Critical The user cannot finish the journey. High Serious difficulty navigating. Medium Degraded experience. Low Recommended improvement.",
    "keywords": []
  },
  {
    "id": "qa-wcag/exemplos-de-bugs-criticos",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "exemplos-de-bugs-criticos",
    "sectionTitle": "Examples of critical bugs",
    "text": "A primary button with no name. An inaccessible modal. An error that is never announced. Focus trapped in the wrong place. A field with no label.",
    "keywords": []
  },
  {
    "id": "qa-wcag/exemplos-de-bugs-medios",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "exemplos-de-bugs-medios",
    "sectionTitle": "Examples of medium bugs",
    "text": "An incorrect heading level. Poor alternative text. A tooltip with no description. Redundant announcements.",
    "keywords": []
  },
  {
    "id": "qa-wcag/definition-of-done-acessivel",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "definition-of-done-acessivel",
    "sectionTitle": "Accessible Definition of Done",
    "text": "WCAG AA met. Keyboard working. Validated with TalkBack. Validated with VoiceOver. Accessible name defined. Correct role. Correct state. No lost focus. No known bugs.",
    "keywords": []
  },
  {
    "id": "qa-wcag/checklist-para-revisao-de-tela-nova",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "checklist-para-revisao-de-tela-nova",
    "sectionTitle": "New Screen Review Checklist",
    "text": "Is there an h1? Is the structure semantic? Is the order logical? Is focus handled? Is there screen reader support? Is there error handling? Is there success feedback? Is there loading feedback? Is the navigation consistent?",
    "keywords": []
  },
  {
    "id": "qa-wcag/european-accessibility-act",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "european-accessibility-act",
    "sectionTitle": "European Accessibility Act",
    "text": "Since 28 June 2025 the European Accessibility Act has been enforceable in every country of the European Union. It is no longer only a concern for companies selling into Europe. Companies that serve European customers, or sit in the supply chain of a European company, fall within scope. Category Examples E-commerce Store, checkout, customer area. Banking services Internet banking, app, authentication. Transport Ticket sales, travel information. Communication Telephony, messaging, emergency calls. Books and media E-readers, streaming. The technical standard Conformance is assessed against EN 301 549, which incorporates WCAG. Version 4.1.1 is expected in 2026. In practice, meeting WCAG 2.2 level AA covers most of what the standard requires for web content. It is the same target this entire guide is aiming at. What changes day to day Accessibility stops being an improvement and becomes a condition of entry. It requires conformance documentation, not just a working site. It can be demanded in contracts and procurement. It applies to new products and to updates of existing ones. What to do Establish whether the product serves customers in the European Union. Audit against WCAG 2.2 AA. Record the results, including what is not yet conformant. Put accessibility in the Definition of Done. Test with people using real assistive technology.",
    "keywords": [
      "4.1.1"
    ]
  },
  {
    "id": "qa-wcag/acessibilidade-cognitiva",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "acessibilidade-cognitiva",
    "sectionTitle": "Cognitive accessibility",
    "text": "Most accessibility effort goes to visual and motor impairment. Cognitive disability affects more people and receives less attention. This covers dyslexia, ADHD, autism, anxiety and age-related cognitive decline — and also temporary states: tiredness, being in a hurry, stress, using a phone in the middle of the street. An interface that works for someone exhausted works better for everyone. This is the clearest case that accessibility is not an edge case. What helps Direct language, short sentences, no unnecessary jargon. One main task per screen. A visible step indicator in long flows. Errors that say what to do, not just what is wrong. Destructive actions with confirmation and undo. No time limit, or the option to extend it. Consistent patterns across screens. Not depending on memory between steps. What gets in the way Automatic movement, a carousel that rotates on its own. A long form with no sections and no partial saving. A generic error message. A session that expires with no warning. Too much information at once. An icon with no text label. Related WCAG criteria Criterion Topic 2.2.1 Timing adjustable. 2.2.2 Pause, stop, hide movement. 3.2.3 Consistent navigation. 3.2.4 Consistent identification. 3.3.3 Error suggestion. 3.3.4 Error prevention on important actions. 3.3.7 Redundant entry. 3.3.8 Accessible authentication. In Angular Announcing the error is half of it. The other half is the message saying what to do about it.",
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
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "ferramentas-recomendadas",
    "sectionTitle": "Recommended tools",
    "text": "TalkBack. VoiceOver. Chrome Lighthouse. axe DevTools. Accessibility Insights. Angular CDK A11y.",
    "keywords": []
  },
  {
    "id": "qa-wcag/o-que-ferramentas-nao-encontram",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "o-que-ferramentas-nao-encontram",
    "sectionTitle": "What tools do NOT find",
    "text": "Automated tools do not replace real testing. They are not good at identifying: Broken flows. Bad focus behaviour. A poor experience. Confusing announcements. Complex navigation.",
    "keywords": []
  },
  {
    "id": "qa-wcag/mentalidade-final",
    "partId": "qa-wcag",
    "partTitle": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
    "sectionId": "mentalidade-final",
    "sectionTitle": "The mindset that matters",
    "text": "The question should not be: But rather: If the answer is yes, the implementation is usually on the right track.",
    "keywords": []
  }
];
