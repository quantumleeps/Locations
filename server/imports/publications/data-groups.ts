import { DataGroups } from '../../../both/collections/data-groups.collection';
import { Meteor } from 'meteor/meteor';

function buildQuery(dataGroupId?: string): Object {
  const isAvailable = {};

  if (dataGroupId) {
    return { _id: dataGroupId };
  }
}

Meteor.publish('data-groups', function() {
  return DataGroups.find();
});


Meteor.publish('data-group', function(dataGroupId: string) {
  return DataGroups.find(buildQuery(dataGroupId));
});


// function buildQuery(locationId?: string): Object {
//   const isAvailable = {};

//   if (locationId) {
//     return { _id: locationId };
//   }
// }

// Meteor.publish('locations', function() {
//   return Locations.find();
// });

// Meteor.publish('location', function(locationId: string) {
//   return Locations.find(buildQuery(locationId));
// });