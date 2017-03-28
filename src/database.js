//Application Coonection to database

'use strict';

const mongoose = require('mongoose');
const config = require('./config');


mongoose.connect(`${config.db.host}/${config.db.dbName}`);

const db = mongoose.connection;

//Error handling with db
db.on("error", function(err){
  console.log('Failed! No connection to Mongodb!');
});
//DB handling with NO ERRORS
db.once("open", function(){
  console.log('Success! Connected to Mongodb!');
  //All db communication goes here

  db.close();
});




module.exports = mongoose;
