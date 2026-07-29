// GERADO por scripts/build-locale.js en — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.en.json

import type { Part } from '../../types';

export const angular: Part = {
  "id": "angular",
  "order": 5,
  "numeral": "05",
  "title": "Angular, Angular Material and Angular CDK A11y",
  "summary": "This part covers the practices specific to Angular, Angular Material and the Angular CDK.",
  "sections": [
    {
      "id": "angular-e-acessivel-por-padrao",
      "partId": "angular",
      "order": 1,
      "title": "Is Angular accessible by default?",
      "summary": "No. Angular renders the HTML you write. Good HTML tends to produce an accessible app; bad HTML is not fixed by the framework.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "No."
        },
        {
          "kind": "paragraph",
          "text": "Angular renders the HTML you write. If the HTML is accessible, the application tends to be accessible. If the HTML is bad, Angular does not fix it."
        }
      ]
    },
    {
      "id": "regra-principal-para-angular",
      "partId": "angular",
      "order": 2,
      "title": "The main rule for Angular",
      "summary": "Semantic HTML first, ARIA second. A button with a click handler beats a div with a click handler, every time.",
      "blocks": [
        {
          "kind": "code",
          "code": "HTML semântico primeiro.\nARIA depois.",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<button (click)=\"salvar()\">\n\nSave\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<div (click)=\"salvar()\">\n\nSave\n\n</div>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "binding-de-aria",
      "partId": "angular",
      "order": 3,
      "title": "Binding ARIA",
      "summary": "Use attribute binding when the ARIA value is dynamic, so it tracks the real state instead of freezing at its initial value.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "When the value is dynamic:"
        },
        {
          "kind": "code",
          "code": "<button\n[attr.aria-label]=\"descricao\">\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Accordion"
        },
        {
          "kind": "code",
          "code": "<button\n[attr.aria-expanded]=\"aberto\">\n\nDetails\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "ngif-e-foco",
      "partId": "angular",
      "order": 4,
      "title": "NgIf and Focus",
      "summary": "One of the most common bugs: when an element leaves the DOM, the focus that was on it disappears with no replacement.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "One of the most common problems."
        },
        {
          "kind": "code",
          "code": "<div *ngIf=\"mostrar\">\n\nContent\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "When the element leaves the DOM, focus can be lost."
        }
      ]
    },
    {
      "id": "ngfor-e-acessibilidade",
      "partId": "angular",
      "order": 5,
      "title": "NgFor and Accessibility",
      "summary": "Repeat inside a real list. A loop of divs loses the \"list with N items\" announcement that orients the reader.",
      "blocks": [
        {
          "kind": "code",
          "code": "<li *ngFor=\"let item of itens\">\n\n{{ item.nome }}\n\n</li>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Prefer semantic structures."
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
      "title": "The Angular Router",
      "summary": "SPAs do not reload the page, so the screen reader has no idea the screen changed. This is the single biggest accessibility gap in Angular apps.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "SPA applications do not reload the page."
        },
        {
          "kind": "paragraph",
          "text": "The screen reader does not automatically notice that the screen changed."
        }
      ]
    },
    {
      "id": "foco-apos-navegacao",
      "partId": "angular",
      "order": 7,
      "title": "Focus after navigation",
      "summary": "After each route change, move focus to the h1 or to the main content. Otherwise focus stays where the old page was.",
      "blocks": [
        {
          "kind": "code",
          "code": "this.router.events\n.subscribe(...)",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "After navigation:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Move focus to the h1.",
            "Or to the main content."
          ]
        }
      ]
    },
    {
      "id": "exemplo-de-destino-de-foco",
      "partId": "angular",
      "order": 8,
      "title": "A focus target, in practice",
      "summary": "Give the heading tabindex=\"-1\" so it can receive focus programmatically without entering the tab order.",
      "blocks": [
        {
          "kind": "code",
          "code": "<h1\ntabindex=\"-1\"\n#titulo>\n\nCurrent Account\n\n</h1>",
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
      "title": "Announcing screen changes",
      "summary": "Announce the name of the new screen after navigating. Announce after moving focus — the reverse order cuts the announcement short.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "In Angular applications it is common to announce the name of the screen."
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
      "summary": "The most important accessibility package in the Angular stack: LiveAnnouncer, FocusMonitor, FocusTrap, FocusKeyManager and InteractivityChecker.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The most important package for accessibility in the Angular stack."
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
      "summary": "Announces a message to screen readers programmatically, through a managed live region — no markup of your own required.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Lets you create announcements for screen readers."
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
      "title": "When to use LiveAnnouncer",
      "summary": "For outcomes that happen without a page change: payment completed, filter applied, search finished, upload done, an error that matters.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Payment completed.",
            "Filter applied.",
            "Search finished.",
            "Upload finished.",
            "An error that matters."
          ]
        }
      ]
    },
    {
      "id": "cdktrapfocus",
      "partId": "angular",
      "order": 13,
      "title": "cdkTrapFocus",
      "summary": "Keeps Tab inside a region. Essential for modals, bottom sheets and dialogs, where focus escaping to the page behind breaks everything.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Traps focus inside a region."
        },
        {
          "kind": "paragraph",
          "text": "Ideal for:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Modal.",
            "Bottom Sheet.",
            "Dialog."
          ]
        }
      ]
    },
    {
      "id": "exemplo-cdktrapfocus",
      "partId": "angular",
      "order": 14,
      "title": "cdkTrapFocus example",
      "summary": "One directive on the container is enough to keep Tab cycling inside it.",
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
      "summary": "Tells you how focus arrived — mouse, keyboard, touch or programmatically. Useful for showing the focus ring only when it helps.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Identifies how focus reached the element."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Mouse.",
            "Keyboard.",
            "Touch.",
            "Programmatic."
          ]
        }
      ]
    },
    {
      "id": "focuskeymanager",
      "partId": "angular",
      "order": 16,
      "title": "FocusKeyManager",
      "summary": "Handles arrow key navigation inside a set of items — tabs, menus, listboxes and comboboxes.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Manages arrow key navigation."
        },
        {
          "kind": "paragraph",
          "text": "Widely used in:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Tabs.",
            "Menus.",
            "Listbox.",
            "Combobox."
          ]
        }
      ]
    },
    {
      "id": "angular-material",
      "partId": "angular",
      "order": 17,
      "title": "Angular Material",
      "summary": "Material implements much of the accessibility for you — which does not mean the result is accessible without testing it.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Material already implements a good part of the accessibility."
        },
        {
          "kind": "paragraph",
          "text": "It still has to be tested."
        }
      ]
    },
    {
      "id": "matdialog",
      "partId": "angular",
      "order": 18,
      "title": "MatDialog",
      "summary": "Brings the dialog role, focus management, ESC and a backdrop already implemented.",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "What you get"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "The dialog role.",
            "Focus management.",
            "ESC.",
            "Backdrop."
          ]
        }
      ]
    },
    {
      "id": "checklist-matdialog",
      "partId": "angular",
      "order": 19,
      "title": "MatDialog Checklist",
      "summary": "Four things to confirm even with MatDialog: a title, focus in, focus back, and a close button.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Does it have a title?",
            "Does it receive focus?",
            "Does it return focus?",
            "Does it have a close button?"
          ]
        }
      ]
    },
    {
      "id": "mattabs",
      "partId": "angular",
      "order": 20,
      "title": "MatTabs",
      "summary": "Implements the tab structure. Still confirm the arrow keys work and that both screen readers announce the selected tab.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Implements the tab structure."
        },
        {
          "kind": "paragraph",
          "text": "Even so, verify:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Arrow keys work.",
            "TalkBack announces correctly.",
            "VoiceOver announces correctly."
          ]
        }
      ]
    },
    {
      "id": "matmenu",
      "partId": "angular",
      "order": 21,
      "title": "MatMenu",
      "summary": "Prefer MatMenu over a hand-rolled menu. Keyboard navigation in menus is easy to get subtly wrong.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Prefer building menus with MatMenu rather than a homemade implementation."
        }
      ]
    },
    {
      "id": "matselect",
      "partId": "angular",
      "order": 22,
      "title": "MatSelect",
      "summary": "The component most prone to accessibility bugs. Always test opening, closing, option announcement and selected state.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The component most prone to accessibility bugs."
        },
        {
          "kind": "paragraph",
          "text": "Always verify:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Opening.",
            "Closing.",
            "How the option is announced.",
            "The selected state."
          ]
        }
      ]
    },
    {
      "id": "matexpansionpanel",
      "partId": "angular",
      "order": 23,
      "title": "MatExpansionPanel",
      "summary": "The Material accordion. Check aria-expanded, where focus goes, and whether the state change is announced.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The equivalent of an accordion."
        },
        {
          "kind": "paragraph",
          "text": "Check:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "aria-expanded.",
            "Focus.",
            "How the state is announced."
          ]
        }
      ]
    },
    {
      "id": "mattable",
      "partId": "angular",
      "order": 24,
      "title": "MatTable",
      "summary": "Do not assume a Material table is automatically accessible. Check the caption, the headers, sorting and focus.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Do not assume every Material table is automatically accessible."
        },
        {
          "kind": "paragraph",
          "text": "Verify:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "caption.",
            "headers.",
            "sort.",
            "focus."
          ]
        }
      ]
    },
    {
      "id": "overlay-components",
      "partId": "angular",
      "order": 25,
      "title": "Overlay Components",
      "summary": "Anything that opens over the screen deserves extra attention: modal, popover, tooltip, select, menu and datepicker.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Every component that opens over the screen deserves extra attention."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Modal.",
            "Popover.",
            "Tooltip.",
            "Select.",
            "Menu.",
            "Datepicker."
          ]
        }
      ]
    },
    {
      "id": "datepicker",
      "partId": "angular",
      "order": 26,
      "title": "Datepicker",
      "summary": "Check keyboard navigation and how the day, month and year are announced. Date pickers fail quietly for keyboard users.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Verify:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Keyboard navigation.",
            "How the day is announced.",
            "How the month is announced.",
            "How the year is announced.",
            "That selection works."
          ]
        }
      ]
    },
    {
      "id": "loading-angular",
      "partId": "angular",
      "order": 27,
      "title": "Loading in Angular",
      "summary": "State changes have to be announced. A spinner that only spins tells nothing to anyone using a screen reader.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "State changes have to be announced."
        },
        {
          "kind": "code",
          "code": "aria-busy=\"true\"",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Or:"
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
      "title": "Lazy Loading",
      "summary": "When content appears after an async load, decide deliberately where focus goes and what gets announced.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "When content appears after an asynchronous load, focus and announcement both have to be considered."
        }
      ]
    },
    {
      "id": "signals-e-acessibilidade",
      "partId": "angular",
      "order": 29,
      "title": "Signals and Accessibility",
      "summary": "Signals update the UI automatically, but screen readers are not notified automatically. Use aria-live or LiveAnnouncer.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Signals update the UI automatically."
        },
        {
          "kind": "paragraph",
          "text": "But screen readers are not notified automatically."
        },
        {
          "kind": "paragraph",
          "text": "Use:"
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
      "title": "Standalone Components",
      "summary": "No accessibility differences of their own. The same rules apply exactly as before.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "They have no accessibility-specific differences."
        },
        {
          "kind": "paragraph",
          "text": "The same rules still apply."
        }
      ]
    },
    {
      "id": "pipes",
      "partId": "angular",
      "order": 31,
      "title": "Pipes",
      "summary": "Formatting can hurt how something is read aloud. Check how currency, dates and numbers are actually announced.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Be careful with formatting that harms how the value is read."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Example"
        },
        {
          "kind": "code",
          "code": "R$ 1.500,00",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Check how the screen reader announces it."
        }
      ]
    },
    {
      "id": "custom-components",
      "partId": "angular",
      "order": 32,
      "title": "Custom Components",
      "summary": "The biggest source of accessibility bugs in Angular: custom buttons, selects, dropdowns, steppers and menus.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The biggest source of bugs in Angular."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Custom buttons.",
            "Custom select.",
            "Custom dropdown.",
            "Custom stepper.",
            "Custom menu."
          ]
        }
      ]
    },
    {
      "id": "regra-para-custom-components",
      "partId": "angular",
      "order": 33,
      "title": "The rule for Custom Components",
      "summary": "Four questions before building from scratch: is there a native element, a Material component, an Angular Aria directive — and do you really need your own?",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Always ask:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Is there a native element for this?",
            "Is there a Material component?",
            "Is there an Angular Aria directive?",
            "Do I really need to build it from scratch?"
          ]
        }
      ]
    },
    {
      "id": "angular-aria",
      "partId": "angular",
      "order": 34,
      "title": "Angular Aria",
      "summary": "The official @angular/aria package, shipped with Angular v22: headless directives implementing the WAI-ARIA Authoring Practices.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "In November 2025, with Angular v22, the Angular team released the official Angular Aria package."
        },
        {
          "kind": "code",
          "code": "npm install @angular/aria",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "These are headless directives implementing the WAI-ARIA Authoring Practices patterns. They handle keyboard navigation, ARIA attributes, focus management and screen reader support. You provide the HTML and the styling."
        },
        {
          "kind": "callout",
          "tone": "success",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "This is the most significant accessibility release in Angular's history. Combobox, listbox, menu and tree are the components that produce the most accessibility bugs when hand-rolled — and now there is an official implementation, maintained by the framework team, following the specification."
            }
          ]
        },
        {
          "kind": "paragraph",
          "text": "Before it, the answer to \"I need an accessible combobox\" was \"the implementation is complex, avoid building it by hand\" — with nothing offered in its place. Now there is an answer."
        }
      ]
    },
    {
      "id": "padroes-do-angular-aria",
      "partId": "angular",
      "order": 35,
      "title": "Angular Aria patterns",
      "summary": "Thirteen patterns, from combobox to grid. Compare the list with the components that produce the most accessibility bugs — it is nearly the same list.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "There are thirteen patterns available."
        },
        {
          "kind": "table",
          "headers": [
            "Directive",
            "Purpose"
          ],
          "rows": [
            [
              "ngCombobox",
              "A text input coordinated with a popup."
            ],
            [
              "ngAutocomplete",
              "An input with filtered suggestions."
            ],
            [
              "ngListbox",
              "A list of options, single or multiple selection."
            ],
            [
              "ngSelect",
              "Single-selection dropdown."
            ],
            [
              "ngMultiselect",
              "Multiple-selection dropdown."
            ],
            [
              "ngMenu",
              "A menu with submenus."
            ],
            [
              "ngMenubar",
              "A horizontal navigation bar."
            ],
            [
              "ngToolbar",
              "A group of controls."
            ],
            [
              "ngTabs",
              "Tabs."
            ],
            [
              "ngAccordion",
              "Expandable panels."
            ],
            [
              "ngTree",
              "A hierarchical list with expand and collapse."
            ],
            [
              "ngGrid",
              "Two-dimensional data with cell navigation."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "Compare this with the list of components that produce the most accessibility bugs in Angular. It is almost the same list."
        }
      ]
    },
    {
      "id": "angular-aria-material-ou-cdk",
      "partId": "angular",
      "order": 36,
      "title": "Angular Aria, Material or CDK?",
      "summary": "The three coexist and solve different problems: styled components, unstyled behaviour, and low-level utilities.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The three coexist and solve different problems."
        },
        {
          "kind": "table",
          "headers": [
            "Package",
            "What you get",
            "When to use it"
          ],
          "rows": [
            [
              "Angular Material",
              "A finished component, with styling.",
              "The Material look works for the product."
            ],
            [
              "Angular Aria",
              "Behaviour without styling.",
              "Your own design system, without reimplementing keyboard and ARIA."
            ],
            [
              "Angular CDK A11y",
              "Low-level utilities.",
              "LiveAnnouncer, FocusTrap and FocusMonitor in any scenario."
            ]
          ]
        },
        {
          "kind": "paragraph",
          "text": "The CDK A11y package is still needed even when using Angular Aria. Announcing \"payment completed\" with LiveAnnouncer is not a widget pattern."
        }
      ]
    },
    {
      "id": "o-que-o-angular-aria-nao-resolve",
      "partId": "angular",
      "order": 37,
      "title": "What Angular Aria does not solve",
      "summary": "It covers widget patterns. Most production accessibility bugs are clickable divs, unlabelled icons and lost focus — none of which it touches.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The library solves widget patterns. Most accessibility bugs in production are not complex widgets."
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "A clickable div instead of a button.",
            "A clickable icon with no accessible name.",
            "An input with only a placeholder.",
            "A form error that is never announced.",
            "Focus lost after a route change.",
            "Headings out of order.",
            "Insufficient contrast.",
            "An image with no alternative text.",
            "A table with no associated headers."
          ]
        },
        {
          "kind": "callout",
          "tone": "warning",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "Headless directive means you provide the HTML and the CSS. You can use Angular Aria and still ship an inaccessible screen: invisible focus, poor contrast, DOM order that does not match the visual order."
            }
          ]
        },
        {
          "kind": "paragraph",
          "text": "The library removes one class of error. It does not replace knowing the subject, nor testing with TalkBack and VoiceOver."
        }
      ]
    },
    {
      "id": "erro-mais-comum-do-time-front",
      "partId": "angular",
      "order": 38,
      "title": "The front-end team's most common mistake",
      "summary": "A div with a click handler. It works visually and loses role, keyboard, state and semantics all at once.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\n(click)=\"abrir()\">\n\nOpen\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "It works visually."
        },
        {
          "kind": "paragraph",
          "text": "But it loses:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "The role.",
            "The keyboard.",
            "The state.",
            "The semantics."
          ]
        }
      ]
    },
    {
      "id": "checklist-angular",
      "partId": "angular",
      "order": 39,
      "title": "Angular Checklist",
      "summary": "Ten questions covering semantics, accessible names, focus management, router behaviour, Material and custom components.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Is the HTML semantic?",
            "Is there an accessible name?",
            "Is focus managed?",
            "Are important changes announced?",
            "Does the router move focus correctly?",
            "Has Material been verified?",
            "Have custom components been audited?",
            "Does it work with the keyboard alone?",
            "Does it work with TalkBack?",
            "Does it work with VoiceOver?"
          ]
        }
      ]
    }
  ]
};
