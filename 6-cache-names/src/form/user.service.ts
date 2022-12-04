import { AsyncSubject, map, Observable, share } from "rxjs";
import { ajax } from "rxjs/ajax";
import { IUser } from "./user.interface";

class UserService {
    uniqueNameSequence$: Observable<string[]> = ajax<IUser[]>({
        url: 'https://learn.javascript.ru/courses/groups/api/participants?key=1audcei',
        crossDomain: true,
        method: 'GET',
    }).pipe(
        map(({response}) => response.map(({firstName}) => firstName)),
        share({
            connector: () => new AsyncSubject(),
            resetOnComplete: false,
        })
    )
}

export const userService = new UserService();