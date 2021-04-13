import { Component, OnInit } from '@angular/core';
import {Zone, Point} from '../../models/zone.model';
import {ZoneService} from '../../services/zone/zone.service';

@Component({
  selector: 'app-setup-zone',
  templateUrl: './setup-zone.component.html',
  styleUrls: ['./setup-zone.component.scss']
})
export class SetupZoneComponent implements OnInit {

  public polygon: Point[];

  constructor(private zoneService: ZoneService) {
    this.polygon = [];
  }

  ngOnInit(): void {
    this.zoneService.getZone().subscribe(zone => this.polygon = zone.polygon);
  }

  onClickSubmit(): void {
    const zone = new Zone();
    zone.polygon = this.polygon;

    this.zoneService.updateZone(zone).subscribe( () => console.log('Updated the zone'));
  }
}
