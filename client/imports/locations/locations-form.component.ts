import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Locations } from '../../../both/collections/locations.collection';

import template from './locations-form.component.html';

@Component({
    selector: 'locations-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class LocationsForm implements OnInit {
    addLocationForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit () {
        this.addLocationForm = this.formBuilder.group({
            name: ['', Validators.required],
            shortName: [],
            region: [],
            country: ['', Validators.required]
        });
    }

    resetForm() {
        this.addLocationForm.controls['name']['updateValue']('');
        this.addLocationForm.controls['shortName']['updateValue']('');
        this.addLocationForm.controls['region']['updateValue']('');
        this.addLocationForm.controls['country']['updateValue']('');
    }

    addLocation () {
        if (this.addLocationForm.valid) {
            Locations.insert(this.addLocationForm.value);

            this.resetForm();
        }
    }

}