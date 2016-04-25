System.register(['angular2/platform/browser', '../pages/dragula/dragula'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, dragula_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (dragula_1_1) {
                dragula_1 = dragula_1_1;
            }],
        execute: function() {
            // import {NgHeader,NgAside,NgContent,NgFooter} from '../pages/layout/layout';
            browser_1.bootstrap(dragula_1.dragula);
        }
    }
});
//# sourceMappingURL=dragula.js.map