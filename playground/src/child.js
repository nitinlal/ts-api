"use strict";
const base_1 = require('./base');
class child extends base_1.Base {
    log() {
        this.log();
    }
    ;
}
exports.child = child;
const childOne = new child();
childOne.log();
