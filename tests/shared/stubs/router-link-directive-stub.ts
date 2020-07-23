import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[routerLink]',
})
// tslint:disable-next-line:directive-class-suffix
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigateTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigateTo = this.linkParams;
  }
}
