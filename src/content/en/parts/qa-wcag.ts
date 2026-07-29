// GERADO por scripts/build-locale.js en — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.en.json

import type { Part } from '../../types';

export const qaWcag: Part = {
  "id": "qa-wcag",
  "order": 7,
  "numeral": "07",
  "title": "QA, Auditing and WCAG 2.2 Applied to the Angular Team",
  "summary": "This part is an operational guide for development, QA, refinement, stories, PRs and releases. The goal is not to memorise WCAG, but to apply it daily.",
  "sections": [
    {
      "id": "o-que-significa-uma-tela-acessivel",
      "partId": "qa-wcag",
      "order": 1,
      "title": "What does an accessible screen actually mean?",
      "summary": "Not just a screen with no WCAG errors. It is a screen where the person understands, navigates alone, acts, gets feedback and finishes the journey.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "An accessible screen is not simply a screen with no WCAG errors."
        },
        {
          "kind": "paragraph",
          "text": "An accessible screen lets the user:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Understand the content.",
            "Navigate on their own.",
            "Perform actions.",
            "Receive feedback.",
            "Finish the journey."
          ]
        }
      ]
    },
    {
      "id": "principais-criterios-wcag-para-angular",
      "partId": "qa-wcag",
      "order": 2,
      "title": "The WCAG criteria that matter most in Angular",
      "summary": "Thirteen criteria that cover most of what an Angular application gets wrong, from alternative text to name, role and value.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Criterion",
            "Topic"
          ],
          "rows": [
            [
              "1.1.1",
              "Alternative text."
            ],
            [
              "1.3.1",
              "Info and relationships."
            ],
            [
              "1.3.2",
              "Meaningful sequence."
            ],
            [
              "1.4.3",
              "Contrast."
            ],
            [
              "1.4.10",
              "Reflow."
            ],
            [
              "2.1.1",
              "Keyboard."
            ],
            [
              "2.1.2",
              "No keyboard trap."
            ],
            [
              "2.4.3",
              "Focus order."
            ],
            [
              "2.4.6",
              "Headings and labels."
            ],
            [
              "2.4.7",
              "Focus visible."
            ],
            [
              "3.3.1",
              "Error identification."
            ],
            [
              "3.3.2",
              "Labels or instructions."
            ],
            [
              "4.1.2",
              "Name, Role and Value."
            ]
          ]
        }
      ]
    },
    {
      "id": "criterios-que-mais-geram-bugs",
      "partId": "qa-wcag",
      "order": 3,
      "title": "The criteria that produce the most bugs",
      "summary": "Focus order, name-role-value, error identification, keyboard navigation and relationships — in that order.",
      "blocks": [
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "2.4.3 Focus order.",
            "4.1.2 Name, Role, Value.",
            "3.3.1 Error identification.",
            "2.1.1 Keyboard navigation.",
            "1.3.1 Relationships."
          ]
        }
      ]
    },
    {
      "id": "checklist-de-story",
      "partId": "qa-wcag",
      "order": 4,
      "title": "Story Checklist",
      "summary": "Six questions every story should answer during refinement, before a single line is written.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Every story should answer:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Does it have interactive components?",
            "Is a screen reader affected?",
            "Is there keyboard navigation?",
            "Is focus involved?",
            "Is there a dynamic announcement?",
            "Is there error handling?"
          ]
        }
      ]
    },
    {
      "id": "checklist-de-desenvolvimento",
      "partId": "qa-wcag",
      "order": 5,
      "title": "Development Checklist",
      "summary": "Ten questions to run while building — semantics, labels, names, roles, focus, keyboard, feedback and both screen readers.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Is the HTML semantic?",
            "Does every field have a label?",
            "Is there an accessible name?",
            "Is the role correct?",
            "Is focus managed?",
            "Is there keyboard support?",
            "Is there feedback for errors?",
            "Is there feedback for success?",
            "Has it been checked with TalkBack?",
            "Has it been checked with VoiceOver?"
          ]
        }
      ]
    },
    {
      "id": "checklist-de-pull-request",
      "partId": "qa-wcag",
      "order": 6,
      "title": "Pull Request Checklist",
      "summary": "Six questions before opening a PR, aimed at catching regressions rather than new work.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Have the new components been tested?",
            "Is focus still correct?",
            "Was there no screen reader regression?",
            "Are the labels still correct?",
            "Is the ARIA still in sync?",
            "Does the keyboard still work?"
          ]
        }
      ]
    },
    {
      "id": "checklist-de-qa",
      "partId": "qa-wcag",
      "order": 7,
      "title": "QA Checklist",
      "summary": "Ten checks over a finished screen: buttons, links, labels, errors, modals, accordions, tabs, steppers and lost focus.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Is every button announced?",
            "Is every link announced?",
            "Does every field have a label?",
            "Is every error announced?",
            "Does every modal open correctly?",
            "Does every modal return focus?",
            "Does every accordion announce expanded and collapsed?",
            "Does every tab announce its selected state?",
            "Does every stepper announce the current step?",
            "Are there any regions where focus is lost?"
          ]
        }
      ]
    },
    {
      "id": "checklist-para-talkback",
      "partId": "qa-wcag",
      "order": 8,
      "title": "TalkBack Checklist",
      "summary": "Nine passes to run on an Android device, ending with whether the flow can actually be completed.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Go through the entire screen.",
            "Check the headings.",
            "Check the buttons.",
            "Check the forms.",
            "Check the modal.",
            "Check the error messages.",
            "Check the toast.",
            "Check loading.",
            "Check that the flow can be completed."
          ]
        }
      ]
    },
    {
      "id": "checklist-para-voiceover",
      "partId": "qa-wcag",
      "order": 9,
      "title": "VoiceOver Checklist",
      "summary": "Seven passes on an iOS device, including alerts, menus and overlays where VoiceOver differs from TalkBack.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Go through the whole screen.",
            "Check every focusable element.",
            "Check the forms.",
            "Check the alerts.",
            "Check the menus.",
            "Check the overlays.",
            "Check that the journey can be completed."
          ]
        }
      ]
    },
    {
      "id": "quando-abrir-um-bug-de-acessibilidade",
      "partId": "qa-wcag",
      "order": 10,
      "title": "When to open an accessibility bug",
      "summary": "Whenever the person cannot finish a task, identify an element, navigate, keep focus, get feedback, or is told something false.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Whenever the user:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Cannot finish a task.",
            "Cannot identify an element.",
            "Cannot navigate.",
            "Loses focus.",
            "Receives no feedback.",
            "Receives incorrect information."
          ]
        }
      ]
    },
    {
      "id": "template-de-bug",
      "partId": "qa-wcag",
      "order": 11,
      "title": "Bug Template",
      "summary": "Title, problem, expected behaviour, impact and WCAG criterion — enough for anyone to reproduce and prioritise it.",
      "blocks": [
        {
          "kind": "code",
          "code": "Título:\nBotão sem nome acessível\n\nProblema:\nTalkBack anuncia apenas \"botão\"\n\nComportamento esperado:\n\"Editar endereço, botão\"\n\nImpacto:\nUsuário não identifica a ação.\n\nWCAG:\n4.1.2 Name Role Value",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "classificacao-de-severidade",
      "partId": "qa-wcag",
      "order": 12,
      "title": "Severity",
      "summary": "Critical means the journey cannot be completed. Everything else is measured against that.",
      "blocks": [
        {
          "kind": "table",
          "headers": [
            "Level",
            "Description"
          ],
          "rows": [
            [
              "Critical",
              "The user cannot finish the journey."
            ],
            [
              "High",
              "Serious difficulty navigating."
            ],
            [
              "Medium",
              "Degraded experience."
            ],
            [
              "Low",
              "Recommended improvement."
            ]
          ]
        }
      ]
    },
    {
      "id": "exemplos-de-bugs-criticos",
      "partId": "qa-wcag",
      "order": 13,
      "title": "Examples of critical bugs",
      "summary": "A primary button with no name, an unreachable modal, an unannounced error, a bad focus trap, a field with no label.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "A primary button with no name.",
            "An inaccessible modal.",
            "An error that is never announced.",
            "Focus trapped in the wrong place.",
            "A field with no label."
          ]
        }
      ]
    },
    {
      "id": "exemplos-de-bugs-medios",
      "partId": "qa-wcag",
      "order": 14,
      "title": "Examples of medium bugs",
      "summary": "Wrong heading level, weak alternative text, a tooltip with no description, redundant announcements.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "An incorrect heading level.",
            "Poor alternative text.",
            "A tooltip with no description.",
            "Redundant announcements."
          ]
        }
      ]
    },
    {
      "id": "definition-of-done-acessivel",
      "partId": "qa-wcag",
      "order": 15,
      "title": "Accessible Definition of Done",
      "summary": "Nine conditions before calling anything finished, including validation on both real screen readers.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "WCAG AA met.",
            "Keyboard working.",
            "Validated with TalkBack.",
            "Validated with VoiceOver.",
            "Accessible name defined.",
            "Correct role.",
            "Correct state.",
            "No lost focus.",
            "No known bugs."
          ]
        }
      ]
    },
    {
      "id": "checklist-para-revisao-de-tela-nova",
      "partId": "qa-wcag",
      "order": 16,
      "title": "New Screen Review Checklist",
      "summary": "Nine questions for a screen you are seeing for the first time, from the h1 down to loading feedback.",
      "blocks": [
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "Is there an h1?",
            "Is the structure semantic?",
            "Is the order logical?",
            "Is focus handled?",
            "Is there screen reader support?",
            "Is there error handling?",
            "Is there success feedback?",
            "Is there loading feedback?",
            "Is the navigation consistent?"
          ]
        }
      ]
    },
    {
      "id": "european-accessibility-act",
      "partId": "qa-wcag",
      "order": 17,
      "title": "European Accessibility Act",
      "summary": "Enforceable across the EU since 28 June 2025. Accessibility stopped being an improvement and became a condition of entry.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Since 28 June 2025 the European Accessibility Act has been enforceable in every country of the European Union."
        },
        {
          "kind": "paragraph",
          "text": "It is no longer only a concern for companies selling into Europe. Companies that serve European customers, or sit in the supply chain of a European company, fall within scope."
        },
        {
          "kind": "table",
          "headers": [
            "Category",
            "Examples"
          ],
          "rows": [
            [
              "E-commerce",
              "Store, checkout, customer area."
            ],
            [
              "Banking services",
              "Internet banking, app, authentication."
            ],
            [
              "Transport",
              "Ticket sales, travel information."
            ],
            [
              "Communication",
              "Telephony, messaging, emergency calls."
            ],
            [
              "Books and media",
              "E-readers, streaming."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "The technical standard"
        },
        {
          "kind": "paragraph",
          "text": "Conformance is assessed against EN 301 549, which incorporates WCAG. Version 4.1.1 is expected in 2026."
        },
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "In practice, meeting WCAG 2.2 level AA covers most of what the standard requires for web content. It is the same target this entire guide is aiming at."
            }
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "What changes day to day"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Accessibility stops being an improvement and becomes a condition of entry.",
            "It requires conformance documentation, not just a working site.",
            "It can be demanded in contracts and procurement.",
            "It applies to new products and to updates of existing ones."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "What to do"
        },
        {
          "kind": "list",
          "ordered": true,
          "items": [
            "Establish whether the product serves customers in the European Union.",
            "Audit against WCAG 2.2 AA.",
            "Record the results, including what is not yet conformant.",
            "Put accessibility in the Definition of Done.",
            "Test with people using real assistive technology."
          ]
        }
      ]
    },
    {
      "id": "acessibilidade-cognitiva",
      "partId": "qa-wcag",
      "order": 18,
      "title": "Cognitive accessibility",
      "summary": "It affects more people than visual or motor impairment and gets a fraction of the attention. An interface that works for someone exhausted works better for everyone.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Most accessibility effort goes to visual and motor impairment. Cognitive disability affects more people and receives less attention."
        },
        {
          "kind": "paragraph",
          "text": "This covers dyslexia, ADHD, autism, anxiety and age-related cognitive decline — and also temporary states: tiredness, being in a hurry, stress, using a phone in the middle of the street."
        },
        {
          "kind": "callout",
          "tone": "info",
          "blocks": [
            {
              "kind": "paragraph",
              "text": "An interface that works for someone exhausted works better for everyone. This is the clearest case that accessibility is not an edge case."
            }
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "What helps"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Direct language, short sentences, no unnecessary jargon.",
            "One main task per screen.",
            "A visible step indicator in long flows.",
            "Errors that say what to do, not just what is wrong.",
            "Destructive actions with confirmation and undo.",
            "No time limit, or the option to extend it.",
            "Consistent patterns across screens.",
            "Not depending on memory between steps."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "What gets in the way"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Automatic movement, a carousel that rotates on its own.",
            "A long form with no sections and no partial saving.",
            "A generic error message.",
            "A session that expires with no warning.",
            "Too much information at once.",
            "An icon with no text label."
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Related WCAG criteria"
        },
        {
          "kind": "table",
          "headers": [
            "Criterion",
            "Topic"
          ],
          "rows": [
            [
              "2.2.1",
              "Timing adjustable."
            ],
            [
              "2.2.2",
              "Pause, stop, hide movement."
            ],
            [
              "3.2.3",
              "Consistent navigation."
            ],
            [
              "3.2.4",
              "Consistent identification."
            ],
            [
              "3.3.3",
              "Error suggestion."
            ],
            [
              "3.3.4",
              "Error prevention on important actions."
            ],
            [
              "3.3.7",
              "Redundant entry."
            ],
            [
              "3.3.8",
              "Accessible authentication."
            ]
          ]
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "In Angular"
        },
        {
          "kind": "code",
          "code": "<div aria-live=\"polite\">\n\n{{ mensagemDeErro }}\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Announcing the error is half of it. The other half is the message saying what to do about it."
        },
        {
          "kind": "code",
          "code": "Erro ao salvar.",
          "variant": "wrong"
        },
        {
          "kind": "code",
          "code": "Não foi possível salvar porque o CPF tem 10 dígitos.\nO CPF precisa ter 11. Confira e tente de novo.",
          "variant": "correct"
        }
      ]
    },
    {
      "id": "ferramentas-recomendadas",
      "partId": "qa-wcag",
      "order": 19,
      "title": "Recommended tools",
      "summary": "TalkBack, VoiceOver, Lighthouse, axe DevTools, Accessibility Insights and the Angular CDK A11y package.",
      "blocks": [
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "TalkBack.",
            "VoiceOver.",
            "Chrome Lighthouse.",
            "axe DevTools.",
            "Accessibility Insights.",
            "Angular CDK A11y."
          ]
        }
      ]
    },
    {
      "id": "o-que-ferramentas-nao-encontram",
      "partId": "qa-wcag",
      "order": 20,
      "title": "What tools do NOT find",
      "summary": "Automated tools do not replace real testing. They are poor at broken flows, bad focus, confusing announcements and complex navigation.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Automated tools do not replace real testing."
        },
        {
          "kind": "paragraph",
          "text": "They are not good at identifying:"
        },
        {
          "kind": "list",
          "ordered": false,
          "items": [
            "Broken flows.",
            "Bad focus behaviour.",
            "A poor experience.",
            "Confusing announcements.",
            "Complex navigation."
          ]
        }
      ]
    },
    {
      "id": "mentalidade-final",
      "partId": "qa-wcag",
      "order": 21,
      "title": "The mindset that matters",
      "summary": "The question is not whether the screen passed WCAG. It is whether a person using TalkBack or VoiceOver can finish the journey on their own.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The question should not be:"
        },
        {
          "kind": "code",
          "code": "A tela passou na WCAG?",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "But rather:"
        },
        {
          "kind": "code",
          "code": "Uma pessoa usando TalkBack ou VoiceOver\nconsegue concluir a jornada sozinha?",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "If the answer is yes, the implementation is usually on the right track."
        }
      ]
    }
  ]
};
