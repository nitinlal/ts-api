import e = require('express');
import Router = e.Router;
import passport = require('passport');
import User from '../persistence/user';

export class AuthRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();  // use this for oauth
  }

  init() {
    console.log('Finding User from database...');
    User.find();

    /*this.router.post('/login', () => {
     passport.authenticate('local'),
     (req, res) => {
     res.redirectStart('/users' + req.user.username);
     }
     });*/

  }
}

let auth = new AuthRouter();
export default auth.router;