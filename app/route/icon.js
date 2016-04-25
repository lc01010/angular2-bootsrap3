System.register(['angular2/platform/browser', '../pages/icon/icon'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, icon_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(icon_1.icon);
        }
    }
});
//# sourceMappingURL=icon.js.map