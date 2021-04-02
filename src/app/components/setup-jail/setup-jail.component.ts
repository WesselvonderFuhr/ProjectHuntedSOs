import { Component, OnInit } from '@angular/core';
import { from, Subscriber, VirtualTimeScheduler } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { JailService } from 'src/app/services/jail/jail.service';
import { Jail } from 'src/app/models/jail.model';
import { Location } from 'src/app/models/jail.model';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-setup-jail',
  templateUrl: './setup-jail.component.html',
  styleUrls: ['./setup-jail.component.scss']
})
export class SetupJailComponent implements OnInit {

  public location: Location;

  constructor(private jailService: JailService, private formBuilder: FormBuilder) {
    this.location = new Location();
  }

  ngOnInit(): void {

  }

  onClickSubmit(): void {
    const jail = new Jail();
    jail.location = this.location;

    this.jailService.updateJail(jail).subscribe( (res) => {
      console.log('Updated the jail');
   });
  }
}
