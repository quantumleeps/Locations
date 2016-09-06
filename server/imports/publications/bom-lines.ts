import { BOMLines} from '../../../both/collections/bom-lines.collection';
import {Meteor} from 'meteor/meteor';

function buildQuery(rowId?: string): Object {
  const isAvailable = {};

  if (rowId) {
    return { _id: rowId };
  }
}

Meteor.publish('bom-lines', function() {
  return BOMLines.find();
});

Meteor.publish('bom-line', function(rowId: string) {
  return BOMLines.find(buildQuery(rowId));
});