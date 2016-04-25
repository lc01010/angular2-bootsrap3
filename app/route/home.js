System.register(['angular2/platform/browser', '../pages/home/home'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, home_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            }],
        execute: function() {
            // import {NgHeader,NgAside,NgContent,NgFooter} from '../pages/layout/layout';
            browser_1.bootstrap(home_1.home);
        }
    }
});
//# sourceMappingURL=home.js.map