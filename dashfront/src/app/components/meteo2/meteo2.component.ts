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
          switch (main) {
            case "Snow":
            this.bgUrl = "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
            break;
            case "Clouds":
            document.getElementById("wrapper-bg").style.backgroundImage =
            "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
            break;
            case "Fog":
            document.getElementById("wrapper-bg").style.backgroundImage =
            "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
            break;
            case "Rain":
            document.getElementById("wrapper-bg").style.backgroundImage =
            "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
            break;
            case "Clear":
            document.getElementById("wrapper-bg").style.backgroundImage =
            "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
            break;
            case "Thunderstorm":
            document.getElementById("wrapper-bg").style.backgroundImage =
            "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
            break;
            default:
            document.getElementById("wrapper-bg").style.backgroundImage =
            "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
            break;
            }
          alert(this.url);
        });
    }
}