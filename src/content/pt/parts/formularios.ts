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
          "kind": "paragraph",
          "text": "Erro que aparece depois do envio precisa de região viva. Sem ela, quem usa leitor de tela não fica sabendo que ele existe."
        },
        {
          "kind": "code",
          "code": "<div aria-live=\"assertive\">\n\n{{ mensagemErro }}\n\n</div>",
          "variant": "neutral"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "A armadilha da região que ainda não existe"
        },
        {
          "kind": "paragraph",
          "text": "Este é o erro mais comum de todos, e ele parece certo no código:"
        },
        {
          "kind": "code",
          "code": "<div *ngIf=\"erro\" role=\"alert\">{{ erro }}</div>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Não funciona. role=\"alert\" e aria-live avisam o leitor de tela quando o conteúdo da região muda. Se a região inteira só entra no DOM no momento do erro, não houve mudança de conteúdo para observar — houve o nascimento de um elemento novo, que o leitor não estava monitorando."
        },
        {
          "kind": "paragraph",
          "text": "Vale para *ngIf, para @if e para o <mat-error> do Angular Material, que tem role=\"alert\" por dentro e esbarra exatamente nisso."
        },
        {
          "kind": "code",
          "code": "<!-- A região existe desde o começo, vazia.\n     O leitor de tela já está observando quando o texto chega. -->\n<div role=\"alert\" class=\"erro\">{{ erro }}</div>",
          "variant": "correct"
        },
        {
          "kind": "paragraph",
          "text": "Esconder com CSS quando não há erro é seguro — :empty não tira a região da árvore de acessibilidade."
        },
        {
          "kind": "code",
          "code": ".erro:empty {\n  display: none;\n}",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "Alternativa quando a estrutura não permite manter a região montada."
        },
        {
          "kind": "code",
          "code": "private readonly announcer = inject(LiveAnnouncer);\n\nenviar(): void {\n  if (this.form.invalid) {\n    this.announcer.announce(\n      'Formulário com 2 erros. Verifique CPF e data de nascimento.',\n      'assertive',\n    );\n  }\n}",
          "variant": "correct"
        },
        {
          "kind": "heading",
          "level": 1,
          "text": "Duas armadilhas do Angular Material"
        },
        {
          "kind": "paragraph",
          "text": "matInput sobrescreve o seu aria-describedby. O <mat-form-field> monta esse atributo sozinho, juntando hint e error. Um aria-describedby escrito na mão no input é substituído em silêncio, e a ligação com a sua mensagem se perde."
        },
        {
          "kind": "code",
          "code": "<!-- ❌ o atributo escrito aqui não sobrevive -->\n<input matInput aria-describedby=\"minha-dica\">\n\n<!-- ✅ deixe o Material montar: use mat-hint e mat-error -->\n<mat-form-field>\n  <mat-label>CPF</mat-label>\n  <input matInput [formControl]=\"cpf\">\n  <mat-hint>Apenas números</mat-hint>\n  <mat-error>CPF inválido</mat-error>\n</mat-form-field>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "aria-describedby apontando para o vazio. Quando não há erro, o atributo precisa sair do DOM. Apontar para um elemento vazio faz o leitor anunciar o nome do campo e cair num silêncio que a pessoa interpreta como conteúdo perdido."
        },
        {
          "kind": "code",
          "code": "<input\n  [attr.aria-describedby]=\"temErro ? 'cpf-erro' : null\"\n  [attr.aria-invalid]=\"temErro\"\n>",
          "variant": "neutral"
        },
        {
          "kind": "paragraph",
          "text": "null remove o atributo. String vazia, não — aria-describedby=\"\" continua presente no HTML."
        }
      ]
    }
  ]
};
