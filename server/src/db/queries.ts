import { Query } from './database';
import { DBUser } from './models';


const INSERT_USER = new Query(`
    INSERT INTO users (UserID, Username, Password)
    VALUES (?, ?, ?);
    `, [
        (user: DBUser) => user.UserID,
        (user: DBUser) => user.Username,
        (user: DBUser) => user.Password,
    ]
);

const SELECT_USER = new Query(`
    SELECT UserID, Username, Password
    FROM users
    WHERE UserID = ?;
    `, [
        (user: DBUser) => user.UserID,
    ]
);

const SELECT_USER_WHERE_USERNAME = new Query(`
    SELECT UserID, Username, Password
    FROM users
    WHERE Username = ?;
    `, [
        (user: DBUser) => user.Username,
    ]
);

const SELECT_USER_WHERE_USERNAME_AND_PASSWORD = new Query(`
    SELECT UserID, Username, Password
    FROM users
    WHERE Username = ?
        AND Password = ?;
    `, [
        (user: DBUser) => user.Username,
        (user: DBUser) => user.Password,
    ]
);

const UPDATE_USER = new Query(`
        UPDATE users
        SET Username = ?,
            Password = ?
        WHERE UserID = ?;
    `, [
        (user: DBUser) => user.Username,
        (user: DBUser) => user.Password,
        (user: DBUser) => user.UserID,
    ]
);

export {
    SELECT_USER,
    SELECT_USER_WHERE_USERNAME,
    SELECT_USER_WHERE_USERNAME_AND_PASSWORD,
    INSERT_USER,
    UPDATE_USER,
};
