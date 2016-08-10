
import { Locations } from '../../../both/collections/locations.collection';

export function loadLocations() {

    if (Locations.find().count() === 0) {
        const locations = [
        {name: "Blue Hills", region: "Nassau", country: "Bahamas"},
        {name: "Northside Waterworks (NSWW)", region: "West End - Grand Cayman", country: "Cayman Islands"}
    ];

    locations.forEach((location) => Locations.insert(location));

    }

}