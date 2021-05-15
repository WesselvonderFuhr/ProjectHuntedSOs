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

  constructor(private http: HttpClient) { }

  getGame(): Observable<any> {
    return this.http.get(this.gameURL);
  }

  updateStartTime(time: Time) {
    return this.http.put(this.timeURL, time, {responseType: 'text'});
  }
}