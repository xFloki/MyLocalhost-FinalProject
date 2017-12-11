import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ShoplistService {

  private baseUrl = `${environment.apiUrl}/api/shoplist`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  constructor(private http: Http) { }

  addNewShopList(){
    return this.http.post(this.baseUrl + '/add', {}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  showShopLists(){
    return this.http.get(this.baseUrl, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  showShopList(id){
    console.log(id)
    return this.http.get(this.baseUrl + '/' + id, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }

}
