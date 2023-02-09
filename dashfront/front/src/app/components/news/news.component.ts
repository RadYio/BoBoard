import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {
  titre: String = "ta mere";

  constructor(){
    const options = {
      method: 'GET'
    };

    fetch('http://api.mediastack.com/v1/news?access_key=&countries=fr', options) //8d510f151fea9c5e7b31f8fba58e4912
      .then(response => response.json())
      
      .then(response => console.log(response))
      .catch(err => console.error(err));

  }
}

new NewsComponent;