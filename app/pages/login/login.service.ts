import {Injectable}     from 'angular2/core';
import {Http, Response,HTTP_PROVIDERS,Headers, RequestOptions} from 'angular2/http';
import {User}           from './user';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class userService {
  constructor (private http: Http) {}

  private _heroesUrl = '/login';  // URL to web api
  private _headers = new Headers({ 'Content-Type': 'application/json' });
  // userLogin (param:string) {
  //   let body = JSON.stringify({ param});
  //   let options = new RequestOptions({ headers: this._headers });
  //   return this.http.post(this._heroesUrl,body,options)
  //                  .map(res =>  <User> res.json().data)
  //                  .do(data => console.log(data)) // eyeball results in the console
  //                  .catch(this.handleError)
  // }
  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}