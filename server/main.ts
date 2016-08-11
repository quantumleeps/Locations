import { loadLocations } from './imports/fixtures/locations';
import { Meteor } from 'meteor/meteor';

import './imports/publications/locations';
import './imports/publications/data-groups';

Meteor.startup(() => {
    loadLocations();
})
