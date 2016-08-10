import { Component } from '@angular/core';
import { Locations } from '../both/collections/locations.collection';
import { LocationsList } from '../client/imports/locations/locations-list.component';
import { Mongo } from 'meteor/mongo';

import template from './app.component.html';

@Component({
  selector: 'app',
  template,
  directives: [LocationsList]
})
export class AppComponent {}


// this.locations = [
    //   {name: "Blue Hills", region: "Nassau", country: "Bahamas"},
    //   {name: "Northside Waterworks (NSWW)", region: "West End - Grand Cayman", country: "Cayman Islands"}
    // ];