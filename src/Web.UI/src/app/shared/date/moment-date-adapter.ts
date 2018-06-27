import { Moment } from 'moment';

export function convertMomentToString(date: Moment): string {
    return date.toDate().toDateString();
}
