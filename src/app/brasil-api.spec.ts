import { TestBed } from '@angular/core/testing';

import { BrasilAPI } from './brasil-api';

describe('BrasilAPI', () => {
  let service: BrasilAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrasilAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
