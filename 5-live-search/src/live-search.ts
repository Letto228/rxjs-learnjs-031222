import { EMPTY, of, OperatorFunction, pipe } from "rxjs";
import { ajax, AjaxConfig } from "rxjs/ajax";
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap } from "rxjs/operators";

const searchDebounce = 300;

export function liveSearch<T>(
    urlCreater: (searchParam: string) => string,
    requestConfig: Omit<AjaxConfig, 'url'> = {crossDomain: true},
): OperatorFunction<string, T> {
    return pipe(
        debounceTime(searchDebounce),
        filter(searchParam => searchParam.length >= 3),
        distinctUntilChanged(),
        map<string, AjaxConfig>(searchParam => ({
            ...requestConfig,
            url: urlCreater(searchParam),
        })),
        switchMap(ajaxConfig => ajax<T>(ajaxConfig).pipe(
            map(({response}) => response),
            catchError(() => EMPTY),
        )),

    )
}