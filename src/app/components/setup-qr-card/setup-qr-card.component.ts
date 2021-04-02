import { Component, Input, OnInit } from '@angular/core';

import { Loot } from 'src/app/models/loot.model'

@Component({
  selector: 'app-setup-qr-card',
  templateUrl: './setup-qr-card.component.html',
  styleUrls: ['./setup-qr-card.component.scss']
})
export class SetupQrCardComponent implements OnInit {

  @Input() loot: Loot;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
