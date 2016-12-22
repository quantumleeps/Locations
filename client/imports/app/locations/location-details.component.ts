import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import 'rxjs/add/operator/map';

import { DataGroupsList } from '../data-groups/data-groups-list.component'; //need to add to app folder
import { Location } from '../../../../both/models/location.model';
import { Locations } from '../../../../both/collections/locations.collection';

import template from './location-details.component.html';

@Component({
    selector: 'location-details',
    template,
    // directives: [ROUTER_DIRECTIVES, DataGroupsList]
})

export class LocationDetails implements OnInit, OnDestroy {
    locationId: string;
    location: Location;
    paramsSub: Subscription;
    locationSub: Subscription;
    editing: boolean;

    constructor(private route: ActivatedRoute) {
        this.editing = false;
    }

    ngOnInit() {
        this.paramsSub = this.route.params
            .map(params => params['locationId'])
            .subscribe(locationId => {
                this.locationId = locationId;

                if (this.locationSub) {
                    this.locationSub.unsubscribe();
                }

                this.locationSub = MeteorObservable.subscribe('location', this.locationId).subscribe(() => {
                    this.location = Locations.findOne(this.locationId);
                });
            });
    }

    editLocation() {
        if (this.editing) { this.editing = false }
        else { this.editing = true }
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

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
        this.locationSub.unsubscribe();
    }

}