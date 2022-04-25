'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const cryptoSchema = new Schema({
    name: String,
    email: String
});

const Crypto = mongoose.model('crypto', cryptoSchema);

module.exports = Crypto;
