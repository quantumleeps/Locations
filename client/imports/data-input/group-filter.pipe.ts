import { Pipe } from '@angular/core';
import { Meteor } from 'meteor/meteor';

@Pipe({
    name: 'groupfilter'
})
export class GroupFilter {


    transform(inputarray, value) {
       var outputarray = []
       if(inputarray) {
            for (var i = 0; i<inputarray.length; i++) {
                if (inputarray[i]['dataGroupId'] === value) {
                    outputarray.push(inputarray[i])
                }
            }
            return outputarray;
       }

    }
}