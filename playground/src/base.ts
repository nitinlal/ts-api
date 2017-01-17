//this is only int type space
interface IBase {

}

export class Base {
  anotherLog = ()=> {
    console.log('hello world !');
  };

  log() {
    console.log('hello world!');
  }
}

let base = Base;
var ibase = IBase;