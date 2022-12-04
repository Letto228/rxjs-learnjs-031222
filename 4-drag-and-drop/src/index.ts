import '../../assets/css/style.css';
import { dragAndDrop$ } from './drag-and-drop';
import  './styles.css';

const element = document.querySelector('.draggable') as HTMLElement;

dragAndDrop$(element).subscribe(({top, left}) => {
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
});