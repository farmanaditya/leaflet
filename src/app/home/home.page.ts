import { Component } from '@angular/core';
import * as L from 'leaflet';

// Load the marker icon manually
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/icon/marker-icon-2x.png',
  iconUrl: 'assets/icon/marker-icon.png',
  shadowUrl: 'assets/icon/marker-shadow.png',
});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;
  marker!: L.Marker;

  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([35.76943, -580081], 13);

    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    osm.addTo(this.map);

    this.marker = L.marker([35.76943, -580081])
      .addTo(this.map)
      .bindPopup('This is a popup')
      .openPopup();

    const baseMaps = {
      "OpenStreetMap": osm,
    };

    L.control.layers(baseMaps).addTo(this.map);
  }
}
