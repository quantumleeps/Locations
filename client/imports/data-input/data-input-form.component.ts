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
        // console.log(this.curRecord)
        // console.log(this.dataInputFields)
        this.updateRecord(this.dataInputFields, this.curRecord)
    }

    // goal is to add the dataaray to the mongo record
    updateRecord(dataarray,record) {
        // if(!this.curRecord.data) {
        //     CollectedData.update({_id: record._id},{ $push: { data: { $each: dataarray }}})
        //     console.log('nope, no curRecord.data')
        // } else {
            CollectedData.update({_id: record._id},{ $set: { data: dataarray }} ) 
        // }
    }
}