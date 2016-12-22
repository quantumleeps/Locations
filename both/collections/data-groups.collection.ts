import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { DataGroup } from '../models/data-group.model';

export const DataGroups = new MongoObservable.Collection<DataGroup>('data-groups');