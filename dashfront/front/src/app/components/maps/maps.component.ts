import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

let map: google.maps.Map, infoWindow: google.maps.InfoWindow;

const loader = new Loader({
  apiKey: "AIzaSyDLq3etbTq-P5doMe6Gon8V2l-zXAL-JVQ",
  version: "weekly",
  libraries: ["places"]
});

let mapOptions = {
  center: {
    lat: 44.078237339808716, 
    lng: 3.385298854957181
  },
  zoom: 35
};

function initMap(){
  // Promise
loader.load().then((google) => {
  map = new google.maps.Map(document.getElementById("map"), mapOptions); // Creer la map


  infoWindow = new google.maps.InfoWindow(); // Petite card pour afficher une erreur dans la map si la localisation pose problème

  const locationButton = document.createElement("button");

  locationButton.textContent = "Géolocaliser";
  locationButton.classList.add("custom-map-control-button");

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter()!);
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter()!);
    }
  });
  })
}

function handleLocationError(
  browserHasGeolocation: boolean,
  infoWindow: google.maps.InfoWindow,
  pos: google.maps.LatLng
) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}


declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
  ngOnInit(): void {
    initMap();
  }
}
