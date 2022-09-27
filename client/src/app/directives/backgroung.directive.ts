// File answering this directive
import {Directive, ElementRef, OnInit} from "@angular/core";

//specify via decorator (annotation) that this class is directive
@Directive({
  // search directive via attribute in html
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  // injection in this constructor private field (input element)
  constructor(private element: ElementRef) {

  }

  ngOnInit(): void {
    console.log(this.element);
    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
