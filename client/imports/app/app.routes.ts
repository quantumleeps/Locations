import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { HomeComponent } from './imports/home/home.component';
import { LocationsList } from './locations/locations-list.component';
import { LocationDetails } from './locations/location-details.component';
// import { LocationSelect } from './imports/locations/location-select.component';
// import { DataGroupDetails } from './imports/data-groups/data-group-details.component';
// import { DataInputView } from './imports/data-input/data-input-view.component';
// import { RecordView } from './imports/record-view/record-view.component';


const routes: Route = [
    { path: '', component: HomeComponent },
    // { path: 'add-data', component: LocationSelect },
    // { path: 'add-data/:dataInputId', component: DataInputView },
    { path: 'configure', component: LocationsList },
    { path: 'configure/location/:locationId', component: LocationDetails },
    // { path: 'configure/location/:locationId/data-group/:dataGroupId', component: DataGroupDetails },
    // { path: 'view/:dataInputId', component: RecordView },
    ];

export const ROUTES_PROVIDERS = [{
//   provide: 'canActivateForLoggedIn',
//   useValue: () => !! Meteor.userId()
}];