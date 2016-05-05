import {Component, Input, Directive, ViewChild, OnInit} from 'angular2/core';
import {NgHeader, NgAside, NgFooter} from '../layout/layout';
// import {NgPanel} from '../panel/panel';
import {NgTable} from '../../component/mytable/table';
import {tableModel} from '../../component/mytable/my-table-model';
import {DataServer} from './data.server';

@Component({
    selector: '[ng-content]',

    templateUrl: "./app/pages/ngTable/demo-table.html",
    directives: [NgTable],

    providers: [DataServer],
    //pipes: [PaginatePipe, StringFilterPipe, tableSorter],

})
export class NgContent implements OnInit {

    tableconfig: tableModel = {
        url: './app/pages/ngTable/user-list.json',
        filter: '',
        page: 1,
        pagesize: 1,
        rows: [],
        total: 0
    }
    columns: any[] = [
        { "name": 'id', 'sort': true },
        { "name": 'name', 'sort': true },
    ]

    panelTitle: string = 'defaultTable';
    panelDefaultClass = {
        'panel-default': true,
    }
    subscription
    constructor(private _dataserver: DataServer) {

    }
    ngOnInit() {
        this.subscription = this._dataserver.getDatas().subscribe(res => {
            this.tableconfig = res;
            
        });
        this._dataserver.loadDataGrid(this.tableconfig);
    }
    loadDataList(tc) {
        this._dataserver.loadDataGrid(tc);
    }

    ngOnDestroy() {

        this.subscription.unsubscribe();
    }
}
@Component({
    selector: 'my-app',
    templateUrl: './app/pages/layout/content.html',
    directives: [NgHeader, NgAside, NgContent, NgFooter]
})
export class demotable {
    constructor() {
    }
}




