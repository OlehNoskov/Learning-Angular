// File answering this directive
import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

//specify via decorator (annotation) that this class is directive
@Directive({
  // search directive via attribute in html
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  // reading value from directive appBackground
  @Input('appBackground') hoverColor: string = 'red';
  @Input() defaultColor: string = 'transparent';

  // Determine concrete field directive and binding it
  @HostBinding('style.background-color') background: string | undefined;

  // injection in this constructor private field (input element)
  constructor(private element: ElementRef, private render: Renderer2) {

  }

  ngOnInit(): void {
    this.background = this.defaultColor;
  }

  // init object in this method
  // ngOnInit(): void {
  //   // this.element.nativeElement
  //   const {nativeElement} = this.element;
  //
  //   //Two ways change style element (render is better)
  //   this.render.setStyle(nativeElement, 'background-color', 'green');
  //   // this.element.nativeElement.style.backgroundColor = 'green';
  //   this.render.addClass(nativeElement, 'white-text');
  // }



  // listening events, mouseenter = title event
  // @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
  // }


    //first way
  // @HostListener('mouseenter') mouseEnter() {
  //   const {nativeElement} = this.element;
  //   this.render.setStyle(nativeElement, 'background-color', 'red');
  //   this.render.addClass(nativeElement, 'white-text');
  // }

  // @HostListener('mouseleave') mouseLeave() {
  //   const {nativeElement} = this.element;
  //   this.render.setStyle(nativeElement, 'background-color', 'transparent');
  //   this.render.addClass(nativeElement, 'white-text');\
  // }


  //second way
  // @HostListener('mouseenter') mouseEnter() {
  //   this.background = 'red';
  // }
  //
  // @HostListener('mouseleave') mouseLeave() {
  //   this.background = 'transparent';
  // }



  //third way
  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
  }
}
