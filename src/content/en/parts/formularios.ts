// GERADO por scripts/build-locale.js en — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.en.json

import type { Part } from '../../types';

export const formularios: Part = {
  "id": "formularios",
  "order": 3,
  "numeral": "03",
  "title": "Accessible Forms",
  "summary": "Forms are one of the areas with the most accessibility problems. The basic principles are:",
  "sections": [
    {
      "id": "label",
      "partId": "formularios",
      "order": 1,
      "title": "Label",
      "summary": "Every field needs a label associated with it. Without one, the screen reader announces only \"edit field\" and the person has no idea what to type.",
      "blocks": [
        {
          "kind": "code",
          "code": "<label for=\"nome\">\nName\n</label>\n\n<input\nid=\"nome\"\ntype=\"text\">",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Name, edit field"
        },
        {
          "kind": "code",
          "code": "<input\nplaceholder=\"Name\">",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "placeholder-nao-e-label",
      "partId": "formularios",
      "order": 2,
      "title": "Placeholder is not a Label",
      "summary": "The placeholder disappears as soon as typing starts, and screen reader support for it is inconsistent. It is a hint, never the label.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "The placeholder disappears while the field is being filled in."
        },
        {
          "kind": "paragraph",
          "text": "Screen readers may also behave inconsistently when it is the only source of the name."
        },
        {
          "kind": "code",
          "code": "<label for=\"cpf\">\nTax ID\n</label>\n\n<input\nid=\"cpf\"\nplaceholder=\"Enter your tax ID\">",
          "variant": "correct"
        }
      ]
    },
    {
      "id": "campos-obrigatorios",
      "partId": "formularios",
      "order": 3,
      "title": "Required Fields",
      "summary": "The required condition has to be announced, not just shown with an asterisk. Native required already does it; aria-required reinforces it.",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "Native HTML"
        },
        {
          "kind": "code",
          "code": "<input\nrequired>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "With ARIA"
        },
        {
          "kind": "code",
          "code": "<input\nrequired\naria-required=\"true\">",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Required field"
        }
      ]
    },
    {
      "id": "mensagens-de-ajuda",
      "partId": "formularios",
      "order": 4,
      "title": "Help Messages",
      "summary": "aria-describedby ties a hint to the field, so the screen reader reads the name and then the description.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Use aria-describedby."
        },
        {
          "kind": "code",
          "code": "<label for=\"senha\">\nPassword\n</label>\n\n<input\nid=\"senha\"\naria-describedby=\"senhaAjuda\">\n\n<small id=\"senhaAjuda\">\nMinimum 8 characters\n</small>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "validacao-de-erro",
      "partId": "formularios",
      "order": 5,
      "title": "Error Validation",
      "summary": "aria-invalid marks the field as failing validation, so the state is announced along with the name.",
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
      "id": "erro-associado-ao-campo",
      "partId": "formularios",
      "order": 6,
      "title": "Error Tied to the Field",
      "summary": "The error message must be connected to the field it belongs to. Loose text on screen is invisible to whoever is on the field.",
      "blocks": [
        {
          "kind": "code",
          "code": "<label for=\"cpf\">\nTax ID\n</label>\n\n<input\nid=\"cpf\"\naria-invalid=\"true\"\naria-describedby=\"cpfErro\">\n\n<span id=\"cpfErro\">\nInvalid tax ID\n</span>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Tax ID\nInvalid field\nInvalid tax ID"
        }
      ]
    },
    {
      "id": "erro-dinamico-com-aria-live",
      "partId": "formularios",
      "order": 7,
      "title": "Dynamic Error with aria-live",
      "summary": "An error that appears after submission needs a live region, otherwise nobody using a screen reader learns that it exists.",
      "blocks": [
        {
          "kind": "code",
          "code": "<div aria-live=\"assertive\">\n\n{{ mensagemErro }}\n\n</div>",
          "variant": "neutral"
        }
      ]
    }
  ]
};
