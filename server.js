'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
//upload functionality
const multer = require('multer');
const { storage } = require('./cloudinary');
const upload = multer({ storage });
// const verifyUser = require('./auth.js');
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
const NFT = require('./models/nft');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

app.get('/nft', async (request, response) => {
  try {
    const nft = await NFT.find();
    response.status(200).send(nft);
  } catch (error) {
    response.status(400).send("No nft's");
  }
});

app.post('/nft', upload.single("image"), async (req, res) => {
  const nftData = {
    title: req.body.title,
    type: req.body.type,
    imageURL: req.file.path,
    description: req.body.description,
    price: req.body.price,
    ratings: req.body.ratings,
  }
  const newNft = await NFT.create(nftData);
  res.status(204).send('NFT Was successfully minted');
})

//Landing page for testing purposes
app.get('/', (request, response) => {
  response.send('We Are Working!!!');
});
//Auth0 implementation
// app.use(verifyUser);
//Error Handling
app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
