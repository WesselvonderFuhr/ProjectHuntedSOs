import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOutOfBoundsMessageComponent } from './game-out-of-bounds-message.component';

describe('GameOutOfBoundsMessageComponent', () => {
  let component: GameOutOfBoundsMessageComponent;
  let fixture: ComponentFixture<GameOutOfBoundsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
