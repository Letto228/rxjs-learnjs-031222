// import { EMPTY, interval, NEVER, of, throwError, timer, zip } from 'rxjs';
// import { RetryConfig } from 'rxjs/internal/operators/retry';
// import { catchError, map, retry, retryWhen, switchMap, tap } from 'rxjs/operators';
// import '../../assets/css/style.css';

// const streamFirst$ = interval(500);
// const streamSecond$ = of('1', '2', '3', 4, '5', '6');
// const stream$ = zip(streamFirst$, streamSecond$);

// stream$
//     .pipe(
//         switchMap(([_, value]) => of((value as string)).pipe(
//             map(string => string.toUpperCase()),
//             // catchError(() => {
//             //     // console.log('Error: ', error);
    
//             //     return throwError(() => 'error');
//             // }),
//         )),
//         // map(([_, value]) => (value as string).toUpperCase()),
//         // catchError(error => {
//         //     console.log('Error: ', error);

//         //     return EMPTY;
//         // })
//         // retry({
//         //     count: 2,
//         //     // delay: 2000,
//         //     delay: (error, retryCount) => timer(retryCount * 1000),
//         //     resetOnSuccess: false,
//         // } as RetryConfig),
//         // retryWhen(error$ => error$.pipe(switchMap(() => timer(3000))))
//     )
//     .subscribe({
//         complete: () => {
//             console.log('COMPLETE');
//         },
//         next: console.log,
//         error: console.log
//     });

// // EMPTY: |
// // NEVER: ----------------------->
// // THROW: throwError(): X