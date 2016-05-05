System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sorter;
    return {
        setters:[],
        execute: function() {
            Sorter = (function () {
                function Sorter() {
                    this.direction = 1;
                }
                Sorter.prototype.sort = function (column, data) {
                    var _this = this;
                    this.column = column;
                    if (this.column.order) {
                        this.column.order = -this.column.order;
                    }
                    else {
                        this.column.order = 1;
                    }
                    this.key = column.name;
                    data.sort(function (a, b) {
                        if (a[_this.key] === b[_this.key]) {
                            return 0;
                        }
                        else if (a[_this.key] > b[_this.key]) {
                            return _this.column.order;
                        }
                        else {
                            return -_this.column.order;
                        }
                    });
                };
                return Sorter;
            }());
            exports_1("Sorter", Sorter);
        }
    }
});
//# sourceMappingURL=sorter.js.map