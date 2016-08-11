import http from 'http';
import path from 'path';
import cors from 'cors';
import express from 'express';
import routes from './routes';
import config from './config.json';
import bodyParser from 'body-parser';
import middlewares from "./middlewares";

let app = express();

app.server = http.createServer(app);

app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(middlewares());
app.use('/', routes());

app.server.listen(config.port);

export default app;
