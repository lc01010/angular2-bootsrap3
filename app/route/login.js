System.register(['angular2/platform/browser', '../pages/login/login'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, login_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(login_1.login);
        }
    }
});
//# sourceMappingURL=login.js.map