import {Component, ContentChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  carName = 'Ford';
  carYear = 2010;
  @Input() carItem: { name: string; year: number; } | undefined;
  @ContentChild('carHeading') carHeading : ElementRef | undefined;

  getName() {
    return this.carName
  }


  ngAfterViewInit() {
    console.log(this.carHeading)
  }
}
