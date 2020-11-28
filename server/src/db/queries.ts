import { DBEvent } from '../../../shared-models/db/event.model';
import { DBNote } from '../../../shared-models/db/note.model';
import { DBUser } from '../../../shared-models/db/user.model';
import { Query } from './database';
import { Search } from './repository';

const formatTime = (time: string) => {
    if (time) {
        const hour = Number(time.split(/[: ]/)[0]);
        const minute = Number(time.split(/[: ]/)[1]);
        const isPM = time.toUpperCase().includes('PM');
        return `${
            hour + (isPM ? (hour < 12 ? 12 : 0) : (hour === 12 ? -12 : 0))
        }:${
            minute
        }:00`;
    } else {
        return '00:00:00';
    }
};

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

const SELECT_USER_COUNT = new Query(`
        SELECT COUNT(*) AS count
        FROM users;
    `, [
    ]
);

const INSERT_EVENT = new Query(`
        INSERT INTO events (id, userID, title, date, time)
        VALUES (?, ?, ?, ?, ?);
    `, [
        (event: DBEvent) => event.id,
        (event: DBEvent) => event.userID,
        (event: DBEvent) => event.title,
        (event: DBEvent) => event.date,
        (event: DBEvent) => formatTime(event.time),
    ]
);

const SELECT_EVENTS = new Query(`
        SET @row_number = 0;
        SELECT id, userID, title, date, time, num
        FROM (
            SELECT archived, id, userID, title, date, time, @row_number:=@row_number+1 AS num
            FROM events
            WHERE userID = ?
            ORDER BY id ASC
        ) temp
        WHERE archived = 0
        ORDER BY date DESC;
    `, [
        (event: DBEvent) => event.userID,
    ]
);

const SELECT_NEXT_EVENT_NUM = new Query(`
        SELECT COUNT(*) + 1 AS num
        FROM events
        WHERE userID = ?;
    `, [
        (event: DBEvent) => event.userID,
    ]
);

const SELECT_EVENT_WHERE_ID = new Query(`
        SELECT id, userID, title, date, time
        FROM events
        WHERE archived = 0 AND userID = ? AND id = ?;
    `, [
        (event: DBEvent) => event.userID,
        (event: DBEvent) => event.id,
    ]
);

const SELECT_EVENT_MAX_ID_WHERE_USER_ID = new Query(`
        SELECT MAX(id) AS id
        FROM events
        WHERE archived = 0 AND userID = ?;
    `, [
        (event: DBEvent) => event.userID,
    ]
);

const UPDATE_EVENT = new Query(`
        UPDATE events
        SET id = ?,
            userID = ?,
            title = ?,
            date = ?,
            time = ?
        WHERE archived = 0 AND userID = ? AND id = ?;
    `, [
        (event: DBEvent) => event.id,
        (event: DBEvent) => event.userID,
        (event: DBEvent) => event.title,
        (event: DBEvent) => event.date,
        (event: DBEvent) => formatTime(event.time),
        (event: DBEvent) => event.userID,
        (event: DBEvent) => event.id,
    ]
);

const DELETE_EVENT = new Query(`
        UPDATE events
        SET archived = 1
        WHERE userID = ? AND id = ?;
    `, [
        (event: DBEvent) => event.userID,
        (event: DBEvent) => event.id,
    ]
);

const INSERT_NOTE = new Query(`
        INSERT INTO notes (eventID, userID, description, date, pinned)
        VALUES (?, ?, ?, ?, ?);
    `, [
        (note: DBNote) => note.eventID,
        (note: DBNote) => note.userID,
        (note: DBNote) => note.description,
        (note: DBNote) => note.date,
        (note: DBNote) => note.pinned ? 1 : 0,
    ]
);

const SELECT_NOTE = new Query(`
        SELECT id, eventID, userID, description, date, pinned
        FROM events
        WHERE archived = 0 AND id = ?
    `, [
        (note: DBNote) => note.id,
    ]
);

const SELECT_NOTES_WHERE_EVENT_ID = new Query(`
        SELECT id, eventID, userID, description, date, pinned
        FROM notes
        WHERE archived = 0 AND eventID = ?
        ORDER BY date DESC
    `, [
        (note: DBNote) => note.eventID,
    ]
);

const UPDATE_NOTE = new Query(`
        UPDATE notes
        SET eventID = ?,
            userID = ?,
            description = ?,
            date = ?,
            pinned = ?
        WHERE archived = 0 AND id = ?
    `, [
        (note: DBNote) => note.eventID,
        (note: DBNote) => note.userID,
        (note: DBNote) => note.description,
        (note: DBNote) => note.date,
        (note: DBNote) => note.pinned ? 1 : 0,
        (note: DBNote) => note.id,
    ]
);

const DELETE_NOTE = new Query(`
        UPDATE notes
        SET archived = 1
        WHERE id = ?
    `, [
        (note: DBNote) => note.id,
    ]
);

const DELETE_NOTES_WHERE_EVENT_ID = new Query(`
        UPDATE notes
        SET archived = 1
        WHERE eventID = ?
    `, [
        (event: DBEvent) => event.id,
    ]
);

function getSearchParams() {
    return [
        (search: Search) => search.userID,
        (search: Search) => {
            if (!search.description) {
                if (search.minDate || search.maxDate) {
                    return '%';
                } else {
                    return Array(32)
                        .fill(null)
                        .map(() => String.fromCharCode(
                            32 + (Math.random() * (126 - 32))
                        ))
                        .join('');
                }
            } else {
                return `%${search.description}%`;
            }
        },
        (search: Search) => search.minDate || '1600-01-01',
        (search: Search) => search.maxDate || '3000-01-01',
        (search: Search) => search.onlyIncludePinnedNoteEvents,
    ]
}

const SELECT_EVENTIDS_WHERE_EVENT_SEARCH = new Query(`
        SELECT DISTINCT events.id as eventID
        FROM events
        LEFT OUTER JOIN notes ON events.id = notes.eventID
        WHERE events.userID = ? AND events.archived = 0
            AND events.title LIKE ?
            AND events.date >= ?
            AND events.date <= ?
            AND CASE WHEN ? = 1 THEN notes.pinned = 1 ELSE 1 = 1 END
    `,
    getSearchParams()
);

const SELECT_EVENTIDS_WHERE_NOTES_SEARCH = new Query(`
        SELECT eventID
        FROM notes
        WHERE userID = ? AND archived = 0
            AND description LIKE ?
            AND date >= ?
            AND date <= ?
            AND CASE WHEN ? = 1 THEN pinned = 1 ELSE 1 = 1 END
    `,
    getSearchParams()
);

export {
    SELECT_USER, SELECT_USER_WHERE_USERNAME, SELECT_USER_WHERE_USERNAME_AND_PASSWORD, INSERT_USER, UPDATE_USER, SELECT_USER_COUNT,
    INSERT_EVENT, UPDATE_EVENT, DELETE_EVENT, SELECT_EVENTS, SELECT_NEXT_EVENT_NUM, SELECT_EVENT_WHERE_ID,
        SELECT_EVENT_MAX_ID_WHERE_USER_ID,
    INSERT_NOTE, SELECT_NOTE, SELECT_NOTES_WHERE_EVENT_ID, UPDATE_NOTE, DELETE_NOTE, DELETE_NOTES_WHERE_EVENT_ID,
    SELECT_EVENTIDS_WHERE_EVENT_SEARCH, SELECT_EVENTIDS_WHERE_NOTES_SEARCH,
};
