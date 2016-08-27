import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';

import { CollectedData} from '../../../both/collections/collected-data.collection';

import template from './record-view.component.html';

@Component({
    selector: 'record-veiew',
    template,
    directives: [ROUTER_DIRECTIVES],

})

export class RecordView extends MeteorComponent implements OnInit {

    dataInputId: string;
    curRecord: any;

    constructor(private router: Router, private route: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.route.params
            .map(params => params['dataInputId'])
            .subscribe(dataInputId => {
                this.dataInputId = dataInputId;
            });
        this.subscribe('collected-data-record', this.dataInputId, () => {
            this.curRecord = CollectedData.findOne(this.dataInputId);
        });
    }
}