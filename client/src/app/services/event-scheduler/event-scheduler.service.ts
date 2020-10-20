import { DBEvent } from '../../../../../shared-models/db/event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilityService } from '../utility/utility.service';
import { Observable, Subject } from 'rxjs';
import { Inject } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Inject({
    provide: 'root'
})
export class EventSchedulerService {

    private API_URL = 'http://localhost:5000/api/v1';

    private eventIDs$: Subject<DBEvent[]> = new Subject<DBEvent[]>();

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

    private pipeUpdateEventList(observable: Observable<boolean>): Observable<boolean> {
        return observable.pipe(
            tap(x => {
                if (x) {
                    this.getEventIDs().subscribe();
                }
            })
        );
    }

    public postEventCreate(event: DBEvent): Observable<boolean> {
        const url = this.getURL('/events');
        const body = event;
        return this.pipeUpdateEventList(
            this.http.post<boolean>(url, body, this.getOptions())
        );
    }

    public putEventUpdate(event: DBEvent): Observable<boolean> {
        const url = this.getURL('/events');
        const body = event;
        return this.pipeUpdateEventList(
            this.http.put<boolean>(url, body, this.getOptions())
        );
    }

    public getEventIDs(): Observable<DBEvent[]> {
        const url = this.getURL('/events');
        this.http.get<DBEvent[]>(url, this.getOptions()).subscribe(resp => {
            this.eventIDs$.next(resp);
        });
        return this.eventIDs$.asObservable();
    }

    public getEvent(id: number): Observable<DBEvent> {
        const url = this.getURL(`/events/${id}`);
        return this.http.get<DBEvent>(url, this.getOptions())
            .pipe(map(x => {
                x.date = this.utilityService.formatDateToString(new Date(x.date));
                return x;
            }));
    }

    public deleteEvent(id: number): Observable<boolean> {
        const url = this.getURL(`/events/${id}`);
        return this.pipeUpdateEventList(
            this.http.delete<boolean>(url, this.getOptions())
        );
    }
}
