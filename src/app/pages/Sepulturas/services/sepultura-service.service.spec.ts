import { TestBed } from '@angular/core/testing';

import { SepulturaServiceService } from './sepultura-service.service';

describe('SepulturaServiceService', () => {
  let service: SepulturaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SepulturaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
