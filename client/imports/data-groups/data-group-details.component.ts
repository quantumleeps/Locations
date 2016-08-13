import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Tracker } from 'meteor/tracker';
import { MeteorComponent } from 'angular2-meteor';

// import { DataGroupsList } from '../data-groups/data-groups-list.component';
import { Locations } from '../../../both/collections/locations.collection';
import { DataGroups } from '../../../both/collections/data-groups.collection'

import template from './data-group-details.component.html';

@Component({
    selector: 'data-group-details',
    template,
    directives: [ROUTER_DIRECTIVES/*, DataGroupsList*/]
})

export class DataGroupDetails extends MeteorComponent implements OnInit {
    locationId: string;
    dataGroupId: string
    location: any;
    editing: boolean;
    dataGroup: any;

    constructor(private route: ActivatedRoute) {
        super();
        this.editing = false;
    }

    ngOnInit() {

        this.route.params
            .map(params => params['dataGroupId'])
            .subscribe(dataGroupId => {
                this.dataGroupId = dataGroupId;
                // console.log(this.dataGroupId)

                this.subscribe('data-group', this.dataGroupId, () => {
                    this.dataGroup = DataGroups.findOne(this.dataGroupId);
                    // console.log(this.dataGroup)
                }, true);

            });

        this.route.params
            .map(params => params['locationId'])
            .subscribe(locationId => {
                this.locationId = locationId;
                // console.log(this.locationId)

                this.subscribe('location', this.locationId, () => {
                    this.location = Locations.findOne(this.locationId);
                    // console.log(this.location)
                }, true);

            })
    }

    editDataGroup() {
        if (this.editing) { this.editing = false }
        else { this.editing = true }
    }

    saveDataGroup() {
        DataGroups.update(this.dataGroup._id, {
            $set: {
                name: this.dataGroup.name
            }
        });  
        this.editing = false;
    }


} 