import { Table } from './table.interface';

export class DBEvent implements Table<DBEvent> {

    public id?: number;
    public userID?: number;
    public title?: string;
    public date?: string;
    public time?: string;
    public num?: number;

    constructor(
        id?: number,
        userID?: number,
        title?: string,
        date?: string,
        time?: string,
        num?: number,
    ) {
        this.id = id;
        this.userID = userID;
        this.title = title;
        this.date = date;
        this.time = time;
        this.num = num;
    }

    public convertFromAny(x: any): DBEvent {
        return new DBEvent(
            x.id,
            x.userID,
            x.title,
            x.date,
            x.time,
            x.num,
        );
    }

}
