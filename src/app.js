//Entry Point for Guest List App
'use strict'

const express = require('express');
const router = require('./api'); //Require API Module (mounted to router)

const app = express();
//Connect database to app
require('./database');
//Connect seed data
require('./seed');

//Serving entire Public folder (the Face of the App) at root url
app.use('/', express.static('public'));

//API Name Space added to router, so it'll be automatically prefixed
app.use('/api', router);

app.listen(8080, function() {
  console.log("Bears. Beets. Battlestar Galaxtica...and server is running on port 8080!");
});
