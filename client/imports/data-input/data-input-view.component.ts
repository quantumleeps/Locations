import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';

import { DataPoint } from '../../../both/interfaces/data-point.interface';
import { DataPoints } from '../../../both/collections/data-points.collection';
import { Locations } from '../../../both/collections/locations.collection';
import { CollectedData } from '../../../both/collections/collected-data.collection';

import { DataInputForm } from './data-input-form.component';


import template from './data-input-view.component.html';

@Component({
    selector: 'data-input-view',
    template,
    directives: [ROUTER_DIRECTIVES, DataInputForm]
})

export class DataInputView extends MeteorComponent implements OnInit {

    dataInputId: string;
    curLocation: any;
    curLocationId: any;
    curLocationName: any;
    curRecord: any;
    dataPoints: any;

    constructor(private router: Router, private route: ActivatedRoute) {
        super();

    }

    ngOnInit() {

        this.route.params
            .map(params => params['dataInputId'])
            .subscribe(dataInputId => {
                this.dataInputId = dataInputId;

                this.subscribe('collected-data-record', this.dataInputId, () => {
                    this.curRecord = CollectedData.findOne(this.dataInputId);
                    this.curLocationId = this.curRecord.locationId;

                    this.subscribe('location', this.curLocationId, () => {
                        this.curLocation = Locations.findOne(this.curLocationId);
                        // this.curLocationName = this.curLocation.name;
                        this.curLocationName = this.curLocation.name;
                    }, true);


                }, true);


            });

        //need the name of the current location



        //need the list of datagroups

        this.subscribe('data-points', () => {
            // this.dataPoints = DataPoints.find({ "locationId": this.curLocation, "dataGroupId": this.curDataGroup })
            this.dataPoints = DataPoints.find({ "locationId": this.curLocationId })
        })

    }

    cancelEntry() {
        this.router.navigate(['/add-data']);
    }

}