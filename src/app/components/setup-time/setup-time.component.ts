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
  public gameStatus: string;

  constructor(private gameService: GameService) {
    this.time = new Time();
  }

  ngOnInit(): void {
    this.getStatus();
  }

  onClickSubmit(): void {
    this.time.start_time = new Date();

    this.gameService.updateTime(this.time).subscribe( (res) => {
      console.log('Updated the time');
    });
  }

  endGame(): void {
    let time = new Time();
    time.start_time = new Date(0);
    time.end_time = new Date();
    this.gameService.updateTime(time).subscribe( (res) => {
      console.log("Updated end time")
    });
  }

  getStatus(): any {
    this.gameService.getStatus().subscribe( (res) => {
      this.gameStatus = res;
    });
  }
}
