import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { SortByDrawOrder } from './sortbydraworder.pipe';
import { MeteorComponent } from 'angular2-meteor';

import template from './testing.html';

@Component({
    selector: 'testing',
    template,
    pipes: [SortByDrawOrder],
    directives: [ROUTER_DIRECTIVES]
})

export class Testing extends MeteorComponent implements OnInit {

    people = [
        {
            drawOrder: 4,
            name: "Bill",
            value: 23
        }, {
            drawOrder: 1,
            name: "Bob",
            value: 224
        }, {
            drawOrder: 2,
            name: "Sally",
            value: 23423
        }, {
            drawOrder: 3,
            name: "Johnny 5",
            value: 12
        }
    ]

    constructor(private router: Router, private route: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.sortIt(this.people)
        for (var i = 0; i < this.people.length; i++ ) {
            this.people[i]['drawOrder'] = i;
        }
        // console.log(this.people)
    }

    sortIt(ref) {
        ref.sort(function(a,b) {
            if (a.drawOrder > b.drawOrder) {
                return 1;
            }
            if (a.drawOrder < b.drawOrder) {
                return -1;
            }
            // a must be equal to b
            return 0;
        })
    }

    //draw orders start at 0
    decreaseDrawOrder(i) {
        if (i === 0) {
            // can't do anything'
        } else {
            this.people[(i-1)]['drawOrder']++;
            this.people[i]['drawOrder']--;
            this.sortIt(this.people);
        }
    }

    increaseDrawOrder(i) {
        if (i === (this.people.length-1)) {
        } else {
            this.people[(i+1)]['drawOrder']--;
            this.people[i]['drawOrder']++;
            this.sortIt(this.people)
        }
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