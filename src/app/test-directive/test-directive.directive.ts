import { Directive } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  defaultColor: string = ''

  constructor() { }

}
