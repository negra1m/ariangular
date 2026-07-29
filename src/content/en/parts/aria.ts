// GERADO por scripts/build-locale.js en — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.en.json

import type { Part } from '../../types';

export const aria: Part = {
  "id": "aria",
  "order": 2,
  "numeral": "02",
  "title": "Complete ARIA for Angular",
  "summary": "Everything an Angular developer normally reaches for day to day, for TalkBack, VoiceOver and WCAG.",
  "sections": [
    {
      "id": "o-que-e-aria",
      "partId": "aria",
      "order": 1,
      "title": "What is ARIA?",
      "summary": "ARIA exists to complement HTML semantics, never to replace them. If a native tag solves it, use the native tag.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "ARIA stands for:"
        },
        {
          "kind": "code",
          "code": "Accessible Rich Internet Applications",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "ARIA exists to complement HTML semantics."
        },
        {
          "kind": "callout",
          "tone": "warning",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "ARIA does NOT replace semantic HTML."
            }
          ]
        },
        {
          "kind": "code",
          "code": "<button>\nSave\n</button>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<div role=\"button\">\nSave\n</div>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "regra-de-ouro",
      "partId": "aria",
      "order": 2,
      "title": "The Golden Rule",
      "summary": "No ARIA is better than bad ARIA. If native HTML already solves the problem, adding ARIA only creates room for it to go stale.",
      "blocks": [
        {
          "kind": "code",
          "code": "No ARIA is better than bad ARIA.",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "If native HTML solves it, do not add ARIA for no reason."
        }
      ]
    },
    {
      "id": "accessible-name-2",
      "partId": "aria",
      "order": 3,
      "title": "Accessible Name",
      "summary": "Every interactive element needs a name. Inner text is the simplest source, and the one least likely to go out of date.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Every interactive element must have an accessible name."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Inner text"
        },
        {
          "kind": "code",
          "code": "<button>\nContinue\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Continue, button"
        }
      ]
    },
    {
      "id": "aria-label",
      "partId": "aria",
      "order": 4,
      "title": "aria-label",
      "summary": "Sets the accessible name when there is no visible text — icon-only buttons, actions without a label, custom elements.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Attribute",
            "Value",
            "Purpose"
          ],
          "rows": [
            [
              "aria-label",
              "string",
              "Sets the accessible name."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "When to use it"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "An icon-only button.",
            "Actions with no visible text.",
            "Custom elements."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Example"
        },
        {
          "kind": "code",
          "code": "<button aria-label=\"Close modal\">\n\n  <mat-icon>close</mat-icon>\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Close modal, button"
        }
      ]
    },
    {
      "id": "aria-labelledby",
      "partId": "aria",
      "order": 5,
      "title": "aria-labelledby",
      "summary": "Uses another element on the page as the accessible name, by referencing its id. Useful when the label already exists as visible text.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Value",
            "Purpose"
          ],
          "rows": [
            [
              "id",
              "Uses another element as the name."
            ]
          ]
        },
        {
          "kind": "code",
          "code": "<h2 id=\"titulo\">\nPayment\n</h2>\n\n<button\naria-labelledby=\"titulo\">\n\nConfirm\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-describedby",
      "partId": "aria",
      "order": 6,
      "title": "aria-describedby",
      "summary": "Adds a description alongside the name. The screen reader reads the name first, then the description.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Adds a complementary description."
        },
        {
          "kind": "code",
          "code": "<input\nid=\"cpf\"\naria-describedby=\"ajudaCpf\">\n\n<span id=\"ajudaCpf\">\nDigits only\n</span>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-hidden",
      "partId": "aria",
      "order": 7,
      "title": "aria-hidden",
      "summary": "Hides an element from the accessibility tree. Never put it on something focusable — the Tab key still reaches it, but nothing is announced.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Value",
            "Purpose"
          ],
          "rows": [
            [
              "true",
              "Hides it from the screen reader."
            ],
            [
              "false",
              "Exposes it to the screen reader."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Decorative image"
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
      "summary": "Announces whether a control is expanded or collapsed. It has to track the real state — a stale value is worse than none.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Indicates the expanded state."
        },
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\">\n\nDetails\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Details, button, collapsed"
        }
      ]
    },
    {
      "id": "aria-controls",
      "partId": "aria",
      "order": 9,
      "title": "aria-controls",
      "summary": "Connects a control to the content it operates, so the screen reader can offer a way to jump straight to it.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Connects a control to a piece of content."
        },
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\"\naria-controls=\"painel1\">\n\nOpen\n\n</button>\n\n<div id=\"painel1\">\n\nContent\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-current",
      "partId": "aria",
      "order": 10,
      "title": "aria-current",
      "summary": "Marks the current item within a set: the current page in a nav, the current step in a stepper, the current location in a breadcrumb.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Value",
            "Purpose"
          ],
          "rows": [
            [
              "page",
              "Current page."
            ],
            [
              "step",
              "Current step."
            ],
            [
              "location",
              "Current location."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Stepper"
        },
        {
          "kind": "code",
          "code": "<li aria-current=\"step\">\n\nPayment\n\n</li>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-selected",
      "partId": "aria",
      "order": 11,
      "title": "aria-selected",
      "summary": "Announces which item is selected in a tab list, listbox or grid. Without it the screen reader says \"tab\" but never which one is active.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Indicates selection."
        },
        {
          "kind": "code",
          "code": "<button\nrole=\"tab\"\naria-selected=\"true\">\n\nDetails\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-checked",
      "partId": "aria",
      "order": 12,
      "title": "aria-checked",
      "summary": "Carries the checked state of a custom checkbox, radio or switch. A native input already does this on its own.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"checkbox\"\naria-checked=\"true\">\n\nI agree\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "I agree, checkbox, checked"
        }
      ]
    },
    {
      "id": "aria-pressed",
      "partId": "aria",
      "order": 13,
      "title": "aria-pressed",
      "summary": "For toggle buttons — favourite, mute, bookmark. It tells the screen reader the button holds a state, not just an action.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Toggle buttons."
        },
        {
          "kind": "code",
          "code": "<button\naria-pressed=\"true\">\n\nFavourite\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-disabled",
      "partId": "aria",
      "order": 14,
      "title": "aria-disabled",
      "summary": "Announces the control as unavailable while keeping it reachable by keyboard — unlike the native disabled attribute, which removes it from the tab order.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-disabled=\"true\">\n\nContinue\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Continue, button, unavailable"
        }
      ]
    },
    {
      "id": "aria-required",
      "partId": "aria",
      "order": 15,
      "title": "aria-required",
      "summary": "Announces that the field must be filled in. Native required already does it; use this when the control is not a native input.",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\naria-required=\"true\">",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Required field"
        }
      ]
    },
    {
      "id": "aria-invalid",
      "partId": "aria",
      "order": 16,
      "title": "aria-invalid",
      "summary": "Marks a field as failing validation, so the state is announced together with the name when the person reaches it.",
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
      "id": "aria-live",
      "partId": "aria",
      "order": 17,
      "title": "aria-live",
      "summary": "Announces content that changes without a page load — toasts, results, status. Use polite; assertive interrupts whatever is being read.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Value",
            "Purpose"
          ],
          "rows": [
            [
              "off",
              "Does not announce."
            ],
            [
              "polite",
              "Announces when there is a pause."
            ],
            [
              "assertive",
              "Announces immediately."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Toast"
        },
        {
          "kind": "code",
          "code": "<div aria-live=\"polite\">\n\nPayment completed\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-atomic",
      "partId": "aria",
      "order": 18,
      "title": "aria-atomic",
      "summary": "Controls how much of a live region is re-read when part of it changes — the whole thing, or only what changed.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Controls how much gets re-read."
        },
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\"\naria-atomic=\"true\">\n\n3 items selected\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-busy",
      "partId": "aria",
      "order": 19,
      "title": "aria-busy",
      "summary": "Tells assistive technology that a region is still loading, so it holds off announcing a half-updated state.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Signals loading."
        },
        {
          "kind": "code",
          "code": "<div aria-busy=\"true\">\n\nLoading\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-modal",
      "partId": "aria",
      "order": 20,
      "title": "aria-modal",
      "summary": "Tells the screen reader that everything behind the dialog is unavailable. Without it, the content underneath keeps being read.",
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
      "summary": "Announces that a control opens a menu, a dialog or a list — so the person knows what to expect before activating it.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Value",
            "Purpose"
          ],
          "rows": [
            [
              "menu",
              "Opens a menu."
            ],
            [
              "dialog",
              "Opens a modal."
            ],
            [
              "listbox",
              "Opens a list."
            ]
          ]
        },
        {
          "kind": "code",
          "code": "<button\naria-haspopup=\"menu\">\n\nActions\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "aria-para-progress-bar",
      "partId": "aria",
      "order": 22,
      "title": "ARIA for a Progress Bar",
      "summary": "role=progressbar needs valuemin, valuemax and valuenow together — otherwise the screen reader announces a bar with no number.",
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
      "title": "The roles you will actually use",
      "summary": "The handful of ARIA roles that cover almost every real case: button, link, dialog, alert, status, tabs, checkbox, switch, menu and listbox.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Role",
            "Purpose"
          ],
          "rows": [
            [
              "button",
              "Button."
            ],
            [
              "link",
              "Link."
            ],
            [
              "dialog",
              "Modal."
            ],
            [
              "alert",
              "Urgent message."
            ],
            [
              "status",
              "Informational status."
            ],
            [
              "tablist",
              "Tab container."
            ],
            [
              "tab",
              "Tab."
            ],
            [
              "tabpanel",
              "Tab content."
            ],
            [
              "checkbox",
              "Checkbox."
            ],
            [
              "switch",
              "On and off."
            ],
            [
              "menu",
              "Menu."
            ],
            [
              "menuitem",
              "Menu item."
            ],
            [
              "listbox",
              "Selectable list."
            ],
            [
              "option",
              "Option."
            ]
          ]
        }
      ]
    },
    {
      "id": "roles-que-voce-quase-nunca-precisara",
      "partId": "aria",
      "order": 24,
      "title": "Roles you will almost never need",
      "summary": "tree, treegrid, feed, math, meter, log and marquee. Reaching for these without a real need usually makes things worse.",
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
          "text": "Do not use them without a real need."
        }
      ]
    },
    {
      "id": "angular-attribute-binding",
      "partId": "aria",
      "order": 25,
      "title": "Angular Attribute Binding",
      "summary": "How to bind ARIA to a dynamic value in Angular, so the attribute tracks the real state instead of freezing at its initial value.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\n[attr.aria-label]=\"descricao\">\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "This also works"
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
      "title": "The most common ARIA mistakes",
      "summary": "Redundant roles, unnecessary labels, aria-hidden on real content, live region overuse, and states that stop tracking the DOM.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Adding role=\"button\" to a button.",
            "Adding an aria-label that is not needed.",
            "aria-hidden on content that matters.",
            "Too many live regions.",
            "An aria-expanded state that stops tracking reality.",
            "aria-describedby pointing at an id that does not exist.",
            "Building a custom component with no keyboard support."
          ]
        }
      ]
    },
    {
      "id": "checklist-aria",
      "partId": "aria",
      "order": 27,
      "title": "ARIA Checklist",
      "summary": "Six questions to run over any element carrying ARIA, before calling it done.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Does it have an accessible name?",
            "Does it have the correct role?",
            "Does it have the correct state?",
            "Is it in sync with the DOM?",
            "Does TalkBack announce it correctly?",
            "Does VoiceOver announce it correctly?"
          ]
        }
      ]
    }
  ]
};
