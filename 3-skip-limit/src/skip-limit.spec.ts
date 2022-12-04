import { map, zip } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { skipLimit } from './skip-limit';
import '../../assets/css/style.css';

// describe('Test example', () => {
//     let testScheduler: TestScheduler;

//     beforeEach(() => {
//         testScheduler = new TestScheduler((actual, expected) => {
//             expect(actual).toEqual(expected);
//         });
//     })

//     it('Map test', () => {
//         testScheduler.run(({cold, expectObservable}) => {

//         })
//     })
// })

describe('Test example', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    })

    it('skipLimit(2, 2) test', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const stream$ = cold(
                '-a--b----c----d---|',
                {
                    a: 1,
                    b: 2,
                    c: 100,
                    d: 10,
                }
            )

            const finalyStream$ = stream$.pipe(
                skipLimit(2, 2),
            )

            const expectedMarbles = '---------c----d---|';
            const expectedValue = {
                c: 100,
                d: 10,
            }

            expectObservable(finalyStream$).toBe(expectedMarbles, expectedValue);
        })
    })

    it('skipLimit(1, 2) test', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const stream$ = cold(
                '-a--b----c----d-e-|',
                {
                    a: 1,
                    b: 2,
                    c: 100,
                    d: 10,
                    e: 'zzz',
                }
            )

            const finalyStream$ = stream$.pipe(
                skipLimit(1, 2),
            )

            const expectedMarbles = '----b----c------e-|';
            const expectedValue = {
                b: 2,
                c: 100,
                e: 'zzz',
            }

            expectObservable(finalyStream$).toBe(expectedMarbles, expectedValue);
        })
    })
})
