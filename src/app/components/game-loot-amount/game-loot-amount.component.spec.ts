import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLootAmountComponent } from './game-loot-amount.component';

describe('GameLootAmountComponent', () => {
  let component: GameLootAmountComponent;
  let fixture: ComponentFixture<GameLootAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLootAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLootAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
