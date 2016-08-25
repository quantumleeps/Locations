export interface CollectedDataPoint {
    dataPointId: string;
    timestamp: string;
    value: string;
    isValid?: boolean;
    rangeOverridden?: boolean;
    skipped?: boolean;
}