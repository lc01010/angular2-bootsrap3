import {Component,Input,Directive} from 'angular2/core';
import {NgHeader,NgAside,NgFooter} from '../layout/layout';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ACCORDION_DIRECTIVES,DROPDOWN_DIRECTIVES,TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  selector: '[ng-content]',

  templateUrl: './app/pages/icon/icon.html',
  directives: [TAB_DIRECTIVES],   
//   styleUrls:["./app/pages/home/home.css"]
})
export class NgContent {

}


@Component({
  selector: 'my-app',
  templateUrl: './app/pages/layout/content.html',
  directives: [NgHeader,NgAside,NgContent,NgFooter]   
})
export class icon{ 
    constructor() {
    }
}
