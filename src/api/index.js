//API module : ROUTES!!

'use strict';

const express= require('express');
//API Routes
const router = express.Router();
//const Guest = require('./models/guest');

//GET guests url
router.get('/guests', function(req, res) {
  //Guest Model use find method
  Guest.find({}, function(err, guests) {
    if(err) {
    return res.status(500).json({message: err.message});//internal server error
  }
  // No err, respond with our Guests as a JSON object
  res.json({guests: guests});
  });
});

//POST to create new guest
router.post('/guests', function (req, res) {
  let guest = new Guest(req.body); //data for guest, need body parser for responses
  guest.save(function(err, guest){
    if(err) return next(err);
    res.status(201);
    res.json(guest);
  })

  //POST a Guest/Store in db
  Guest.create(guest, function(err, guest) { //1st param. err, 2nd param new guest
    if (err) {
      return res.status(500).json({err: err.message});
    }
    //Send response
    res.json({name: guest, message: 'Guest added!'});
  });
});

//PUT to update existing guest entries
router.put('/guests/:id', function (req, res) {//id param
  let id = req.params.id;
  let guest = req.body; //data for guest, need body parser for responses
  if (guest && guest._id !== id) {
    return res.status(500).json({err: "IDs do not match"});
  }
  //Mongoose search with options param- says we want new data back
  Guest.findByIdAndUpdate(id, guest, {new: true}, function (err, guest) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    //Send response
    res.json({name: guest, message: 'Guest updated!'});
  });
});

//Delete route to delete guest

//Export router
module.exports = router;
module.exports = guest;
