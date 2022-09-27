import {Pipe, PipeTransform} from '@angular/core';

//name -> how called my own pipe
@Pipe({
  name: 'carFilter',
  // create impure pipe, that's why pure=false, but this method calls many times ()
  pure: false
})
export class CarFilterPipe implements PipeTransform {

  transform(carList: any[], searchCar: string, fieldName: string) {
    console.log('Filter method pipe started! ')
    if (carList.length === 0 || searchCar === '') {
      return carList;
    }
    return carList.filter(car => car.name.toLowerCase().indexOf(searchCar.toLowerCase()) !== -1);
    // return carList.filter(car => car[fieldName].toLowerCase().indexOf(searchCar.toLowerCase()) !== -1);
    // return carList.filter(car => car.name.toLowerCase() === searchCar.toLowerCase());
  }
}
