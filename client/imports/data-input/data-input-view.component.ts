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
    dataPointsArray: any = [''];
    // displayFields: any = [{}];
    dataInputFields: any

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
            // console.log(this.curRecord)

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
                    this.dataPoints = DataPoints.find({ "locationId": this.curLocationId });
                    this.dataInputFields = this.createIterable(this.dataPoints, this.dataGroups);
                    // console.log(this.dataInputFields)






                    // // console.log(this.displayFields);
                    // this.dataPointsArray = this.dataPoints.map(function (a) {
                    //     return a;
                    // });
                    // for (var i = 0; i < this.dataPointsArray.length; i++) {
                    //     var a = {
                    //         description: this.dataPointsArray[i]['description'],
                    //         units: this.dataPointsArray[i]['units'],
                    //         processValue: "3",
                    //         timestamp: ""
                    //     }
                    //     // this.displayFields.push(a)

                    // }
                    // // console.log(this.displayFields);
                    
                })

            })

        });

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

    queryDataPointGroupName(datagroupid, datagroups) {
        for (var i = 0; i < datagroups.length; i++) {
            if (datagroups[i]._id === datagroupid) {
                return datagroups[i].name;
            }
        }
    }

    createIterable(cursor, datagroups) {
        var b = [];
        cursor.forEach(function (item) {
            var a = {
                dataPointId: item['_id'],
                description: item['description'],
                units: item['units'],
                dataGroupId: item['dataGroupId'], //can create function to display a dataGroupName with dataGroupId and use it here
                processValue: "",
                timestamp: undefined,
                dataGroupName: ""
            }
            b.push(a)
        })
        for (var i = 0; i < b.length; i++) {
            b[i]['dataGroupName'] = this.queryDataPointGroupName(b[i].dataGroupId, datagroups) 
        }
        return b
    }
    // console.log(b)
}

