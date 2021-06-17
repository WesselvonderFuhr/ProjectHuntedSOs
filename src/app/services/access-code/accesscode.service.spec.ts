import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccessCodeService } from './accesscode.service';

describe('AccesscodeService', () => {
  let service: AccessCodeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AccessCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
