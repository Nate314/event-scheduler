import express from 'express';
import cors from 'cors';
import middleware from './midleware';
import {
    authController
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
    res.json({
        version: process.version,
    });
});
api.use('/auth', authController);
api.get('/asdf', (req, res) => {
    throw Error('exception thrown');
});

app.use('/api/v1', api);
app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});
