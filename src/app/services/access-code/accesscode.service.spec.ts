import { TestBed } from '@angular/core/testing';

import { AccessCodeService } from './accesscode.service';

describe('AccesscodeService', () => {
  let service: AccessCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
