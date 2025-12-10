import { Component, input } from '@angular/core';

@Component({
  selector: 'features-section',
  standalone: true,
  imports: [],
  template: `
    <ul>
    @for(f of features(); track f) {
        <li>{{ f }}</li>
    }
    </ul>
  `,
})
export class FeaturesSectionComponent {
   features = input(['Fast', 'Simple', 'Reliable']);
    
}
