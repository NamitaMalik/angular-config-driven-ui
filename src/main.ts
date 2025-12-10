import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { WelcomeSectionComponent } from './libs/welcome/welcome.component';
import { BannerSectionComponent } from './libs/banner/banner.component';
import { FeaturesSectionComponent } from './libs/features/feature.component';
import { HomePage } from './libs/home-page/home-page.component';
import { LayoutRegistryService } from './libs/layout-renderer/layoout-registry.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePage],
  template: `
    <home-page>
  `,
})
export class App {
  name = 'Angular';
  constructor(private registry: LayoutRegistryService) {
    registry.register('welcome', WelcomeSectionComponent);
    registry.register('banner', BannerSectionComponent);
    registry.register('features', FeaturesSectionComponent);
  }
}

bootstrapApplication(App);
