import { Component } from '@angular/core';
import { Locations } from '../../../both/collections/locations.collection';
import { Mongo } from 'meteor/mongo';

import template from './locations-list.component.html';

@Component({
    selector: 'locations-list',
    template
})

export class LocationsList {

    locations: Mongo.Cursor<any>;

    constructor() {
        this.locations = Locations.find();
        // console.log(this.locations)
    }
    


}



