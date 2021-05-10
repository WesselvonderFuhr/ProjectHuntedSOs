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
  public playerArray: Player[];
  public OutOfBoundsPlayerArray: Player[];

  constructor(private playerService: PlayerService) {
  }

  async ngOnInit() {
    await this.playerService.getPlayers().toPromise().then(result => {
      this.playerArray = result;
    });
   
    while(this.checkForPlayers){
      console.log("checking for out of bounds players ")
      await this.checkPlayersOutOfBounds();
      await this.sleep(5000);
    }
  }

  checkPlayersOutOfBounds(){
    this.OutOfBoundsPlayerArray = new Array();
    this.playerArray.forEach(player =>{
      
     this.playerService.getPlayerOutOfBounds(player._id).toPromise().then(result =>{               
        if(result == true){
          this.OutOfBoundsPlayerArray.push(player);
        }
      },
      error =>{
        console.log("error") 
      })
    });
  }

   sleep(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
