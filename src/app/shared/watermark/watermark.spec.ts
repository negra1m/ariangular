import { describe, it, expect } from 'vitest';
import { encodeZeroWidth, decodeZeroWidth } from './watermark';

/**
 * O watermark é invisível — some sem ninguém perceber quando um editor,
 * linter ou formatador decide "limpar" caracteres não imprimíveis.
 * Estes testes são o que faz esse sumiço aparecer.
 */
describe('watermark', () => {
  const SIGNATURE = 'Feito por - Few Company | Vini';
  const ZW_ZERO = '​';
  const ZW_ONE = '‍';

  it('codifica e decodifica de volta ao original', () => {
    expect(decodeZeroWidth(encodeZeroWidth(SIGNATURE))).toBe(SIGNATURE);
  });

  it('usa apenas U+200B e U+200D', () => {
    const allowed = new Set([ZW_ZERO, ZW_ONE]);
    expect([...encodeZeroWidth(SIGNATURE)].every((c) => allowed.has(c))).toBe(true);
  });

  it('não tem largura visível', () => {
    const encoded = encodeZeroWidth(SIGNATURE);
    // Nada imprimível: não aparece na tela nem no texto copiado.
    const visible = [...encoded].filter((c) => c !== ZW_ZERO && c !== ZW_ONE);
    expect(visible).toEqual([]);
  });

  it('gera 8 caracteres por letra', () => {
    expect(encodeZeroWidth('A')).toHaveLength(8);
    expect(encodeZeroWidth(SIGNATURE)).toHaveLength(SIGNATURE.length * 8);
  });
});
