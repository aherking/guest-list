//API module

'use strict';
//Express Server
const express= require('express');
//Require Guest Model
const guest = require('../models/guest');
//const guest = require('../mock/guests.json'); //Import Mock data into API Controller

//API Routes
const router = express.Router();
//GET method to get guests
router.get('/model/guests', function(req, res) {
//Guest Model use find method
Guest.find({}, function(err, todos) {
//Guest.find ({rsvpd:''})
  if(err) {
    //console.log(err);
    return res.status(500).json({message: err.message});//internal server error
  }
  // No err, respond with our Guests as a JSON object
  res.json({guests: guests});
  });
});

//Guest: Post route to create new guest
//Put ROute to update existing entries
//Delete route to delete guest

//Export router
module.exports = router;
