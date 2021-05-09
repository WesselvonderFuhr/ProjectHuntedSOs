import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player/player.service';



@Component({
  selector: 'app-game-out-of-bounds-message',
  templateUrl: './game-out-of-bounds-message.component.html',
  styleUrls: ['./game-out-of-bounds-message.component.scss']
})
export class GameOutOfBoundsMessageComponent implements OnInit {

  public checkForPlayers = true;
  public OutOfBoundsPlayerArray: Player[];

  constructor(private playerService: PlayerService) {
  }

  async ngOnInit() {
    while(this.checkForPlayers){
      await this.checkPlayersOutOfBounds();
      await this.sleep(5000);
    }
  }

  checkPlayersOutOfBounds(){
    this.playerService.getPlayersOutOfBounds().toPromise().then(result =>{
      this.OutOfBoundsPlayerArray = result;
      })
  }

   sleep(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
