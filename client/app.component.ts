import { Component } from '@angular/core';
import { Locations } from '../both/collections/locations.collection';
import { Mongo } from 'meteor/mongo';

import template from './app.component.html';

@Component({
  selector: 'app',
  template
})
export class AppComponent {

  locations: Mongo.Cursor<any>;

  constructor () {
    this.locations = Locations.find();
  }

}


// this.locations = [
    //   {name: "Blue Hills", region: "Nassau", country: "Bahamas"},
    //   {name: "Northside Waterworks (NSWW)", region: "West End - Grand Cayman", country: "Cayman Islands"}
    // ];