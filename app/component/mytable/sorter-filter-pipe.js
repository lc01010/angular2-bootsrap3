System.register(["angular2/core", "./sorter"], function(exports_1, context_1) {
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
    var core_1, sorter_1;
    var tableSorter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sorter_1_1) {
                sorter_1 = sorter_1_1;
            }],
        execute: function() {
            tableSorter = (function () {
                function tableSorter() {
                    this.sorter = new sorter_1.Sorter();
                }
                tableSorter.prototype.transform = function (value, args) {
                    var q = args[0];
                    if (!q || q === '') {
                        return value;
                    }
                    if (!q.sort) {
                        return value;
                    }
                    this.sorter.sort(q, value);
                    return value.slice();
                };
                tableSorter = __decorate([
                    core_1.Pipe({ name: 'sorter' }), 
                    __metadata('design:paramtypes', [])
                ], tableSorter);
                return tableSorter;
            }());
            exports_1("tableSorter", tableSorter);
        }
    }
});
//# sourceMappingURL=sorter-filter-pipe.js.map