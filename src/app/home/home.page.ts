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
    this.map = L.map('mapId').setView([-7.774605006706152, 110.37461151260392], 13);

    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
    });

    const cartoDBPositron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://carto.com/">CartoDB</a>'
    });

    const cartoDBDarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://carto.com/">CartoDB</a>'
    });

    const wikimedia = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a> contributors'
    });


    osm.addTo(this.map);


    this.marker = L.marker([-7.774605006706152, 110.37461151260392])
      .addTo(this.map)
      .bindPopup('Perpustakaan SV UGM')
      .openPopup();


    const baseMaps = {
      "OpenStreetMap": osm,
      "OpenTopoMap": openTopoMap,
      "CartoDB Positron": cartoDBPositron,
      "CartoDB Dark Matter": cartoDBDarkMatter,
      "Wikimedia Maps": wikimedia,
    };


    L.control.layers(baseMaps).addTo(this.map);
  }
}
