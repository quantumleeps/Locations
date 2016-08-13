import { RouterConfig, provideRouter } from '@angular/router';

import { LocationsList } from './imports/locations/locations-list.component';
import { LocationDetails } from './imports/locations/location-details.component';
import { DataGroupDetails } from './imports/data-groups/data-group-details.component';

const routes: RouterConfig = [
    { path: '', component: LocationsList },
    { path: 'location/:locationId', component: LocationDetails },
    { path: 'location/:locationId/data-group/:dataGroupId', component: DataGroupDetails }

    ];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];