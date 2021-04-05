import { Component, Input, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';

import { Loot } from 'src/app/models/loot.model';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-setup-qr-card',
  templateUrl: './setup-qr-card.component.html',
  styleUrls: ['./setup-qr-card.component.scss']
})
export class SetupQrCardComponent implements OnInit {

  @Input() loot: Loot = new Loot;

  constructor() { }

  ngOnInit(): void {

  }

}
