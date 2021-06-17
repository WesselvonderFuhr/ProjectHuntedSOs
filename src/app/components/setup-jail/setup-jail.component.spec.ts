import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SetupJailComponent } from './setup-jail.component';
import { FormsModule } from '@angular/forms';

describe('SetupJailComponent', () => {
  let component: SetupJailComponent;
  let fixture: ComponentFixture<SetupJailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupJailComponent ],
      imports: [ HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupJailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
