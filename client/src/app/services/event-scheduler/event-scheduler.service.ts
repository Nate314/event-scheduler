import { DBEvent } from '../../../../../shared-models/db/event.model';
import { DBNote } from '../../../../../shared-models/db/note.model';
import { UtilityService } from '../utility/utility.service';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';
import { Observable, Subject } from 'rxjs';
import { Inject } from '@angular/core';
import { tap } from 'rxjs/operators';

@Inject({
    provide: 'root'
})
export class EventSchedulerService extends BaseService {

    private eventIDs$: Subject<DBEvent[]> = new Subject<DBEvent[]>();

    constructor(
        http: HttpClient,
        utilityService: UtilityService,
    ) {
        super(http, utilityService);
    }

    public postAuthCreateAccount(username: string, password: string): Observable<boolean> {
        const body = { username, password };
        return this.httpPost<boolean>(`/auth/create-account`, body);
    }

    public postAuthLogin(username: string, password: string): Observable<string> {
        const body = { username, password };
        return this.httpPost<string>(`/auth/login`, body);
    }

    public getApiInformation(): Observable<any> {
        return this.httpGet<any>(`/`);
    }

    private pipeUpdateEventList(observable: Observable<number>): Observable<number> {
        return observable.pipe(
            tap(x => {
                if (x) {
                    this.getEventIDs().subscribe();
                }
            })
        );
    }

    public postEventCreate(event: DBEvent): Observable<number> {
        const body = event;
        return this.pipeUpdateEventList(
            this.httpPost<number>(`/events`, body)
        );
    }

    public putEventUpdate(event: DBEvent): Observable<number> {
        const body = event;
        return this.pipeUpdateEventList(
            this.httpPut<number>(`/events`, body)
        );
    }

    public getEventIDs(): Observable<DBEvent[]> {
        this.httpGet<DBEvent[]>(`/events`).subscribe(resp => {
            this.eventIDs$.next(resp);
        });
        return this.eventIDs$.asObservable();
    }

    public getEvent(id: number): Observable<DBEvent> {
        return this.httpGet<DBEvent>(`/events/${id}`);
    }

    public deleteEvent(id: number): Observable<number> {
        return this.pipeUpdateEventList(
            this.httpDelete<number>(`/events/${id}`)
        );
    }

    public postNoteCreate(note: DBNote): Observable<boolean> {
        const body = note;
        return this.httpPost<boolean>(`/notes`, body);
    }

    public getNotesForEventID(eventID: number): Observable<DBNote[]> {
        return this.httpGet<DBNote[]>(`/notes/event/${eventID}`);
    }

    public putNoteUpdate(note: DBNote): Observable<boolean> {
        const body = note;
        return this.httpPut<boolean>(`/notes`, body);
    }

    public deleteNote(noteID: number): Observable<boolean> {
        return this.httpDelete<boolean>(`/notes/${noteID}`);
    }

}
