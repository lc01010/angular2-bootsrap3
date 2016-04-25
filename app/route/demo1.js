System.register(['angular2/platform/browser', '../pages/demo1/demo1'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, demo1_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (demo1_1_1) {
                demo1_1 = demo1_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(demo1_1.demo1);
        }
    }
});
//# sourceMappingURL=demo1.js.map