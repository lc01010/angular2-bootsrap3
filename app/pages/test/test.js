System.register(['angular2/core', '../layout/layout', 'angular2/common', 'ng2-bootstrap/ng2-bootstrap', 'angular2-modal'], function(exports_1, context_1) {
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
    var core_1, layout_1, common_1, ng2_bootstrap_1, angular2_modal_1;
    var NgContent, test;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (layout_1_1) {
                layout_1 = layout_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            }],
        execute: function() {
            NgContent = (function () {
                function NgContent(modal) {
                    this.modal = modal;
                    this.alerts = [
                        {
                            type: 'danger',
                            msg: 'Oh snap! Change a few things up and try submitting again.'
                        },
                        {
                            type: 'success',
                            msg: 'Well done! You successfully read this important alert message.',
                            closable: true
                        }
                    ];
                }
                NgContent.prototype.closeAlert = function (i) {
                    this.alerts.splice(i, 1);
                };
                NgContent.prototype.addAlert = function () {
                    this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
                };
                NgContent.prototype.showModal = function () {
                    var d = this.modal.alert()
                        .title('Hello World')
                        .body('In Angular 2')
                        .open();
                };
                NgContent = __decorate([
                    core_1.Component({
                        selector: '[ng-content]',
                        templateUrl: "./app/pages/test/test.html",
                        directives: [ng2_bootstrap_1.AlertComponent, common_1.CORE_DIRECTIVES],
                        providers: [angular2_modal_1.Modal]
                    }), 
                    __metadata('design:paramtypes', [angular2_modal_1.Modal])
                ], NgContent);
                return NgContent;
            }());
            exports_1("NgContent", NgContent);
            test = (function () {
                function test() {
                }
                test = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/pages/layout/content.html',
                        directives: [layout_1.NgHeader, layout_1.NgAside, NgContent, layout_1.NgFooter]
                    }), 
                    __metadata('design:paramtypes', [])
                ], test);
                return test;
            }());
            exports_1("test", test);
        }
    }
});
//# sourceMappingURL=test.js.map