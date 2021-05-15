import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loot } from 'src/app/models/loot.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LootService {

  private lootURL = `${environment.apiUrl}/loot`;

  constructor(private http: HttpClient) { }

  getLoot(): Observable<any> {
    return this.http.get(this.lootURL);
  }

  postLoot(loot: Loot) {
    return this.http.post(`${this.lootURL}`, loot, {responseType: 'text'});
  }
}

