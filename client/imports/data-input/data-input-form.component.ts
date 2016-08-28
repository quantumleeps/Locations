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
        if (ref['processValue']) {
            ref['timestamp'] = new Date().toString();
            this.updateRecord(this.dataInputFields, this.curRecord);
        } else if (ref['timestamp']) {
            ref['timestamp'] = undefined;
        }

        // if (ref['lowerLimit']) {
        //     ref['isAboveLowerRange'] = this.isAboveLowerRange(ref['processValue'], ref['lowerLimit']);
        // } 
        // if (ref['upperLimit']) {
        //     ref['isBelowUpperRange'] = this.isBelowUpperRange(ref['processValue'], ref['upperLimit']);
        // } 
    }

    // goal is to add the dataaray to the mongo record
    updateRecord(dataarray, record) {
        CollectedData.update({ _id: record._id }, { $set: { data: dataarray } })

    }

    isValid(datafieldvalue) {

        if (!datafieldvalue.processValue) { datafieldvalue.valid = false }
        else if (datafieldvalue.upperLimit && datafieldvalue.processValue > datafieldvalue.upperLimit) {
            datafieldvalue.valid = false;
        }
    }

    // isAboveLowerRange(val, lr) {
    //     if (val >= lr) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }



isAboveLowerLimit(ref) {
        if (ref['processValue'] >= ref['lowerLimit']) {
            return true;
        } else {
            return false;
        }
    }

    isBelowUpperLimit(ref) {
        if (ref['processValue'] <= ref['upperLimit']) {
            return true;
        } else {
            return false;
        }
    }

}