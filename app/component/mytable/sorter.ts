export class Sorter {

    direction: number;
    key: string;
    column: any;

    constructor() {
        this.direction = 1;
    }

    sort(column: any, data: any[]) {
        this.column = column;
        if (this.column.order) {

            this.column.order = -this.column.order
        }
        else {
            this.column.order = 1
        }


        this.key = column.name;


        data.sort((a, b) => {
            if (a[this.key] === b[this.key]) {
                return 0;
            }
            else if (a[this.key] > b[this.key]) {

                return this.column.order;
            }
            else {
                return -this.column.order;
            }
        });

    }

}
