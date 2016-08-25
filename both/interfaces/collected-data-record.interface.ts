import { CollectedDataPoint } from './collected-data-point.interface';

export interface CollectedDataRecord {
    _id?: string;
    data?: CollectedDataPoint[];
    submittedTime?: string;
}