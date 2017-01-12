import e = require('express');
import Router = e.Router;
import NextFunction = e.NextFunction;
import Response = e.Response;
import Request = e.Request;

class Hero {
  name: String;
}
export class HeroRouter {
  router: Router;
  heroes: Array<Object>;

  constructor() {
    this.router = Router();
    this.init();
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    res.set('Content-Type', 'application/json');
    res.send([1,2,3,5]);
  }

  init() {
    this.router.get('/', this.getAll);
  }
}

const heroRoutes = new HeroRouter();
heroRoutes.init();
export default heroRoutes.router;