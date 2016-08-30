import { Pipe } from '@angular/core';
import { Meteor } from 'meteor/meteor';

@Pipe({
    name: 'sortbydraworder'
})
export class SortByDrawOrder {

    transform(inputarray) {
        return inputarray.sort(function (a, b) {
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
}

