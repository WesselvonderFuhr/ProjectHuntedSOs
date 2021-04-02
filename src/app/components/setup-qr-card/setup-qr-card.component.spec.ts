import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupQrCardComponent } from './setup-qr-card.component';

describe('SetupQrCardComponent', () => {
  let component: SetupQrCardComponent;
  let fixture: ComponentFixture<SetupQrCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupQrCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupQrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
