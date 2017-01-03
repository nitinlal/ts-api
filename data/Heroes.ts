export class Heroes {
  name: string;
  getHeroes: Array<any> = [
    "spider man",
    'super man',
    'flash',
    'reverse flash',
    'Wolverine'

  ]
}
const heroes = new Heroes().getHeroes;
export default heroes;

