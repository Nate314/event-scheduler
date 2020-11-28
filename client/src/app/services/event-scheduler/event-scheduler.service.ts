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
    public nextEventNum: number;

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

    public getUserCount(): Observable<number> {
        return this.httpGet<number>(`/auth/user-count`);
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
            this.nextEventNum = Math.max(...resp.map(x => x.num)) + 1;
            this.eventIDs$.next(resp);
        });
        return this.eventIDs$.asObservable();
    }

    public getNextEventNum(): Observable<number> {
        return this.httpGet<number>(`/events/nextEventNum`);
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

    public getSearchEvents(
        eventTitle: string, eventMinDate: string, eventMaxDate: string,
        noteDescription: string, noteMinDate: string, noteMaxDate: string,
        onlyIncludePinnedNoteEvents: boolean,
        ): Observable<DBEvent[]> {
            const params = {
                eventTitle, eventMinDate, eventMaxDate,
                noteDescription, noteMinDate, noteMaxDate,
                onlyIncludePinnedNoteEvents: onlyIncludePinnedNoteEvents ? 1 : 0,
            };
            const resultSubject = new Subject<DBEvent[]>();
            this.httpGet<number[]>(`/events/search?${
                Object.keys(params)
                    .map(key => `${key}=${params[key]}`)
                    .join('&')
            }`).subscribe(
                resp => Promise.all(
                        resp.map(
                            eventID => this.getEvent(eventID)
                                .toPromise()
                        )
                    ).then(
                        events => resultSubject.next(
                            events.filter(x => x).sort(
                                (a, b) => a.date < b.date ? -1
                                    : a.date !== b.date ? 1
                                        : a.time < b.time ? -1
                                            : 1
                            )
                        )
                    )
            );
            return resultSubject.asObservable();
    }

}
