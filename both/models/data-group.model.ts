import { CollectionObject } from './collection-object.model';

export interface DataGroup extends CollectionObject {
    name: string;
    locationId?: string;
}