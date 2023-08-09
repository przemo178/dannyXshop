import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseIn() {
    this.renderer.addClass(this.element.nativeElement, 'hightlight-product');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.removeClass(this.element.nativeElement, 'hightlight-product');
  }
}
