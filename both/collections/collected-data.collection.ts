import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { CollectedDataRecord } from '../models/collected-data-record.model';

export const CollectedData = new MongoObservable.Collection<CollectedDataRecord>('collected-data');