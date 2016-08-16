import { DataPoints } from '../../../both/collections/data-points.collection';
import { Meteor } from 'meteor/meteor';

function buildQuery(dataPointId?: string): Object {
  const isAvailable = {};

  if (dataPointId) {
    return { _id: dataPointId };
  }
}

Meteor.publish('data-points', function() {
  return DataPoints.find();
});

Meteor.publish('data-point', function(dataPointId: string) {
  return DataPoints.find(buildQuery(dataPointId));
});