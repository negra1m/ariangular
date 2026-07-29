/**
 * Assinatura em ASCII dos arquivos exportados.
 *
 * O checklist exportado vai parar num PR, numa story, num comentário de
 * ticket — lugares onde ninguém sabe de onde aquilo veio. A assinatura resolve
 * isso e ainda leva o link junto.
 *
 * O anel dentro do escudo é a mesma marca do logo: o foco abraçando o
 * elemento. Desenhado em caracteres de caixa para manter o alinhamento em
 * qualquer fonte monoespaçada.
 */

const SITE = 'ariangular.vercel.app';

/** Bloco de assinatura, para o rodapé de qualquer export. */
export function signature(): string {
  return [
    '',
    '  ╭───────╮',
    '  │ ╭───╮ │   a r i a n g u l a r',
    '  │ │ ◉ │ │   acessibilidade em angular',
    '  │ ╰───╯ │',
    '  ╰───┬───╯   ' + SITE,
    '      ╰       Vini Negrão',
    '',
  ].join('\n');
}

/** Cabeçalho de um export, com título, progresso e data. */
export function header(title: string, done: number, total: number, locale: string): string {
  const date = new Date().toLocaleDateString(
    locale === 'en' ? 'en-US' : locale === 'zh' ? 'zh-CN' : 'pt-BR',
  );
  const pct = total ? Math.round((done / total) * 100) : 0;

  return [
    title,
    '─'.repeat(Math.max(title.length, 32)),
    `${done}/${total}  (${pct}%)  ·  ${date}`,
    '',
  ].join('\n');
}

/** Barra de progresso em caracteres, para o export em texto. */
export function progressBar(done: number, total: number, width = 32): string {
  const filled = total ? Math.round((done / total) * width) : 0;
  return '█'.repeat(filled) + '░'.repeat(Math.max(0, width - filled));
}
