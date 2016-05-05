System.register(['angular2/core', 'rxjs/Rx', 'rxjs/Subject', 'angular2/http', '../../component/mytable/my-table-model'], function(exports_1, context_1) {
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
    var core_1, Subject_1, http_1, my_table_model_1;
    var DataServer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (my_table_model_1_1) {
                my_table_model_1 = my_table_model_1_1;
            }],
        execute: function() {
            DataServer = (function () {
                function DataServer(_http) {
                    var _this = this;
                    this._http = _http;
                    this.dispatcher = new Subject_1.Subject();
                    this._datas = new Subject_1.Subject();
                    this.dispatcher.subscribe(function (action) { return _this.handleAction(action); });
                }
                DataServer.prototype.handleAction = function (action) {
                    var _this = this;
                    if (action) {
                        this._http
                            .get(action.url)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (res) {
                            var d = _this.tableListReducer(res, action);
                            _this._datas.next(d);
                        });
                    }
                };
                DataServer.prototype.getDatas = function () {
                    return this._datas;
                };
                DataServer.prototype.tableListReducer = function (n, tableconfig) {
                    return new my_table_model_1.tableModel(n.total, n.page, n.pagesize, n.rows, n.filter, tableconfig.url);
                };
                DataServer.prototype.loadDataGrid = function (action) {
                    this.dispatcher.next(action);
                };
                DataServer = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataServer);
                return DataServer;
            }());
            exports_1("DataServer", DataServer);
        }
    }
});
//# sourceMappingURL=data.server.js.map