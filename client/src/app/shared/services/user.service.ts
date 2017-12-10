import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { User } from './../models/user.model';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  private baseUrl = `${environment.apiUrl}/api/user`;
  private headers = new Headers({ 'Contetn-type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  signup(user):Observable<User> {
    return this.http.post(`${environment.apiUrl}/api/auth/signup`,user, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  protected handleError(error: Response | any): Observable<any> {
    console.error(error);
  return Observable.throw(error.json());
}

}
