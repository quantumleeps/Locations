import { CollectionObject } from './collection-object.model';

export interface DataPoint extends CollectionObject {
    description: string;
    units: string;
    lowerLimit?: string;
    upperLimit?: string;
    metaTags?: string[];
    processTag?: string;
    locationId: string;
    dataGroupId: string;
}