// import {Component} from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//
// }


// // Example built-in pipes in Angular
// import {Component} from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   template: `
//     <div class="col-xs-8 col-xs-offset-2">
//       <h2>{{ name }}</h2>
//       <!--       example apply pipe to name-->
//       <h2>{{ name | lowercase }}</h2>
//       <h2>{{ name | uppercase }}</h2>
//       <!--       example apply pipe to name substring name from 0 symbol to 7 symbol and uppercase-->
//       <h2>{{ name | slice: 0:7 | uppercase }}</h2>
//       <!--       example apply pipe to name substring name from 8 symbol to 12 symbol-->
//       <h2>{{ name | slice: 8:12 }}</h2>
//       <hr>
//
//       <h2>{{ piNumber }}</h2>
//       <h2>{{ piNumber | number }}</h2>
//       <!--       example apply pipe piNumber how many symbols show on the page before dot(.) and after  -->
//       <h2>{{ piNumber | number: '1.3-4'}}</h2>
//       <h2>{{ piNumber | number: '2.2-2'}}</h2>
//       <hr>
//
//       <h3>{{ money }}</h3>
//       <!--       example apply pipe number transform to money currency (default 'USD'))-->
//       <h3>{{ money | currency : 'USD' }}</h3>
//       <h3>{{ money | currency : 'EUR': false }}</h3>
//       <hr>
//
//       <!--       example apply pipe date show Date)-->
//       <h3>{{ date }}</h3>
//       <h3>{{ date | date }}</h3>
//       <h3>{{ date | date: 'fullDate' }}</h3>
//       <h3>{{ date | date: 'shortDate' }}</h3>
//       <h3>{{ date | date: 'shortTime' }}</h3>
//       <hr>
//
//       <!--       example apply pipe amount show double (show percent))-->
//       <h3>{{ amount }}</h3>
//       <h3>{{ amount | percent}}</h3>
//       <hr>
//
//       <!--       example apply pipe object show object (in view JSON))-->
//       <h3>{{ object }}</h3>
//       <h3>{{ object | json}}</h3>
//       <h3>
//         <pre>{{ object | json}}</pre>
//       </h3>
//     </div>
//
//   `
// })
// export class AppComponent {
//   name = 'Angular for myself!';
//   piNumber = Math.PI;
//   money = 350;
//   date = new Date();
//   amount = 0.45;
//   object = {
//     foo: 'bar',
//     bsz: 'qux',
//     nested: {
//       xyz: 3,
//       numbers: [1, 2, 3]
//     }
//   }
// }


// Create my own pipes
// import {Component} from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   template: `
//     <div class="col-xs-8 col-xs-offset-2">
//       <h2>{{ num }}</h2>
//       <!--      apply my own pipe ()-->
//       <h2>{{ num | appPow: 3 }}</h2>
//       <h2>{{ num | appPow: 6 }}</h2>
//       <h2>{{ num | appPow }}</h2>
//       <!--      apply my own pipe add string-->
//       <h2>{{ num | appPow: 2 : '=' }}</h2>
//     </div>
//   `
// })
// export class AppComponent {
//   num = 2;
// }


// Filter data via Pipe
// import {Component} from '@angular/core';
// import { Observable } from "rxjs";
//
// @Component({
//   selector: 'app-root',
//   template: `
//     <div class="col-xs-8 col-xs-offset-2">
//       <input type="text" class="form-control" [(ngModel)]="searchCar">
//       <h1>{{ time }}</h1>
//       <button class="btn btn-success" (click)="addCar()">Add new car</button>
//       <hr>
//       <ul class="list-group">
//         <!--         apply my own pipe to array cars and filter via field searchCar and show-->
//         <li class="list-group-item" *ngFor="let car of cars  | carFilter: searchCar: 'describe'; let i = index">
//           <b>{{ i + 1 + '.'}}</b> {{ car.name }} <i>{{ car.description }}</i>
//         </li>
//       </ul>
//     </div>
//   `
// })
// export class AppComponent {
//   searchCar = '';
//
//   cars = [
//     {name: 'Ford', description: 'text 1'},
//     {name: 'Mazda', description: 'text 2'},
//     {name: 'Bently', description: 'text 3'},
//     {name: 'BMW', description: 'text 4'},
//     {name: 'Mercedes', description: 'text 5'}
//   ]
//
//   // asyncTitle = new Observable<string>(observer =>{setInterval(() =>
//   //   observer.next("Async Title through 3 seconds"), 3000);
//   // });
//
//   addCar() {
//     this.cars.push({
//       name: 'new car',
//       description: 'call method addCar'
//     });
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { CarService  } from "./services/car.service";
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   //registration service in this class (1 way)
//   // providers: [CarService]
// })
// export class AppComponent implements OnInit {
//   cars = [];
//
//   constructor(private carService: CarService) {
//   }
//
//
//   ngOnInit(): void {
//     // @ts-ignore
//     this.cars = this.carService.cars;
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
