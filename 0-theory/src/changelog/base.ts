// import { defer, from, iif, interval, Observable, of, Subscriber, Subscription, timer } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // const sequence = new Promise(resolve => {
//     // let count = 0;

//     // setInterval(() => {
//     //     count += 1;

//     //     console.log('setInterval', count);
//     //     resolve(count);
//     // }, 1000)
// // })

// // sequence.then(count => {
// //     terminalLog('then 1 - ' + count);
// // });

// // setTimeout(() => {
// //     sequence.then(count => {
// //         terminalLog('then 2 - ' + count);
// //     });
// // }, 4000);

// // const sequence = (function* iteratorFunction() {
// //     let count = 0;

// //     while (true) {
// //         count += 1;

// //         console.log('iteratorFunction', count);
// //         yield count;
// //     }
// // })()

// // terminalLog(`${sequence.next().value}`);
// // terminalLog(`${sequence.next().value}`);
// // terminalLog(`${sequence.next().value}`);
// // terminalLog(`${sequence.next().value}`);

// // const sequence$ = new Observable(subscriber => {
// //     let count = 0;

// //     console.log('Start');

// //     const intervalId = setInterval(() => {
// //         // if (count === 3) {
// //         //     subscriber.complete();
// //         //     // subscriber.error('Max count');
// //         //     // clearInterval(intervalId); не совсем верно

// //         //     return;
// //         // }

// //         count += 1;

// //         console.log('setInterval Observable', count);
// //         subscriber.next(count); // push count in Observable
// //     }, 1000)

// //     return () => {
// //         clearInterval(intervalId);
// //         console.log('Destroy');
// //     }
// // });

// // setTimeout(() => {
//     // sequence$.subscribe(count => {
//     //     terminalLog(`subscribe - ${count}`);
//     // })
//     // ~
//     // sequence$.subscribe({
//     //     next: count => {
//     //         terminalLog(`subscribe - ${count}`);
//     //     }
//     // })

//     // const allSubscription = new Subscription();

//     // // const subscription = sequence$.subscribe({
//     // allSubscription.add(sequence$.subscribe({
//     //     next: count => {
//     //         terminalLog(`subscribe - ${count}`);
//     //     },
//     //     error: error => {
//     //         terminalLog(error);
//     //         // throw error;
//     //     },
//     //     complete: () => {
//     //         terminalLog('complete')
//     //     }
//     // }));

//     // // let subscriptionAsync: Subscription;

//     // setTimeout(() => {
//     //     // subscriptionAsync = sequence$.subscribe(count => {
//     //     allSubscription.add(sequence$.subscribe(count => {
//     //         terminalLog(`subscribe async - ${count}`);
//     //     }));
//     // }, 3000);

//     // setTimeout(() => {
//     //     allSubscription.unsubscribe();
//     //     // subscriptionAsync.unsubscribe();
//     // }, 3500)
// // }, 2000)

// // const ws = new WebSocket('ws://localhost:8081');

// // ws.onopen = () => {
// //     ws.send('on');
// // };

// // export const wsMessage$ = new Observable(subscriber => {
// //     console.log('start');

// //     function messageListener(messageEvent: MessageEvent) {
// //         console.log(messageEvent.data);
// //         subscriber.next(messageEvent.data);
// //     }
// //     function closeListener() {
// //         subscriber.complete();
// //     }

// //     ws.addEventListener('message', messageListener);
// //     ws.addEventListener('close', closeListener);

// //     return () => {
// //         ws.removeEventListener('message', messageListener);
// //         ws.removeEventListener('close', closeListener);
        
// //         console.log('destroy');
// //     }
// // })

// // const allSubscription = new Subscription();

// // allSubscription.add(
// //     wsMessage$.subscribe({
// //         next: counter => {
// //             terminalLog('subscribe 1 - ' + counter);
// //         },
// //         complete: () => {
// //             terminalLog('complete 1');
// //         }
// //     })
// // );

// // setTimeout(() => {
// //     allSubscription.add(
// //         wsMessage$.subscribe({
// //             next: counter => {
// //                 terminalLog('subscribe 2 - ' + counter);
// //             },
// //             complete: () => {
// //                 terminalLog('complete 2');
// //             },
// //         })
// //     );
// // }, 3000);

// // setTimeout(() => {
// //     allSubscription.unsubscribe();
// // }, 5000);

// // interval(1000).subscribe(value => {
// //     terminalLog(`${value}`);
// // });

// // timer(0, 1000).subscribe(value => {
// //     terminalLog(`${value}`);
// // });

// // of(1, 2, [1, 2], {count: 4}).subscribe(value => {
// //     console.log(value);
// // });

// // from([1, 2, [1, 2], {count: 4}]).subscribe(console.log);
// // from(Promise.resolve(2)).subscribe(console.log);
// // from(
// //     fetch('https://learn.javascript.ru/courses/groups/api/participants?key=1audcei')
// //         .then(response => response)
// // ).subscribe(console.log);

// // function* iteratorFunction(seed: number, max: number) {
// //     let count = seed;

// //     while (count < max) {
// //         count += 1;

// //         console.log('iteratorFunction', count);
// //         yield count;
// //     }
// // }

// // from(iteratorFunction(3, 1000)).subscribe(console.log);

// // ajax({
// //     url: 'https://learn.javascript.ru/courses/groups/api/participants?key=1audcei',
// //     crossDomain: true,
// //     method: 'GET',
// // }).subscribe(console.log);

// // const sequence$ = defer(() => {
// //     const random = Math.round(Math.random() * 10);

// //     if (random > 8) {
// //         return of('True 9-10');
// //     }

// //     return random > 5
// //         ? of('True 6-8')
// //         : of('False ' + random)
// // })
// const sequence$ = iif(
//     () => Math.round(Math.random() * 10) > 5,
//     of('True 5'),
//     of('False 5')
// )

// sequence$.subscribe(console.log);
// sequence$.subscribe(console.log);
// sequence$.subscribe(console.log);
// sequence$.subscribe(console.log);


// const sequence$ = interval(1000);

// --- === 1000ms(1s)(1 frame)
// ---0---1---2---3---4---5---6---7---8---9---10--->

// take(10)
// ---0---1---2---3---4---5---6---7---8---9|

// map(value => value * 2)
// ---0---2---4---6---8---10---12---14---16---18|

// filter(value => value % 3 === 0)
// ---0---------6---------12---------18|

// skip(2)
// ---------------------12---------18|

// take(1)
// ---------------------12|

// sequence$
//     .pipe(
//         take(10),
//         map(value => value * 2),
//         filter(value => value % 3 === 0),
//         skip(2),
//         take(1),
//         tap({
//             next: value => {
//                 console.log(value);
//             },
//             complete: () => {
//                 console.log('complete');
//             },
//         }),
//     )
//     .subscribe({
//         next: value => {
//             console.log('subscribe', value);
//         },
//         complete: () => {
//             console.log('subscribe complete');
//         }
//     })

    // .pipe(
    //     tap({
    //         next: value => {
    //             console.log(value);
    //         },
    //         complete: () => {
    //             console.log('complete');
    //         },
    //     }),
    // )
    // .subscribe();

    // ~

    // .subscribe({
    //     next: value => {
    //         console.log('subscribe', value);
    //     },
    //     complete: () => {
    //         console.log('subscribe complete');
    //     }
    // })
