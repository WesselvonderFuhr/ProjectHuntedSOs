import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-game-message-card',
  templateUrl: './game-message-card.component.html',
  styleUrls: ['./game-message-card.component.scss']
})
export class GameMessageCardComponent implements OnInit {

  @Input() message: Message = new Message;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.message.date = this.datePipe.transform(this.message.date_time, 'shortTime');
  }
}
