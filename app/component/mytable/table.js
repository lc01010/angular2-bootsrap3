System.register(['angular2/core', 'ng2-pagination', "./string-filter-pipe", "./sorter-filter-pipe", "./my-table-model"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_pagination_1, string_filter_pipe_1, sorter_filter_pipe_1, my_table_model_1;
    var NgTable;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            },
            function (string_filter_pipe_1_1) {
                string_filter_pipe_1 = string_filter_pipe_1_1;
            },
            function (sorter_filter_pipe_1_1) {
                sorter_filter_pipe_1 = sorter_filter_pipe_1_1;
            },
            function (my_table_model_1_1) {
                my_table_model_1 = my_table_model_1_1;
            }],
        execute: function() {
            NgTable = (function () {
                function NgTable() {
                    this.loadDataList = new core_1.EventEmitter();
                    this.rows = [];
                    this.columns = [];
                    this.filter = '';
                    // @Input('sorterColumn')
                    this.sorterColumn = '';
                    this.order = 1; //1:asc,-1:desc\
                    this.pagination = true;
                    this.search = true;
                    this.config = {
                        id: 'staticPaging',
                        itemsPerPage: 10,
                        currentPage: 1,
                    };
                    this.tableClass = {
                        "table": true,
                        "m-b-none": true,
                        "footable-loaded": true,
                        "footable": true,
                        "default": true
                    };
                }
                NgTable.prototype.sort = function (column) {
                    if (column == this.sorterColumn) {
                        this.order = -this.order;
                    }
                    else {
                        this.sorterColumn = column;
                    }
                };
                NgTable.prototype.getPage = function (event) {
                    this.config.currentPage = event;
                    this.data.pagesize = event;
                    this.loadDataList.emit(this.data);
                };
                NgTable.prototype.ngOnInit = function () {
                    console.log(this.data);
                    this.rows = this.data.rows;
                    this.config.itemsPerPage = this.data.pagesize;
                    this.config.currentPage = this.data.page;
                    this.filter = this.data.filter;
                    //  this.config.totalItems = this.data.total;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NgTable.prototype, "loadDataList", void 0);
                __decorate([
                    core_1.Input("datasource"), 
                    __metadata('design:type', my_table_model_1.tableModel)
                ], NgTable.prototype, "data", void 0);
                NgTable = __decorate([
                    core_1.Component({
                        selector: 'ng-table',
                        inputs: ['pagination', 'search', 'data', 'columns', 'rows'],
                        templateUrl: "./app/component/mytable/table.html",
                        directives: [ng2_pagination_1.PaginationControlsCmp],
                        providers: [ng2_pagination_1.PaginationService],
                        pipes: [ng2_pagination_1.PaginatePipe, string_filter_pipe_1.StringFilterPipe, sorter_filter_pipe_1.tableSorter],
                        styleUrls: ["./app/component/mytable/footable.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgTable);
                return NgTable;
            }());
            exports_1("NgTable", NgTable);
        }
    }
});
//# sourceMappingURL=table.js.map