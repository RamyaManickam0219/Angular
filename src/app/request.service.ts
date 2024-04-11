import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, forkJoin, from, retry } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  }
  private apiCall1 = ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1');
  private apiCall2 = ajax.getJSON('https://jsonplaceholder.typicode.com/todos/2');
  private apiCall3 = ajax.getJSON('https://jsonplaceholder.typicode.com/todos/2')
  makeSequentialApiCalls(endpoints: string[]): Observable<any> {
    return from(endpoints).pipe(
      concatMap(endpoint => this.http.get(endpoint))
    );
  }

  makeParallelApiCall(): Observable<any> {
    return forkJoin([
      this.apiCall1,
      this.apiCall2,
      this.apiCall3
    ])
  }
}
