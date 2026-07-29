// GERADO por scripts/build-locale.js en — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.en.json

import type { Part } from '../../types';

export const fundamentos: Part = {
  "id": "fundamentos",
  "order": 1,
  "numeral": "01",
  "title": "Angular Accessibility Fundamentals",
  "summary": "First part of the accessibility documentation for Angular applications, VoiceOver and TalkBack.",
  "sections": [
    {
      "id": "o-que-e-acessibilidade",
      "partId": "fundamentos",
      "order": 1,
      "title": "What is accessibility?",
      "summary": "Accessibility is a digital product being usable by everyone, regardless of visual, hearing, motor, cognitive or temporary limitations.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Accessibility is the capacity of a digital product to be used by every person, regardless of visual, hearing, motor, cognitive or temporary limitations."
        },
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "Examples of users:"
            },
            {
              "kind": "list",
              "ordered": false,
              "items": [
                "A blind person using TalkBack.",
                "A blind person using VoiceOver.",
                "A person with low vision using zoom.",
                "A person with reduced mobility using the keyboard.",
                "A person with a cognitive disability.",
                "A person with an injured arm using only one hand."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "wcag-2-2",
      "partId": "fundamentos",
      "order": 2,
      "title": "WCAG 2.2",
      "summary": "WCAG is the most widely used standard in the world for evaluating digital accessibility. AA is the level most companies target.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "WCAG (Web Content Accessibility Guidelines) is the most widely used set of guidelines in the world for evaluating digital accessibility."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Conformance levels"
        },
        {
          "kind": "table",
          "headers": [
            "Level",
            "Description"
          ],
          "rows": [
            [
              "A",
              "Minimum requirements."
            ],
            [
              "AA",
              "The level most companies adopt."
            ],
            [
              "AAA",
              "The strictest level."
            ]
          ]
        }
      ]
    },
    {
      "id": "pour",
      "partId": "fundamentos",
      "order": 3,
      "title": "POUR",
      "summary": "Every WCAG criterion comes from four pillars: Perceivable, Operable, Understandable and Robust.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Every WCAG criterion derives from four pillars:"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "P — Perceivable"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "The user has to be able to perceive the content.",
            "Images need alternative text.",
            "Information cannot depend on colour alone."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "O — Operable"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "The interface has to be usable.",
            "Works with the keyboard.",
            "Works with screen readers."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "U — Understandable"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Consistent flows.",
            "Clear messages.",
            "Understandable errors."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "R — Robust"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Works with assistive technology.",
            "Semantic HTML.",
            "Correct ARIA."
          ]
        }
      ]
    },
    {
      "id": "leitores-de-tela-2",
      "partId": "fundamentos",
      "order": 4,
      "title": "Screen readers",
      "summary": "TalkBack on Android, VoiceOver on iOS. Both need three things to work: an accessible name, the right role, and the right state.",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "TalkBack"
        },
        {
          "kind": "paragraph",
          "text": "The native screen reader on Android."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "VoiceOver"
        },
        {
          "kind": "paragraph",
          "text": "The native screen reader on iOS."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "What do they need in order to work correctly?"
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
          "kind": "heading",
          "level": 1,
          "text": "Example"
        },
        {
          "kind": "code",
          "code": "<button>\nSave\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Save, button"
        }
      ]
    },
    {
      "id": "como-um-leitor-de-tela-enxerga-uma-pagina",
      "partId": "fundamentos",
      "order": 5,
      "title": "How does a screen reader see a page?",
      "summary": "Not the way sighted users do. They move through headings, buttons, links, fields and landmarks — a visually perfect screen can be unusable.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "These users do not see the interface the way sighted users do."
        },
        {
          "kind": "paragraph",
          "text": "They navigate by:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Headings.",
            "Buttons.",
            "Links.",
            "Fields.",
            "Landmarks."
          ]
        },
        {
          "kind": "callout",
          "tone": "warning",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "A visually perfect screen can be completely unusable with a screen reader."
            }
          ]
        }
      ]
    },
    {
      "id": "regra-de-ouro-da-acessibilidade",
      "partId": "fundamentos",
      "order": 6,
      "title": "The Golden Rule of Accessibility",
      "summary": "Semantic HTML first, ARIA second. If a native tag solves the problem, use it — you get role, keyboard and state for free.",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "HTML first"
        },
        {
          "kind": "paragraph",
          "text": "Always prefer semantic HTML before reaching for ARIA."
        },
        {
          "kind": "code",
          "code": "<button>\nSave\n</button>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<div (click)=\"salvar()\">\nSave\n</div>",
          "variant": "wrong"
        },
        {
          "kind": "callout",
          "tone": "success",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "If a native HTML tag can solve the problem, use it."
            }
          ]
        }
      ]
    },
    {
      "id": "estrutura-semantica-basica",
      "partId": "fundamentos",
      "order": 7,
      "title": "Basic Semantic Structure",
      "summary": "header, nav, main and footer give a screen reader the map of the page before a single line is read.",
      "blocks": [
        {
          "kind": "code",
          "code": "<header>\n  Header\n</header>\n\n<nav>\n  Navigation\n</nav>\n\n<main>\n\n  <section>\n\n    <h1>Main heading</h1>\n\n  </section>\n\n</main>\n\n<footer>\n  Footer\n</footer>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "landmarks",
      "partId": "fundamentos",
      "order": 8,
      "title": "Landmarks",
      "summary": "Landmarks let screen readers jump straight to the important regions of the page instead of reading through everything.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Landmarks let screen readers navigate quickly through the important regions of the page."
        },
        {
          "kind": "table",
          "headers": [
            "Tag",
            "Purpose"
          ],
          "rows": [
            [
              "header",
              "Header."
            ],
            [
              "nav",
              "Navigation."
            ],
            [
              "main",
              "Main content."
            ],
            [
              "aside",
              "Complementary content."
            ],
            [
              "footer",
              "Footer."
            ]
          ]
        }
      ]
    },
    {
      "id": "headings",
      "partId": "fundamentos",
      "order": 9,
      "title": "Headings",
      "summary": "Headings form a navigation tree. Skipping a level suggests a structure that does not exist and disorients the reader.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Headings create a navigation tree."
        },
        {
          "kind": "code",
          "code": "<h1>Current Account</h1>\n\n<h2>Balance</h2>\n\n<h2>Statement</h2>\n\n<h3>Latest entries</h3>",
          "variant": "correct"
        },
        {
          "kind": "code",
          "code": "<h1>Current Account</h1>\n<h4>Statement</h4>",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "accessible-name",
      "partId": "fundamentos",
      "order": 10,
      "title": "Accessible Name",
      "summary": "Every interactive element needs a name. It comes from visible text, or from aria-label when there is no text to use.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Every interactive element must have an accessible name."
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Visible text"
        },
        {
          "kind": "code",
          "code": "<button>\nContinue\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Continue, button"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "aria-label"
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
      "id": "accessible-description",
      "partId": "fundamentos",
      "order": 11,
      "title": "Accessible Description",
      "summary": "aria-describedby adds a hint alongside the name. The screen reader reads the field name and then the description.",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\n id=\"cpf\"\n aria-describedby=\"ajudaCpf\">\n\n<span id=\"ajudaCpf\">\nDigits only\n</span>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "The screen reader will combine the field name with its description."
        }
      ]
    },
    {
      "id": "nome-role-estado",
      "partId": "fundamentos",
      "order": 12,
      "title": "Name + Role + State",
      "summary": "Almost every screen reader problem comes down to three questions: what is the name, what is the role, what is the state.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Almost any screen reader analysis can be reduced to three questions:"
        },
        {
          "kind": "table",
          "headers": [
            "Question",
            "Example"
          ],
          "rows": [
            [
              "What is the name?",
              "Save"
            ],
            [
              "What is the role?",
              "Button"
            ],
            [
              "What is the state?",
              "Disabled"
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Example"
        },
        {
          "kind": "code",
          "code": "<button disabled>\nSave\n</button>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Save, button, disabled"
        }
      ]
    },
    {
      "id": "erros-mais-comuns-encontrados-em-angular",
      "partId": "fundamentos",
      "order": 13,
      "title": "The most common mistakes in Angular",
      "summary": "Clickable divs, unlabelled icon buttons, placeholder-only inputs, missing headings, modals without focus management, and positive tabindex.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "A clickable div pretending to be a button.",
            "A clickable icon with no aria-label.",
            "An input with only a placeholder.",
            "No main heading.",
            "A modal with no focus management.",
            "Form errors that are never announced.",
            "Overuse of ARIA.",
            "Links behaving like buttons.",
            "Buttons behaving like links.",
            "Positive tabindex."
          ]
        }
      ]
    },
    {
      "id": "mentalidade-para-o-time-angular",
      "partId": "fundamentos",
      "order": 14,
      "title": "A mindset for the Angular team",
      "summary": "Five questions to ask before building any component — they catch most accessibility problems before a single line is written.",
      "blocks": [
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "Before building any component, ask:"
            },
            {
              "kind": "list",
              "ordered": true,
              "items": [
                "Is there a native HTML tag for this?",
                "Does the element have an accessible name?",
                "Does it work with the keyboard?",
                "Does it work with TalkBack?",
                "Does it work with VoiceOver?"
              ]
            }
          ]
        }
      ]
    }
  ]
};
