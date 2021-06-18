import { TestBed } from '@angular/core/testing';

import { LootService } from './loot.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LootService', () => {
  let service: LootService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(LootService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all loot', () => {

    const dummyLoot: any[] = [
      {
          "_id": "60cc9af93977920004827231",
          "name": "Buit 1",
          "__v": 0
      },
      {
          "_id": "60cc9afc3977920004827232",
          "name": "Buit 2",
          "__v": 0
      }
    ]

    service.getLoot().subscribe(loot => {
      expect(loot.length).toBe(2)
      expect(loot).toEqual(dummyLoot)
    })

    const request = httpMock.expectOne(`https://apihuntedsos.herokuapp.com/loot`)
    expect(request.request.method).toBe('GET');

    request.flush(dummyLoot)

  })
});
