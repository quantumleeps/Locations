import { CollectedDataPoint } from './collected-data-point.interface';

export interface CollectedDataRecord {
    _id?: string;
    locationId?: string;
    data?: CollectedDataPoint[];
    submittedTime?: string;
}