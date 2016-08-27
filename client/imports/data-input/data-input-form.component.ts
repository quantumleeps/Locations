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


    }

    ngOnInit() {
    }


    changeField(ref) {
        ref['timestamp'] = new Date();
        this.updateRecord(this.dataInputFields, this.curRecord)
    }

    // goal is to add the dataaray to the mongo record
    updateRecord(dataarray,record) {
            CollectedData.update({_id: record._id},{ $set: { data: dataarray }} ) 

    }

    isValid(datafieldvalue) {

        if (!datafieldvalue.processValue) { datafieldvalue.valid = false }
        else if (datafieldvalue.upperLimit && datafieldvalue.processValue > datafieldvalue.upperLimit) {
            datafieldvalue.valid=false;
        }
  }
}