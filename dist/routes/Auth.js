"use strict";
const e = require("express");
var Router = e.Router;
const user_1 = require("../persistence/user");
class AuthRouter {
    constructor() {
        this.router = Router();
        this.init(); // use this for oauth
    }
    getUser(req, res, next) {
        console.log('Finding User from database...');
        let user = user_1.default.find({
            name: 'Nitin Lal'
        }, (err, users) => {
            if (err) {
                throw err;
            }
            console.log('users from db...', users);
        });
        res.send(JSON.parse(user));
    }
    init() {
        this.router.get('/', this.getUser);
        /*this.router.post('/login', () => {
         passport.authenticate('local'),
         (req, res) => {
         res.redirectStart('/users' + req.user.username);
         }
         });*/
    }
}
exports.AuthRouter = AuthRouter;
const auth = new AuthRouter();
Object.defineProperty(exports, "__esModule", { value: true });
//auth.init();
exports.default = auth.router;
