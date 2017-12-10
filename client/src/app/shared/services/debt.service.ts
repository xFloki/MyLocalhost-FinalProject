import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DebtService  {

  constructor(private http: Http) { }

  private baseUrl = `${environment.apiUrl}/api/debt`;
  private headers = new Headers({ 'Contetn-type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  getUserDebts(){
    return this.http.get(this.baseUrl + '/getUserDebts', this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getUserCreditorDebts(){
    return this.http.get(this.baseUrl + '/getUserCreditorDebts', this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }

}
