import 'bootstrap';
import 'bootstrap-slider';
import 'jquery';
import '../../assets/css/style.css';
import  './styles.css';
import { fromEvent } from 'rxjs';
import { createSlider$ } from './slider';
import { map, withLatestFrom } from 'rxjs/operators';

const buttonElement = document.getElementById('send-result') as HTMLElement;
const buttonClickEvent$ = fromEvent<MouseEvent>(buttonElement, 'click');

buttonClickEvent$
    .pipe(
        withLatestFrom(
            createSlider$('quality'),
            createSlider$('rating'),
            createSlider$('actual'),
        ),
        map(([_, quality, rating, actual]) => (quality + rating + actual) / 3)
    )
    .subscribe(console.log);