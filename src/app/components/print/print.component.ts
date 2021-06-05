import { Component, OnInit } from '@angular/core';
import { Loot } from 'src/app/models/loot.model';
import { LootService } from 'src/app/services/loot/loot.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  public lootArray: Loot[];

  constructor(private lootService: LootService) { }

  ngOnInit(): void {
    this.lootService.getLoot().subscribe((res) => {
      this.lootArray = res;
    });
  }

  printPage() {
    window.print();
  }

}
