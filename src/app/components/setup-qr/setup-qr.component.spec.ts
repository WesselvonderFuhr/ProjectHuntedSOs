import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupQrComponent } from './setup-qr.component';

describe('SetupQrComponent', () => {
  let component: SetupQrComponent;
  let fixture: ComponentFixture<SetupQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
