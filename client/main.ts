// import { bootstrap } from 'angular2-meteor-auto-bootstrap';
// import { disableDeprecatedForms, provideForms } from '@angular/forms';
 
// import { AppComponent } from './app.component';
// import { APP_ROUTER_PROVIDERS } from './app.routes'

// bootstrap(AppComponent, [
//     disableDeprecatedForms(),
//     provideForms(),
//     APP_ROUTER_PROVIDERS
// ]);

import 'angular2-meteor-polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './imports/app/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);