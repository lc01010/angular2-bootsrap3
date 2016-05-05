import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';

import {Observable} from 'rxjs/Observable';
import {Http,Response} from 'angular2/http';

import {tableModel} from '../../component/mytable/my-table-model';

@Injectable()
export class DataServer{

  private dispatcher = new Subject<any>();
  private _datas = new Subject<tableModel>();

  

  constructor(private _http:Http){
    this.dispatcher.subscribe((action) => this.handleAction(action))
    
  }

  private handleAction(action) {

    if(action) {
        this._http
            .get(action.url)
            .map((res:Response) => res.json())
            .subscribe(res => {
              
              let d = this.tableListReducer(res, action)
              
              this._datas.next(d);
            });
      
    }
  }
  getDatas(){
      return this._datas;
  }
  
  tableListReducer(n,tableconfig){
       
        return new tableModel(n.total,n.page,n.pagesize,n.rows,n.filter,tableconfig.url);
      
  }

  loadDataGrid(action){
    this.dispatcher.next(action);
  }
}