import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Tracker } from 'meteor/tracker';
import { MeteorComponent } from 'angular2-meteor';

import { DataGroupsList } from '../data-groups/data-groups-list.component';
import { Locations } from '../../../both/collections/locations.collection';

import template from './location-details.component.html';

@Component({
    selector: 'location-details',
    template,
    directives: [ROUTER_DIRECTIVES, DataGroupsList]
})

export class LocationDetails extends MeteorComponent implements OnInit {
    locationId: string;
    location: any;
    editing: boolean;

    constructor(private route: ActivatedRoute) {
        super();
        this.editing = false;
    }

    ngOnInit() {
        this.route.params
            .map(params => params['locationId'])
            .subscribe(locationId => {
                this.locationId = locationId;
                // console.log(locationId)

                this.subscribe('location', this.locationId, () => {
                    this.location = Locations.findOne(this.locationId);
                }, true);
            });
    }

    editLocation() {
        if (this.editing) {this.editing = false}
        else {this.editing = true}
    }

    saveLocation() {
        Locations.update(this.location._id, {
            $set: {
                name: this.location.name,
                shortName: this.location.shortName,
                region: this.location.region,
                country: this.location.country
            }
        });  
        this.editing = false;
    }


}