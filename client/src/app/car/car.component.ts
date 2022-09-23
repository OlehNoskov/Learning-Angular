import {Component, Input} from '@angular/core';

@Component({
  selector: '.app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  carName = 'Ford';
  carYear = 2010;
  @Input() carItem: { name: string; year: number; } | undefined;

  getName() {
    return this.carName
  }
}
