'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const dev = require('./models/dev');

const seed = async () => {
  await dev.create({
    name: 'Hugo Thompson',
    bio: " Hi, I'm Hugo Thompson, I'm a Software Engineer. I started my coding journey about halfway through high school, where I found a game that had a repository anyone could contribute to. I thought the idea of that was really cool and so I self learned a bit of the language to contribute myself. It was super fun to deliver new features, patch bugs, and rework mechanics for players and get fun positive feedback! This continued until I graduated, and while originally I was going to go ahead into college… both my enjoyment of coding and covid hitting at a real nasty time made me decide to instead continue my self learning instead of dealing with online college classes at full price. I self learned some more for about two years, branched out a little bit into python and a bit of typescript for interest, but I still felt a little unsure about fully lacking any kind of formal education, so instead I joined code fellows to become a proper software developer. I'm currently learning there to fill in the holes, learn the industry, and build connections!",
    imageURL:
      'https://res.cloudinary.com/software-developer/image/upload/v1650823210/Hugo1_qa02jr.jpg',

    email: 'bazelart13@gmail.com@gmail.com',
    github: 'https://github.com/laptopadventure',
    linkedIn: 'https://www.linkedin.com/in/hugo-thompson-laptopadventure/',
    role: 'Lead Frontend Developer',
    admin: true,
  });

  await dev.create({
    name: 'Marta Deneke',
    bio: "Hello my name is Marta Deneke , I am originally from Ethiopia. I received my bachelor's in MIS in 2020. Since, the pandemic had just started right before my graduation I had a difficult time finding a job. So I started to look into becoming a software engineer and researched different boot camps. Then, I joined Code Fellows in November. While attending Western Washington University, I worked and volunteered at various companies in order to find my true passion. As a first generation college graduate I have faced different challenges to be where I am today and once I land my dream job and become a Software Engineer I would like to start a nonprofit in Ethiopia for young women that are interested in tech but don't know where to start.",
    imageURL:
      'https://res.cloudinary.com/software-developer/image/upload/v1650823213/marta_xcbodp.jpg',

    email: 'mrtdenneke@gmail.com',
    github: 'https://github.com/denekm',
    linkedIn: 'https://www.linkedin.com/in/marta-deneke/',
    role: 'Product Owner',
    admin: true,
  });

  await dev.create({
    name: 'Danny Castro',
    bio: "Hello, my name is Danny. I recently was managing a warehouse for over 5 years and decided I needed a change. For most of my life I've been involved in music, be it writing, producing , and/or performing. Needless to say I have a strong creative side and wanted to express myself in a different medium. Software development allows just that. My friend was a drummer in my band and took on coding and suggested I looked into it and so I did. The creative process is a lot like writing music in software development. I work well with teams and love to motivate people and bring them together in achieving one goal. I believe my management skills along with my creative side I will be able to be an asset in a team environment. Taking classes in codeFellows and creating a page that I'm actually proud of has giving me the drive I need to continue exploring this path.",
    imageURL:
      'https://res.cloudinary.com/software-developer/image/upload/v1650823209/danny_g4umfm.jpg',

    email: 'mrtdenneke@gmail.com',
    github: 'https://github.com/Dcastro99',
    linkedIn: 'https://www.linkedin.com/in/dcastro99/',
    role: 'Lead Data Engineer',
    admin: true,
  });

  await dev.create({
    name: 'Cesar Deltoro',
    bio: `Hello, I'm Cesar Deltoro a Software Engineer based out of Seattle, WA. My journey into tech began in 2020 and I have been able to build applications with other developers throughout the last 2 years. I am always looking to learn new skills to sharpen my technical abilities, and focused on growth with an inclusive company of which I can develop user friendly applications.`,
    imageUrl:`https://res.cloudinary.com/software-developer/image/upload/v1650823279/IMG_1591_csgc7r.jpg`,
    github: 'https://github.com/cesardeltoroc',
    linkedIn: 'https://www.linkedin.com/in/cesardeltoroc/',
    email: 'cesardeltorojr@gmail.com',
    role: 'Lead Backend Developer',
    admin: true,
  });

  await dev.create({
    name: 'JJ Escandor',
    bio: "I'm a Data Scientist with background in software engineering and defense consulting leveraging over a decade of technical and consulting experience. Passionate about using code to optimize efficiency while developing creative, customer-focused solutions.",
    imageURL: `https://res.cloudinary.com/dxg5jg10h/image/upload/v1650997546/Screen_Shot_2022-04-26_at_2.25.20_PM_m6nczj.png`,
    github: 'https://github.com/jjescandor',
    linkedin: 'https://www.linkedin.com/in/jpescandor/',
    email: 'jaypesc@gmail.com',
    role: 'Project Manager',
    admin: true,
  });

  mongoose.disconnect();
};
seed();
