import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/models/time.model';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-setup-time',
  templateUrl: './setup-time.component.html',
  styleUrls: ['./setup-time.component.scss']
})
export class SetupTimeComponent implements OnInit {

  public time: Time;

  constructor(private gameService: GameService) {
    this.time = new Time();
  }

  ngOnInit(): void {
  }

  onClickSubmit(): void {
    this.time.start_time = new Date();

    
    this.gameService.updateStartTime(this.time).subscribe( (res) => {
      console.log('Updated the time');
   });
  }
}
