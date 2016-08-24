import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';

import { Location } from '../../../both/interfaces/location.interface';
import { Locations } from '../../../both/collections/locations.collection';
import { CollectedData } from '../../../both/collections/collected-data.collection'

import template from './location-select.component.html';

@Component({
    selector: 'location-select',
    template,
    directives: [ROUTER_DIRECTIVES]
})

export class LocationSelect extends MeteorComponent implements OnInit {

    locations: Mongo.Cursor<Location>;
    curRecord: any;

    constructor() {
        super();
    }

    ngOnInit() {

        this.subscribe('locations', () => {
            this.locations = Locations.find()
        })

        // this.subscribe('collected-data-record', () => {
        //     this.curRecord = CollectedData.find({}, { sort: { _id: -1 }, limit: 1 });
        // }, true);

    }

    clickLocation(location) {

        //create new record in collection and find Id of current record
        this.curRecord = CollectedData.insert({ locationId: location._id }, function( error, result) {
            if (error) console.log (error);
            if (result) return result;
        })
        console.log(this.curRecord)

        //navigate to new record

    }
}
