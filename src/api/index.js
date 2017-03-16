//API CONTROLLER

'use strict';

const express = require('express';
const guests = require('../../mock/guests.json');

const router = express.Router();

router.get('/guests', function(req, res) {
  res.json({guests: guests});
});

//POST
//PUT
//delete

module.exports = router;
