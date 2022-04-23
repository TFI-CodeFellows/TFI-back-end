'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

//upload Image functionality
const multer = require('multer');
const { storage } = require('./cloudinary');
const upload = multer({ storage });
//Auth0
const verifyUser = require('./auth.js');

const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());

//MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const NFT = require('./models/nft');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});
app.use(verifyUser);

// Paths
app.get('/nft', handleGetUsernfts);
app.get('/', handleGetAllnfts);
app.post('/nft', upload.single('image'), handleCreateNft);
app.delete('/nft/:id', handleDeleteNft);

// functions for Paths
async function handleGetAllnfts(req, res) {
  try {
    const nft = await NFT.find();
    res.status(200).send(nft);
  } catch (error) {
    console.error(error);
    res.status(400).send("Could not find nft's");
  }
}
async function handleGetUsernfts(req, res) {
  try {
    const nft = await NFT.find({ email: req.user.email });
    console.log('nft: ', nft);
    res.status(200).send(nft);
  } catch (error) {
    console.error(error);
    res.status(400).send("Could not find Usernft's");
  }
}
async function handleCreateNft(req, res) {
  try {
    const nftData = {
      title: req.body.title,
      type: req.body.type,
      imageURL: req.file.path,
      description: req.body.description,
      price: req.body.price,
      ratings: req.body.ratings,
      email: req.user.email,
    };
    const newNft = await NFT.create(nftData);
    res.status(204).send('NFT Was successfully minted');
  }catch(error){
    console.error(error.message);
    res.status(400).send('Error')
  }
}
    

async function handleDeleteNft(request, response, next) {
  try {
    await NFT.findByIdAndDelete({ _id: request.params.id, email: req.user.email});
    response.status('200').send('NFT was deleted');
  } catch (error) {
    next(error.message);
  }
}

//STRETCH GOAL
// app.patch('/nft/:id', handlePatchnfts);
// app.patch('/nft/:id', async (request, response, next) => {
//   try {
//     const result = await NFT.findOneAndUpdate(
//       { _id: request.params.id, email: request.user.email },
//       request.body
//     );
//     response.status('200').send(result);
//   } catch (error) {
//     next(error.message);
//   }
// });

//Landing page for testing purposes
app.get('/', (request, response) => {
  response.send('We Are Working!!!');
});



//Error Handling
app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
