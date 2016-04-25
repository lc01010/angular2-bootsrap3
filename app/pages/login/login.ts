import {Component,ViewEncapsulation} from 'angular2/core';
import {NgForm}    from 'angular2/common';


@Component({
  selector: 'my-app',
  templateUrl: './app/pages/login/login.html',
  // directives: [DOM],
  styleUrls:["./app/pages/login/login.css"],
   
})

export class login{ 
    constructor(){
      
    }
    onSubmit(value: string): void {  
      console.log('you submitted value: ', value);
        
      window.location.href="http://localhost:3000/home.html"
    }    
}


