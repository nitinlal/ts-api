import e = require('express');
import Router = e.Router;
import NextFunction = e.NextFunction;
import Response = e.Response;
import {Heroes, default as heroes} from '../../data/Heroes';
import Request = e.Request;

class Hero {
  name: String;
}
export class HeroRouter {
  router: Router;
  heroes: Array<Hero> = [
    {name: "spider man"},
    {name: 'super man'},
    {name: 'flash'},
    {name: 'reverse flash'},
    {name: 'Wolverine'}
  ];

  constructor() {
    this.router = Router();
    this.init();
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    res.set('Content-Type', 'application/json');
    res.send(heroes);
  }

  // no public so private by default
  init() {
    this.router.get('/', this.getAll);
  }
}

const heroRoutes = new HeroRouter();
heroRoutes.init();
export default heroRoutes.router;