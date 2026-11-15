import mysql from 'mysql2';

export class Query<T> {

    public sql: string;
    private paramFuncs: ((obj: T) => number | string)[];

    constructor(
        sql: string,
        params: ((obj: T) => number | string)[]
    ) {
        this.sql = sql;
        this.paramFuncs = params;
    }

    public params(obj: T): string[] {
        return this.getStringParams(this.paramFuncs.map(func => func(obj)));
    }

    private getStringParams(params: (number | string)[]): string[] {
        function toParamString(value: number | string): string {
            if (typeof value === 'string') {
                if (['', undefined, null].includes(value)) {
                    return null;
                } else {
                    return value;
                }
            } else if (typeof value === 'number') {
                if ([undefined, null].includes(value)) {
                    return null;
                } else {
                    return value.toString();
                }
            }
        }
        return params.map(toParamString);
    }
}

export class Database {

    connection: mysql.Connection;

    constructor(config: mysql.ConnectionOptions) {
        this.connection = mysql.createConnection(config);
    }

    query<T>(query: Query<T>, obj: T, callback: (err: mysql.QueryError | null, results?: any) => void) {
        const sql = query.sql;
        const params = query.params(obj);
        console.log(sql);
        console.log(params);
        this.connection.query(sql, params, callback);
    }

}
