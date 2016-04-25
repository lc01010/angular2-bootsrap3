System.register(['angular2/platform/browser', '../pages/portlet/portlet'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, portlet_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (portlet_1_1) {
                portlet_1 = portlet_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(portlet_1.portlet);
        }
    }
});
//# sourceMappingURL=portlet.js.map