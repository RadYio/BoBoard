import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from './news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit  {
  news: News[] = [];

  constructor(private newsService: NewsService){};

  ngOnInit(): void {

    const options = {
      method: 'GET'
    };

      fetch("http://localhost:3080/news")
      .then((response) => response.json())
        .then((response) => {
          for(let i = 0; i < 10; i++){
              this.news[i]=new News();
              this.news[i].titre = response.data[i].title;
              this.news[i].author = response.data[i].author;
              this.news[i].description = response.data[i].description;
              this.news[i].url = response.data[i].url;
              this.news[i].imageUrl = response.data[i].image;
              this.news[i].date = response.data[i].published_at;
            }
        });


   /* fetch('http://api.mediastack.com/v1/news?access_key='+apiKey+'&countries=fr', options)
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
        });*/
      }
}
