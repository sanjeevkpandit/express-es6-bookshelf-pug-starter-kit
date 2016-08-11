import express from 'express';
import User from '../models/User/User';

export default () => {
    let router = express.Router();

    router.get('/', (req, res) => {
        User.forge()
            .fetchAll()
            .then((users) => {
                res.json(users.toJSON());
            });
    });

    return router;
};
