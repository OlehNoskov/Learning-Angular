// import {Component, EventEmitter, Output} from '@angular/core';
//
// @Component({
//   selector: 'app-car-add',
//   templateUrl: './car-add.component.html',
//   styleUrls: ['./car-add.component.css']
// })
// export class CarAddComponent {
//   @Output() onCarAdd = new EventEmitter<string>();
//   carName = '';
//
//   addCar(){
//     this.onCarAdd.emit(this.carName);
//     this.carName = '';
//   }
// }


import {Component} from '@angular/core';
import {CarService} from "../services/car.service";

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
  //registration service in this class (1 way)
  // providers: [CarService]


})
export class CarAddComponent {
  carName = '';

  constructor(private carService: CarService) {
  }

  addCar() {
    this.carService.addCar(this.carName);
    this.carName = '';
  }
}

