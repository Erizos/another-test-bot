const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    quantity : {
        type: Number,
        required: true,
        min: 0
    },
    price : {
        type : Number,
        required: true,
        min: 0
    },
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;