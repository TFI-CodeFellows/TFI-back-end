'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const wallet = require('./models/wallet');

const walletSeed = async () => {
  await wallet.create({
    title: 'Bob',
    type: 'Portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511822/Bob_s8nkry.png',
    description:
      'Art peice created between students in a time of absolute desperation!',
    price: 48,
    Ratings: 4.6,
    email: 'dcmusic01@gmail.com',
  });
  await wallet.create({
    title: 'Bob',
    type: 'Portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511822/Bob_s8nkry.png',
    description:
      'Art peice created between students in a time of absolute desperation!',
    price: 48,
    Ratings: 4.6,
    email: 'dcmusic01@gmail.com',
  });
  await wallet.create({
    title: 'Bob',
    type: 'Portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511822/Bob_s8nkry.png',
    description:
      'Art peice created between students in a time of absolute desperation!',
    price: 48,
    Ratings: 4.6,
    email: 'dcmusic01@gmail.com',
  });
  await wallet.create({
    title: 'Bob',
    type: 'Portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511822/Bob_s8nkry.png',
    description:
      'Art peice created between students in a time of absolute desperation!',
    price: 48,
    Ratings: 4.6,
    email: 'dcmusic01@gmail.com',
  });
  await wallet.create({
    title: 'Bob',
    type: 'Portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511822/Bob_s8nkry.png',
    description:
      'Art peice created between students in a time of absolute desperation!',
    price: 48,
    Ratings: 4.6,
    email: 'jaypesc@gmail.com',
  });
  await wallet.create({
    title: 'Bob',
    type: 'Portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511822/Bob_s8nkry.png',
    description:
      'Art peice created between students in a time of absolute desperation!',
    price: 48,
    Ratings: 4.6,
    email: 'jaypesc@gmail.com',
  });
  await wallet.create({
    title: 'Bob',
    type: 'Portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511822/Bob_s8nkry.png',
    description:
      'Art peice created between students in a time of absolute desperation!',
    price: 48,
    Ratings: 4.6,
    email: 'jaypesc@gmail.com',
  });
  await wallet.create({
    title: 'Bob',
    type: 'Portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511822/Bob_s8nkry.png',
    description:
      'Art peice created between students in a time of absolute desperation!',
    price: 48,
    Ratings: 4.6,
    email: 'jaypesc@gmail.com',
  });
  await wallet.create({
    title: 'Bob',
    type: 'Portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511822/Bob_s8nkry.png',
    description:
      'Art peice created between students in a time of absolute desperation!',
    price: 48,
    Ratings: 4.6,
    email: 'jaypesc@gmail.com',
  });
  await wallet.create({
    title: 'Bob',
    type: 'Portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511822/Bob_s8nkry.png',
    description:
      'Art peice created between students in a time of absolute desperation!',
    price: 48,
    Ratings: 4.6,
    email: 'jaypesc@gmail.com',
  });
  console.log("Seeded wallet database");

  mongoose.disconnect();
};

walletSeed();
