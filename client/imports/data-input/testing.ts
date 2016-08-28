import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MeteorComponent } from 'angular2-meteor';

import template from './testing.html';

@Component({
    selector: 'testing',
    template,
    directives: [ROUTER_DIRECTIVES]
})

export class Testing extends MeteorComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) {
        super();

    }

    ngOnInit() {

        

    }

   
}

// call to query all of the data from a specific data point:

// db['collected-data'].aggregate([
//     { $unwind: "$data"}, {
//         $match: {
//             "data.processValue": {$exists: true},
//             "data.dataPointId": "uf9mcSzQt46A7jKxm"
//         }
//     },{
//         $project: {
//             _id: 0, 
//             "data.timestamp": 1, 
//             "data.processValue": 1, 
//             "data.description": 1, 
//             "data.units": 1, 
//             "data.dataPointId": 1
//         }
//     }]).pretty()


// db['collected-data'].aggregate([
//     { $unwind: "$data"}, {
//         $match: {
//             "data.processValue": {$exists: true},
//             "_id": "AH8vdXysjJGqBsy4k"
//         }
//     },{
//         $project: {
//             _id: 0, 
//             "data.timestamp": 1, 
//             "data.processValue": 1, 
//             "data.description": 1, 
//             "data.units": 1, 
//             "data.dataPointId": 1
//         }
//     }]).pretty()