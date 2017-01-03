"use strict";
const e = require("express");
var Router = e.Router;
const user_1 = require("../persistence/user");
class AuthRouter {
    constructor() {
        this.router = Router();
        this.init(); // use this for oauth
    }
    init() {
        console.log('Finding User from database...');
        user_1.default.find();
        /*this.router.post('/login', () => {
         passport.authenticate('local'),
         (req, res) => {
         res.redirectStart('/users' + req.user.username);
         }
         });*/
    }
}
exports.AuthRouter = AuthRouter;
let auth = new AuthRouter();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = auth.router;
