import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JailService } from './jail.service';
import { Jail } from 'src/app/models/jail.model';

describe('JailService', () => {
  let service: JailService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(JailService);
    httpMock = TestBed.get(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve jails', () => {

    const dummyJail: any = [
      {
        "location": {
            "latitude": 51,
            "longitude": 5
        },
        "_id": "60cc771b3aa1492970ccd99d",
        "__v": 0
      }
    ]

    service.getJail().subscribe(jail => {
      expect(jail.length).toBe(1)
      expect(jail).toEqual(dummyJail)
    })

    const request = httpMock.expectOne(`https://apihuntedsos.herokuapp.com/jail`)
    expect(request.request.method).toBe('GET');

    request.flush(dummyJail)

  })
});
