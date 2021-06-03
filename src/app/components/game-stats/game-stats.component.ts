import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player/player.service';
import { LootService } from 'src/app/services/loot/loot.service';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.scss']
})
export class GameStatsComponent implements OnInit {

  public amountOfLoot;
  public amountOfStolenLoot;

  public amountOfThieves;
  public amountOfArrestedThieves;

  constructor(private playerService: PlayerService, private lootService: LootService) { }

  async ngOnInit() {
    while(true){
      await this.getTotalLoot();
      await this.getStolenLoot();
      await this.getArrestedThieves();
      await this.sleep(5000);
    }
  }

  getTotalLoot(){
    this.lootService.getLoot().toPromise().then(result =>{
      this.amountOfLoot = result.length;
      })
  }

  getStolenLoot(){
    this.lootService.getStolenLoot().toPromise().then(result =>{
      this.amountOfStolenLoot = result;
      })
  }

  getArrestedThieves(){
    this.playerService.getArrestedThieves().toPromise().then(result =>{
      this.amountOfThieves = result.thieves;
      this.amountOfArrestedThieves = result.arrestedThieves;
      })
  }

   sleep(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
