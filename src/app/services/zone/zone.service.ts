import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playfield } from '../../models/zone.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private zoneUrl = `${environment.apiUrl}/game/playfield`;

  constructor(private http: HttpClient) { }

  getZone(): Observable<Playfield> {
    return this.http.get<Playfield>(this.zoneUrl);
  }

  updateZone(map: string) {
    map = map.split('lat').join('latitude');
    map = map.split('lng').join('longitude');
    let mapModel = { playfield: JSON.parse(map)};
    return this.http.put(this.zoneUrl, mapModel, {responseType: 'text'});
  }
}
