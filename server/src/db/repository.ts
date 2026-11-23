import { DBEvent } from '../../../shared-models/db/event.model';
import { DBUser } from '../../../shared-models/db/user.model';
import { Database, Query } from './database';
import { config } from '../config';
import { QueryError } from 'mysql2';
import {
    INSERT_USER, SELECT_USER_WHERE_USERNAME, SELECT_USER_WHERE_USERNAME_AND_PASSWORD, SELECT_USER_COUNT,
    INSERT_EVENT, UPDATE_EVENT, DELETE_EVENT, SELECT_EVENTS, SELECT_NEXT_EVENT_NUM, SELECT_EVENT_WHERE_ID,
        SELECT_EVENT_MAX_ID_WHERE_USER_ID,
    INSERT_NOTE, SELECT_NOTE, SELECT_NOTES_WHERE_EVENT_ID, UPDATE_NOTE, DELETE_NOTE, DELETE_NOTES_WHERE_EVENT_ID,
    SELECT_EVENTIDS_WHERE_EVENT_SEARCH, SELECT_EVENTIDS_WHERE_NOTES_SEARCH,
} from './queries';
import { DBNote } from '../../../shared-models/db/note.model';

export class Search {
    userID: number;
    description: string;
    minDate: string;
    maxDate: string;
    onlyIncludePinnedNoteEvents: number;
}

export class Repository {

    database: Database;

    constructor() {
        this.database = new Database({
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.database,
            multipleStatements: true,
        });
    }

    private promisifiedDBTransaction<T, U>(query: Query<T>, obj: T, genericConstructor: (x: any) => U, first?: boolean) {
        return new Promise<U[] | U | boolean | any>((resolve, reject) => {
            // console.log(query);
            this.database.query(query, obj, (err: QueryError | null, results?: any) => {
                if (!err) {
                    // Multi-statement queries return one result per statement; keep the last (the SELECT), even when empty.
                    results = Array.isArray(results) && Array.isArray(results[results.length - 1]) ? results[results.length - 1] : results;
                    if (results) {
                        // console.log(results);
                        if (results.length !== undefined) {
                            if (first) {
                                resolve(results.map(genericConstructor)[0]);
                            } else {
                                resolve(results.map(genericConstructor));
                            }
                        } else {
                            resolve(results);
                        }
                    } else {
                        resolve(true);
                    }
                } else {
                    reject(err);
                }
            });
        });
    }

    public insertUser(user: DBUser): Promise<any> {
        return this.promisifiedDBTransaction(INSERT_USER, user, user.convertFromAny);
    }

    public selectUserWhereUsername(user: DBUser): Promise<DBUser> {
        return this.promisifiedDBTransaction(SELECT_USER_WHERE_USERNAME, user, user.convertFromAny, true);
    }

    public selectUserWhereUsernameAndPassword(user: DBUser): Promise<DBUser> {
        return this.promisifiedDBTransaction(SELECT_USER_WHERE_USERNAME_AND_PASSWORD, user, user.convertFromAny, true);
    }

    public selectUserCount(): Promise<any> {
        return this.promisifiedDBTransaction(SELECT_USER_COUNT, {}, (x: any) => x.count, true);
    }

    public insertEvent(event: DBEvent): Promise<DBEvent> {
        return this.promisifiedDBTransaction(INSERT_EVENT, event, event.convertFromAny);
    }

    public updateEvent(event: DBEvent): Promise<any> {
        return this.promisifiedDBTransaction(UPDATE_EVENT, event, event.convertFromAny)
    }

    public deleteEvent(userID: number, eventID: number): Promise<any> {
        const event = new DBEvent(eventID, userID);
        return this.promisifiedDBTransaction(DELETE_EVENT, event, event.convertFromAny)
    }

    public selectEvents(userID: number): Promise<DBEvent[]> {
        const event = new DBEvent(null, userID);
        return this.promisifiedDBTransaction(SELECT_EVENTS, event, event.convertFromAny)
    }

    public selectNextEventNum(userID: number): Promise<DBEvent> {
        const event = new DBEvent(null, userID);
        return this.promisifiedDBTransaction(SELECT_NEXT_EVENT_NUM, event, event.convertFromAny, true)
    }

    public selectEventWhereID(userID: number, eventID: number): Promise<DBEvent> {
        const event = new DBEvent(eventID, userID);
        return this.promisifiedDBTransaction(SELECT_EVENT_WHERE_ID, event, event.convertFromAny, true)
    }

    public selectEventMaxIDWhereUserID(userID: number): Promise<DBEvent> {
        const event = new DBEvent(null, userID);
        return this.promisifiedDBTransaction(SELECT_EVENT_MAX_ID_WHERE_USER_ID, event, event.convertFromAny, true)
    }

    public insertNote(note: DBNote): Promise<DBNote> {
        return this.promisifiedDBTransaction(INSERT_NOTE, note, note.convertFromAny);
    }

    public selectNote(noteID: number): Promise<DBNote> {
        const note = new DBNote(noteID);
        return this.promisifiedDBTransaction(SELECT_NOTE, note, note.convertFromAny, true);
    }

    public selectNotesWhereEventID(eventID: number): Promise<DBNote> {
        const note = new DBNote(null, null, eventID);
        return this.promisifiedDBTransaction(SELECT_NOTES_WHERE_EVENT_ID, note, note.convertFromAny);
    }

    public updateNote(note: DBNote): Promise<DBNote> {
        return this.promisifiedDBTransaction(UPDATE_NOTE, note, note.convertFromAny);
    }

    public deleteNote(noteID: number): Promise<DBNote> {
        const note = new DBNote(noteID);
        return this.promisifiedDBTransaction(DELETE_NOTE, note, note.convertFromAny);
    }

    public deleteNotesWhereEventID(eventID: number): Promise<boolean> {
        const event = new DBEvent(eventID);
        return this.promisifiedDBTransaction(DELETE_NOTES_WHERE_EVENT_ID, event, event.convertFromAny);
    }

    public selectEventIDsWhereEventSearch(userID: number, description: string, minDate: string, maxDate: string,
            onlyIncludePinnedNoteEvents: number): Promise<number[]> {
            const params = { userID, description, minDate, maxDate, onlyIncludePinnedNoteEvents } as Search;
            return this.promisifiedDBTransaction(SELECT_EVENTIDS_WHERE_EVENT_SEARCH, params, (x: any) => x.eventID);
    }

    public selectEventIDsWhereNotesSearch(userID: number, description: string, minDate: string, maxDate: string,
        onlyIncludePinnedNoteEvents: number): Promise<number[]> {
            const params = { userID, description, minDate, maxDate, onlyIncludePinnedNoteEvents } as Search;
            return this.promisifiedDBTransaction(SELECT_EVENTIDS_WHERE_NOTES_SEARCH, params, (x: any) => x.eventID);
    }

}
