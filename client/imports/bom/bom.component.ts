import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import { BOMInput } from './bom-input.component';

import { BOMLines } from '../../../both/collections/bom-lines.collection';


import template from './bom.component.html';

@Component({
    selector: 'bom-list',
    template,
    directives: [BOMInput],
    styles: []
})

export class BOMList extends MeteorComponent implements OnInit {

    bomLines: any;
    savedBomLines: any;

    constructor() {
        super();
    }

    ngOnInit() {

        this.subscribe('bom-lines', () => {
            this.bomLines = BOMLines.find();
            // this.savedBomLines = this.bomLines.fetch()
            // console.log(this.bomLines);
        })

    }

    deleteLine(line) {
        BOMLines.remove(line._id);
    }
    deleteAll() {
        console.log(this.bomLines)
        this.bomLines.forEach(function(obj) {
            BOMLines.remove(obj._id)
        })
        
        this.subscribe('bom-lines', () => {
            this.bomLines = BOMLines.find();
        })
    }

}
