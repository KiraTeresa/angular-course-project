import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen
  // }


  // place the listener on the document, to make the dropdown close when another dropdown was opened or user clicked somewhere else
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {
  }
}
