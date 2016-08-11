import { Component, OnInit } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';


import { Locations } from '../../../both/collections/locations.collection';


import template from './locations-list.component.html';

@Component({
    selector: 'locations-list',
    template
})

export class LocationsList extends MeteorComponent implements OnInit {

    locations: Mongo.Cursor<any>;

    constructor() {
        super();
    }
    
    ngOnInit () {
        this.locations = Locations.find();

        this.subscribe('locations', () => {
            this.locations = Locations.find();
        }, true);
    }
}



