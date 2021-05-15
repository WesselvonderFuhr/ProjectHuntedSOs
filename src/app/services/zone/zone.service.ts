import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone } from '../../models/zone.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private gameUrl = `${environment.apiUrl}/game`;
  private zoneUrl = `${environment.apiUrl}/game/playfield`;

  constructor(private http: HttpClient) { }

  getZone(): Observable<Zone> {
    return this.http.get<Zone>(this.gameUrl);
  }

  updateZone(zone: Zone) {
    console.log(JSON.stringify(zone));
    return this.http.put(this.zoneUrl, zone, {responseType: 'text'});
  }
}
