import { animationFrameScheduler, interval, map, Observable, SchedulerLike, takeWhile, tap } from "rxjs";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}

function time$(schedular: SchedulerLike): Observable<number> {
    const startTime = schedular.now();

    return interval(0, schedular).pipe(
        map(() => schedular.now() - startTime),
    );
}

function duration$(allMs: number, schedular: SchedulerLike): Observable<number> {
    return time$(schedular).pipe(
        map(time => time / allMs),
        takeWhile(procentage => procentage <= 1),
    )
}

const diffPx = 100;

export function animationDownElement$(
    element: HTMLElement,
    animationTime: number,
    schedular = animationFrameScheduler,
): Observable<number> {
    return duration$(animationTime, schedular).pipe(
        tap(console.log),
        map(animationFn),
        map(procentage => procentage * diffPx),
        tap(translate => {
            element.style.transform = `translateY(${translate}px)`;
        })
    )
}