System.register(['angular2/platform/browser', '../pages/test/test'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, test_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (test_1_1) {
                test_1 = test_1_1;
            }],
        execute: function() {
            // import {NgHeader,NgAside,NgContent,NgFooter} from '../pages/layout/layout';
            browser_1.bootstrap(test_1.test);
        }
    }
});
//# sourceMappingURL=test.js.map