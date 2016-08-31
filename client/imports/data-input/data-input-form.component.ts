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
    modifiedInputFields: any;


    constructor() {
        super();
    }

    ngOnChanges() {


    }

    ngOnInit() {
    }


    changeField(ref) {


        this.modifiedInputFields = [];
        for (var i = 0; i < this.dataInputFields.length; i++) {
            if (this.dataInputFields[i]['processValue'] != undefined) {
                this.dataInputFields[i]['timestamp'] = new Date().toString();
                this.modifiedInputFields.push({
                    dataPointId: this.dataInputFields[i]['dataPointId'],
                    description: this.dataInputFields[i]['description'],
                    units: this.dataInputFields[i]['units'],
                    processValue: this.dataInputFields[i]['processValue'],
                    timestamp: this.dataInputFields[i]['timestamp']

                })
            }
        }
        this.updateRecord(this.modifiedInputFields, this.curRecord);
    }

    // add the dataaray to the mongo record
    updateRecord(dataarray, record) {
        CollectedData.update({ _id: record._id }, { $set: { data: dataarray } })
    }

    isValid(ref) {


    }


    isAboveLowerLimit(ref) {
        if (ref['lowerLimit']) {
            if (ref['processValue'] >= ref['lowerLimit']) {
                return true;
            } else {
                return false;
            }
        } else { return true; }

    }

    isBelowUpperLimit(ref) {
        if (ref['upperLimit']) {
            if (ref['processValue'] <= ref['upperLimit']) {
                return true;
            } else {
                return false;
            }
        } else { return true; }

    }

    onFocus(ref) {
        // console.log('focused: ' + ref['description'])
        ref['focused'] = true;
    }

    onBlur(ref) {
        delete ref['focused']
        
    }

}