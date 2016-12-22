import { CollectionObject } from './collection-object.model';

export interface Location extends CollectionObject {
    name: string;
    country: string;
    shortName?: string;
    region?: string;
}