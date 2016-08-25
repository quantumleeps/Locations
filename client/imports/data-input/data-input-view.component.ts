import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';

import { DataPoint } from '../../../both/interfaces/data-point.interface';
import { DataPoints } from '../../../both/collections/data-points.collection';

import { DataInputForm } from './data-input-form.component';


import template from './data-input-view.component.html';

@Component({
    selector: 'data-input-view',
    template,
    directives: [ROUTER_DIRECTIVES, DataInputForm]
})

export class DataInputView extends MeteorComponent implements OnInit {

    // @Input() curLocation: string;
    // @Input () curDataGroup: string;
    curLocation: string;
    curDataGroup: string;
    dataPoints: any;
 

    constructor(private router: Router) {
        super();
        this.curLocation = 'ZNX3Ehr8toXNDH4MH';
        this.curDataGroup = 'vB5hQqhRo4wfKkuDN';

    }

    ngOnInit() {

        this.subscribe('data-points', () => {
            this.dataPoints = DataPoints.find({ "locationId": this.curLocation, "dataGroupId": this.curDataGroup })
        })

        this.router.navigateByUrl['configure']

    }

    clickThis() {
        this.router.navigate(['/configure']);
    }

}