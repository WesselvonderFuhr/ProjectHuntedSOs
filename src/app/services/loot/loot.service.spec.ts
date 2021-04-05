import { TestBed } from '@angular/core/testing';

import { LootService } from './loot.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LootService', () => {
  let service: LootService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(LootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
