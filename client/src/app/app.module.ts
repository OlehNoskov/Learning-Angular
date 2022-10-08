import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { FormsModule } from "@angular/forms";
import { AddCarComponent } from './add-car/add-car.component';
import { BackgroundDirective } from './directives/backgroung.directive';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { PowPipe } from "./pipes/pow.pipe";
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { CarAddComponent } from './car-add/car-add.component';
import { CarService } from "./services/car.service";
import { ConsoleService } from "./services/console.service";
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    AddCarComponent,
    BackgroundDirective,
    MyDirectiveDirective,
    PowPipe,
    CarFilterPipe,
    CarAddComponent,
    CarComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  // registration services in this place, one instance to whole project (singleton)
  providers: [CarService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
