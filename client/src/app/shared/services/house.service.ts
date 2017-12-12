import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HouseService {

  private baseUrl = `${environment.apiUrl}/api/house`;
  private headers = new Headers({ 'Content-Type' : 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  constructor(private http: Http) { }

  createHouse(house){
    return this.http.post(this.baseUrl, { house: house }, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  userInvitations(){
    return this.http.get(this.baseUrl + '/invitation/current', this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  removeInvitations(){
    return this.http.delete(this.baseUrl + '/invitation/all', this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  currentUserHouse(){
    return this.http.get(this.baseUrl + '/current-user', this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addHouseMember(id){
    return this.http.patch(this.baseUrl + '/add/' + id, {}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  protected handleError(error: Response | any): Observable<any> {
    return Observable.throw(error.json());
  }
}
