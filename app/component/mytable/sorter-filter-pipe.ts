import {Pipe} from "angular2/core";
import {Sorter} from "./sorter";
@Pipe({ name: 'sorter' })
export class tableSorter {
    sorter = new Sorter();
    transform(value, args) {

        let q = args[0];

        if (!q || q === '') {
            return value;
        }
        if (!q.sort) {
            return value;
        }

        this.sorter.sort(q, value);

        return [...value];

    }
}