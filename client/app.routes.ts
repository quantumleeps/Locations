import { RouterConfig, provideRouter } from '@angular/router';

import { HomeComponent } from './imports/home/home.component';
import { LocationsList } from './imports/locations/locations-list.component';
import { LocationDetails } from './imports/locations/location-details.component';
import { DataGroupDetails } from './imports/data-groups/data-group-details.component';

const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'configure', component: LocationsList },
    { path: 'configure/location/:locationId', component: LocationDetails },
    { path: 'configure/location/:locationId/data-group/:dataGroupId', component: DataGroupDetails }

    ];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];