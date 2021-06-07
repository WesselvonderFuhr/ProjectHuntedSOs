import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupLootwinpercComponent } from './setup-lootwinperc.component';

describe('SetupLootwinpercComponent', () => {
  let component: SetupLootwinpercComponent;
  let fixture: ComponentFixture<SetupLootwinpercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupLootwinpercComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupLootwinpercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
