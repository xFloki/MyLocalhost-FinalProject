import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Task } from './../models/task.model';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

@Injectable()
export class WeekTaskService {

  private baseUrl = `${environment.apiUrl}/api/choreWeek`;
  private headers = new Headers({ 'Contetn-type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  constructor(private http: Http) { }

  listByUser(): Observable<Array<Task>> {
    return this.http.get(this.baseUrl + '/current', this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  addToUser(id): Observable<Task> {
    return this.http.post(`${this.baseUrl}/assign/${id}`, {}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }


  protected handleError(error: Response | any): Observable<any> {
    console.error(error);
    return Observable.throw(error.json());
  }
}
