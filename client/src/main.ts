import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Angular 22 defaults to zoneless + OnPush. This app was written for zone.js with always-check
// components, so main.ts keeps zone change detection and every component sets ChangeDetectionStrategy.Eager.
platformBrowserDynamic().bootstrapModule(AppModule, { applicationProviders: [provideZoneChangeDetection()] })
  .catch(err => console.error(err));
