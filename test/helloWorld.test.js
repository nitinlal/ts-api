"use strict";
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp); // this is an additional feature of chai so you need to use it specifically
const App_1 = require('../src/App');
const expect = chai.expect;
describe('baseRoute', () => {
    it('response should be json', () => {
        chai.request(App_1.default).get('/')
            .then((res) => {
            expect(res.type).to.eql('application/json');
        });
    });
    it('response should have a json prop', () => {
        chai.request(App_1.default).get('/')
            .then((res) => {
            expect(res.body.message).to.eql('Hello World!');
        });
    });
});
