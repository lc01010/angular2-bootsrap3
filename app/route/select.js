System.register(['angular2/platform/browser', '../pages/select/select'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, select_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (select_1_1) {
                select_1 = select_1_1;
            }],
        execute: function() {
            // import {NgHeader,NgAside,NgContent,NgFooter} from '../pages/layout/layout';
            browser_1.bootstrap(select_1.select);
        }
    }
});
//# sourceMappingURL=select.js.map