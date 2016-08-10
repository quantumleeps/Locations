import { loadLocations } from './imports/fixtures/locations';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    loadLocations();
})