'use strict';
const mongoose = require('mongoose');

const { Schema } = mongoose;

const devSchema = new Schema({
  name: String,
  bio: String,
  imageURL: String,
  github: String,
  linkedIn: String,
  email: String,
  role: String,
});

const DEV = mongoose.model('dev', devSchema);

module.exports = DEV;
