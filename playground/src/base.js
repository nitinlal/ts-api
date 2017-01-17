"use strict";
class Base {
    constructor() {
        this.anotherLog = () => {
            console.log('hello world !');
        };
    }
    log() {
        console.log('hello world!');
    }
}
exports.Base = Base;
