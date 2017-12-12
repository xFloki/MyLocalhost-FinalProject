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

  addNewShopList(house){
    return this.http.post(this.baseUrl + '/add', { house }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  showShopLists(){
    return this.http.get(this.baseUrl, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  showShopList(id){
    return this.http.get(this.baseUrl + '/' + id, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  showShopListsHouse(house){
    return this.http.get(this.baseUrl + '/house/' + house, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  findProduct(product){
    return this.http.get(`${environment.apiUrl}/api/scrape/getProduct/${product}`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  updatePortion(id, prod){
    return this.http.patch(this.baseUrl + '/portion/' + id, { prod:prod }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  createPortion(shoplist,prod){
    return this.http.post(this.baseUrl + '/portion' , { prod:prod, shoplist:shoplist }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }


  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }

}
