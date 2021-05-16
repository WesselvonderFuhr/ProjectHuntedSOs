import {AfterViewInit, Component} from '@angular/core';
import {Location, Polygon, Zone} from '../../models/zone.model';
import {ZoneService} from '../../services/zone/zone.service';
import * as L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';

@Component({
  selector: 'app-setup-zone',
  templateUrl: './setup-zone.component.html',
  styleUrls: ['./setup-zone.component.scss']
})
export class SetupZoneComponent implements AfterViewInit  {

  private map: L.Map;

  constructor(private zoneService: ZoneService) { }

  ngAfterViewInit(): void {
    //this.zoneService.getZone().subscribe(zone => this.polygon = zone.polygon);

    this.map = L.map('map', {
      center: [ 51.688714, 5.303229 ],
      zoom: 17
    });

    this.map.pm.setLang('nl');

    this.map.pm.addControls({
      position: 'bottomleft',
      drawCircle: false,
      drawMarker: false,
      drawCircleMarker: false,
      drawPolyline: false,
      drawRectangle: false
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  onClickSubmit(): void {
    const layers = this.map.pm.getGeomanLayers(false) as L.Layer[];

    const polygons: any[] = [];

    for (let i = 0; i < layers.length; i++){
      const layer = layers[i] as any;
      polygons.push(layer._latlngs);
    }

    this.zoneService.updateZone(JSON.stringify(polygons)).subscribe( () => console.log('Updated the zone'));
  }
}
