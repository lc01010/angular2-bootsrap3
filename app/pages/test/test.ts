import {Component} from 'angular2/core';
import {NgHeader,NgAside,NgFooter} from '../layout/layout';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Alert,ACCORDION_DIRECTIVES,DROPDOWN_DIRECTIVES,TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { Modal} from 'angular2-modal';

@Component({
  selector: '[ng-content]',
  templateUrl:"./app/pages/test/test.html",
  directives: [Alert, CORE_DIRECTIVES],
  providers: [Modal]
})
export class NgContent {
  
  constructor(private modal: Modal){
      
  }
  public alerts:Array<Object> = [
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

  public closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }

  public addAlert():void {
    this.alerts.push({msg: 'Another alert!', type: 'warning', closable: true});
  }
  public showModal():void{
    let d = this.modal.alert()
    .title('Hello World')
    .body('In Angular 2')
    .open();
  }
}


@Component({
  selector: 'my-app',
  templateUrl: './app/pages/layout/content.html',
  directives: [NgHeader,NgAside,NgContent,NgFooter]   
})
export class test{ 
    constructor() {
    }
}