const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    age: Number
});
const User = mongoose.model('user', userSchema);
modules.export = User;