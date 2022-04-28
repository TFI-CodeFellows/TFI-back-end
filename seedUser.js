// STRECHHHHHHH GOAL
'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const USER = require('./models/users');

const seedUser = async () => {

  await USER.create({
    fName: 'JJ',
    lName: 'Escandor',
    email: 'jaypesc@gmail.com',
    user: true,
    admin: true,
    visits: 1
  });

mongoose.disconnect();
};

seedUser();
