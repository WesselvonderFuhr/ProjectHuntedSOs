import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAccesscodeComponent } from './setup-accesscode.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormsModule } from '@angular/forms';

describe('SetupAccesscodeComponent', () => {
  let component: SetupAccesscodeComponent;
  let fixture: ComponentFixture<SetupAccesscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule ],
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
