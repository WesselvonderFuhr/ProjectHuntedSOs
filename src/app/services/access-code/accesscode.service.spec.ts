import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccessCodeService } from './accesscode.service';
import { AccessCode } from '../../models/accesscode.model'

describe('AccesscodeService', () => {
  let service: AccessCodeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AccessCodeService);

    httpMock = TestBed.get(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all accesscodes', () => {

    const dummyCodes: AccessCode[] = [
      {_id: "12345", code: "112", role: "Agent", assignedTo: "agent" },
      {_id: "54321", code: "221", role: "Boef", assignedTo: "boef" }
    ]

    service.getAllCodes().subscribe(codes => {
      expect(codes.length).toBe(2)
      expect(codes).toEqual(dummyCodes)
    })

    const request = httpMock.expectOne(`https://apihuntedsos.herokuapp.com/accesscode`)
    expect(request.request.method).toBe('GET');

    request.flush(dummyCodes)

  })

});