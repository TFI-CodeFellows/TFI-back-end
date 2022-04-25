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
const DEV = require('./models/dev');
const Crypto = require('./models/crypto');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// Paths
app.get('/', handleGetAllnfts);
app.get('/dev', handelgetAllDevs);
// Do not move line 35 <*>
app.use(verifyUser);
app.get('/nft', handleGetUsernfts);
app.put('/nft/:id',handleUpdateNft);
app.post('/nft', upload.single('image'), handleCreateNft);
app.delete('/nft/:id', handleDeleteNft);
app.put('/nft/:id', handleUpdateNft);
app.put('/dev/:id', handleUpdateDev);

// Crypto Path
app.get('/crypto', handleGetUserCrypto);
app.post('/crypto', handleCreateCrypto);
app.delete('/crypto/:id', handleDeleteCrypto);

// functions for NFT
async function handelgetAllDevs(req, res) {
  try {
    const dev = await DEV.find();
    res.status(200).send(dev);
  } catch (error) {
    console.error(error);
    res.status(400).send('Could not find dev');
  }
}

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
  } catch (error) {
    console.error(error.message);
    res.status(400).send('Error');
  }
}
async function handleDeleteNft(req, res, next) {
  const { id } = req.params;
  try {
    const coin = await NFT.findOne({ _id: id})
    if (coin) {
      await NFT.findByIdAndDelete({
        _id: id
      });
    }
    res.status('200').send('NFT was deleted');
  } catch (error) {
    next(error.message);
  }
}
async function handleUpdateNft(req, res, next){
  try{
    const result = await NFT.findOneAndUpdate({_id: req.params.id, email: req.user.email}, req.body);
    res.status('200').send(result);
  }catch(error) {
    next(error.message);
  }
}

async function handleUpdateNft(req, res) {
  try {
    console.log('updating NFT');
    const updateNFT = await NFT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log('updatedNFT');
    res.status(200).send(updateNFT);
  } catch (e) {
    res.status(500).send('servere error');
  }
}

//Functions for Dev
async function handleUpdateDev(req, res) {
  try {
    const updateDev = await DEV.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(updateDev);
  } catch (e) {
    res.status(500).send('server error');
  }
}

//Functions for Crypto

async function handleGetUserCrypto(req, res) {
  try {
    const coins = await Crypto.find({ email: req.user.email });
    res.status(200).send(coins);
  } catch (error) {
    res.status(400).send("Could not find coins");
  }
}

async function handleCreateCrypto(req, res) {
  try {
    const coins = await Crypto.create({ ...req.body, email: req.user.email });
    res.status(204).send("coins were succussfully added");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function handleDeleteCrypto(req, res) {
  const { id } = req.params;
  try {
    const coins = await Crypto.find({ _id: id, email: req.user.email });
    console.log(coins);
    if (coins) {
      await Reading.findByIdAndDelete(id);
      res.status(204).send("coins were succussfully deleted");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function handleCreateCrypto(req, res) {
  try {
    const coins = await Crypto.create({ ...req.body, email: req.user.email });
    res.status(204).send("coins were succussfully added");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

//Landing page for testing purposes
app.get('/', (req, res) => {
  res.send('We Are Working!!!');
});

app.get('*', (req, res) => {
  res.send("Page not found");
})

//Error Handling
app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
