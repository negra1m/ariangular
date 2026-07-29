// GERADO por scripts/build-locale.js en — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.en.json

import type { Checklist } from '../types';

export const checklists: Checklist[] = [
  {
    "id": "aria",
    "title": "ARIA Checklist",
    "audience": "dev",
    "stage": "desenvolvimento",
    "sourceSectionId": "checklist-aria",
    "sourcePartId": "aria",
    "items": [
      {
        "id": "checklist-aria-1",
        "text": "Does it have an accessible name?"
      },
      {
        "id": "checklist-aria-2",
        "text": "Does it have the correct role?"
      },
      {
        "id": "checklist-aria-3",
        "text": "Does it have the correct state?"
      },
      {
        "id": "checklist-aria-4",
        "text": "Is it in sync with the DOM?"
      },
      {
        "id": "checklist-aria-5",
        "text": "Does TalkBack announce it correctly?"
      },
      {
        "id": "checklist-aria-6",
        "text": "Does VoiceOver announce it correctly?"
      }
    ]
  },
  {
    "id": "modal",
    "title": "Modal Checklist",
    "audience": "dev",
    "stage": "desenvolvimento",
    "sourceSectionId": "checklist-modal",
    "sourcePartId": "componentes",
    "items": [
      {
        "id": "checklist-modal-1",
        "text": "Does it have role=\"dialog\"?"
      },
      {
        "id": "checklist-modal-2",
        "text": "Does it have aria-modal?"
      },
      {
        "id": "checklist-modal-3",
        "text": "Does it receive focus when it opens?"
      },
      {
        "id": "checklist-modal-4",
        "text": "Does it trap focus inside?"
      },
      {
        "id": "checklist-modal-5",
        "text": "Does it close on ESC?"
      },
      {
        "id": "checklist-modal-6",
        "text": "Does it return focus when it closes?"
      }
    ]
  },
  {
    "id": "componentes",
    "title": "Component Checklist",
    "audience": "dev",
    "stage": "desenvolvimento",
    "sourceSectionId": "checklist-de-componentes",
    "sourcePartId": "componentes",
    "items": [
      {
        "id": "checklist-de-componentes-1",
        "text": "Does it have an accessible name?"
      },
      {
        "id": "checklist-de-componentes-2",
        "text": "Does it have the correct role?"
      },
      {
        "id": "checklist-de-componentes-3",
        "text": "Does it have the correct state?"
      },
      {
        "id": "checklist-de-componentes-4",
        "text": "Does it work with the keyboard?"
      },
      {
        "id": "checklist-de-componentes-5",
        "text": "Is the focus visible?"
      },
      {
        "id": "checklist-de-componentes-6",
        "text": "Does it work with TalkBack?"
      },
      {
        "id": "checklist-de-componentes-7",
        "text": "Does it work with VoiceOver?"
      },
      {
        "id": "checklist-de-componentes-8",
        "text": "Does it announce important changes?"
      },
      {
        "id": "checklist-de-componentes-9",
        "text": "Does it keep a sensible focus order?"
      }
    ]
  },
  {
    "id": "matdialog",
    "title": "MatDialog Checklist",
    "audience": "dev",
    "stage": "desenvolvimento",
    "sourceSectionId": "checklist-matdialog",
    "sourcePartId": "angular",
    "items": [
      {
        "id": "checklist-matdialog-1",
        "text": "Does it have a title?"
      },
      {
        "id": "checklist-matdialog-2",
        "text": "Does it receive focus?"
      },
      {
        "id": "checklist-matdialog-3",
        "text": "Does it return focus?"
      },
      {
        "id": "checklist-matdialog-4",
        "text": "Does it have a close button?"
      }
    ]
  },
  {
    "id": "angular",
    "title": "Angular Checklist",
    "audience": "dev",
    "stage": "desenvolvimento",
    "sourceSectionId": "checklist-angular",
    "sourcePartId": "angular",
    "items": [
      {
        "id": "checklist-angular-1",
        "text": "Is the HTML semantic?"
      },
      {
        "id": "checklist-angular-2",
        "text": "Is there an accessible name?"
      },
      {
        "id": "checklist-angular-3",
        "text": "Is focus managed?"
      },
      {
        "id": "checklist-angular-4",
        "text": "Are important changes announced?"
      },
      {
        "id": "checklist-angular-5",
        "text": "Does the router move focus correctly?"
      },
      {
        "id": "checklist-angular-6",
        "text": "Has Material been verified?"
      },
      {
        "id": "checklist-angular-7",
        "text": "Have custom components been audited?"
      },
      {
        "id": "checklist-angular-8",
        "text": "Does it work with the keyboard alone?"
      },
      {
        "id": "checklist-angular-9",
        "text": "Does it work with TalkBack?"
      },
      {
        "id": "checklist-angular-10",
        "text": "Does it work with VoiceOver?"
      }
    ]
  },
  {
    "id": "final-de-talkback-e-voiceover",
    "title": "Final TalkBack and VoiceOver Checklist",
    "audience": "qa",
    "stage": "qa",
    "sourceSectionId": "checklist-final-de-talkback-e-voiceover",
    "sourcePartId": "leitores-de-tela",
    "items": [
      {
        "id": "checklist-final-de-talkback-e-voiceover-1",
        "text": "Does every element have a name?"
      },
      {
        "id": "checklist-final-de-talkback-e-voiceover-2",
        "text": "Does every element have the correct role?"
      },
      {
        "id": "checklist-final-de-talkback-e-voiceover-3",
        "text": "Is the state announced?"
      },
      {
        "id": "checklist-final-de-talkback-e-voiceover-4",
        "text": "Does the flow work without sight?"
      },
      {
        "id": "checklist-final-de-talkback-e-voiceover-5",
        "text": "Are errors announced?"
      },
      {
        "id": "checklist-final-de-talkback-e-voiceover-6",
        "text": "Are dynamic messages announced?"
      },
      {
        "id": "checklist-final-de-talkback-e-voiceover-7",
        "text": "Does focus never disappear?"
      },
      {
        "id": "checklist-final-de-talkback-e-voiceover-8",
        "text": "Does the navigation make sense?"
      },
      {
        "id": "checklist-final-de-talkback-e-voiceover-9",
        "text": "Is there feedback for both success and error?"
      }
    ]
  },
  {
    "id": "story",
    "title": "Story Checklist",
    "audience": "po",
    "stage": "refinamento",
    "sourceSectionId": "checklist-de-story",
    "sourcePartId": "qa-wcag",
    "items": [
      {
        "id": "checklist-de-story-1",
        "text": "Does it have interactive components?"
      },
      {
        "id": "checklist-de-story-2",
        "text": "Is a screen reader affected?"
      },
      {
        "id": "checklist-de-story-3",
        "text": "Is there keyboard navigation?"
      },
      {
        "id": "checklist-de-story-4",
        "text": "Is focus involved?"
      },
      {
        "id": "checklist-de-story-5",
        "text": "Is there a dynamic announcement?"
      },
      {
        "id": "checklist-de-story-6",
        "text": "Is there error handling?"
      }
    ]
  },
  {
    "id": "desenvolvimento",
    "title": "Development Checklist",
    "audience": "dev",
    "stage": "desenvolvimento",
    "sourceSectionId": "checklist-de-desenvolvimento",
    "sourcePartId": "qa-wcag",
    "items": [
      {
        "id": "checklist-de-desenvolvimento-1",
        "text": "Is the HTML semantic?"
      },
      {
        "id": "checklist-de-desenvolvimento-2",
        "text": "Does every field have a label?"
      },
      {
        "id": "checklist-de-desenvolvimento-3",
        "text": "Is there an accessible name?"
      },
      {
        "id": "checklist-de-desenvolvimento-4",
        "text": "Is the role correct?"
      },
      {
        "id": "checklist-de-desenvolvimento-5",
        "text": "Is focus managed?"
      },
      {
        "id": "checklist-de-desenvolvimento-6",
        "text": "Is there keyboard support?"
      },
      {
        "id": "checklist-de-desenvolvimento-7",
        "text": "Is there feedback for errors?"
      },
      {
        "id": "checklist-de-desenvolvimento-8",
        "text": "Is there feedback for success?"
      },
      {
        "id": "checklist-de-desenvolvimento-9",
        "text": "Has it been checked with TalkBack?"
      },
      {
        "id": "checklist-de-desenvolvimento-10",
        "text": "Has it been checked with VoiceOver?"
      }
    ]
  },
  {
    "id": "pull-request",
    "title": "Pull Request Checklist",
    "audience": "dev",
    "stage": "pull-request",
    "sourceSectionId": "checklist-de-pull-request",
    "sourcePartId": "qa-wcag",
    "items": [
      {
        "id": "checklist-de-pull-request-1",
        "text": "Have the new components been tested?"
      },
      {
        "id": "checklist-de-pull-request-2",
        "text": "Is focus still correct?"
      },
      {
        "id": "checklist-de-pull-request-3",
        "text": "Was there no screen reader regression?"
      },
      {
        "id": "checklist-de-pull-request-4",
        "text": "Are the labels still correct?"
      },
      {
        "id": "checklist-de-pull-request-5",
        "text": "Is the ARIA still in sync?"
      },
      {
        "id": "checklist-de-pull-request-6",
        "text": "Does the keyboard still work?"
      }
    ]
  },
  {
    "id": "qa",
    "title": "QA Checklist",
    "audience": "qa",
    "stage": "qa",
    "sourceSectionId": "checklist-de-qa",
    "sourcePartId": "qa-wcag",
    "items": [
      {
        "id": "checklist-de-qa-1",
        "text": "Is every button announced?"
      },
      {
        "id": "checklist-de-qa-2",
        "text": "Is every link announced?"
      },
      {
        "id": "checklist-de-qa-3",
        "text": "Does every field have a label?"
      },
      {
        "id": "checklist-de-qa-4",
        "text": "Is every error announced?"
      },
      {
        "id": "checklist-de-qa-5",
        "text": "Does every modal open correctly?"
      },
      {
        "id": "checklist-de-qa-6",
        "text": "Does every modal return focus?"
      },
      {
        "id": "checklist-de-qa-7",
        "text": "Does every accordion announce expanded and collapsed?"
      },
      {
        "id": "checklist-de-qa-8",
        "text": "Does every tab announce its selected state?"
      },
      {
        "id": "checklist-de-qa-9",
        "text": "Does every stepper announce the current step?"
      },
      {
        "id": "checklist-de-qa-10",
        "text": "Are there any regions where focus is lost?"
      }
    ]
  },
  {
    "id": "talkback",
    "title": "TalkBack Checklist",
    "audience": "qa",
    "stage": "qa",
    "sourceSectionId": "checklist-para-talkback",
    "sourcePartId": "qa-wcag",
    "items": [
      {
        "id": "checklist-para-talkback-1",
        "text": "Go through the entire screen."
      },
      {
        "id": "checklist-para-talkback-2",
        "text": "Check the headings."
      },
      {
        "id": "checklist-para-talkback-3",
        "text": "Check the buttons."
      },
      {
        "id": "checklist-para-talkback-4",
        "text": "Check the forms."
      },
      {
        "id": "checklist-para-talkback-5",
        "text": "Check the modal."
      },
      {
        "id": "checklist-para-talkback-6",
        "text": "Check the error messages."
      },
      {
        "id": "checklist-para-talkback-7",
        "text": "Check the toast."
      },
      {
        "id": "checklist-para-talkback-8",
        "text": "Check loading."
      },
      {
        "id": "checklist-para-talkback-9",
        "text": "Check that the flow can be completed."
      }
    ]
  },
  {
    "id": "voiceover",
    "title": "VoiceOver Checklist",
    "audience": "qa",
    "stage": "qa",
    "sourceSectionId": "checklist-para-voiceover",
    "sourcePartId": "qa-wcag",
    "items": [
      {
        "id": "checklist-para-voiceover-1",
        "text": "Go through the whole screen."
      },
      {
        "id": "checklist-para-voiceover-2",
        "text": "Check every focusable element."
      },
      {
        "id": "checklist-para-voiceover-3",
        "text": "Check the forms."
      },
      {
        "id": "checklist-para-voiceover-4",
        "text": "Check the alerts."
      },
      {
        "id": "checklist-para-voiceover-5",
        "text": "Check the menus."
      },
      {
        "id": "checklist-para-voiceover-6",
        "text": "Check the overlays."
      },
      {
        "id": "checklist-para-voiceover-7",
        "text": "Check that the journey can be completed."
      }
    ]
  },
  {
    "id": "definition-of-done-acessivel",
    "title": "Accessible Definition of Done",
    "audience": "todos",
    "stage": "fechamento",
    "sourceSectionId": "definition-of-done-acessivel",
    "sourcePartId": "qa-wcag",
    "items": [
      {
        "id": "definition-of-done-acessivel-1",
        "text": "WCAG AA met."
      },
      {
        "id": "definition-of-done-acessivel-2",
        "text": "Keyboard working."
      },
      {
        "id": "definition-of-done-acessivel-3",
        "text": "Validated with TalkBack."
      },
      {
        "id": "definition-of-done-acessivel-4",
        "text": "Validated with VoiceOver."
      },
      {
        "id": "definition-of-done-acessivel-5",
        "text": "Accessible name defined."
      },
      {
        "id": "definition-of-done-acessivel-6",
        "text": "Correct role."
      },
      {
        "id": "definition-of-done-acessivel-7",
        "text": "Correct state."
      },
      {
        "id": "definition-of-done-acessivel-8",
        "text": "No lost focus."
      },
      {
        "id": "definition-of-done-acessivel-9",
        "text": "No known bugs."
      }
    ]
  },
  {
    "id": "revisao-de-tela-nova",
    "title": "New Screen Review Checklist",
    "audience": "todos",
    "stage": "qa",
    "sourceSectionId": "checklist-para-revisao-de-tela-nova",
    "sourcePartId": "qa-wcag",
    "items": [
      {
        "id": "checklist-para-revisao-de-tela-nova-1",
        "text": "Is there an h1?"
      },
      {
        "id": "checklist-para-revisao-de-tela-nova-2",
        "text": "Is the structure semantic?"
      },
      {
        "id": "checklist-para-revisao-de-tela-nova-3",
        "text": "Is the order logical?"
      },
      {
        "id": "checklist-para-revisao-de-tela-nova-4",
        "text": "Is focus handled?"
      },
      {
        "id": "checklist-para-revisao-de-tela-nova-5",
        "text": "Is there screen reader support?"
      },
      {
        "id": "checklist-para-revisao-de-tela-nova-6",
        "text": "Is there error handling?"
      },
      {
        "id": "checklist-para-revisao-de-tela-nova-7",
        "text": "Is there success feedback?"
      },
      {
        "id": "checklist-para-revisao-de-tela-nova-8",
        "text": "Is there loading feedback?"
      },
      {
        "id": "checklist-para-revisao-de-tela-nova-9",
        "text": "Is the navigation consistent?"
      }
    ]
  }
];
