import { RouterConfig, provideRouter } from '@angular/router';

import { LocationsList } from './imports/locations/locations-list.component';

const routes: RouterConfig = [
    { path: '', component: LocationsList }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];