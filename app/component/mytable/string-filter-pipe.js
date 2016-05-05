System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var StringFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * A simple string filter, since ng2 does not yet have a filter pipe built in.
             */
            StringFilterPipe = (function () {
                function StringFilterPipe() {
                }
                StringFilterPipe.prototype.transform = function (value, args) {
                    var q = args[0];
                    if (!q || q === '') {
                        return value;
                    }
                    function CheckIfPrime(value, index, ar) {
                        var success = false;
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (isNaN(value[item])) {
                                success = -1 < value[item].toLowerCase().indexOf(q.toLowerCase());
                            }
                            else {
                                success = -1 < value[item].toString().indexOf(q.toLowerCase());
                            }
                            if (success) {
                                break;
                            }
                        }
                        return success;
                    }
                    return value.filter(CheckIfPrime);
                };
                StringFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'stringFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], StringFilterPipe);
                return StringFilterPipe;
            }());
            exports_1("StringFilterPipe", StringFilterPipe);
        }
    }
});
//# sourceMappingURL=string-filter-pipe.js.map