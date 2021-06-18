import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagePost } from 'src/app/models/message_post.model';
import { Message } from 'src/app/models/message.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageURL = `${environment.apiUrl}/message`;

  constructor(private http: HttpClient) { }

  getMessages(): Observable<any> {
    return this.http.get(this.messageURL);
  }

  postMessage(message: MessagePost) {
    return this.http.post(this.messageURL, message);
  }
}
