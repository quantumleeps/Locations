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

    filteredLocations: any;
    locations: any;
    locationId: string;

    constructor() {
        super();
    }

    ngOnInit() {

        this.locationId = 'Mh3wH5nn6GMg2euEw';

        this.subscribe('locations', () => {
            this.locations = Locations.find()
        })

        this.subscribe('location', this.locationId, () => {
            this.filteredLocations = Locations.find({_id: this.locationId},{name:1})
        })

    }
}
