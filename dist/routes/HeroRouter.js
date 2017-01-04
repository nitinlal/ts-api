"use strict";
const e = require("express");
var Router = e.Router;
class Hero {
}
class HeroRouter {
    constructor() {
        this.router = Router();
        this.init();
    }
    getAll(req, res, next) {
        res.set('Content-Type', 'application/json');
        res.send(['superman', 'flash', 'Spiderman']);
    }
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.HeroRouter = HeroRouter;
const heroRoutes = new HeroRouter();
heroRoutes.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = heroRoutes.router;
