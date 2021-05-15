import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessCode } from 'src/app/models/accesscode.model';
import { AccessCodePost} from 'src/app/models/accesscode_post.model'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AccessCodeService {

  private accessCodeURL = `${environment.apiUrl}/accesscode`;

  constructor(private http: HttpClient) { }

  getAllCodes(): Observable<any> {
    return this.http.get(this.accessCodeURL);
  }

  generateCodes(accessCodePost: AccessCodePost){
    return this.http.post(`${this.accessCodeURL}`, accessCodePost);
  }
}
