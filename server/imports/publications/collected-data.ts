import { CollectedData } from '../../../both/collections/collected-data.collection';
import { Meteor } from 'meteor/meteor';


function buildQuery(recordId?: string): Object {
  const isAvailable = {};

  if (recordId) {
    return { _id: recordId };
  }
}

Meteor.publish('collected-data-records', function() {
  return CollectedData.find();
});

Meteor.publish('collected-data-record', function(recordId: string) {
  return CollectedData.find(buildQuery(recordId));
});