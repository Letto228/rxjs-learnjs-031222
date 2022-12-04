import { asapScheduler, asyncScheduler } from 'rxjs';
import '../../assets/css/style.css';
import { animationDownElement$ } from './animate';
import  './styles.css';

animationDownElement$(
    document.querySelector('.animated-shape') as HTMLElement,
    20000,
).subscribe()