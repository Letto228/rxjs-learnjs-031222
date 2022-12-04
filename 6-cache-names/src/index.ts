import 'bootstrap';
import '../../assets/css/style.css';
import { FormComponent } from './form/form.component';

const formFirst = document.querySelector('.first-form') as HTMLElement;
const formSecond = document.querySelector('.second-form') as HTMLElement;

formSecond.hidden = true;

new FormComponent(formFirst);

setTimeout(() => {
    formSecond.hidden = false;

    new FormComponent(formSecond);
}, 5000)