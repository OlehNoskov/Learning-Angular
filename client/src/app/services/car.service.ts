import {ConsoleService} from "./console.service";
import {Injectable} from "@angular/core";

//Via this annotation (decorator) injecting service into service, remember registration it in app.module.ts - providers
@Injectable()
export class CarService {

  constructor(private consoleService: ConsoleService) {
  }

  cars = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: true
    },
    {
      name: 'Mercedes',
      isSold: false
    }
  ];

  addCar(name: string) {
    this.cars.push({name, isSold: false});
    this.consoleService.log(`Car ${name} was add!`)
  }
}
