import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import '../../assets/css/style.css';
import { skipLimit } from './skip-limit';

interval(1000)
    .pipe(
        tap(console.log),
        skipLimit(2, 2),
    )
    .subscribe(console.log);