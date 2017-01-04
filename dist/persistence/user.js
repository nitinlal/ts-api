"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    age: Number
});
const User = mongoose.model('user', userSchema);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;
