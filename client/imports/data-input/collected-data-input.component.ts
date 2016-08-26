import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import { DataPoint } from '../../../both/interfaces/data-point.interface';
import { DataPoints } from '../../../both/collections/data-points.collection';
import { DataGroups } from '../../../both/collections/data-groups.collection';
import { Locations } from '../../../both/collections/locations.collection';
import { CollectedData } from '../../../both/collections/collected-data.collection';
import { DataInputForm } from './data-input-form.component';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';

import template from './collected-data-input.component.html';

@Component({
    selector: 'collected-data-input',
    template,
    directives: [ROUTER_DIRECTIVES]
});

export class DataInputView extends MeteorComponent implements OnInit {

    dataInputRecordId: string

    constructor(private router: Router, private route: ActivatedRoute) {
        super();

    }

    ngOnInit() {

        // I need all of the groups in the location
        
        // Figure out the records _id
        this.route.params
            .map(params => params['dataInputRecordId'])
            .subscribe(dataInputRecordId => {
                this.dataInputRecordId = dataInputRecordId;
            });

        console.log(this.dataInputRecordId);
    }

}