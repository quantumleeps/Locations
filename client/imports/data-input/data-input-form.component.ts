// // you input the data point id and it creates an instance of a form that is 
// // part of a larger form group


// import { Component, OnInit, Input } from '@angular/core';
// import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { DataPoints } from '../../../both/collections/data-points.collection';
// import { Mongo } from 'meteor/mongo';
// import { MeteorComponent } from 'angular2-meteor';

// // import { DataPoint } from '../../../both/interfaces/data-point.interface';

// import template from './data-input-form.component.html';

// @Component({
//     selector: 'data-input-form',
//     template,
//     directives: [REACTIVE_FORM_DIRECTIVES]
// })

// export class DataInputForm extends MeteorComponent implements OnInit {

//     @Input() dataPointId: string;
//     curDataPoint: any;
//     description: string;
//     units: string;
//     upperLimit: string;
//     lowerLimit: string;
//     collectedDataRecord: Object = {};

//     // addDataForm: FormGroup;

//     constructor(/*private formBuilder: FormBuilder*/) {
//         super();
//     }

//     ngOnInit() {


//         this.subscribe('data-point', this.dataPointId, () => {
//             this.curDataPoint = DataPoints.findOne(this.dataPointId);
//             this.description = this.curDataPoint.description;
//             this.units = this.curDataPoint.units;
//             this.upperLimit = this.curDataPoint.upperLimit;
//             this.lowerLimit = this.curDataPoint.lowerLimit;
//         }, true);


//         // this.addDataForm = this.formBuilder.group({
//         //     processValue: ['', Validators.required],
//         //     timestamp: [''],
//         //     skipped: [''],
//         //     overridden: ['']
//         // });
//     }

//     // resetForm() {
//     //     this.addDataForm.controls['processValue']['updateValue']('');
//     //     this.addDataForm.controls['timestamp']['updateValue']('');
//     //     this.addDataForm.controls['skipped']['updateValue']('');
//     //     this.addDataForm.controls['overridden']['updateValue']('');
//     // }

//     // addDataPoint() {

//     //     if (this.addDataForm.valid) {
//     //         // need to push a datapointinput object to the current
//     //         // record in collected-data


//     //     }
//     // }
//     valueChange() {
//         console.log(this.collectedDataRecord['processValue'])
//     }

// }


// you input the data point id and it creates an instance of a form that is 
// part of a larger form group


import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataPoints } from '../../../both/collections/data-points.collection';
import { CollectedData } from '../../../both/collections/collected-data.collection';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';

// import { DataPoint } from '../../../both/interfaces/data-point.interface';

import template from './data-input-form.component.html';

@Component({
    selector: 'data-input-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class DataInputForm extends MeteorComponent implements OnInit, OnChanges {

    @Input() dataPoints: any;
    @Input() dataInputId: any;
    @Input() curRecord: any;
    curDataPoint: any;
    description: string;
    units: string;
    upperLimit: string;
    lowerLimit: string;
    collectedDataPoints: Object[] = [];
    // collectedDataRecord: Object = {};

    // addDataForm: FormGroup;

    constructor(/*private formBuilder: FormBuilder*/) {
        super();
    }

    ngOnChanges() {

        for (var i = 0; i < this.dataPoints.length; i++) {
            if (this.dataPoints[i]._id) {
                // console.log(i._id);
                // console.log(i);
                // console.log(this.dataPoints[i]._id);
                this.collectedDataPoints[i] = {
                    dataPointId: this.dataPoints[i]._id,
                    processValue: "",
                    timestamp: ""
                }
            }
        }
        // console.log(this.collectedDataPoints)
    }

    ngOnInit() {
        // console.log(this.curRecord)

        // console.log(this.dataInputId)
        // loop through dataPoints and create the collectedData array




        // this.subscribe('data-point', this.dataPointId, () => {
        //     this.curDataPoint = DataPoints.findOne(this.dataPointId);
        //     this.description = this.curDataPoint.description;
        //     this.units = this.curDataPoint.units;
        //     this.upperLimit = this.curDataPoint.upperLimit;
        //     this.lowerLimit = this.curDataPoint.lowerLimit;
        // }, true);


        // this.addDataForm = this.formBuilder.group({
        //     processValue: ['', Validators.required],
        //     timestamp: [''],
        //     skipped: [''],
        //     overridden: ['']
        // });
    }

    // resetForm() {
    //     this.addDataForm.controls['processValue']['updateValue']('');
    //     this.addDataForm.controls['timestamp']['updateValue']('');
    //     this.addDataForm.controls['skipped']['updateValue']('');
    //     this.addDataForm.controls['overridden']['updateValue']('');
    // }

    // addDataPoint() {

    //     if (this.addDataForm.valid) {
    //         // need to push a datapointinput object to the current
    //         // record in collected-data


    //     }
    // }
    leaveField(value, index) {
        // console.log(this.dataPoints.length)
        this.collectedDataPoints[index]['processValue'] = value;
        this.collectedDataPoints[index]['timestamp'] = new Date().toString();
        // console.log(this.collectedDataPoints)
        // console.log(this.curRecord)
        this.updateRecord(this.collectedDataPoints);

    }

    updateRecord(collectedDataPoints) {
            if(!this.curRecord.data) {
                this.curRecord.data = collectedDataPoints;
                console.log(this.curRecord)
            } else {
                console.log('there is data')
            }
    

        //connect to the record on mongo and insert where the dataPointId = this one
        // this.subscribe('collected-data-record', () => {
        //             this.dataRecord = DataPoints.find({ "locationId": this.curLocationId, "dataGroupId": this.curDataGroup })
        //             // this.dataPoints = DataPoints.find({ "locationId": this.curLocationId })
        //             this.dataPointsArray = this.dataPoints.map(function (a) {
        //                 return a;
        //             });
        //         })


    }




}