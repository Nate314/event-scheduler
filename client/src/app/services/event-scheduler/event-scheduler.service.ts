import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Inject({
    provide: 'root'
})
export class EventSchedulerService {

    API_URL = 'http://localhost:5000';

    constructor(private http: HttpClient) { }

    private getURL(path: string): string {
        return `${this.API_URL}${path}`;
    }

    public postAuthCreateAccount(username: string, password: string): Observable<boolean> {
        const url = this.getURL('/auth/create-account');
        const body = { username, password };
        return this.http.post<boolean>(url, body);
    }

    public postAuthLogin(username: string, password: string): Observable<boolean> {
        const url = this.getURL('/auth/login');
        const body = { username, password };
        return this.http.post<string>(url, body)
            .pipe(
                map(resp => {
                    if (resp) {
                        localStorage.setItem('token', resp);
                        return true;
                    }
                    return false;
                })
            );
    }
}
