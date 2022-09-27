import {Pipe, PipeTransform} from '@angular/core';

//name -> how called my own pipe
@Pipe({
  name: 'appPow'
})

export class PowPipe implements PipeTransform {
  // it's standard method with such parameters
  // transform(value: any, ...args: any[]): any {
  //
  // }

  transform(value: any, powNumber: number = 1, str: string = '') {
    return str + Math.pow(value, powNumber);
  }
}
