import { Directive, Input, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sectionOutlet]',
  standalone: true,
})
export class SectionOutletDirective {
  @Input() set sectionOutlet(component: Type<any> | undefined) {
    this.vcr.clear();
    if (component) {
      this.vcr.createComponent(component);
    }
  }

  constructor(private vcr: ViewContainerRef) {}
}
