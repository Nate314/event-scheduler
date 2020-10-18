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

    public getToken(): Token {
        return new Token(jwt_decode(localStorage.getItem('token')));
    }
}
