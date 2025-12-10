import { CommonModule } from "@angular/common";
import { Component, Input, input } from "@angular/core";
import { LayoutRegistryService } from "./layoout-registry.service";
import { SectionOutletDirective } from "./section-outlet.directive";
import { column } from "../../config/layout.config";

@Component({
    selector: 'layout-column',
    standalone: true,
    imports: [CommonModule, SectionOutletDirective],
    template: `
      <div class="col-{{ column().width }}">
        <ng-container
          [sectionOutlet]="registry.resolve(column().type)">
        </ng-container>
      </div>
    `
  })
  export class LayoutColumnComponent {
    column = input.required<column>();
  
    constructor(public registry: LayoutRegistryService) {}
  }
  