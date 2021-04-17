import { Component, OnInit, Input } from '@angular/core';
import { AccessCode } from 'src/app/models/accesscode.model'

@Component({
  selector: 'app-setup-accesscode-card',
  templateUrl: './setup-accesscode-card.component.html',
  styleUrls: ['./setup-accesscode-card.component.scss']
})
export class SetupAccesscodeCardComponent implements OnInit {

  @Input() accessCode: AccessCode = new AccessCode;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
