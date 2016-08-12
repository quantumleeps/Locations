import { Component, OnInit, Input } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Locations } from '../../../both/collections/locations.collection';
import { DataGroups } from '../../../both/collections/data-groups.collection';
import { DataGroupsForm } from './data-groups-form.component';
 
import template from './data-groups-list.component.html';

@Component({
    selector: 'data-groups-list',
    template,
    directives: [DataGroupsForm, ROUTER_DIRECTIVES]
})

export class DataGroupsList extends MeteorComponent implements OnInit {

    @Input() curLocation: string;
    dataGroups: any;
    // tempArray: any[];
    // locationId: string;
    dataGroupAddToggled: boolean;

    constructor() {
        super();
    }

    ngOnInit() {
        // console.log(this.curLocation);
        this.dataGroupAddToggled = false;

        // this.locationId = 'Mh3wH5nn6GMg2euEw';

        this.subscribe('data-groups', () => {
            this.dataGroups = DataGroups.find({ "locationId": this.curLocation })
            // this.tempArray = this.dataGroups.map(function (a) {
            //     return a.name
        })


    }

    changeAdderToggle() {
        if (this.dataGroupAddToggled === true) {
            this.dataGroupAddToggled = false;
        } else { this.dataGroupAddToggled = true; }
    }

}



