import { CollectionObject } from './collection-object.model';
import { CollectedDataPoint } from './collected-data-point.model';

export interface CollectedDataRecord extends CollectionObject {
    locationId?: string;
    data?: CollectedDataPoint[];
    submittedTime?: string;
}