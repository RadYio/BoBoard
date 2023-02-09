import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiPersonService {

  REST_API: string = 'http://localhost:3080/Person';

  constructor(private httpClient: HttpClient) { }

  // Get all persons
  GetPersons() {
    console.log(this.httpClient.get(`${this.REST_API}`));
    return this.httpClient.get(`${this.REST_API}`);
  }
}
