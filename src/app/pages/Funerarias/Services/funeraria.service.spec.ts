import { TestBed } from '@angular/core/testing';

import { FunerariaService } from './funeraria.service';

describe('FunerariaService', () => {
  let service: FunerariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunerariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
