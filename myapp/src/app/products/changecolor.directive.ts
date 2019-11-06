import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appchangeColor]'
})

export class ChangeColorDirective {
    constructor( Element: ElementRef ) {
        Element.nativeElement.style.color = 'red';
    }
}
