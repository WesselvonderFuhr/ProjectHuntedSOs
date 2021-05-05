import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { Time } from 'src/app/models/time.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameURL = 'http://127.0.0.1:3000/game';
  private timeURL =  this.gameURL + '/time';

  constructor(private http: HttpClient) { }

  getGame(): Observable<any> {
    return this.http.get(this.gameURL);
  }

  updateStartTime(time: Time) {
    return this.http.put(this.timeURL, time, {responseType: 'text'});
  }
}