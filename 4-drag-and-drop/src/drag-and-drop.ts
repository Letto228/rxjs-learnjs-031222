import { fromEvent, Observable } from "rxjs";
import { map, switchMap, takeUntil, tap } from "rxjs/operators";

interface ElementPosition {
    top: number;
    left: number;
}

export function dragAndDrop$(element: HTMLElement): Observable<ElementPosition> {
    const elementMousedouwn$ = fromEvent<MouseEvent>(element, 'mousedown');
    const elementMouseup$ = fromEvent<MouseEvent>(element, 'mouseup');
    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');

    return elementMousedouwn$.pipe(
        tap(mousedownEvent => {
            mousedownEvent.preventDefault();
        }),
        switchMap(({offsetX, offsetY}) => mousemove$.pipe(
            tap(mousemoveEvent => {
                mousemoveEvent.preventDefault();
            }),
            map(({clientX, clientY}) => ({
                left: clientX - offsetX,
                top: clientY - offsetY,
            })),
            // takeUntil(elementMouseup$),
        )),
        takeUntil(elementMouseup$),
    )
}