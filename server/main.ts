import { loadLocations } from './imports/fixtures/locations';
import { loadData } from './imports/data';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    loadLocations();
    loadData();
})