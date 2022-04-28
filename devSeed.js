'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const dev = require('././models/dev');

const devSeed = async () => {
  await dev.create({
    name: 'Hugo Thompson',
    bio: " Hi, I'm Hugo Thompson, I'm a Software Engineer. I started my coding journey about halfway through high school, where I found a game that had a repository anyone could contribute to. I thought the idea of that was really cool and so I self learned a bit of the language to contribute myself. It was super fun to deliver new features, patch bugs, and rework mechanics for players and get fun positive feedback! This continued until I graduated, and while originally I was going to go ahead into college… both my enjoyment of coding and covid hitting at a real nasty time made me decide to instead continue my self learning instead of dealing with online college classes at full price. I self learned some more for about two years, branched out a little bit into python and a bit of typescript for interest, but I still felt a little unsure about fully lacking any kind of formal education, so instead I joined code fellows to become a proper software developer. I'm currently learning there to fill in the holes, learn the industry, and build connections!",
    imageURL:'https://res.cloudinary.com/software-developer/image/upload/v1650823210/Hugo1_qa02jr.jpg',
    email: 'bazelart13@gmail.com@gmail.com',
    github: 'https://github.com/laptopadventure',
    linkedIn: 'https://www.linkedin.com/in/hugo-thompson-laptopadventure/',
    role: 'Lead Frontend Developer',
    admin: true,
  });

  mongoose.disconnect();
};
devSeed();
