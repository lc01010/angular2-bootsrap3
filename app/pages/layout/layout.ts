import {Component, Directive} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {DROPDOWN_DIRECTIVES,TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
  selector: '[ng-header]',
  templateUrl: './app/pages/layout/header.html',
  directives: [DROPDOWN_DIRECTIVES,CORE_DIRECTIVES],   
})

export class NgHeader {

}

@Component({
  selector: '[ng-aside]',
  directives: [CORE_DIRECTIVES,DROPDOWN_DIRECTIVES],
  templateUrl: './app/pages/layout/aside.html',
  //   directives: [],   
})
export class NgAside {

}


@Component({
  selector: '[ng-footer]',
  templateUrl: './app/pages/layout/footer.html',
  //   directives: [],   
})
export class NgFooter {

}