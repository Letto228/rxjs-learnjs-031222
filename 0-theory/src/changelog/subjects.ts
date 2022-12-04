// import { AsyncSubject, BehaviorSubject, map, Observable, of, ReplaySubject, Subject } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // Subjects -> hot Observable
// // Subject = Obsrvable + Observer

// const stream$ = new AsyncSubject<number>();

// stream$.subscribe(value => {
//     terminalLog(`Sub 1 - ${value}`)
// });

// stream$.next(1);
// stream$.next(2);
// stream$.next(3);

// setTimeout(() => {
//     stream$.next(4);
// }, 3500)
// setTimeout(() => {
//     stream$.next(5);
//     stream$.next(6);
// }, 5500)

// setTimeout(() => {
//     stream$.subscribe(value => {
//         terminalLog(`Sub 2 - ${value}`)
//     });

//     stream$.next(7);
//     stream$.next(8);
//     stream$.next(9);

//     stream$.complete();
// }, 6000)

// function getItem<T>(url: string): Observable<T> {
//     let asyncSubject: AsyncSubject<T>;

//     return new Observable(subscriber => {
//         if (!asyncSubject) {
//             asyncSubject = new AsyncSubject<T>();

            // ajax<T>({
            //     url,
            //     crossDomain: true,
            //     method: 'GET',
            // })
//                 .pipe(map(({response}) => response))
//                 .subscribe(asyncSubject)
//         }

//         // const subscription = asyncSubject.subscribe(subscriber);

//         // return () => {
//         //     subscription.unsubscribe();
//         // }
//         // return {
//         //     unsubscribe: () => {
//         //         subscription.unsubscribe();
//         //     }
//         // }
//         // return subscription;
//         return asyncSubject.subscribe(subscriber);
//     })
// }

// // const request$ = getItem('https://learn.javascript.ru/courses/groups/api/participants?key=1audcei');
// const request$ = ajax({
//     url: 'https://learn.javascript.ru/courses/groups/api/participants?key=1audcei',
//     crossDomain: true,
//     method: 'GET',
// }).pipe(map(({response}) => response))

// request$.subscribe(console.log);
// request$.subscribe(console.log);
// request$.subscribe(console.log);
// request$.subscribe(console.log);