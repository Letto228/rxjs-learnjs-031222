import { map, zip } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { getXPosition } from './swipe';
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

function createEvent(clientX: number): TouchEvent {
    return new TouchEvent('event', {
        changedTouches: [new Touch({clientX, identifier: 1, target: new EventTarget()})]
    })
}

describe('Test example', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    })

    it('swipe test', () => {
        testScheduler.run(({cold, expectObservable}) => {
            const mousedown$ = cold(
                '-a----b----------|',
                {
                    a: createEvent(2),
                    b: createEvent(30),
                }
            );
            const mouseup$ = cold(
                '---a-------b-----|',
                {
                    a: createEvent(20),
                    b: createEvent(25),
                }
            )

            const swipe$ = zip(
                mousedown$.pipe(map(getXPosition)),
                mouseup$.pipe(map(getXPosition)),
            );

            const expectedMarbles = '---a-------b-----|';
            const expectedValue = {
                a: [2, 20],
                b: [30, 25],
            }

            expectObservable(swipe$).toBe(expectedMarbles, expectedValue);
        })
    })
})
