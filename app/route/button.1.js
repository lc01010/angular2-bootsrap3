System.register(['angular2/platform/browser', '../pages/button/button'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, button_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(button_1.button);
        }
    }
});
//# sourceMappingURL=button.1.js.map