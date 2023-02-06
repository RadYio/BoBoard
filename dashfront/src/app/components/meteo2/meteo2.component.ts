import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'meteo2',
  templateUrl: './meteo2.component.html',
  styleUrls: ['./meteo2.component.css']
})
export class Meteo2Component implements OnInit{
  url: string;
  bgUrl: string;

    constructor(){
      this.url = "";
      this.bgUrl = "";
    };

    ngOnInit(): void {
      let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
      let lat = "lat=48.007751&";
      let lon = "lon=0.198520&";
      let apiOptions = "units=metric&exclude=minutely,alerts&";
      let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
      let file = queryUrl + lat + lon + apiOptions + apiKey;

      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          //Pour le bg
          let main = data.current.weather[0].main;
          
          // Icons
          let iconBaseUrl = "http://openweathermap.org/img/wn/";
          let iconFormat = ".png";
          // Today
          let iconCodeToday = data.current.weather[0].icon;
          this.url = iconBaseUrl + iconCodeToday + iconFormat;

          
          // Backgrounds
          const bgBaseUrl = "https://mdbgo.io/ascensus/mdb-advanced/img/";
          const bgFormat = ".gif";
          switch (main) {
            case "Snow":
            case "Clouds":
            case "Fog":
            case "Rain":
            case "Clear":
            case "Thunderstorm":
              this.bgUrl = main.toLowerCase();
            break;
            default:
              this.bgUrl = "clear";
            break;
            }
            this.bgUrl = bgBaseUrl + this.bgUrl + bgFormat;
        });
    }
}