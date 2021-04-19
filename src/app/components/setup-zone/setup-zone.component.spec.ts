import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupZoneComponent } from './setup-zone.component';

describe('SetupZoneComponent', () => {
  let component: SetupZoneComponent;
  let fixture: ComponentFixture<SetupZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
