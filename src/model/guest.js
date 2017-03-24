//Model for mongoose(mongo db)
'use strict';
const mongoose = require('mongoose');
//Clear out Mongoose data and empty out all existing models & schemas
mongoose.models = {};
mongoose.modelSchemas = {};
//guest.name
//guest.rsvpd

//Type of data that can be saved
const guestSchema = new mongoose.Schema({
  name: String,
  rsvpd: Boolean
});

//Guest model
const model = mongoose.model('Guest', guestSchema);

module.exports = model;
