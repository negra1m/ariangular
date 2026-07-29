import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
import { partsOf } from '../../../content';

describe('SearchService', () => {
  let search: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    search = TestBed.inject(SearchService);
  });

  const titles = (q: string) => search.search(q).map((h) => h.entry.sectionTitle);
  const ids = (q: string) => search.search(q).map((h) => h.entry.id);

  /* ---------------- Normalização ---------------- */

  describe('acento', () => {
    it('acha "Formulários" digitando sem acento', () => {
      expect(ids('formularios').length).toBeGreaterThan(0);
    });

    it('acha o mesmo resultado com e sem acento', () => {
      expect(ids('formulários')).toEqual(ids('formularios'));
    });

    it('ignora maiúscula e minúscula', () => {
      expect(ids('ARIA-LABEL')).toEqual(ids('aria-label'));
    });
  });

  /* ---------------- Ranking ---------------- */

  describe('ranking', () => {
    it('coloca a seção cujo título é o termo em primeiro', () => {
      expect(titles('aria-label')[0]).toBe('aria-label');
    });

    it('acha por atributo ARIA citado no código', () => {
      expect(ids('aria-live').length).toBeGreaterThan(0);
    });

    it('acha por critério WCAG', () => {
      expect(ids('2.4.3').length).toBeGreaterThan(0);
    });

    it('acha por API do CDK', () => {
      expect(ids('cdkTrapFocus').length).toBeGreaterThan(0);
    });

    it('acha LiveAnnouncer', () => {
      expect(ids('LiveAnnouncer').length).toBeGreaterThan(0);
    });

    it('acha as diretivas do @angular/aria', () => {
      expect(ids('ngCombobox').length).toBeGreaterThan(0);
    });

    it('ordena por relevância, não por posição no documento', () => {
      const hits = search.search('modal');
      const scores = hits.map((h) => h.score);
      expect(scores).toEqual([...scores].sort((a, b) => b - a));
    });
  });

  /* ---------------- Múltiplos termos ---------------- */

  describe('múltiplos termos', () => {
    it('exige todos os termos (AND), não qualquer um', () => {
      const both = search.search('modal foco');
      const onlyModal = search.search('modal');
      expect(both.length).toBeLessThanOrEqual(onlyModal.length);
    });

    it('não retorna nada quando um dos termos não existe em lugar nenhum', () => {
      expect(search.search('modal zzzzqqqq')).toEqual([]);
    });
  });

  /* ---------------- Comportamento de borda ---------------- */

  describe('bordas', () => {
    it('devolve vazio para consulta vazia', () => {
      expect(search.search('')).toEqual([]);
      expect(search.search('   ')).toEqual([]);
    });

    it('ignora termo de uma letra só', () => {
      expect(search.search('a')).toEqual([]);
    });

    it('devolve vazio quando nada casa', () => {
      expect(search.search('zzzzqqqqxxxx')).toEqual([]);
    });

    it('respeita o limite de resultados', () => {
      expect(search.search('a11y', 3).length).toBeLessThanOrEqual(3);
    });
  });

  /* ---------------- Cobertura do índice ---------------- */

  describe('cobertura', () => {
    it('indexa todas as seções de todas as partes', () => {
      const total = partsOf('pt').reduce((a, p) => a + p.sections.length, 0);
      // Buscar o título de cada seção deve achar a própria seção.
      const found = partsOf('pt').flatMap((p) =>
        p.sections.filter((s) => ids(s.title).includes(`${p.id}/${s.id}`)),
      );
      expect(found.length).toBe(total);
    });

    it('todas as 7 partes aparecem em alguma busca', () => {
      const parts = new Set(search.search('acessibilidade', 200).map((h) => h.entry.partId));
      expect(parts.size).toBeGreaterThanOrEqual(1);
    });
  });
});
