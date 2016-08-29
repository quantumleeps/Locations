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
    curDataGroupName: any;
    dataInputFields: any
    expanded: boolean = false;
    chooserActive: boolean = false;

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
                this.curDataGroup = this.dataGroups[0]._id;
                this.curDataGroupName = this.dataGroups[0].name;

                this.subscribe('data-points', () => {
                    this.dataPoints = DataPoints.find({ "locationId": this.curLocationId });
                    this.dataInputFields = this.createIterable(this.dataPoints, this.dataGroups);

                })

            })

        });

    }

    cancelEntry() {
        this.router.navigate(['/add-data']);
    }

    changeCurGroup(id) {
        this.curDataGroup = id;
        this.curDataGroupName = this.queryDataPointGroupName(id,this.dataGroups)
        this.subscribe('data-points', () => {
            this.dataPoints = DataPoints.find({ "locationId": this.curLocationId, "dataGroupId": this.curDataGroup })
        })

        this.chooserActive = false;

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
                focused: false,
                dataPointId: item['_id'],
                description: item['description'],
                units: item['units'],
                dataGroupId: item['dataGroupId'],
                upperLimit: item['upperLimit'],
                lowerLimit: item['lowerLimit'],
                processValue: undefined,
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

    saveEntry() {
        this.router.navigate(['/view', this.curRecord._id]);

    }

    toggleExpanded() {
        if (this.expanded === false) {
            this.expanded = true;
        } else {this.expanded = false};
    }

    toggleChooser() {
        if (this.chooserActive === false) {
            this.chooserActive = true;
        } else {this.chooserActive = false}
    }
}

// call to query all of the data from a specific data point:

// db['collected-data'].aggregate([
//     { $unwind: "$data"}, {
//         $match: {
//             "data.processValue": {$exists: true},
//             "data.dataPointId": "uf9mcSzQt46A7jKxm"
//         }
//     },{
//         $project: {
//             _id: 0, 
//             "data.timestamp": 1, 
//             "data.processValue": 1, 
//             "data.description": 1, 
//             "data.units": 1, 
//             "data.dataPointId": 1
//         }
//     }]).pretty()


// db['collected-data'].aggregate([
//     { $unwind: "$data"}, {
//         $match: {
//             "data.processValue": {$exists: true},
//             "_id": "AH8vdXysjJGqBsy4k"
//         }
//     },{
//         $project: {
//             _id: 0, 
//             "data.timestamp": 1, 
//             "data.processValue": 1, 
//             "data.description": 1, 
//             "data.units": 1, 
//             "data.dataPointId": 1
//         }
//     }]).pretty()