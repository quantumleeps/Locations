import { Component } from '@angular/core';
import { DataGroups } from '../../../both/collections/data-groups.collection';
import { Mongo } from 'meteor/mongo';

import template from './data-groups-list.component.html';

@Component({
    selector: 'data-groups-list',
    template
})

export class DataGroupsList {

    dataGroups: Mongo.Cursor<any>;

    constructor() {
        this.dataGroups = DataGroups.find();

    }
    

}



