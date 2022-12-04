// import { interval, Observable, of, timer } from 'rxjs';
// import { concatMap, exhaustMap, map, mergeAll, mergeMap, switchMap, take, tap } from 'rxjs/operators';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = interval(1000).pipe(
//     // map<number, Observable<number>>(value => of(value)),
//     // mergeAll(),
//     exhaustMap(
//         count => timer(5000).pipe(
//             tap(value => {
//                 console.log(`search end for ${count}, result - ${value}`)
//             })
//         ),
//     ),
// )

// stream$.subscribe(value => {
//     terminalLog(value);
// });