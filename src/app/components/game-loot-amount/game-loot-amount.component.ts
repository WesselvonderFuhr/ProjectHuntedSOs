import { Component, OnInit } from '@angular/core';
import { LootService } from 'src/app/services/loot/loot.service';

@Component({
  selector: 'app-game-loot-amount',
  templateUrl: './game-loot-amount.component.html',
  styleUrls: ['./game-loot-amount.component.scss']
})
export class GameLootAmountComponent implements OnInit {


  public checkForPlayers = true;
  public amountOfLoot;
  public amountOfStolenLoot;

  constructor(private lootService: LootService) {
  }

  async ngOnInit() {
    this.getTotalLoot();
    while(true){
      await this.getStolenLoot();
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

   sleep(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
