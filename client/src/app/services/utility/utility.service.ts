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
}
