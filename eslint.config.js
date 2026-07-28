// @ts-check
const eslint = require('@eslint/js');
const { defineConfig, globalIgnores } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

/**
 * Regras de acessibilidade de template.
 *
 * Todas como `error`, de propósito. Num projeto que publica um guia de
 * acessibilidade, violação de a11y não pode ficar amarela no terminal e ser
 * ignorada por semanas — ou quebra o build, ou não vale nada.
 *
 * `templateAccessibility` já traz o conjunto; a lista abaixo é explícita para
 * que ninguém precise abrir o node_modules para saber o que está valendo, e
 * para que uma atualização do preset não afrouxe nada em silêncio.
 */
const a11yRules = {
  // Imagem precisa de alternativa textual — WCAG 1.1.1
  '@angular-eslint/template/alt-text': 'error',
  // Elemento interativo precisa de conteúdo/nome acessível — WCAG 4.1.2
  '@angular-eslint/template/elements-content': 'error',
  // Todo campo precisa de label associado — WCAG 1.3.1, 3.3.2
  '@angular-eslint/template/label-has-associated-control': 'error',
  // autofocus sequestra o foco de quem usa leitor de tela — WCAG 2.4.3
  '@angular-eslint/template/no-autofocus': 'error',
  // Espaço em branco distraído no meio do texto lido
  '@angular-eslint/template/no-distracting-elements': 'error',
  // tabindex positivo quebra a ordem natural de foco — WCAG 2.4.3
  '@angular-eslint/template/no-positive-tabindex': 'error',
  // Atributo aria-* precisa existir e ter valor válido — WCAG 4.1.2
  '@angular-eslint/template/valid-aria': 'error',
  // (click) sem equivalente de teclado — WCAG 2.1.1
  '@angular-eslint/template/click-events-have-key-events': 'error',
  // Elemento com handler de interação precisa ser focável — WCAG 2.1.1
  '@angular-eslint/template/interactive-supports-focus': 'error',
  // role que exige atributos obrigatórios precisa tê-los — WCAG 4.1.2
  '@angular-eslint/template/role-has-required-aria': 'error',
  // <th> precisa de scope — WCAG 1.3.1
  '@angular-eslint/template/table-scope': 'error',
  // (mouseover)/(mouseout) sem (focus)/(blur) equivalente exclui o teclado — WCAG 2.1.1
  '@angular-eslint/template/mouse-events-have-key-events': 'error',
  // <button> sem type dispara submit sem querer dentro de formulário
  '@angular-eslint/template/button-has-type': 'error',
};

module.exports = defineConfig([
  globalIgnores(['dist/**', '.angular/**', 'node_modules/**', 'coverage/**']),

  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
    },
  },

  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    rules: a11yRules,
  },

  // Os scripts de build/verificação são CommonJS rodando no Node, não app Angular.
  {
    files: ['scripts/**/*.js', 'eslint.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { require: 'readonly', module: 'writable', process: 'readonly', console: 'readonly', __dirname: 'readonly' },
    },
  },
]);
