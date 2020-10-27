import { RequestHandler, ErrorRequestHandler } from 'express';
import * as config from './config.json';
import jwt from 'jsonwebtoken';

const logger: RequestHandler = (req, res, next) => {
    // console.log(req.headers);
    next();
}

const jwtAuthentication: RequestHandler = (req, res, next) => {
    try {
        if (!req.path.includes('/auth')) {
            const authHeader = req.headers.authorization;
            const token = authHeader.split('Bearer ')[1];
            jwt.verify(token, config.jwtTokenSecret)
            const decodedToken = jwt.decode(token) as { userID: number };
            req.headers.userID = `${decodedToken.userID}`;
        }
        next();
    } catch (error) {
        res.status(401);
        next(error);
    }
}

const notFound: RequestHandler = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

// eslint-disable-next-line no-unused-vars
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    const statusCode = res.statusCode;
    res.status(statusCode);
    res.json({
        status: statusCode,
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
        errors: error.errors || undefined,
    });
}

export default {
    logger,
    jwtAuthentication,
    notFound,
    errorHandler,
};
