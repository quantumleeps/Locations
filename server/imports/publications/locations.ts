import {Locations} from '../../../both/collections/locations.collection';
import {Meteor} from 'meteor/meteor';

function buildQuery(locationId?: string): Object {
  const isAvailable = {};

  if (locationId) {
    return { _id: locationId };
  }
}

Meteor.publish('locations', function() {
  return Locations.find();
});

Meteor.publish('location', function(locationId: string) {
  return Locations.find(buildQuery(locationId));
});