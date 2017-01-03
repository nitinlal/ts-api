"use strict";
const e = require('express');
var Router = e.Router;
const passport = require('passport');
class AuthRouter {
    constructor() {
        this.router = Router();
        this.init(); // initiate all route for this project
    }
    init() {
        this.router.post('/login', () => {
            passport.authenticate('local'),
                    (req, res) => {
                    res.redirectStart('/users' + req.user.username);
                };
        });
    }
}
exports.AuthRouter = AuthRouter;
let auth = new AuthRouter();
auth.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = auth.router;
