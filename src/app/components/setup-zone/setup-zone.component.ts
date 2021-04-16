import {AfterViewInit, Component} from '@angular/core';
import {Location, Zone} from '../../models/zone.model';
import {ZoneService} from '../../services/zone/zone.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-setup-zone',
  templateUrl: './setup-zone.component.html',
  styleUrls: ['./setup-zone.component.scss']
})
export class SetupZoneComponent implements AfterViewInit  {

  private latlngs: L.LatLng[];
  private lPolygon: L.Polygon;
  private map: L.Map;

  constructor(private zoneService: ZoneService) {
    this.latlngs = [];
  }

  ngAfterViewInit(): void {
    //this.zoneService.getZone().subscribe(zone => this.polygon = zone.polygon);

    this.map = L.map('map', {
      center: [ 51.688714, 5.303229 ],
      zoom: 17
    });

    this.map.on('click', (e: { latlng: L.LatLng; }) => {
      this.latlngs.push(e.latlng);
      this.onAddPoint();
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  onAddPoint(): void {
    if (this.latlngs.length > 0){
      if (this.lPolygon == null){
        this.lPolygon = L.polygon(this.latlngs, {color: 'blue'}).addTo(this.map);
      } else {
        this.lPolygon.addLatLng(this.latlngs[this.latlngs.length - 1]);
      }
    }
  }

  onClickUndo(): void {
    if (this.lPolygon != null){
      this.latlngs = this.latlngs.filter(latlng => latlng !== this.latlngs[this.latlngs.length - 1]);
      this.lPolygon.setLatLngs(this.latlngs);
    }
  }

  onClickReset(): void {
    if (this.lPolygon != null){
      this.latlngs = [];
      this.lPolygon.setLatLngs(this.latlngs);
    }
  }

  onClickSubmit(): void {
    const zone = new Zone();
    for (let i = 0; i < this.latlngs.length; i++){
      const location = new Location();
      location.x = this.latlngs[i].lat;
      location.y = this.latlngs[i].lng;
      zone.polygon.push(location);
    }
    console.log(zone);
    //this.zoneService.updateZone(zone).subscribe( () => console.log('Updated the zone'));
  }
}
