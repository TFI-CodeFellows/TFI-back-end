'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const walletSchema = new Schema({
  title: String,
  type: String,
  imageURL: String,
  description: String,
  price: Number,
  ratings: Number,
  email: String,
});

const WALLET = mongoose.model('wallet', walletSchema);

module.exports = WALLET;
