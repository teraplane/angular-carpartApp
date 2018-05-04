import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { CarPartComponent } from './car-part/car-part.component';
import {CarPartService} from "./car-part/car-part.service";
import {AppRoutingModule} from "./app-routing.module";
import {AboutComponent} from "./about.component";
import {RacesComponent} from "./car-race/races.component";
import {RaceService} from "./car-race/race.service";
import {MyDatePipe} from "./shared/mydate.pipe";
import {TextDecorationDirective} from "./shared/text-decoration.directive";
import {SharedModule} from "./shared/shared.module";
import {CarPartModule} from "./car-part/car-part.module";
import {RacesModule} from "./car-race/races.module";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CarPartModule,
    RacesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
