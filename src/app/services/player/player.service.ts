import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playerURL = 'http://127.0.0.1:3000/player';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.http.get(this.playerURL);
  }

  getPlayerOutOfBounds(id: String): Observable<any>{
    let APIurl = this.playerURL + "/outofbounds/" + id;
    return this.http.get(APIurl);
  }



}
