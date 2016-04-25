System.register(['angular2/core', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, ng2_bootstrap_1;
    var NgHeader, NgAside, NgFooter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            NgHeader = (function () {
                function NgHeader() {
                }
                NgHeader = __decorate([
                    core_1.Component({
                        selector: '[ng-header]',
                        templateUrl: './app/pages/layout/header.html',
                        directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.CORE_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgHeader);
                return NgHeader;
            }());
            exports_1("NgHeader", NgHeader);
            NgAside = (function () {
                function NgAside() {
                }
                NgAside = __decorate([
                    core_1.Component({
                        selector: '[ng-aside]',
                        directives: [common_1.CORE_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES],
                        templateUrl: './app/pages/layout/aside.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgAside);
                return NgAside;
            }());
            exports_1("NgAside", NgAside);
            NgFooter = (function () {
                function NgFooter() {
                }
                NgFooter = __decorate([
                    core_1.Component({
                        selector: '[ng-footer]',
                        templateUrl: './app/pages/layout/footer.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgFooter);
                return NgFooter;
            }());
            exports_1("NgFooter", NgFooter);
        }
    }
});
//# sourceMappingURL=layout.js.map