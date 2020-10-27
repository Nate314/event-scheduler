import { DBEvent } from '../../../shared-models/db/event.model';
import { Repository } from '../db/repository';
import express from 'express';

const router = express.Router();

const repository = new Repository();

function getUserIDFromRequest(req: any): number {
    return Number(req.headers.userID as string);
}

function getEventFromRequest(req: any): DBEvent {
    return req.body ? new DBEvent(
        req.body.id,
        req.body.userID,
        req.body.title,
        req.body.date,
    ) : null;
}

router.post('/', async (req, res) => {
    const event = getEventFromRequest(req);
    if (event && event.title && event.title.trim() && event.date) {
        event.id = null;
        event.title = event.title.trim();
        event.userID = getUserIDFromRequest(req);
        if (await repository.insertEvent(event)) {
            const createdEvent = await repository.selectEventMaxIDWhereUserID(event.userID);
            res.json(createdEvent ? createdEvent.id : 0);
        } else {
            res.status(500);
            res.json({message: 'error occurred when inserting event'});
        }
    } else {
        res.json({message: 'event must contain a non-empty title and date'});
    }
});

router.put('/', async (req, res) => {
    const event = getEventFromRequest(req);
    if (event && event.title && event.title.trim() && event.date && event.id) {
        event.title = event.title.trim();
        // const dbEvent = await repository.selectEventWhereID(getUserIDFromRequest(req), event.id);
        event.userID = getUserIDFromRequest(req);
        if (await repository.updateEvent(event)) {
            res.json(event.id);
        } else {
            res.status(500);
            res.json({message: 'error occurred when updating event'});
        }
    } else {
        res.json({message: 'event must contain a non-empty id, title, and date'});
    }
});

router.delete('/:id', async (req, res) => {
    const eventID = Number(req.params.id);
    if (eventID) {
        let deleteEventSuccess = true;
        deleteEventSuccess = deleteEventSuccess && await repository.deleteNotesWhereEventID(eventID);
        deleteEventSuccess = deleteEventSuccess && await repository.deleteEvent(getUserIDFromRequest(req), eventID);
        if (deleteEventSuccess) {
            res.json(true);
        } else {
            res.status(500);
            res.json({message: 'error occurred when deleting event'});
        }
    } else {
        res.json({message: 'please provide an event id in the route to delete'});
    }
});

router.get('/', async (req, res) => {
    const event = await repository.selectEvents(getUserIDFromRequest(req));
    res.json(event);
});

router.get('/:id', async (req, res) => {
    const eventID = Number(req.params.id);
    if (eventID) {
        const event = await repository.selectEventWhereID(getUserIDFromRequest(req), eventID);
        res.json(event);
    } else {
        res.json({message: 'please provide an event id in the route to retrieve'});
    }
});

export default router;
