import { Component } from '@angular/core';
import { News } from './news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {
  news: News[] = [];

  constructor(){
    const options = {
      method: 'GET'
    };

    let apiKey = "null"; //8d510f151fea9c5e7b31f8fba58e4912

    fetch('http://api.mediastack.com/v1/news?access_key='+apiKey+'&countries=fr', options)
      .then(response => response.json())
      .then(response => {

        for(let i = 0; i < 10; i++){
          this.news[i]=new News();
            this.news[i].titre = response.data[i].title;
            this.news[i].author = response.data[i].author;
            this.news[i].description = response.data[i].description;
            this.news[i].url = response.data[i].url;
            this.news[i].imageUrl = response.data[i].image;
            this.news[i].date = response.data[i].published_at;
          }
        })
  }
}

new NewsComponent;
