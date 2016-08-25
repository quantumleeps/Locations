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
    dataGroups: any;
    curDataGroup: any;

    constructor(private router: Router, private route: ActivatedRoute) {
        super();

    }

    ngOnInit() {

        this.route.params
            .map(params => params['dataInputId'])
            .subscribe(dataInputId => {
                this.dataInputId = dataInputId;


            });

        //need the name of the current location

        this.subscribe('collected-data-record', this.dataInputId, () => {
            this.curRecord = CollectedData.findOne(this.dataInputId);
            this.curLocationId = this.curRecord.locationId;

            this.subscribe('location', this.curLocationId, () => {
                this.curLocation = Locations.findOne(this.curLocationId);
                this.curLocationName = this.curLocation.name;

            });


            this.subscribe('data-groups', () => {
                var temp = DataGroups.find({ "locationId": this.curLocationId })
                this.dataGroups = temp.map(function (a) {
                    return a
                })
                this.curDataGroup = this.dataGroups[0]._id

                this.subscribe('data-points', () => {
                    this.dataPoints = DataPoints.find({ "locationId": this.curLocationId, "dataGroupId": this.curDataGroup })
                    // this.dataPoints = DataPoints.find({ "locationId": this.curLocationId })
                })

            })

        });


        //need the list of datagroups




    }

    cancelEntry() {
        this.router.navigate(['/add-data']);
    }

    changeCurGroup(id) {
        this.curDataGroup = id;

        this.subscribe('data-points', () => {
            this.dataPoints = DataPoints.find({ "locationId": this.curLocationId, "dataGroupId": this.curDataGroup })
        })

    }

}