import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jail } from 'src/app/models/jail.model';

@Injectable({
  providedIn: 'root'
})
export class JailService {

  private jailURL = 'http://127.0.0.1:3000/jail';

  constructor(private http: HttpClient) { }

  getJail(): Observable<any> {
    return this.http.get(this.jailURL);
  }

  updateJail(jail: Jail) {
    return this.http.put(`${this.jailURL}/60630751e2a3b624586ed575`, jail, {responseType: 'text'});
  }
}

