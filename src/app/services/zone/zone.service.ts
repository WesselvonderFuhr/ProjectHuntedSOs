import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Zone} from '../../models/zone.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private zoneURL = 'http://127.0.0.1:3000/zone';

  constructor(private http: HttpClient) { }

  getZone(): Observable<Zone> {
    return this.http.get<Zone>(this.zoneURL);
  }

  updateZone(zone: Zone) {
    return this.http.put(`${this.zoneURL}`, zone, {responseType: 'text'});
  }
}
