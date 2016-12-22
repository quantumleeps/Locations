import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Location } from '../models/location.model';

export const Locations = new MongoObservable.Collection<Location>('locations');