/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';

const bootstrap = () =>
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));

if (environment.production) {
  enableProdMode();
}

bootstrap();
