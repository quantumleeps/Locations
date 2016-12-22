import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { DataPoint } from '../models/data-point.model';

export const DataPoints = new MongoObservable.Collection<DataPoint>('data-points');