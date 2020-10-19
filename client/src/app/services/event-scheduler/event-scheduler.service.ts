import { EventInformation } from '../../../../../shared-models/event/event-information.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilityService } from '../utility/utility.service';
import { Inject } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Inject({
    provide: 'root'
})
export class EventSchedulerService {

    private API_URL = 'http://localhost:5000/api/v1';

    private eventIDs$: Subject<EventInformation[]> = new Subject<EventInformation[]>();
    private tempEvents: EventInformation[] = [];

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

    public postEventCreate(event: EventInformation): Observable<boolean> {
        // const url = this.getURL('/events');
        // const body = event;
        // return this.http.post<boolean>(url, body, this.getOptions());
        this.tempEvents.push(event);
        return of(true).pipe(
            tap(x => {
                if (x) {
                    this.getEventIDs().subscribe();
                }
            })
        );
    }

    public getEventIDs(): Observable<EventInformation[]> {
        // const url = this.getURL('/events');
        // return this.http.get<EventInformation[]>(url, this.getOptions());
        setTimeout(() => {
            this.eventIDs$.next(this.tempEvents.map(x => ({id: x.id, title: x.title} as EventInformation)));
        }, 1000);
        return this.eventIDs$.asObservable();
    }

    public getEvent(id: number): Observable<EventInformation> {
        // const url = this.getURL(`/events/${id}`);
        // return this.http.get<EventInformation>(url, this.getOptions());
        return of(this.tempEvents.find(x => x.id === id));
    }

    public deleteEvent(id: number): Observable<boolean> {
        // const url = this.getURL(`/events/${id}`);
        // return this.http.delete<boolean>(url, this.getOptions());
        this.tempEvents = this.tempEvents.filter(x => x.id !== id);
        return of(true).pipe(
            tap(x => {
                if (x) {
                    this.getEventIDs().subscribe();
                }
            })
        );
    }
}
