import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Tracker } from 'meteor/tracker';
import { MeteorComponent } from 'angular2-meteor';

// import { DataGroupsList } from '../data-groups/data-groups-list.component';
// import { Locations } from '../../../both/collections/locations.collection';
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
    dataGroup: any;
    editing: boolean;

    constructor(private route: ActivatedRoute) {
        super();
        this.editing = false;
    }

    ngOnInit() {
        this.route.params
            .map(params => params['dataGroupId'])
            .subscribe(dataGroupId => {
                this.dataGroupId = dataGroupId;
                console.log(this.dataGroupId)

                this.subscribe('data-group', this.dataGroupId, () => {
                    this.dataGroup = DataGroups.findOne(this.dataGroupId);
                }, true);
            });
            // console.log(tes
    }

    editDataGroup() {
        if (this.editing) {this.editing = false}
        else {this.editing = true}
    }

    // saveLocation() {
    //     Locations.update(this.location._id, {
    //         $set: {
    //             name: this.location.name,
    //             shortName: this.location.shortName,
    //             region: this.location.region,
    //             country: this.location.country
    //         }
    //     });  
    //     this.editing = false;
    // }


}