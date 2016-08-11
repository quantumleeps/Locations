import { Locations } from '../../../both/collections/locations.collection';
import { Meteor } from 'meteor/meteor';

Meteor.publish('locations', () => Locations.find());