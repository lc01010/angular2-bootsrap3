import {Component, Input, Directive, OnInit,Output,EventEmitter} from 'angular2/core';
// import {CORE_DIRECTIVES} from 'angular2/common';
import {PaginationControlsCmp, PaginatePipe, PaginationService, IPaginationInstance} from 'ng2-pagination';
import {StringFilterPipe} from "./string-filter-pipe";
import {tableSorter} from "./sorter-filter-pipe";
import {Sorter} from "./sorter";
import {tableModel} from "./my-table-model";


@Component({
  selector: 'ng-table',
  inputs: ['pagination', 'search', 'data', 'columns', 'rows'],
  templateUrl: "./app/component/mytable/table.html",
  directives: [PaginationControlsCmp],
  providers: [PaginationService],
  pipes: [PaginatePipe, StringFilterPipe, tableSorter],
  styleUrls: ["./app/component/mytable/footable.css"]
})
export class NgTable implements OnInit {
  @Output() loadDataList = new EventEmitter();
  @Input("datasource")
  data:tableModel
  rows: any[] = [];
  columns: any[] = [];
  filter: string = '';
  // @Input('sorterColumn')
  sorterColumn: any = '';
  order: number = 1;//1:asc,-1:desc\

  sortcol
  pagination: boolean = true;
  search: boolean = true;
  
  config: IPaginationInstance = {
    id: 'staticPaging',
    itemsPerPage: 10,//当前页显示多少条
    currentPage: 1,//选中第几条
    // totalItems:

  };

  tableClass = {
    "table": true,
    "m-b-none": true,
    "footable-loaded": true,
    "footable": true,
    "default": true
  }
  sort(column) {

    if (column == this.sorterColumn) {
      this.order = -this.order
    } else {
      this.sorterColumn = column;
    }

  }

  getPage(event){
    this.config.currentPage = event;
    this.data.pagesize=event;
    this.loadDataList.emit(this.data);
  }
  constructor() {

  }
  ngOnInit() {
    console.log(this.data);
    this.rows = this.data.rows;
    this.config.itemsPerPage = this.data.pagesize;
    this.config.currentPage = this.data.page;
    this.filter=this.data.filter
    //  this.config.totalItems = this.data.total;
  }
}

