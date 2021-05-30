import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../../models/game.model'
import { Time } from '../../models/time.model';
import { environment } from '../../../environments/environment'
import { Status } from 'src/app/models/status.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameURL = `${environment.apiUrl}/game`;

  constructor(private http: HttpClient) { }

  getGame(): Observable<any> {
    return this.http.get(this.gameURL);
  }

  getStatus(): Observable<any> {
    return this.http.get(`${this.gameURL}/status`);
  }

  updateTime(time: Time) {
    return this.http.put(`${this.gameURL}/time`, time, {responseType: 'text'});
  }

  getSetupStatus(): Observable<any> {
    return this.http.get(`${this.gameURL}/setupstatus`)
  }

}