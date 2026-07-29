// GERADO por scripts/extract-content.js — não edite à mão.
// Fonte: fonte/ARIA.html. Para alterar, edite a fonte e rode:
//   npm run content:extract

import type { Part } from '../../types';

export const formularios: Part = {
  "id": "formularios",
  "order": 3,
  "numeral": "03",
  "title": "Formulários Acessíveis",
  "summary": "Label, campo obrigatório, mensagem de ajuda e erro anunciado. Formulário é onde mais se perde gente com deficiência.",
  "sections": [
    {
      "id": "label",
      "partId": "formularios",
      "order": 1,
      "title": "Label",
      "summary": "Todo campo precisa de label associado. Sem ele o leitor anuncia só \"campo de edição\" e a pessoa não sabe o que digitar.",
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
      "summary": "O placeholder some quando a digitação começa, e o suporte dos leitores é inconsistente. É dica, nunca rótulo.",
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
      "summary": "A obrigatoriedade precisa ser anunciada, não só marcada com asterisco. O required nativo já faz; aria-required reforça.",
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
      "summary": "aria-describedby liga a dica ao campo, e o leitor lê o nome e em seguida a descrição.",
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
      "summary": "aria-invalid marca o campo como reprovado, e o estado passa a ser anunciado junto com o nome.",
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
      "summary": "A mensagem de erro precisa estar ligada ao campo. Texto solto na tela é invisível para quem está no campo.",
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
      "summary": "Erro que aparece depois do envio precisa de região viva, senão ninguém usando leitor de tela fica sabendo que ele existe.",
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
