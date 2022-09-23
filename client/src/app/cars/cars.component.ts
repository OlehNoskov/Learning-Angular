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
  arrayCars = ['Ford', 'BMW', 'AUDI'];
  items = [{id: 3, name: 'item 1'},{id: 4, name: 'item 2'},{id: 5, name: 'item 3'}]

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
    // добавляем в массиве один елемент
    this.arrayCars.push(this.carName)
    this.carName = '';
  }
}
