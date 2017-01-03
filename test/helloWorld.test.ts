import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp); // this is an additional feature of chai so you need to use it specifically
import app from '../src/App';
const expect = chai.expect;

describe('baseRoute', ()=> {
  it('response should be json', () => {
    chai.request(app).get('/')
      .then((res) => {
        expect(res.type).to.eql('application/json');
      });
  });

  it('response should have a json prop', () => {
    chai.request(app).get('/')
      .then((res) => {
        expect(res.body.message).to.eql('Hello World!');
      });
  });
});
