//API module: ROUTES!!
'use strict';
//Express Server
const express = require('express');
const Guest = require('../models/guest');
//API Routes
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

//Post ROUTE method to create new guest
// router.post('/guests', function (req, res) {
//   let guest = new Guest(req.body); //data for guest, need body parser for responses
//   guest.save(function(err, guest){
//     if(err) return next(err);
//     res.status(201);
//     res.json(guest);
//   });
  ////////////////////////////////////
  router.post('/guests', function(req, res) {
    let guest = req.body;
    Guest.create(guest, function(err, guest) {
      if(err){
        return res.status(500).json("Halt! Error!");
      }
      res.json({'name': guest, message: "Guest Added!"});
    });
  });

  //create a Guest/Store in db
//   Guest.create(guest, function(err, guest) { //1st param. err, 2nd param new guest
//     if (err) {
//       return res.status(500).json({err: err.message});
//     }
//     //Send response
//     res.json({name: guest, message: 'Guest added!'});
//   });
// });

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
