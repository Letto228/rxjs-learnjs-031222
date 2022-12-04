import 'bootstrap';
import { fromEvent, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import '../../assets/css/style.css';
import  './styles.css';
import { liveSearch } from './live-search';
import { Card } from './card.interface';
import { requestToHtmlString } from './request-to-html-string';

const inputElement = document.getElementById('search') as HTMLInputElement;
const containerElement = document.querySelector('.container') as HTMLElement;

fromEvent<InputEvent>(inputElement, 'input')
    .pipe(
        map(({target}) => (target as HTMLInputElement).value),
        liveSearch<{items: Card[]}>(q => `https://api.github.com/search/repositories?q=${q}`),
        map(({items}) => requestToHtmlString(items)),
        // switchMap(({items}) => of(items).pipe(
        //     requestToHtmlString
        // )),
    )
    .subscribe(htmlString => {
        containerElement.innerHTML = htmlString;
    });