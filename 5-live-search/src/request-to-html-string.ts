import { pipe } from "rxjs";
import { bufferCount, map, reduce, switchAll, switchMap } from "rxjs/operators";
import { Card } from "./card.interface";

export function requestToHtmlString(cards: Card[]): string {
    const cardsHtmlString = cards.map(createCard);
    const groupedCardRow = grouping(cardsHtmlString, 3).map(createRow);

    return groupedCardRow.join('');
}

// export const requestToHtmlString = pipe(
//     // switchMap((cards: Card[]) => cards), // Observable<Card[]> => Observable<Card>

//     // map(cards => cards), //deleted
//     // switchAll(),
//     switchAll(), // Observable<Card[]> => Observable<Card>
//     map(createCard),
//     bufferCount(3), // Observable<Card> => Observable<[Card, Card, Card]>
//     map(createRow), // Observable<[Card, Card, Card]> => Observable<string>
//     reduce(
//         (resultString: string, row: string) => resultString + row,
//         ''
//     )
// )

function grouping<T>(array: T[], groupSize: number): Array<T[]> {
    return array.reduce(
        (groups: Array<T[]>, item: T) => {
            const updateGroups = [...groups];
            const groupsLastIndex = updateGroups.length - 1;

            if (updateGroups[groupsLastIndex].length < groupSize) {
                updateGroups[groupsLastIndex].push(item);

                return updateGroups;
            }

            return [...updateGroups, [item]];
        },
        [[]]
    )
}

function createCard({name, description, owner}: Card): string {
    return `
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <img class="card-img" src=${owner.avatar_url} alt=${name}>
            <div class="card-body">
                <h3 class="card-title">${name}</h3>
                <p class="card-text">${description}</p>
            </div>
        </div>
    </div>
    `;
}

function createRow(htmlStrings: string[]): string {
    return `<div class="row">${htmlStrings.join(' ')}</div>`;
}