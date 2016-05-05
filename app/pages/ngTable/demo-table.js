System.register(['angular2/core', '../layout/layout', '../../component/mytable/table', './data.server'], function(exports_1, context_1) {
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
    var core_1, layout_1, table_1, data_server_1;
    var NgContent, demotable;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (layout_1_1) {
                layout_1 = layout_1_1;
            },
            function (table_1_1) {
                table_1 = table_1_1;
            },
            function (data_server_1_1) {
                data_server_1 = data_server_1_1;
            }],
        execute: function() {
            NgContent = (function () {
                function NgContent(_dataserver) {
                    this._dataserver = _dataserver;
                    this.tableconfig = {
                        url: './app/pages/ngTable/user-list.json',
                        filter: '',
                        page: 1,
                        pagesize: 1,
                        rows: [],
                        total: 0
                    };
                    this.columns = [
                        { "name": 'id', 'sort': true },
                        { "name": 'name', 'sort': true },
                    ];
                    this.panelTitle = 'defaultTable';
                    this.panelDefaultClass = {
                        'panel-default': true,
                    };
                }
                NgContent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this._dataserver.getDatas().subscribe(function (res) {
                        _this.tableconfig = res;
                    });
                    this._dataserver.loadDataGrid(this.tableconfig);
                };
                NgContent.prototype.loadDataList = function (tc) {
                    this._dataserver.loadDataGrid(tc);
                };
                NgContent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                NgContent = __decorate([
                    core_1.Component({
                        selector: '[ng-content]',
                        templateUrl: "./app/pages/ngTable/demo-table.html",
                        directives: [table_1.NgTable],
                        providers: [data_server_1.DataServer],
                    }), 
                    __metadata('design:paramtypes', [data_server_1.DataServer])
                ], NgContent);
                return NgContent;
            }());
            exports_1("NgContent", NgContent);
            demotable = (function () {
                function demotable() {
                }
                demotable = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/pages/layout/content.html',
                        directives: [layout_1.NgHeader, layout_1.NgAside, NgContent, layout_1.NgFooter]
                    }), 
                    __metadata('design:paramtypes', [])
                ], demotable);
                return demotable;
            }());
            exports_1("demotable", demotable);
        }
    }
});
//# sourceMappingURL=demo-table.js.map