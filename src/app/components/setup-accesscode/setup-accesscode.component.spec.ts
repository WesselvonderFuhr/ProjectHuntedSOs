import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAccesscodeComponent } from './setup-accesscode.component';

describe('SetupAccesscodeComponent', () => {
  let component: SetupAccesscodeComponent;
  let fixture: ComponentFixture<SetupAccesscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupAccesscodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupAccesscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
