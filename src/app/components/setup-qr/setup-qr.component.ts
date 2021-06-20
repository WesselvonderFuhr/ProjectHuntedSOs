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
  public showSaveConfirmation = false;

  public toolTipTextAdd = "Voer de naam van de buit in en druk op Buit Opslaan om de QR code aan te maken";
  public toolTipTextOverview = "Deze QR codes worden door de boeven gescand om gestolen te worden"

  constructor(private lootService: LootService) {
    this.loot = new Loot();
  }

  ngOnInit(): void {
    this.lootService.getLoot().subscribe((res) => {
      this.lootArray = res;
    });
  }

  onClickSubmit(): void {
    this.resetConfirmations();

    this.lootService.postLoot(this.loot).subscribe((res) => {
      this.ngOnInit();
      this.showSaveConfirmation = true;
    });
  }

  resetConfirmations(): void {
    this.showSaveConfirmation = false;
  }

}
