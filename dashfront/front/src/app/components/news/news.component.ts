import { HttpResponseBase } from '@angular/common/http';
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

  fetch("https://fesse.onrender.com/news")
  .then((response) => response.json())
    .then((response) => {
      for(let i = 0, j = 0; i < 26; i++){
          if(response.data[i].image != null) {
            this.news[j]=new News();
            this.news[j].titre = response.data[i].title;
            this.news[j].author = response.data[i].author;
            this.news[j].description = response.data[i].description;
            this.news[j].url = response.data[i].url;
            this.news[j].imageUrl = response.data[i].image;
            this.news[j].date = response.data[i].published_at;
            j++;
          }
        }
        document.getElementById("loading")!.style.display = "none";
    });
  }
}
