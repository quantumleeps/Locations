import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import { LocationsForm } from './locations-form.component';

import { Location } from '../../../both/interfaces/location.interface';
import { Locations } from '../../../both/collections/locations.collection';
import { DataGroups } from '../../../both/collections/data-groups.collection';
import { DataPoints } from '../../../both/collections/data-points.collection';


import template from './locations-list.component.html';

@Component({
    selector: 'locations-list',
    template,
    directives: [LocationsForm, ROUTER_DIRECTIVES],
    styles: [`
        .location-block {
            margin-top: 20px;
            padding: 10px;
            border: 2px solid black;
        }
    `]
})

export class LocationsList extends MeteorComponent implements OnInit {

    locations: Mongo.Cursor<Location>;
    dataGroups: any;
    dataPoints: any;
    areYouSureToggle: boolean = false;

    constructor() {
        super();
    }

    ngOnInit() {

        this.subscribe('locations', () => {
            this.locations = Locations.find()
        })

        this.subscribe('data-groups', () => {
            this.dataGroups = DataGroups.find()
        })

        this.subscribe('data-points', () => {
            this.dataPoints = DataPoints.find()
        })

    }

    deleteButtonClick() {
        this.areYouSureToggle = true;
    }

    deleteLocation(current) {
        // delete the location
        Locations.remove(current);

        // delete any of its datagroups (cleanup)
        var temp1 = DataGroups.find({ locationId: current }).fetch();
        for(var i = 0; i<temp1.length; i++) {
            console.log('group id: ', temp1[i])
            DataGroups.remove(temp1[i]['_id'])
        }

        // delete any of its datapoints (cleanup)
        var temp2 = DataPoints.find({ locationId: current }).fetch();
        for(var i = 0; i<temp2.length; i++) {
            console.log('data id: ', temp2[i])
            DataPoints.remove(temp2[i]['_id'])
        }

        // reset the toggle
        this.areYouSureToggle = false;
    }
    cancelDelete() {
        this.areYouSureToggle = false;
    }
}
