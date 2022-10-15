import { TestBed } from '@angular/core/testing';

import { CareboxDetailsService } from './carebox-details.service';

describe('CareboxDetailsService', () => {
  let service: CareboxDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareboxDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
