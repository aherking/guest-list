//API module: ROUTES!!
'use strict';
//Express Server
const express = require('express');
const Guest = require('../models/guest');
//const guests = require('../../mock/guests.json');

const router = express.Router();

//GET method to get guests url
router.get('/guests', function(req, res) {
  //Guest Model use find method
  Guest.find({}, function(err, guests) {
    //Guest.find ({rsvpd:''})
    if(err) {
    return res.status(500).json({message: err.message});//internal server error
  }
  // No err, respond with our Guests as a JSON object
  res.json({ guests: guests});
  });
});

//Post ROUTE method to create new guest, store in database
  router.post('/guests', function(req, res) {
    let guest = req.body;
    Guest.create(guest, function(err, guest) {
      if(err){
        return res.status(500).json("Halt! Error!");
      }
      res.json({'guest': guest, message: "Guest created!"});
    });
  });

//Put ROute to update existing entries
router.put('/guests/:id', function (req, res) {//id param
  let id = req.params.id;
  let guest = req.body; //data for guest, need body parser for responses
  if (guest && guest._id !== id) {
    return res.status(500).json("No bueno. IDs need to match.");
  }
  //Mongoose search with options param- says we want new data back
  Guest.findByIdAndUpdate(id, guest, {new: true}, function (err, guest) {
    if (err) {
      return res.status(500).json("Halt! Error!");
    }
    //Send response
    res.json({'name': guest, message: 'Guest updated!'});
  });
});

//Delete route to delete guest
router.delete('/todos/:id', function(req, res) {
  let id = req.params.id;
  Guest.findByIdAndRemove(id, function(err, result){
    if(err){
      return res.status(500).json("Halt! Error!");
    }
    res.json({message: guest.name + " has been deleted."});
  });
});

//Export router
module.exports = router;
