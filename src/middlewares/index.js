import express from 'express';

export default () => {
    let routes = express.Router();

    let requestTime = (req, res, next) => {
        let d = new Date();
        req.requestTime = d.toDateString() + ' ' + d.toTimeString();
        next();
    };

    routes.use(requestTime);

    return routes;
}
