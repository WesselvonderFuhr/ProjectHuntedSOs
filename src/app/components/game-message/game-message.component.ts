import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { MessagePost } from 'src/app/models/message_post.model';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-game-message',
  templateUrl: './game-message.component.html',
  styleUrls: ['./game-message.component.scss']
})
export class GameMessageComponent implements OnInit {

  public messageArray: Message[];
  public messagePost: MessagePost;

  public showSaveConfirmation = false;

  constructor(private messageService: MessageService) {
    this.messagePost = new MessagePost();
  }

  ngOnInit(): void {
    this.messageService.getMessages().subscribe((res) => {
      this.messageArray = res;
    })
  }

  onClickSubmit(): void {
    this.messageService.postMessage(this.messagePost).subscribe((res) => {
      console.log('Added ' + this.messagePost.message + ' to messages');
      this.ngOnInit();
      this.showSaveConfirmation = true;
    })
  }

  resetConfirmations(): void {
    this.showSaveConfirmation = false;
  }

}
