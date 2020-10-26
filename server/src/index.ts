import express from 'express';
import cors from 'cors';
import middleware from './midleware';
import {
    authController,
    eventsController,
    notesController,
} from './controllers';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'I\'m alive!'
    });
});

app.use(middleware.logger);
app.use(middleware.jwtAuthentication);

const api = express.Router();
api.get('/', (req, res) => {
    console.log('req.headers');
    console.log(req.headers);
    res.json({
        version: process.version,
    });
});
api.use('/auth', authController);
api.use('/events', eventsController);
api.use('/notes', notesController);

app.use('/api/v1', api);
app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});
