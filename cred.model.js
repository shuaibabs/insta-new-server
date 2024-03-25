const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Cred = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('Cred',  Cred);