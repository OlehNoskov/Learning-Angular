// import {
//   AfterContentChecked,
//   AfterContentInit, AfterViewChecked, AfterViewInit,
//   Component,
//   ContentChild,
//   DoCheck,
//   ElementRef,
//   Input,
//   OnChanges, OnDestroy,
//   OnInit,
//   SimpleChanges
// } from '@angular/core';
//
// @Component({
//   selector: 'app-car',
//   templateUrl: './car.component.html',
//   styleUrls: ['./car.component.css']
// })
// export class CarComponent implements
//   OnInit,
//   OnChanges,
//   DoCheck,
//   AfterContentInit,
//   AfterContentChecked,
//   AfterViewInit,
//   AfterViewChecked,
//   OnDestroy
// {
//   // carName = 'Ford';
//   // carYear = 2010;
//   @Input() carItem: { name: string; year: number; } | undefined;
//   @Input() name: string | undefined;
//   @ContentChild('carHeading') carHeading: ElementRef | undefined;
//
//   // getName() {
//   //   return this.carName
//   // }
//   //
//   //
//   // ngAfterViewInit() {
//   //   console.log(this.carHeading)
//   // }
//
//   // Life cycle component
//
//   // call first
//   constructor() {
//     console.log('call constructor')
//   }
//
//   // call second
//   ngOnInit(): void {
//     console.log('call ngOnInit')
//   }
//
//   // call third (tracing state object)
//   ngOnChanges(changes: SimpleChanges): void {
//     console.log('call ngOnChanges', changes)
//   }
//
//   // call fourth (do check)
//   ngDoCheck(): void {
//     console.log('call ngDoCheck')
//   }
//
//   // call fifth (init new data)
//   ngAfterContentInit(): void {
//     console.log('call ngAfterContentInit')
//   }
//
//   // call sixth (check content for new updates)
//   ngAfterContentChecked(): void {
//     console.log('call ngAfterContentChecked')
//   }
//
//   // call seventh (call this method show that init already was initialization)
//   ngAfterViewInit(): void {
//     console.log('call ngAfterViewInit')
//   }
//
//   // call eighth (check current view)
//   ngAfterViewChecked(): void {
//     console.log('call ngAfterViewChecked')
//   }
//
//   // kill component
//   ngOnDestroy(): void {
//     console.log('call ngOnDestroy')
//   }
// }


import { Component, Input } from '@angular/core';
import { ConsoleService } from "../services/console.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  //registration service in this class
  // providers: [ConsoleService]

})
export class CarComponent {
  // @ts-ignore
  @Input() car;

  // inject object ConsoleService
  constructor(private consoleService: ConsoleService) {}

  getClass() {
    // @ts-ignore
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    }
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy';
    this.consoleService.log(`${this.car.name} status = ${type}`);
  }
}

// import { Component, Input } from '@angular/core';
//
// @Component({
//   selector: 'app-car',
//   templateUrl: './car.component.html',
//   styleUrls: ['./car.component.css']
// })
// export class CarComponent {
//   // @ts-ignore
//   @Input() car;
//
//   getClass() {
//     // @ts-ignore
//     return {
//       'list-group-item-success': !this.car.isSold,
//       'list-group-item-danger': this.car.isSold,
//       'list-group-item': true
//     }
//   }
//
//   onAction(type: string) {
//     this.car.isSold = type === 'buy';
//   }
// }
