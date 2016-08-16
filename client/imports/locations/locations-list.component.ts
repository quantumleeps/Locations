import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import { LocationsForm } from './locations-form.component';

import { Location } from '../../../both/interfaces/location.interface';
import { Locations } from '../../../both/collections/locations.collection';


import template from './locations-list.component.html';

@Component({
    selector: 'locations-list',
    template,
    directives: [LocationsForm, ROUTER_DIRECTIVES],
    styles: [`
        .location-block {
            margin-top: 10px;
            margin-bottom: 20px;
        }
    `]
})

export class LocationsList extends MeteorComponent implements OnInit {

    // filteredLocations: any;
    locations: Mongo.Cursor<Location>;
    // locationId: string;
    locationAddToggled: boolean;

    constructor() {
        super();
    }

    ngOnInit() {
        this.locationAddToggled = false;
        // this.locationId = 'Mh3wH5nn6GMg2euEw';

        this.subscribe('locations', () => {
            this.locations = Locations.find()
        })

        // this.subscribe('location', this.locationId, () => {
        //     this.filteredLocations = Locations.find({_id: this.locationId})
        // })

    }

    changeAdderToggle() {
        if (this.locationAddToggled === true) {
            this.locationAddToggled = false;
        } else {this.locationAddToggled = true;}
    }

    removeLocation (current) {
        Locations.remove(current._id);
    }
}
