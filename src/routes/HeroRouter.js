"use strict";
const e = require('express');
var Router = e.Router;
const Heroes_1 = require('../../data/Heroes');
class Hero {
}
class HeroRouter {
    constructor() {
        this.heroes = [
            { name: "spider man" },
            { name: 'super man' },
            { name: 'flash' },
            { name: 'reverse flash' },
            { name: 'Wolverine' }
        ];
        this.router = Router();
        this.init();
    }
    getAll(req, res, next) {
        res.set('Content-Type', 'application/json');
        res.send(Heroes_1.default);
    }
    // no public so private by default
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.HeroRouter = HeroRouter;
const heroRoutes = new HeroRouter();
heroRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = heroRoutes.router;
