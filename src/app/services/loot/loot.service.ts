import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loot } from 'src/app/models/loot.model';

@Injectable({
  providedIn: 'root'
})
export class LootService {

  private lootURL = 'http://127.0.0.1:3000/loot';

  constructor(private http: HttpClient) { }

  getLoot(): Observable<any> {
    return this.http.get(this.lootURL);
  }

  postLoot(loot: Loot) {
    return this.http.post(`${this.lootURL}`, loot, {responseType: 'text'});
  }
}

