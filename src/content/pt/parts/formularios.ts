// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const formularios: Part = {
  "id": "formularios",
  "order": 3,
  "numeral": "03",
  "title": "Formulários Acessíveis",
  "summary": "Formulários são uma das áreas com mais problemas de acessibilidade. Os princípios básicos são:",
  "sections": [
    {
      "id": "label",
      "partId": "formularios",
      "order": 1,
      "title": "Label",
      "summary": "Label — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<label for=\"nome\">\nNome\n</label>\n\n<input\nid=\"nome\"\ntype=\"text\">",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "Nome, campo de edição"
        },
        {
          "kind": "code",
          "code": "<input\nplaceholder=\"Nome\">",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "placeholder-nao-e-label",
      "partId": "formularios",
      "order": 2,
      "title": "Placeholder não é Label",
      "summary": "Placeholder desaparece durante o preenchimento.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Placeholder desaparece durante o preenchimento."
        },
        {
          "kind": "paragraph",
          "text": "Leitores de tela também podem apresentar inconsistências ao depender exclusivamente dele."
        },
        {
          "kind": "code",
          "code": "<label for=\"cpf\">\nCPF\n</label>\n\n<input\nid=\"cpf\"\nplaceholder=\"Digite seu CPF\">",
          "variant": "correct"
        }
      ]
    },
    {
      "id": "campos-obrigatorios",
      "partId": "formularios",
      "order": 3,
      "title": "Campos Obrigatórios",
      "summary": "Campos Obrigatórios — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "HTML Nativo"
        },
        {
          "kind": "code",
          "code": "<input\nrequired>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Com ARIA"
        },
        {
          "kind": "code",
          "code": "<input\nrequired\naria-required=\"true\">",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Campo obrigatório"
        }
      ]
    },
    {
      "id": "mensagens-de-ajuda",
      "partId": "formularios",
      "order": 4,
      "title": "Mensagens de Ajuda",
      "summary": "Mensagens de Ajuda — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "Utilize aria-describedby."
        },
        {
          "kind": "code",
          "code": "<label for=\"senha\">\nSenha\n</label>\n\n<input\nid=\"senha\"\naria-describedby=\"senhaAjuda\">\n\n<small id=\"senhaAjuda\">\nMínimo 8 caracteres\n</small>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "validacao-de-erro",
      "partId": "formularios",
      "order": 5,
      "title": "Validação de Erro",
      "summary": "Validação de Erro — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\naria-invalid=\"true\">",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "Campo inválido"
        }
      ]
    },
    {
      "id": "erro-associado-ao-campo",
      "partId": "formularios",
      "order": 6,
      "title": "Erro Associado ao Campo",
      "summary": "Erro Associado ao Campo — acessibilidade em Angular.",
      "blocks": [
        {
          "kind": "code",
          "code": "<label for=\"cpf\">\nCPF\n</label>\n\n<input\nid=\"cpf\"\naria-invalid=\"true\"\naria-describedby=\"cpfErro\">\n\n<span id=\"cpfErro\">\nCPF inválido\n</span>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "CPF\nCampo inválido\nCPF inválido"
        }
      ]
    },
    {
      "id": "erro-dinamico-com-aria-live",
      "partId": "formularios",
      "order": 7,
      "title": "Erro Dinâmico com aria-live",
      "summary": "Erro Dinâmico com aria-live — acessibilidade em Angular.",
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
