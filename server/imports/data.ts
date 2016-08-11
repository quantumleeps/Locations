import { Locations } from '../../both/collections/locations.collection';
import { DataGroups } from '../../both/collections/data-groups.collection';


export function loadData () {
    console.log(Locations.find().count())
}