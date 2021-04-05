import { Component, OnInit } from '@angular/core';
import { LootService } from 'src/app/services/loot/loot.service';
import { Loot } from 'src/app/models/loot.model';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-setup-qr',
  templateUrl: './setup-qr.component.html',
  styleUrls: ['./setup-qr.component.scss']
})
export class SetupQrComponent implements OnInit {

  public lootArray: Loot[];
  public loot: Loot;

  constructor(private lootService: LootService) {
    this.loot = new Loot();
  }

  ngOnInit(): void {
    this.lootService.getLoot().subscribe((res) => {
      this.lootArray = res;
    });
  }

  onClickSubmit(): void {
    this.lootService.postLoot(this.loot).subscribe((res) => {
      console.log('Added ' + this.loot.name + ' to loot');
      this.ngOnInit();
    });
  }

}
