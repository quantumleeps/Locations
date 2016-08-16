import { Mongo } from 'meteor/mongo';

import { DataGroup } from '../interfaces/data-group.interface';

export const DataGroups = new Mongo.Collection<DataGroup>('data-groups')