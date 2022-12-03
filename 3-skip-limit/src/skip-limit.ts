// ---0---1---2---3---4---5---6---7---8---9--->
// skipLimit(2, 2)
// ---------2---3---------6---7--------->

import { Observable, OperatorFunction } from "rxjs";

export function skipLimit<T>(
    skip: number,
    limit: number,
): OperatorFunction<T, T> {
    let intervalCounter = 1;
    let valueIndex = 1;

    return (source$: Observable<T>): Observable<T> => 
        new Observable<T>(subscriber => {
            const subscription = source$.subscribe({
                complete: () => {
                    subscriber.complete();
                },
                error: subscriber.error.bind(subscriber), // вариант со стрелочной функцией кажется почище
                next: value => {
                    const borderRight = intervalCounter * (skip + limit);
                    const borderLeft = borderRight - limit

                    const needEmitValue = valueIndex > borderLeft && valueIndex <= borderRight;

                    if (needEmitValue) {
                        subscriber.next(value);
                    }

                    valueIndex += 1;

                    if (borderRight < valueIndex) {
                        intervalCounter += 1;
                    }
                }
            });

            return () => {
                subscription.unsubscribe();
            }
        })
}