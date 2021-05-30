import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/models/time.model';
import { GameService } from 'src/app/services/game/game.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-setup-time',
  templateUrl: './setup-time.component.html',
  styleUrls: ['./setup-time.component.scss']
})
export class SetupTimeComponent implements OnInit {

  public time: Time;
  public gameStatus: string;
  public gameSetupStatus: string;

  public showSaveConfirmation = false;
  public showNotEntered = false;
  public showGameNotSetup = false;

  public toolTipText = "Stel een einddatum en eindtijd in en druk op Spel Starten om het spel te beginnen"

  constructor(private gameService: GameService, private router: Router) {
    this.time = new Time();
  }

  ngOnInit(): void {
    this.getStatus();

  }

  startGame(): void {
    this.resetConfirmations();

    this.time.start_time = new Date();

    this.gameService.getSetupStatus().subscribe((res) => {
      this.gameSetupStatus = res.status;

      if(this.time.end_time == undefined) {
        this.showNotEntered = true;
      }

      if(this.gameSetupStatus == "not ready") {
        this.showGameNotSetup = true;
      } else {
        if(confirm("Spel starten?")) {
          this.gameService.updateTime(this.time).subscribe( (res) => {
            console.log('Updated the time - Game has now started');
            this.ngOnInit();
          });
        }
      }
    });
  }

  endGame(): void {
    if(confirm("Spel beeindigen?")) {
      let time = new Time();
      time.start_time = new Date(0);
      time.end_time = new Date();
      this.gameService.updateTime(time).subscribe( (res) => {
        console.log("Updated end time - Game has now ended")
        this.ngOnInit();
      });
    }
  }

  restartGame(): void {
    if(confirm("Spel herstarten?")) {
      let time = new Time();
      time.start_time = new Date(0);
      time.end_time = new Date(0);
      this.gameService.updateTime(time).subscribe( (res) => {
        console.log("Updated end time - Game has now restarted")
        this.ngOnInit();
      });
    }
  }

  getStatus(): any {
    this.gameService.getStatus().subscribe( (res) => {
      this.gameStatus = res;
    });
  }

  resetConfirmations(): void {
    this.showSaveConfirmation = false;
    this.showNotEntered = false;
    this.showGameNotSetup = false;
  }
}
