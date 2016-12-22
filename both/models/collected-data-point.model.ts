import { CollectionObject } from './collection-object.model';

export interface CollectedDataPoint extends CollectionObject {
    dataPointId: string;
    timestamp: string;
    value: string;
    isValid?: boolean;
    rangeOverridden?: boolean;
    skipped?: boolean;
}