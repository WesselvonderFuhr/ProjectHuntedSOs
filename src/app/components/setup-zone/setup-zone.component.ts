import {AfterViewInit, Component} from '@angular/core';
import {Location, Playfield} from '../../models/zone.model';
import {ZoneService} from '../../services/zone/zone.service';
import * as L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import {LatLng, Layer} from "leaflet";

@Component({
  selector: 'app-setup-zone',
  templateUrl: './setup-zone.component.html',
  styleUrls: ['./setup-zone.component.scss']
})
export class SetupZoneComponent implements AfterViewInit  {

  private map: L.Map;
  public showSaveConfirmation = false;

  constructor(private zoneService: ZoneService) { }

  ngAfterViewInit(): void {
    this.map = L.map('map', {
      center: [ 52.155, 5.295 ],
      zoom: 7
    });

    this.zoneService.getZone().subscribe( (zone: Playfield) => {
      if (zone.playfield[0][0][0].latitude !== undefined){
        const playfields: LatLng[][][] = [];
        for (let i = 0; i < zone.playfield.length; i++){
          const polygons: LatLng[][] = [];
          playfields[i] = polygons;
          for (let j = 0; j < zone.playfield[i].length; j++){
            const latLngs: LatLng[] = [];
            polygons[j] = latLngs;
            for (let k = 0; k < zone.playfield[i][j].length; k++){
              latLngs.push(new LatLng(zone.playfield[i][j][k].latitude, zone.playfield[i][j][k].longitude));
            }
          }
        }
        const polygon = L.polygon(playfields).addTo(this.map);
        this.map.fitBounds(polygon.getBounds());
      } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const coords = position.coords;
          // Offset to center in view.
          const latLong = new LatLng(coords.latitude, coords.longitude);
          this.map.zoomIn(9);
          this.map.panTo(latLong);
        });
      }
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
      maxZoom: 19,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  onClickSubmit(): void {
    this.resetConfirmations();
    const layers = this.map.pm.getGeomanLayers(false) as L.Layer[];

    const polygons: any[] = [];

    for (let i = 0; i < layers.length; i++){
      const layer = layers[i] as any;
      polygons.push(layer._latlngs);
    }

    this.zoneService.updateZone(JSON.stringify(polygons)).subscribe( () => console.log('Updated the zone'));
    this.showSaveConfirmation = true;
  }

  resetConfirmations(): void {
    this.showSaveConfirmation = false;
  }
}
