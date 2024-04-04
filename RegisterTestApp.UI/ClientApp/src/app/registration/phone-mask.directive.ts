import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[name][appPhoneMask]',
})
export class PhoneMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event:any) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event:any) {
    this.onInputChange(event.target.value, true);
  }


  onInputChange(event:any, backspace:any) {
    let newVal = event.replace(/\D/g, '');
    if (backspace ) {
      newVal = newVal.substring(0, newVal.length-1);
    }
    if (newVal.length === 0) {
      newVal = '';

    } else {
      newVal = newVal.substring(0, 10);
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, '($1) $2-$3-$4');
    }
    this.ngControl.valueAccessor!.writeValue(newVal);
  }
}
