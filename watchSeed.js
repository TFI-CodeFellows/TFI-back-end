'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const wallet = require('./models/wallet');

const watchSeed = async () => {
  await wallet.create({
    
  });

  mongoose.disconnect();
};

watchSeed();
