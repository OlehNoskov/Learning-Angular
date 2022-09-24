import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  // carName = '';
  // carYear = 2015;

  // Экземпляр класса EventEmitter
  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();

  // Декоратор
  @ViewChild('carYearInput') carYearInput: ElementRef | undefined;

  addCar(carNameElement: HTMLInputElement) {

    //получение данных из шаблона
    console.log(carNameElement.value)

    this.carEmitter.emit({
      name: carNameElement.value,
      year: this.carYearInput?.nativeElement.value
    })
    carNameElement.value = '';
    // @ts-ignore
    this.carYearInput.nativeElement.value = 2015;
  }

  constructor() {

  }
}
