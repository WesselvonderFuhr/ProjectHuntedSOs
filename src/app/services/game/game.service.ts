import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../../models/game.model'
import { Time } from '../../models/time.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameURL = `${environment.apiUrl}/game`;
  private timeURL =  this.gameURL + '/time';
  private lootwinURL =  this.gameURL + '/lootwinpercentage';
  private statusURL =  this.gameURL + '/status';

  constructor(private http: HttpClient) { }

  getGame(): Observable<any> {
    return this.http.get(this.gameURL);
  }

  getStatus(): Observable<any> {
    return this.http.get(this.statusURL);
  }

  updateTime(time: Time) {
    return this.http.put(this.timeURL, time, {responseType: 'text'});
  }

  updateLootWinPercentage(percentage: Number) {
    let lootWinpercentage = { lootWinPercentage: percentage};
    return this.http.put(this.lootwinURL, lootWinpercentage, {responseType: 'text'});
  }


}