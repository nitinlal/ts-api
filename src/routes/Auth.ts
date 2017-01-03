import e = require('express');
import Router = e.Router;
import passport = require('passport');
export class AuthRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();  // initiate all route for this project
  }

  init() {
    this.router.post('/login', () => {
      passport.authenticate('local'),
        (req, res) => {
          res.redirectStart('/users' + req.user.username);
        }
    });
  }
}

let auth = new AuthRouter();
auth.init();
export default auth.router;