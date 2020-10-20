import { DBEvent } from '../../../shared-models/db/event.model';
import { DBUser } from '../../../shared-models/db/user.model';
import { Query } from './database';

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

const INSERT_EVENT = new Query(`
        INSERT INTO events (id, userID, title, description, date)
        VALUES (?, ?, ?, ?, ?);
    `, [
        (event: DBEvent) => event.id,
        (event: DBEvent) => event.userID,
        (event: DBEvent) => event.title,
        (event: DBEvent) => event.description,
        (event: DBEvent) => event.date,
    ]
);

const SELECT_EVENTS = new Query(`
        SELECT id, userID, title
        FROM events
        WHERE userID = ?
        ORDER BY date DESC;
    `, [
        (event: DBEvent) => event.userID,
    ]
);

const SELECT_EVENT_WHERE_ID = new Query(`
        SELECT id, userID, title, description, date
        FROM events
        WHERE userID = ? AND id = ?;
    `, [
        (event: DBEvent) => event.userID,
        (event: DBEvent) => event.id,
    ]
);

const UPDATE_EVENT = new Query(`
        UPDATE events
        SET id = ?,
            userID = ?,
            title = ?,
            description = ?,
            date = ?
        WHERE userID = ? AND id = ?;
    `, [
        (event: DBEvent) => event.id,
        (event: DBEvent) => event.userID,
        (event: DBEvent) => event.title,
        (event: DBEvent) => event.description,
        (event: DBEvent) => event.date,
        (event: DBEvent) => event.userID,
        (event: DBEvent) => event.id,
    ]
);

const DELETE_EVENT = new Query(`
        DELETE FROM events
        WHERE userID = ? AND id = ?;
    `, [
        (event: DBEvent) => event.userID,
        (event: DBEvent) => event.id,
    ]
);

export {
    SELECT_USER, SELECT_USER_WHERE_USERNAME, SELECT_USER_WHERE_USERNAME_AND_PASSWORD, INSERT_USER, UPDATE_USER,
    INSERT_EVENT, UPDATE_EVENT, DELETE_EVENT, SELECT_EVENTS, SELECT_EVENT_WHERE_ID,
};
