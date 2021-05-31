import { Component, OnInit } from '@angular/core';
import { from, Subscriber, VirtualTimeScheduler } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { GameService } from 'src/app/services/game/game.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-setup-lootwinperc',
  templateUrl: './setup-lootwinperc.component.html',
  styleUrls: ['./setup-lootwinperc.component.scss']
})
export class SetupLootwinpercComponent implements OnInit {

  public lootWinPercentage: Number;
  public showConfirmation = false

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {

  }

  onClickSubmit(): void {
    this.showConfirmation = false;

    this.gameService.updateLootWinPercentage(this.lootWinPercentage).subscribe( (res) => {
      console.log('Updated the lootwinpercentage');
      this.showConfirmation = true;
   });
  }
}
