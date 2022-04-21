'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const nft = require('./models/nft.js');

const clearDatabase = async () => {
  await nft.deleteMany({});
  console.log('deleted all items in the database!');
};
clearDatabase();
