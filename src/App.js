"use strict";
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const HeroRouter_1 = require('./routes/HeroRouter');
const Mongo = require('mongodb').MongoClient;
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        Mongo.connect('mongodb://localhost:27017/users_test', (err, database) => {
            if (err) {
                throw err;
            }
            let db = database; // notice how a copy is being done to avoid direct changes
            db.collection('users_test')
                .find({}, (err, docs) => {
                if (err) {
                    throw err;
                }
                console.log('documents from db', docs);
            });
        });
    }
    routes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
        this.express.use('/api/v1/heroes', HeroRouter_1.default);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
