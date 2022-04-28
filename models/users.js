'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  fName: String,
  lName: String,
  email: String,
  user: Boolean,
  admin: Boolean,
  visits: Number,
});

const USER = mongoose.model('user', userSchema);

module.exports = USER;
