import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AppError } from '../models/appError';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) {

  }

  getAll(path: string) : Observable<any[]> {
    return this.http.get(`${environment.apiURL}${path}`)
                    .pipe(
                      map(resp => resp as any[])
                    );
  }

  getOne(path: string, id: string) : Observable<any> {
    return this.http.get(`${environment.apiURL}${path}`+'/'+id)
                    .pipe(
                      map(resp => resp as any[])
                    );
  }

  private handleError(error: Response) {
    return Observable.throw(new AppError(error));
  }
}
