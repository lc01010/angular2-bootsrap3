import {Component,Input,Directive} from 'angular2/core';
import {NgHeader,NgAside,NgFooter} from '../layout/layout';
import {CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/common';



import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
import {Select} from 'ng2-select/ng2-select';


@Component({
    selector: '[ng-content]',
    template: `<h1>My First Angular 2 App</h1>
      <div>
        <div class='wrapper'>
          <div class='container' [dragula]='"first-bag"'>
            <div>Drag/drop item 1</div>
          </div>
          <div class='container' [dragula]='"first-bag"'>
            <div>Drag/drop item 2</div>
          </div>
        </div>
      </div>
    `,
    directives: [Dragula],
    viewProviders: [DragulaService],
    styles: [`
    .wrapper {
      display: table;
    }
    .container {
      display: table-cell;
      background-color: rgba(255, 255, 255, 0.2);
      width: 50%;
    }
    .container:nth-child(odd) {
      background-color: rgba(0, 0, 0, 0.2);
    }
    .container div,
    .gu-mirror {
      margin: 10px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      transition: opacity 0.4s ease-in-out;
    }
    .container div {
      cursor: move;
      cursor: grab;
      cursor: -moz-grab;
      cursor: -webkit-grab;
    }
    .gu-mirror {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
    `]
})
export class NgContent { }


@Component({
  selector: 'my-app',
  templateUrl: './app/pages/layout/content.html',
  directives: [NgHeader,NgAside,NgContent,NgFooter]   
})
export class dragula{ 
    constructor() {
    }
}

