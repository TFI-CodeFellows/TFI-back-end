'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const USER = require('./models/users');

const seedUser = async () => {
  await USER.create({
    title: String,
    crypto: ['Contains Crypto'],
    nft: ['Contains NFT']
  });

  mongoose.disconnect();
};

seedUser();
