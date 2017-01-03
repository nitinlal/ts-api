"use strict";
class Heroes {
    constructor() {
        this.getHeroes = [
            "spider man",
            'super man',
            'flash',
            'reverse flash',
            'Wolverine'
        ];
    }
}
exports.Heroes = Heroes;
const heroes = new Heroes().getHeroes;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = heroes;
