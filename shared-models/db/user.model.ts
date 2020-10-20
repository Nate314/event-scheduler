import { Table } from './table.interface';

export class DBUser implements Table<DBUser> {

    public UserID?: number;
    public Username?: string;
    public Password?: string;

    constructor(
        UserID?: number,
        Username?: string,
        Password?: string,
    ) {
        this.UserID = UserID;
        this.Username = Username;
        this.Password = Password;
    }

    public convertFromAny(x: any): DBUser {
        return new DBUser(
            x.UserID,
            x.Username,
            x.Password,
        );
    }

}
