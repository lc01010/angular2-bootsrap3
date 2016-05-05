import {Component, Input, Directive} from 'angular2/core';
import {NgHeader, NgAside, NgFooter} from '../layout/layout';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';

import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
import {Select, SELECT_DIRECTIVES} from 'ng2-select/ng2-select';
import {genData} from './data';
// import {handsontable, HotTable} from 'ng2-handsontable/components/index'
@Component({
    selector: '[ng-content]',

    templateUrl: './app/pages/select/select.html',
    directives: [Select, SELECT_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
    //   styleUrls:["./app/pages/home/home.css"]
})
export class NgContent {
    private data: Array<any> = genData(10);
    private colHeaders: Array<string> = ['ID', 'First Name', 'Last Name', 'Address',
        'Favorite food', 'Price', 'Is active'];
    private columns: Array<any> = [
        {
            data: 'id'
        },
        {
            data: 'name.first',
            renderer: 'text',
            readOnly: true
        },
        {
            data: 'name.last',
            readOnly: true
        },
        {
            data: 'address'
        },
        {
            data: 'product.description',
            source: 'product.options',
            optionField: 'description',
            type: 'autocomplete',
            strict: false,
            visibleRows: 4
        },
        {
            data: 'price',
            type: 'numeric',
            format: '$ 0,0.00'
        },
        {
            data: 'isActive',
            type: 'checkbox',
            checkedTemplate: 'Yes',
            uncheckedTemplate: 'No'
        }
    ];
    private colWidths: Array<number> = [null, null, null, null, null, null, 30];
    private options: any = {
        stretchH: 'all',
        columnSorting: true,
        contextMenu: [
            'row_above', 'row_below', 'remove_row'
        ]
    };

    private afterChange(e: any) {
        console.log(e);
    }

    private afterOnCellMouseDown(e: any) {
        console.log(e);
    }
}


@Component({
    selector: 'my-app',
    templateUrl: './app/pages/layout/content.html',
    directives: [NgHeader, NgAside, NgContent, NgFooter]
})
export class select {
    constructor() {
    }
}
