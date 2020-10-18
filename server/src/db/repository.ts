import { Database, Query } from './database';
import { MysqlError } from 'mysql';
import { DBUser } from './models';
import {
    INSERT_USER, SELECT_USER_WHERE_USERNAME, SELECT_USER_WHERE_USERNAME_AND_PASSWORD,
} from './queries';

export class Repository {

    database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    private promisifiedDBTransaction<T>(query: Query<T>, obj: T, genericConstructor: (x: any) => T, first?: boolean) {
        return new Promise<T[] | T | boolean | any>((resolve, reject) => {
            this.database.query(query, obj, (err: MysqlError | null, results?: any) => {
                if (err === null) {
                    if (results) {
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
}
