import { Component } from '@angular/core';
import { Locations } from '../both/collections/locations.collection';
import { LocationsList } from '../client/imports/locations/locations-list.component';
import { DataGroups} from '../both/collections/data-groups.collection';
import { DataGroupsList } from '../client/imports/data-groups/data-groups-list.component';
import { Mongo } from 'meteor/mongo';

import template from './app.component.html';

@Component({
  selector: 'app',
  template,
  directives: [LocationsList, DataGroupsList]
})
export class AppComponent {}

