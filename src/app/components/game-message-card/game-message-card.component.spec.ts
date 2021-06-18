import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMessageCardComponent } from './game-message-card.component';

describe('GameMessageCardComponent', () => {
  let component: GameMessageCardComponent;
  let fixture: ComponentFixture<GameMessageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameMessageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMessageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
