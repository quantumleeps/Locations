export interface DataPoint {
    id_?: string;
    description: string;
    units: string;
    lowerLimit?: string;
    upperLimit?: string;
    metaTags?: string[];
    processTag?: string;
    locationId: string;
    dataGroupId: string;
}