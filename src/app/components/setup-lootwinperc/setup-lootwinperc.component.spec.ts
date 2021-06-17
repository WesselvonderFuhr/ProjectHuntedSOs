import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SetupLootwinpercComponent } from './setup-lootwinperc.component';

describe('SetupLootwinpercComponent', () => {
  let component: SetupLootwinpercComponent;
  let fixture: ComponentFixture<SetupLootwinpercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule ],
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
