System.register(['angular2/platform/browser', '../pages/staticTable/table'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, table_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (table_1_1) {
                table_1 = table_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(table_1.table);
        }
    }
});
//# sourceMappingURL=staticTable.js.map