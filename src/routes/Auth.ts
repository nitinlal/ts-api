import e = require('express');
import Router = e.Router;
import Request = e.Request;
import Response = e.Response;
import NextFunction = e.NextFunction;
import User from '../persistence/user';

export class AuthRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();  // use this for oauth
  }

  public getUser(req: Request, res: Response, next: NextFunction) {
    console.log('Finding User from database...');
    let user = User.find({
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

const auth = new AuthRouter();
//auth.init();
export default auth.router;