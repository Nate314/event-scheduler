import { DBNote } from '../../../shared-models/db/note.model';
import { Repository } from '../db/repository';
import express from 'express';

const router = express.Router();

const repository = new Repository();

function getUserIDFromRequest(req: any): number {
    return Number(req.headers.userID as string);
}

function getNoteFromRequest(req: any): DBNote {
    return req.body ? new DBNote(
        req.body.id,
        req.body.userID,
        req.body.eventID,
        req.body.description,
        req.body.date,
    ) : null;
}

router.post('/', async (req, res) => {
    const note = getNoteFromRequest(req);
    note.userID = getUserIDFromRequest(req);
    if (note.description && note.description.trim() && note.date && note.eventID) {
        if (await repository.insertNote(note)) {
            res.json(true);
        } else {
            res.status(500);
            res.json({message: 'error occurred when inserting note'});
        }
    } else {
        res.status(400);
        res.json({message: 'note must contain a non-empty description and date'});
    }
});

router.get('/event/:eventID', async (req, res) => {
    const eventID = Number(req.params.eventID);
    if (eventID) {
        const notes = await repository.selectNotesWhereEventID(eventID);
        if (notes) {
            res.json(notes);
        } else {
            res.status(500);
            res.json({message: `error occurred when selecting notes for eventID: ${eventID}`});
        }
    } else {
        res.status(400);
        res.json({message: 'eventID must be defined'});
    }
});

router.get('/:noteID', async (req, res) => {
    const noteID = Number(req.params.noteID);
    if (noteID) {
        const note = await repository.selectNote(noteID);
        if (note) {
            res.json(note);
        } else {
            res.status(500);
            res.json({message: `error occurred when selecting note with noteID: ${noteID}`});
        }
    } else {
        res.status(400);
        res.json({message: 'noteID must be defined'});
    }
});

router.put('/', async (req, res) => {
    const note = getNoteFromRequest(req);
    if (note.id && note.eventID && note.date && note.description && note.description.trim()) {
        note.userID = getUserIDFromRequest(req);
        if (await repository.updateNote(note)) {
            res.json(true);
        } else {
            res.status(500);
            res.json({message: `error occurred when updating note with noteID: ${note.id}`});
        }
    } else {
        res.status(400);
        res.json({message: 'id && eventID && date && description must be defined'});
    }
});

router.delete('/:noteID', async (req, res) => {
    const noteID = Number(req.params.noteID);
    if (noteID) {
        if (await repository.deleteNote(noteID)) {
            res.json(true);
        } else {
            res.status(500);
            res.json({message: `error occurred when deleting note with noteID: ${noteID}`});
        }
    } else {
        res.status(400);
        res.json({message: 'noteID must be defined'});
    }
});

export default router;
