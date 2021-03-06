import { RouterConfig, provideRouter } from '@angular/router';

import { HomeComponent } from './imports/home/home.component';
import { LocationsList } from './imports/locations/locations-list.component';
import { LocationDetails } from './imports/locations/location-details.component';
import { LocationSelect } from './imports/locations/location-select.component';
import { DataGroupDetails } from './imports/data-groups/data-group-details.component';
import { DataInputView } from './imports/data-input/data-input-view.component';
import { RecordView } from './imports/record-view/record-view.component';
import { Testing } from './imports/data-input/testing'
import { BOMList } from './imports/bom/bom.component'

const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'add-data', component: LocationSelect },
    { path: 'add-data/:dataInputId', component: DataInputView },
    { path: 'configure', component: LocationsList },
    { path: 'configure/location/:locationId', component: LocationDetails },
    { path: 'configure/location/:locationId/data-group/:dataGroupId', component: DataGroupDetails },
    { path: 'view/:dataInputId', component: RecordView },
    { path: 'testing', component: Testing },
    { path: 'bom', component: BOMList }
    ];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];