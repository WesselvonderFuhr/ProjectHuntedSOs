import {AfterViewInit, Component} from '@angular/core';
import {Location, Point, Zone} from '../../models/zone.model';
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

  public showSaveConfirmation = false;
  public showUndoConfirmation = false;
  public showResetConfirmation = false;

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
    this.resetConfirmations();

    if (this.latlngs.length > 0){
      if (this.lPolygon == null){
        this.lPolygon = L.polygon(this.latlngs, {color: 'blue'}).addTo(this.map);
      } else {
        this.lPolygon.addLatLng(this.latlngs[this.latlngs.length - 1]);
      }
    }
  }

  onClickUndo(): void {
    this.resetConfirmations();

    if (this.lPolygon != null){
      this.latlngs = this.latlngs.filter(latlng => latlng !== this.latlngs[this.latlngs.length - 1]);
      this.lPolygon.setLatLngs(this.latlngs);

      this.showUndoConfirmation = true;
    }
  }

  onClickReset(): void {
    this.resetConfirmations();

    if (this.lPolygon != null){
      this.latlngs = [];
      this.lPolygon.setLatLngs(this.latlngs);

      this.showResetConfirmation = true;
    }
  }

  onClickSubmit(): void {
    this.resetConfirmations();

    const zone = new Zone();
    for (let i = 0; i < this.latlngs.length; i++){
      const location = new Location();
      location.latitude = this.latlngs[i].lat;
      location.longitude = this.latlngs[i].lng;
      const point = new Point();
      point.location = location;
      zone.playfield.push(point);
    }
    this.zoneService.updateZone(zone).subscribe( () => console.log('Updated the zone'));

    this.showSaveConfirmation = true;
  }

  resetConfirmations(): void {
    this.showSaveConfirmation = false;
    this.showUndoConfirmation = false;
    this.showResetConfirmation = false;
  }
}
