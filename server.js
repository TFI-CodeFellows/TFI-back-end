'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const verifyUser = require('./auth.js')
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());

//Landing page for testing purposes
app.get('/',  (request, response) => {
  response.send('We Are Working!!!')
})
//Auth0 implementation
app.use(verifyUser);
//Error Handling
app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
