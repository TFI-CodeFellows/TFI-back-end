'use strict';
// DOTENV Config
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//upload Image functionality
const multer = require('multer');
const { storage } = require('./cloudinary');
const upload = multer({ storage });

//Auth0
const verifyUser = require('./auth.js');

//App using express & JSON
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());

//MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

//Models for MongoDB
const NFT = require('./models/nft');
const WALLET = require('./models/wallet')
const DEV = require('./models/dev');
const CRYPTO = require('./models/crypto');
const USER = require('./models/users');

// Landing path
app.get('/', handleGetAllnfts);
app.get('/dev', handelgetAllDevs);

// Do not move line this line below <*>
app.use(verifyUser);

//Wallet paths
app.get('/wallet', handleGetUserWallet);
app.delete('/wallet/:id', handleDeleteUserWallet);
app.post('/wallet', handlePostWallet);


// dev Paths
app.get('/userDev', handleGetUserDev);
app.put('/dev/:id', handleUpdateDev);

//NFT Paths
app.get('/nft', handleGetUsernfts);
app.put('/nft/:id', handleUpdateNft);
app.post('/nft', upload.single('image'), handleCreateNft);
app.delete('/nft/:id', handleDeleteNft);
app.put('/nft/:id', handleUpdateNft);

// Crypto Path
app.get('/crypto', handleGetUserCrypto);
app.post('/crypto', handleCreateCrypto);
app.delete('/crypto/:id', handleDeleteCrypto);

//Dev Functions
async function handelgetAllDevs(req, res) {
  try {
    const dev = await DEV.find();
    res.status(200).send(dev);
  } catch (error) {
    console.error(error);
    res.status(400).send('Could not find dev');
  }
}
async function handleGetUserDev(req, res) {
  try {
    const dev = await DEV.find({ email: req.user.email });
    res.status(200).send(dev);
  } catch (error) {
    console.error(error);
    res.status(400).send('Could not find dev');
  }
}
async function handleUpdateDev(req, res) {
  try {
    const result = await DEV.findOneAndUpdate(
      { _id: req.params.id, email: req.user.email },
      req.body
    );
    res.status('200').send(result);
  } catch (error) {
    next(error.message);
  }
}

// NFT Functions
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
  const { email, fName, lName} = req.user
  try {
    const nft = await NFT.find({ email: email, fName: fName, lName: lName });
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
    const nft = await NFT.findOne({ _id: id, email: req.user.email })
    if (nft) {
      await NFT.findByIdAndDelete({ _id: id })
        .then(() => res.status('200').send('NFT was deleted'));
    }
  } catch (error) {
    next(error.message);
  }
}
async function handleUpdateNft(req, res) {
  try {
    const updateNFT = await NFT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(updateNFT);
  } catch (e) {
    res.status(500).send('servere error');
  }
}

//Crypto Functions
async function handleGetUserCrypto(req, res) {
  try {
    const coins = await CRYPTO.find({ email: req.user.email });
    res.status(200).send(coins);
  } catch (error) {
    res.status(400).send('Could not find coins');
  }
}
async function handleCreateCrypto(req, res) {
  try {
    const findCoin = await CRYPTO.findOne({ ...req.body, email: req.user.email });
    if (!findCoin) {
      const coin = await CRYPTO.create({ ...req.body, email: req.user.email });
    }
    res.status(204).send("coins were succussfully added");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function handleDeleteCrypto(req, res) {
  const { id } = req.params;
  try {
    const coin = await CRYPTO.findOne({ _id: id });
    if (coin) {
      await CRYPTO.findByIdAndDelete(id);
      res.status(204).send('coins were succussfully deleted');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function handleCreateCrypto(req, res) {
  try {
    const coins = await CRYPTO.create({ ...req.body, email: req.user.email });
    res.status(204).send('coins were succussfully added');
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Functions for Wallet
async function handleGetUserWallet(req, res) {
  try {
    const wallet = await WALLET.find({ email: req.user.email });
    res.status(200).send(wallet);
  } catch (error) {
    console.error(error);
    res.status(400).send('Could not find user wallet Information');
  }
}
async function handleDeleteUserWallet(req, res) {
  const { id } = req.params;
  try {
    const wallet = await WALLET.findByIdAndDelete(id);
    res.send(wallet)
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function handlePostWallet(req, res) {
  try {
    const findWallet = await WALLET.findOne({ ...req.body, email: req.user.email });
    if (!findWallet) {
      const wallet = await WALLET.create({ ...req.body, email: req.user.email });
    }
    res.status(204).send('Created item in Wallet');
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// ADMIN FUNCTIONALITY STRECH GOAL
app.get('/usersList', handleGetUsers);
app.get('/userProfile', handleGetUserProfile);
app.delete('/deleteUser/:id', handleDeleteUser);

async function handleGetUsers(req, res) {
  try {
    const users = await USER.find();
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(400).send("Could not find nft's");
  }
}

async function handleGetUserProfile(req, res) {
  const { given_name, family_name, email } = req.user;
  try{
    const userProfile = await USER.find({email: email})
    if(userProfile.length === 0){
      const userData = {
        fName: given_name,
        lName: family_name,
        email: email,
        user: true,
        visits: 1,
        admin: false
      }
      const newUser =  await USER.create({...userData})
      res.send(newUser);
    }else{
      let visitNum  = userProfile[0].visits;
      const { _id } = userProfile[0];
      visitNum++;
      const userData = {
        fName: given_name,
        lName: family_name,
        email: email,
        user: true,
        visits: visitNum,
        admin: false
      }
      const updateUSER = await USER.findByIdAndUpdate(_id, userData, {
        new: true,
      });
      res.status(204).send(userProfile);
    }
  }catch(error){
    res.status(400).send(error.message);
  }
}

async function handleDeleteUser(req, res) {
  const { id } = req.params;
  try {
    const banUser = await USER.findByIdAndDelete(id);
    res.send(banUser)
  } catch (error) {
    res.status(400).send(error.message);
  }
}

  //Landing page for testing purposes
  app.get('/', (req, res) => {
    res.send('We Are Working!!!');
  });

  app.get('*', (req, res) => {
    res.send('Page not found');
  });

  //Error Handling
  app.use((error, req, res, next) => {
    res.status(500).send(error.message);
  });

  app.listen(PORT, () => console.log(`listening on ${PORT}`));
