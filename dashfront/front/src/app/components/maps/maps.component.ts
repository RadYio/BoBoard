import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "AIzaSyBUnyVyvNnyU_7GoqJvZfMhw4rsBjZ0Fhc",
  version: "weekly",
  libraries: ["places"]
});

let mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

function initMap(lat, lng){
  mapOptions.center.lat=lat;
  mapOptions.center.lng=lng;

  // Promise
loader.load()
.then((google) => {
  new google.maps.Map(document.getElementById("map"), mapOptions);
})
.catch(e => {
  // do something
});
}


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

  ngOnInit(): void {
    initMap(40, 40);
  }
}
