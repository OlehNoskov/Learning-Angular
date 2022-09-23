import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  carName = '';
  carYear = 2015;
  // Экземпляр класса EventEmitter
  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();

  addCar() {
    this.carEmitter.emit({
      name: this.carName,
      year: this.carYear
    })
    this.carName = '';
    this.carYear = 2015;
  }

  constructor() {

  }
}
