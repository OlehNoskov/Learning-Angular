import {Component} from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  addCarStatus = '';
  cars: [{ year: number; name: string }, { year: number; name: string }, { year: number; name: string }] = [
    {
      name: 'Ford',
      year: 2017
    }, {
      name: 'BMW',
      year: 2020
    }, {
      name: 'AUDI',
      year: 2021
    }];

  constructor() {
  }

  updateCarList(car: { name: string, year: number }) {
    this.cars.push(car);
  }


  // carStatus = false;
  // canAddCar = false;
  // inputText1 = 'default text';
  // inputText2 = '';
  // arrayCars = ['FORD', 'BMW', 'AUDI', 'VAZ', 'OPEL', 'MAZDA'];
  // items = [{id: 3, name: 'item 1'},{id: 4, name: 'item 2'},{id: 5, name: 'item 3'}]
  // dates = [
  //   new Date(2015,3,4).toDateString(),
  //   new Date(2010,4,26).toDateString(),
  //   new Date(2000,5,20).toDateString(),
  //   new Date(2002,6,10).toDateString()
  //
  // ];


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

  // addNewCar() {
  //   this.carStatus = true;
  //   // добавляем в массиве один елемент
  //   this.arrayCars.push(this.carName)
  //   this.carName = '';
  // }

  // возвращает больше длина строки 4 символов
  // setBigCarText(car : string){
  //   return car.length > 4
  // }


}
