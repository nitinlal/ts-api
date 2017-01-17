import {Base} from './base'
export class child extends Base {
  log() {
    this.log();
  };
}

const childOne = new child();
childOne.log();