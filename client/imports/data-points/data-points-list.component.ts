import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
// import { LocationsForm } from './locations-form.component';

// import { Location } from '../../../both/interfaces/location.interface';
// import { Locations } from '../../../both/collections/locations.collection';
import { DataPoint } from '../../../both/interfaces/data-point.interface';
import { DataPoints } from '../../../both/collections/data-points.collection';
import { DataPointsForm } from './data-points-form.component';


import template from './data-points-list.component.html';

@Component({
    selector: 'data-points-list',
    template,
    directives: [DataPointsForm, ROUTER_DIRECTIVES],
    styles: [/*`
        .location-block {
            margin-top: 10px;
            margin-bottom: 20px;
        }
    `*/]
})

export class DataPointsList extends MeteorComponent implements OnInit {

    @Input() curLocation: string;
    @Input () curDataGroup: string;
    // curLocation: string;
    // curDataGroup: string;
    dataPoints: any;
    // tempArray: any[];
    // locationId: string;
    dataPointAddToggled: boolean;

    constructor() {
        super();
        this.curLocation = 'MdimdoGnanXhd3Q5f';
        this.curDataGroup = 'C5tzvbmG3hH38xYML';
    }

    ngOnInit() {
        // console.log(this.curLocation);
        this.dataPointAddToggled = false;
        // console.log(this.dataPointAddToggled)
        // this.locationId = 'Mh3wH5nn6GMg2euEw';
        console.log(this.curLocation);
        console.log(this.curDataGroup)
        this.subscribe('data-points', () => {
            this.dataPoints = DataPoints.find({ "locationId": this.curLocation, "dataGroupId": this.curDataGroup })
            // console.log(this.dataPoints)// this.tempArray = this.dataGroups.map(function (a) {
            //     return a.name
        })


    }

    changeAdderToggle() {
        if (this.dataPointAddToggled === true) {
            this.dataPointAddToggled = false;
        } else { this.dataPointAddToggled = true; }
    }

    addTag(dataPoint, value) {
        DataPoints.update(dataPoint._id, {
            $push: {
                metaTags: value,
            }
        });
        dataPoint.tagInput="";

    }


    saveDescription(dataPoint) {
        DataPoints.update(dataPoint._id, {
            $set: {
                description: dataPoint.description,
            }
        });  
        dataPoint.isEditingDescription=false;
    }

    saveUnits(dataPoint) {
        DataPoints.update(dataPoint._id, {
            $set: {
                units: dataPoint.units,
            }
        });  
        dataPoint.isEditingUnits=false;
    }


    saveLowerLimit(dataPoint) {
        DataPoints.update(dataPoint._id, {
            $set: {
                lowerLimit: dataPoint.lowerLimit,
            }
        });  
        dataPoint.isEditingLL=false;
    }

    saveUpperLimit(dataPoint) {
        DataPoints.update(dataPoint._id, {
            $set: {
                upperLimit: dataPoint.upperLimit,
            }
        });  
        dataPoint.isEditingUL=false;
    }

    saveProcessTag(dataPoint) {
        DataPoints.update(dataPoint._id, {
            $set: {
                processTag: dataPoint.processTag,
            }
        });  
        dataPoint.isEditingPT=false;
    }

    // deleteTag(dataPoint, index) {
    //     DataPoints.update(dataPoint._id, {
    //         $pull: {
    //             metaTags: index,
    //         }
    //     });    
    // }
}