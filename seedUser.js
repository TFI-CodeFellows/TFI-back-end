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
  await USER.create({
    fName: 'Danny',
    lName: 'Castro',
    email: 'dcastro01@gmail.com',
    user: true,
    admin: true,
    visits: 1
  });
  await USER.create({
    fName: 'Cesar',
    lName: 'Deltoro',
    email: 'cesardeltorojr@gmail.com',
    user: true,
    admin: true,
    visits: 1
  });
  await USER.create({
    fName: 'Marta',
    lName: 'Deneke',
    email: 'mrtdenneke@gmail.com',
    user: true,
    admin: true,
    visits: 1
  });
  await USER.create({
    fName: 'Hugo',
    lName: 'Thompson',
    email: 'bazelart13@gmail.com@gmail.com',
    user: true,
    admin: true,
    visits: 1
  });
  await USER.create({
    fName: "Elon",
    lName: "Mask",
    email: 'elonmask@tesla.com',
    user: true,
    admin: false,
    visits: 20
  });
  await USER.create({
    fName: "Jeff",
    lName: "Bezoos",
    email: 'jeffbezoos@amazon.com',
    user: true,
    admin: false,
    visits: 1,
  });
  await USER.create({
    fName: "Mark",
    lName: "Zukerberg",
    email: 'markzukerberg@meta.com',
    user: true,
    admin: false,
    visits: 1
  });
  await USER.create({
    fName: "Marc",
    lName: "Kuban",
    email: 'marckuban@marckuban.com',
    user: true,
    admin: false,
    visits: 1
  });
  await USER.create({
    fName: "Cheryl",
    lName: "Sambern",
    email: 'cherylSambern@meta.com',
    user: true,
    admin: false,
    visits: 1
  });
  await USER.create({
    fName: "Elizabeth",
    lName: "Holmess",
    email: 'elizabethholmess@yahoo.com',
    user: true,
    admin: false,
    visits: 1
  });


mongoose.disconnect();
};

seedUser();
