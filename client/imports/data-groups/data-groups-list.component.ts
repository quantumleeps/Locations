import { Component, OnInit, Input } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Locations } from '../../../both/collections/locations.collection';
import { DataGroup } from '../../../both/interfaces/data-group.interface';
import { DataGroups } from '../../../both/collections/data-groups.collection';
import { DataPoints } from '../../../both/collections/data-points.collection';
import { DataGroupsForm } from './data-groups-form.component';
 
import template from './data-groups-list.component.html';

@Component({
    selector: 'data-groups-list',
    template,
    directives: [DataGroupsForm, ROUTER_DIRECTIVES]
})

export class DataGroupsList extends MeteorComponent implements OnInit {

    @Input() curLocation: string;
    dataGroups: Mongo.Cursor<DataGroup>;
    dataPoints: any;

    constructor() {
        super();
    }

    ngOnInit() {

        this.subscribe('data-groups', () => {
            this.dataGroups = DataGroups.find({ "locationId": this.curLocation })
            // this.tempArray = this.dataGroups.map(function (a) {
            //     return a.name
        })

        this.subscribe('data-points', () => {
            this.dataPoints = DataPoints.find({ "locationId": this.curLocation })
            // this.tempArray = this.dataGroups.map(function (a) {
            //     return a.name
        })


    }
    
    duplicateGroup(ref) {
        // console.log(ref)
        var a = {
            name: ref['name'] + " (Copy" + ref['_id']+ ")",
            locationId: ref['locationId']
        }
        var b = "";
        b = DataGroups.insert(a, function(err, doc){
            if(err) {return err}
            return doc;
        });
        // DataGroups.insert()
        // console.log(b)
        this.addDataPointsToNewGroup(b,ref['_id'])
    }

    // need to load all of the datapoints that have the ref's 
    // datagroup
    addDataPointsToNewGroup(newdatagroupid, olddatagroupid) {
        DataPoints.find({ "locationId": this.curLocation, "dataGroupId":  olddatagroupid} ).map(function(n) {
            // console.log(n);
            // for each one, insert a new value into data-points with everything equal tempArray   
            // the dataGroupId--set this to newdatagroupid
            var c = n;
            delete c['_id'];
            c['dataGroupId'] = newdatagroupid;
            // console.log(c);
            DataPoints.insert(c)
        })
    }

    deleteGroup(ref) {
        DataGroups.remove({_id: ref['_id']});
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

    // //draw orders start at 0
    // decreaseDrawOrder(i) {
    //     if (i === 0) {
    //         // can't do anything'
    //     } else {
    //         this.people[(i-1)]['drawOrder']++;
    //         this.people[i]['drawOrder']--;
    //         this.sortIt(this.people);
    //     }
    // }

    // increaseDrawOrder(i) {
    //     if (i === (this.people.length-1)) {
    //     } else {
    //         this.people[(i+1)]['drawOrder']--;
    //         this.people[i]['drawOrder']++;
    //         this.sortIt(this.people)
    //     }
    // }

}



