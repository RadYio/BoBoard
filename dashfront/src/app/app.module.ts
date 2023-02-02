import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeteoComponent } from './components/meteo/meteo.component';
import { CouisineComponent } from './components/couisine/couisine.component';
import { Meteo2Component } from './components/meteo2/meteo2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    CouisineComponent,
    Meteo2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
