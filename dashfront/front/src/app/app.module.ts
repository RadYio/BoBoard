import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeteoComponent } from './components/meteo/meteo.component';
import { CouisineComponent } from './components/couisine/couisine.component';
import { NewsComponent } from './components/news/news.component';

import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    CouisineComponent,
    NewsComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
