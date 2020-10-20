import { Table } from './table.interface';

export class DBEvent implements Table<DBEvent> {

    public id?: number;
    public userID?: number;
    public title?: string;
    public description?: string;
    public date?: string;

    constructor(
        id?: number,
        userID?: number,
        title?: string,
        description?: string,
        date?: string,
    ) {
        this.id = id;
        this.userID = userID;
        this.title = title;
        this.description = description;
        this.date = date;
    }

    public convertFromAny(x: any): DBEvent {
        return new DBEvent(
            x.id,
            x.userID,
            x.title,
            x.description,
            x.date,
        );
    }

}
