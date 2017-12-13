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
    return this.http.get(this.baseUrl + '/userCreditorDebts', this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  confirmPaypment(id){
    return this.http.patch(this.baseUrl + '/confirmPayment/'+id, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  create(debt){
    return this.http.post(this.baseUrl + '/create', { debt }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }

}
