'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const nft = require('./models/nft');

const seed = async () => {
  await nft.create({
    title: 'Bob',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511822/Bob_s8nkry.png',
    description:
      'Art peice created between students in a time of absolute desperation!',
    price: 48,
    Ratings: 4.6,
    email: 'dcmusic01@gmail.com',
  });

  await nft.create({
    title: 'Kai',
    type: 'animal',
    imageURL: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1650823034/idkhscziddeee33dyhqk.png',
    description: 'JJs amazing dog! Kai can code too!',
    price: 2,
    Ratings: 4.7,
    email: 'dcmusic01@gmail.com',
  });

  await nft.create({
    title: 'novela',
    type: 'art',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650511834/alki_wire_frame_g_fqbfux.png',
    description: 'Cool cover art created for a local band!',
    price: 2,
    Ratings: 4.7,
    email: 'dcmusic01@gmail.com',
  });

  await nft.create({
    title: 'Jax',
    type: 'animal',
    imageURL:
      'https://res.cloudinary.com/software-developer/image/upload/v1650512618/IMG_0950_rqhq8t.jpg',
    description: "Cesar's dog that helped him through highschool",
    price: 5,
    Ratings: 4.7,
    email: 'dcmusic01@gmail.com',
  });

  await nft.create({
    title: 'Hugo',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514348/Hugo-hoodie_yo8wm6.jpg',
    description: "Hugo...flossin'",
    price: 789,
    Ratings: 4.3,
    email: 'jaypesc@gmail.com',
  });
  await nft.create({
    title: 'Marta',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514560/B0E6B351-87A7-41DD-9260-9190336990D3_1_201_a_igndlq.jpg',
    description: 'Marta, Nuff said',
    price: 7,
    Ratings: 4.8,
    email: 'jaypesc@gmail.com',
  });

  await nft.create({
    title: 'Hugo',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514348/Hugo-hoodie_yo8wm6.jpg',
    description: "Hugo...flossin'",
    price: 789,
    Ratings: 4.3,
    email: 'jaypesc@gmail.com',
  });

  await nft.create({
    title: 'Marta',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514560/B0E6B351-87A7-41DD-9260-9190336990D3_1_201_a_igndlq.jpg',
    description: 'Marta, Nuff said',
    price: 7,
    Ratings: 4.8,
    email: 'jaypesc@gmail.com',
  });

  await nft.create({
    title: 'Hugo',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514348/Hugo-hoodie_yo8wm6.jpg',
    description: "Hugo...flossin'",
    price: 789,
    Ratings: 4.3,
    email: 'jaypesc@gmail.com',
  });

  await nft.create({
    title: 'Marta',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514560/B0E6B351-87A7-41DD-9260-9190336990D3_1_201_a_igndlq.jpg',
    description: 'Marta, Nuff said',
    price: 7,
    Ratings: 4.8,
    email: 'jaypesc@gmail.com',
  });

  await nft.create({
    title: 'Hugo',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514348/Hugo-hoodie_yo8wm6.jpg',
    description: "Hugo...flossin'",
    price: 789,
    Ratings: 4.3,
    email: 'jaypesc@gmail.com',
  });

  await nft.create({
    title: 'Marta',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514560/B0E6B351-87A7-41DD-9260-9190336990D3_1_201_a_igndlq.jpg',
    description: 'Marta, Nuff said',
    price: 7,
    Ratings: 4.8,
    email: 'jaypesc@gmail.com',
  });

  await nft.create({
    title: 'Hugo',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514348/Hugo-hoodie_yo8wm6.jpg',
    description: "Hugo...flossin'",
    price: 789,
    Ratings: 4.3,
    email: 'jaypesc@gmail.com',
  });

  await nft.create({
    title: 'Marta',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514560/B0E6B351-87A7-41DD-9260-9190336990D3_1_201_a_igndlq.jpg',
    description: 'Marta, Nuff said',
    price: 7,
    Ratings: 4.8,
    email: 'jaypesc@gmail.com',
  });

  await nft.create({
    title: 'Hugo',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514348/Hugo-hoodie_yo8wm6.jpg',
    description: "Hugo...flossin'",
    price: 789,
    Ratings: 4.3,
    email: 'jaypesc@gmail.com',
  });

  await nft.create({
    title: 'Marta',
    type: 'portrait',
    imageURL:
      'https://res.cloudinary.com/tfi/image/upload/v1650514560/B0E6B351-87A7-41DD-9260-9190336990D3_1_201_a_igndlq.jpg',
    description: 'Marta, Nuff said',
    price: 7,
    Ratings: 4.8,
    email: 'jaypesc@gmail.com',
  });
  console.log('Seeded database!');

  mongoose.disconnect();
};

seed();
