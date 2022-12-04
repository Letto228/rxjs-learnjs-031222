import { combineLatest, debounceTime, distinctUntilChanged, fromEvent, map, Observable, startWith, switchMap, tap, withLatestFrom } from "rxjs";
import { userService } from "./user.service";

export class FormComponent {
    private readonly inputElement = this.formContainer
        .querySelector('input') as HTMLInputElement;
    private readonly buttonElement = this.formContainer
        .querySelector('button') as HTMLInputElement;

    // private nameSequence$!: Observable<string>;

    constructor(private formContainer: HTMLElement) {
        const inputValue$ = fromEvent<InputEvent>(this.inputElement, 'input')
            .pipe(
                map(({target}) => (target as HTMLInputElement).value),
                debounceTime(300),
                distinctUntilChanged(),
                startWith(this.inputElement.value),
            )

        const nameSequenceSubscription = inputValue$
            .pipe(withLatestFrom(userService.uniqueNameSequence$))
            .subscribe(([inputValue, names]) => {
                const isValid = inputValue && names.includes(inputValue);

                this.buttonElement.disabled = !isValid;

                if (isValid) {
                    this.inputElement.classList.remove('error');

                    return;
                }

                this.inputElement.classList.add('error');
            });

        const buttonClickSubscription = fromEvent(this.buttonElement, 'click')
            .subscribe(() => {
                console.log(this.inputElement.value);
            })
    }
}