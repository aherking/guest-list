//Application Coonection to database

'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/guestlist');

const db = mongoose.connection;

//Error handling with db
db.on("error", function(err){
  console.log('Failed connecting to Mongodb!');
});
//DB handling with NO ERRORS
db.once("open", function(){
  console.log('Success! Connected to Mongodb!');
  //All db communication goes here
  const Guest = mongoose.model('Guest', guestSchema);
  db.close();
});




module.exports = mongoose;
