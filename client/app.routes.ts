import { RouterConfig, provideRouter } from '@angular/router';

import { LocationsList } from './imports/locations/locations-list.component';
import { LocationDetails } from './imports/locations/location-details.component';

const routes: RouterConfig = [
    { path: '', component: LocationsList },
    { path: 'location/:locationId', component: LocationDetails }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];