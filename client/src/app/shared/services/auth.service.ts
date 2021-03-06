import { User } from './../models/user.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

const CURRENT_USER_KEY = 'currentUser';

@Injectable()
export class AuthService {
  private baseUrl = `${environment.apiUrl}/api/auth`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  public user: User;
  private userSubject: Subject<User>;

  constructor(private http: Http) {
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    this.userSubject = new Subject<User>();
  }

  isAuthenticated() {
    console.log(this.user)
    return this.user !== null && this.user !== undefined;
  }

  onUserChanges(): Observable<User> {
    return this.userSubject.asObservable();
  }

  authenticate(user: User): Observable<User> {
    return this.http.post(`${this.baseUrl}/login`, JSON.stringify(user), this.options)
      .map(res => {
        return this.doAuthentication(res.json());
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.get(`${this.baseUrl}/logout`, this.options)
        .map(res => {
          this.user = null;
          localStorage.clear();
          return res.json();
        })
        .catch(this.handleError);
  }

  private doAuthentication(user: User): User {
    this.user = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.user));
    this.userSubject.next(this.user);
    return this.user;
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
