import { Inject } from '@angular/core';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment';

class Token {
    userID: number;
    username: string;
    iat: number;
    exp: number;

    constructor(token: Token) {
        Object.keys(token).forEach(key => this[key] = token[key]);
    }

    public isExpired(): boolean {
        return this.exp <= Math.floor(Date.now() / 1000);
    }
}

const padWithZero = x => x <= 9 ? '0' + x : x;

@Inject({
    provide: 'root'
})
export class UtilityService {

    constructor() { }

    public setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    public getRawToken(): string {
        return localStorage.getItem('token');
    }

    public getToken(): Token {
        const lsToken = this.getRawToken();
        return lsToken ? new Token(jwt_decode(lsToken)) : null;
    }

    public deleteToken(): void {
        localStorage.removeItem('token');
    }

    public distinct<T>(arr: T[]): T[] {
        return arr.filter((v, i) => arr.indexOf(v) === i);
    }

    public formatTimeToString(time?: string): string {
        if (time) {
            const hour = Number(time.split(/[: ]/)[0]);
            const minute = Number(time.split(/[: ]/)[1]);
            const isPM = hour >= 12;
            return `${
                hour === 0 ? 12 : hour - (isPM && hour > 12 ? 12 : 0)
            }:${
                padWithZero(minute)
            } ${
                isPM ? 'PM' : 'AM'
            }`;
        } else {
            return '12:00 AM';
        }
    }

    /**
     * @param pDate date to format - pass null to get now
     * @param pTime time to format
     */
    public formatMomentToString(pDate: moment.Moment, pTime?: string): string {
        if (pDate !== undefined) {
            const temp = (pDate === null
                    ? moment()
                    : pDate.utc().add(pDate.utcOffset(), 'm')
                ).format('YYYY-MM-DDTHH:mm:ss');
            const date = temp.split('T')[0];
            const result = `${date}${pTime ? ' ' + this.formatTimeToString(pTime) : ''}`
            return result === 'Invalid date' ? '' : result;
        } else {
            return '';
        }
    }
}
