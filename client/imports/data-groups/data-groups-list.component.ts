import { Component, OnInit } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';

import { Locations } from '../../../both/collections/locations.collection';
import { DataGroups } from '../../../both/collections/data-groups.collection';

import template from './data-groups-list.component.html';

@Component({
    selector: 'data-groups-list',
    template
})

export class DataGroupsList extends MeteorComponent implements OnInit {

    dataGroups: any;
    tempArray: any[];
    locationId: string;

    constructor() {
        super();
    }

    ngOnInit() {


        this.locationId = 'Mh3wH5nn6GMg2euEw';
        
        this.subscribe('data-groups', () => {
            this.dataGroups = DataGroups.find()
            this.tempArray = this.dataGroups.map(function (a) {
                return a.name
            })
        })


    }

}



