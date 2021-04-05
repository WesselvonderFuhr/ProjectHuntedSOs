import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JailService } from './jail.service';

describe('JailService', () => {
  let service: JailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(JailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
