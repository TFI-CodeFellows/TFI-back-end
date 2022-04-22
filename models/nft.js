'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const nftSchema = new Schema({
  title: String,
  type: String,
  imageURL: String,
  description: String,
  price: Number,
  ratings: Number,
  email: String,
});

const NFT = mongoose.model('nft', nftSchema);

module.exports = NFT;
