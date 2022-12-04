import { asapScheduler, asyncScheduler, combineLatest, map, merge, observeOn, of, queueScheduler, scheduled, Subject, subscribeOn, take, tap } from 'rxjs';
import '../../assets/css/style.css';

const data = Array.from({length: 10}).map((_, i) => i);

// of(...data, asyncScheduler).subscribe(console.log);
// of(...data, asapScheduler).subscribe(console.log);

// merge(
//     scheduled(data, asyncScheduler).pipe(map(value => `scheduled - ${value}`)), //macro
//     of(...data).pipe(map(value => `of - ${value}`)),
// ).subscribe(console.log);

// of(...data)
//     .pipe(
//         tap(() => {
//             console.log('default schedular');
//         }),
//         tap(() => {
//             console.log('async schedular');
//         }),
//         subscribeOn(asapScheduler),
//         observeOn(asyncScheduler),
//     )
//     .subscribe(value => {
//         console.log(`async - ${value}`)
//     });

// of(...data).subscribe(value => {
//     console.log(`sync - ${value}`)
// });
    
// of(...data).pipe(observeOn(asyncScheduler))
// scheduled(data, asyncScheduler)

// const streamFirst$ = scheduled([1, 2], asyncScheduler);
// const streamSecond$ = of(3);

// combineLatest([
//     streamSecond$,
//     streamFirst$,
// ]).subscribe(console.log);

// combineLatest([
//     streamFirst$,
//     streamSecond$,
// ]).subscribe(console.log);



const signal$ = new Subject<number>();

console.log('start');

signal$
    .pipe(
        take(50000),
        // observeOn(asapScheduler),
    )
    .subscribe(count => {
        console.log(`calc - ${count}`)
        signal$.next(count + 1);
    })

signal$.next(0);

console.log('stop')