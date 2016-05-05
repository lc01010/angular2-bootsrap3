System.register(['angular2/core', '../layout/layout', 'angular2/common', 'ng2-select/ng2-select', './data'], function(exports_1, context_1) {
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
    var core_1, layout_1, common_1, ng2_select_1, data_1;
    var NgContent, select;
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
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            },
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            // import {handsontable, HotTable} from 'ng2-handsontable/components/index'
            NgContent = (function () {
                function NgContent() {
                    this.data = data_1.genData(10);
                    this.colHeaders = ['ID', 'First Name', 'Last Name', 'Address',
                        'Favorite food', 'Price', 'Is active'];
                    this.columns = [
                        {
                            data: 'id'
                        },
                        {
                            data: 'name.first',
                            renderer: 'text',
                            readOnly: true
                        },
                        {
                            data: 'name.last',
                            readOnly: true
                        },
                        {
                            data: 'address'
                        },
                        {
                            data: 'product.description',
                            source: 'product.options',
                            optionField: 'description',
                            type: 'autocomplete',
                            strict: false,
                            visibleRows: 4
                        },
                        {
                            data: 'price',
                            type: 'numeric',
                            format: '$ 0,0.00'
                        },
                        {
                            data: 'isActive',
                            type: 'checkbox',
                            checkedTemplate: 'Yes',
                            uncheckedTemplate: 'No'
                        }
                    ];
                    this.colWidths = [null, null, null, null, null, null, 30];
                    this.options = {
                        stretchH: 'all',
                        columnSorting: true,
                        contextMenu: [
                            'row_above', 'row_below', 'remove_row'
                        ]
                    };
                }
                NgContent.prototype.afterChange = function (e) {
                    console.log(e);
                };
                NgContent.prototype.afterOnCellMouseDown = function (e) {
                    console.log(e);
                };
                NgContent = __decorate([
                    core_1.Component({
                        selector: '[ng-content]',
                        templateUrl: './app/pages/select/select.html',
                        directives: [ng2_select_1.Select, ng2_select_1.SELECT_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgContent);
                return NgContent;
            }());
            exports_1("NgContent", NgContent);
            select = (function () {
                function select() {
                }
                select = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/pages/layout/content.html',
                        directives: [layout_1.NgHeader, layout_1.NgAside, NgContent, layout_1.NgFooter]
                    }), 
                    __metadata('design:paramtypes', [])
                ], select);
                return select;
            }());
            exports_1("select", select);
        }
    }
});
//# sourceMappingURL=select.js.map