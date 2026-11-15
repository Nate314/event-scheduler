import { DBUser } from '../../../shared-models/db/user.model';
import { Repository } from '../db/repository';
import { config } from '../config';
import jwt from 'jsonwebtoken';
import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

const repository = new Repository();

const getEncryptedPassword = (plaintextPassword: string) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(plaintextPassword, salt);
    return hash;
};

router.post('/create-account', async (req, res) => {
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

router.post('/login', async (req, res) => {
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

router.get('/user-count', async (req, res) => {
    res.json(await repository.selectUserCount());
});

export default router;
