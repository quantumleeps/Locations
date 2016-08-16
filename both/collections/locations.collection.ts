import { Mongo } from 'meteor/mongo';
import { Location } from '../interfaces/location.interface';

export const Locations = new Mongo.Collection<Location>('locations')