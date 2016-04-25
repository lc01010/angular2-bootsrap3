import {Component,Input,Directive} from 'angular2/core';
import {NgHeader,NgAside,NgFooter} from '../layout/layout';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ACCORDION_DIRECTIVES,DROPDOWN_DIRECTIVES,TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  selector: '[ng-content]',

  templateUrl: './app/pages/home/home.html',
  directives: [TAB_DIRECTIVES],   
  styleUrls:["./app/pages/home/home.css"]
})
export class NgContent {

}


@Component({
  selector: 'my-app',
  templateUrl: './app/pages/layout/content.html',
  directives: [NgHeader,NgAside,NgContent,NgFooter]   
})
export class home{ 
    constructor() {
    }
}


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