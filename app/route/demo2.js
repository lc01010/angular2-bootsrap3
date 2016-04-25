System.register(['angular2/platform/browser', '../pages/demo2/demo2'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, demo2_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (demo2_1_1) {
                demo2_1 = demo2_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(demo2_1.demo2);
        }
    }
});
//# sourceMappingURL=demo2.js.map