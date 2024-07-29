import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseBroxyService {
  constructor(private http: HttpClient) {}

  get<T>(apiUrl: string, filters: Object) {
    return this.http
      .get<T>(apiUrl + this.queryParams(filters))
      .pipe(retry(1)) as Observable<T>;
  }
  queryParams(filter: Object) {
    //  let params = "?"
    //   for(let [key,value] of Object.entries(filter)){
    //     params +=
    //   }
  }
}
