import { Repository } from './db/repository';
import { Database } from './db/database';
import * as config from './config.json';
import { DBUser } from './db/models';
import jwt from 'jsonwebtoken';
import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'I\'m alive!'
    });
});

const repository = new Repository(new Database({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
}));

const getEncryptedPassword = (plaintextPassword: string) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(plaintextPassword, salt);
    return hash;
};

app.post('/auth/create-account', async (req, res) => {
    if (req.body && req.body.username && req.body.password) {
        const username = req.body.username.toLowerCase();
        const password = getEncryptedPassword(req.body.password);
        const userWithUsername = await repository.selectUserWhereUsername(new DBUser(null, username));
        if (!userWithUsername) {
            await repository.insertUser(new DBUser(null, username, password));
            res.json(true);
        } else {
            res.status(400);
            res.json({message: 'username already used'});
        }
    } else {
        res.json({message: 'username and password required'});
    }
});

app.post('/auth/login', async (req, res) => {
    if (req.body && req.body.username && req.body.password) {
        const username = req.body.username.toLowerCase();
        const password = req.body.password;
        const user: DBUser = await repository.selectUserWhereUsername(new DBUser(null, username));
        if (await bcrypt.compare(password, user.Password)) {
            const now = Math.floor(Date.now() / 1000);
            const tokenLifespan = config.jwtTokenLifespan * 60;
            res.json(jwt.sign({
                userID: user.UserID,
                username: user.Username,
                iat: now,
                exp: now + tokenLifespan,
            }, config.jwtTokenSecret));
        } else {
            res.status(400);
            res.json({message: 'incorrect credentials'});
        }
    } else {
        res.json({message: 'username and password required'});
    }
});

app.use((error: any, req: any, res: any, next: any) => {
    res.status(500);
    res.json({
        message: error.message
    });
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});
