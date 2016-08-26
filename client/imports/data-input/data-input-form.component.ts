import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataPoints } from '../../../both/collections/data-points.collection';
import { CollectedData } from '../../../both/collections/collected-data.collection';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import { GroupFilter } from './group-filter.pipe';

import template from './data-input-form.component.html';

@Component({
    selector: 'data-input-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES],
    pipes: [GroupFilter]
})

export class DataInputForm extends MeteorComponent implements OnInit, OnChanges {

    @Input() curRecord: any;
    @Input() dataInputFields: any;
    @Input() curDataGroup: any;
    collectedDataPoints: Object[] = [];


    constructor() {
        super();
    }

    ngOnChanges() {

        //not sure if anything needed here

    }

    ngOnInit() {

        //not sure what's needed here yet

    }


    changeField(ref) {
    //     // console.log(this.dataPoints.length)
    //     this.collectedDataPoints[index]['processValue'] = value;
        ref['timestamp'] = new Date();
    //     // console.log(this.collectedDataPoints)
    //     this.updateRecord(this.collectedDataPoints);
    //     console.log(this.curRecord)
        console.log(this.dataInputFields)
    }

    updateRecord(collectedDataPoints) {
    //         if(!this.curRecord.data) {
    //             this.curRecord.data = collectedDataPoints;
    //             console.log(this.curRecord)
    //             //at this point you can add this to the mongo cursor 
    //             //for the current record
    //         } else {
    //             //loop through collectedDataPoints array and if there
    //             //is already a value in this.curRecord with that id,
    //             //set the new value and timestamp 
    //             for (var i=0; i < this.curRecord.data.length; i++) {
    //                 for (var j=0; j < collectedDataPoints.length; j++) {
    //                     if (this.curRecord.data[i] === collectedDataPoints[j]) {
    //                         // console.log('these are the same');
    //                         this.curRecord.data[i]['processValue'] = collectedDataPoints[j]['processValue'];
    //                         this.curRecord.data[i]['timestamp'] = collectedDataPoints[j]['timestamp'];
    //                     } else {
    //                         // console.log('there are other data points here');
    //                         // console.log('i: ', i, 'j: ', j)
    //                     }
    //                 }
    //             }
            // }
    


    }

    //need a function that'll take in an array and find the array
    //value number that matches the id
    findArrayIndex(datapointid,collecteddataarray) {
        for (var i = 0; i < collecteddataarray.length; i++) {
            if (collecteddataarray[i]['dataPointId'] === datapointid) {
                return collecteddataarray[i]['processValue']
            }
        }
    }


}