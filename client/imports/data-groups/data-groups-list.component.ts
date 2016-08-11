import { Component, OnInit } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';

import { DataGroups } from '../../../both/collections/data-groups.collection';

import template from './data-groups-list.component.html';

@Component({
    selector: 'data-groups-list',
    template
})

export class DataGroupsList extends MeteorComponent implements OnInit  {

    dataGroups: Mongo.Cursor<any>;

    constructor() {
        super();
    }

ngOnInit () {
        this.dataGroups = DataGroups.find();

        this.subscribe('data-groups', () => {
            this.dataGroups = DataGroups.find();
        }, true);
    }    

}



