// import { AsyncSubject, ConnectableObservable, interval, multicast, Observable, publish, refCount, ReplaySubject, share, shareReplay, Subject } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // const subject = new Subject();
// const customSubject = new Observable(subcriber => {
//     console.log('customSubject')
//     subcriber.next(4);
//     subcriber.complete();
// })

// // const stream$ = customSubject.pipe(
// const stream$ = interval(1000).pipe(
//     // multicast(subject),
//     // publish(),
//     // refCount(),
//     // shareReplay(1),
//     share({
//         connector: () => new Subject(),
//         resetOnComplete: false,
//         resetOnError: true,
//         resetOnRefCountZero: false,
//     }),
// );
// // ) as ConnectableObservable<unknown>;

// // stream$.connect();

// const subscription = stream$.subscribe(value => {
//     terminalLog(`Sub 1 - ${value}`);
// })

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3000)

// setTimeout(() => {
//     stream$.subscribe(value => {
//         terminalLog(`Sub 3 - ${value}`);
//     })
// }, 5000)