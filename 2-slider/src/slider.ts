import { fromEvent, Observable, OperatorFunction, pipe } from "rxjs";
import { map, startWith, tap } from "rxjs/operators";

interface JQueryEvent {
    value: {
        newValue: number;
    }
}

enum SliderClassName {
    Bad = 'bad',
    Warn = 'warn',
    Good = 'good',
}

// const qualitySlider = $('#quality').slider();
// const ratingSlider = $('#rating').slider();
// const actualSlider = $('#actual').slider();

// function getNewValue(event: JQueryEvent): number {
//     return event.value.newValue;
// }

function colorizeSliderByValue(element: HTMLElement, value: number) {
    element.classList.remove(SliderClassName.Bad, SliderClassName.Warn, SliderClassName.Good);

    if (value < 4) {
        element.classList.add(SliderClassName.Bad);

        return;
    }

    if (value < 7) {
        element.classList.add(SliderClassName.Warn);

        return;
    }

    element.classList.add(SliderClassName.Good);
}

function colorizeSlider(jqueryElement: JQuery<HTMLElement>): OperatorFunction<number, number> {
    const sliderTrackElement = jqueryElement.prev().get(0).querySelector('.slider-track') as HTMLElement;

    return pipe(
        tap(sliderValue => {
            colorizeSliderByValue(sliderTrackElement, sliderValue);
        }),
    );
}

export function createSlider$(sliderId: string): Observable<number> {
    const jquerySlider = $(`#${sliderId}`).slider();
    // const sliderTrackElement = jquerySlider.prev().get(0).querySelector('.slider-track') as HTMLElement;

    return fromEvent<JQueryEvent>(jquerySlider, 'change')
        .pipe(
            map(({value}: JQueryEvent) => value.newValue),
            startWith(5),
            colorizeSlider(jquerySlider),
            // tap(sliderValue => {
            //     colorizeSliderByValue(sliderTrackElement, sliderValue);
            // }),
        );
}

// const qualitySliderChangeEvent$ = fromEvent<JQueryEvent>(qualitySlider, 'change').pipe(
//     map(getNewValue),
//     startWith(5),
//     colorizeSlider(qualitySlider),
// );
// const ratingSliderChangeEvent$ = fromEvent<JQueryEvent>(ratingSlider, 'change').pipe(
//     map(getNewValue),
//     startWith(5),
//     colorizeSlider(ratingSlider),
// );
// const actualSliderChangeEvent$ = fromEvent<JQueryEvent>(actualSlider, 'change').pipe(
//     map(getNewValue),
//     startWith(5),
//     colorizeSlider(actualSlider),
// );

// const buttonElement = document.getElementById('send-result') as HTMLElement;
// const buttonClickEvent$ = fromEvent<MouseEvent>(buttonElement, 'click');

// combineLatest([
    // createSlider$('quality'),
    // createSlider$('rating'),
    // createSlider$('actual'),
// ])
//     .pipe(
//         map(([quality, rating, actual]) => (quality + rating + actual) / 3),
        // switchMap(value => buttonClickEvent$.pipe(
        //     map(() => value)
        // ))
//     )
//     .subscribe(console.log);

// OR

// buttonClickEvent$
//     .pipe(
//         withLatestFrom(
//             createSlider$('quality'),
//             createSlider$('rating'),
//             createSlider$('actual'),
//         ),
//         map(([_, quality, rating, actual]) => (quality + rating + actual) / 3)
//     )
//     .subscribe(console.log);
