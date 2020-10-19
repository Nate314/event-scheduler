import { UtilityService } from '../utility/utility.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Inject({
    provide: 'root'
})
export class EventSchedulerService {

    API_URL = 'http://localhost:5000/api/v1';

    constructor(
        private utilityService: UtilityService,
        private http: HttpClient,
    ) { }

    private getURL(path: string): string {
        return `${this.API_URL}${path}`;
    }

    private getOptions(): { headers: HttpHeaders } {
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        headers.set('Authorization', `Bearer ${this.utilityService.getRawToken()}`);
        return { headers };
    }

    public postAuthCreateAccount(username: string, password: string): Observable<boolean> {
        const url = this.getURL('/auth/create-account');
        const body = { username, password };
        return this.http.post<boolean>(url, body);
    }

    public postAuthLogin(username: string, password: string): Observable<string> {
        const url = this.getURL('/auth/login');
        const body = { username, password };
        return this.http.post<string>(url, body);
    }

    public getApiInformation(): Observable<any> {
        const url = this.getURL('/');
        return this.http.get<any>(url, this.getOptions());
    }
}
