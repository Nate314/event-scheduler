import { Inject } from '@angular/core';
import jwt_decode from 'jwt-decode';

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

    public formatDateToString(date: Date, time?: string): string {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Month from 0 to 11
        const day = date.getDate();
        return `${
            `${
                year
            }-${
                padWithZero(month)
            }-${
                padWithZero(day)
            }`
        }${
            time ? ' ' + this.formatTimeToString(time) : ''
        }`;
    }
}
