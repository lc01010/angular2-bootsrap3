import {Pipe} from "angular2/core";

/**
 * A simple string filter, since ng2 does not yet have a filter pipe built in.
 */
@Pipe({
    name: 'stringFilter'
})
export class StringFilterPipe {

    transform(value: string[], args: string[]) {

        let q = args[0];
        if (!q || q === '') {
            return value;
        }
        function CheckIfPrime(value, index, ar) {
            let success = false;
            for (let item of Object.keys(value)) {
                if (isNaN(value[item])) {
                    success = -1 < value[item].toLowerCase().indexOf(q.toLowerCase())
                } else {
                    success = -1 < value[item].toString().indexOf(q.toLowerCase())
                }
                if (success) {
                    break;
                }
            }

            return success;

        }
        return value.filter(CheckIfPrime);

    }
}