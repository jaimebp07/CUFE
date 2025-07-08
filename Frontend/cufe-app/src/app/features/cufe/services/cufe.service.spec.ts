import { TestBed } from '@angular/core/testing';

import { CufeService } from './cufe.service';

describe('CufeService', () => {
  let service: CufeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CufeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
