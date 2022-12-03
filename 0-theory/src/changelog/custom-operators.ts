// const sequence$ = interval(1000);

// function doNothing<T>(source$: Observable<T>): Observable<T> {
//     return source$;
// }

// function double(source$: Observable<number>): Observable<number> {
//     return new Observable(subscriber => {
//         const subscription = source$.subscribe({
//             next: value => {
//                 subscriber.next(value * 2);
//             },
//             error: error => {
//                 subscriber.error(error);
//             },
//             complete: () => {
//                 subscriber.complete();
//             },
//         });

//         return () => {
//             subscription.unsubscribe();
//         }
//     })
// }

// function customMap<T, U>(
//     cb: (value: T) => U
// // ): (source$: Observable<T>) => Observable<U> {
// ): OperatorFunction<T, U> {
//     return (source$: Observable<T>) => 
//         new Observable<U>(subscriber => {
//             const subscription = source$.subscribe({
//                 next: value => {
//                     subscriber.next(
//                         cb(value)
//                     );
//                 },
//                 error: error => {
//                     subscriber.error(error);
//                 },
//                 complete: () => {
//                     subscriber.complete();
//                 },
//             });
    
//             return () => {
//                 subscription.unsubscribe();
//             }
//         })
// }

// function toStubText(_: Observable<unknown>): Observable<string> {
//     return new Observable(subsctiber => {
//         subsctiber.next('Stub');
//         subsctiber.complete();
//     })
// }

// const sub = sequence$
//     .pipe(
//         double,
//         customMap(value => value * 3),
//         tap(value => {
//             console.log('value', value);
//         }),
//         toStubText
//     )
    // .subscribe(console.log);
// const sub = sequence$
//     .pipe(
//         take(1),
//         filter(value => value != 0),
//     )
//     .subscribe(console.log);

// sub.unsubscribe();

// function double(source$: Observable<number>): Observable<number> {
//     return source$.pipe(
//         map(value => value * 2),
//     )
// }

// (source$: Observable<T>): Observable<U> => 
// operators[2](
//     operators[1](
//         operators[0](
//             source$
//         )
//     )
// )

// function pipe<T, U>(
//     ...operators: Array<OperatorFunction<any, any>>
// ): OperatorFunction<T, U> {
//     return (rootSource$: Observable<T>): Observable<U> => 
//         operators.reduce(
//             (source$, operator) => operator(source$),
//             rootSource$
//         ) as any as Observable<U>
// }

// const double = pipe(map(value => value * 2))
// const doubleWithFilter = pipe(
//     map<number, number>(value => value * 2),
//     filter(Boolean),
// )

// double(interval(1000)).subscribe(console.log);
// interval(1000).pipe(doubleWithFilter).subscribe(console.log);
// interval(1000).pipe(doubleWithFilter) ~ pipe(doubleWithFilter)(interval(1000));

// class DoubleSubscriber extends Subscriber<number> {
//     next(value: number): void {
//         super.next(value * 2);
//     }
// }

// function double(source$: Observable<number>): Observable<number> {
//     return new Observable(subscriber => {
//         const subscription = source$.subscribe(
//             new DoubleSubscriber(subscriber),
//         );

//         return () => {
//             subscription.unsubscribe();
//         }
//     })
// }

// interval(1000).pipe(double).subscribe(console.log);