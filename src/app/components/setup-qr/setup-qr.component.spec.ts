import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SetupQrComponent } from './setup-qr.component';
import { FormsModule } from '@angular/forms';

describe('SetupQrComponent', () => {
  let component: SetupQrComponent;
  let fixture: ComponentFixture<SetupQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupQrComponent ],
      imports: [ HttpClientTestingModule, FormsModule ],
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
