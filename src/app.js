
'use strict'

const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./api'); //Require API Module (mounted to router)

const app = express();

let jsonCheck = function(req, res){
  if (req.body) {
    console.log(req.body.name);
  } else {
    console.log("No Name!");
  }
  next();
}

//Serving entire Public folder (the Face of the App) at root url
app.use('/', express.static('public'));
app.use(jsonCheck);
app.use(parser.json());//JSON body-parser
app.use(jsonCheck);


// mongoose.connect("mongodb://localhost:27017/guestlist");
// const db = mongoose.connection;
//Connect database to app
require('./database');
//Connect seed data
require('./seed');



//API Name Space added to router, so it'll be automatically prefixed
app.use('/api', router);


app.listen(8080, function() {
  console.log("Bears. Beets. Battlestar Galactica...and server is running on port 8080!");
});
