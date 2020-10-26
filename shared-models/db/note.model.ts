import { Table } from './table.interface';

export class DBNote implements Table<DBNote> {

    public id?: number;
    public userID?: number;
    public eventID?: number;
    public description?: string;
    public date?: string;

    constructor(
        id?: number,
        userID?: number,
        eventID?: number,
        description?: string,
        date?: string,
    ) {
        this.id = id;
        this.userID = userID;
        this.eventID = eventID;
        this.description = description;
        this.date = date;
    }

    public convertFromAny(x: any): DBNote {
        return new DBNote(
            x.id,
            x.userID,
            x.eventID,
            x.description,
            x.date,
        );
    }

}
