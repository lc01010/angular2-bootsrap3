System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tableModel;
    return {
        setters:[],
        execute: function() {
            tableModel = (function () {
                function tableModel(total, page, pagesize, rows, filter, url) {
                    this.total = total;
                    this.page = page;
                    this.pagesize = pagesize;
                    this.rows = rows;
                    this.filter = filter;
                    this.url = url;
                }
                return tableModel;
            }());
            exports_1("tableModel", tableModel);
        }
    }
});
//# sourceMappingURL=my-table-model.js.map