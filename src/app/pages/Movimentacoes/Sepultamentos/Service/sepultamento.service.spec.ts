import { TestBed } from '@angular/core/testing';

import { SepultamentoService } from './sepultamento.service';

describe('SepultamentoService', () => {
  let service: SepultamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SepultamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
