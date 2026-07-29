// GERADO por scripts/build-locale.js en — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.en.json

import type { Part } from '../../types';

export const componentes: Part = {
  "id": "componentes",
  "order": 4,
  "numeral": "04",
  "title": "Interactive Components and Complex Structures",
  "summary": "This part covers the components that produce the most accessibility bugs in Angular applications.",
  "sections": [
    {
      "id": "botoes",
      "partId": "componentes",
      "order": 1,
      "title": "Buttons",
      "summary": "Use a real button. A clickable div loses the role, the keyboard, the state and the semantics all at once.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button>\nContinue\n</button>",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Continue, button"
        },
        {
          "kind": "code",
          "code": "<div (click)=\"continuar()\">\nContinue\n</div>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "botao-apenas-com-icone",
      "partId": "componentes",
      "order": 2,
      "title": "Icon-only Button",
      "summary": "Without a label, the screen reader announces just \"button\". The person knows a control exists but not what it does.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-label=\"Edit address\">\n\n  <mat-icon>edit</mat-icon>\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Edit address, button"
        }
      ]
    },
    {
      "id": "links",
      "partId": "componentes",
      "order": 3,
      "title": "Links",
      "summary": "Links navigate, buttons perform actions. Swapping them confuses anyone who relies on the announced role to know what will happen.",
      "blocks": [
        {
          "kind": "code",
          "code": "<a href=\"/conta\">\nView account\n</a>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<a (click)=\"salvar()\">\nSave\n</a>",
          "variant": "wrong"
        },
        {
          "kind": "paragraph",
          "text": "Links navigate. Buttons perform actions."
        }
      ]
    },
    {
      "id": "cards-clicaveis",
      "partId": "componentes",
      "order": 4,
      "title": "Clickable Cards",
      "summary": "Wrap the card in a real button or anchor. A div with a click handler is invisible to the keyboard.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button class=\"card\">\n\nCurrent Account\n\n</button>",
          "variant": "correct"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Alternative"
        },
        {
          "kind": "code",
          "code": "<a\nhref=\"/conta\">\n\nCurrent Account\n\n</a>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "accordion",
      "partId": "componentes",
      "order": 5,
      "title": "Accordion",
      "summary": "The trigger needs aria-expanded and aria-controls, so the state is announced along with the name.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-expanded=\"false\"\naria-controls=\"faq1\">\n\nHow does it work?\n\n</button>\n\n<div id=\"faq1\">\n\nContent\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "How does it work?\nButton\nCollapsed"
        }
      ]
    },
    {
      "id": "accordion-com-angular",
      "partId": "componentes",
      "order": 6,
      "title": "Accordion in Angular",
      "summary": "Bind aria-expanded to the real state. A hard-coded value announces \"collapsed\" forever, even with the panel open.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\n[attr.aria-expanded]=\"aberto\">\n\nQuestion\n\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "aria-expanded has to reflect the real state."
        }
      ]
    },
    {
      "id": "tabs",
      "partId": "componentes",
      "order": 7,
      "title": "Tabs",
      "summary": "role=tablist with aria-selected on each tab. Without it the screen reader says \"tab\" but never which one is active.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"tablist\">\n\n  <button\n  role=\"tab\"\n  aria-selected=\"true\">\n\n    Details\n\n  </button>\n\n  <button\n  role=\"tab\"\n  aria-selected=\"false\">\n\n    Address\n\n  </button>\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "tab-panel",
      "partId": "componentes",
      "order": 8,
      "title": "Tab Panel",
      "summary": "The panel that holds the content of the selected tab, tied to it so the reader can move between the two.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"tabpanel\">\n\nTab content.\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "modal",
      "partId": "componentes",
      "order": 9,
      "title": "Modal",
      "summary": "role=dialog, aria-modal and a label. Without aria-modal the screen reader keeps reading the content behind it.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"dialog\"\naria-modal=\"true\"\naria-labelledby=\"tituloModal\">\n\n<h2 id=\"tituloModal\">\nConfirm payment\n</h2>\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "checklist-modal",
      "partId": "componentes",
      "order": 10,
      "title": "Modal Checklist",
      "summary": "Six things every modal has to do: role, aria-modal, take focus, trap focus, close on ESC, and give focus back.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Does it have role=\"dialog\"?",
            "Does it have aria-modal?",
            "Does it receive focus when it opens?",
            "Does it trap focus inside?",
            "Does it close on ESC?",
            "Does it return focus when it closes?"
          ]
        }
      ]
    },
    {
      "id": "bottom-sheet",
      "partId": "componentes",
      "order": 11,
      "title": "Bottom Sheet",
      "summary": "It is a modal that happens to slide up from the bottom. Same rules apply, without exception.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Treat it as a modal."
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
      "title": "Menu",
      "summary": "The trigger announces that it opens a menu, through aria-haspopup and aria-expanded.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-haspopup=\"menu\"\naria-expanded=\"false\">\n\nActions\n\n</button>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "itens-de-menu",
      "partId": "componentes",
      "order": 13,
      "title": "Menu Items",
      "summary": "Each item carries role=menuitem, and the whole set has to be reachable with the arrow keys.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div role=\"menu\">\n\n  <button role=\"menuitem\">\n  Edit\n  </button>\n\n  <button role=\"menuitem\">\n  Delete\n  </button>\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "dropdown",
      "partId": "componentes",
      "order": 14,
      "title": "Dropdown",
      "summary": "Prefer the native select whenever possible. It comes with keyboard, state and mobile behaviour already correct.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Whenever possible, prefer the native select."
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
      "title": "Combobox",
      "summary": "One of the hardest patterns to build correctly. Since Angular v22 there is an official answer: ngCombobox from @angular/aria.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"combobox\"\naria-expanded=\"false\">\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Complex to implement. Avoid building it by hand — see Angular Aria."
        }
      ]
    },
    {
      "id": "lista",
      "partId": "componentes",
      "order": 16,
      "title": "List",
      "summary": "A real ul or ol makes the screen reader announce \"list with N items\", which tells the person how much is ahead.",
      "blocks": [
        {
          "kind": "code",
          "code": "<ul>\n\n  <li>Item 1</li>\n\n  <li>Item 2</li>\n\n</ul>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "List with 2 items"
        }
      ]
    },
    {
      "id": "breadcrumb",
      "partId": "componentes",
      "order": 17,
      "title": "Breadcrumb",
      "summary": "A labelled nav, with aria-current=\"page\" on the current item so it is announced as where you are.",
      "blocks": [
        {
          "kind": "code",
          "code": "<nav aria-label=\"Breadcrumb\">\n\n...\n\n</nav>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Current item"
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
      "title": "Stepper",
      "summary": "aria-current=\"step\" marks the current step, so the person knows where they are in the flow without seeing the highlight.",
      "blocks": [
        {
          "kind": "code",
          "code": "<li aria-current=\"step\">\n\nPayment\n\n</li>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Payment\nCurrent step"
        }
      ]
    },
    {
      "id": "tabela-simples",
      "partId": "componentes",
      "order": 19,
      "title": "Simple Table",
      "summary": "caption, th and scope are what let the screen reader tie each cell to its header instead of reading loose numbers.",
      "blocks": [
        {
          "kind": "code",
          "code": "<table>\n\n  <caption>\n  Statement\n  </caption>\n\n  <thead>\n\n    <tr>\n\n      <th scope=\"col\">\n      Date\n      </th>\n\n      <th scope=\"col\">\n      Amount\n      </th>\n\n    </tr>\n\n  </thead>\n\n</table>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "tabela-boas-praticas",
      "partId": "componentes",
      "order": 20,
      "title": "Tables — Good Practice",
      "summary": "Use caption, th and scope, and never build a table out of divs — it destroys the relationship between cell and header.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Use caption.",
            "Use th.",
            "Use scope.",
            "Avoid tables built out of divs."
          ]
        }
      ]
    },
    {
      "id": "tooltip",
      "partId": "componentes",
      "order": 21,
      "title": "Tooltip",
      "summary": "Tie it with aria-describedby, and make it open on focus too — a tooltip that only responds to hover does not exist for the keyboard.",
      "blocks": [
        {
          "kind": "code",
          "code": "<button\naria-describedby=\"tooltip1\">\n\n?",
          "variant": "neutral"
        },
        {
          "kind": "code",
          "code": "<div\nid=\"tooltip1\"\nrole=\"tooltip\">\n\nAdditional information\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "toast",
      "partId": "componentes",
      "order": 22,
      "title": "Toast",
      "summary": "role=status announces the message without stealing focus, which is what you want for a confirmation.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"status\">\n\nPayment completed\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "snackbar",
      "partId": "componentes",
      "order": 23,
      "title": "Snackbar",
      "summary": "A polite live region: it announces when there is a pause, instead of cutting off whatever is being read.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\">\n\nItem added\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "alertas-criticos",
      "partId": "componentes",
      "order": 24,
      "title": "Critical Alerts",
      "summary": "role=alert interrupts immediately. Reserve it for what genuinely cannot wait — everything else is noise.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\nrole=\"alert\">\n\nTransaction failed\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Announced immediately."
        }
      ]
    },
    {
      "id": "loading",
      "partId": "componentes",
      "order": 25,
      "title": "Loading",
      "summary": "aria-busy tells assistive technology the region is still updating, so it does not announce a half-finished state.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-busy=\"true\">\n\nLoading\n\n</div>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "progress-bar",
      "partId": "componentes",
      "order": 26,
      "title": "Progress Bar",
      "summary": "role=progressbar needs valuemin, valuemax and valuenow, otherwise the bar is announced with no number attached.",
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
      "title": "Skeleton Loading",
      "summary": "The placeholder shapes carry no information. Hide them with aria-hidden so the screen reader is not read a wall of nothing.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The visual placeholder should be ignored by the screen reader."
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
      "title": "Carousel",
      "summary": "Needs previous, next and pause controls, and slides that can be identified. Auto-rotation without a pause is a WCAG failure.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Previous button.",
            "Next button.",
            "Pause button.",
            "Identifiable slides."
          ]
        }
      ]
    },
    {
      "id": "infinite-scroll",
      "partId": "componentes",
      "order": 29,
      "title": "Infinite Scroll",
      "summary": "Announce the newly loaded items, keep focus where it was, and avoid the page jumping under the person.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Announce newly loaded items.",
            "Preserve focus.",
            "Avoid abrupt shifts."
          ]
        }
      ]
    },
    {
      "id": "drag-and-drop",
      "partId": "componentes",
      "order": 30,
      "title": "Drag and Drop",
      "summary": "Never rely on the gesture alone. There has to be a click or keyboard path to the same result.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Never rely on the gesture alone."
        },
        {
          "kind": "paragraph",
          "text": "Always offer a click or keyboard alternative."
        }
      ]
    },
    {
      "id": "upload-de-arquivo",
      "partId": "componentes",
      "order": 31,
      "title": "File Upload",
      "summary": "A native file input with a real label. Custom upload widgets are a common place to lose the keyboard entirely.",
      "blocks": [
        {
          "kind": "code",
          "code": "<label for=\"arquivo\">\nDocument\n</label>\n\n<input\nid=\"arquivo\"\ntype=\"file\">",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "mensagens-dinamicas",
      "partId": "componentes",
      "order": 32,
      "title": "Dynamic Messages",
      "summary": "Anything that changes without a page load needs a live region: toasts, applied filters, finished searches, approved payments.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div\naria-live=\"polite\">\n\n{{ mensagem }}\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Commonly used for:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Toast.",
            "Filter applied.",
            "Search finished.",
            "Payment approved.",
            "Upload finished."
          ]
        }
      ]
    },
    {
      "id": "checklist-de-componentes",
      "partId": "componentes",
      "order": 33,
      "title": "Component Checklist",
      "summary": "Nine questions to run over any component before calling it done — name, role, state, keyboard, focus and announcements.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Does it have an accessible name?",
            "Does it have the correct role?",
            "Does it have the correct state?",
            "Does it work with the keyboard?",
            "Is the focus visible?",
            "Does it work with TalkBack?",
            "Does it work with VoiceOver?",
            "Does it announce important changes?",
            "Does it keep a sensible focus order?"
          ]
        }
      ]
    }
  ]
};
