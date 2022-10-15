import { TestBed } from '@angular/core/testing';

import { CareboxSearchService } from './carebox-search.service';

describe('CareboxSearchService', () => {
  let service: CareboxSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareboxSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
