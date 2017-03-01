// ***** Main File for Application ***** //
'use strict'; //Throws error, for testing

// ***** MODULES *****
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const path        = require('path');
const mongoose    = require('mongoose');
//const methodOverride = require('method-override');

// ***** CONFIGURATION *****
// config files
//const db = require('./config/db');

//Route for root of server using Location '/', request and response
app.get('/', function(req, res){
  res.send("<h1>Guest List</h1>");
});

//Set Port Server 3000 or 8080
app.listen(8080, function(){
  console.log("Frontend Server is running on port 8080!");
});

// connect to Mongodb  ---- mongoose.connect(db.url);
mongoose.connect(`mongodb://${config.db.host}/${config.db.dbname}`);

//get all data(guests) of the body (POST) parameter

// **** Parse *****

//parse application json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse application/ vnd.api as json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
//app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location
app.use(express.static(path.join(__dirname, '../public')));
app.use('/node_modules',express.static(path.join(__dirname, '../node_modules')));



// expose app
exports = module.exports = app;
