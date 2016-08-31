import { Pipe } from '@angular/core';
import { Meteor } from 'meteor/meteor';

@Pipe({
    name: 'nonbreaking'
})
export class NonBreaking {

    transform(inputarray) {
        var outputarray = []
        if (inputarray) {
            outputarray = inputarray.replace(' ', '\xa0')
            while (outputarray.indexOf(' ') > -1) {
                outputarray = outputarray.replace(' ', '\xa0')
            }

            return outputarray;
        }
        console.log(outputarray)

    }
}