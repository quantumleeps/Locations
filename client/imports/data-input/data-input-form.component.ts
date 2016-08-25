// you input the data point id and it creates an instance of a form that is 
// part of a larger form group


import { Component, OnInit, Input } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataPoints } from '../../../both/collections/data-points.collection';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';

// import { DataPoint } from '../../../both/interfaces/data-point.interface';

import template from './data-input-form.component.html';

@Component({
    selector: 'data-input-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class DataInputForm extends MeteorComponent implements OnInit {
    
    @Input() dataPointId: string;
    curDataPoint: any;
    description: string;
    units: string;
    upperLimit: string;
    lowerLimit: string;

    addDataForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    ngOnInit() {
        

        this.subscribe('data-point', this.dataPointId, () => {
            this.curDataPoint = DataPoints.findOne(this.dataPointId);
            this.description = this.curDataPoint.description;
            this.units = this.curDataPoint.units;
            this.upperLimit = this.curDataPoint.upperLimit;
            this.lowerLimit = this.curDataPoint.lowerLimit;
        }, true);


        this.addDataForm = this.formBuilder.group({
            processValue: ['', Validators.required],
            timestamp: [''],
            skipped: [''],
            overridden: ['']
        });
    }

    resetForm() {
        this.addDataForm.controls['processValue']['updateValue']('');
        this.addDataForm.controls['timestamp']['updateValue']('');
        this.addDataForm.controls['skipped']['updateValue']('');
        this.addDataForm.controls['overridden']['updateValue']('');
    }

    addDataPoint() {

        if (this.addDataForm.valid) {
            // need to push a datapointinput object to the current
            // record in collected-data


        }
    }

}