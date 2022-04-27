'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const nft = require('./models/nft.js');
const crypto = require('./models/crypto.js');
const dev = require('./models/dev.js');
const WALLET = require('./models/wallet.js');

const clearDatabase = async () => {
  await nft.deleteMany({});
  await crypto.deleteMany({})
  await dev.deleteMany({})
  await WALLET.deleteMany()
  .then(() => console.log('deleted all items in the database!'));
};
clearDatabase();
