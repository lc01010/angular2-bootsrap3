System.register(['angular2/platform/browser', '../pages/ngTable/demo-table', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, demo_table_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (demo_table_1_1) {
                demo_table_1 = demo_table_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(demo_table_1.demotable, [http_1.HTTP_PROVIDERS])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=ngTable.js.map