//Application Coonection to database

'use strict';

const mongoose = require('mongoose');
const config = require('./config');


mongoose.connect(`${config.db.host}/${config.db.dbName}`);

const db = mongoose.connection;

//Error handling with db
db.on("error", function(err){
  console.log('Eek! Your Mongodb is not connected!');
});
//DB handling with NO ERRORS
db.once("open", function(){
  console.log('Nice. Your Mongodb connection is looking good!');
  //All db communication goes here

  db.close();
});

// mongoose.connect('mongodb://localhost/guestlist', function(error){
//   if(error){
//     console.log("Eek! Your Mongodb is not connected!");
//   } else {
//     console.log("Nice. Your Mongodb connection is looking good!");
//   }
// });




module.exports = mongoose;
