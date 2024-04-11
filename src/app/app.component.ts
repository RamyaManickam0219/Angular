import { Component } from '@angular/core';
import { EMPTY, Observable, catchError, debounceTime, from, fromEvent, interval, map, merge, mergeMap, of, retry, scan, switchMap, take, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rxjs';
  constructor(private service: RequestService) { }
  ngOnInit() {
    // //of operator
    // const ofSource: any = of(1, 2, 3);
    // ofSource.subscribe({
    //   next: (value: any) => console.log(value),
    //   complete: () => console.log('Complete')
    // });
    // //from operator
    // const fromSource: any = from([1, 2, 3]);
    // fromSource.subscribe({
    //   next: (value: any) => console.log(value),
    //   complete: () => console.log('Complete')
    // });
    // //take operator
    // const takeSource = interval(1000).pipe(take(5));
    // takeSource.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('Complete')
    // })
    // //scan operator
    // const scanSource = of(1, 2, 3, 4, 5);
    // scanSource.pipe(
    //   scan((acc, val) => acc + val, 0)
    // )
    // scanSource.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('Complete')
    // })
    // //retry operator
    // const retrySource = interval(1000).pipe(
    //   // Simulate an error after 3rd emission
    //   map(val => {
    //     if (val === 3) {
    //       throw new Error('Simulated error');
    //     }
    //     return val;
    //   }),
    //   // Retry up to 2 times (total 3 attempts)
    //   retry(2),
    //   catchError(error => {
    //     // Log error message and return an empty observable to complete the stream
    //     console.error('Error:', error);
    //     return EMPTY;
    //   })
    // );

    // // Subscribe to the source observable
    // retrySource.subscribe({
    //   next: val => console.log('Next:', val),
    //   complete: () => console.log('Completed')
    // });
    // //map operator
    // const mapSource = of(1, 2, 3, 4, 5);
    // mapSource.pipe(
    //   map(val => val * 2)
    // )
    // //mergeMap opertor
    // const mergeMapSource = of(2,3,1);
    // const users$ = mergeMapSource.pipe(
    //   mergeMap(userId =>
    //     // For each user ID, return an observable that makes an HTTP request
    //     ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    //   )
    // );
    // users$.subscribe({
    //   next: userData => console.log(userData),
    //   error: err => console.error('Error:', err),
    //   complete: () => console.log('Completed')
    // })
    // //switchMap operator
    // Assume there's an input field with id 'input'
    // const input: any = document.getElementById('input');
    // var fetchData = (query: string) => {
    //   const url = `https://api.example.com/search?q=${query}`;
    //   return ajax.getJSON(url);
    // }
    // // Create an observable from input events if input exists, otherwise create an empty observable
    // const inputObservable = fromEvent(input, 'input');
    // inputObservable.pipe(
    //   switchMap((event: any) => {
    //     const query = (event.target as HTMLInputElement).value; // Type assertion to HTMLInputElement
    //     return fetchData(query);
    //   })
    // ).subscribe({
    //   next: data => {
    //     console.log('Data received:', data);
    //     // Do something with the received data
    //   },
    //   error: err => {
    //     console.error('Error occurred:', err);
    //     // Handle errors
    //   }
    // });
    //debounceTime operator
    // Suppose you have an input field in your HTML with id="inputField"
    // const inputField: any = document.getElementById('inputField');

    // // Create an observable from the input field's 'input' event
    // const input$: Observable<Event> = fromEvent(inputField, 'input');

    // // Apply debounceTime operator to wait for 300 milliseconds before emitting the latest value
    // const debouncedInput$ = input$.pipe(
    //   map((event: Event) => (event.target as HTMLInputElement).value), // Extract the value from the input event
    //   debounceTime(3000) // Wait for 300 milliseconds of silence
    // );

    // // Subscribe to debounced input stream
    // debouncedInput$.subscribe(value => {
    //   console.log('Debounced Input:', value);
    // });

    //sequantial api calls
    // const endpoints = [
    //   'https://jsonplaceholder.typicode.com/todos/1',
    //   'https://jsonplaceholder.typicode.com/todos/2',
    //   'https://jsonplaceholder.typicode.com/todos/3'
    // ];

    // this.service.makeSequentialApiCalls(endpoints)
    //   .subscribe(
    //     response => {
    //       console.log('Response:', response);
    //     },
    //     error => {
    //       console.error('Error:', error);
    //     },
    //     () => {
    //       console.log('All API calls completed');
    //     }
    //   );

    // Parallel API calls
    // this.service.makeParallelApiCall().subscribe(([result1, result2, result3]) => {
    //   console.log(result1, result2, result3)
    // })
  }
}
