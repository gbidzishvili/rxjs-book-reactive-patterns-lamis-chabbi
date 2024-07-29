import { TestBed } from '@angular/core/testing';

import { BaseBroxyService } from './base-broxy.service';

describe('BaseBroxyService', () => {
  let service: BaseBroxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseBroxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
