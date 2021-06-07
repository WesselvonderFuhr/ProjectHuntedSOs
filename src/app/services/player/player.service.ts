import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playerURL = `${environment.apiUrl}/player`;

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.http.get(this.playerURL);
  }

  getPlayersOutOfBounds(): Observable<any>{
    let APIurl = this.playerURL + "/outofbounds/";
    return this.http.get(APIurl);
  }

  getArrestedThieves(): Observable<any>{
    let APIurl = this.playerURL + "/getArrestedThieves/";
    return this.http.get(APIurl);
  }

}
