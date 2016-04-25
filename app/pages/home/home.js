System.register(['angular2/core', '../layout/layout', 'ng2-bootstrap/ng2-bootstrap'], function(exports_1, context_1) {
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
    var core_1, layout_1, ng2_bootstrap_1;
    var NgContent, home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (layout_1_1) {
                layout_1 = layout_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            NgContent = (function () {
                function NgContent() {
                }
                NgContent = __decorate([
                    core_1.Component({
                        selector: '[ng-content]',
                        templateUrl: './app/pages/home/home.html',
                        directives: [ng2_bootstrap_1.TAB_DIRECTIVES],
                        styleUrls: ["./app/pages/home/home.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgContent);
                return NgContent;
            }());
            exports_1("NgContent", NgContent);
            home = (function () {
                function home() {
                }
                home = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/pages/layout/content.html',
                        directives: [layout_1.NgHeader, layout_1.NgAside, NgContent, layout_1.NgFooter]
                    }), 
                    __metadata('design:paramtypes', [])
                ], home);
                return home;
            }());
            exports_1("home", home);
        }
    }
});
// @Component({
//     selector: 'child',
//     template: `
//         <h2>child {{content}}</h2>
//     `
// })
// class Child {
//     @Input() content:string;
// }
// @Component({
//     selector: 'my-app',
//     directives: [Child],
//     template: `
//         <h1>App</h1>
//         <child [content]="i"></child>
//     `
// })
// export class home {
//     i:number = 0;
//     constructor() {
//         setInterval(()=> {
//             this.i++;
//         }, 1000)
//     }
// } 
//# sourceMappingURL=home.js.map