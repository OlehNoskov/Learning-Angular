import {Component} from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  canAddCar = false;
  addCarStatus = '';
  // inputText1 = 'default text';
  // inputText2 = '';
  carName = '';
  carStatus = false;

  constructor() {
  }

  addCar() {
    this.addCarStatus = 'Car was add!'
  }

  // данный метод возвращает строку из поля input
  // onKeyUp1(value: string) {
  //   console.log(event);
  //   // this.inputText = (<HTMLInputElement>event.target).value;
  //   this.inputText1 = value;
  // }

  // данный метод возвращает строку из поля input после нажатия кнопки Enter
  // onKeyUp2(event) {
  //   this.inputText2 = event.target.value;
  // }

  addNewCar() {
    this.carStatus = true;
  }
}
