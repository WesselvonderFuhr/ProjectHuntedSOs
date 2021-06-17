import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOutOfBoundsMessageComponent } from './game-out-of-bounds-message.component';

describe('GameOutOfBoundsMessageComponent', () => {
  let component: GameOutOfBoundsMessageComponent;
  let fixture: ComponentFixture<GameOutOfBoundsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GameOutOfBoundsMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOutOfBoundsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
