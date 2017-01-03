import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import HeroRouter from './routes/HeroRouter';
import AuthRouter from './routes/Auth';
import {AuthRouter} from './routes/Auth';
const mongoose = require('mongoose');

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({extended: false}));

    mongoose.connect('mongodb://localhost:27017/users_test', (err, database) => {
      if (err) {
        throw err;
      }
      console.log('Mongoose Connection Successfully established...');
    });
  }

  private routes(): void {
    let router = express.Router();
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
    this.express.user('/login', AuthRouter);
    this.express.use('/api/v1/heroes', HeroRouter);
  }

}
export default new App().express;