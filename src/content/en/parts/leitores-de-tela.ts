// GERADO por scripts/build-locale.js en — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.en.json

import type { Part } from '../../types';

export const leitoresDeTela: Part = {
  "id": "leitores-de-tela",
  "order": 6,
  "numeral": "06",
  "title": "TalkBack, VoiceOver and Real Testing",
  "summary": "This part focuses on how screen readers actually behave. Plenty of components are technically correct in the HTML and still deliver a poor experience.",
  "sections": [
    {
      "id": "principio-fundamental",
      "partId": "leitores-de-tela",
      "order": 1,
      "title": "The Fundamental Principle",
      "summary": "Screen readers rely on name, role and state. Almost every bug can be diagnosed through those three questions.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Screen readers rely on:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "An accessible name.",
            "The correct role.",
            "The correct state."
          ]
        },
        {
          "kind": "paragraph",
          "text": "Almost every bug can be analysed through those three points."
        }
      ]
    },
    {
      "id": "exemplo-de-leitura",
      "partId": "leitores-de-tela",
      "order": 2,
      "title": "What an announcement sounds like",
      "summary": "A plain button announces its name and its role. Both TalkBack and VoiceOver say the same thing here.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\n\nSave\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Save, button"
        },
        {
          "kind": "reading",
          "text": "Save, button"
        }
      ]
    },
    {
      "id": "botao-com-icone",
      "partId": "leitores-de-tela",
      "order": 3,
      "title": "Icon Button",
      "summary": "Without a label the announcement is just \"button\". With aria-label it becomes the action the person is about to take.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\n\n<mat-icon>\nclose\n</mat-icon>\n\n</button>",
          "variant": "wrong"
        },
        {
          "kind": "reading",
          "text": "Button"
        },
        {
          "kind": "code",
          "code": "<button\naria-label=\"Close\">\n\n<mat-icon>\nclose\n</mat-icon>\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Close, button"
        }
      ]
    },
    {
      "id": "campos-obrigatorios-2",
      "partId": "leitores-de-tela",
      "order": 4,
      "title": "Required Fields",
      "summary": "The required condition is announced along with the field, so the person knows before typing rather than after submitting.",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\nrequired>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Edit field\nRequired"
        }
      ]
    },
    {
      "id": "campo-invalido",
      "partId": "leitores-de-tela",
      "order": 5,
      "title": "Invalid Field",
      "summary": "aria-invalid makes the failure part of what the screen reader says when focus lands on the field.",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\naria-invalid=\"true\">",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Invalid field"
        }
      ]
    },
    {
      "id": "checkbox",
      "partId": "leitores-de-tela",
      "order": 6,
      "title": "Checkbox",
      "summary": "A native checkbox announces the label, the role and the state — and updates the state on its own when toggled.",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\ntype=\"checkbox\">\n\n<label>\n\nI accept the terms\n\n</label>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "I accept the terms\nCheckbox\nNot checked"
        },
        {
          "kind": "reading",
          "text": "I accept the terms\nCheckbox\nChecked"
        }
      ]
    },
    {
      "id": "switch",
      "partId": "leitores-de-tela",
      "order": 7,
      "title": "Switch",
      "summary": "role=switch with aria-checked announces on and off, which reads more naturally than checked and unchecked for a toggle.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\nrole=\"switch\"\naria-checked=\"true\">\n\nNotifications\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Notifications\nSwitch\nOn"
        }
      ]
    },
    {
      "id": "accordion-2",
      "partId": "leitores-de-tela",
      "order": 8,
      "title": "Accordion",
      "summary": "The announcement has to change when the panel opens. If it always says \"collapsed\", aria-expanded is not bound to the real state.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\">\n\nDetails\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Details\nButton\nCollapsed"
        },
        {
          "kind": "reading",
          "text": "Details\nButton\nExpanded"
        }
      ]
    },
    {
      "id": "tabs-2",
      "partId": "leitores-de-tela",
      "order": 9,
      "title": "Tabs",
      "summary": "The selected tab is announced as selected. Without aria-selected the person hears \"tab\" and cannot tell which one is active.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\nrole=\"tab\"\naria-selected=\"true\">\n\nDetails\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Details\nTab\nSelected"
        }
      ]
    },
    {
      "id": "stepper-2",
      "partId": "leitores-de-tela",
      "order": 10,
      "title": "Stepper",
      "summary": "aria-current=\"step\" turns a visual highlight into something the screen reader can convey.",
      "blocks": [
        {
          "kind": "code",
          "code": "<li\naria-current=\"step\">\n\nPayment\n\n</li>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Payment\nCurrent step"
        }
      ]
    },
    {
      "id": "mensagens-dinamicas-2",
      "partId": "leitores-de-tela",
      "order": 11,
      "title": "Dynamic Messages",
      "summary": "A live region announces on its own, without moving focus — which is exactly what you want for a confirmation.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\">\n\nPayment completed\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Focus does not need to move."
        },
        {
          "kind": "paragraph",
          "text": "The screen reader announces it automatically."
        }
      ]
    },
    {
      "id": "role-alert",
      "partId": "leitores-de-tela",
      "order": 12,
      "title": "role=\"alert\"",
      "summary": "Interrupts whatever is being read. Reserve it for what genuinely cannot wait — everything else becomes noise.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"alert\">\n\nPayment failed\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "It is announced immediately."
        },
        {
          "kind": "paragraph",
          "text": "Use it only for messages that matter."
        }
      ]
    },
    {
      "id": "foco-visivel",
      "partId": "leitores-de-tela",
      "order": 13,
      "title": "Visible Focus",
      "summary": "Every focusable element has to show that it has focus. Removing the outline without a replacement is the equivalent of hiding the mouse cursor.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Every focusable element must visually indicate that it received focus."
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
      "title": "Focus Order",
      "summary": "DOM order has to match visual order. Screen reader users move through the structure of the page, not through the layout.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The DOM order has to reflect the visual order."
        },
        {
          "kind": "paragraph",
          "text": "Screen reader users navigate by following the structure of the page."
        }
      ]
    },
    {
      "id": "modais",
      "partId": "leitores-de-tela",
      "order": 15,
      "title": "Modals",
      "summary": "On open: focus moves in, the content behind becomes unreachable, Tab stays inside. On close: focus returns to whatever opened it.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "When it opens:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Focus moves into the modal.",
            "The content behind becomes unreachable.",
            "Tab only cycles inside it."
          ]
        },
        {
          "kind": "paragraph",
          "text": "When it closes:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Focus returns to the element that opened it."
          ]
        }
      ]
    },
    {
      "id": "problema-classico",
      "partId": "leitores-de-tela",
      "order": 16,
      "title": "The Classic Problem",
      "summary": "The modal closes and focus vanishes to the top of the document. It has to go back to the button that opened it.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\n\nEdit\n\n</button>\n\n<div *ngIf=\"aberto\">\n\nModal\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "When the modal closes, focus often disappears."
        },
        {
          "kind": "paragraph",
          "text": "It should return to the Edit button."
        }
      ]
    },
    {
      "id": "loading-2",
      "partId": "leitores-de-tela",
      "order": 17,
      "title": "Loading",
      "summary": "Announce that something started and that it finished. Silence during a wait is indistinguishable from a broken page.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Do not leave the user without feedback."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Example"
        },
        {
          "kind": "code",
          "code": "Carregando extrato...",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Statement loaded successfully"
        }
      ]
    },
    {
      "id": "talkback-x-voiceover",
      "partId": "leitores-de-tela",
      "order": 18,
      "title": "TalkBack vs VoiceOver",
      "summary": "The two differ in predictable places: forms, tabs, modals and selects. Testing on one does not cover the other.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Scenario",
            "Common differences"
          ],
          "rows": [
            [
              "Forms",
              "Small differences in what gets announced."
            ],
            [
              "Tabs",
              "The order of the announcement can vary."
            ],
            [
              "Modals",
              "Focus behaviour can vary."
            ],
            [
              "Selects",
              "Highly dependent on the implementation."
            ]
          ]
        }
      ]
    },
    {
      "id": "roteiro-de-teste-manual",
      "partId": "leitores-de-tela",
      "order": 19,
      "title": "Manual Test Script",
      "summary": "Ten steps to run on every screen with a real screen reader — the part no automated tool can do for you.",
      "blocks": [
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "Turn the screen reader on.",
            "Go through the entire screen.",
            "Check the headings.",
            "Check the buttons.",
            "Check the forms.",
            "Test the errors.",
            "Test loading.",
            "Test the modal.",
            "Test navigation.",
            "Test leaving the flow."
          ]
        }
      ]
    },
    {
      "id": "bugs-mais-comuns-encontrados-em-producao",
      "partId": "leitores-de-tela",
      "order": 20,
      "title": "The most common bugs found in production",
      "summary": "Unnamed buttons, unlabelled icons, modals without focus, unannounced errors, and focus lost after navigation.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "A button with no accessible name.",
            "A clickable icon with no label.",
            "A modal that never takes focus.",
            "An error that is never announced.",
            "A toast that is never announced.",
            "Focus lost after navigation.",
            "Incorrect focus order.",
            "An accordion with no aria-expanded.",
            "Tabs with no aria-selected.",
            "A half-finished custom select."
          ]
        }
      ]
    },
    {
      "id": "checklist-final-de-talkback-e-voiceover",
      "partId": "leitores-de-tela",
      "order": 21,
      "title": "Final TalkBack and VoiceOver Checklist",
      "summary": "Nine questions to answer with a real device before shipping — ending with the only one that really matters.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Does every element have a name?",
            "Does every element have the correct role?",
            "Is the state announced?",
            "Does the flow work without sight?",
            "Are errors announced?",
            "Are dynamic messages announced?",
            "Does focus never disappear?",
            "Does the navigation make sense?",
            "Is there feedback for both success and error?"
          ]
        }
      ]
    }
  ]
};
