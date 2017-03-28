//Model for mongoose(db = guestlist)
'use strict';
const mongoose = require('mongoose');
//guest.name
//guest.rsvpd

//Type of data that can be saved
const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  rsvpd: Boolean
});

//Guest model method
const guest = mongoose.model('Guest', guestSchema);


module.exports = guest;
