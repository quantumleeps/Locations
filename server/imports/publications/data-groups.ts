import { DataGroups } from '../../../both/collections/data-groups.collection';
import { Meteor } from 'meteor/meteor';

Meteor.publish('data-groups', () => DataGroups.find(
    
    
    // {name:{$regex:"s", $options: "$i"}}
    
    ));