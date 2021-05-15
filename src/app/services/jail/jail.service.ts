import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jail } from 'src/app/models/jail.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class JailService {

  private jailURL = `${environment.apiUrl}/jail`;

  constructor(private http: HttpClient) { }

  getJail(): Observable<any> {
    return this.http.get(this.jailURL);
  }

  updateJail(jail: Jail) {
    return this.http.put(`${this.jailURL}`, jail, {responseType: 'text'});
  }
}

