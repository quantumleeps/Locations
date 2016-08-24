import { loadLocations } from './imports/fixtures/locations';
import { Meteor } from 'meteor/meteor';

import './imports/publications/locations';
import './imports/publications/data-groups';
import './imports/publications/data-points';
import './imports/publications/collected-data';

Meteor.startup(() => {
    loadLocations();
})
