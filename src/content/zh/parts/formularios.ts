// GERADO por scripts/build-locale.js zh — não edite à mão.
// Estrutura: fonte/ARIA.html. Textos: i18n/strings.zh.json

import type { Part } from '../../types';

export const formularios: Part = {
  "id": "formularios",
  "order": 3,
  "numeral": "03",
  "title": "无障碍表单",
  "summary": "标签、必填字段、帮助信息和被朗读的错误。表单是残障用户流失最多的地方。",
  "sections": [
    {
      "id": "label",
      "partId": "formularios",
      "order": 1,
      "title": "标签",
      "summary": "每个字段都需要关联的标签。没有标签，屏幕阅读器只会朗读“编辑框”，用户根本不知道该输入什么。",
      "blocks": [
        {
          "kind": "code",
          "code": "<label for=\"nome\">\n姓名\n</label>\n\n<input\nid=\"nome\"\ntype=\"text\">",
          "variant": "correct"
        },
        {
          "kind": "reading",
          "text": "姓名，编辑框"
        },
        {
          "kind": "code",
          "code": "<input\nplaceholder=\"姓名\">",
          "variant": "wrong"
        }
      ]
    },
    {
      "id": "placeholder-nao-e-label",
      "partId": "formularios",
      "order": 2,
      "title": "占位符不是标签",
      "summary": "占位符在开始输入时就消失了，而且各屏幕阅读器对它的支持并不一致。它是提示，永远不是标签。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "填写字段时占位符会消失。"
        },
        {
          "kind": "paragraph",
          "text": "当它是名称的唯一来源时，屏幕阅读器的行为也可能不一致。"
        },
        {
          "kind": "code",
          "code": "<label for=\"cpf\">\n身份证号\n</label>\n\n<input\nid=\"cpf\"\nplaceholder=\"请输入身份证号\">",
          "variant": "correct"
        }
      ]
    },
    {
      "id": "campos-obrigatorios",
      "partId": "formularios",
      "order": 3,
      "title": "必填字段",
      "summary": "必填状态必须被朗读出来，而不只是用星号标出。原生的 required 已经做到了，aria-required 起加强作用。",
      "blocks": [
        {
          "kind": "heading",
          "level": 1,
          "text": "原生 HTML"
        },
        {
          "kind": "code",
          "code": "<input\nrequired>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "使用 ARIA"
        },
        {
          "kind": "code",
          "code": "<input\nrequired\naria-required=\"true\">",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "必填字段"
        }
      ]
    },
    {
      "id": "mensagens-de-ajuda",
      "partId": "formularios",
      "order": 4,
      "title": "帮助信息",
      "summary": "aria-describedby 把提示和字段绑定起来，屏幕阅读器会先读名称，再读描述。",
      "blocks": [
        {
          "kind": "paragraph",
          "text": "使用 aria-describedby。"
        },
        {
          "kind": "code",
          "code": "<label for=\"senha\">\n密码\n</label>\n\n<input\nid=\"senha\"\naria-describedby=\"senhaAjuda\">\n\n<small id=\"senhaAjuda\">\n至少 8 个字符\n</small>",
          "variant": "neutral"
        }
      ]
    },
    {
      "id": "validacao-de-erro",
      "partId": "formularios",
      "order": 5,
      "title": "错误校验",
      "summary": "aria-invalid 把字段标记为校验失败，这样状态会和名称一起被朗读出来。",
      "blocks": [
        {
          "kind": "code",
          "code": "<input\naria-invalid=\"true\">",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "无效字段"
        }
      ]
    },
    {
      "id": "erro-associado-ao-campo",
      "partId": "formularios",
      "order": 6,
      "title": "把错误绑定到字段",
      "summary": "错误信息必须与它所属的字段相连。页面上孤立的文字，对停留在字段上的人来说是不存在的。",
      "blocks": [
        {
          "kind": "code",
          "code": "<label for=\"cpf\">\n身份证号\n</label>\n\n<input\nid=\"cpf\"\naria-invalid=\"true\"\naria-describedby=\"cpfErro\">\n\n<span id=\"cpfErro\">\n身份证号无效\n</span>",
          "variant": "neutral"
        },
        {
          "kind": "reading",
          "text": "身份证号\n无效字段\n身份证号无效"
        }
      ]
    },
    {
      "id": "erro-dinamico-com-aria-live",
      "partId": "formularios",
      "order": 7,
      "title": "用 aria-live 处理动态错误",
      "summary": "提交后才出现的错误需要实时区域，否则使用屏幕阅读器的人根本不会知道它存在。",
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
