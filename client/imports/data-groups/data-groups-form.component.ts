import { Component, Input, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataGroups } from '../../../both/collections/data-groups.collection';

import template from './data-groups-form.component.html';

@Component({
    selector: 'data-groups-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES]
})

export class DataGroupsForm implements OnInit {
    @Input() curLocation: string;

    addDataGroupsForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit () {
        this.addDataGroupsForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    resetForm() {
        this.addDataGroupsForm.controls['name']['updateValue']('');
    }

    addDataGroup () {
        // if (this.addDataGroupsForm.valid) {
        //     DataGroups.insert(this.addDataGroupsForm.value);

        //     this.resetForm();
        // }
        console.log(this.curLocation)
    }

}