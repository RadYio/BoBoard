import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})


export class MeteoComponent implements OnInit{
  
  iconUrl: string;
  bgUrl: string;
  description: string;
  pressure: string;
  humidity: string;
  temperature: string;

  nextHours: {
    temp: string;
    icon: string;
    time: string;
  }[];

  TodayToNext2Days: {
    temp: string;
    icon: string;
  }[];

    constructor(){
      this.iconUrl = "url not defined";
      this.bgUrl = "url not defined";
      this.description = "description not defined"
      this.pressure = "pressure not defined";
      this.humidity = "humidity not defined";
      this.temperature = "temperature not defined";
      this.nextHours = [];
      
      this.TodayToNext2Days = [];
      //Init TodayToNext2Days with 3 empty elements to avoid the error "Cannot read property 'icon' of undefined"
      this.TodayToNext2Days.push({temp: "99°C", icon: "url not defined"});
      this.TodayToNext2Days.push({temp: "99°C", icon: "url not defined"});
      this.TodayToNext2Days.push({temp: "99°C", icon: "url not defined"});
    };

    ngOnInit(): void {
      const queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
      const lat = "lat=48.007751&";
      const lon = "lon=0.198520&";
      const apiOptions = "units=metric&exclude=minutely,alerts&";
      const apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e&"; //thanks tonton
      const lang = "lang=fr"; //Choice language
      const requestFull = queryUrl + lat + lon + apiOptions + apiKey + lang;

      fetch(requestFull)
        .then((response) => response.json())

        .then((data) => {

          //Background
          let currentWeather = data.current.weather[0].main;
          console.log("currentWeather: " + currentWeather + "");
          
          //We need to change the name of the weather to match the name of the background
          switch(data.current.weather[0].main.toLowerCase()){
            case "drizzle":
              currentWeather = "rain";
              break;
          }
          



          
          const bgBaseUrl = "https://mdbgo.io/ascensus/mdb-advanced/img/";
          const bgFormat = ".gif";
          this.bgUrl = bgBaseUrl + currentWeather.toLowerCase() + bgFormat;
          
          //Icons
          const iconBaseUrl = "https://openweathermap.org/img/wn/";
          const iconFormat = ".png";

          //Hourly
          const hourly = new Date().getHours();
          const nbHour = 6;
          for(let i = 0; i < nbHour; i++){
            
            const icon = iconBaseUrl + data.hourly[i].weather[0].icon + iconFormat;
            const temp = data.hourly[i].temp + "°C";
            const time = (hourly + i) + "h";
            this.nextHours.push({temp, icon, time});

          }

          //--- Today ---

          //Today -- Description
          this.description = data.current.weather[0].description;

          //Today -- Pressure
          this.pressure = data.current.pressure + " hPa";

          //Today -- Humidity
          this.humidity = data.current.humidity + "%";

          //Today -- Icon
          this.TodayToNext2Days[0].icon = iconBaseUrl + data.current.weather[0].icon + iconFormat;
          this.TodayToNext2Days[0].temp = Math.round(data.current.temp).toString() + "°C";
          //this.TodayToNext2Days.push({temp: Math.round(data.current.temp).toString() + "°C", icon: iconBaseUrl + data.current.weather[0].icon + iconFormat});

          //Get the next 'nbDays' days
          const nbDays = 2;
          for(let i = 0; i < nbDays; i++){
              const icon = iconBaseUrl + data.daily[i].weather[0].icon + iconFormat;
              const temp = Math.round(data.daily[i].temp.day).toString() + "°C";
              this.TodayToNext2Days[i+1].icon = icon;
              this.TodayToNext2Days[i+1].temp = temp;
            }
        });
    }
}