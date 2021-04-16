import { Component, AfterViewInit  } from '@angular/core';
import {Zone, Location} from '../../models/zone.model';
import {ZoneService} from '../../services/zone/zone.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-setup-zone',
  templateUrl: './setup-zone.component.html',
  styleUrls: ['./setup-zone.component.scss']
})
export class SetupZoneComponent implements AfterViewInit  {

  public polygon: Location[];
  private map: L.Map;

  constructor(private zoneService: ZoneService) {
    this.polygon = [];
  }

  ngAfterViewInit(): void {
    this.map = L.map('map', {
      center: [ 51.688714, 5.303229 ],
      zoom: 17
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    //this.zoneService.getZone().subscribe(zone => this.polygon = zone.polygon);
  }

  onClickSubmit(): void {
    const zone = new Zone();
    zone.polygon = this.polygon;

    this.zoneService.updateZone(zone).subscribe( () => console.log('Updated the zone'));
  }
}
