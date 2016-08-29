import { Component, OnInit, Input } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataPoints } from '../../../both/collections/data-points.collection';

import template from './data-points-form.component.html';

@Component({
    selector: 'data-points-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class DataPointsForm implements OnInit {
    @Input() curLocation: string;
    @Input() curDataGroup: string;

    addDataPointForm: FormGroup;


    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.addDataPointForm = this.formBuilder.group({
            description: ['', Validators.required],
            units: ['', Validators.required],
            lowerLimit: [''],
            upperLimit: [''],
            required: ['false']
        });
    }

    resetForm() {
        this.addDataPointForm.controls['description']['updateValue']('');
        this.addDataPointForm.controls['units']['updateValue']('');
        this.addDataPointForm.controls['lowerLimit']['updateValue']('');
        this.addDataPointForm.controls['upperLimit']['updateValue']('');
        this.addDataPointForm.controls['required']['updateValue']('false')
    }

    addDataPoint() {

        if (this.addDataPointForm.valid) {
            var tempVal = this.addDataPointForm.value
            tempVal['locationId'] = this.curLocation;
            tempVal['dataGroupId'] = this.curDataGroup;
            DataPoints.insert(tempVal);

            this.resetForm();
        }
    }

}