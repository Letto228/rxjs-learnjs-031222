import { fromEvent, merge, zip } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import '../../assets/css/style.css';

const down$ = merge(
    fromEvent<MouseEvent>(document, 'mousedown'),
    fromEvent<TouchEvent>(document, 'touchstart'),
)
const up$ = merge(
    fromEvent<MouseEvent>(document, 'mouseup'),
    fromEvent<TouchEvent>(document, 'touchend'),
)

export function getXPosition(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent
        ? event.clientX
        : event.changedTouches.item(0)!.clientX;
}

export const swipe$ = zip(
    down$.pipe(map(getXPosition)),
    up$.pipe(map(getXPosition)),
).pipe(
    map(([startXPosition, endXPosition]) => startXPosition - endXPosition),
    filter(diff => Math.abs(diff) > 10),
)
