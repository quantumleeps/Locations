import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

import { Location } from '../../../../both/models/location.model';
import { DataGroup } from '../../../../both/models/data-group.model';
import { DataPoint } from '../../../../both/models/data-point.model';

import { Locations } from '../../../../both/collections/locations.collection';
import { DataGroups } from '../../../../both/collections/data-groups.collection';
import { DataPoints } from '../../../../both/collections/data-points.collection';


import template from './locations-list.component.html';

@Component({
    selector: 'locations-list',
    template,
    styles: [`
        .location-block {
            margin-top: 20px;
            padding: 10px;
            border: 2px solid black;
        }
    `]
})

export class LocationsList implements OnInit, OnDestroy {

    locations: Observable<Location[]>;
    locationsSub: Subscription;

    dataGroups: Observable<DataGroup[]>;
    dataGroupsSub: Subscription;

    dataPoints: Observable<DataPoint[]>;
    dataPointsSub: Subscription;

    areYouSureToggle: boolean = false;


    ngOnInit() {

        this.locations = Locations.find({}).zone()
        this.locationsSub = MeteorObservable.subscribe('parties').subscribe();

        this.dataGroups = DataGroups.find({}).zone()
        this.dataGroupsSub = MeteorObservable.subscribe('data-groups').subscribe();

        this.dataPoints = DataPoints.find({}).zone()
        this.dataPointsSub = MeteorObservable.subscribe('data-points').subscribe();

    }

    deleteButtonClick() {
        this.areYouSureToggle = true;
    }

    deleteLocation(current) {

        // delete the location
        Locations.remove(current);

        // delete any of its datagroups (cleanup)
        var temp1 = DataGroups.find({ locationId: current }).fetch();
        for(var i = 0; i<temp1.length; i++) {
            console.log('group id: ', temp1[i])
            DataGroups.remove(temp1[i]['_id'])
        }

        // delete any of its datapoints (cleanup)
        var temp2 = DataPoints.find({ locationId: current }).fetch();
        for(var i = 0; i<temp2.length; i++) {
            console.log('data id: ', temp2[i])
            DataPoints.remove(temp2[i]['_id'])
        }

        // reset the toggle
        this.areYouSureToggle = false;
    }
    cancelDelete() {
        this.areYouSureToggle = false;
    }

    ngOnDestroy() {
        this.locationsSub.unsubscribe();
        this.dataGroupsSub.unsubscribe();
        this.dataPointsSub.unsubscribe();
    }
}
