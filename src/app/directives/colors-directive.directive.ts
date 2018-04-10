import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorsDirective]'
})
export class ColorsDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow', "#007bff");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(color: string,textColor: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = textColor;
  }

}
