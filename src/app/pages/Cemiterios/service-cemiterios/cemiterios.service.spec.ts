import { TestBed } from '@angular/core/testing';

import { CemiteriosService } from './cemiterios.service';

describe('CemiteriosServiceService', () => {
  let service: CemiteriosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CemiteriosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
