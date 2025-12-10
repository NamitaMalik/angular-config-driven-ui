import { Component } from '@angular/core';
import { SectionOutletDirective } from '../layout-renderer/section-outlet.directive';
import { HOME_LAYOUT } from '../../config/layout.config';
import { LayoutRegistryService } from '../layout-renderer/layoout-registry.service';
import { LayoutRowComponent } from '../layout-renderer/row.component';

@Component({
  standalone: true,
  selector: 'home-page',
  imports: [SectionOutletDirective, LayoutRowComponent],
  templateUrl: './home-page.component.html',
})
export class HomePage {
  layout = HOME_LAYOUT; // this is a signal

  constructor(public registry: LayoutRegistryService) {}
}
