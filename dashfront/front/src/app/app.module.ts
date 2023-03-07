import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeteoComponent } from './components/meteo/meteo.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { NewsComponent } from './components/news/news.component';

import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './components/person/person.component';
import { MapsComponent } from './components/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    CuisineComponent,
    NewsComponent,
    PersonComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
