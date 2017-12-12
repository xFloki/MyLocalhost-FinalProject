import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Task } from './../models/task.model';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

@Injectable()
export class TaskService {

  private baseUrl = `${environment.apiUrl}/api/chore`;
  private headers = new Headers({ 'Contetn-type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers, withCredentials: true });

  constructor(private http: Http) { }

  list(): Observable<Array<Task>> {
    return this.http.get(this.baseUrl, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  listUnassigned(){
    return this.http.get(this.baseUrl + '/unassigned', this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  protected handleError(error: Response | any): Observable<any> {
    console.error(error);
  return Observable.throw(error.json());
}

}
