import { CommonModule } from "@angular/common";
import { Component, Input, input } from "@angular/core";
import { LayoutColumnComponent } from "./column.component";

@Component({
    selector: 'layout-row',
    standalone: true,
    imports: [CommonModule, LayoutColumnComponent],
    template: `
    <div class="row">
    @for(col of row().columns; track col) {
        <ng-container>
            <layout-column [column]="col"></layout-column>
        </ng-container>
      }
      </div>
    `
  })
  export class LayoutRowComponent {
    row: any = input.required()
  }
  