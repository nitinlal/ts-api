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
        //set up Mongo
        Mongo.connect('mongodb://localhost:27017/users_test', (err, db) => {
            if (err) {
                console.log('error connecting to Mongo db');
                throw err;
            }
            console.log('Mongo Connection Successfully Set Up...');
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
