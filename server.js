//server.js

// ***** MODULES *****
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
//const methodOverride = require('method-override');

// ***** CONFIGURATION *****
// config files
const db = require('./config/db');

// set port

// connect to Mongodb
// mongoose.connect(db.url);

//get all data(guests) of the body (pOST) parameter

// **** Parse *****

//parse application json
app.use(bodyParser.json());

//parse application/ vnd.api as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ==================================================
require('./app/routes')(app); // configure our routes
// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;  
