import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  REST_API: string = 'http://localhost:3080/news';
  constructor(private httpClient: HttpClient) { }

  getNews() {
    console.log("Appel du serveur gérant l'api"+this.httpClient.get(`${this.REST_API}`));
    return this.httpClient.get(`${this.REST_API}`);
  }
}
