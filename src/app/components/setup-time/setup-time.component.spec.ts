import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTimeComponent } from './setup-time.component';

describe('SetupTimeComponent', () => {
  let component: SetupTimeComponent;
  let fixture: ComponentFixture<SetupTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
