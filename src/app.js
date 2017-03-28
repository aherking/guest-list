
'use strict'

const express = require('express');
const config  = require('./config');
const parser = require('body-parser');
const router = require('./api'); //Require API Module (mounted to router)
const path = require('path');

const app = express();
//Connect database to app
require('./database');
//Connect seed data
require('./seed');

// let jsonCheck = function(req, res){
//   if (req.body) {
//     console.log(req.body.name);
//   } else {
//     console.log("No Name!");
//   }
//   next();
// }
require('./models/guest.js');

//Serving entire Public folder (the Face of the App) at root url
app.use('/', express.static('public'));
app.use(parser.json());//JSON body-parser
app.use(parser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(jsonCheck);
app.use(express.static(path.join(__dirname, '../public')));
app.use('/node_modules',express.static(path.join(__dirname, '../node_modules')));


//API Name Space added to router, so it'll be automatically prefixed
app.use('/api', router);

app.listen(8080, function() {
  console.log("Bears. Beets. Battlestar Galactica...and server is running on port 8080!");
});
