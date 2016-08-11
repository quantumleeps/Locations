import { DataGroups } from '../../../both/collections/data-groups.collection';
import { Meteor } from 'meteor/meteor';

Meteor.publish('data-groups', function() {
  return DataGroups.find();
});