import {Component, Input, Directive} from 'angular2/core';
@Component({
    selector: 'ng-panel',
    templateUrl: './app/pages/panel/panel.html',
    //   directives: [NgHeader, NgAside, NgContent, NgFooter]
})
export class NgPanel {
    title: string = 'Title';
    defaultClass={
        'panel-default':true,
    }

    constructor() {

    }
}
