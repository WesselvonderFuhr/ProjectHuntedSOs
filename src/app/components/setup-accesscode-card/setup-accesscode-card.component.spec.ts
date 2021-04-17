import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAccesscodeCardComponent } from './setup-accesscode-card.component';

describe('SetupAccesscodeCardComponent', () => {
  let component: SetupAccesscodeCardComponent;
  let fixture: ComponentFixture<SetupAccesscodeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupAccesscodeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupAccesscodeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
