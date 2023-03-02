import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiCuisineService {

  REST_API: string = 'http://localhost:3080/Cuisine';

  constructor(private httpClient: HttpClient) { }

  // Get des recettes
  GetCuisine() {
    console.log("Appel du serveur gérant l'api"+this.httpClient.get(`${this.REST_API}`));
    return this.httpClient.get(`${this.REST_API}`);
  }
}
